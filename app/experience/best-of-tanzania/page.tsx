import Image from "next/image"
import { getExperience } from "@/components/page"

const Experience = async () => {
    const experience = await getExperience(168)
    return (
        <>
            <div className="relative w-full h-[calc(100vh/2)]">
                <Image
                    src={experience.acf.image}
                    alt={experience.acf.title}
                    fill
                    style={{ objectFit: "cover" }}
                />
            </div>
            <div className="container px-4 mx-auto pt-10">
                <div className="w-full lg:w-3/5">
                    <h2 className="font-bold text-3xl tracking-tighter mb-10">{experience.acf.title}</h2>
                    <div
                        className="mb-10"
                        dangerouslySetInnerHTML={{ __html: experience.acf.description }}
                    ></div>
                    <h2 className="font-semibold text-2xl tracking-tighter mb-10">
                        Itinerary at a glance
                    </h2>
                    <Itinerary itins={experience.acf.itinerary} />
                </div>
            </div>
        </>
    )
}

const Itinerary = (props: any) => {
    const { itins } = props

    return (
        <div>
            {
                Array.from(itins).map((itin: any, i: any) => (
                    <Itin
                        title={itin.title}
                        activity={itin.activity}
                        key={i}
                    />
                ))
            }
        </div>
    )
}

const Itin = (props: any) => {
    const { title, activity } = props
    return (
        <div>
            <div className="bg-neutral-200 rounded flex px-4 py-3 font-semibold tracking-tighter">
                <div className="mr-10">{title.day}</div>
                <div className="cs-text-green">{title.location}</div>
            </div>
            <div
                className="py-8"
                dangerouslySetInnerHTML={{ __html: activity }}
            ></div>
        </div>
    )
}


export default Experience