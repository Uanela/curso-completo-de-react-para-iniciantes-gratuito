import { useState, useEffect } from "react";
import ProductsList from "./ProductsList";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/productss")
        .then((res) => {
          if (!res.ok)
            throw Error("Não foi possivel carregar os dados para este recurso");
          return res.json();
        })
        .then((data) => {
          setProducts(data);
          setIsLoading(false);
          setIsError(null);
        })
        .catch((err) => {
          setIsError(err.message);
          setIsLoading(false);
          setProducts(null);
        });
    }, 1000);
  }, []);

  return (
    <div className="home">
      {isError && (
        <p className="error-message">
          <span>!</span> {isError}
        </p>
      )}
      {isLoading && (
        <div className="notch-container">
          <FontAwesomeIcon icon={faCircleNotch} className="loading-notch" />
        </div>
      )}
      {products && <ProductsList products={products} title="Todos Productos" />}
    </div>
  );
}
