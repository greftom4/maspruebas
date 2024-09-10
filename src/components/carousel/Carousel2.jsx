
'use client'
import useEmblaCarousel from 'embla-carousel-react'
import './embla2.css'
import { useRef, useEffect } from 'react'
import Image from 'next/image'

const images = [
    {
        id: "1",
        type: "video",
        src: "https://res.cloudinary.com/dtxyn8cnq/video/upload/v1724870911/Mingyu_Maluma_Greta_Lee_and_More_Celebrate_the_Paris_Store_Opening_Calvin_Klein_1_puqolb.mp4",
        title: "Esto1",
        description: "lorem ipsum dolor sit amet consectetur adip"
    },
    {
        id: "2",
        type: "image",
        img: "https://iili.io/dem7yZX.png",
        title: "Esto2",
        description: "lorem ipsum dolor sit amet consectetur adip"
    },
    {
        id: "3",
        type: "video",
        src: "https://res.cloudinary.com/dtxyn8cnq/video/upload/v1724870885/JENNIE_in_New_Season_Denim_Calvin_Klein_Spring_2024_tutio9.mp4",
        title: "Esto3",
        description: "lorem ipsum dolor sit amet consectetur adip"
    },
    {
        id: "4",
        type: "video",
        src: "https://res.cloudinary.com/dtxyn8cnq/video/upload/v1724870846/modeloprofessional_ce8ov9.mp4",
        title: "Esto4",
        description: "lorem ipsum dolor sit amet consectetur adip"
    },
    {
        id: "5",
        type: "image",
        img: "https://iili.io/dkfTvZx.png",
        title: "Esto5",
        description: "lorem ipsum dolor sit amet consectetur adip"
    },
    {
        id: "6",
        type: "video",
        src: "https://res.cloudinary.com/dtxyn8cnq/video/upload/v1724865778/fw22_you_ve_got_mail_the_sunday_collective_1080p_fvfnyg.mp4",
        title: "Esto6",
        description: "lorem ipsum dolor sit amet consectetur adip"
    },
    {
        id: "7",
        type: "video",
        src: "https://res.cloudinary.com/dtxyn8cnq/video/upload/v1724865778/fw22_you_ve_got_mail_the_sunday_collective_1080p_fvfnyg.mp4",
        title: "Esto7",
        description: "lorem ipsum dolor sit amet consectetur adip"
    },
    {
        id: "8",
        type: "video",
        src: "https://res.cloudinary.com/dtxyn8cnq/video/upload/v1724870846/modeloprofessional_ce8ov9.mp4",
        title: "Esto8",
        description: "lorem ipsum dolor sit amet consectetur adip"
    },
]

const Carousel2 = () => {
    const videoRefs = useRef([]);

    useEffect(() => {
        const observers = videoRefs.current.map((videoElement, index) => {
            if (!videoElement) return null;

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
                { threshold: 0.6 }
            );

            observer.observe(videoElement);

            return observer;
        });

        return () => {
            observers.forEach((observer, index) => {
                if (observer && videoRefs.current[index]) {
                    observer.unobserve(videoRefs.current[index]);
                }
            });
        };
    }, []);


    const [emblaRef] = useEmblaCarousel({ loop: true })

    return (
        <div className="embla " ref={emblaRef}>
            <div className="embla__container px-2">

                {images.map((image, index) => (
                    <div className="embla__slide bg-transparent">
                        {image.type === "video" ?
                            <video ref={(el) => videoRefs.current[index] = el} loop autoPlay muted>
                                <source src={image.src} />
                            </video>
                            :
                            <div>
                                <Image width={500} height={500} alt='fotis para mostrar' src={image.img} />
                            </div>
                        }
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Carousel2;