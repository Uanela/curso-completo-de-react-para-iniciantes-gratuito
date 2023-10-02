import { useState, useEffect } from "react";
import ProductsList from "./ProductsList";

export default function Home() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="home">
      {products && <ProductsList products={products} title="Todos Productos" />}
    </div>
  );
}
