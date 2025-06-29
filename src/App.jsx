import { useState } from "react";
import "./App.css";

function App() {
  const [currentColor, setCurrentColor] = useState('red');
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const buttonText = currentColor === 'red' ? 'blue' : 'red'
  const buttonClassName = buttonDisabled ? "gray" : currentColor;

  return (
    <div>
      <button
        className={buttonClassName}
        onClick={() => setCurrentColor(buttonText)}
        disabled={buttonDisabled}
      >
        Change to {buttonText}
      </button>
      <br />
      <input type="checkbox" id="disable-button" defaultChecked={false} onChange={(e) => setButtonDisabled(e.target.checked)} />
      <label htmlFor="disable-button">Disable button</label>
    </div>
  );
}

export default App;
