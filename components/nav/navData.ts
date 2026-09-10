import content from '@/lib/content.json'
import { DESTINATIONS } from '@/lib/destinationsData'

export interface NavLink {
    label: string
    href: string
    image?: string
}

export interface MegaColumn {
    heading: string
    headingHref?: string
    links: NavLink[]
}

export interface MegaConfig {
    columns: MegaColumn[]
    featured: {
        eyebrow: string
        title: string
        blurb: string
        href: string
        image: string
    }
    viewAll: NavLink
}

export interface NavItem {
    key: string
    label: string
    href: string
    mega?: MegaConfig
}

const KENYA_LINKS: NavLink[] = DESTINATIONS.filter((d) => d.country === 'Kenya').map((d) => ({
    label: d.name,
    href: `/destinations/${d.slug}`,
    image: d.thumb,
}))

const TANZANIA_LINKS: NavLink[] = DESTINATIONS.filter((d) => d.country === 'Tanzania').map((d) => ({
    label: d.name,
    href: `/destinations/${d.slug}`,
    image: d.thumb,
}))

const SAFARI_STYLE_LINKS: NavLink[] = [
    {
        label: 'Classic Safaris',
        href: '/experience',
        image: '/images/nav/style-classic.webp',
    },
    {
        label: 'Photography Safaris',
        href: '/experience/photography-safaris',
        image: '/images/nav/style-photography.webp',
    },
    {
        label: 'Family Safaris',
        href: '/experience/family-safaris',
        image: '/images/nav/style-family.webp',
    },
    {
        label: 'Honeymoons & Private Journeys',
        href: '/experience/honeymoons-private-journeys',
        image: '/images/nav/style-honeymoons.webp',
    },
    {
        label: 'Walking & Cultural Safaris',
        href: '/experience/walking-cultural-safaris',
        image: '/images/nav/style-walking.webp',
    },
]

const SIGNATURE_ITINERARY_LINKS: NavLink[] = content.experiences.map((exp) => ({
    label: exp.acf.title,
    href: `/experience/${exp.acf.slug}`,
    image: exp.acf.thumb,
}))

export const COMPANY_LINKS: NavLink[] = [
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
]

export { KENYA_LINKS, TANZANIA_LINKS, SAFARI_STYLE_LINKS, SIGNATURE_ITINERARY_LINKS }

export const NAV_ITEMS: NavItem[] = [
    {
        key: 'destinations',
        label: 'Destinations',
        href: '/destinations',
        mega: {
            columns: [
                { heading: 'Kenya', headingHref: '/destinations/kenya', links: KENYA_LINKS },
                { heading: 'Tanzania', headingHref: '/destinations/tanzania', links: TANZANIA_LINKS },
            ],
            featured: {
                eyebrow: 'Where We Go',
                title: 'Two Countries, Every Landscape That Matters',
                blurb: "From the Mara's open plains to the shadow of Kilimanjaro and the Serengeti's endless horizon.",
                href: '/destinations',
                image: '/images/nav/featured-destinations.webp',
            },
            viewAll: { label: 'All Destinations', href: '/destinations' },
        },
    },
    {
        key: 'safaris',
        label: 'Safaris',
        href: '/experience',
        mega: {
            columns: [
                { heading: 'By Style', links: SAFARI_STYLE_LINKS },
                { heading: 'Signature Itineraries', links: SIGNATURE_ITINERARY_LINKS },
            ],
            featured: {
                eyebrow: 'Composed, Not Packaged',
                title: 'Journeys Built Around You',
                blurb: 'Every itinerary begins as a conversation, not a template.',
                href: '/experience',
                image: '/images/nav/featured-safaris.webp',
            },
            viewAll: { label: 'All Safaris', href: '/experience' },
        },
    },
    { key: 'about', label: 'About', href: '/about' },
]
