import React from 'react';

const Mobile = () => {
  const mobiles = [
    {
      id: 1,
      title: "iPhone 16 128GB Pink",
      image: "https://cdn.zeptonow.com/production/ik-seo/tr:w-400,ar-980-980,pr-true,f-auto,q-80/cms/product_variant/53230e5b-57de-4e90-996a-f4369dc53cec/Apple-iPhone-16-128GB-Pink.jpeg",
      price: "₹89,999",
      offerPrice: "₹84,999"
    },
    {
      id: 2,
      title: "iPhone 16 Plus 128GB Black",
      image: "https://cdn.zeptonow.com/production/ik-seo/tr:w-400,ar-980-980,pr-true,f-auto,q-80/cms/product_variant/826d799a-6679-4d98-b416-965c355082e5/Apple-iPhone-16-Plus-128GB-Black.jpeg",
      price: "₹99,999",
      offerPrice: "₹94,999"
    },
    {
      id: 3,
      title: "iPhone 16 128GB Ultramarine",
      image: "https://cdn.zeptonow.com/production/ik-seo/tr:w-400,ar-980-980,pr-true,f-auto,q-80/cms/product_variant/188b43c9-0bb5-4228-942a-b6f03c65f24a/Apple-iPhone-16-128GB-Ultramarine.jpeg",
      price: "₹89,999",
      offerPrice: "₹84,999"
    },
    {
      id: 4,
      title: "iPhone 16 128GB Black",
      image: "https://cdn.zeptonow.com/production/ik-seo/tr:w-400,ar-980-980,pr-true,f-auto,q-80/cms/product_variant/047ea750-3877-4eca-88ca-ff185ad92bd3/Apple-iPhone-16-128GB-Black.jpeg",
      price: "₹89,999",
      offerPrice: "₹84,499"
    },
    {
      id: 5,
      title: "Motorola A10V Keypad Phone",
      image: "https://cdn.zeptonow.com/production/ik-seo/tr:w-400,ar-943-1261,pr-true,f-auto,q-80/cms/product_variant/4ef5c497-bf4e-4fd4-8abb-e565b0226bd4/Motorola-A10V-Dual-Sim-Keypad-Phone-1-8-Inch-Display-Wireless-Fm-Auto-Call-Recording-Teal-Blue.jpg",
      price: "₹1,999",
      offerPrice: "₹1,499"
    },
  ];

  return (
    <div className="container my-5">
      <h3 className="text-center mb-4">📱 Latest Mobiles</h3>
      <div className="d-flex flex-wrap justify-content-center gap-3">
        {mobiles.map((mobile) => (
          <div className="card border-0 shadow-sm rounded-4" style={{ width: '180px' }} key={mobile.id}>
            <img
              src={mobile.image}
              className="card-img-top rounded-top-4"
              alt={mobile.title}
              style={{ height: '180px', objectFit: 'cover' }}
            />
            <div className="card-body text-center p-2">
              <h6 className="card-title" style={{ fontSize: '0.85rem' }}>{mobile.title}</h6>
              <div>
                <span className="text-muted me-1" style={{ textDecoration: 'line-through', fontSize: '0.8rem' }}>{mobile.price}</span>
                <span className="text-success fw-bold" style={{ fontSize: '0.9rem' }}>{mobile.offerPrice}</span>
              </div>
              <button className="btn btn-outline-primary btn-sm mt-2 w-100">View</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mobile;
