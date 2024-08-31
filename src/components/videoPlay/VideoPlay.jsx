'use client'
import { useRef, useState, useEffect } from 'react';
/* import Point from '../point/Point'; */
import MouseFollow from '../mouseFollow/MouseFollow';
/* import { motion } from 'framer-motion'; */


const VideoPlay = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRef = useRef(null);
  const fullscreenVideoRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0)

    const toggleFullscreen = () => {
      if (isFullscreen) {
        // Si estamos cerrando el video en pantalla completa
        setCurrentTime(fullscreenVideoRef.current.currentTime);
        fullscreenVideoRef.current.pause();
      } else {
        // Si estamos abriendo el video en pantalla completa
        setCurrentTime(videoRef.current.currentTime);
      }
      setIsFullscreen(!isFullscreen);
    };

  
    useEffect(() => {
      if (isFullscreen && fullscreenVideoRef.current) {
        fullscreenVideoRef.current.currentTime = currentTime;
        fullscreenVideoRef.current.play().catch(error => {
          console.error("Error al intentar reproducir el video:", error);
        });
      }
    }, [isFullscreen, currentTime]);


    useEffect(() => {
      const video = videoRef.current;
      
      // Iniciar la reproducción cuando el componente se monta
      video.play().catch(error => console.error("Error al reproducir el video:", error));
  
      // Pausar el video cuando el componente se desmonta
      return () => {
        video.pause();
      };
    }, []);



  useEffect(() => {
    const videoElement = videoRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoElement.play();
          } else {
            videoElement.pause();
          }
        });
      },
      { threshold: 0.6 } // Reproducir el video cuando el 50% del elemento esté visible
    );

    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, []);





  return (

    <div className='relative w-full h-screen '>
      <div className='absolute top-0 left-0 w-full h-full cursor-pointer' 
      onClick={toggleFullscreen}
      >
        <div className='absolute top-0 left-0 z-[100]'>
          <MouseFollow targetRef={videoRef} />
        </div>
        <video
          muted
          loop
          className="absolute top-0 left-0 w-auto h-full min-w-full min-h-full object-cover"
          ref={videoRef}
        >
          <source src="https://res.cloudinary.com/dl4tjbaow/video/upload/v1723041148/Mingyu_Maluma_Greta_Lee_and_More_Celebrate_the_Paris_Store_Opening_Calvin_Klein_1_zcvekb.mp4" />
        </video>
      </div>

      
        <div className={`fixed top-0 left-0 w-full h-screen bg-black bg-opacity-75 z-[1000] flex items-center justify-center transition duration-1000 ${isFullscreen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
        <div className='relative w-full h-full'>
          <button 
            className='absolute z-10 top-4 right-4 text-white text-2xl'
            onClick={toggleFullscreen}
          >
            ×
          </button>
          <video
            controls
            autoPlay
            muted
            ref={fullscreenVideoRef}
            className="w-full h-full object-cover min-w-full min-h-full"
          >
            <source src="https://res.cloudinary.com/dl4tjbaow/video/upload/v1723041148/Mingyu_Maluma_Greta_Lee_and_More_Celebrate_the_Paris_Store_Opening_Calvin_Klein_1_zcvekb.mp4" />
          </video>
        </div>
      </div>
   

    </div>
  )
}

export default VideoPlay