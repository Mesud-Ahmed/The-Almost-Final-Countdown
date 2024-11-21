import { useRef, useState } from "react"
import ResultModal from "./ResultModal"
export default function TimerChallenge({ title, targetTime }) {
    const [timeRemaining, setTimeRemainig] = useState(targetTime * 1000)

    const timer = useRef()
    const dialog = useRef()
    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000

    if (timeRemaining <= 0) {
        clearInterval(timer.current)

        dialog.current.open()
    }
    const handleStart = () => {

        timer.current = setInterval(() => {
            setTimeRemainig(prevTime => prevTime - 10)
        }, 10)
    }
    const handleStop = () => {
        dialog.current.open()
        clearInterval(timer.current)
    }
    const handleReset = () => {
        setTimeRemainig(targetTime * 1000)
    }
    return (

        <>
            <ResultModal
                ref={dialog}
                targetTime={targetTime}
                remainigTime={timeRemaining}
                onReset={handleReset}
            />
            <section className="challenge">
                <h2>{title}</h2>

                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}

                </p>
                <p>
                    <button onClick={timerIsActive ? handleStop : handleStart}>{timerIsActive ? 'Stop' : 'Start'} Challenge</button>
                </p>
                <p className={timerIsActive ? 'active' : undefined}>

                    {timerIsActive ? 'Time is running...' : 'Timer inactive'}
                </p>
            </section>
        </>

    )
}