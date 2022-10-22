import { useState, useEffect } from "react";

import classes from "./Navbar.module.css";

import { BsApple, BsSearch } from "react-icons/bs";
import { BiCube } from "react-icons/bi";
import { BsBag, BsBookmark, BsPersonCircle } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineSetting } from "react-icons/ai";

const Navbar = ({ isSearchOpen, setIsSearchOpen, isBagOpen, setIsBagOpen }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    setIsNavOpen(isSearchOpen);
  }, []);

  const bagContainerHandler = () => {
    setIsBagOpen(!isBagOpen);
    setIsSearchOpen(false);
    setIsNavOpen(false);
  };

  const navOpenHandler = () => {
    setIsBagOpen(false);
    setIsSearchOpen(false);
    setIsNavOpen(!isNavOpen);
  };

  const logoClickHandler = () => {
    setIsBagOpen(false);
    setIsSearchOpen(false);
    setIsNavOpen(false);
  };

  return (
    <>
      <div
        className={classes.navbar}
        style={{
          backgroundColor: (isNavOpen || isBagOpen) && "#000",
          height: 48,
          top: isSearchOpen && -34,
        }}
      >
        <div className={classes.navbarContainer}>
          <AiOutlineMenu
            className={classes.navLinkIcon}
            style={{ fontSize: 18, transform: "translateY(-1px)" }}
            onClick={navOpenHandler}
          />

          <BsApple
            className={classes.navLinkIcon}
            style={{ fontSize: 18, transform: "translateY(-1px)" }}
            onClick={logoClickHandler}
          />
          <BsBag
            className={classes.navLinkIcon}
            style={{
              fontSize: 18,
              transform: "translateY(-1px)",
              visibility: isNavOpen && "hidden",
            }}
            onClick={bagContainerHandler}
          />
        </div>

        {/* Navbar Items */}

        <div
          className={classes.accordian}
          style={{ height: !isNavOpen ? 0 : "calc(100vh)" }}
        >
          {isNavOpen && (
            <>
              <div
                style={{
                  display: "flex",
                  maxWidth: 605,
                  padding: "0 10px",
                  margin: "0 auto",
                }}
              >
                <div
                  className={classes.mobileSearchBar}
                  style={{ width: isSearchOpen ? "calc(100% - 60px)" : "100%" }}
                >
                  <BsSearch className={classes.searchInputIcon} />
                  <input
                    type="text"
                    id="lname"
                    name="lname"
                    placeholder="Search apple.com"
                    className={classes.searchInput}
                    style={{ width: "calc(100% - 40px)", height: 36 }}
                    onClick={() => setIsSearchOpen(true)}
                  />
                </div>
                {isSearchOpen && (
                  <span
                    className={classes.cancelBtn}
                    onClick={() => setIsSearchOpen(false)}
                  >
                    Cancel
                  </span>
                )}
              </div>

              <div
                className={classes.divider}
                style={{ margin: "16px 0" }}
              ></div>
              {isSearchOpen ? (
                <div className={classes.mobileNavItemContainer}>
                  <p className={classes.quickLinkHeader}>QUICK LINKS</p>
                  {[
                    "Visiting an Apple Store FAQ",
                    "AirPods",
                    "AirTag",
                    "AppleCare+",
                    "Gift Cards",
                  ].map((item, index) => (
                    <div key={item}>
                      {index !== 0 && <div className={classes.divider}></div>}

                      <p style={{ margin: "10px 0" }}>
                        <a
                          href="/#"
                          className={classes.mobileSearchItem}
                          style={{ display: "block" }}
                        >
                          {item}
                        </a>
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className={classes.mobileNavItemContainer}>
                  {[
                    "Store",
                    "Mac",
                    "iPad",
                    "iPhone",
                    "Watch",
                    "AirPods",
                    "TV & Home",
                    "Only on Apple",
                    "Accessories",
                    "Support",
                  ].map((item, index) => (
                    <div key={item}>
                      {index !== 0 && <div className={classes.divider}></div>}

                      <p style={{ margin: "10px 0" }}>
                        <a
                          href="/#"
                          className={classes.mobileNavItem}
                          style={{ display: "block" }}
                        >
                          {item}
                        </a>
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>

        {/* Bag Items */}

        {isBagOpen && (
          <div className={classes.bagContainer}>
            <div style={{ padding: "0 40px", maxWidth: 600, margin: "0 auto" }}>
              <p className={classes.bagText}>Your Bag is empty.</p>
              {[
                [<BsBag className={classes.bagIcon} />, "Bag"],
                [<BsBookmark className={classes.bagIcon} />, "Saved Items"],
                [<BiCube className={classes.bagIcon} />, "Orders"],
                [<AiOutlineSetting className={classes.bagIcon} />, "Account"],
                [<BsPersonCircle className={classes.bagIcon} />, "Sign in"],
              ].map((item, index) => (
                <div key={item}>
                  <div
                    className={classes.divider}
                    style={{ borderColor: "#c5c5c5" }}
                  ></div>

                  <p key={item} style={{ margin: "0" }}>
                    <a href="/#" className={classes.bagItem}>
                      {item[0]}
                      <span className={classes.underline}>{item[1]}</span>
                    </a>
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {isBagOpen && (
          <div
            className={classes.backdrop}
            onClick={() => setIsBagOpen(!isBagOpen)}
          ></div>
        )}
      </div>
    </>
  );
};

export default Navbar;
