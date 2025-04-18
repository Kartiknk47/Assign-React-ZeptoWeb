import React from 'react';

const Home = () => {
  const homeImages = [
    { id: 1, src: 'https://cdn.zeptonow.com/production/tr:w-120,ar-292-480,pr-true,f-auto,q-80/inventory/banner/b4e54c37-1e59-4cb8-94ed-2175bbbf44db.png', alt: 'Home1' },
    { id: 2, src: 'https://cdn.zeptonow.com/production/tr:w-120,ar-292-480,pr-true,f-auto,q-80/inventory/banner/bd2df243-94b0-4acf-bf1d-c8e1cc7fe0ca.png', alt: 'Home2' },
    { id: 3, src: 'https://cdn.zeptonow.com/production/tr:w-120,ar-292-480,pr-true,f-auto,q-80/inventory/banner/3d1ab563-00d9-4dd5-8291-53f4be2692a1.png', alt: 'Home3' },
    { id: 4, src: 'https://cdn.zeptonow.com/production/tr:w-120,ar-292-481,pr-true,f-auto,q-80/inventory/banner/c2d16f9f-0c0a-4555-8f30-6aa4b33e46f4.png', alt: 'Home4' },
    { id: 5, src: 'https://cdn.zeptonow.com/production/tr:w-120,ar-292-481,pr-true,f-auto,q-80/inventory/banner/02e568d6-e797-4681-ba9d-cb5f7b1f8b9e.png', alt: 'Home5' },
    { id: 6, src: 'https://cdn.zeptonow.com/production/tr:w-120,ar-292-480,pr-true,f-auto,q-80/inventory/banner/46a16652-e572-4417-9c71-ff4fc1854cc7.png', alt: 'Home6' },
  ];

  return (
    <>
      <div className="container mt-4">


        <div style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
          {homeImages.map((image) => (
            <div key={image.id} className="d-inline-block mx-2">
              <div className="card border-0" style={{ width: '120px' }}>
                <img src={image.src} alt={image.alt} className="card-img-top rounded" />
              </div>
            </div>
          ))}
        </div>
        <div className='mt-5'>
        <h2 style={{fontSize:"80px", textAlign:'center'}}>Introducing</h2>
        <h1 className="mb-4" style={{fontSize:"100px", textAlign:'center', fontWeight:'bold'}}>New Launches</h1>
        </div>
      </div>

    </>
  );
};

export default Home;
