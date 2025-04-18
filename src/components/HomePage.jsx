import React from "react";
import "../App.css";
import ZeptoCafe from "../assets/ZeptoCafe.png";
import SweetCravings from "../assets/SweeyCravings.png";
import ToysSports from "../assets/Toys&Sports.png";
import Apparel from "../assets/Apreal&Lifestyle.png";
import Jewellery from "../assets/Jwellories&accessories.png";
import FrozenFood from "../assets/FrozenFood.png";
import IceCream from "../assets/IceCream&More.png";
import PackagedFood from "../assets/PackagedFood.png";
import Dairy from "../assets/DairyBreads&Eggs.png";
import ColdDrinks from "../assets/ColdDrings&juices.png";
import Munchies from "../assets/Munchies.png";
import MeatFish from "../assets/MeatFish&Eggs.png";
import Breakfast from "../assets/Breakfast&Sauces.png";
import TeaCoffee from "../assets/TeaCoffee&More.png";
import Biscuits from "../assets/Buscuits&Cookies.png";
import Makeup from "../assets/Makeup.png";
import SkinCare from "../assets/SkinCare.png";
import BathAndBody from "../assets/bath&Body.png";
import HairCare from "../assets/hAirCAre.png";
import CleaningEssentials from "../assets/CleaningEssentials.png";
import HomeNeeds from "../assets/HomeNeeds.png";
import Stationery from "../assets/Stationery&Books.png";
import Kitchen from "../assets/Kitchen&Dining.png";
import PaanC from "../assets/PaanCorner.webp";
import proOne from "../assets/ProOne.webp";
import proTwo from "../assets/ProTwo.webp";

const ImageCarousel = () => {
  const carouselItems = [
    [ZeptoCafe, SweetCravings, ToysSports, Apparel, Jewellery, FrozenFood],
    [IceCream, PackagedFood, Dairy, ColdDrinks, Munchies, MeatFish],
    [Breakfast, TeaCoffee, Biscuits, Makeup, SkinCare, BathAndBody],
    [HairCare, CleaningEssentials, HomeNeeds, Stationery, Kitchen],
  ];

  return (
    <>
      {/* Image Carousel */}
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <div
              id="imageCarousel"
              className="carousel slide"
              data-bs-touch="true"
              data-bs-ride="carousel"
              data-bs-interval="3000"
            >
              <div className="carousel-inner">
                {carouselItems.map((group, index) => (
                  <div
                    key={index}
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                  >
                    <div className="d-flex justify-content-center gap-3 flex-wrap py-3">
                      {group.map((image, imgIndex) => (
                        <img
                          key={imgIndex}
                          src={image}
                          className="img-fluid rounded shadow"
                          alt={`Carousel Item ${imgIndex + 1}`}
                          style={{
                            height: "130px",
                            width: "100px",
                            objectFit: "contain",
                            background: "#fff",
                            padding: "10px",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Carousel Controls */}
              <button
                className="carousel-control-prev bg-dark p-3 rounded-circle"
                type="button"
                data-bs-target="#imageCarousel"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
              </button>
              <button
                className="carousel-control-next bg-dark p-3 rounded-circle"
                type="button"
                data-bs-target="#imageCarousel"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Paan Corner */}
      {/* <div className="container mt-5"> */}
        <div className="row">
          <div className="col text-center">
            <img
              src={PaanC}
              alt="Paan Corner"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      {/* </div> */}

      {/* Promotional Products */}
      <div className="container mt-5">
        <div className="row g-4">
          <div className="col-md-6">
            <img
              src={proOne}
              alt="ProOne"
              className="img-fluid rounded shadow"
              style={{ height: "250px", width: "100%" }}
            />
          </div>
          <div className="col-md-6">
            <img
              src={proTwo}
              alt="ProTwo"
              className="img-fluid rounded shadow"
              style={{ height: "250px", width: "100%" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageCarousel;
