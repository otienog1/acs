import { notFound } from 'next/navigation'
import { DESTINATIONS, getDestinationBySlug } from '@/lib/destinationsData'
import DestinationDetail from '@/components/destinations/DestinationDetail'

type Params = Promise<{ slug: string }>

export const generateStaticParams = () => DESTINATIONS.map((d) => ({ slug: d.slug }))

export const generateMetadata = async ({ params }: { params: Params }) => {
    const { slug } = await params
    const destination = getDestinationBySlug(slug)
    if (!destination) return {}
    return {
        title: `${destination.name}, ${destination.country} — African Citril Safaris`,
        description: destination.summary,
    }
}

const DestinationPage = async ({ params }: { params: Params }) => {
    const { slug } = await params
    const destination = getDestinationBySlug(slug)
    if (!destination) notFound()

    return <DestinationDetail destination={destination} />
}

export default DestinationPage
