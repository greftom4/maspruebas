import Carousel from "@/components/carousel/Carousel"
import { Banner } from "../Banner"
import Button from "@/components/boton/Button"
import { hExtraMedium } from "@/fonts/fonts"


const CarouselComp = () => {
    return (
        <div className="flex flex-col  ">
            <div className="flex justify-between items-center">
                <div className="w-fill flex items-center justify-start ">
                    <Banner
                        className={`w-[45rem] tracking-[0.01em] pb-[7vh] text-[3rem] ${hExtraMedium.className}`}
                        text1="Featured works"
                    />
                </div>
                <Button className=" mr-[10rem]  mt-[15vh] " ruta="/trabajos"
                />

            </div>

            <div>
                <Carousel />
            </div>
        </div>
    )
}

export default CarouselComp