import { useState, useEffect } from "react";

import classes from "./Navbar.module.css";

import { BsApple, BsSearch } from "react-icons/bs";

import { BiCube } from "react-icons/bi";
import { BsBag, BsBookmark, BsPersonCircle } from "react-icons/bs";
import { AiOutlineClose, AiOutlineSetting } from "react-icons/ai";

import { Dropdown } from "react-bootstrap";

const Navbar = ({ isSearchOpen, setIsSearchOpen, isBagOpen, setIsBagOpen }) => {
  return (
    <>
      <div
        className={classes.navbar}
        style={{ backgroundColor: isSearchOpen && "#000" }}
      >
        {!isSearchOpen ? (
          <div className={classes.navbarContainer}>
            <BsApple
              className={classes.navLinkIcon}
              style={{ fontSize: 16, transform: "translateY(-2px)" }}
            />
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
            ].map((item) => (
              <a href="/#" className={classes.navLinkBtn}>
                {item}
              </a>
            ))}

            <BsSearch
              className={classes.navLinkIcon}
              style={{ fontSize: 14 }}
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            />

            <Dropdown
              onToggle={() => setIsBagOpen(!isBagOpen)}
              show={isBagOpen}
            >
              <Dropdown.Toggle
                variant="success"
                id="dropdown-basic"
                bsPrefix={classes.dropdownBtn}
                style={{ background: "transparent" }}
              >
                <BsBag
                  className={classes.navLinkIcon}
                  style={{ fontSize: 15, transform: "translateY(-4px)" }}
                />
              </Dropdown.Toggle>

              <Dropdown.Menu bsPrefix={`dropdown-menu ${classes.dropdownMenu}`}>
                <div className={classes.bagContainer}>
                  <div
                    style={{
                      padding: "0 40px",
                      maxWidth: 600,
                      margin: "0 auto",
                    }}
                  >
                    <p className={classes.bagText}>Your Bag is empty.</p>
                    {[
                      [<BsBag className={classes.bagIcon} />, "Bag"],
                      [
                        <BsBookmark className={classes.bagIcon} />,
                        "Saved Items",
                      ],
                      [<BiCube className={classes.bagIcon} />, "Orders"],
                      [
                        <AiOutlineSetting className={classes.bagIcon} />,
                        "Account",
                      ],
                      [
                        <BsPersonCircle className={classes.bagIcon} />,
                        "Sign in",
                      ],
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
              </Dropdown.Menu>
            </Dropdown>
          </div>
        ) : (
          <div className={classes.searchContainer}>
            <BsSearch className={classes.searchInputIcon} />
            <input
              type="text"
              id="lname"
              name="lname"
              placeholder="Search apple.com"
              className={classes.searchInput}
            />
            <AiOutlineClose
              className={classes.searchInputIcon}
              style={{ fontSize: 20, cursor: "pointer" }}
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            />
          </div>
        )}

        {isSearchOpen && (
          <div className={classes.searchSuggest}>
            <p className={classes.searchSuggeshHeading}>QUICK LINKS</p>
            <a href="/#" className={classes.searchSuggestLink}>
              Visiting an Apple Store FAQ
            </a>
            <a href="/#" className={classes.searchSuggestLink}>
              AirPods
            </a>
            <a href="/#" className={classes.searchSuggestLink}>
              AirTag
            </a>
            <a href="/#" className={classes.searchSuggestLink}>
              {" "}
              AppleCare++
            </a>
            <a href="/#" className={classes.searchSuggestLink}>
              Gift Cards
            </a>
          </div>
        )}

        {isSearchOpen && (
          <div
            className={classes.backdrop}
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          ></div>
        )}
      </div>
    </>
  );
};

export default Navbar;
