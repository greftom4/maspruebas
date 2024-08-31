
import { Banner } from "../Banner"
import Texto from "../Texto"
import Button from "@/components/boton/Button"

const BannerComp = () => {
    return (
        <div className="full flex flex-col gap-6 mt-[6rem] ">
            <Banner
                text1="Esto es un text"
                className="text-[5rem] "
                text2="no quiero esto"
            />
            <div className="w-full bg-transparent flex justify-between gap-[150px] pl-[50px]">
                <video autoPlay muted loop className="w-[40%]">
                    <source src="https://res.cloudinary.com/dtxyn8cnq/video/upload/v1724865778/fw22_you_ve_got_mail_the_sunday_collective_1080p_fvfnyg.mp4" />
                </video>
                <div className="flex flex-col justify-center gap-2">
                    <Texto
                    textP="Using negative values doesn’t make a ton of sense with the letter-spacing scale Tailwind includes out of the box, but if you’ve opted to customiz"
                    />
                        
                    
                    <Button ruta="/nosotros"/>
                </div>
                
            </div>

        </div>
    )
}

export default BannerComp