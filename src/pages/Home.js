import ProductsList from "../components/ProductsList";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFetch } from "../utils/useFetch";
import ErrorMessage from "../components/ErrorMessage";
import ProductsListSkeleton from "../components/ProductsListSkeleton";

export default function Home() {
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useFetch("http://localhost:8000/products");

  return (
    <div className="home">
      {isError && <ErrorMessage message={error.message} />}
      {isLoading && <ProductsListSkeleton title="Todos Productos" />}
      {products && <ProductsList products={products} title="Todos Productos" />}
    </div>
  );
}
