import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

const Fresh = () => {
  const freshItems = [
    { id: 1, title: "Tomato (Local)", originalPrice: "₹45", offerPrice: "₹35", weight: "1kg", image: "https://cdn.zeptonow.com/production/ik-seo/tr:w-350,ar-3000-3000,pr-true,f-auto,q-80/cms/product_variant/270711b9-d545-44a6-a984-98e0fae2cd55/Tomato-Local.jpeg" },
    { id: 2, title: "Carrot (Local)", originalPrice: "₹55", offerPrice: "₹45", weight: "1kg", image: "https://cdn.zeptonow.com/production/ik-seo/tr:w-350,ar-500-336,pr-true,f-auto,q-80/inventory/product/7ae21cf6-2ac9-48c8-8e6f-cf27edc2aaaa-7de8a131-bfb2-4121-8615-dad1dc0306ae/Carrot-Local.jpeg" },
    { id: 3, title: "Beetroot", originalPrice: "₹50", offerPrice: "₹40", weight: "1kg", image: "https://cdn.zeptonow.com/production/ik-seo/tr:w-350,ar-1000-782,pr-true,f-auto,q-80/inventory/product/e150db5d-0552-4224-a892-a344d0b88cd7-4534c407-b3fd-4445-9659-f8f7f4bb2c43/Beetroot.jpeg" },
    { id: 4, title: "Onion", originalPrice: "₹30", offerPrice: "₹25", weight: "1kg", image: "https://cdn.zeptonow.com/production/ik-seo/tr:w-350,ar-3000-3000,pr-true,f-auto,q-80/cms/product_variant/3383b1f8-c1be-4e07-ad30-74418513f8fc/Onion.jpeg" },
    { id: 5, title: "Cabbage", originalPrice: "₹25", offerPrice: "₹20", weight: "1kg", image: "https://cdn.zeptonow.com/production/ik-seo/tr:w-350,ar-3000-3000,pr-true,f-auto,q-80/cms/product_variant/5f90fc05-f68d-407a-a980-ec5099bb0080/Cabbage.jpeg" },
    { id: 6, title: "Potato", originalPrice: "₹28", offerPrice: "₹22", weight: "1kg", image: "https://cdn.zeptonow.com/production/ik-seo/tr:w-350,ar-3000-3000,pr-true,f-auto,q-80/cms/product_variant/9ff7104c-3324-4eea-97a8-a4deccc87c20/Potato.jpeg" },
    { id: 7, title: "Lady Finger", originalPrice: "₹60", offerPrice: "₹50", weight: "1kg", image: "https://cdn.zeptonow.com/production/ik-seo/tr:w-350,ar-3000-3000,pr-true,f-auto,q-80/cms/product_variant/0106346e-a7ef-497b-a9ff-18da5cb8d602/Lady-Finger.jpeg" },
    { id: 8, title: "Cucumber", originalPrice: "₹40", offerPrice: "₹35", weight: "1kg", image: "https://cdn.zeptonow.com/production/ik-seo/tr:w-350,ar-3000-3000,pr-true,f-auto,q-80/cms/product_variant/39bfde0b-312d-4e0e-be31-54756dd0ef0a/Cucumber-English.jpeg" },
    { id: 9, title: "Tomato (Hybrid)", originalPrice: "₹50", offerPrice: "₹40", weight: "1kg", image: "https://cdn.zeptonow.com/production/ik-seo/tr:w-350,ar-3000-3000,pr-true,f-auto,q-80/cms/product_variant/7bbe0190-8366-4712-afa4-feb0566bf2e0/Tomato-Hybrid.jpeg" },
    { id: 10, title: "Cauliflower", originalPrice: "₹35", offerPrice: "₹30", weight: "1kg", image: "https://cdn.zeptonow.com/production/ik-seo/tr:w-350,ar-3000-3000,pr-true,f-auto,q-80/cms/product_variant/41dac350-b4a0-434a-9653-2ea45fe9887e/Cauliflower.jpeg" },
  ];

  const chunkedItems = [];
  for (let i = 0; i < freshItems.length; i += 4) {
    chunkedItems.push(freshItems.slice(i, i + 4));
  }

  return (
    <div className="container my-5">
      <div className="mb-4 text-center">
        <img
          src="https://cdn.zeptonow.com/production/tr:w-1280,ar-1313-364,pr-true,f-auto,q-80/inventory/banner/3c76556e-d5a3-437d-8872-90cc77e455c0.png"
          alt="Fresh Banner"
          className="img-fluid rounded-4"
        />
      </div>

      <h3 className="text-center mb-4">🥕 Freshest Veggies</h3>

      <div id="freshCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {chunkedItems.map((group, idx) => (
            <div className={`carousel-item ${idx === 0 ? 'active' : ''}`} key={idx}>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                {group.map((item) => (
                  <div className="card border-0 shadow-sm rounded-4" style={{ width: '160px' }} key={item.id}>
                    <img
                      src={item.image}
                      className="card-img-top rounded-top-4"
                      alt={item.title}
                      style={{ height: '140px', objectFit: 'cover' }}
                    />
                    <div className="card-body text-center p-2">
                      <h6 className="card-title mb-1" style={{ fontSize: '0.85rem' }}>{item.title}</h6>
                      <p className="text-muted mb-1" style={{ fontSize: '0.75rem' }}>{item.weight}</p>
                      <div className="mb-2">
                        <span className="text-muted me-1" style={{ textDecoration: 'line-through', fontSize: '0.75rem' }}>{item.originalPrice}</span>
                        <span className="text-success fw-bold" style={{ fontSize: '0.8rem' }}>{item.offerPrice}</span>
                      </div>
                      <button className="btn btn-outline-success btn-sm w-100">Add to Cart</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#freshCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#freshCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
        <button type="button" className="btn btn-info w-100">See all</button>

      </div>
    </div>
  );
};

export default Fresh;
