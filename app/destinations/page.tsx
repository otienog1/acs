import { getPage } from "@/components/page"
import { Destination } from "@/lib/types"
import DestinationCard from "./DestinationCard"
import Image from "next/image"

const Destinations = async () => {
    const page = await getPage(12)

    return (
        <div className="container mx-auto">
            <div className=" mb-12 bg-white">
                <div className="mx-auto">
                    <div className="w-full">
                        <div className={`w-full h-[calc(100vh)] relative overflow-hidden`}>
                            <Image
                                src={page.acf.hero_image}
                                alt="African Citril Adventure"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <h1 className="font-display font-bold text-4xl mb-12 tracking-wider text-center">
                {page.acf.title}
            </h1>

            {page.acf.destinations.map((item: { destination: Destination }, index: number) => (
                <DestinationCard key={index} destination={item.destination} />
            ))}
        </div>
    )
}

export default Destinations