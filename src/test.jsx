import { useState } from "react";

function Child({ getName }) {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    getName(input);
  };

  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={handleSubmit}>
        Submit
      </button>
    </>
  );
}

export default Child;