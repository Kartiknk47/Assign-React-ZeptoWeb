import React from 'react';
import Elec1 from "../assets/Electonics/Elec1.webp"; 
import Elec2 from "../assets/Electonics/Elec2.webp"; 
import Elec3 from "../assets/Electonics/Elec3.webp"; 
import Elec4 from "../assets/Electonics/Elec4.webp"; 
import Elec5 from "../assets/Electonics/Elec5.webp"; 
import Elec6 from "../assets/Electonics/Elec6.webp"; 
import Elec7 from "../assets/Electonics/Elec7.webp"; 
import Elec8 from "../assets/Electonics/Elec8.webp"; 
import Elec9 from "../assets/Electonics/Elec9.webp"; 
import Elec10 from "../assets/Electonics/Elec10.webp"; 

const Electronics = () => {
  const electronicsItems = [
    { id: 1, title: "Apple 20W USB-C Power Adapter", pc: '1 pc', price: '₹1499', originalPrice: '₹1799', image: Elec1 },
    { id: 2, title: "Agaro Relaxo Handheld Massager", pc: '1 pc', price: '₹2199', originalPrice: '₹2599', image: Elec2 },
    { id: 3, title: "Lifelong Rechargeable Head Massager", pc: '1 pc', price: '₹1999', originalPrice: '₹2499', image: Elec3 },
    { id: 4, title: "D-Link 20W Dual Port Charger", pc: '1 pc', price: '₹899', originalPrice: '₹1199', image: Elec4 },
    { id: 5, title: "Agaro Scalp Massager", pc: '1 pc', price: '₹1299', originalPrice: '₹1599', image: Elec5 },
    { id: 6, title: "Lifelong Foot Massager", pc: '1 pc', price: '₹5499', originalPrice: '₹6999', image: Elec6 },
    { id: 7, title: "Sounce 6ft Lightning Cable", pc: '1 pc', price: '₹299', originalPrice: '₹499', image: Elec7 },
    { id: 8, title: "Sounce 6ft Lightning Cable", pc: '1 pc', price: '₹299', originalPrice: '₹499', image: Elec8 },
    { id: 9, title: "Sounce 6ft Lightning Cable", pc: '1 pc', price: '₹299', originalPrice: '₹499', image: Elec9 },
    { id: 10, title: "Sounce 6ft Lightning Cable", pc: '1 pc', price: '₹299', originalPrice: '₹499', image: Elec10 },
  ];

  return (
    <div className="container my-5">
      <h3 className="text-center mb-4">📱 Elevate Yourself with Electronics</h3>

      <div style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
        {electronicsItems.map(item => (
          <div key={item.id} className="d-inline-block mx-2">
            <div className="card border-0 shadow-sm rounded-4" style={{ width: '200px' }}>
              <img
                src={item.image}
                className="card-img-top rounded-top-4"
                alt={item.title}
                style={{ height: '180px', objectFit: 'cover' }}
              />
              <div className="card-body p-3 text-center">
                <h6 className="card-title mb-1" style={{ fontSize: '0.9rem' }}>
                  {item.title}
                </h6>
                <p className="text-muted mb-1" style={{ fontSize: '0.8rem' }}>
                  {item.pc}
                </p>
                <div className="mb-2">
                  <span className="fw-bold" style={{ fontSize: '0.95rem', color: '#212529' }}>{item.price}</span>
                  <span className="text-muted ms-2" style={{ textDecoration: 'line-through', fontSize: '0.8rem' }}>
                    {item.originalPrice}
                  </span>
                </div>
                <button className="btn btn-outline-primary btn-sm w-100">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Electronics;
