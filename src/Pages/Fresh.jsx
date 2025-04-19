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

  const fruitImages = [
    { id: 1, title: "Grapes", src: 'https://cdn.zeptonow.com/production/ik-seo/tr:w-350,ar-3000-3000,pr-true,f-auto,q-80/cms/product_variant/775f7dfe-9459-4d3b-8c21-74c8388a8ff7/Grapes-Green-Seedless.jpeg' },
    { id: 2, title: "Watermelon", src: 'https://cdn.zeptonow.com/production/ik-seo/tr:w-350,ar-3000-3000,pr-true,f-auto,q-80/cms/product_variant/d684d49f-850e-4c4a-bed3-2f5ec4ba9c3c/Watermelon-Kiran-Tarbooj-.jpeg' },
    { id: 3, title: "Muskmelon", src: 'https://cdn.zeptonow.com/production/ik-seo/tr:w-350,ar-2924-3000,pr-true,f-auto,q-80/cms/product_variant/3adc39a4-e8dc-4da5-84e8-872396a75bdc/Muskmelon.jpeg' },
    { id: 4, title: "Banana Robusta", src: 'https://cdn.zeptonow.com/production/ik-seo/tr:w-350,ar-3000-3000,pr-true,f-auto,q-80/cms/product_variant/f35152f8-31b1-4450-ae76-fe0f8893005a/Banana-Robusta.jpeg' },
    { id: 5, title: "Banana Elaichi", src: "https://cdn.zeptonow.com/production/ik-seo/tr:w-350,ar-3000-3000,pr-true,f-auto,q-80/cms/product_variant/c1090b9c-d3f9-43d9-a46e-70ff482990b2/Banana-Elaichi-Yelakki.jpeg" },
    { id: 6, title: "Sapota", src: "https://cdn.zeptonow.com/production/ik-seo/tr:w-350,ar-3000-3000,pr-true,f-auto,q-80/cms/product_variant/9156c8a0-e9a3-4f54-a27c-2fc874db0f1f/Sapota.jpeg" },
    { id: 7, title: "Tender Coconut", src: "https://cdn.zeptonow.com/production/ik-seo/tr:w-350,ar-3000-3000,pr-true,f-auto,q-80/cms/product_variant/4bdbf9f5-023b-4d38-a1c6-f8a37c73759a/Tender-Coconut.jpeg" },
    { id: 8, title: "Gooseberry", src: "https://cdn.zeptonow.com/production/ik-seo/tr:w-350,ar-3000-3000,pr-true,f-auto,q-80/cms/product_variant/a5d2dffb-fbe0-49b4-8ef9-5a2b3b03e502/Gooseberry-Amla-.jpeg" },
    { id: 9, title: "Coconut", src: "https://cdn.zeptonow.com/production/ik-seo/tr:w-350,ar-3000-3000,pr-true,f-auto,q-80/cms/product_variant/cf5d5cc8-dcb1-405e-8f37-4af6e603851f/Coconut-Big.jpeg" },
    { id: 10, title: "Mosambi", src: "https://cdn.zeptonow.com/production/ik-seo/tr:w-350,ar-3000-3000,pr-true,f-auto,q-80/cms/product_variant/db426c6b-fbf9-48e2-ac55-cc53f78de3b8/Mosambi.jpeg" }
  ];

  const chunkedItems = [];
  for (let i = 0; i < freshItems.length; i += 4) {
    chunkedItems.push(freshItems.slice(i, i + 4));
  }

  const chunkedFruits = [];
  for (let i = 0; i < fruitImages.length; i += 4) {
    chunkedFruits.push(fruitImages.slice(i, i + 4));
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
                    <img src={item.image} className="card-img-top rounded-top-4" alt={item.title} style={{ height: '140px', objectFit: 'cover' }} />
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

        {/* Carousel Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#freshCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#freshCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      <button type="button" className="btn btn-info w-100 my-4">See all</button>

      <h3 className="text-center mb-4">🍉 Juiciest Fruits</h3>

      {/* Fruits Carousel */}
      <div id="fruitCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {chunkedFruits.map((group, idx) => (
            <div className={`carousel-item ${idx === 0 ? 'active' : ''}`} key={idx}>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                {group.map((fruit) => (
                  <div className="card border-0 shadow-sm rounded-4" style={{ width: '160px' }} key={fruit.id}>
                    <img src={fruit.src} className="card-img-top rounded-top-4" alt={fruit.title} style={{ height: '140px', objectFit: 'cover' }} />
                    <div className="card-body text-center p-2">
                      <h6 className="card-title mb-2" style={{ fontSize: '0.85rem' }}>{fruit.title}</h6>
                      <button className="btn btn-outline-success btn-sm w-100">Add to Cart</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#fruitCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#fruitCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

    </div>
  );
};

export default Fresh;
