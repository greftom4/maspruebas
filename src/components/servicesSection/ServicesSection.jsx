'use client'
import { useState } from "react";
import Image from "next/image"

const images = [
    {
        id: 1,
        img: "https://iili.io/dkfTNyu.png",
        titulo: "Branding",
        video: "https://res.cloudinary.com/dtxyn8cnq/video/upload/v1724870885/JENNIE_in_New_Season_Denim_Calvin_Klein_Spring_2024_tutio9.mp4"
    },
    {
        id: 2,
        img: "https://iili.io/dkfTeTb.png",
        titulo: "Branding Strategy",
        video: "https://res.cloudinary.com/dtxyn8cnq/video/upload/v1724870846/modeloprofessional_ce8ov9.mp4"
    },
    {
        id: 3,
        img: "https://iili.io/dkfTkjj.png",
        titulo: "Motion Graphics",
        video: "https://res.cloudinary.com/dtxyn8cnq/video/upload/v1724865778/fw22_you_ve_got_mail_the_sunday_collective_1080p_fvfnyg.mp4" 
    },
    {
        id: 4,
        img: "https://iili.io/dkfTvZx.png",
        titulo: "Video Editing",
        video: "https://res.cloudinary.com/dtxyn8cnq/video/upload/v1724870911/Mingyu_Maluma_Greta_Lee_and_More_Celebrate_the_Paris_Store_Opening_Calvin_Klein_1_puqolb.mp4"
    },
    {
        id: 5,
        img: "https://iili.io/dkfT43P.png",
        titulo: "3d animation",
        video: "https://res.cloudinary.com/dtxyn8cnq/video/upload/v1724870846/modeloprofessional_ce8ov9.mp4"
    },
    {
        id: 6,
        img: "https://iili.io/dkfTeTb.png",
        titulo: "Branding Strategy",
        video: "https://res.cloudinary.com/dtxyn8cnq/video/upload/v1724870885/JENNIE_in_New_Season_Denim_Calvin_Klein_Spring_2024_tutio9.mp4"
    },
    {
        id: 7,
        img: "https://iili.io/dkfTkjj.png",
        titulo: "Motion Graphics",
        video: "https://res.cloudinary.com/dtxyn8cnq/video/upload/v1724870846/modeloprofessional_ce8ov9.mp4"
    },
    {
        id: 8,
        img: "https://iili.io/dkfTvZx.png",
        titulo: "Video Editing",
        video: "https://res.cloudinary.com/dtxyn8cnq/video/upload/v1724865778/fw22_you_ve_got_mail_the_sunday_collective_1080p_fvfnyg.mp4"
    },
    {
        id: 9,
        img: "https://iili.io/dkfT43P.png",
        titulo: "3d animation",
        video: "https://res.cloudinary.com/dtxyn8cnq/video/upload/v1724870885/JENNIE_in_New_Season_Denim_Calvin_Klein_Spring_2024_tutio9.mp4"
    },
]

const ServicesSection = () => {
    const [hoveredImage, setHoveredImage] = useState(null);

  return (
    <div className="flex justify-between h-fit px-[100px]  ">
        <div className=" flex justify-center items-center object-cover h-fit overflow-hidden py-[50px] " >
            {hoveredImage && (
                <Image className={`transition duration-[700ms] ${hoveredImage ? "opacity-100" : "opacity-0"} `} src={hoveredImage.img} width={500} height={500} alt="fotis" />
            )}
        </div>
        <div className="overflow-hidden pb-[4rem]">
            {images.map((image) => (
                <div 
                    key={image.id} 
                    onMouseEnter={() => setHoveredImage(image)} 
                    onMouseLeave={() => setHoveredImage(null)}
                    className="pr-[100px]"
                >
                    <h2 className="text-[#77777753] h-[65px] font-bold text-[4rem] cursor-pointer hover:translate-x-[30px]  hover:text-pink-300 transition duration-[400ms]">{image.titulo}</h2>
                </div>
            ))}
        </div>
    </div>
  );
}

export default ServicesSection