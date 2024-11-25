import { useRef, useState } from "react";
import Player from "./components/Player"
import TimerChallenge from "./components/TimerChallenge"

function App() {
  const [challenges, setChallenges] = useState([
    { title: 'Easy', targetTime: 1 },
    { title: 'Not Easy', targetTime: 5 },
    { title: 'Getting tough', targetTime: 10 },
    { title: 'Pros only', targetTime: 15 },
  ]);


  const [newTitle, setNewTitle] = useState('');
  const [newTime, setNewTime] = useState('');

  const [open, setOpen] = useState(false);

  const handleNewChallenge = () => {
    if (newTitle && newTime > 0) {
      setChallenges((prevChallenges) => [
        ...prevChallenges, { title: newTitle, targetTime: parseFloat(newTime) },
      ])
      setNewTitle('');
      setNewTime('');
      setOpen(false);
    }
  }
  const showDialogModal = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  return (
    <>
      <Player />
      <div id="challenges">

        {challenges.map((challenge,index) => (
          <TimerChallenge key={index} title={challenge.title} targetTime={challenge.targetTime} />
        ))}
        <section className="challenge">
          <button onClick={showDialogModal}>Add new challenge</button>
        </section>
      </div>
      <dialog  className="result-modal" open={open} onClose={handleClose}>
        <p>
          <label htmlFor="title">Challenge Name: </label>
          <input
            id="title"
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="time">Target Time: </label>
          <input
            id="time"
            type="number"
            value={newTime}
            onChange={(e) => setNewTime(e.target.value)}
          />
        </p>
        <button onClick={handleNewChallenge}>Add challenge</button>
        <button onClick={handleClose}>Cancel</button>
      </dialog>
    </>
  )
}

export default App
