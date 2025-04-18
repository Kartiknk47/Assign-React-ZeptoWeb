import React from 'react';

const Fashion = () => {
  const fashionItems = [
    {
      title: 'Voylla Temple Love Choker',
      image:
        'https://cdn.zeptonow.com/production/ik-seo/tr:w-400,ar-1000-1000,pr-true,f-auto,q-80/cms/product_variant/83af0d4a-313f-4379-87cf-b1fa8cc2e0c1/Voylla-Temple-Of-Love-Lattice-Pattern-Choker-Necklace.jpeg',
      price: 799,
      mrp: 1299,
    },
    {
      title: 'Voylla Aztec Bar Necklace',
      image:
        'https://cdn.zeptonow.com/production/ik-seo/tr:w-400,ar-1500-1500,pr-true,f-auto,q-80/cms/product_variant/e82744a8-5735-4b14-807a-09bfa6ce6f57/Voylla-Aztec-Bar-Tribal-Inspired-Choker-Necklace.jpg',
      price: 699,
      mrp: 1199,
    },
  ];

  return (
    <div className="container mt-5">
      {/* New In Store */}
      <div className="mb-5 text-center">
        <h1>New In Store</h1>
        <div className="d-flex justify-content-center align-items-center gap-3 flex-wrap mt-3">
          <img
            src="https://cdn.zeptonow.com/production/tr:w-120,ar-416-416,pr-true,f-auto,q-80/inventory/banner/ae6ed047-640e-4844-a078-6d92a5f4d8f8.png"
            alt="men"
            className="rounded-circle"
          />
          <img
            src="https://cdn.zeptonow.com/production/tr:w-120,ar-416-416,pr-true,f-auto,q-80/inventory/banner/364cf828-2d15-4b38-a558-2453686364b1.png"
            alt="women"
            className="rounded-circle"
          />
          <img
            src="https://cdn.zeptonow.com/production/tr:w-120,ar-416-416,pr-true,f-auto,q-80/inventory/banner/6df5704f-6420-495e-b3f8-fb0ac035a288.png"
            alt="T&A"
            className="rounded-circle"
          />
        </div>
      </div>

      {/* Deals of the Day */}
      <div className="text-center mb-4">
        <p className="text-danger fw-bold">UP TO 60% OFF</p>
        <h1 className="mb-4">DEALS OF THE DAY</h1>
        <div className="row g-4">
          {fashionItems.map((item, index) => (
            <div className="col-6 col-md-3" key={index}>
              <div className="card border-0 shadow-sm rounded-4 h-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="card-img-top rounded-top-4"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body p-3 text-center">
                  <h6 className="card-title mb-2" style={{ fontSize: '0.95rem' }}>
                    {item.title}
                  </h6>
                  <div className="d-flex justify-content-center align-items-center gap-2 mb-3">
                    <span className="fw-bold">₹{item.price}</span>
                    <small className="text-muted text-decoration-line-through">₹{item.mrp}</small>
                  </div>
                  <button className="btn btn-sm btn-primary w-100 rounded-3">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Fashion;
