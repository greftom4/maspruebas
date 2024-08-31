import { Banner } from "@/components/banners/Banner";
import BannerComp from "@/components/banners/bannerComp/BannerComp";
import CarouselComp from "@/components/banners/carousel&text/CarouselComp";
import Texto from "@/components/banners/Texto";
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
          <h2 className="text-[5em] text-white ">ESTO</h2>
          <h2 className="text-[5em] text-white ">ESTO</h2>
          <h2 className="text-[5em] text-white ">ESTO</h2>
          <h2 className="text-[5em] text-white ">ESTO</h2>
          <h2 className="text-[5em] text-white ">ESTO</h2>
          <h2 className="text-[5em] text-white ">ESTO</h2>
          <h2 className="text-[5em] text-white ">ESTO</h2>
          <h2 className="text-[5em] text-white ">ESTO</h2>
        </div>
      </div>


    </div>
  )
}