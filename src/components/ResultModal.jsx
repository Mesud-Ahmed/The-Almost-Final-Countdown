import { useRef, forwardRef, useImperativeHandle } from "react"

const ResultModal = forwardRef(function ResultModal({  targetTime, remainigTime, onReset }, ref) {
    
    const dialog = useRef()
    const userLost = remainigTime <= 0
    const formatedTime = (remainigTime / 1000).toFixed(2)
    const score = Math.round((1 - remainigTime / (targetTime * 1000)) * 100)

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal()
            }
        }
    })
    return (
        <dialog ref={dialog} className="result-modal" onClose={onReset}>

            {userLost && <h2>You Lost</h2>}
            {!userLost && <h2>Your Score: {score}</h2>}
            <p>The target time was <strong>{targetTime}</strong> second</p>
            <p>You stopped the timer with <strong>{formatedTime} seconds left.</strong></p>
            <form method="dialog" onSubmit={onReset}>
                <button>close</button>
            </form>
        </dialog>
    )
})
export default ResultModal