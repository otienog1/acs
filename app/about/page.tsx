import { getPage } from "@/components/page"
import Image from "next/image"

const AboutPage = async () => {
    const page = await getPage(8)

    return (
        <>
            <div className="text-center py-12 px-6 my-12">
                <div className="container mx-auto pl-6">
                    <h1 className="font-display font-bold text-5xl mb-20 uppercase">{page.acf.title}</h1>
                    <div className="hidden lg:flex justify-center w-full gap-4 mb-20">
                        {page.acf.images?.map(
                            (image: any, i: any) => (
                                <div className={`w-1/3 h-[calc(50vh)] relative overflow-hidden`} key={i}>
                                    <Image
                                        src={image.url}
                                        alt="starlyn thrilling adventures"
                                        fill
                                        style={{ objectFit: "cover" }}
                                    />
                                </div>
                            )
                        )}
                    </div>
                    <div className="w-full md:w-1/2 mx-auto leading-relaxed" dangerouslySetInnerHTML={{ __html: page.acf.about_us }}></div>
                </div>
            </div>
            <div className="text-center py-12 px-6">
                <div className="container mx-auto">
                    <h1 className="font-display text-base font-extrabold mb-6 uppercase">{page.acf.our_story.title}</h1>
                    <div className="w-full md:w-1/2 mx-auto" dangerouslySetInnerHTML={{ __html: page.acf.our_story.content }}></div>
                    <div className="md:w-full lg:w-1/2 mx-auto relative h-[60vh] mt-20">
                        <Image
                            src={page.acf.our_story.url}
                            alt="starlyn thrilling adventures"
                            fill
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                </div>
            </div>
            <div className="text-center py-12 px-6">
                <div className="container mx-auto">
                    <h1 className="font-display text-base font-extrabold mb-6 uppercase">{page.acf.our_values.title}</h1>
                    <div className="w-full md:w-1/2 mx-auto" dangerouslySetInnerHTML={{ __html: page.acf.our_values.content }}></div>
                </div>
            </div>
            <div className="text-center py-12 px-6">
                <div className="container mx-auto">
                    <h1 className="font-display text-base font-extrabold mb-6 uppercase">{page.acf.our_mission.title}</h1>
                    <div className="w-full md:w-1/2 mx-auto" dangerouslySetInnerHTML={{ __html: page.acf.our_mission.content }}></div>
                </div>
            </div>
            <div className="text-center py-12 px-6">
                <div className="container mx-auto">
                    <h1 className="font-display text-base font-extrabold mb-6 uppercase">{page.acf.our_services.title}</h1>
                    <div className="w-full md:w-1/2 mx-auto" dangerouslySetInnerHTML={{ __html: page.acf.our_services.content }}></div>
                </div>
            </div>
        </>
    )
}

export default AboutPage