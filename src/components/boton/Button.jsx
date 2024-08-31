'use client'
import { useRouter } from "next/navigation"
import { hExtraBold } from "@/fonts/fonts";

const Button = ({ruta, className="",}) => {
    const router = useRouter();
    const manejarRutas = () => {
        router.push(ruta);
    }
    return (
        <div className={`flex h-[100px] gap-3 items-center cursor-pointer w-[200px] ${className} `} onClick={manejarRutas}>
            <div className="flex  ">
               <h4 className={` text-[1.5rem] text-white ${hExtraBold.className} `}>Lets talk</h4>
            </div>
            
            <svg className="flex justify-normal items-center fill-[#B6A2FF] hover:fill-pink-300 transition duration-700" style={{backgroundColor:"transparent"}} width="50" height="50" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle className="bg-green-400" cx="50" cy="50" r="50"  />
            </svg>

        </div>
    )
}

export default Button