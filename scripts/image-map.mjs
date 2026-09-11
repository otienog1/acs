// Maps the Cropframe export (data_manifest.json) onto the site's image slots.
//
// The export ships one file per slot per breakpoint -- 134 files cut from 36 source
// photos -- while the site renders one file per slot. This map goes back to the
// original assets and crop rectangles and regenerates exactly one correctly composed
// image per slot, at the largest size that slot is ever rendered at.
//
// `crop` values are copied verbatim from data_manifest.json (x, y, w, h in source
// pixels) and are clamped to the source bounds at generation time. Where a slot was
// captured at both breakpoints the 1920 crop wins: it is the wider box, and every slot
// is drawn with object-fit: cover. Entries marked `derive: <ratio>` sit behind a hover
// or a route the scan never opened, so their crop is computed from the source with
// sharp's attention strategy.
//
// Regenerate with: node scripts/generate-images.mjs

export const HERO = [1368, 539]      // 1440x630 / 1920x756 page hero
export const HERO_WIDE = [1368, 462] // 1440x540 / 1920x648 experience hero
export const CARD = [730, 913]       // 4:5 destination / journey card
export const CARD_SM = [682, 853]    // 4:5 card, capped by its source width
export const UPRIGHT = [816, 1088]   // 3:4 camp / tailored card
export const JOURNAL = [1099, 824]   // 4:3 journal card
export const THUMB = [96, 96]        // 1:1 nav row thumbnail
export const FEATURED = [600, 800]   // 3:4 mega-menu featured panel

export const IMAGES = [
    // -- Home ------------------------------------------------------------
    { out: 'home/hero', asset: '2d43eacc.jpg', crop: [33, 2, 1335, 751], size: [1335, 751] },
    // Was a hand-picked derive before this scan, to keep the Great Migration journal
    // photo from turning up twice on one page. The re-crop assigns 0c7ac809 outright,
    // so the slot now carries a real crop of the same asset.
    { out: 'home/conservation', asset: '0c7ac809.jpg', crop: [0, 159, 1280, 645], size: [1280, 645] },
    { out: 'home/cta', asset: 'f7c33c9d.jpg', crop: [0, 180, 1280, 385], size: [1280, 385] },

    // Camps Chosen, Not Just Booked
    { out: 'home/camp-private-tented', asset: 'dcb6ada1.jpg', crop: [105, 0, 338, 451], size: [338, 451] },
    { out: 'home/camp-boutique-lodges', asset: 'd7a50ae2.jpg', crop: [204, 0, 958, 1277], size: UPRIGHT },
    { out: 'home/camp-villas', asset: '699d6d4d.jpg', crop: [691, 0, 1251, 1668], size: UPRIGHT },
    { out: 'home/camp-mobile-migration', asset: 'b79afc32.jpg', crop: [256, 0, 512, 683], size: [512, 683] },

    // Every Journey Begins With a Question
    { out: 'home/tailored-photography', asset: 'c5b5126c.jpg', crop: [395, 0, 613, 817], size: [613, 817] },
    { out: 'home/tailored-family', asset: 'ee1aa37b.webp', crop: [828, 124, 1076, 1435], size: UPRIGHT },
    { out: 'home/tailored-honeymoons', asset: 'fb069855.jpg', crop: [400, 0, 800, 1067], size: [800, 1067] },
    { out: 'home/tailored-walking', asset: '90751cee.jpg', crop: [239, 0, 600, 800], size: [600, 800] },

    // -- Journal ---------------------------------------------------------
    { out: 'journal/great-migration', asset: 'ea2237db.jpg', crop: [75, 0, 1216, 912], size: JOURNAL },
    { out: 'journal/conservancy-model', asset: '60255fd3.jpg', crop: [86, 0, 1137, 853], size: JOURNAL },
    { out: 'journal/packing-for-the-bush', asset: '639fb7a3.jpg', crop: [65, 0, 1216, 912], size: JOURNAL },

    // -- Experiences -----------------------------------------------------
    // Cards use the home-page picks: four distinct photos, one per journey. Heroes use
    // each journey's own 1920x648 crop -- highlights-of-kenya was derived before this
    // scan and now has a real one.
    { out: 'experiences/best-of-kenya-safari-card', asset: '9b2356c2.jpg', crop: [38, 0, 682, 853], size: CARD_SM },
    { out: 'experiences/best-of-kenya-safari-hero', asset: '2e6451e3.jpg', crop: [0, 321, 1368, 462], size: HERO_WIDE },
    { out: 'experiences/best-of-tanzania-card', asset: 'e8cc2735.jpg', crop: [153, 0, 730, 913], size: CARD },
    { out: 'experiences/best-of-tanzania-hero', asset: '8f5d4312.jpg', crop: [0, 212, 1368, 462], size: HERO_WIDE },
    { out: 'experiences/big-five-safari-card', asset: '8c615ec8.jpg', crop: [0, 9, 912, 1140], size: [912, 1140] },
    { out: 'experiences/big-five-safari-hero', asset: 'db56d1f4.jpg', crop: [0, 146, 1368, 462], size: HERO_WIDE },
    { out: 'experiences/highlights-of-kenya-card', asset: '81ae5814.jpg', crop: [319, 0, 730, 913], size: CARD },
    { out: 'experiences/highlights-of-kenya-hero', asset: 'ca3b25de.jpg', crop: [0, 166, 1368, 462], size: HERO_WIDE },

    // -- Destinations ----------------------------------------------------
    { out: 'destinations/masai-mara-card', asset: '25148284.jpg', crop: [152, 0, 682, 853], size: CARD_SM },
    { out: 'destinations/masai-mara-hero', asset: '3abbf1b6.jpg', crop: [0, 175, 1280, 504], size: [1280, 504] },
    { out: 'destinations/amboseli-card', asset: '31209ba7.jpg', crop: [28, 0, 682, 853], size: CARD_SM },
    // Amboseli was only captured at 1440, so this hero keeps the narrower crop.
    { out: 'destinations/amboseli-hero', asset: '31209ba7.jpg', crop: [-2, 137, 1282, 561], size: [1282, 561] },
    { out: 'destinations/samburu-card', asset: '215b27ae.jpg', crop: [0, 0, 730, 913], size: CARD },
    // The re-crop moved this hero onto e8cc2735, which also carries the Best of Tanzania
    // card. Reassign the slot in Cropframe if the repeat reads badly.
    { out: 'destinations/samburu-hero', asset: 'e8cc2735.jpg', crop: [0, 127, 1368, 539], size: HERO },
    { out: 'destinations/laikipia-card', asset: '2b301e6c.jpg', crop: [234, 0, 682, 853], size: CARD_SM },
    { out: 'destinations/laikipia-hero', asset: '2b301e6c.jpg', crop: [0, 331, 1280, 504], size: [1280, 504] },
    { out: 'destinations/lake-nakuru-card', asset: '4243401c.jpg', crop: [376, 0, 682, 853], size: CARD_SM },
    { out: 'destinations/lake-nakuru-hero', asset: '4243401c.jpg', crop: [0, 7, 1280, 504], size: [1280, 504] },
    { out: 'destinations/serengeti-card', asset: '8f5d4312.jpg', crop: [321, 0, 730, 913], size: CARD },
    // /destinations/serengeti was scanned this time, so this hero is a real crop.
    { out: 'destinations/serengeti-hero', asset: '8f5d4312.jpg', crop: [0, 155, 1368, 539], size: HERO },
    { out: 'destinations/ngorongoro-crater-card', asset: '69318ea4.jpg', crop: [319, 0, 730, 913], size: CARD },
    { out: 'destinations/ngorongoro-crater-hero', asset: '48eaf606.jpg', crop: [0, 202, 1368, 539], size: HERO },
    { out: 'destinations/tarangire-card', asset: 'd45447ad.jpg', crop: [564, 0, 730, 913], size: CARD },
    { out: 'destinations/tarangire-hero', asset: 'd45447ad.jpg', crop: [0, 204, 1368, 539], size: HERO },
    { out: 'destinations/zanzibar-card', asset: '4f119287.jpg', crop: [344, 0, 730, 913], size: CARD },
    { out: 'destinations/zanzibar-hero', asset: '4f119287.jpg', crop: [0, 64, 1368, 539], size: HERO },

    // -- Countries -------------------------------------------------------
    // Panels come from the /destinations scan. /destinations/kenya and
    // /destinations/tanzania are still never scanned, so their heroes stay derived.
    { out: 'countries/kenya-panel', asset: '2e6451e3.jpg', crop: [0, 9, 1368, 798], size: [1368, 798] },
    { out: 'countries/tanzania-panel', asset: '71ce418c.jpg', crop: [0, 73, 1368, 798], size: [1368, 798] },
    // 71814503 was the Kenya panel before the re-crop and is now otherwise unused, so
    // the hero takes it rather than repeating the panel's own photo.
    { out: 'countries/kenya-hero', asset: '71814503.jpg', derive: 1368 / 539, size: HERO },
    { out: 'countries/tanzania-hero', asset: '71ce418c.jpg', derive: 1368 / 539, size: HERO },

    // -- About -----------------------------------------------------------
    { out: 'about/hero', asset: 'ad0e8db9.jpg', crop: [0, 177, 1368, 539], size: HERO },
    { out: 'about/our-story', asset: '7f3d5377.jpg', crop: [0, 24, 1368, 863], size: [1368, 863] },
    { out: 'about/sundowner', asset: '48eaf606.jpg', crop: [0, 398, 1368, 333], size: [1368, 333] },

    // -- Section heroes --------------------------------------------------
    { out: 'pages/destinations-hero', asset: 'b821275b.jpg', crop: [0, 213, 1368, 539], size: HERO },
    { out: 'pages/experience-hero', asset: '90751cee.jpg', crop: [0, 205, 1261, 497], size: [1261, 497] },

    // -- Navigation ------------------------------------------------------
    // Mega-menu art is never open during a scan, so every entry here is derived. Each
    // style row deliberately reuses the photo of the page it links to.
    { out: 'nav/featured-destinations', asset: 'b821275b.jpg', derive: 3 / 4, size: FEATURED },
    { out: 'nav/featured-safaris', asset: '8c615ec8.jpg', derive: 3 / 4, size: FEATURED },
    { out: 'nav/style-classic', asset: 'e8cc2735.jpg', derive: 1, size: THUMB },
    { out: 'nav/style-photography', asset: 'c5b5126c.jpg', derive: 1, size: THUMB },
    { out: 'nav/style-family', asset: 'ee1aa37b.webp', derive: 1, size: THUMB },
    { out: 'nav/style-honeymoons', asset: 'fb069855.jpg', derive: 1, size: THUMB },
    { out: 'nav/style-walking', asset: '90751cee.jpg', derive: 1, size: THUMB },
]

// Square nav thumbnails, cut from the centre of the card each one sits beside, so the
// 48x48 rows in the mega menu do not pull down a full-size card image.
export const THUMBS_FROM = [
    'destinations/masai-mara-card',
    'destinations/amboseli-card',
    'destinations/samburu-card',
    'destinations/laikipia-card',
    'destinations/lake-nakuru-card',
    'destinations/serengeti-card',
    'destinations/ngorongoro-crater-card',
    'destinations/tarangire-card',
    'destinations/zanzibar-card',
    'experiences/best-of-kenya-safari-card',
    'experiences/best-of-tanzania-card',
    'experiences/big-five-safari-card',
    'experiences/highlights-of-kenya-card',
]
