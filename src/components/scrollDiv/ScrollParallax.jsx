import {motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

const ScrollParallax = () => {
    const { scrollY } = useScroll()
    const scale = useTransform(scrollY, [1, 4000],[1, 1.4] )
  return (
    <motion.div
    style={{scale}}
    className='w-full h-full absolute inset-0'
    >
        <Image className='w-full object-cover h-full' src="https://iili.io/22Q2FUl.png" width={500} height={500} alt='foto' />
    </motion.div>
  )
}

export default ScrollParallax