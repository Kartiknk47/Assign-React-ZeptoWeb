import React from 'react';

const DealZone = () => {
  const fruitsVeggies = [
    {
      title: 'Grapes Bangalore Blue',
      image: 'https://cdn.zeptonow.com/production/ik-seo/tr:w-350,ar-500-357,pr-true,f-auto,q-80/inventory/product/640a9531-ad5a-4e2a-88cc-3ab461154895-d1edf8d4-76cb-450e-836b-8ceaaa79025d/Grapes-Bangalore-Blue.jpeg',
      price: 79,
      mrp: 99,
    },
    {
      title: 'Curry Leaves (Cleaned)',
      image: 'https://cdn.zeptonow.com/production/ik-seo/tr:w-350,ar-3000-3000,pr-true,f-auto,q-80/cms/product_variant/9f080e68-31d0-494e-81be-486f5a62619e/Curry-Leaves-Cleaned-without-roots.jpeg',
      price: 19,
      mrp: 25,
    },
    {
      title: 'Garlic',
      image: 'https://cdn.zeptonow.com/production/ik-seo/tr:w-350,ar-3000-3000,pr-true,f-auto,q-80/cms/product_variant/033d6c43-9275-4288-90ae-662cf4f297cc/Garlic.jpeg',
      price: 49,
      mrp: 60,
    },
    {
      title: 'Capsicum Green',
      image: 'https://cdn.zeptonow.com/production/ik-seo/tr:w-350,ar-3000-3000,pr-true,f-auto,q-80/cms/product_variant/189f047d-fdc5-46b7-a131-896af340416b/Capsicum-Green.jpeg',
      price: 29,
      mrp: 40,
    },
  ];

  const dairyEggs = [
    {
      title: 'Milk + Spinach Combo',
      image: 'https://cdn.zeptonow.com/production/ik-seo/tr:w-350,ar-1494-1494,pr-true,f-auto,q-80/cms/product_variant/55c195fe-502c-4f14-a132-2591031f9af3/Akshayakalpa-Amrutha-A2-Pasteurized-Fresh-Milk-Pouch-1pc-Spinach-Cleaned-Without-Roots-1pc-Combo.jpg',
      price: 85,
      mrp: 105,
    },
    {
      title: 'Paneer + Banana Combo',
      image: 'https://cdn.zeptonow.com/production/ik-seo/tr:w-350,ar-1494-1494,pr-true,f-auto,q-80/cms/product_variant/001aeebc-3bc5-41a0-b573-2c0954401bba/Akshayakalpa-Organic-Malai-Paneer-1pc-Banana-Elaichi-Yelakki-1pc-Combo.jpg',
      price: 115,
      mrp: 135,
    },
    {
      title: 'Milk + Coriander Combo',
      image: 'https://cdn.zeptonow.com/production/ik-seo/tr:w-350,ar-1500-1500,pr-true,f-auto,q-80/cms/product_variant/66064c99-bdf6-4995-9b07-93eb6168537b/Nandini-Standardised-Fresh-Milk-Pouch-Orange-1pc-Coriander-Leaves-1pc-Combo.jpg',
      price: 55,
      mrp: 65,
    },
    {
      title: 'Dosa Batter + Mint Combo',
      image: 'https://cdn.zeptonow.com/production/ik-seo/tr:w-350,ar-1494-1494,pr-true,f-auto,q-80/cms/product_variant/95e4209d-0e32-47df-91f5-4efaebdd591c/Id-Idli-Dosa-Batter-2-0-Kilogram-1pc-Mint-Leaves-1pc-Combo-.jpg',
      price: 99,
      mrp: 125,
    },
  ];

  return (
    <div className="container mt-5 text-center">
      {/* Banner */}
      <div className="mb-4">
        <img
          src="https://cdn.zeptonow.com/production/tr:w-1077,ar-1077-396,pr-true,f-auto,q-80/inventory/banner/64ea24fc-e8ae-4f7a-a49a-e5316637bf22.png"
          alt="hero"
          className="img-fluid rounded-4 shadow"
        />
      </div>

      {/* Fruits & Veggies */}
      <h1 className="mb-4">Fruits & Veggies</h1>
      <div className="row g-3 mb-5">
        {fruitsVeggies.map((item, index) => (
          <div className="col-6 col-md-3" key={index}>
            <div className="card border-0 shadow-sm rounded-4 h-100">
              <img
                src={item.image}
                alt={item.title}
                className="card-img-top rounded-top-4"
                style={{ height: '180px', objectFit: 'cover' }}
              />
              <div className="card-body p-2">
                <h6 className="card-title mb-1" style={{ fontSize: '0.95rem' }}>
                  {item.title}
                </h6>
                <div className="d-flex justify-content-center align-items-center gap-2 mb-2">
                  <span className="fw-bold">₹{item.price}</span>
                  <small className="text-muted text-decoration-line-through">₹{item.mrp}</small>
                </div>
                <button className="btn btn-sm btn-success w-100 rounded-3">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dairy, Breads & Eggs */}
      <h1 className="mb-4">Dairy, Breads & Eggs</h1>
      <div className="row g-3">
        {dairyEggs.map((item, index) => (
          <div className="col-6 col-md-3" key={index}>
            <div className="card border-0 shadow-sm rounded-4 h-100">
              <img
                src={item.image}
                alt={item.title}
                className="card-img-top rounded-top-4"
                style={{ height: '180px', objectFit: 'cover' }}
              />
              <div className="card-body p-2">
                <h6 className="card-title mb-1" style={{ fontSize: '0.95rem' }}>
                  {item.title}
                </h6>
                <div className="d-flex justify-content-center align-items-center gap-2 mb-2">
                  <span className="fw-bold">₹{item.price}</span>
                  <small className="text-muted text-decoration-line-through">₹{item.mrp}</small>
                </div>
                <button className="btn btn-sm btn-success w-100 rounded-3">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealZone;
