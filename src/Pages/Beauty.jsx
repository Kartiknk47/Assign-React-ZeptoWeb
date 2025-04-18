import React from 'react';

const Beauty = () => {
  const products = [
    {
      id: 1,
      title: "Lakme Compact Foundation",
      image: "https://cdn.zeptonow.com/production/ik-seo/tr:w-350,ar-2000-2000,pr-true,f-auto,q-80/cms/product_variant/f712d6b9-d7dc-44d4-8d3c-5c436cf62385/Lakme-Xtraordin-airy-Compact-2-In-1-Compact-Foundation-Lightweight-SPF17-01-Ivory-Fair.jpeg",
      price: "₹549",
      offerPrice: "₹399"
    },
    {
      id: 2,
      title: "Maybelline Liquid Lipstick",
      image: "https://cdn.zeptonow.com/production/ik-seo/tr:w-350,ar-1000-1000,pr-true,f-auto,q-80/cms/product_variant/d8e8da27-1819-4e1d-a591-8949e8ac101a/Maybelline-New-York-Superstay-Liquid-Lipstick-Pioneer-Paraben-Free.jpeg",
      price: "₹799",
      offerPrice: "₹649"
    },
    {
      id: 3,
      title: "Renee 5 in 1 Lipstick",
      image: "https://cdn.zeptonow.com/production/ik-seo/tr:w-350,ar-960-1629,pr-true,f-auto,q-80/inventory/product/a0668126-33e0-4aa6-a49d-fc929a7c55bc-1OX2WnAV-cd7STt3SgtnASZKUTGCPiAA7/Renee-Fab-5-5In1-Lipstick.jpeg",
      price: "₹999",
      offerPrice: "₹799"
    },
    {
      id: 4,
      title: "L'Oreal Gel Eyeliner",
      image: "https://cdn.zeptonow.com/production/ik-seo/tr:w-350,ar-611-767,pr-true,f-auto,q-80/cms/product_variant/b9a9662c-6c3a-46c4-a244-51438a8f4948/L-Oreal-Paris-Super-Liner-Gel-Intenza-Eyeliner-Profound-Black.jpeg",
      price: "₹750",
      offerPrice: "₹599"
    },
    {
      id: 5,
      title: "Swiss Beauty Highlighting Stick",
      image: "https://cdn.zeptonow.com/production/ik-seo/tr:w-350,ar-1500-1500,pr-true,f-auto,q-80/cms/product_variant/2b53a596-93a9-4029-a666-e7a85be52da6/Swiss-Beauty-Insta-Glow-Highlighting-Stick-01.jpeg",
      price: "₹299",
      offerPrice: "₹199"
    },
  ];

  return (
    <div className='container mt-5'>
      <div className="text-center mb-4">
        <h1 style={{ fontSize: '70px', color: 'red' }}>Unbeatable <span style={{ color: 'black' }}>Deals</span></h1>
      </div>

      <div id="beautyCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {products.map((product, index) => (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={product.id}>
              <div className="d-flex justify-content-center">
                <div className="card border-0 shadow-sm rounded-4" style={{ width: '200px' }}>
                  <img src={product.image} className="card-img-top rounded-top-4" alt={product.title} style={{ height: '220px', objectFit: 'cover' }} />
                  <div className="card-body text-center p-2">
                    <h6 className="card-title" style={{ fontSize: '0.85rem' }}>{product.title}</h6>
                    <div>
                      <span className="text-muted me-1" style={{ textDecoration: 'line-through', fontSize: '0.8rem' }}>{product.price}</span>
                      <span className="text-success fw-bold" style={{ fontSize: '0.9rem' }}>{product.offerPrice}</span>
                    </div>
                    <button className="btn btn-outline-danger btn-sm mt-2 w-100">Shop Now</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#beautyCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#beautyCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
        <button type="button" className="btn btn-danger mt-3 w-100">See all</button>

        <div className="col mt-5">
            <img src='https://cdn.zeptonow.com/production/tr:w-1280,ar-1320-152,pr-true,f-auto,q-80/inventory/banner/2d242cc2-d411-4159-ac90-598dc6ba006b.png' alt='rough'/>
        </div>
      </div>
    </div>
  );
};

export default Beauty;
