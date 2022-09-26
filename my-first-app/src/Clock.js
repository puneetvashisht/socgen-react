function Clock(props){
    return(
        <h2 id="display">Time now is : {props.now.getHours()}: {props.now.getMinutes()}: {props.now.getSeconds()}</h2>
    )
}

export default Clock;