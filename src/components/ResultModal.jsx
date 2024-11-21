import { useRef, forwardRef, useImperativeHandle } from "react"

const ResultModal = forwardRef(function ResultModal({ result, targetTime }, ref) {
    const dialog = useRef()
    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal()
            }
        }
    })
    return (
        <dialog ref={dialog} className="result-modal" >
            <h2>You {result}</h2>
            <p>The target time was <strong>{targetTime}</strong> second</p>
            <p>You stopped the timer with <strong>X seconds left.</strong></p>
            <form method="dialog">
                <button>close</button>
            </form>
        </dialog>
    )
})
export default ResultModal