function Hello({person}){
    // const {name,message} = {props};
    // props.name="Jake"; cannt change the value of props

    return (
        <div>
            <h1>{person.message} {person.emoji} {person.name} {person.seatNumbers} </h1>
        </div>
    );
}
export default Hello;