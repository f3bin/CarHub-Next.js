import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/constants";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer_container">
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
              <h3>{link.title}</h3>
              {link.links.map((item) => (
                <div key={item.title} className="footer_link-link_container">
                  <Link href={item.url} className="links_footer">
                    {item.title}
                  </Link>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="footer_copyright-container">
        <p>@2023 CarHub .All Rights Reserved </p>
        <div className="footer__copyrights-link">
          <Link href="/" className="links_footer">
            Privacy Policy
          </Link>
          <Link href="/" className="links_footer">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
