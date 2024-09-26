import { getPage } from "@/components/page"
import Image from "next/image"
import { Destination } from "@/lib/types"
import Link from "next/link"

const Destinations = async () => {
    const page = await getPage(12)

    return (
        <div className="container max-w-screen-xl mx-auto py-12">
            <h1 className="font-display font-bold text-4xl mb-20 tracking-wider text-center">
                {page.acf.title}
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pb-12">
                {page.acf.destinations.map((item: { destination: Destination }, index: number) => (
                    <DestinationCard key={index} destination={item.destination} />
                ))}
            </div>
        </div>
    )
}

const DestinationCard = ({ destination }: { destination: Destination }) => (
    <Link href={`/destinations/${destination.id}`} passHref>
        <div className="relative h-56 overflow-hidden group shadow-md hover:shadow-lg transition-shadow duration-300">
            <Image
                src={destination.image}
                alt={`${destination.name} - African Citril Safaris`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw"
                className="object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <p className="absolute bottom-3 left-3 text-white font-bold uppercase text-sm tracking-widest">
                {destination.name}
            </p>
        </div>
    </Link>
)

export default Destinations