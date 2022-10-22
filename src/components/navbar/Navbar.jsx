import { useState, useEffect } from "react";

import NavbarPc from "./NavbarPc.jsx";
import NavbarMobile from "./NavbarMobile.jsx";

import useWindowDimensions from "../../utils/WindowDimension";

const Footer = () => {
  const { width } = useWindowDimensions();
  const [isMobile, setIsMobile] = useState(width <= 850);

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isBagOpen, setIsBagOpen] = useState(false);

  useEffect(() => {
    if (width > 850) setIsMobile(false);
    else setIsMobile(true);
  }, [width]);

  return isMobile ? (
    <NavbarMobile
      isSearchOpen={isSearchOpen}
      setIsSearchOpen={setIsSearchOpen}
      isBagOpen={isBagOpen}
      setIsBagOpen={setIsBagOpen}
    />
  ) : (
    <NavbarPc
      isSearchOpen={isSearchOpen}
      setIsSearchOpen={setIsSearchOpen}
      isBagOpen={isBagOpen}
      setIsBagOpen={setIsBagOpen}
    />
  );
};

export default Footer;
