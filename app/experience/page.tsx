import Link from "next/link"
import Image from "next/image"
import { getExperiences } from "@/components/page"

const Experiences = async () => {
    const experiences = await getExperiences()
    return (
        <div className="container mx-auto py-10">
            <h2 className="font-bold tracking-tighter text-2xl px-8 mb-10">Experiences</h2>
            <div className="flex flex-wrap px-4">
                {experiences.map((experience: any, i: any) => (
                    <div className="w-full md:w-1/2 lg:w-1/4 p-4" key={i}>
                        <div className="group cursor-pointer">
                            <Link href={`/experience/${experience.acf.slug}`} >
                                <div className="mb-4 rounded overflow-hidden h-52 relative">
                                    <Image
                                        className="w-full rounded transform hover:scale-105 transition duration-500"
                                        src={experience.acf.image}
                                        alt={experience.acf.title}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>
                            </Link>
                            <p className="text-indigo-500 font-semibold tracking-tight">{experience.acf.destination}</p>
                            <h3 className="text-xl group-hover:text-gray-900 font-semibold group-hover:underline">
                                <Link href={`/experience/${experience.acf.slug}`} >
                                    {experience.acf.title}
                                </Link>
                            </h3>
                            <span className="text-sm text-gray-600 tracking-tight">{experience.acf.days}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Experiences