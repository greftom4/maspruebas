'use client'
import Image from "next/image"
import './cardPerspective.css'
import { useState, useEffect, useRef } from "react"

const CardPerspective = () => {
    const [isInview, setIsInView] = useState(false);
    const cardRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting)
            },
            {
                rootMargin: '-500px',
            }
        )
        if (cardRef.current) {
            observer.observe(cardRef.current)
        }
        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current)
            }
        }
    }, [])

    return (
        <div ref={cardRef} className="perspective bg-transparent w-full h-[100px] ">
            <div className={`bg-transparent transform transition-transform duration-[2000ms] ${isInview ? "card-content" : "card-content1"} `}>
                <Image width={3000} height={3000} src="https://iili.io/dWsHRHP.png" alt="Descripción" className={`h-full w-full  object-cover  transition duration-[1500ms] ${isInview ? "scale-[2] opacity-[90%]" : "scale-[0.9] "} `} />
                {/* <div className="p-4">
                    <h2 className="text-lg font-bold">Título de la Card</h2>
                    <p className="text-gray-700">Descripción breve de la card.</p>
                </div> */}
            </div>
        </div>
    )
}

export default CardPerspective