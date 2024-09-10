import Image from "next/image"

const images = [
    {
        id: 1,
        image1: "https://iili.io/debOvR9.png",
        image2: "https://iili.io/dSplMSp.png"
    },
    {
        id: 2,
        image1: "https://iili.io/demxZPV.png",
        image2: "https://iili.io/dSpV3Sj.png"
    },
    {
        id: 3,
        image1: "https://iili.io/dem7yZX.png",
        image2: "https://iili.io/dSpVKHx.png"
    },
    {
        id: 4,
        image1: "https://iili.io/debOvR9.png",
        image2: "https://iili.io/dSplMSp.png"
    },
    {
        id: 5,
        image1: "https://iili.io/demxZPV.png",
        image2: "https://iili.io/demzeOg.png"
    },
    {
        id: 6,
        image1: "https://iili.io/dem7yZX.png",
        image2: "https://iili.io/demaSX1.png"
    },
    {
        id: 7,
        image1: "https://iili.io/debOvR9.png",
        image2: "https://iili.io/debwb71.png"
    },
    {
        id: 8,
        image1: "https://iili.io/demxZPV.png",
        image2: "https://iili.io/demzeOg.png"
    },
    {
        id: 9,
        image1: "https://iili.io/dem7yZX.png",
        image2: "https://iili.io/demaSX1.png"
    },
    {
        id: 10,
        image1: "https://iili.io/debOvR9.png",
        image2: "https://iili.io/debwb71.png"
    },
    {
        id: 11,
        image1: "https://iili.io/demxZPV.png",
        image2: "https://iili.io/demzeOg.png"
    },
    {
        id: 12,
        image1: "https://iili.io/dem7yZX.png",
        image2: "https://iili.io/demaSX1.png"
    },

]
{/* <div>

<Image className="absolute flex " src="https://iili.io/debwb71.png" width={500} height={500} alt="fot1" />
<Image className="absolute flex hover:opacity-0 transition duration-700" src="https://iili.io/debOvR9.png" width={500} height={500} alt="fot2" />
</div> */}

const CardHover = () => {
    return (
        <>
            {images.map((image) => (
                <div key={image.id} className="w-[500px] h-[500px] relative">

                    <Image className="absolute flex " src={image.image1} width={500} height={500} alt="fot1" />
                    <Image className="absolute flex hover:opacity-0 transition duration-[1200ms]" src={image.image2} width={500} height={500} alt="fot2" />
                </div>
            ))}
        </>
    )
}

export default CardHover