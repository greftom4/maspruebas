'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { links } from "./Links"
import { useState, useEffect } from "react"
import { LogoSvg } from "../SVGS/Svgs"




const Header = () => {
  const pathName = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
  
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (

    <div className={`w-full fixed z-[150] top-0 left-0 h-16 flex justify-between px-[3rem] gap-2 transition-all duration-700 ${isScrolled ? "bg-black opacity-0"  : "bg-black opacity-100"} `}>
      <Link className="bg-transparent flex" href="/"><LogoSvg /> </Link>
      <div className="bg-transparent flex justify-center gap-2 items-center">
        {links.map((link) => (
          <li key={link.title}>
            <Link className={`bg-transparent text-white text-[1rem] transition-transform duration-900 ${pathName === link.href ? "font-bold" : "font-sans"} `} href={link.href} > {link.title} </Link>
          </li>
        ))}
      </div>

    </div>
  )
}

export default Header