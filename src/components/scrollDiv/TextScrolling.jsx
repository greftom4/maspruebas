'use client'
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

const TextScrolling = () => {
    const { scrollY } = useScroll()
    const translateY = useTransform(scrollY, [0, 5000], [1, -300])
    return (

        <motion.div
            /* transition={ {duration: 0.5, ease: "easeInOut"} } */
            style={{ y: translateY }}
            className=" flex gap-3"
        >
            <div className="w-[500px] relative shadow-xl shadow-black/30 overflow-hidden h-[600px] ">
                <h2 className="text-[5rem] w-fit leading-[0.8] tracking-tighter bg-black text-white">ESTO ES UN TEXTO</h2>
                <Image className="absolute object-cover" src="https://iili.io/dLf1FAN.jpg" width={500} height={500} alt="foto" />
            </div>
            <div className="w-[500px] relative shadow-xl shadow-black/30 overflow-hidden h-[600px] ">
                <h2 className="text-[5rem] font-light w-fit leading-[0.8] tracking-tighter bg-black text-white">ESTO ES UN TEXTO</h2>
                <Image className="absolute object-cover" src="https://iili.io/dLf1FAN.jpg" width={500} height={500} alt="foto" />
            </div>

        </motion.div>

    )
}

export default TextScrolling