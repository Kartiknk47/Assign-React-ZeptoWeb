import React from 'react';

const Toy = () => {
  const toyImages = [
    {
      id: 1,
      name: 'Mini Foosball Table',
      pc: '1 pc',
      price: '₹899',
      src: 'https://cdn.zeptonow.com/production/ik-seo/tr:w-400,ar-2500-2500,pr-true,f-auto,q-80/cms/product_variant/f5fcbf77-64b8-49c1-9d0f-7bbacdc6c73f/Toyshine-Mini-Foosball-Table-Fun-for-Kids-Ages-3-and-Up.jpeg',
      alt: 'toy1',
    },
    {
      id: 2,
      name: '3-in-1 Sports Combo',
      pc: '1 pc',
      price: '₹499',
      src: 'https://cdn.zeptonow.com/production/ik-seo/tr:w-400,ar-1200-1200,pr-true,f-auto,q-80/cms/product_variant/ae3e5919-fbd6-41c4-ba83-4d405d54ea75/Toyshine-3-in-1-Super-Sports-Combo-Cricket-Badminton-Football-for-Ages-3-7.jpeg',
      alt: 'toy2',
    },
    {
      id: 3,
      name: 'Monopoly Deluxe',
      pc: '1 pc',
      price: '₹1199',
      src: 'https://cdn.zeptonow.com/production/ik-seo/tr:w-400,ar-1500-1500,pr-true,f-auto,q-80/cms/product_variant/f5a63ea5-a2a8-4471-bb57-4961b8568d73/Monopoly-Deluxe-Fs-Classic.jpg',
      alt: 'toy3',
    },
    {
      id: 4,
      name: 'BeyBlade Wrath Cobra',
      pc: '1 pc',
      price: '₹699',
      src: 'https://cdn.zeptonow.com/production/ik-seo/tr:w-400,ar-2500-2500,pr-true,f-auto,q-80/cms/product_variant/32c36bd9-6cee-41de-bb24-b4e440cedb4b/Hasbro-Bey-Blade-Wrath-Cobra-C7.jpeg',
      alt: 'toy4',
    },
    {
      id: 5,
      name: 'Jenga Original',
      pc: '1 pc',
      price: '₹849',
      src: 'https://cdn.zeptonow.com/production/ik-seo/tr:w-400,ar-1000-1000,pr-true,f-auto,q-80/cms/product_variant/ee2e5a7f-bdb7-4e22-8198-337cb6c6521e/Hasbro-Gaming-Jenga-Tube-Original-.jpeg',
      alt: 'toy5',
    },
    {
      id: 6,
      name: 'Panda Plush Toy',
      pc: '1 pc',
      price: '₹599',
      src: 'https://cdn.zeptonow.com/production/ik-seo/tr:w-400,ar-1500-1458,pr-true,f-auto,q-80/cms/product_variant/3e216586-c9fc-45f4-a147-3a0ec356539e/Babique-Panda-Bamboo-Stuffed-Animals-Plush-Toy-Bamboo-Tube-Panda-Pillow-Stuffed-Panda-Bear-Plushies-Panda-Doll-Gifts-for-Boys-Girls.jpg',
      alt: 'toy6',
    },
    {
      id: 7,
      name: 'Holy City Puzzle',
      pc: '1 pc',
      price: '₹399',
      src: 'https://cdn.zeptonow.com/production/ik-seo/tr:w-400,ar-1200-1200,pr-true,f-auto,q-80/cms/product_variant/e4999c7d-1885-4342-b355-bafecfaf2175/Webby-Holy-City-Varanasi-Jigsaw-Puzzle.jpeg',
      alt: 'toy7',
    },
    {
      id: 8,
      name: 'AR Smart Globe',
      pc: '1 pc',
      price: '₹1999',
      src: 'https://cdn.zeptonow.com/production/ik-seo/tr:w-400,ar-1100-1100,pr-true,f-auto,q-80/cms/product_variant/bd75b70c-84f3-40a1-a8f0-c4256a59190f/PlayShifu-Orboot-Earth-Smart-AR-Globe.jpeg',
      alt: 'toy8',
    },
  ];

  return (
    <div className='container mt-5'>
      {/* Header banners */}
      <div className='mb-4 d-flex flex-wrap justify-content-center gap-3'>
        <img
          src='https://cdn.zeptonow.com/production/tr:w-300,ar-481-282,pr-true,f-auto,q-80/inventory/banner/eab3437e-9723-4144-81fb-5ee0011a3e34.png'
          alt='img1'
          className='img-fluid rounded'
        />
        <img
          src='https://cdn.zeptonow.com/production/tr:w-300,ar-481-282,pr-true,f-auto,q-80/inventory/banner/4a7640de-832c-440d-91d8-302828c13e25.png'
          alt='img2'
          className='img-fluid rounded'
        />
      </div>

      {/* Wide banner */}
      <div className='mb-5 text-center'>
        <img
          src='https://cdn.zeptonow.com/production/tr:w-1280,ar-1441-416,pr-true,f-auto,q-80/inventory/banner/2583ab88-ba2a-4d69-8f8b-955e6c80a988.png'
          alt='mega'
          className='img-fluid rounded'
        />
      </div>

      {/* Toy Cards Carousel */}
      <h3 className='mb-3'>🧸 Trending Toys</h3>
      <div style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
        {toyImages.map((toy) => (
          <div key={toy.id} className='d-inline-block mx-2'>
            <div className='card border-0 shadow-sm' style={{ width: '180px' }}>
              <img
                src={toy.src}
                alt={toy.alt}
                className='card-img-top rounded'
                style={{ height: '180px', objectFit: 'cover' }}
              />
              <div className='card-body p-2'>
                <h6 className='card-title mb-1' style={{ fontSize: '0.95rem' }}>
                  {toy.name}
                </h6>
                <p className='text-muted mb-0' style={{ fontSize: '0.8rem' }}>
                  {toy.pc}
                </p>
                <p className='text-muted mb-2' style={{ fontSize: '0.85rem' }}>
                  {toy.price}
                </p>
                <button className='btn btn-outline-danger w-100'>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Toy;
