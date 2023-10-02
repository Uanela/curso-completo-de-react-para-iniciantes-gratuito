import React from "react";

export default function Home() {
  const handleClick = (e) => {
    console.log("Olá Uanela", e);
  };

  const handleClickAgain = (name, e) => {
    console.log("Olá " + name, e.target);
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click me</button>
      <button onClick={(e) => handleClickAgain("Uanela", e)}>
        Click me again
      </button>
    </div>
  );
}
