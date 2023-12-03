const Refresh = (props)=> {
    return (
        <div>
            <h1>You Reach to End of Option</h1>
            <button onClick={()=> props.setTours(props.data)}>Refresh Your Journey</button>
        </div>
    )
}
export default Refresh;