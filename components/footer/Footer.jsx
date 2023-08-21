import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/constants";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer_container flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="footer_items">
        <div className="footer_item-1">
          <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
            className="footer_image"
          />
          <p className="text-base text-gray-700">
            Carhub 2023 <br />
            All rights reserved &copy;
          </p>
        </div>

        <div className="footer__links">
          {footerLinks.map((link) => (
            <div key={link.title} className="footer_link">
              <h3 className="font-bold">{link.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
