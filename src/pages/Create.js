import { useState } from "react";

export default function Create() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState();
  const [description, setDescription] = useState("");
  const [worker, setWorker] = useState("Uanela");

  return (
    <div className="create">
      <h2>Adicionar um Novo Producto</h2>
      <form>
        <label>Nome do producto:</label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Descrição:</label>
        <textarea
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <label>Preço:</label>
        <input
          type="number"
          required
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <label>Funcionário:</label>
        <select value={worker} onChange={(e) => setWorker(e.target.value)}>
          <option value="Uanela">Uanela</option>
          <option value="Como">Como</option>
        </select>
        <button>Adicionar Producto</button>
      </form>
    </div>
  );
}
