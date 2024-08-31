'use client'
import { useRef } from "react";
import MouseFollow from "@/components/mouseFollow/MouseFollow";


export default function Contacto() {
  const fotRef = useRef(null)

  return (
    <div className="relative w-full h-[200vh] bg-orange-200 ">
      <div ref={fotRef} className="pt-[16vh] w-full p-full bg-yellow-200">
        <img src="https://static.nationalgeographic.es/files/styles/image_3200/public/01-lion-populations-nationalgeographic_1777804.jpg?w=1600&h=900" width={500} height={500} alt="esta foto" />
        <MouseFollow targetRef={fotRef} />
      </div>
    </div>
  );
}