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
    <div className="container mt-4">

      <h3 className="mb-3">🏠 Home Highlights</h3>

      <div style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
        {homeImages.map((image) => (
          <div key={image.id} className="d-inline-block mx-2">
            <div className="card border-0 shadow-sm" style={{ width: '120px' }}>
              <img src={image.src} alt={image.alt} className="card-img-top rounded" />
              <div className="card-body p-2 text-center">
                <p className="card-text small">{image.alt}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='mt-5 text-center'>
        <h2 style={{ fontSize: "60px" }}>Introducing</h2>
        <h1 className="mb-4 fw-bold" style={{ fontSize: "70px" }}>New Launches</h1>

        <div className="card mx-auto shadow" style={{ width: '300px' }}>
          <img 
            src='https://cdn.zeptonow.com/production/ik-seo/tr:w-350,ar-1000-1000,pr-true,f-auto,q-80/cms/product_variant/5f5dc713-63d8-45a7-a86b-0020fdd002f7/Nurturing-Green-GroSoil-4-2kg-block-All-in-One-Potting-Soil-for-Plants-Potting-Soil-Mix.jpeg' 
            alt='GroSoil Potting Mix'
            className='card-img-top rounded'
          />
          <div className="card-body">
            <h5 className="card-title">Nurturing Green GroSoil</h5>
            <p className="card-text text-muted small">4.2kg All-in-One Potting Soil Mix</p>
            <p className="fw-bold">₹259</p>
            <button className="btn btn-danger w-100">Notify</button>
          </div>
        </div>
      </div>
      <div className="mt-5"   style={{textAlign:'center'}}>
        <h2>Unbeatable </h2>
        <h1 style={{fontSize:'80px'}}>Deals For You</h1>
        <img src='https://cdn.zeptonow.com/production/tr:w-120,ar-408-616,pr-true,f-auto,q-80/inventory/banner/51f91eb7-af73-4ba5-807c-aeb0ea6ba73f.png' alt='img1'/>
        <img src='https://cdn.zeptonow.com/production/tr:w-120,ar-408-616,pr-true,f-auto,q-80/inventory/banner/8b92d3b3-e9d3-42d2-b193-d7d42c9e98d9.png' alt='img2' style={{margin:'20px'}}/>
        <img src='https://cdn.zeptonow.com/production/tr:w-120,ar-306-462,pr-true,f-auto,q-80/inventory/banner/eba42f6d-8c5c-48ed-bdb5-1fbd9aa27764.png' alt='img3'/>

      </div>

    </div>
  );
};

export default Home;
