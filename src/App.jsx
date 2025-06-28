import { useState } from "react";
import "./App.css";

function App() {
  const [buttonClassColor, setButtonClassColor] = useState('red');
  const buttonText = buttonClassColor === 'red' ? 'blue' : 'red'

  return (
    <div>
      <button
        className={buttonClassColor}
        onClick={() => setButtonClassColor(buttonText)}
      >
        Change to {buttonText}
      </button>
    </div>
  );
}

export default App;
