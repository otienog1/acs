import content from '@/lib/content.json'

async function getPage(id: number) {
    const map: Record<number, any> = {
        5:  { acf: content.home },
        8:  { acf: content.about },
        12: { acf: content.destinations },
        14: { acf: content.experienceIndex },
    }
    const page = map[id]
    if (!page) throw new Error(`No content found for page id ${id}`)
    return page
}

async function getExperience(id: number) {
    const map: Record<number, any> = {
        165: content.experiences[0],
        166: content.experiences[1],
        167: content.experiences[2],
        168: content.experiences[3],
    }
    const experience = map[id]
    if (!experience) throw new Error(`No content found for experience id ${id}`)
    return experience
}

async function getExperiences() {
    return content.experiences
}

export { getPage, getExperience, getExperiences }
