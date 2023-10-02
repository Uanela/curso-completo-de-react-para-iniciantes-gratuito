import React from "react";

export default function ProductsList({ products, title }) {
  return (
    <div className="products-list">
      <h2>{title}</h2>
      {products.map((product) => (
        <div className="product-preview" key={product.id}>
          <h2>{product.name}</h2>
          <p>Adicionado por {product.worker}</p>
          <p>Preço: {product.price} Mzn</p>
        </div>
      ))}
    </div>
  );
}
