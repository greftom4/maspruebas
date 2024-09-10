'use client'
import CardContainer from '@/components/card/CardContainer';
import CardHover from '@/components/card/CardHover';
import ColorObserver from '@/components/card/ColorObserver';
import DivsContainer from '@/components/divsHover/DivsContainer';
import VideoPrueba from '@/components/pruebaCosas/videoPrueba/VideoPrueba'
import { hExtraBold } from '@/fonts/fonts';
import { useRef, useState, useEffect } from 'react';




const Trabajos = () => {


  return (
    <div className='w-full h-full overflow-hidden bg-[#5a44c9]'>
      <div className='w-full flex justify-center'>
        <VideoPrueba />
      </div>
      <div className=' w-full h-[20vh] items-center  flex justify-start pl-[3rem]'>
        <h2 className={`${hExtraBold.className} text-[5em] text-center tracking-[-0.05em] text-[#bababa] uppercase`} >Esto es un titulo</h2>
      </div>
      <div className='w-full flex justify-center flex-wrap gap-2'>
        <CardHover />
      </div>
      <div className='w-full pt-[10em] gap-2 flex flex-wrap'>
        <CardContainer />
      </div>
      <div className='w-full'>
        <DivsContainer />
      </div>
    </div>
  )
}

export default Trabajos;