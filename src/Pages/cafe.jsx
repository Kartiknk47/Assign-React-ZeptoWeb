import React from 'react';

const Cafe = () => {
  const cafeImages = [
    { id: 1, src: 'https://cdn.zeptonow.com/production/tr:w-160,ar-332-412,pr-true,f-auto,q-80/inventory/banner/a9a4e615-c8aa-42c9-bf08-f4c8614168b3.png', alt: 'cafe1' },
    { id: 2, src: 'https://cdn.zeptonow.com/production/tr:w-160,ar-332-412,pr-true,f-auto,q-80/inventory/banner/21062416-36f9-450d-aad0-dee47154fccc.png', alt: 'cafe2' },
    { id: 3, src: 'https://cdn.zeptonow.com/production/tr:w-160,ar-332-412,pr-true,f-auto,q-80/inventory/banner/01c1836a-8317-40c0-a93d-e8f73e7c77bc.png', alt: 'cafe3' },
    { id: 4, src: 'https://cdn.zeptonow.com/production/tr:w-160,ar-332-412,pr-true,f-auto,q-80/inventory/banner/e8009b77-79cf-4801-9ef3-de5b5cb6af1f.png', alt: 'cafe4' },
    { id: 5, src: 'https://cdn.zeptonow.com/production/tr:w-160,ar-332-412,pr-true,f-auto,q-80/inventory/banner/7184569d-cf3f-4e54-996e-dd52e34d58b7.png', alt: 'cafe5' },
    { id: 6, src: 'https://cdn.zeptonow.com/production/tr:w-160,ar-332-412,pr-true,f-auto,q-80/inventory/banner/6998d6df-bfc1-4506-978c-58104395cabf.png', alt: 'cafe6' },
    { id: 7, src: 'https://cdn.zeptonow.com/production/tr:w-160,ar-332-412,pr-true,f-auto,q-80/inventory/banner/9de2fb1d-1063-49c9-a180-7f0fff25508c.png', alt: 'cafe7' },
    { id: 8, src: 'https://cdn.zeptonow.com/production/tr:w-160,ar-332-412,pr-true,f-auto,q-80/inventory/banner/c798236e-cdf5-43bd-a32d-8f9b03a5e0a6.png', alt: 'cafe8' },
    { id: 9, src: 'https://cdn.zeptonow.com/production/tr:w-160,ar-332-412,pr-true,f-auto,q-80/inventory/banner/3d0f65aa-9272-494a-b394-dbf07068aad3.png', alt: 'cafe9' },
    { id: 10, src: 'https://cdn.zeptonow.com/production/tr:w-160,ar-356-435,pr-true,f-auto,q-80/inventory/banner/e63b6d81-e6b4-4268-bbb5-1fbee68111eb.png', alt: 'cafe10' },
    { id: 11, src: 'https://cdn.zeptonow.com/production/tr:w-160,ar-332-412,pr-true,f-auto,q-80/inventory/banner/7da19bef-7a98-4a04-bdde-5f3fb653881a.png', alt: 'cafe11' },
    { id: 12, src: 'https://cdn.zeptonow.com/production/tr:w-160,ar-332-416,pr-true,f-auto,q-80/inventory/banner/e89010d7-056b-435e-89fd-ecc78a377fa1.png', alt: 'cafe12' },
    { id: 13, src: 'https://cdn.zeptonow.com/production/tr:w-160,ar-333-422,pr-true,f-auto,q-80/inventory/banner/1e8e7903-5fbb-43c6-876f-de21f6ddfc0d.png', alt: 'cafe13' },
    { id: 14, src: 'https://cdn.zeptonow.com/production/tr:w-160,ar-333-412,pr-true,f-auto,q-80/inventory/banner/3ba3942b-7bb7-4d6a-86b9-7332aa1369ca.png', alt: 'cafe14' },
  ];

  const newlyLaunched = [
    { id: 15, src: 'https://cdn.zeptonow.com/production/ik-seo/tr:w-350,ar-6042-4532,pr-true,f-auto,q-80/cms/product_variant/8968385c-9a51-4a68-8f97-2d0b917309b3/Magic-Masala-Burst-Popcorn.jpeg', alt: 'Magic Masala Popcorn', pc: "1pc", price: "₹59" },
    { id: 16, src: 'https://cdn.zeptonow.com/production/ik-seo/tr:w-350,ar-2400-2400,pr-true,f-auto,q-80/cms/product_variant/7e97ff9d-38d0-4fef-842c-fa3dfe3a847a/Adrak-Chai-500-mL.jpeg', alt: 'Adrak Chai 500mL', liter: "500ml", price: "₹39" },
    { id: 17, src: 'https://cdn.zeptonow.com/production/ik-seo/tr:w-350,ar-2400-2400,pr-true,f-auto,q-80/cms/product_variant/7e97ff9d-38d0-4fef-842c-fa3dfe3a847a/Adrak-Chai-500-mL.jpeg', alt: 'Adrak Chai 400mL', liter: "400ml", price: "₹29" },
    { id: 18, src: 'https://cdn.zeptonow.com/production/ik-seo/tr:w-350,ar-2400-2400,pr-true,f-auto,q-80/cms/product_variant/c4b385b7-bb37-497f-bc8a-f336e6a59f69/Adrak-Chai-No-Sugar-500-mL.jpeg', alt: 'Adrak Chai No Sugar', liter: "200ml", price: "₹25" },
    { id: 19, src: 'https://cdn.zeptonow.com/production/ik-seo/tr:w-350,ar-4155-4155,pr-true,f-auto,q-80/cms/product_variant/60dbafd0-77a4-4553-8105-f5fc56e527b3/Masala-Chai-500-mL.jpeg', alt: 'Masala Chai 500mL', liter: "500ml", price: "₹39" },
    { id: 20, src: 'https://cdn.zeptonow.com/production/ik-seo/tr:w-350,ar-4992-4992,pr-true,f-auto,q-80/cms/product_variant/b0cab7fd-6d47-4dcc-a1d7-c7c37520be9b/Classic-Chai-500-mL.jpeg', alt: 'Classic Chai 400mL', liter: "400ml", price: "₹29" },
    { id: 21, src: 'https://cdn.zeptonow.com/production/ik-seo/tr:w-350,ar-4155-4155,pr-true,f-auto,q-80/cms/product_variant/71acc3dc-9367-4090-ae36-f6aa1a98c134/Masala-Chai-No-Sugar-500-mL.jpeg', alt: 'Masala Chai No Sugar', liter: "250ml", price: "₹22" },
    { id: 22, src: 'https://cdn.zeptonow.com/production/ik-seo/tr:w-350,ar-4992-4992,pr-true,f-auto,q-80/cms/product_variant/e9769ba7-3144-469c-884e-7ec4955ffcba/Classic-Chai-No-Sugar-500-mL.jpeg', alt: 'Classic Chai No Sugar', liter: "450ml", price: "₹35" },
    { id: 23, src: 'https://cdn.zeptonow.com/production/ik-seo/tr:w-350,ar-5696-4272,pr-true,f-auto,q-80/cms/product_variant/e88808f3-bf40-428a-8e02-66ab07d34a2e/Tangy-Tomato-Popcorn.jpeg', alt: 'Tangy Tomato Popcorn', pc: "2pc", price: "₹99" },
  ];


  return (
    <div className='container mt-5'>
    <h3 className='mb-4'>🍰 What's On Your Mind?</h3>

    <div style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
      {cafeImages.map((image) => (
        <div key={image.id} className="d-inline-block mx-2">
          <div className="card border-0" style={{ width: '160px' }}>
            <img src={image.src} alt={image.alt} className="card-img-top rounded" />
          </div>
        </div>
      ))}
    </div>

    <h3 className='mt-5 mb-4'>🆕 Newly Launched</h3>

    <div style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
      {newlyLaunched.map((item) => (
        <div key={item.id} className="d-inline-block mx-2">
          <div className="card" style={{ width: '200px' }}>
            <img src={item.src} alt={item.alt} className="card-img-top rounded" />
            <div className="card-body p-2">
              <h6 className="card-title text-center mb-1">{item.alt}</h6>
              <p className="text-center text-muted small mb-0">
                {item.liter ? item.liter : item.pc}
              </p>
              <h6 className="text-center text-success mb-2">{item.price}</h6>
              <div className="text-center">
              <button className="btn btn-outline-success btn-sm w-100">Add to Cart</button>
                </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
};

export default Cafe;
