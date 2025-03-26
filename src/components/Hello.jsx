function Hello(props){
    // const {name,message} = {props};
    // props.name="Jake"; cannt change the value of props
    return (
        <div>
            <h1>{props.message} {props.emoji} {props.name} </h1>
        </div>
    );
}
export default Hello;