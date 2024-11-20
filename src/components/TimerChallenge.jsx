import { useRef, useState } from "react"
import ResultModal from "./ResultModal"
export default function TimerChallenge({ title, targetTime }) {
    const [timeExpired, setTimeExpired] = useState(false)
    const [timerStartd, setTimerStarted] = useState(false)
    const timer = useRef()
    const handleStart = () => {
        setTimerStarted(true)
        timer.current = setTimeout(() => {
            setTimeExpired(true)
        }, targetTime * 1000)
    }
    const handleStop = () => {
        clearTimeout(timer.current)
    }
    return (

        <>
            {timeExpired && <ResultModal targetTime={targetTime} result='lost'/>}
            <section className="challenge">
                <h2>{title}</h2>
                {timeExpired && <p>You Lost!!</p>}
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}

                </p>
                <p>
                    <button onClick={timerStartd ? handleStop : handleStart}>{timerStartd ? 'Stop' : 'Start'} Challenge</button>
                </p>
                <p className={timerStartd ? 'active' : undefined}>

                    {timerStartd ? 'Time is running...' : 'Timer inactive'}
                </p>
            </section>
        </>

    )
}