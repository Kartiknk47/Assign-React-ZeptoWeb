import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "../App.css";
import Zepto from "../assets/Zepto_logo.png";
import {
  FaToggleOn,
  FaToggleOff,
  FaSearch,
  FaUserCircle,
  FaShoppingCart,
  FaShoppingBag,
} from "react-icons/fa";
import { CiCoffeeCup, CiMobile3 } from "react-icons/ci";
import { IoHomeSharp } from "react-icons/io5";
import { GiPlasticDuck, GiLipstick, GiClothes, GiBabyBottle } from "react-icons/gi";
import { SiCodefresh } from "react-icons/si";
import { TbDeviceAirpods } from "react-icons/tb";
import { MdLocalOffer } from "react-icons/md";

const MainNavbar = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [theme, setTheme] = useState("light");
  const navigate = useNavigate(); 

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    setIsToggled(!isToggled);
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleClick = () => {
    navigate("/cafe");  // Correct the typo here, should be "navigate"
  }

  const handleClickOne = () => {
    navigate("/")
  }

  const handleClickSix = () => {
    navigate("/Elec")
  }

  const handleClickThree = () => {
    navigate("/Home")
  }

  const handleClickFour = () => {
    navigate("/toy")
  }

  const handleClickFive = () => {
    navigate("/Fresh")
  }

  const handleClickSeven = () => {
    navigate("/mob")
  }

  const handleClickEight = () => {
    navigate("/beauty")
  }

  const handleClicknine = () => {
    navigate("/fashion")
  }

  const handleClickTen = () => {
    navigate("/dealz")
  }

  const handleClickEleven = () => {
    navigate("/babys")
  }



  return (
    <>
      {/* Navbar */}
      <div
        className={`container-fluid py-2 ${theme === "light" ? "bg-light text-dark" : "bg-dark text-light"}`}
        style={{
          background: theme === "light" ? "linear-gradient(to bottom, #E9A5F1, #FFFFFF)" : "#1c1c1c",
        }}
      >
        <div className="row align-items-center justify-content-between px-3">
          {/* Logo */}
          <div className="col-auto">
            <img src={Zepto} alt="Zepto Logo" style={{ width: "100px", height: "30px" }} />
          </div>

          {/* Theme Toggle */}
          <div className="col-auto">
            <button 
              onClick={toggleTheme}
              className="btn btn-outline-light"
              style={{ fontSize: "20px" }}
            >
              {theme === "light" ? <FaToggleOff /> : <FaToggleOn />}
            </button>
          </div>

          {/* Location Dropdown */}
          <div className="col-auto">
            <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown">
              Select Location
            </button>
          </div>

          {/* Search Bar */}
          <div className="col">
            <div className="input-group">
              <span className="input-group-text"><FaSearch /></span>
              <input
                type="text"
                className="form-control"
                placeholder="Search for products, brands and more"
              />
            </div>
          </div>

          {/* Login & Cart */}
          <div className="col-auto d-flex align-items-center gap-3">
            <div className="d-flex align-items-center" style={{ cursor: "pointer" }} onClick={handleLoginClick}>
              <FaUserCircle size={20} className="me-1" />
              <p className="mb-0 ">Login</p>
            </div>
            <div className="d-flex align-items-center position-relative" style={{ cursor: "pointer" }}>
              <FaShoppingCart size={20} className="me-1" />
              <p className="mb-0 ">Cart</p>    
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className='container mt-3'>
        <div className="row text-center NavBar g-3">
          {[{
            icon: <FaShoppingBag />, label: "All", onClick: handleClickOne
          }, {
            icon: <CiCoffeeCup />, label: "Cafe", onClick: handleClick
          }, {
            icon: <IoHomeSharp />, label: "Home", onClick: handleClickThree
          }, {
            icon: <GiPlasticDuck />, label: "Toys", onClick: handleClickFour
          }, {
            icon: <SiCodefresh />, label: "Fresh", onClick: handleClickFive
          }, {
            icon: <TbDeviceAirpods />, label: "Electronics", onClick: handleClickSix
          }, {
            icon: <CiMobile3 />, label: "Mobiles",onClick: handleClickSeven
          }, {
            icon: <GiLipstick />, label: "Beauty", onClick: handleClickEight
          }, {
            icon: <GiClothes />, label: "Fashion",onClick: handleClicknine
          }, {
            icon: <MdLocalOffer />, label: "Deals",onClick: handleClickTen
          }, {
            icon: <GiBabyBottle />, label: "Baby Store",onClick: handleClickEleven
          }].map((item, index) => (
            <div key={index} className="col-4 col-md-1 d-flex flex-column align-items-center nav-item">
              <div className="nav-item-icon" onClick={item.onClick}>{item.icon}</div>
              <small>{item.label}</small>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MainNavbar;
