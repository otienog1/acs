import Slider from "@/components/Slider";
import { getPage } from "@/components/page";
import Image from "next/image";
import Link from "next/link";

const HomePage = async () => {

    const page = await getPage(5)

    return (
        <main className="min-h-screen justify-center">
            <div className="h-screen md:h-[calc(100vh)] xl:h-[calc(100vh)] relative"> {/* Added relative positioning */}
                <Slider
                    slides={page.acf.section_1.slider}
                    autoplay={!0}
                    direction="next"
                    speed={2}
                    duration={10}
                    current={0}
                    RAF={0}
                />
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2"> {/* New div for absolute positioning */}
                    {/* Your first div content here */}
                </div>
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2"> {/* New div for absolute positioning */}
                    {/* Your second div content here */}
                </div>
            </div>

            <div className="grid grid-cols-1 py-24">
                <div className="container mx-auto">
                    <h1 className="tracking-wide text-center text-4xl font-medium">
                        Safari Experts in East Africa
                    </h1>
                </div>
            </div>

            <div className="" style={{ backgroundColor: 'rgba(27, 118, 50, .1)' }}>
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="p-12 md:py-24 h-screen 2xl:h-[calc(100vh-100px)]">
                            <div className="relative h-full w-full">
                                <Image
                                    src={page.acf.section_3.image}
                                    alt="image"
                                    fill
                                    style={{ objectFit: "contain", objectPosition: "right" }}
                                />
                            </div>
                        </div>
                        <div className="p-12 md:p-32 flex justify-end items-center">
                            <div className="max-w-md">
                                {/* <div className="w-10 h-0.5 bg-yellow-800 mb-4"></div> */}
                                {/* <h2 className="text-4xl mb-8 tracking-widest">
                                    {page.acf.section_3.our_tours.title}
                                </h2> */}
                                <div
                                    className="tracking-wide text-xl leading-8 child:mb-6"
                                    dangerouslySetInnerHTML={
                                        { __html: page.acf.section_3.our_tours.content }
                                    }>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-12 md:py-28">
                <div className="container mx-auto max-w-screen-xl relative">
                    <div className="h-screen md:h-[calc(60vh)] xl:h-[calc(70vh)] md:w-[calc(60vw)]">
                        <Slider
                            slides={page.acf.section_1.slider}
                            autoplay={!0}
                            direction="next"
                            speed={2}
                            duration={10}
                            current={0}
                            RAF={0}
                        />
                    </div>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-slate-400 w-[calc(30vw)] h-48 z-0"></div>
                    <div className="max-w-2xl mx-auto mb-16 mr-1 p-4 absolute right-0 top-1/2 -translate-y-1/2 w-[calc(30vw)] z-[4] bg-white">
                        <h2 className="font-heading mb-5 text-3xl tracking-widest">
                            Experience
                        </h2>
                        <p className="text-base tracking-tight">
                            Our signature itineraries combine recommended safari experiences with preferred destinations throughout East Africa, offering immersive adventures that showcase diverse landscapes, abundant wildlife, and remarkable cultural encounters.
                        </p>
                    </div>
                </div>
            </div>

            <div className="pb-12 md:pb-28">
                <div className="container mx-auto max-w-screen-xl relative flex justify-end">
                    <div className="h-screen md:h-[calc(60vh)] xl:h-[calc(70vh)] md:w-[calc(60vw)]">
                        <Slider
                            slides={page.acf.section_1.slider}
                            autoplay={!0}
                            direction="next"
                            speed={2}
                            duration={10}
                            current={0}
                            RAF={0}
                        />
                    </div>
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-slate-400 w-[calc(30vw)] h-[145px] z-0"></div>
                    <div className="max-w-2xl mx-auto mb-16 ml-1 p-4 absolute left-0 top-1/2 -translate-y-1/2 w-[calc(30vw)] z-[4] bg-white">
                        <h2 className="font-heading mb-5 text-3xl tracking-widest">
                            Destinations
                        </h2>
                        <p className="text-base tracking-tight">
                            Embark on an unparalleled journey of comfort and adventure in Kenya and Tanzania.
                        </p>
                    </div>
                </div>
            </div>

            {/* <div className="container px-4 mx-auto text-center pb-24 md:pb-32" >
                <h2 className="font-heading mb-5 text-6xl tracking-tighter">
                    {page.acf.section_4.title}
                </h2>
                <div
                    className="mx-auto w-full lg:w-2/3 text-xl tracking-wide leading-relaxed"
                    dangerouslySetInnerHTML={
                        {
                            __html: page.acf.section_4.additional_services
                        }
                    }
                >

                </div>
            </div> */}
            <div className="w-full bg-gray-100">
                <div className="container mx-auto max-w-screen-xl p-12 md:p-24 flex justify-start items-center">
                    <div className="">
                        <h2 className="text-xl lg:text-2xl mb-8 tracking-widest uppercase">
                            {page.acf.section_5.mission_and_values.title}
                        </h2>
                        <div
                            className="text-xl tracking-tight"
                            dangerouslySetInnerHTML={
                                {
                                    __html: page.acf.section_5.mission_and_values.content
                                }
                            }></div>
                    </div>
                </div>
            </div>
            <div className="py-24 lg:py-28 overflow-hidden" style={{ background: `url(${page.acf.section_7.image})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                <div className="container px-4 mx-auto">
                    <div className="max-w-xl mx-auto text-center">
                        <h2 className="font-heading mb-6 text-6xl text-white tracking-tighter capitalize">Book your adventure today!</h2>
                        <p className="mb-8 text-xl text-gray-200 tracking-tight">Customize your experience with our tailored itineraries and enjoy the expertise of our professional guides.</p>
                        <div className="inline-block px-5 py-4 text-gray-700 font-semibold tracking-tight bg-white hover:bg-gray-100 rounded focus:ring-4 focus:ring-gray-200 transition duration-200">
                            <Link href={'/contact'}>
                                {page.acf.section_7.title}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default HomePage