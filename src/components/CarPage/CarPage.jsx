// src/components/CarPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaCar,
  FaGasPump,
  FaArrowRight,
  FaTachometerAlt,
  FaUserFriends,
  FaShieldAlt,
} from "react-icons/fa";
import carsData from "./carsData";
import { carPageStyles } from "../../assets/dummyStyles";

const CarPage = () => {
  const navigate = useNavigate();

  return (
    <div className={carPageStyles.pageContainer}>
      {/* Main Content */}
      <div className={carPageStyles.contentContainer}>
        <div className={carPageStyles.headerContainer}>
          <div className={carPageStyles.headerDecoration}></div>
          <h1 className={carPageStyles.title}>
            Premium Car Collection
          </h1>
          <p className={carPageStyles.subtitle}>
            Discover our exclusive fleet of luxury vehicles. Each car is
            meticulously maintained and ready for your journey.
          </p>
        </div>

        <div className={carPageStyles.gridContainer}>
          {carsData.map((car) => (
            <div
              key={car.id}
              className={carPageStyles.carCard}
            >
              {/* Glow effect on hover */}
              <div className={carPageStyles.glowEffect}></div>

              <div className={carPageStyles.imageContainer}>
                <div className="absolute inset-0 z-10"></div>
                <img
                  src={car.image}
                  alt={car.name}
                  className={carPageStyles.carImage}
                />
                <div className={carPageStyles.priceBadge}>
                  ₹{car.price}/day
                </div>
              </div>

              <div className={carPageStyles.cardContent}>
                <div className={carPageStyles.headerRow}>
                  <div>
                    <h3 className={carPageStyles.carName}>
                      {car.name}
                    </h3>
                    <p className={carPageStyles.carType}>{car.type}</p>
                  </div>
                </div>

                <div className={carPageStyles.specsGrid}>
                  <div className={carPageStyles.specItem}>
                    <div className={carPageStyles.specIconContainer}>
                      <FaUserFriends className="text-sky-400" />
                    </div>
                    <span>{car.seats} Seats</span>
                  </div>
                  <div className={carPageStyles.specItem}>
                    <div className={carPageStyles.specIconContainer}>
                      <FaGasPump className="text-amber-400" />
                    </div>
                    <span>{car.fuel}</span>
                  </div>
                  <div className={carPageStyles.specItem}>
                    <div className={carPageStyles.specIconContainer}>
                      <FaTachometerAlt className="text-emerald-400" />
                    </div>
                    <span>{car.mileage}</span>
                  </div>
                  <div className={carPageStyles.specItem}>
                    <div className={carPageStyles.specIconContainer}>
                      <FaShieldAlt className="text-purple-400" />
                    </div>
                    <span>Premium</span>
                  </div>
                </div>
 
                <button
                  onClick={() =>
                    navigate(`/cars/${car.id}`, { state: { car } })
                  }
                  className={carPageStyles.bookButton}
                >
                  <span className={carPageStyles.buttonText}>
                    Book Now
                  </span>
                  <FaArrowRight className={carPageStyles.buttonIcon} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Floating decorative elements */}
        <div className={carPageStyles.decor1}></div>
        <div className={carPageStyles.decor2}></div>
      </div>
    </div>
  );
};

export default CarPage;