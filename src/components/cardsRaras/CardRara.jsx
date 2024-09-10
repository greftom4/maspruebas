'use client'
import Image from "next/image";
import CardInside from "./CardInside"
import { useState,useEffect,useRef } from "react"


const CardRara = () => {
    const [isInView, setIsInView] = useState(false);
    const cardRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting)
            },
            {
                rootMargin:"-100px"
            }
        )
        if(cardRef.current) {
            observer.observe(cardRef.current)
        }
        return () => {
            if(cardRef.current) {
                observer.unobserve(cardRef.current)
            }
        }
    }, [] )

  return (
    <div ref={cardRef} className={`overflow-hidden flex justify-center w-[1500px] bg-pink-500 transition-all duration-[1700ms]  ${isInView ? "h-[50vh]" : "h-[4vh]"} `}>
        {/* <CardInside /> */}
        <Image className="w-full h-full object-cover" src="https://iili.io/dkfTvZx.png" width={1500} quality={100} height={1500} alt="reff" />
    </div>
  )
}

export default CardRara