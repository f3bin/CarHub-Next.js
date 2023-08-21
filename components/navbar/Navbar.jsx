import Link from "next/link";
import Image from "next/image";
import "./Navbar.scss";

import  CustomButton from "../custombutton/CustomButton.jsx";

const Navbar = () => {
  return (
    <header className=" navbar_container">
      <nav className="navbar_nav">
        <Link  href="/" className="navbar_nav-linkflex justify-center items-center">
          <Image
            src="/logo.svg"
            alt="car hub logo"
            width={118}
            height={18}
            className="navbar_nav-link-image"
          />
        </Link>
        <CustomButton
          title="Sign In"
          btnType="button"
          containerStyles="button-style"
        />

      </nav>
    </header>
  );
};

export default Navbar;
