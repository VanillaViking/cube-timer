import {useState} from "react";

export enum Colours {
    WHITE,
    ORANGE,
    GREEN,
    RED,
    BLUE,
    YELLOW,
}

export type RubiksCube = {
    UFace: Colours[],
    LFace: Colours[],
    FFace: Colours[],
    RFace: Colours[],
    BFace: Colours[],
    DFace: Colours[],
}

const solvedCube = {
     UFace: Array(9).fill(Colours.WHITE),
     LFace: Array(9).fill(Colours.ORANGE),
     FFace: Array(9).fill(Colours.GREEN),
     RFace: Array(9).fill(Colours.RED),
     BFace: Array(9).fill(Colours.BLUE),
     DFace: Array(9).fill(Colours.YELLOW),
}

export function useRubiksCube(initialCube?: RubiksCube) {
    const [rubiksCube, setRubiksCube] = useState<RubiksCube>(initialCube || solvedCube);

    const turn = (move: string) => {
        const face = `${move[0]}Face`
        const anticlockwise = !!move[1]

        console.log(anticlockwise)
    }

    const rotateFace = () => {
        
    }

    return {
        rubiksCube,
        setRubiksCube,
        turn,
    }
}
