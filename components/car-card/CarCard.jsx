"use client";
import "./CarCard.scss";
import { useState } from "react";
import Image from "next/image";
import CustomButton from "../custombutton/CustomButton.jsx";
import { calculateCarRent } from "@/utils";

const CarCard = ({ car }) => {
  const { city_mpg, year, make, model, trasmission, drive } = car;
  const carRent = calculateCarRent(city_mpg, year);

  const [isOpen,setIsOpen]=useState(false);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make}
          {model}
        </h2>
      </div>
      <p className="car-card__content-body">
        <span className="content-body__span-1">$</span>
        {carRent}
        <span className="content-body__span-2">/day</span>
      </p>
      <div className="content-body__image-container ">
        <Image
          src="/hero.png"
          alt="car-model"
          fill
          priority
          className="content-body__image"
        />
      </div>
      <div className="car-card__footer">
        <div className="car-card__footer-container">
          <div className="car-card__footer-content">
            <Image
              src="/steering-wheel.svg"
              width={40}
              height={40}
              alt="steering-wheel"
            />
            <p>{trasmission === "a" ? "Automatic" : "Manual"}</p>
          </div>
          <div className="car-card__footer-content">
            <Image src="/tire.svg" width={20} height={20} alt="tire" />
            <p>{drive.toUpperCase()}</p>
          </div>
          <div className="car-card__footer-content">
            <Image src="/gas.svg" width={20} height={20} alt="gas" />
            <p>{city_mpg} MPG</p>
          </div>
          
        </div>
        <div className="car-card__btn-container">
            <CustomButton 
            title="View More" 
            containerStyles="car-card__btn"
            textStyles="car-card__btn-container-text text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={()=>{setIsOpen(true)}}
            />
          </div>
      </div>
    </div>
  );
};

export default CarCard;
