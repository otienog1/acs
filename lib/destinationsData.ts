export interface DestinationEntry {
    slug: string
    name: string
    country: 'Kenya' | 'Tanzania'
    kicker: string
    summary: string
    overview: string[]
    highlights: string[]
    bestTime: string
    wildlife: string[]
    relatedExperienceSlugs: string[]
    image: string
    hero: string
    thumb: string
}

export const DESTINATIONS: DestinationEntry[] = [
    {
        slug: 'masai-mara',
        name: 'Masai Mara',
        country: 'Kenya',
        kicker: "The Stage for the Great Migration",
        summary: "Kenya's most storied reserve, where the wildebeest migration meets the highest density of lion on the continent.",
        overview: [
            'The Masai Mara needs little introduction. Each year between roughly July and October, over a million wildebeest and zebra cross its rivers in pursuit of rain-fed grass, drawing crocodile, lion, and cheetah to the water’s edge in scenes that have come to define the popular idea of an African safari.',
            'But the Mara rewards a longer look. Beyond the crossings, its private conservancies — bordering the reserve proper — offer walking safaris, night drives, and off-road access that the national reserve itself does not permit, along with a fraction of the vehicle traffic.',
        ],
        highlights: [
            'The Great Migration’s river crossings at the Mara and Talek',
            'Among the highest recorded densities of lion in Africa',
            'Private conservancies bordering the reserve for walking and night drives',
            'Strong resident game viewing outside the migration season',
        ],
        bestTime: 'July to October for the river crossings; the bordering conservancies reward a visit in any month.',
        wildlife: ['Lion', 'Cheetah', 'Wildebeest', 'Leopard', 'Elephant', 'Nile Crocodile'],
        relatedExperienceSlugs: ['best-of-kenya-safari', 'big-five-safari', 'highlights-of-kenya'],
        image: '/images/destinations/masai-mara-card.webp',
        hero: '/images/destinations/masai-mara-hero.webp',
        thumb: '/images/thumbs/masai-mara.webp',
    },
    {
        slug: 'amboseli',
        name: 'Amboseli',
        country: 'Kenya',
        kicker: 'Elephants Beneath Kilimanjaro',
        summary: "Open plains and swamp-fed grassland beneath Africa's highest peak, home to some of the largest elephant herds left on the continent.",
        overview: [
            'Amboseli sits in the rain shadow of Kilimanjaro, and on a clear morning the mountain appears to float above the plain — snow-capped and improbably close. The park’s swamps, fed by underground rivers off the mountain, sustain grass through the dry season and draw elephant herds that have been studied continuously since the 1970s, some individuals recognisable by name.',
            'The photography here has a clarity few other parks offer: flat terrain, short grass, and a backdrop that turns even a distant herd into a composition.',
        ],
        highlights: [
            "Some of Africa's largest and most habituated elephant herds",
            'Uninterrupted views of Kilimanjaro on clear mornings',
            'Long-term elephant research dating to the 1970s',
            'Maasai community conservancies bordering the park',
        ],
        bestTime: 'June to October and January to February, when skies are clearest and Kilimanjaro is most often visible.',
        wildlife: ['Elephant', 'Lion', 'Buffalo', 'Giraffe', 'Hippo', '400+ Bird Species'],
        relatedExperienceSlugs: ['big-five-safari'],
        image: '/images/destinations/amboseli-card.webp',
        hero: '/images/destinations/amboseli-hero.webp',
        thumb: '/images/thumbs/amboseli.webp',
    },
    {
        slug: 'samburu',
        name: 'Samburu',
        country: 'Kenya',
        kicker: "Kenya's Northern Frontier",
        summary: "A drier, wilder Kenya, home to species found nowhere else in the country.",
        overview: [
            'North of the equator, the country changes character. Samburu’s doum palms and red earth support a set of arid-adapted species — Grevy’s zebra, reticulated giraffe, Beisa oryx, and gerenuk — collectively known as the Northern Specials, found in few other Kenyan reserves.',
            'The Ewaso Ng’iro River is the region’s lifeline, drawing elephant and crocodile to its banks, and the Samburu people who share this land maintain a visible, living culture rarely folded into a safari itinerary elsewhere.',
        ],
        highlights: [
            "The Northern Specials — Grevy's zebra, reticulated giraffe, Beisa oryx, gerenuk",
            'The Ewaso Ng’iro River, a wildlife magnet through the dry season',
            "Noticeably lower visitor numbers than Kenya's southern reserves",
            'Samburu cultural encounters, by invitation rather than performance',
        ],
        bestTime: 'June to October and January to March, during the drier months when wildlife concentrates along the river.',
        wildlife: ["Grevy's Zebra", 'Reticulated Giraffe', 'Elephant', 'Leopard', 'Beisa Oryx', 'Gerenuk'],
        relatedExperienceSlugs: ['best-of-kenya-safari', 'highlights-of-kenya'],
        image: '/images/destinations/samburu-card.webp',
        hero: '/images/destinations/samburu-hero.webp',
        thumb: '/images/thumbs/samburu.webp',
    },
    {
        slug: 'laikipia',
        name: 'Laikipia',
        country: 'Kenya',
        kicker: 'Conservation, Privately Held',
        summary: 'A patchwork of private conservancies north-west of Mount Kenya, where landowners and wildlife share the same ledger.',
        overview: [
            'Laikipia isn’t a single park but a network of privately and communally owned conservancies, run by ranchers, communities, and conservation trusts who have chosen wildlife tourism as land use. The result is some of the lowest visitor density in Kenya, along with off-road driving, night drives, and walking safaris that the national reserves don’t allow.',
            "It's also a stronghold for species under pressure elsewhere — including one of Kenya's largest black rhino populations, protected within monitored sanctuaries.",
        ],
        highlights: [
            "A leading population of black and white rhino, closely protected",
            'Night drives, walking safaris, and off-road access',
            'Some of the lowest visitor density anywhere in Kenya',
            'Working conservancies where tourism funds conservation directly',
        ],
        bestTime: 'Rewarding in any season; the drier months (June–October, January–March) best suit walking safaris.',
        wildlife: ['Black Rhino', 'African Wild Dog', 'Elephant', 'Lion', "Grevy's Zebra", 'Leopard'],
        relatedExperienceSlugs: [],
        image: '/images/destinations/laikipia-card.webp',
        hero: '/images/destinations/laikipia-hero.webp',
        thumb: '/images/thumbs/laikipia.webp',
    },
    {
        slug: 'lake-nakuru',
        name: 'Lake Nakuru',
        country: 'Kenya',
        kicker: 'A Rift Valley Sanctuary',
        summary: 'A fenced rhino sanctuary and soda lake in the Rift Valley, a compact contrast to the open reserves either side of it.',
        overview: [
            'Lake Nakuru National Park is small by Kenyan standards and entirely fenced — a deliberate design that has made it one of the country’s most secure sanctuaries for both black and white rhino. The lake itself, alkaline and shallow, has at times drawn flamingos in numbers large enough to turn its shoreline pink, though populations shift year to year with water levels.',
            'Euphorbia forest and acacia woodland ring the water, and the park’s tree-climbing lions — a local quirk rather than a distinct subspecies — are one of its more talked-about residents.',
        ],
        highlights: [
            'A secure, fenced sanctuary for black and white rhino',
            'A Rift Valley soda lake, seasonally home to large flamingo flocks',
            "The park's tree-climbing lions",
            'A compact park well suited to a single, focused day',
        ],
        bestTime: 'Year-round; flamingo numbers vary with lake levels and are best checked closer to travel.',
        wildlife: ['Black Rhino', 'White Rhino', 'Lion', "Rothschild's Giraffe", 'Flamingo', 'Waterbuck'],
        relatedExperienceSlugs: ['best-of-kenya-safari', 'big-five-safari', 'highlights-of-kenya'],
        image: '/images/destinations/lake-nakuru-card.webp',
        hero: '/images/destinations/lake-nakuru-hero.webp',
        thumb: '/images/thumbs/lake-nakuru.webp',
    },
    {
        slug: 'serengeti',
        name: 'Serengeti',
        country: 'Tanzania',
        kicker: 'The Endless Plain',
        summary: "The word means 'endless plain' in Maa, and little else about the Serengeti asks for embellishment.",
        overview: [
            'The Serengeti is the stage for the largest single migration of land mammals on earth — over a million wildebeest moving in a rough, rain-driven circuit through Tanzania and into Kenya’s Mara and back. But the ecosystem holds its own outside the herds: resident lion prides in the Seronera Valley, cheetah on the short-grass plains near Ndutu, and leopard in the riverine forest along the Grumeti.',
            'Its scale is the thing that’s hard to convey until you’re in it — horizon in every direction, granite kopjes rising out of the grassland like islands, and a sense that the migration is simply the most visible layer of something much larger.',
        ],
        highlights: [
            'The Great Migration’s calving season on the southern plains (December–March)',
            'Year-round resident predators — lion, leopard, and cheetah',
            'The Grumeti and Mara River crossings (May–July, August–October)',
            'Ancient granite kopjes rising from open grassland',
        ],
        bestTime: 'Rewarding year-round, with different chapters of the migration in view — December to March for calving, June to October for the river crossings.',
        wildlife: ['Wildebeest', 'Lion', 'Cheetah', 'Leopard', 'Zebra', 'Nile Crocodile'],
        relatedExperienceSlugs: ['big-five-safari', 'best-of-tanzania'],
        image: '/images/destinations/serengeti-card.webp',
        hero: '/images/destinations/serengeti-hero.webp',
        thumb: '/images/thumbs/serengeti.webp',
    },
    {
        slug: 'ngorongoro-crater',
        name: 'Ngorongoro Crater',
        country: 'Tanzania',
        kicker: 'A World Within a Wall',
        summary: 'The largest intact volcanic caldera on earth, its floor holding one of the densest concentrations of wildlife in Africa.',
        overview: [
            'Around two and a half million years ago, a volcano larger than Kilimanjaro collapsed in on itself, leaving a crater floor of roughly 260 square kilometres, walled in by a rim some 600 metres high. Almost everything that lives on it, stays on it — a near-closed ecosystem that concentrates game in a way few other places can.',
            "It's also one of the last strongholds for the endangered black rhino in Tanzania, and one of the more reliable places on the continent to complete a Big Five sighting within a single descent to the crater floor.",
        ],
        highlights: [
            "One of Africa's densest wildlife concentrations, in a near-closed ecosystem",
            'A stronghold for the endangered black rhino',
            'Descents to the crater floor from lodges on the rim',
            'Maasai communities still grazing livestock within the wider conservation area',
        ],
        bestTime: "Rewarding year-round — the crater's resident wildlife makes any season worthwhile.",
        wildlife: ['Black Rhino', 'Lion', 'Elephant', 'Spotted Hyena', 'Flamingo', 'Buffalo'],
        relatedExperienceSlugs: ['big-five-safari', 'best-of-tanzania'],
        image: '/images/destinations/ngorongoro-crater-card.webp',
        hero: '/images/destinations/ngorongoro-crater-hero.webp',
        thumb: '/images/thumbs/ngorongoro-crater.webp',
    },
    {
        slug: 'tarangire',
        name: 'Tarangire',
        country: 'Tanzania',
        kicker: 'The Elephant and the Baobab',
        summary: "Northern Tanzania's quiet alternative to the main circuit, defined by ancient baobabs and some of the region's largest elephant herds.",
        overview: [
            'Tarangire is often the first stop on a northern Tanzania circuit and, for many, the most underrated. The Tarangire River is the dry-season lifeline for the region’s wildlife, drawing elephant herds that can number in the hundreds, set against a landscape of baobabs that can be older than the parks around them.',
            'Visitor numbers are markedly lower than the Serengeti or Ngorongoro, and the park rewards a slower pace — game drives that linger rather than search.',
        ],
        highlights: [
            "Some of Tanzania's largest elephant herds, concentrated along the river in the dry season",
            'Ancient baobab trees, some many centuries old',
            'Noticeably lower visitor numbers than the main northern circuit parks',
            'Strong dry-season predator sightings, including tree-climbing lions',
        ],
        bestTime: 'June to October, the dry season, when wildlife concentrates along the Tarangire River.',
        wildlife: ['Elephant', 'Lion', 'Fringe-eared Oryx', 'Leopard', 'Baobab-Dependent Birdlife', 'African Rock Python'],
        relatedExperienceSlugs: ['best-of-tanzania'],
        image: '/images/destinations/tarangire-card.webp',
        hero: '/images/destinations/tarangire-hero.webp',
        thumb: '/images/thumbs/tarangire.webp',
    },
    {
        slug: 'zanzibar',
        name: 'Zanzibar',
        country: 'Tanzania',
        kicker: 'Where the Safari Ends',
        summary: 'A spice island off the Tanzanian coast, and the customary final chapter after the dust of the northern circuit.',
        overview: [
            'Zanzibar — Unguja, to give it its proper name — is where most of our Tanzania itineraries end. After the Serengeti and Ngorongoro, the east coast’s white sand and warm, reef-protected water are a deliberate change of register: swimming, diving, and slow mornings after early starts in the bush.',
            'Stone Town, the old quarter of Zanzibar City, carries the layered history of Omani, Persian, Indian, and African trade, and is worth a day on its own before the coast.',
        ],
        highlights: [
            'Reef-protected, warm water along the east coast',
            'Stone Town, a UNESCO World Heritage Site',
            'Spice plantations inland from the coast',
            'A short flight from Arusha or the Serengeti’s airstrips',
        ],
        bestTime: 'June to October and December to February, avoiding the long and short rains.',
        wildlife: ['Green Sea Turtle', 'Zanzibar Red Colobus (Jozani Forest)', 'Reef Fish', 'Dolphin'],
        relatedExperienceSlugs: ['best-of-tanzania'],
        image: '/images/destinations/zanzibar-card.webp',
        hero: '/images/destinations/zanzibar-hero.webp',
        thumb: '/images/thumbs/zanzibar.webp',
    },
]

export const getDestinationBySlug = (slug: string) => DESTINATIONS.find((d) => d.slug === slug)
