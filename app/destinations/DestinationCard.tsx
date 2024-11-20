'use client'

import { Destination } from "@/lib/types"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react"; // Import useEffect, useRef, and useState

const DestinationCard = ({ destination }: { destination: Destination }) => {
    const parentRef = useRef<HTMLDivElement>(null); // Create a ref for the parent
    const [childHeight, setChildHeight] = useState<number | undefined>(undefined); // State to hold the child height

    useEffect(() => {
        const timer = setTimeout(() => {
            if (parentRef.current) {
                setChildHeight(parentRef.current.clientHeight); // Set child height based on parent height
            }
        }, 2000); // Wait for 2 seconds before calculating height

        return () => clearTimeout(timer); // Cleanup the timer on component unmount
    }, [parentRef]);


    return (
        <section>
            <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 sm:py-8 lg:px-4">
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
                    <div className="grid place-content-center  bg-gray-100 p-6 sm:p-8">
                        <div className="mx-auto max-w-md text-center lg:text-left">
                            <header>
                                <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">{destination.name}</h2>

                                <p className="mt-4 text-gray-500">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas rerum quam amet
                                    provident nulla error!
                                </p>
                            </header>

                            <Link
                                href="#"
                                className="mt-8 inline-block  border border-gray-900 bg-gray-900 px-12 py-3 text-sm font-medium text-white transition hover:shadow focus:outline-none focus:ring"
                            >
                                View
                            </Link>
                        </div>
                    </div>

                    <div className="lg:col-span-2">
                        <div className="grid grid-cols-2 gap-4" ref={parentRef} style={{ height: childHeight }}>
                            <div className="relative">
                                <Image
                                    src={destination.image}
                                    alt={`${destination.name} - African Citril Safaris`}
                                    fill
                                    // sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw"
                                    className="object-cover aspect-square w-full "
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>

                            <div className="relative">
                                <Image
                                    src={destination.image}
                                    alt={`${destination.name} - African Citril Safaris`}
                                    fill
                                    // sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw"
                                    className="object-cover aspect-square w-full "
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DestinationCard