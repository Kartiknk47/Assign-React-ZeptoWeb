import React from "react";
// import { Link, useNavigate } from "react-router-dom";

const ProductsListBoost = ({ products }) => {
  if (!products) return null;

  const handleadd=(()=>{
})

  return (
    <div className="card shadow" style={{ width: "100%", fontSize: "0.85rem" }}>
      <img
        src={products.image}
        alt={products.name}
        className="card-img-top rounded-top"
        // style={{ height: "140px" }}
      />
      <div className="card-body p-2">
        <h6 className="card-title mb-1 text-truncate">{products.name}</h6>
        <p className="mb-0">Price: ${products.price}</p>
        <p className="mb-0">⭐{products.rating}</p>
        <p className="text-muted mb-0 small text-truncate">{products.category}</p>
        <button className="btn btn-primary" onClick={handleadd}>Add To Cart</button>
      </div>
    </div>
  );
};

export default ProductsListBoost;
