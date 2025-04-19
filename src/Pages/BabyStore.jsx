import React from 'react';

const BabyStore = () => {
  const categories = [
    { image: 'https://cdn.zeptonow.com/production/tr:w-120,f-auto,q-80/inventory/banner/996943e4-3165-44f8-8884-a3e413804cdf.png', title: 'Baby Care' },
    { image: 'https://cdn.zeptonow.com/production/tr:w-120,f-auto,q-80/inventory/banner/8c8fa4f7-730d-43a1-9d09-2d1e6c501cfb.png', title: 'Baby Food' },
    { image: 'https://cdn.zeptonow.com/production/tr:w-120,f-auto,q-80/inventory/banner/4f0ff1f2-6726-40db-bbc0-663ff0f4dbac.png', title: 'Toys' },
    { image: 'https://cdn.zeptonow.com/production/tr:w-120,f-auto,q-80/inventory/banner/252c6c59-df91-426d-a568-78976cc15f8d.png', title: 'Clothing' },
    { image: 'https://cdn.zeptonow.com/production/tr:w-120,f-auto,q-80/inventory/banner/6e704bed-710b-4ec9-ba33-431284f05fe2.png', title: 'Accessories' },
    { image: 'https://cdn.zeptonow.com/production/tr:w-120,f-auto,q-80/inventory/banner/65c89975-159a-4db3-9bdc-7e1381f7f6c5.png', title: 'Essentials' },
    { image: 'https://cdn.zeptonow.com/production/tr:w-120,f-auto,q-80/inventory/banner/ab9bed27-f4de-4a97-bc96-55dc7ca677b3.png', title: 'Bath & Body' },
    { image: 'https://cdn.zeptonow.com/production/tr:w-120,f-auto,q-80/inventory/banner/acfbae20-2196-4775-832f-24bd588b5a9b.png', title: 'Gifts' },
  ];

  const deals = [
    {
      image: 'https://cdn.zeptonow.com/production/ik-seo/tr:w-350,f-auto,q-80/cms/product_variant/949e7110-5b9e-4afa-b78c-58605b8869ff/Himalaya-Baby-Lotion.jpeg',
      title: 'Himalaya Baby Lotion',
      price: '₹220',
    },
    {
      image: 'https://cdn.zeptonow.com/production/ik-seo/tr:w-350,f-auto,q-80/cms/product_variant/936decce-7bde-4021-9f6a-b295d0ee4ddb/Cetaphil-Baby-Massage-Oil.jpeg',
      title: 'Cetaphil Baby Oil',
      price: '₹320',
    },
    {
      image: 'https://cdn.zeptonow.com/production/ik-seo/tr:w-350,f-auto,q-80/cms/product_variant/6132d8ff-3cf2-43fb-8768-5412263fa0a4/Little-s-Soft-Cleansing-Baby-Wipes.jpeg',
      title: "Little's Baby Wipes",
      price: '₹199',
    },
    {
      image: 'https://cdn.zeptonow.com/production/ik-seo/tr:w-350,f-auto,q-80/cms/product_variant/91842784-bc8f-499a-aee1-c8e2592037a7/Pampers-All-Round-Protection-Pants-XL-12-17kg-.jpeg',
      title: 'Pampers XL Pants',
      price: '₹699',
    },
    {
      image: 'https://cdn.zeptonow.com/production/ik-seo/tr:w-350,f-auto,q-80/cms/product_variant/c616039b-8b76-427f-b49f-4089b7e2681f/Cetaphil-Baby-Daily-Lotion-With-Organic-Calendula.jpeg',
      title: 'Cetaphil Baby Lotion',
      price: '₹399',
    },
  ];

  return (
    <div className="container my-5">
      {/* Categories */}
      <h1 className="fw-bold text-center text-primary mb-4">Shop By Category</h1>
      <div className="row g-3">
        {categories.map((category, index) => (
          <div className="col-6 col-sm-4 col-md-3 col-lg-2" key={index}>
            <div className="card border-0 shadow-sm text-center p-2 rounded-4">
              <img src={category.image} alt={category.title} className="card-img-top" style={{ height: '100px', objectFit: 'contain' }} />
              <div className="card-body p-1">
                <small className="fw-bold">{category.title}</small>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Deals */}
      <h1 className="fw-bold text-center mt-5 mb-4">Top Deals For You</h1>
      <div id="dealsCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {deals.map((deal, index) => (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
              <div className="d-flex justify-content-center">
                <div className="card border-0 shadow-sm rounded-4" style={{ width: '250px' }}>
                  <img src={deal.image} alt={deal.title} className="card-img-top p-2" style={{ height: '250px', objectFit: 'contain' }} />
                  <div className="card-body text-center p-2">
                    <h6 className="fw-bold mb-1">{deal.title}</h6>
                    <p className="fw-bold text-primary mb-0">{deal.price}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#dealsCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#dealsCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </div>
  );
};

export default BabyStore;
