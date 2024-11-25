import { useState } from "react";
export default function UserTimer({ onAddChallenge, onClose, open }) {
    const [newTitle, setNewTitle] = useState('');
    const [newTime, setNewTime] = useState('');

    const handleAddChallenge = () => {
        if (newTitle && newTime > 0) {
            onAddChallenge({ title: newTitle, targetTime: parseFloat(newTime) });
            setNewTitle('');
            setNewTime('');
            onClose();
        }
    };

    return (
        <dialog className="result-modal" open={open}>
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
            <button onClick={handleAddChallenge}>Add Challenge</button>
            <button onClick={onClose}>Cancel</button>
        </dialog>
    )
}