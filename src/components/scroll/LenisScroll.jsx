'use client'
import { ReactLenis, useLenis } from 'lenis/react'

const LenisScroll = ({children}) => {
    
  return (
    <ReactLenis root options={{
      lerp:"0.06"
    }} >
        {children}
    </ReactLenis>
  )
}

export default LenisScroll