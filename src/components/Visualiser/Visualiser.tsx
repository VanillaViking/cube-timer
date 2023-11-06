import {useRubiksCube} from "@/hooks/useRubiksCube"
import Face from "./Face"

const Visualiser = ({scramble}: {scramble: string}) => {
    const {rubiksCube: cube} = useRubiksCube(); 

    return (
      <div className='grid grid-cols-4 gap-4'>
        <div className='w-48 h-48'/>
        <Face stickers={cube.UFace} />
        <div className='w-48 h-48'/>
        <div className='w-48 h-48'/>
        <Face stickers={cube.LFace}/>
        <Face stickers={cube.FFace}/>
        <Face stickers={cube.RFace}/>
        <Face stickers={cube.BFace}/>
        <div className='w-48 h-48'/>
        <Face stickers={cube.DFace}/>
        <div className='w-48 h-48'/>
        <div className='w-48 h-48'/>
      </div>
    )
}

export default Visualiser
