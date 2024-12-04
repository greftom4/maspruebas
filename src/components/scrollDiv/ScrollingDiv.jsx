'use client'
import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion";

const ScrollingDiv = ({ children }) => {
    const { scrollY} = useScroll()
    const scale = useTransform(scrollY, [0, 3000], [1, 1.5]);
    return (
        <motion.div
        style={{ scale }}
        className="w-full flex justify-center h-[150vh] overflow-hidden bg-purple-300"
        >
            {children}
        </motion.div>
    )
}

export default ScrollingDiv