import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  function handleClick() {
    setCount(count + 1);
  }

  function handleTextChange(event) {
    setText(event.target.value);
  }

  return (
    <div>
      <p>Ты нажал на кнопку {count} раз!</p>
      <button onClick={handleClick}>Нажми на меня</button>

      <br />

      <input type="text" value={text} onChange={handleTextChange} />
      <p>Здесь отображается все, что ты напечатал: {text}</p>
    </div>
  );
}

export default App;
