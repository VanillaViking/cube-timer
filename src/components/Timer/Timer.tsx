import {useState} from "react";

const Timer = () => {
    const [time, setTime] = useState<number>(0.0);


    return (
        <h1 className="text-[200px] absolute top-[50%] -translate-y-[50%]">{time.toFixed(1)}</h1>
    )
}

export default Timer;
