
'use client'
import useEmblaCarousel from 'embla-carousel-react'
import './embla.css'
import Image from 'next/image'

const images = [
    {
        title: "1",
        src: "https://res.cloudinary.com/dtxyn8cnq/video/upload/v1724870911/Mingyu_Maluma_Greta_Lee_and_More_Celebrate_the_Paris_Store_Opening_Calvin_Klein_1_puqolb.mp4"
    },
    {
        title: "2",
        src: "https://res.cloudinary.com/dtxyn8cnq/video/upload/v1724870911/Mingyu_Maluma_Greta_Lee_and_More_Celebrate_the_Paris_Store_Opening_Calvin_Klein_1_puqolb.mp4"
    },
    {
        title: "3",
        src: "https://res.cloudinary.com/dtxyn8cnq/video/upload/v1724870885/JENNIE_in_New_Season_Denim_Calvin_Klein_Spring_2024_tutio9.mp4"
    },
    {
        title: "4",
        src: "https://res.cloudinary.com/dtxyn8cnq/video/upload/v1724870846/modeloprofessional_ce8ov9.mp4"
    },
    {
        title: "5",
        src: "https://res.cloudinary.com/dtxyn8cnq/video/upload/v1724870846/modeloprofessional_ce8ov9.mp4"
    },
    {
        title: "6",
        src: "https://res.cloudinary.com/dtxyn8cnq/video/upload/v1724865778/fw22_you_ve_got_mail_the_sunday_collective_1080p_fvfnyg.mp4"
    },
    {
        title: "7",
        src: "https://res.cloudinary.com/dtxyn8cnq/video/upload/v1724865778/fw22_you_ve_got_mail_the_sunday_collective_1080p_fvfnyg.mp4"
    },
    {
        title: "8",
        src: "https://res.cloudinary.com/dtxyn8cnq/video/upload/v1724870846/modeloprofessional_ce8ov9.mp4"
    },
]

const Carousel = () => {
    const [emblaRef] = useEmblaCarousel({ loop: true })

    return (
        <div className="embla " ref={emblaRef}>
            <div className="embla__container px-2">
                {images.map((image) => (
                    <div key={image.title} className="embla__slide ">
                        <video autoPlay muted loop>
                            <source src={image.src} />
                        </video>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Carousel