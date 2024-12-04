'use client'
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion as m } from "framer-motion";


const links = [
    {
        title: "ESTO1",
        img: "https://iili.io/dNg0iss.png"
    },
    {
        title: "ESTO2",
        img: "https://iili.io/dNg0Zg4.png"
    },
    {
        title: "ESTO3",
        img: "https://iili.io/dNg1oI1.png"
    },
    {
        title: "ESTO4",
        img: "https://iili.io/dNg1Arv.png"
    },
]

const LinksHover = () => {
    const [hoveredLink, setHoveredLink] = useState(null);

    return (
        <div className="flex justify-between px-[50px] z-30 bg-cyan-600">
            {links.map((link) => (
                <div key={link.title} className="flex gap-2 relative z-30">
                    <div
                        className="w-[300px] flex justify-center z-30"
                        onMouseEnter={() => setHoveredLink(link.title)}
                        onMouseLeave={() => setHoveredLink(null)}
                    >
                        <Link
                            href="/"
                            className='bg-orange-700 flex justify-center w-[50%] font-bold text-white z-30'
                        >
                            {link.title}
                        </Link>
                    </div>

                    {hoveredLink === link.title && (
                        <m.div
                            key="modal"
                            initial={{ opacity: 0, scale: 0.8, zIndex: 1 }}
                            animate={{ opacity: 1, scale: 1, zIndex: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ type: "spring", mass: 0.7, damping: 10, stiffness: 100 }}
                            className="absolute top-[50px] left-0 z-30"
                            style={{zIndex: 100}}
                        >
                            <Image className="w-full h-auto z-50" src={link.img} width={500} height={500} alt="image" />
                        </m.div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default LinksHover;