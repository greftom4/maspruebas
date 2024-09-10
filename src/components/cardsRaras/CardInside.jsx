'use client'
import { useState,useEffect,useRef } from "react"

const CardInside = () => {
    const [isInView, setIsInView] = useState(false);
    const cardRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting)
            },
            
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
    <div ref={cardRef} className={`flex justify-center items-center pt-{30px} w-[400px] bg-yellow-400 transition-all duration-[1000ms]  ${isInView ? "h-[10vh]" : "h-[4vh]"} `}>
        <h3>esto</h3>
    </div>
  )
}

export default CardInside