import {useRubiksCube} from "@/hooks/useRubiksCube"
import Face from "./Face"

const Visualiser = ({scramble}: {scramble: string}) => {
    const {rubiksCube: cube, turn} = useRubiksCube(); 

    return (
    <>
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
      <div className="grid grid-cols-6 gap-2 mt-8">
        <button className='border w-[100px] h-[40px] border-slate-500 rounded-lg bg-slate-300' onClick={() => turn("F")}>F</button>
        <button className='border w-[100px] h-[40px] border-slate-500 rounded-lg bg-slate-300' onClick={() => turn("R")}>R</button>
        <button className='border w-[100px] h-[40px] border-slate-500 rounded-lg bg-slate-300' onClick={() => turn("U")}>U</button>
        <button className='border w-[100px] h-[40px] border-slate-500 rounded-lg bg-slate-300' onClick={() => turn("L")}>L</button>
        <button className='border w-[100px] h-[40px] border-slate-500 rounded-lg bg-slate-300' onClick={() => turn("D")}>D</button>
        <button className='border w-[100px] h-[40px] border-slate-500 rounded-lg bg-slate-300' onClick={() => turn("B")}>B</button>
        <button className='border w-[100px] h-[40px] border-slate-500 rounded-lg bg-slate-300' onClick={() => turn("F'")}>{`F'`}</button>
        <button className='border w-[100px] h-[40px] border-slate-500 rounded-lg bg-slate-300' onClick={() => turn("R'")}>{`R'`}</button>
        <button className='border w-[100px] h-[40px] border-slate-500 rounded-lg bg-slate-300' onClick={() => turn("U'")}>{`U'`}</button>
        <button className='border w-[100px] h-[40px] border-slate-500 rounded-lg bg-slate-300' onClick={() => turn("L'")}>{`L'`}</button>
        <button className='border w-[100px] h-[40px] border-slate-500 rounded-lg bg-slate-300' onClick={() => turn("D'")}>{`D'`}</button>
        <button className='border w-[100px] h-[40px] border-slate-500 rounded-lg bg-slate-300' onClick={() => turn("B'")}>{`B'`}</button>
      </div>
    </>
    )
}

export default Visualiser
