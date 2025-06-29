import { useState } from "react";
import "./App.css";

function App() {
  const [buttonClassColor, setButtonClassColor] = useState('red');
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const buttonText = buttonClassColor === 'red' ? 'blue' : 'red'

  return (
    <div>
      <button
        className={buttonClassColor}
        onClick={() => setButtonClassColor(buttonText)}
        disabled={buttonDisabled}
      >
        Change to {buttonText}
      </button>
      <br />
      <input type="checkbox" id="disable-button" defaultChecked={false} onClick={(e) => setButtonDisabled(e.target.checked)} />
      <label htmlFor="disable-button">Disable button</label>
    </div>
  );
}

export default App;
