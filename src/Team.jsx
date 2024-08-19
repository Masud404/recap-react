import { useState } from "react"


export default function Team() {
    
    const [player, setPlayers] = useState(11);

    const handlerAdd = () => {
        const addPlayer = player + 1;
        setPlayers(addPlayer);
    }

    const handlerRemove = () => {
        const removePlayer = player - 1;
        setPlayers(removePlayer);
    }

    const teamStyle = {
        border: '2px solid purple',
        margin: '15px',
        padding: '15px',
        borderRadious: '15px'
    }

    return (
        <div style={teamStyle}>
            <h2>Players: {player}</h2>
            <button onClick={handlerAdd}>Add</button>
            <button onClick={handlerRemove}>Remove</button>
        </div>
    )
}