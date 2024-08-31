'use client'
import { useState, useRef, useEffect } from "react"
import { hExtraBold } from "@/fonts/fonts"
import "../cardPerspective/cardPerspective.css"

const BannerNosotros = ({ text1, text2, textColor }) => {
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
        <div  className={`pl-[10rem] flex justify-start h-[300px]  pt-[10vh] bg-transparent z-[150] ${hExtraBold.className} `}>
            <div ref={textRef} className={` justify-start flex flex-col gap-[50px] transition duration-[1800ms]  ${isInView ? "translate-y-0 opacity-100 translate-x-0 " : " translate-y-[-15vw] translate-x-[100px] opacity-0 " } `}  >
                <h2 ref={textRef} className="text-white font-bold text-[7rem] leading-[0.80] h-[0px] tracking-[-0.06em]">{text2}</h2>
                <h2 className={`text-pink-400 font-bold text-[8rem] h-[0px] tracking-[-0.06em] transition duration-[1000ms] delay-50 ${isInView ? "translate-x-0 opacity-[80%]" : "translate-x-[100px] opacity-0 " }`}>{textColor} </h2>
                <p  className="text-[#ffffffbf] w-[50%] pt-[8rem] ">Frederick Jay Rubin es un productor discográfico estadounidense, numerosas veces ganador del Grammy;​ es más conocido por su trabajo con el rap y el heavy metal, así también por la serie de discos de American Recording con Johnny Cash</p>
            </div>
        </div>
    )
}

export default BannerNosotros;