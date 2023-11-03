import {useEffect, useState} from "react";

// how long the player needs to hold the spacebar down before the timer is startable 
const TIMER_START_DELAY = 300

const Timer = () => {
    const [time, setTime] = useState<number>(0.0);
    const [textColour, setTextColour] = useState<String>("#ffffff")
    
    let timerStart: null | number = null
    let keydownTime: null | number = null
    let timeoutId = 0
    let timerUpdater = 0

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown)
        document.addEventListener('keyup', handleKeyUp)

        return () => {
            document.removeEventListener('keydown', handleKeyDown)
            document.removeEventListener('keyup', handleKeyUp)
        }
    }, [])


    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key !== ' ') return;
        if (event.repeat) return;

        if (timerStart != null) {
            stopTimer()
            return
        }
        
        setTime(0)
        keydownTime = Date.now()
        setTextColour("text-timer-red")
        timeoutId = window.setTimeout(() => {
            setTextColour("text-timer-green")
        }, TIMER_START_DELAY)
    }

    const handleKeyUp = (event: KeyboardEvent) => {
        if (timerStart != null) {
            return
        }

        if (event.key === ' ' && keydownTime) {
            setTextColour("text-timer-default")
            clearTimeout(timeoutId)
            if (Date.now() - keydownTime >= TIMER_START_DELAY) {
                startTimer()
                keydownTime = null
            }
        }
        
    }

    const startTimer = () => {
        timerStart = Date.now()

        timerUpdater = window.setInterval(() => {
            //@ts-ignore
            setTime((Date.now() - timerStart)/1000) 
        }, 100)
    }

    const stopTimer = () => {
        let timerStop = Date.now()
        clearInterval(timerUpdater)
        //@ts-ignore
        setTime((timerStop - timerStart) / 1000)
        timerStart = null
        
    }


    return (
        <h1 className={`${textColour} text-[200px] absolute top-[50%] -translate-y-[50%]`}>{time.toFixed(1)}</h1>

    )
}

export default Timer;
