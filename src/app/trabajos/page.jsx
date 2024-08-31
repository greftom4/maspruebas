import VideoPrueba from '@/components/pruebaCosas/videoPrueba/VideoPrueba'
import dynamic from 'next/dynamic'

const DynamicVideo = dynamic(() => import('@/components/pruebaCosas/videoPrueba/VideoPrueba'), {
  ssr: false,
  loading: () => 
    
      <div className='flex justify-center items-center pt-[20vh] h-screen w-full bg-yellow-400'>
      <h1>CARGANDOOOO</h1>,
    </div>
    
      
    
    
})


const Trabajos = () => {
  return (
    <div>
      <DynamicVideo />
    </div>
  )
}

export default Trabajos;