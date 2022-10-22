import { useState, useEffect } from "react";

import FooterPc from "./FooterPc.jsx";
import FooterMobile from "./FooterMobile.jsx";

import useWindowDimensions from "../../utils/WindowDimension";

const Footer = () => {
  const { width } = useWindowDimensions();
  const [isMobile, setIsMobile] = useState(width <= 850);

  useEffect(() => {
    if (width > 850) setIsMobile(false);
    else setIsMobile(true);
  }, [width]);

  return isMobile ? <FooterMobile /> : <FooterPc />;
};

export default Footer;
