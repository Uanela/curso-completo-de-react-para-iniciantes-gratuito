import { useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([
    {
      name: "Samsung S24 Ultra",
      description: "producto teste adicionado",
      worker: "Uanela",
      id: 1,
    },
    {
      name: "iPhone 15 Pro Max",
      description: "producto teste adicionado",
      worker: "Jobs",
      id: 2,
    },
    {
      name: "Xiaomi 13 Ultra",
      description: "producto teste adicionado",
      worker: "Buffet",
      id: 3,
    },
  ]);

  return (
    <div className="home">
      {products.map((product) => (
        <div className="product-preview" key={product.id}>
          <h2>{product.name}</h2>
         <p>Adicionado por {product.worker}</p>
        </div>
      )}
    </div>
  );
}
