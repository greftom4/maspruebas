'use client'
import ObserverScroll from "@/components/scrollDiv/ObserverScroll";
import ScrollParallax from "@/components/scrollDiv/ScrollParallax";
import { useRef } from "react";
/* import MouseFollow from "@/components/mouseFollow/MouseFollow";
import DivsHover from "@/components/divsHover/DivsHover";
import CardRara from "@/components/cardsRaras/CardRara";
import Footer from "@/components/footer/Footer";
import LinksHover from "@/components/linksHoverImage/LinksHover"; */



export default function Contacto() {
  const fotRef = useRef(null)

  return (
    <div className="relative flex flex-col w-full  bg-purple-200 overflow-hidden ">
      <div className="w-full h-[100vh] bg-pink-400">
        
      </div>
      <div className="w-full h-[100vh] flex relative overflow-hidden bg-purple-400">
        <ScrollParallax />
        <div className="flex w-full justify-center items-center">
          <ObserverScroll />
        </div>
        

      </div>
      <div className="w-full h-[100vh] bg-blue-500">
        
      </div>
    </div>
  );
}



{/* <div ref={fotRef} className="pt-[16vh] w-full p-full ">
          <img src="https://static.nationalgeographic.es/files/styles/image_3200/public/01-lion-populations-nationalgeographic_1777804.jpg?w=1600&h=900" width={500} height={500} alt="esta foto" />
          <MouseFollow targetRef={fotRef} />
        </div>
        <div>
          <LinksHover />
        </div> */}