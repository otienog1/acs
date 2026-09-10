export interface CountryEntry {
    slug: string
    name: 'Kenya' | 'Tanzania'
    kicker: string
    summary: string
    overview: string[]
    highlights: string[]
    gateway: string
    image: string
}

export const COUNTRIES: CountryEntry[] = [
    {
        slug: 'kenya',
        name: 'Kenya',
        kicker: 'The Birthplace of Safari',
        summary: "Five distinct safari ecosystems within a few hours' drive of one another, and the conservancy model that's reshaping how the continent protects them.",
        overview: [
            'Kenya invented the word safari, and in the century since has kept adding to what it means. From the Masai Mara’s river crossings to the elephant herds of Amboseli and the arid, little-visited north around Samburu, the country holds a range of landscape and wildlife that few nations can match in a space this compact.',
            "It's also home to one of conservation's more interesting experiments: a growing network of private and community conservancies, run by landowners and pastoralist communities, that now protect more wildlife habitat than the national parks themselves.",
        ],
        highlights: [
            "Five distinct safari ecosystems within a few hours' drive of each other",
            'The private conservancy model, pioneered here and expanding across East Africa',
            'Direct flights into Nairobi from most of Europe, the Gulf, and Asia',
            "A well-established network of small camps run by people who've been in the bush for decades",
        ],
        gateway: 'Nairobi (Jomo Kenyatta International Airport)',
        image: '/images/countries/kenya-hero.webp',
    },
    {
        slug: 'tanzania',
        name: 'Tanzania',
        kicker: 'Where the Great Plains Begin',
        summary: 'The largest protected wilderness on the continent, paced more slowly than Kenya, and ending — for most travellers — on the coast of Zanzibar.',
        overview: [
            'Tanzania holds the largest protected wilderness area in Africa, and the numbers involved — the Serengeti’s plains, the Ngorongoro Crater’s walls, the annual movement of more than a million wildebeest — tend to arrive before the country does. It rewards a slower, more spread-out itinerary than Kenya’s tighter geography allows.',
            'Most journeys end on Zanzibar, off the coast near Dar es Salaam — a deliberate change in pace after the dust of the northern circuit, and reason enough on its own for many travellers to visit.',
        ],
        highlights: [
            'The largest protected wilderness area on the continent',
            "The Great Migration's Serengeti chapter, in view for most of the year",
            "Ngorongoro Crater's near-closed ecosystem, one of Africa's densest",
            'A direct route from the northern safari circuit to the beaches of Zanzibar',
        ],
        gateway: 'Kilimanjaro International Airport, near Arusha',
        image: '/images/countries/tanzania-hero.webp',
    },
]

export const getCountryBySlug = (slug: string) => COUNTRIES.find((c) => c.slug === slug)
