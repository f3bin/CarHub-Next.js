"use client";
import Image from "next/image";
import "./CustomButton.scss";

const CustomButton = ({ title,btnType, containerStyles, handleClick,textStyles,rightIcon }) => {
  return (
    <button
      disabled={false}
      type={btnType ||"button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon &&(
        <div className="relative w-6 h-6 custom-btn__image-container">
          <Image 
          src={rightIcon}
          alt="right-icon"
          fill
          className="custom-btn__image"
          />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
