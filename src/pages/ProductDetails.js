import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../utils/useFetch";
import ProductDetailsSkeleton from "../components/ProductDetailsSkeleton";

export default function ProductDetails() {
  const { id } = useParams();
  const {
    data: product,
    isLoading,
    isError,
    error,
  } = useFetch("http://localhost:8000/products/" + id);

  const navigate = useNavigate();
  const handleDelete = () => {
    fetch("http://localhost:8000/products/" + id, {
      method: "DELETE",
    }).then(() => navigate("/"));
  };

  return (
    <div className="product-details">
      <div></div>
      {isLoading && <ProductDetailsSkeleton />}
      {isError && <div>{error.message}</div>}
      {product && (
        <article>
          <h2>{product.name}</h2>
          <p>Preço: {product.price}</p>
          <p>Adicionado por {product.worker}</p>
          <div className="description">{product.description}</div>
          <button onClick={handleDelete}>Apagar producto</button>
        </article>
      )}
    </div>
  );
}
