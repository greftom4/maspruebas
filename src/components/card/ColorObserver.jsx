'use client'
import Image from "next/image"
import { useState, useEffect,useRef } from "react"
import Card from "./Card"

const images = [
    {
        id: 1,
        image1: "https://iili.io/dSb6tUl.jpg",
        image2: "https://iili.io/dSb6iVs.jpg"
    },
    {
        id: 2,
        image1: "https://iili.io/dSb6iVs.jpg",
        image2: "https://iili.io/dSb6NVa.jpg"
    },
    {
        id: 3,
        image1: "https://iili.io/dem7yZX.png",
        image2: "https://iili.io/demaSX1.png"
    },
    {
        id: 4,
        image1: "https://iili.io/debOvR9.png",
        image2: "https://iili.io/debwb71.png"
    },
    {
        id: 5,
        image1: "https://iili.io/demxZPV.png",
        image2: "https://iili.io/demzeOg.png"
    },
    {
        id: 6,
        image1: "https://iili.io/dem7yZX.png",
        image2: "https://iili.io/demaSX1.png"
    },
    {
        id: 7,
        image1: "https://iili.io/debOvR9.png",
        image2: "https://iili.io/debwb71.png"
    },
    {
        id: 8,
        image1: "https://iili.io/demxZPV.png",
        image2: "https://iili.io/demzeOg.png"
    },
    {
        id: 9,
        image1: "https://iili.io/dem7yZX.png",
        image2: "https://iili.io/demaSX1.png"
    },
    {
        id: 10,
        image1: "https://iili.io/debOvR9.png",
        image2: "https://iili.io/debwb71.png"
    },
    {
        id: 11,
        image1: "https://iili.io/demxZPV.png",
        image2: "https://iili.io/demzeOg.png"
    },
    {
        id: 12,
        image1: "https://iili.io/dem7yZX.png",
        image2: "https://iili.io/demaSX1.png"
    },

]

const ColorObserver = () => {



    return (
        <div className=" flex gap-2 justify-center flex-wrap transition duration-700"> 
            {images.map((image) => (
               <Card 
               image2={image.image2}
               >
               <Image className="w-full object-cover"  src={image.image1} width={1000} height={1000} quality={100} alt="fotisde"/>
               
               </Card>
            ))}
        </div>
    )
}

export default ColorObserver