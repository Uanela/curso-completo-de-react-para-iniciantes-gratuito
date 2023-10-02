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
      <button onClick={handleClick}>Clique aqui</button>
      <button onClick={(e) => handleClickAgain("Uanela", e)}>
        Clique novamente
      </button>
    </div>
  );
}
