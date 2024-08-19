import { useState } from "react";

export default function MyButton() {
    
    const [state, setState] = useState(0);

    function stateHandeler() {
        setState(state + 1);
    }

    const reduceHandeler = () => {
        const reduce = state - 1;
        setState(reduce);
    }

    return (
        <div>
            <h1>Numbers: {state}</h1>
            <button onClick={stateHandeler}>Clicked</button>
            <button onClick={reduceHandeler}>Reduce</button>
        </div>
    )
}


