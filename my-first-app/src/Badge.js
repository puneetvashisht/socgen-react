import { useState } from "react";

function Badge(props){

    const [count, setCount] = useState(10);

    const incrementCount = () => {
        console.log('on click event...')
        setCount(count + 1);
    }

    return (
        <button type="button" className="btn btn-primary" onClick={incrementCount}>
         {props.caption} <span className="badge text-bg-secondary">{count}</span>
        </button>
    )
}
export default Badge;