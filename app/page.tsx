import Slider from "@/components/Slider";
import { getPage } from "@/components/page";
import Image from "next/image";
import Link from "next/link";

const HomePage = async () => {

    const page = await getPage(5)

    return (
        <main className="min-h-screen justify-center">
            <div className="h-screen md:h-[calc(100vh-80px)] xl:h-[calc(100vh-140px)]">
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
            {/* <div className="grid grid-cols-1 2xl:py-72 md:py-36">
                <div className="container mx-auto sm:px-24">
                    <div
                        className="leading-10 text-xl tracking-wide"
                        dangerouslySetInnerHTML={
                            {
                                __html: page.acf.section_2.content
                            }
                        }
                    >
                    </div>
                </div>
            </div> */}
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
                <div className="container mx-auto">
                    <div className="max-w-2xl text-center mx-auto mb-16 px-4">
                        <h2 className="font-heading mb-5 text-6xl tracking-tighter">
                            {page.acf.section_3.our_tours.title}
                        </h2>
                        <p className="text-xl tracking-tight">
                            Our signature itineraries combine recommended safari experiences with preferred destinations throughout East Africa, offering immersive adventures that showcase diverse landscapes, abundant wildlife, and remarkable cultural encounters.
                        </p>
                    </div>
                    <div className="flex flex-wrap px-4">
                        {page.acf.section_3.tours.map((tour: any, i: any) => (
                            <div className="w-full md:w-1/2 lg:w-1/4 p-4" key={i}>
                                <div className="group cursor-pointer">
                                    <Link href={`/experience/${tour.slug}`} >
                                        <div className="mb-4 rounded overflow-hidden h-52 relative">
                                            <Image
                                                className="w-full rounded transform hover:scale-105 transition duration-500"
                                                src={tour.image}
                                                alt={tour.title}
                                                fill
                                                style={{ objectFit: 'cover' }}
                                            />
                                        </div>
                                    </Link>
                                    <p className="text-indigo-500 font-semibold tracking-tight">{tour.destination}</p>
                                    <h3 className="text-xl group-hover:text-gray-900 font-semibold group-hover:underline">{tour.title}</h3>
                                    <span className="text-sm text-gray-600 tracking-tight">{tour.days}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="container px-4 mx-auto text-center pb-24 md:pb-32" >
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
            </div>
            {/* <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="bg-gray-100 p-12 md:p-24 flex justify-start items-center">
                    <div className="max-w-md">
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
                <div className="bg-white p-12 md:p-24 flex justify-end items-center">123</div>
            </div> */}
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