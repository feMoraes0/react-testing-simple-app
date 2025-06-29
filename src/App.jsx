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
      <br />
      <input type="checkbox" id="disable-button" defaultChecked={false} />
      <label htmlFor="disable-button">Disable button</label>
    </div>
  );
}

export default App;
