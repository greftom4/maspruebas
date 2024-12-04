'use client'
import { hExtraBold } from "@/fonts/fonts"
import Link from "next/link";
import { useState, useEffect } from 'react'

const Footer = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Verifica si el usuario ha llegado al final de la página
      if (scrollY + windowHeight >= documentHeight - 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className={`flex justify-between items-center px-[10rem] bg-black transition-all duration-[1500ms] ${isScrolled ? "opacity-100" : "opacity-10"} `}>
      <div className="flex flex-col">
        <h2 className={`text-white text-[3rem] ${hExtraBold.className} `}>FOOTER </h2>
        <svg style={{ backgroundColor: "transparent" }} width="397" height="66" viewBox="0 0 397 66" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M133.907 13.4721C104.334 16.0562 74.8511 19.7734 45.3282 22.8626C33.0869 24.1435 18.2367 25.6529 5.52381 26.7869C2.06023 27.0959 12.4317 25.9734 15.8954 25.6657C83.7119 19.6402 151.759 16.6037 219.683 12.0705C254.17 9.76887 288.588 6.31799 323.118 4.78241C325.335 4.68382 350.997 2.84533 331.808 9.26741C272.749 29.0321 208.123 37.1724 146.801 45.9884C118.316 50.0835 86.0382 53.8539 57.1013 57.2009C48.1324 58.2382 21.5581 62.9271 30.1913 60.2843C42.5623 56.4973 55.5895 55.336 68.3138 52.9962C111.525 45.0501 145.669 39.0672 190.11 32.9538C257.572 23.6736 324.67 18.9289 392.495 14.7335" stroke="#7A66E3" stroke-width="8" stroke-linecap="round" />
        </svg>
      </div>

      <svg style={{backgroundColor:"transparent"}} width="317" height="39" viewBox="0 0 317 39" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.5 27.2457C48.9777 27.2457 144.985 29.0081 191.313 25.3745C218.618 23.233 245.912 20.8796 273.26 19.3406C282.306 18.8316 294.513 18.3343 303.904 18.1402C304.067 18.1368 312.817 17.9885 314.645 18.2665C316.152 18.4959 312.465 20.5838 311.012 21.0465C295.796 25.8923 304.113 23.9439 288.531 27.2457C264.173 32.4069 259.68 37.614 260.356 36.7124" stroke="#7A66E3" stroke-width="3.60637" stroke-linecap="round" />
        <path d="M301.232 13.6068C282.239 9.70452 263.263 5.77636 244.182 2.5" stroke="#7A66E3" stroke-width="3.60637" stroke-linecap="round" />
      </svg>


      <div className="flex flex-col p-6">
        <h3 className={`text-white ${hExtraBold.className} `} >TITULO LISTA</h3>
        <ul className="flex flex-col bg-transparent text-white text-[0.8rem] justify-center">
          <li className="cursor-pointer">home</li>
          <li className="cursor-pointer">trabajos</li>
          <li className="cursor-pointer">acciones</li>
          <li className="cursor-pointer">nosotros</li>
          <li className="cursor-pointer">colaboracion</li>
          <li className="cursor-pointer">relleno</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer