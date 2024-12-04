'use client'
import FullScreenImage from "@/components/full-screen-comp/FullScreenImage";
import ScrollingDiv from "@/components/scrollDiv/ScrollingDiv";
import TextScrolling from "@/components/scrollDiv/TextScrolling";
import { bodoni, hExtraBold, hExtraMedium, hLight } from "@/fonts/fonts";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";


const Pruebas = () => {
    const [isPaused, setIsPaused] = useState(false);
    const videoRef = useRef(null);

    const togglePlayPause = () => {
        const video = videoRef.current;
        if (video) {
            setIsPaused(!video.paused)
            video.paused ? video.play() : video.pause();
        }
    }

    return (
        <div className=" flex flex-col w-full overflow-hidden bg-green-200">
            <div className="pt-[150px]">

                <div className="relative w-[50%] ">
                    <button className="z-30 absolute" onClick={togglePlayPause}>
                        <svg style={{ backgroundColor: "transparent" }} className="w-[100px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 248 229"><path stroke="#6517AE" stroke-linecap="round" stroke-width="8" d="M54 4c24 15 46 32 70 46 16 9 32 16 49 23l42 16 28 15c4 2-3 9-4 11-18 20-46 30-70 41-14 7-27 13-40 22-17 10-33 21-50 30-9 4-19 10-29 13l-14 4c-3 0-2 0-3-3-3-18-10-35-16-53-6-19-14-41-13-61 1-14 7-27 11-40 4-9 2-18 3-28l1-13v-7c1-5 8 1 10 2l34 20 25 17c9 5 16 11 23 18 8 7 18 11 27 16l27 13c12 5 25 8 38 11 7 3-7 8-8 8-17 6-37 7-55 8-14 1-26 5-36 16-10 10-18 25-35 25-3-1-3-3-4-5l-12-39c-5-17-6-33-7-50 0-1-1-10 1-10l8 2 26 15 25 15c2 1 13 4 8 6-9 3-16 6-23 11l-5 2" /></svg>
                    </button>
                    <video ref={videoRef} muted loop autoPlay>
                        <source className="w-full" src="https://res.cloudinary.com/dl4tjbaow/video/upload/v1723041148/Mingyu_Maluma_Greta_Lee_and_More_Celebrate_the_Paris_Store_Opening_Calvin_Klein_1_zcvekb.mp4" />
                    </video>
                </div>

            </div>
            <div className="w-full flex justify-between gap-10 pt-[100px] bg-[#a91a1a] h-full">
                <Image className=" w-1/4 p-0 bg-transparent left-0 bottom-0" src="https://iili.io/dPuXnLX.png" width={500} height={500} alt="1 foto" />
                <div className="">
                    <h2 className={`text-[6em] opacity-70 text-white pr-[7rem] uppercase tracking-[0.7em] ${bodoni.className} `}>esto es un titulito</h2>
                    <p className="text-white opacity-60 w-[70%] text-[2em] tracking-[0.3em]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem enim animi, culpa, reprehenderit illum minus accusamus possimus nulla saepe incidunt maiores. Veniam, ut voluptatum. Odio, iure! Odit, doloremque sunt.</p>
                </div>
            </div>
            <div className="w-full relative overflow-hidden">
                <ScrollingDiv>
                    <video autoPlay muted loop className="w-full brightness-[0.4] object-fit h-fit">
                        <source src="https://res.cloudinary.com/dcqtminhu/video/upload/v1729516554/4k_video_gqbfxm.mp4" />
                    </video>
                    {/* <Image className="w-full h-fit object-fill brightness-150" src="https://iili.io/dLf139p.jpg" width={500} height={500} alt="foto" /> */}

                </ScrollingDiv>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
                    <TextScrolling />
                </div>
            </div>
            <div className="w-full bg-[#777]">
                <FullScreenImage />
            </div>
        </div>
    )
}

export default Pruebas