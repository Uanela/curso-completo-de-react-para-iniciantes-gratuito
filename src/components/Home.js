import { useState, useEffect } from "react";
import ProductsList from "./ProductsList";

export default function Home() {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/products")
        .then((res) => res.json())
        .then((data) => {
          setProducts(data);
          setIsLoading(false);
        });
    }, 1000);
  }, []);

  return (
    <div className="home">
      {isLoading && <p>Carregando...</p>}
      {products && <ProductsList products={products} title="Todos Productos" />}
    </div>
  );
}
