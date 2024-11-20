import { useState } from "react"
export default function TimerChallenge({ title, targetTime }) {
    const [timeExpired, setTimeExpired] = useState(false)
    const [timerStartd, setTimerStarted] = useState(false)
    const handleStart = () => {
        setTimerStarted(true)
        setTimeout(() => {
            setTimeExpired(true)
        }, targetTime * 1000)
    }
    return (
        <section className="challenge">
            <h2>{title}</h2>
            {timeExpired && <p>You Lost!!</p>}
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's' : ''}

            </p>
            <p>
                <button onClick={handleStart}>{timerStartd ? 'Stop': 'Start'} Challenge</button>
            </p>
            <p className={timerStartd ? 'active': undefined}>
                
                {timerStartd ? 'Time is running...':'Timer inactive'}
            </p>
        </section>
    )
}