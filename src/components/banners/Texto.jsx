'use client'
import { hExtraBold, hExtraMedium } from "@/fonts/fonts"
import {useState, useEffect, useRef} from 'react'

const Texto = ({textP}) => {
const [isInView, setIsInView] = useState(false);
const textRef = useRef(null)

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entries]) => {
      setIsInView(entries.isIntersecting)
    },
    {
      rootMargin:"-100px",
      threshold: 0.4
    }
  )
  if (textRef.current) {
    observer.observe(textRef.current)
  }
  return () =>{
    if(textRef.current)
      observer.unobserve(textRef.current)
  }

}, [])

  return (
    <div ref={textRef} className={`transition duration-[1200ms] ease-out  ${isInView ? "opacity-100" : "opacity-0"} `}>
      <p className={`text-white  text-[2rem] pr-[80px] leading-[2rem] flex  ${hExtraMedium.className} `}>{textP} </p>
    </div>
  )
}

export default Texto