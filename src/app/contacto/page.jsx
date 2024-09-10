'use client'
import { useRef } from "react";
import MouseFollow from "@/components/mouseFollow/MouseFollow";
import DivsHover from "@/components/divsHover/DivsHover";
import CardRara from "@/components/cardsRaras/CardRara";
import Footer from "@/components/footer/Footer";


export default function Contacto() {
  const fotRef = useRef(null)

  return (
    <div className="relative flex flex-col w-full h-min-screen  bg-orange-200 overflow-hidden ">
      <div className="flex-1">
        <div ref={fotRef} className="pt-[16vh] w-full p-full bg-yellow-200">
          <img src="https://static.nationalgeographic.es/files/styles/image_3200/public/01-lion-populations-nationalgeographic_1777804.jpg?w=1600&h=900" width={500} height={500} alt="esta foto" />
          <MouseFollow targetRef={fotRef} />
        </div>
        <div className="w-full h-[200vh] bg-green-200"></div>
        <div className="w-full flex-wrap flex bg-yellow-700 justify-center gap-1 h-[400vh]">
          <CardRara />
        </div>
        <div>
          <video loop autoPlay muted>
            <source src="https://res.cloudinary.com/dtxyn8cnq/video/upload/v1725975567/ScreenRecorderProject1_ueowwh.mkv" />
          </video>
        </div>
      </div>
    </div>
  );
}