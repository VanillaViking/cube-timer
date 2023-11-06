import {Colours} from "@/hooks/useRubiksCube"

const Face = ({stickers}: {stickers: Colours[]}) => {

    const colorVariants = [ 
        "bg-[#ffffff]",
        "bg-[#ffa500]",
        "bg-[#008000]",
        "bg-[#FF0000]",
        "bg-[#0000FF]",
        "bg-[#FFFF00]",
    ]

    return (
        <div className='w-48 h-48 grid grid-cols-3 border border-black'>
            <div className={`border border-black ${colorVariants[stickers[0]]}`}></div>
            <div className={`border border-black ${colorVariants[stickers[1]]}`}></div>
            <div className={`border border-black ${colorVariants[stickers[2]]}`}></div>
            <div className={`border border-black ${colorVariants[stickers[3]]}`}></div>
            <div className={`border border-black ${colorVariants[stickers[4]]}`}></div>
            <div className={`border border-black ${colorVariants[stickers[5]]}`}></div>
            <div className={`border border-black ${colorVariants[stickers[6]]}`}></div>
            <div className={`border border-black ${colorVariants[stickers[7]]}`}></div>
            <div className={`border border-black ${colorVariants[stickers[8]]}`}></div>
        </div>
    )
}

export default Face
