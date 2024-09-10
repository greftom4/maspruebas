'use client'
import { useState, useEffect,useRef } from "react";

const VideoPrueba = () => {
    const videoRef = useRef(null);


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
   
            <video className="w-full" ref={videoRef} muted autoPlay loop>
                <source src="https://res.cloudinary.com/dtxyn8cnq/video/upload/v1724870846/modeloprofessional_ce8ov9.mp4" />
            </video>

        
    )
}

export default VideoPrueba;