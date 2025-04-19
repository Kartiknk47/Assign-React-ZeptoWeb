import React from "react";
import Zepto from "../assets/Zepto_logo.png";
import { FaTwitter, FaInstagram, FaFacebookF, FaLinkedin, FaHeart } from "react-icons/fa";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaApple } from "react-icons/fa";
import PlaceOrder from "../assets/placeorder.svg";
import donotblink from "../assets/donotblink.svg";
import enjoy from "../assets/enjoy.svg";

const Footer = () => {
  return (
    <div className="bg-light pt-5">
      {/* How it Works */}
      <div className="container mb-5">
        <div className=" mb-5">
          <h1 style={{ fontSize: '80px', color: 'gray', fontWeight: 'bold' }}>
            The place that fits all <br /> your needs
          </h1>
          <h2 style={{ fontSize: '24px', marginBottom: '50px', fontWeight: 'bold' }}>
            Crafted with love from <small style={{ color: 'darkmagenta', fontWeight: 'bold' }}>Zepto Team</small>
            <small style={{ color: 'red' }}><FaHeart /></small>
          </h2>
        </div>

        <h2 className="mb-4 text-center">How it Works</h2>
        <div className="d-flex  flex-wrap justify-content-center">
          {[{
            img: PlaceOrder,
            title: "Open the app",
            text: "Choose from over 7000 products across groceries, fresh fruits & veggies, meat, pet care, beauty items & more.",
          }, {
            img: donotblink,
            title: "Place an order",
            text: "Add your favourite items to the cart & avail the best offers.",
          }, {
            img: enjoy,
            title: "Get free delivery",
            text: "Experience lighting-fast speed & get all your items delivered in 10 minutes.",
          }].map((item, idx) => (
            <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center" key={idx}>
              <div className="card shadow-sm rounded-3" style={{ width: "18rem" }}>
                <div className="p-3 d-flex justify-content-center" style={{ height: "200px" }}>
                  <img src={item.img} alt={item.title} style={{ maxHeight: "100%" }} />
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Searches */}
      <div className="container mb-5">
        <h3 className="mb-3">Popular Searches</h3>
        <h6>Products:</h6>
        <p className="text-muted">Avocado | Strawberry | Pomegranate | Beetroot | Ash gourd | Bottle gourd | Lady finger | Potato | Lemon | Dalchini | Fennel seeds | Blueberry | Papaya | Dragon fruit</p>
        <h6>Brands:</h6>
        <p className="text-muted">Yakult | My Muse | Aashirvaad Atta | Too Yumm | Lays | Figaro Olive Oil | Nandini Milk | Amul | Mother Dairy Near Me | Fortune Oil</p>
        <h6>Categories:</h6>
        <p className="text-muted">Grocery | Curd | Hukka flavour | Paan shop near me | Eggs price | Cheese slice | Fresh fruits | Fresh vegetables | Refined oil | Butter price | Paneer price</p>
      </div>

      {/* Categories */}
      <div className="container mb-5">
        <h3 className="mb-3">Categories</h3>
        <div className="row">
          {[ 
            ["Fruits & Vegetables", "Baby Foods", "Breakfast & Sauces", "Cleaning Essentials", "Homegrown Brands"],
            ["Atta, Rice, Oil & Dals", "Dairy, Breads & Eggs", "Tea, Coffee & More", "Home Needs", "Pan Corner"],
            ["Masala & Dry Fruits", "Cold Drink & Juices", "Biscuits", "Electric Accessories"],
            ["Sweet Cravings", "Munchies", "Makeup & Beauty", "Hygiene & Grooming"],
            ["Frozen Food & Ice Creams", "Meat, Fish & Eggs", "Bath & Body", "Health & Baby Care"]
          ].map((column, idx) => (
            <div className="col-md-2 mb-3" key={idx}>
              {column.map((item, i) => (
                <h6 key={i} className="py-1 text-muted">{item}</h6>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Footer Base */}
      <div className="container border-top pt-4 pb-5">
        <div className="row">
          {/* Logo and Socials */}
          <div className="col-md-3 mb-3">
            <img src={Zepto} alt="Zeptologo" style={{ width: "150px", height: "50px" }} />
            <div className="mt-3 d-flex gap-3 fs-4">
              <FaInstagram />
              <FaTwitter />
              <FaFacebookF />
              <FaLinkedin />
            </div>
            <p className="mt-3 text-muted">KiranaKart Technologies Private Limited</p>
          </div>

          {/* Navigation */}
          <div className="col-md-3 mb-3">
            <h6 className="py-1">Home</h6>
            <h6 className="py-1">Home Delivery Areas</h6>
            <h6 className="py-1">Careers</h6>
            <h6 className="py-1">Customer Support</h6>
            <h6 className="py-1">Press</h6>
          </div>

          {/* Policies */}
          <div className="col-md-3 mb-3">
            <h6 className="py-1">Privacy Policy</h6>
            <h6 className="py-1">Terms Of Use</h6>
            <h6 className="py-1">Responsible Disclosure Policy</h6>
            <h6 className="py-1">Mojo - a Zepto Blog</h6>
          </div>

          {/* App Download */}
          <div className="col-md-3 mb-3">
            <h6 className="py-2">Download App</h6>
            <div className="d-grid gap-2">
              <button className="btn btn-dark d-flex align-items-center">
                <BiLogoPlayStore className="me-2" size={24} />
                Play Store
              </button>
              <button className="btn btn-dark d-flex align-items-center">
                <FaApple className="me-2" size={24} />
                App Store
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
