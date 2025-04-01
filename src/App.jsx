// import ConditionalComponent from "./components/ConditionalComponent";
import ConditionalComponent from "./components/ConditionalComponent";
import Fruits from "./components/Fruits";
import Hello from "./components/Hello";

function App() {
  return(
    <div>
      <Fruits/>
      <ConditionalComponent />
    </div>
  );
  
}
export default App


// const  person = {
//   name : "Rob",
//   message : "Hello There!",
//   emoji : "👋",
//   seatNumbers : [1,4,7],
// };
// return(
//   <div>
//     <Hello person={person}/>
//   </div>
// );