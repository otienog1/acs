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

            <section className="py-12">
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div className="p-8 md:p-12 lg:px-16 lg:py-24" style={{ backgroundColor: 'rgba(116, 46, 19, .9)' }}>
                            <div className="mx-auto max-w-xl text-left ">
                                <h2 className="text-2xl font-bold text-white md:text-3xl">
                                    Safari Experts in East Africa
                                </h2>

                                <div
                                    className="hidden text-white/90 sm:mt-4 sm:block [&>p]:mb-4"
                                    dangerouslySetInnerHTML={
                                        { __html: page.acf.section_3.our_tours.content }
                                    }>
                                </div>

                                <div className="mt-4 md:mt-8">
                                    <Link
                                        href={'/contact'}
                                        className="inline-block  border border-white bg-white px-12 py-3 text-sm font-medium transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400"
                                    >
                                        Get in touch with us
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
                            <div className="h-40 w-full sm:h-56 md:h-full relative">
                                <Image
                                    alt=""
                                    src="https://images.unsplash.com/photo-1621274790572-7c32596bc67f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80"
                                    className="h-40 w-full object-cover sm:h-56 md:h-full"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>

                            <div className="h-40 w-full sm:h-56 md:h-full relative">
                                <Image
                                    alt=""
                                    src="https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pt-8" style={{ backgroundColor: 'rgba(194, 174, 114, .25)' }}>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">

                        <div className="lg:py-24 lg:order-last">
                            <h2 className="text-3xl font-bold sm:text-4xl">Experience</h2>

                            <p className="mt-4 text-gray-600">
                                Our signature itineraries combine recommended safari experiences with preferred destinations
                                throughout East Africa, offering immersive adventures that showcase diverse landscapes, abundant
                                wildlife, and remarkable cultural encounters.
                            </p>

                            <Link
                                href="#"
                                className="mt-8 inline-block  px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400" style={{ backgroundColor: 'rgba(116, 46, 19,1)' }}
                            >
                                Learn More
                            </Link>
                        </div>

                        <div className="relative h-64 overflow-hidden -lg sm:h-80 lg:h-full">
                            <Image
                                alt=""
                                src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                </div>
            </section>



            <section className="pb-8" style={{ backgroundColor: 'rgba(194, 174, 114, .25)' }}>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                        <div className="relative h-64 overflow-hidden -lg sm:h-80 lg:order-last lg:h-full">
                            <Image
                                alt=""
                                src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>

                        <div className="lg:py-24">
                            <h2 className="text-3xl font-bold sm:text-4xl">Destinations</h2>

                            <p className="mt-4 text-gray-600">
                                Embark on an unparalleled journey of comfort and adventure in Kenya and Tanzania.
                            </p>

                            <Link
                                href="#"
                                className="mt-8 inline-block px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400" style={{ backgroundColor: 'rgba(116, 46, 19,1)' }}
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

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
            <div className="w-full">
                <div className="container mx-auto max-w-screen-xl p-12 md:p-24 flex justify-start items-center">
                    <div className="text-center">
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
            <section
                className="overflow-hidden bg-[url(https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=2670&auto=format&fit=crop)] bg-cover bg-top bg-no-repeat max-w-screen-xl mx-auto mb-24"
            >
                <div className="bg-black/50 p-8 md:p-12 lg:px-16 lg:py-24">
                    <div className="text-center ltr:sm:text-left rtl:sm:text-right">
                        <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">Book your adventure today!</h2>

                        <p className="hidden max-w-lg mx-auto text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
                            Customize your experience with our tailored itineraries and enjoy the expertise of our professional guides.
                        </p>

                        <div className="mt-4 sm:mt-8">
                            <Link href={'/contact'}
                                className="inline-block -full bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                                style={{ backgroundColor: 'rgba(194, 174, 114, 1)' }}
                            >
                                {page.acf.section_7.title}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default HomePage