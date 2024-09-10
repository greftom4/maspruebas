
import { Banner } from "../banners/Banner";
import ColorObserver from "./ColorObserver";


const CardContainer = () => {
    

    return (
       
            <div  className="flex w-full justify-center flex-wrap "> 
            <div className="w-full">
            <Banner
            text1="ESTO ES UN TEXT"
            className="text-[3rem] bg-transparent z-10 top-[1000px]"
            />

            </div>
                <ColorObserver />
            </div>

    )
}

export default CardContainer