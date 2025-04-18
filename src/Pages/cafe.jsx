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
    </div>
  );
};

export default Cafe;
