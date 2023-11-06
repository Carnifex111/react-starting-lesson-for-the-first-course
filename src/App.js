import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>Ты нажал на кнопку {count} раз!</p>
      <button onClick={handleClick}>Нажми на меня</button>
    </div>
  );
}

export default App;
