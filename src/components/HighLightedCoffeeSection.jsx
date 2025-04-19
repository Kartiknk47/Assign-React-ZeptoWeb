import React, { useState } from 'react';
import Coffee from "../assets/CoffeeSec.webp";

const HighLightedCoffeeSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [cart, setCart] = useState({});

  // Add button handler
  const handleAddClick = (productName) => {
    setSelectedProduct(productName);
    setShowModal(true);
    setCart((prevCart) => ({
      ...prevCart,
      [productName]: (prevCart[productName] || 0) + 1,
    }));
  };

  // Modal close handler
  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Increase quantity handler
  const handleIncrease = (productName) => {
    setCart((prevCart) => ({
      ...prevCart,
      [productName]: (prevCart[productName] || 0) + 1,
    }));
  };

  // Decrease quantity handler
  const handleDecrease = (productName) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart[productName] > 0) {
        updatedCart[productName] -= 1;
      }
      return updatedCart;
    });
  };

  // Calculate total items in cart
  const totalItems = Object.values(cart).reduce((sum, count) => sum + count, 0);

  return (
    <div
      className="container mt-5 p-5 rounded-4 shadow-lg"
      style={{
        background: "linear-gradient(135deg, #FAD0C4 0%, #FFD1FF 100%)",
      }}
    >
      <div className="row align-items-center g-4">
        {/* Left Section */}
        <div className="col-md-6 text-center">
          <img
            src={Coffee}
            alt="Coffee Special"
            className="img-fluid rounded-3"
            style={{ maxHeight: "250px", objectFit: "cover" }}
          />
          <br />
          <button className="btn btn-dark btn-sm w-50 h-50 mt-4">
            More Items
          </button>
          <div className="mt-3">
            <h5>🛒 Cart: {totalItems} items</h5>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-md-6">
          <div className="row g-3">
            {/* Product Card */}
            {[
              {
                name: "Hot Chocolate",
                image:
                  "https://cdn.zeptonow.com/production/ik-seo/tr:w-350,ar-2400-2400,pr-true,f-auto,q-80/cms/product_variant/76f7bedc-0cf0-4a64-ae7d-476e187346d8/Hot-Chocolate.jpeg",
                price: 135,
                oldPrice: 279,
              },
              {
                name: "Signature Eclair Toffee Shake",
                image:
                  "https://cdn.zeptonow.com/production/ik-seo/tr:w-350,ar-2523-2523,pr-true,f-auto,q-80/cms/product_variant/692e3707-d006-4f23-b1ba-5ef09542abb1/Signature-Eclair-Toffee-Shake.jpeg",
                price: 179,
                oldPrice: 364,
              },
            ].map((product) => (
              <div className="col-6" key={product.name}>
                <div className="card h-100 shadow rounded-4">
                  <img
                    src={product.image}
                    className="card-img-top rounded-top-4"
                    alt={product.name}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body text-center">
                    <h6 className="card-title fw-bold">{product.name}</h6>
                    <p>250ml</p>
                    <div className="d-flex justify-content-center align-items-center gap-2 mb-2">
                      <h6 className="mb-0 fw-bold">${product.price}</h6>
                      <span
                        style={{ textDecoration: "line-through", color: "#888" }}
                      >
                        ${product.oldPrice}
                      </span>
                    </div>
                    <button
                      className="btn btn-outline-danger btn-sm mt-2"
                      onClick={() => handleAddClick(product.name)}
                    >
                      Add
                    </button>
                    <div className="d-flex justify-content-center gap-2 mt-2">
                      <button
                        className="btn btn-outline-success btn-sm"
                        onClick={() => handleIncrease(product.name)}
                      >
                        +
                      </button>
                      <span className="fw-bold">
                        {cart[product.name] || 0}
                      </span>
                      <button
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => handleDecrease(product.name)}
                      >
                        -
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          role="dialog"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              {/* Header */}
              <div className="modal-header">
                <h5 className="modal-title">Item Added!</h5>
                <button
                  type="button"
                  className="close btn"
                  onClick={handleCloseModal}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              {/* Body */}
              <div className="modal-body">
                <p>{selectedProduct} has been successfully added to your cart!</p>
              </div>

              {/* Footer */}
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HighLightedCoffeeSection;
