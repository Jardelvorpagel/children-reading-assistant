import { useState } from "react";
import { Link } from "react-router-dom";

function Reading() {
  const [text, setText] = useState("The cat sat on the mat.");

  const speak = () => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div>
      <h1>Let's Read!</h1>
      <p>{text}</p>
      <button onClick={speak}>Read Aloud</button>
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
}

export default Reading;
