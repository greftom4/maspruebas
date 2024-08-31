
import BannerNosotros from "@/components/banners/BannerNosotros";
import CardPerspective from "@/components/cardPerspective/CardPerspective";


const Nosotros = () => {
  return (
    <>
      <div className="flex justify-center flex-col overflow-hidden w-full h-[370vh] pt-[20vh] bg-[#1d1d1d] ">
        <BannerNosotros

          text2="from timeless"
          textColor="Branding"
        />
        <div className="flex flex-col gap-[10rem] ">
          <CardPerspective />

        </div>
          <div className="w-full h-full bg-[#1d1d1d] ">

          </div>

          <div className="flex justify-center flex-wrap gap-2 bg-[#1d1d1d] ">
            <div className="w-[220px] h-[220px] bg-green-400 "></div>
            <div className="w-[220px] h-[220px] bg-green-400 "></div>
            <div className="w-[220px] h-[220px] bg-green-400 "></div>
            <div className="w-[220px] h-[220px] bg-green-400 "></div>
            <div className="w-[220px] h-[220px] bg-green-400 "></div>
            <div className="w-[220px] h-[220px] bg-green-400 "></div>
            <div className="w-[220px] h-[220px] bg-green-400 "></div>
            <div className="w-[220px] h-[220px] bg-green-400 "></div>
            <div className="w-[220px] h-[220px] bg-green-400 "></div>
            <div className="w-[220px] h-[220px] bg-green-400 "></div>
            <div className="w-[220px] h-[220px] bg-green-400 "></div>
            <div className="w-[220px] h-[220px] bg-green-400 "></div>
            <div className="w-[220px] h-[220px] bg-green-400 "></div>
            <div className="w-[220px] h-[220px] bg-green-400 "></div>
            <div className="w-[220px] h-[220px] bg-green-400 "></div>
            <div className="w-[220px] h-[220px] bg-green-400 "></div>
          </div>
      </div>
    </>
  )
}

export default Nosotros;