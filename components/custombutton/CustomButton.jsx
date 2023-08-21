"use client";
import Image from "next/image";
import "./CustomButton.scss";

const CustomButton = ({ title,btnType, containerStyles, handleClick }) => {
  return (
    <button
      disabled={false}
      type={btnType ||"button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default CustomButton;