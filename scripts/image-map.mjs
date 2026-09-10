// Maps the Cropframe export (data_manifest.json) onto the site's image slots.
//
// The Cropframe export collapses every crop down to one file per *source URL*, so the
// 37 photos that were hand-cropped across 64 slots arrived as only 8 files. This map
// goes back to the original assets and crop rectangles in the manifest and regenerates
// one correctly composed image per slot the site actually renders.
//
// `crop` values are copied from data_manifest.json (x, y, w, h in source pixels) and
// are clamped to the source bounds at generation time. Entries marked `derive: <ratio>`
// had no crop in the manifest -- those slots were not part of the scan -- so the crop
// is computed from the source with sharp's attention strategy.

export const CARD = [730, 912]       // 4:5 journey / experience card
export const REGION = [576, 720]     // 4:5 destination card
export const HERO = [1368, 599]      // 1440x630 page hero
export const HERO_WIDE = [1368, 513] // 1440x540 experience hero
export const UPRIGHT = [576, 768]    // 3:4 camp / tailored card
export const JOURNAL = [779, 584]    // 4:3 journal card
export const THUMB = [96, 96]        // 1:1 nav row thumbnail

export const IMAGES = [
    // -- Home ------------------------------------------------------------
    { out: 'home/hero', asset: '2d43eacc.jpg', crop: [0, 0, 1368, 855], size: [1368, 855] },
    // The manifest crop for this slot reused ea2237db, which is also the Great Migration
    // journal card further down the same page. Swapped to the one conservation-shaped
    // asset the scan left unassigned so the page does not repeat a photo.
    { out: 'home/conservation', asset: '0c7ac809.jpg', derive: 4 / 5, size: [800, 1000] },
    { out: 'home/cta', asset: 'f7c33c9d.jpg', crop: [0, 107, 1280, 533], size: [1280, 533] },

    // Camps Chosen, Not Just Booked
    { out: 'home/camp-private-tented', asset: 'dcb6ada1.jpg', crop: [116, 0, 338, 451], size: [338, 451] },
    { out: 'home/camp-boutique-lodges', asset: 'd7a50ae2.jpg', crop: [745, 0, 958, 1277], size: UPRIGHT },
    { out: 'home/camp-villas', asset: '699d6d4d.jpg', crop: [853, 0, 1251, 1668], size: UPRIGHT },
    { out: 'home/camp-mobile-migration', asset: 'b79afc32.jpg', crop: [256, 0, 512, 683], size: [512, 683] },

    // Every Journey Begins With a Question
    { out: 'home/tailored-photography', asset: 'c5b5126c.jpg', crop: [394, 0, 613, 817], size: UPRIGHT },
    { out: 'home/tailored-family', asset: 'ee1aa37b.webp', crop: [837, 0, 1250, 1667], size: UPRIGHT },
    { out: 'home/tailored-honeymoons', asset: 'fb069855.jpg', crop: [404, 0, 800, 1067], size: UPRIGHT },
    { out: 'home/tailored-walking', asset: '90751cee.jpg', crop: [239, 0, 600, 800], size: UPRIGHT },

    // -- Journal ---------------------------------------------------------
    { out: 'journal/great-migration', asset: 'ea2237db.jpg', crop: [76, 0, 1216, 912], size: JOURNAL },
    { out: 'journal/conservancy-model', asset: '60255fd3.jpg', crop: [71, 0, 1137, 853], size: JOURNAL },
    { out: 'journal/packing-for-the-bush', asset: '639fb7a3.jpg', crop: [76, 0, 1216, 912], size: JOURNAL },

    // -- Experiences -----------------------------------------------------
    // Cards use the home-page picks: four distinct photos, one per journey.
    // Heroes use each journey's own 1440x540 crop.
    { out: 'experiences/best-of-kenya-safari-card', asset: '9b2356c2.jpg', crop: [13, 0, 682, 853], size: [682, 853] },
    { out: 'experiences/best-of-kenya-safari-hero', asset: '2e6451e3.jpg', crop: [0, 278, 1368, 513], size: HERO_WIDE },
    { out: 'experiences/best-of-tanzania-card', asset: 'e8cc2735.jpg', crop: [124, 0, 730, 913], size: CARD },
    { out: 'experiences/best-of-tanzania-hero', asset: '8f5d4312.jpg', crop: [0, 199, 1368, 513], size: HERO_WIDE },
    { out: 'experiences/big-five-safari-card', asset: '8c615ec8.jpg', crop: [0, 5, 912, 1140], size: CARD },
    { out: 'experiences/big-five-safari-hero', asset: 'db56d1f4.jpg', crop: [0, 112, 1368, 513], size: HERO_WIDE },
    { out: 'experiences/highlights-of-kenya-card', asset: '81ae5814.jpg', crop: [319, 0, 730, 913], size: CARD },
    // 2d43eacc is the site's own home hero, so this hero takes the remaining unassigned
    // asset rather than repeating it.
    { out: 'experiences/highlights-of-kenya-hero', asset: 'ca3b25de.jpg', derive: 1368 / 513, size: HERO_WIDE },

    // -- Destinations ----------------------------------------------------
    { out: 'destinations/masai-mara-card', asset: '25148284.jpg', crop: [225, 0, 682, 853], size: REGION },
    { out: 'destinations/masai-mara-hero', asset: '3abbf1b6.jpg', crop: [0, 147, 1280, 560], size: [1280, 560] },
    { out: 'destinations/amboseli-card', asset: '31209ba7.jpg', crop: [105, 0, 682, 853], size: REGION },
    { out: 'destinations/amboseli-hero', asset: '31209ba7.jpg', crop: [-2, 137, 1282, 561], size: [1280, 560] },
    { out: 'destinations/samburu-card', asset: '215b27ae.jpg', crop: [159, 0, 730, 913], size: REGION },
    { out: 'destinations/samburu-hero', asset: '215b27ae.jpg', crop: [0, 99, 1368, 599], size: HERO },
    { out: 'destinations/laikipia-card', asset: '2b301e6c.jpg', crop: [386, 0, 682, 853], size: REGION },
    { out: 'destinations/laikipia-hero', asset: '2b301e6c.jpg', crop: [0, 293, 1280, 560], size: [1280, 560] },
    { out: 'destinations/lake-nakuru-card', asset: '4243401c.jpg', crop: [401, 0, 682, 853], size: REGION },
    { out: 'destinations/lake-nakuru-hero', asset: '4243401c.jpg', crop: [0, 183, 1280, 560], size: [1280, 560] },
    { out: 'destinations/serengeti-card', asset: '8f5d4312.jpg', crop: [319, 0, 730, 913], size: REGION },
    // /destinations/serengeti was scanned without a hero slot, so this crop is derived.
    { out: 'destinations/serengeti-hero', asset: '8f5d4312.jpg', derive: 1368 / 599, size: HERO },
    { out: 'destinations/ngorongoro-crater-card', asset: '69318ea4.jpg', crop: [319, 0, 730, 913], size: REGION },
    { out: 'destinations/ngorongoro-crater-hero', asset: '48eaf606.jpg', crop: [0, 235, 1370, 599], size: HERO },
    { out: 'destinations/tarangire-card', asset: 'd45447ad.jpg', crop: [386, 0, 730, 913], size: REGION },
    { out: 'destinations/tarangire-hero', asset: 'd45447ad.jpg', crop: [0, 157, 1366, 598], size: HERO },
    { out: 'destinations/zanzibar-card', asset: '4f119287.jpg', crop: [319, 0, 730, 913], size: REGION },
    { out: 'destinations/zanzibar-hero', asset: '4f119287.jpg', crop: [0, 35, 1368, 599], size: HERO },

    // -- Countries -------------------------------------------------------
    // Panels use the home-page picks; /destinations/kenya and /destinations/tanzania
    // were never scanned, so their heroes are derived.
    { out: 'countries/kenya-panel', asset: '71814503.jpg', crop: [263, 0, 945, 853], size: [945, 853] },
    { out: 'countries/tanzania-panel', asset: '3abbf1b6.jpg', crop: [42, 8, 934, 843], size: [934, 843] },
    { out: 'countries/kenya-hero', asset: '2e6451e3.jpg', derive: 1368 / 599, size: HERO },
    { out: 'countries/tanzania-hero', asset: '71ce418c.jpg', derive: 1368 / 599, size: HERO },

    // -- About -----------------------------------------------------------
    { out: 'about/hero', asset: 'ad0e8db9.jpg', crop: [0, 181, 1368, 599], size: HERO },
    { out: 'about/our-story', asset: '7f3d5377.jpg', crop: [185, 0, 1024, 912], size: [1024, 912] },
    { out: 'about/sundowner', asset: '48eaf606.jpg', crop: [0, 282, 1368, 460], size: [1368, 460] },

    // -- Section heroes --------------------------------------------------
    { out: 'pages/destinations-hero', asset: 'b821275b.jpg', crop: [0, 178, 1370, 599], size: HERO },
    { out: 'pages/experience-hero', asset: '90751cee.jpg', crop: [0, 219, 1261, 552], size: [1261, 552] },

    // -- Navigation ------------------------------------------------------
    { out: 'nav/featured-destinations', asset: 'b821275b.jpg', derive: 3 / 4, size: [600, 800] },
    { out: 'nav/featured-safaris', asset: '8c615ec8.jpg', derive: 3 / 4, size: [600, 800] },
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
