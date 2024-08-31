'use client'
import { useState, useRef, useEffect } from "react"
import { hExtraBold } from "@/fonts/fonts"

export const Banner = ({ text1, text2, textColor, className="" }) => {
    const [isInView, setIsInView] = useState(false)
    const textRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting)
            },
            {
                threshold:0.8
            }
        )
        if (textRef.current) {
            observer.observe(textRef.current)
        }
        return() => {
            if (textRef.current) {
                observer.unobserve(textRef.current)
            }
        }
        
    })

    return (
        <div  className={`flex flex-col justify-start pl-[3vw] h-[fit] pb-[18vh] pt-[25vh] bg-black overflow-hidden ${hExtraBold.className} `}>
            <div ref={textRef} className={` transition duration-[1500ms] ease-in-out ${isInView ? "translate-x-0" : "translate-x-[10vw] "}`}>
                <h2 className={`text-white flex items-center bg-transparent h-[20px] font-bold tracking-[-0.06em] ${className} ${isInView ? "opacity-100" : "opacity-0"} `}>{text1}</h2>
            </div>
            <div ref={textRef} className={`justify-start bg-slate-500 flex gap-5 transition duration-[1500ms] delay-100 ${isInView ? "translate-x-0" : "translate-x-[10vw] " } `}  >
                <h2 ref={textRef} className="text-white font-bold text-[5rem] h-[0px] tracking-[-0.06em]">{text2}</h2>
                <h2 className={`text-pink-400 font-bold text-[5rem] h-[0px] tracking-[-0.06em] transition duration-[1000ms] delay-50 ${isInView ? "translate-x-0 opacity-100" : "translate-x-[5vw] opacity-10 " }`}>{textColor} </h2>
            </div>
        </div>
    )
}

