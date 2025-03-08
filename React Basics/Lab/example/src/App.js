
/*
import './App.css';



// Guess number app
 function App() {
  function handleClick() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    console.log(randomNum);
    let userInput = prompt('type a number');
    alert(`Computer number: ${randomNum}, Your guess: ${userInput}`);
  }
  
  return (
    <div>
      <button onClick={handleClick}>Guess the number between 1 and 3</button>
    </div>
  );
}

export default App;



// function Heading() {
//   return (
//     <div>
//     <h1>This is header</h1>
//   </div>
//   )
// }
// function App() {
//   return (
//       <Heading />
//     );
// }

// export default App;
*/

// Filename - App.js
// It contains the Form, its Structure
// and Basic Form Functionalities

import "./App.css";
import FormEx from "./FormEx";
import InputComponent from "./Components/InputComponent";

function App() {
    return(
        // <FormEx /> // Form example
        <InputComponent />
    );    
}


export default App;

