import {useRubiksCube} from "@/hooks/useRubiksCube"
import Face from "./Face"

const Visualiser = ({scramble}: {scramble: string}) => {
    const {rubiksCube: cube} = useRubiksCube(); 

    return (
      <div className='grid grid-cols-4 gap-4'>
        <div className='w-48 h-48'/>
        <Face stickers={cube.white} />
        <div className='w-48 h-48'/>
        <div className='w-48 h-48'/>
        <Face stickers={cube.orange}/>
        <Face stickers={cube.green}/>
        <Face stickers={cube.red}/>
        <Face stickers={cube.blue}/>
        <div className='w-48 h-48'/>
        <Face stickers={cube.yellow}/>
        <div className='w-48 h-48'/>
        <div className='w-48 h-48'/>
      </div>
    )
}

export default Visualiser
