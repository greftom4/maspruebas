

const DivsHover = () => {
  return (
    
        <div className=" relative object-cover w-[50px] h-[50px]">
            <div className="absolute w-[50px] h-[50px]  bg-pink-400"></div>
            <div className="absolute w-[50px] h-[50px] transition duration-100 ease-in hover:opacity-0 bg-gray-400"></div>
        </div>
    
  )
}

export default DivsHover