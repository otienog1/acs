// Regenerates public/images/** from the Cropframe source assets.
//
//   node scripts/generate-images.mjs [--src <cropframe project dir>]
//
// Requires the Cropframe project the site was scanned with. Defaults to
// ~/.cropframe/projects/afircan-citril. The generated files are committed, so this
// only needs re-running when the crop map changes.

import sharp from 'sharp'
import fs from 'node:fs/promises'
import path from 'node:path'
import os from 'node:os'
import { IMAGES, THUMBS_FROM, THUMB } from './image-map.mjs'

const argSrc = process.argv.indexOf('--src')
const SRC = argSrc === -1
    ? path.join(os.homedir(), '.cropframe', 'projects', 'afircan-citril')
    : process.argv[argSrc + 1]

const OUT = path.join(process.cwd(), 'public', 'images')
const QUALITY = 82

const clampCrop = ([x, y, w, h], meta) => {
    const left = Math.max(0, Math.min(Math.round(x), meta.width - 1))
    const top = Math.max(0, Math.min(Math.round(y), meta.height - 1))
    return {
        left,
        top,
        width: Math.max(1, Math.min(Math.round(w), meta.width - left)),
        height: Math.max(1, Math.min(Math.round(h), meta.height - top)),
    }
}

const render = async ({ out, asset, crop, derive, size }) => {
    const src = path.join(SRC, 'assets', asset)
    const dest = path.join(OUT, `${out}.webp`)
    await fs.mkdir(path.dirname(dest), { recursive: true })

    let pipeline = sharp(src)
    const meta = await pipeline.metadata()

    if (crop) {
        const region = clampCrop(crop, meta)
        pipeline = pipeline.extract(region)
    }

    const [w, h] = size
    const buf = await pipeline
        .resize(w, h, {
            fit: 'cover',
            position: derive ? sharp.strategy.attention : 'centre',
            withoutEnlargement: false,
        })
        .webp({ quality: QUALITY, effort: 6 })
        .toBuffer()

    await fs.writeFile(dest, buf)
    return { out, asset, bytes: buf.length, size, derived: Boolean(derive) }
}

const renderThumb = async (from) => {
    const src = path.join(OUT, `${from}.webp`)
    const name = from.replace(/-card$/, '')
    const dest = path.join(OUT, 'thumbs', `${path.basename(name)}.webp`)
    await fs.mkdir(path.dirname(dest), { recursive: true })

    const buf = await sharp(src)
        .resize(THUMB[0], THUMB[1], { fit: 'cover', position: 'centre' })
        .webp({ quality: 80, effort: 6 })
        .toBuffer()

    await fs.writeFile(dest, buf)
    return { out: `thumbs/${path.basename(name)}`, bytes: buf.length }
}

const main = async () => {
    try {
        await fs.access(path.join(SRC, 'assets'))
    } catch {
        console.error(`Cropframe assets not found at ${path.join(SRC, 'assets')}`)
        console.error('Pass the project directory with --src <dir>.')
        process.exit(1)
    }

    const written = []
    for (const entry of IMAGES) written.push(await render(entry))
    for (const from of THUMBS_FROM) written.push(await renderThumb(from))

    const total = written.reduce((sum, f) => sum + f.bytes, 0)
    const derived = written.filter((f) => f.derived)

    for (const f of written) {
        console.log(`${f.out.padEnd(44)} ${String(Math.round(f.bytes / 1024)).padStart(5)} KB${f.derived ? '  (derived crop)' : ''}`)
    }
    console.log(`\n${written.length} files, ${(total / 1024 / 1024).toFixed(2)} MB total, ${derived.length} derived crops.`)
}

main().catch((err) => {
    console.error(err)
    process.exit(1)
})
