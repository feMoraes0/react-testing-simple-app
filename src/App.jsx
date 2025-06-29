import { useState } from "react";
import "./App.css";
import { kebabCaseToTitleCase } from "./helper";

function App() {
  const [currentColor, setCurrentColor] = useState('medium-violet-red');
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const nextColorClass = currentColor === 'medium-violet-red' ? 'midnight-blue' : 'medium-violet-red'
  const buttonText = kebabCaseToTitleCase(nextColorClass);
  const buttonClassName = buttonDisabled ? "gray" : currentColor;

  return (
    <div>
      <button
        className={buttonClassName}
        onClick={() => setCurrentColor(nextColorClass)}
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
