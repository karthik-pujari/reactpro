import ConditionalComponent from "./components/ConditionalComponent";
import Fruits from "./components/Fruits";
import Hello from "./components/Hello";
import Message from "./components/Message";

function App() {
  return(
    <div>
      <Message />
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