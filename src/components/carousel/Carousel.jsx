
'use client'
import useEmblaCarousel from 'embla-carousel-react'
import './embla.css'
import { useRef, useEffect } from 'react'
import { hExtraBold, hLight } from '@/fonts/fonts'


const images = [
    {
        id: "1",
        src: "https://res.cloudinary.com/dtxyn8cnq/video/upload/v1724870911/Mingyu_Maluma_Greta_Lee_and_More_Celebrate_the_Paris_Store_Opening_Calvin_Klein_1_puqolb.mp4",
        title: "Esto1",
        description: "lorem ipsum dolor sit amet consectetur adip"
    },
    {
        id: "2",
        src: "https://res.cloudinary.com/dtxyn8cnq/video/upload/v1724870911/Mingyu_Maluma_Greta_Lee_and_More_Celebrate_the_Paris_Store_Opening_Calvin_Klein_1_puqolb.mp4",
        title: "Esto2",
        description: "lorem ipsum dolor sit amet consectetur adip"
    },
    {
        id: "3",
        src: "https://res.cloudinary.com/dtxyn8cnq/video/upload/v1724870885/JENNIE_in_New_Season_Denim_Calvin_Klein_Spring_2024_tutio9.mp4",
        title: "Esto3",
        description: "lorem ipsum dolor sit amet consectetur adip"
    },
    {
        id: "4",
        src: "https://res.cloudinary.com/dtxyn8cnq/video/upload/v1724870846/modeloprofessional_ce8ov9.mp4",
        title: "Esto4",
        description: "lorem ipsum dolor sit amet consectetur adip"
    },
    {
        id: "5",
        src: "https://res.cloudinary.com/dtxyn8cnq/video/upload/v1724870846/modeloprofessional_ce8ov9.mp4",
        title: "Esto5",
        description: "lorem ipsum dolor sit amet consectetur adip"
    },
    {
        id: "6",
        src: "https://res.cloudinary.com/dtxyn8cnq/video/upload/v1724865778/fw22_you_ve_got_mail_the_sunday_collective_1080p_fvfnyg.mp4",
        title: "Esto6",
        description: "lorem ipsum dolor sit amet consectetur adip"
    },
    {
        id: "7",
        src: "https://res.cloudinary.com/dtxyn8cnq/video/upload/v1724865778/fw22_you_ve_got_mail_the_sunday_collective_1080p_fvfnyg.mp4",
        title: "Esto7",
        description: "lorem ipsum dolor sit amet consectetur adip"
    },
    {
        id: "8",
        src: "https://res.cloudinary.com/dtxyn8cnq/video/upload/v1724870846/modeloprofessional_ce8ov9.mp4",
        title: "Esto8",
        description: "lorem ipsum dolor sit amet consectetur adip"
    },
]

const Carousel = () => {
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
        <div className="embla" ref={emblaRef}>
            <div className="embla__container px-2">
                {images.map((image, index) => (
                    
                        <div key={image.title} className="embla__slide h-[100%] ">
                            <video
                            className='bg-transparent w-full'
                                ref={(el) => videoRefs.current[index] = el}
                                autoPlay
                                muted
                                loop

                            >
                                <source src={image.src} />
                            </video>
                            <div className='flex flex-col pt-[2rem]'>
                                <h2 className={`text-white text-[2rem] ${hExtraBold.className} `}>{image.title} </h2>
                                <p className={`text-white text-[1.6rem] ${hLight.className} `}>{image.description}</p>
                            </div>
                        </div>

                    
                ))}
            </div>
        </div>
    )
}

export default Carousel
