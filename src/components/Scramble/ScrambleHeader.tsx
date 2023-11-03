import {useEffect, useState} from "react"

const MOVES = ["R", "L", "U", "D", "F", "B", "R'", "L'", "U'", "D'", "F'", "B'", "R2", "L2", "U2", "D2", "F2", "B2"]

const generateScramble = () => {
        let prevMove = ""
        return Array(20).fill("").map((move, idx, scrambleArr) => {
            let newMove = ""
            do {
                newMove = MOVES[Math.floor(Math.random()*MOVES.length)];
            } while (newMove[0] === prevMove[0])
            prevMove = newMove
            return newMove
        }).join(" ")
}


const ScrambleHeader = ({ latestSolve }: { latestSolve: number | undefined }) => {
    const [scramble, setScramble] = useState<String>(generateScramble());

    useEffect(() => {
        setScramble(generateScramble()) 
    }, [latestSolve])


    return (
        <h1 className="mt-5 md:text-3xl text-md text-center">{scramble}</h1>
    )
}

export default ScrambleHeader;
