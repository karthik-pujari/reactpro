export default function Fruit({name, emoji, price, soldout}){
    return (
        <>
         
            <li>{emoji} {name} {price} {soldout ? "soldOut": ""}</li>
        </>
    );
}