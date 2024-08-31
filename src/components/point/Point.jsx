'use client'
import { useRef } from "react"
import { motion } from 'framer-motion'
import MouseFollow from "../mouseFollow/MouseFollow"
import { hExtraBold } from "@/fonts/fonts"

const Point = () => {
    const ref = useRef(null);
    const { x, y, opacity } = MouseFollow(ref)
    return (
        <motion.div ref={ref}  style={{ x, y, opacity }} className={`flex justify-center items-center text-white text-[2rem] w-[120px] h-[120px] bg-pink-400 ${hExtraBold.className} `}>
                <h2>VIDEO</h2>   
        </motion.div>
    )
}

export default Point