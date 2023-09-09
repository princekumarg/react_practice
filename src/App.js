import './App.css';
import { useState } from "react";
function App() {
  const [text, setText] = useState("Prince");
  const handleChange = (event) => {
    setText(event.target.value);
  }
  return (
    <div className="App">
      <input type="text" name="content" id="content" onChange={handleChange} />
      {text}
    </div>
    
  );
}

export default App;
