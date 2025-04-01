export default function Fruit({name, emoji, price}){
    return (
        <>
            {price > 5 ? (
            <li>{emoji} {name} {price}</li>
            ) :
            (""
            )}
        </>
    );
}