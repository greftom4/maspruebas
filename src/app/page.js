import { Banner } from "@/components/banners/Banner";
import BannerComp from "@/components/banners/bannerComp/BannerComp";
import CarouselComp from "@/components/banners/carousel&text/CarouselComp";
import Texto from "@/components/banners/Texto";
import Carousel2 from "@/components/carousel/Carousel2";
import Footer from "@/components/footer/Footer";
import ServicesSection from "@/components/servicesSection/ServicesSection";
import VideoPlay from "@/components/videoPlay/VideoPlay";



export default function Home() {
  return (
    <div className="pt-[9vh] bg-black overflow-hidden">
      <div>
        <Banner
          text1="Design studio"
          className="text-[5rem] "
          text2="from timeless"
          textColor="Branding"
        />
      </div>
      <div className="relative">
        <VideoPlay />
      </div>
      <div className="w-full flex justify-center flex-wrap mt-[4rem] ">
        <CarouselComp />
      </div>
      <div>
        <BannerComp />
      </div>

      <div className="flex flex-col mt-[18vh] ">
        <Texto
          textP="Using negative"
        />

        <div className="flex flex-col">
          <ServicesSection />
        </div>
      </div>

      <div>
        <Carousel2 />
      </div>
        <video>
          <source src="https://res.cloudinary.com/dl4tjbaow/video/upload/v1723041148/Mingyu_Maluma_Greta_Lee_and_More_Celebrate_the_Paris_Store_Opening_Calvin_Klein_1_zcvekb.mp4" />
        </video>
      

    </div>
  )
}