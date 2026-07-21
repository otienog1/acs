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
    image: d.image,
}))

const TANZANIA_LINKS: NavLink[] = DESTINATIONS.filter((d) => d.country === 'Tanzania').map((d) => ({
    label: d.name,
    href: `/destinations/${d.slug}`,
    image: d.image,
}))

const SAFARI_STYLE_LINKS: NavLink[] = [
    {
        label: 'Classic Safaris',
        href: '/experience',
        image: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?auto=format&fit=crop&w=200&q=80',
    },
    {
        label: 'Photography Safaris',
        href: '/experience/photography-safaris',
        image: 'https://images.unsplash.com/photo-1551909175-8a68da93d5f9?auto=format&fit=crop&w=200&q=80',
    },
    {
        label: 'Family Safaris',
        href: '/experience/family-safaris',
        image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=200&q=80',
    },
    {
        label: 'Honeymoons & Private Journeys',
        href: '/experience/honeymoons-private-journeys',
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=200&q=80',
    },
    {
        label: 'Walking & Cultural Safaris',
        href: '/experience/walking-cultural-safaris',
        image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=200&q=80',
    },
]

const SIGNATURE_ITINERARY_LINKS: NavLink[] = content.experiences.map((exp) => ({
    label: exp.acf.title,
    href: `/experience/${exp.acf.slug}`,
    image: exp.acf.image,
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
                image: 'https://images.unsplash.com/photo-1551009175-8a68da93d5f9?auto=format&fit=crop&w=900&q=80',
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
                image: 'https://images.unsplash.com/photo-1551909175-8a68da93d5f9?auto=format&fit=crop&w=900&q=80',
            },
            viewAll: { label: 'All Safaris', href: '/experience' },
        },
    },
    { key: 'about', label: 'About', href: '/about' },
]
