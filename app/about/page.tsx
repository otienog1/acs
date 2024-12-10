import { getPage } from "@/components/page"
import Image from "next/image"

const AboutPage = async () => {
    const page = await getPage(8)

    return (
        <>
            <div className=" pb-12 bg-white">
                <div className="mx-auto">
                    <div className="w-full">
                        <div className={`w-full h-[calc(100vh)] relative overflow-hidden`}>
                            <Image
                                src={page.acf.images[0].url}
                                alt="starlyn thrilling adventures"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                    </div>

                    <h1 className="w-full md:w-1/2 mx-auto font-bold text-4xl mb-10 capitalize mt-12 px-2">{page.acf.title}</h1>

                    <div className="w-full md:w-1/2 mx-auto leading-relaxed text-gray-700 px-2" dangerouslySetInnerHTML={{ __html: page.acf.about_us }}></div> {/* Changed text color */}
                </div>
            </div>
            <div className=" pb-12 px-4">
                <div className="container mx-auto">
                    <h1 className="w-full md:w-1/2 mx-auto font-display text-base font-extrabold mb-6 uppercase">{page.acf.our_story.title}</h1>
                    <div className="w-full md:w-1/2 mx-auto" dangerouslySetInnerHTML={{ __html: page.acf.our_story.content }}></div>
                    <div className="md:w-full lg:w-1/2 mx-auto relative h-[60vh] mt-12">
                        <Image
                            src={page.acf.our_story.url}
                            alt="african citril safaris"
                            fill
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                </div>
            </div>
            <div className=" pb-12 px-6">
                <div className="container mx-auto">
                    <h1 className="w-full md:w-1/2 mx-auto font-display text-base font-extrabold mb-6 uppercase">{page.acf.our_values.title}</h1>
                    <div className="w-full md:w-1/2 mx-auto" dangerouslySetInnerHTML={{ __html: page.acf.our_values.content }}></div>
                </div>
            </div>
            <div className=" pb-12 px-6">
                <div className="container mx-auto">
                    <h1 className="w-full md:w-1/2 mx-auto font-display text-base font-extrabold mb-6 uppercase">{page.acf.our_mission.title}</h1>
                    <div className="w-full md:w-1/2 mx-auto" dangerouslySetInnerHTML={{ __html: page.acf.our_mission.content }}></div>
                </div>
            </div>
            <div className=" pb-12 px-6">
                <div className="container mx-auto">
                    <h1 className="w-full md:w-1/2 mx-auto font-display text-base font-extrabold mb-6 uppercase">{page.acf.our_services.title}</h1>
                    <div className="w-full md:w-1/2 mx-auto" dangerouslySetInnerHTML={{ __html: page.acf.our_services.content }}></div>
                </div>
            </div>
        </>
    )
}

export default AboutPage