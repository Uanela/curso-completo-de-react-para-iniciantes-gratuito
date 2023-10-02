import { useState } from "react";

export default function Home() {
  // let name = 'Uanela';
  const [name, setName] = useState("Uanela");
  const [age, setAge] = useState(30);

  const handleClick = () => {
    // name = 'Como';
    setName("Como");
    setAge(40);
  };
  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>
        {name} tem {age} anos
      </p>
      <button onClick={handleClick}>Clique aqui</button>
    </div>
  );
}
