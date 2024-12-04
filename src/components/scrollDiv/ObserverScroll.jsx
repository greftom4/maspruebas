import { useState, useEffect, useRef } from "react"
import {motion, useScroll, useTransform } from 'framer-motion'
const ObserverScroll = () => {
    const { scrollY } = useScroll()
    const translateY = useTransform(scrollY, [1, 1000],[-50, 1] )
    const [isInView, setIsInVIew] = useState(false);
    const divRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInVIew(entry.isIntersecting)
            }
        )
        if(divRef.current) {
            observer.observe(divRef.current)
        }
        return () => {
            if(divRef.current) {
                observer.unobserve(divRef.current)
            }
        }
    },[])
  return (
    <motion.div style={{y:translateY}} className="z-50"   ref={divRef}>
    <h2 className="text-[6rem] bg-black text-white leading-[0.8] tracking-tighter  ">ESTO ES UN TITULO</h2>
    </motion.div>
  )
}

export default ObserverScroll