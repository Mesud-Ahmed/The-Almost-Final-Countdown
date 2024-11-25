import { useState } from "react";
import Player from "./components/Player"
import TimerChallenge from "./components/TimerChallenge"
import UserTimer from "./components/UserTimer";

function App() {
  const [challenges, setChallenges] = useState([
    { title: 'Easy', targetTime: 1 },
    { title: 'Not Easy', targetTime: 5 },
    { title: 'Getting tough', targetTime: 10 },
    { title: 'Pros only', targetTime: 15 },
  ]);

  const [open, setOpen] = useState(false);

  const addNewChallenge = (newChallenge) => {
    
      setChallenges((prevChallenges) => [...prevChallenges, newChallenge ])
      
}
  
  return (
    <>
      <Player />
      <div id="challenges">

        {challenges.map((challenge, index) => (
          <TimerChallenge key={index} title={challenge.title} targetTime={challenge.targetTime} />
        ))}
        <section className="challenge">
          <button onClick={() => setOpen(true)}>Add new challenge</button>
        </section>
      </div>
      <UserTimer open={open} onAddChallenge={addNewChallenge} onClose={() => setOpen(false)} />
    </>
  )
}

export default App
