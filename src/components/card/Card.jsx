'use client'
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const Card = ({image2, children}) => {
  const [isInView, setIsInView] = useState(false);
  const cardRef = useRef(null)

  useEffect(() => {
      const observer = new IntersectionObserver(
          ([entry]) => {
              setIsInView(entry.isIntersecting)
          },
          {
            rootMargin: "-300px"
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
    <div ref={cardRef} className={`w-[1000px] h-[1000px] relative transition duration-[1500ms]`}>
        <Image className={`w-full transition duration-[4000ms] object-cover absolute ${isInView ? "opacity-0" : "opacity-100"}`} src={image2} width={1000} height={1000} alt="fotisde" />
        {children}
    </div>
  )
}

export default Card