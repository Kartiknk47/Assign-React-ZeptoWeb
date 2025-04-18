import React from 'react';
import Zepto from "../assets/Zepto_logo.png";
import LogImg from "../assets/logInImg.webp";
import "../App.css";
import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/all");
  };

  return (
    <>
      <div
        className="modal fade show d-block"
        tabIndex="-1"
        role="dialog"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
      >
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div className="modal-content rounded-4 border-0 overflow-hidden shadow-lg position-relative">

            {/* Close Button */}
            <button
              className="btn position-absolute"
              style={{ top: "15px", right: "15px", zIndex: 10 }}
              onClick={handleBack}
            >
              <RxCross2 size={24} />
            </button>

            <div className="modal-body d-flex p-0" style={{ minHeight: "520px" }}>

              {/* Left Side: Branding */}
              <div
                className="w-50 d-flex flex-column justify-content-between text-white px-4 py-4"
                style={{ backgroundColor: "darkmagenta" }}
              >
                <div>
                  <img src={Zepto} alt="Zepto Logo" style={{ width: "110px" }} className="mb-4" />
                </div>
                <div className="text-center">
                  <img
                    src={LogImg}
                    alt="Login Visual"
                    className="img-fluid rounded shadow mb-3"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <h3 className="fw-bold">
                    Order Faster<br />& Easier<br />Every Time
                  </h3>
                  <p className="mt-2">With the Zepto app</p>
                </div>
                <div className="text-center small mt-3">
                  <p className="mb-1">By continuing, you agree to our</p>
                  <strong>Terms of Service & Privacy Policy</strong>
                </div>
              </div>

              {/* Right Side: Form */}
              <div className="w-50 bg-white p-5 d-flex flex-column justify-content-center">
                <h2 className="fw-bold mb-4">Groceries delivered<br />in 10 minutes</h2>

                <input
                  type="text"
                  placeholder="Enter your phone or email"
                  className="form-control mb-3 py-2"
                />
                <button className="btn btn-primary w-100 mb-3 py-2">Continue</button>

                <div className="text-center text-muted small mb-3">or continue with</div>

                <div className="d-flex flex-column gap-2">
                  <button className="btn btn-outline-dark d-flex align-items-center justify-content-center py-2">
                    <FaApple className="me-2" style={{ fontSize: '20px' }} />
                    Download on the App Store
                  </button>
                  <button className="btn btn-outline-success d-flex align-items-center justify-content-center py-2">
                    <IoLogoGooglePlaystore className="me-2" style={{ fontSize: '20px' }} />
                    Get it on Google Play
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
