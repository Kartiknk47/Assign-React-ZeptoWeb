import React, { useEffect, useState } from 'react';
import ProductsListBoost from './ProductsListBoost';

const ProductList = () => {
  const [products, setProducts] = useState([]); 

  useEffect(() => {
    fetch('https://674e84f1635bad45618eebc1.mockapi.io/api/v1/zeptoproducts') 
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []); 

  return (
    <div className="container py-4">
      <div className="row g-4">
        {products.map((elmt) => (
          <div key={elmt.id} className="col-sm-12 col-md-6 col-lg-4" style={{padding:'20px'}}>
            <ProductsListBoost products={elmt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
