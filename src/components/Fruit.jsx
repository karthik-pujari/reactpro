export default function Fruit({name, emoji, price}){
    return (
        
            <li key={name}>{emoji} {name} {price}</li>
        
    );
}