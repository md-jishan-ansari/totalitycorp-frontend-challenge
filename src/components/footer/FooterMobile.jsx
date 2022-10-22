import { useState } from "react";

import classes from "./Footer.module.css";

import { Accordion } from "react-bootstrap";

import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";

const IconBox = ({ activeItem, index }) => {
  return activeItem[index] ? (
    <AiOutlineClose
      style={{
        position: "absolute",
        right: 0,
      }}
    />
  ) : (
    <AiOutlinePlus
      style={{
        position: "absolute",
        right: 0,
      }}
    />
  );
};

const FooterMobile = () => {
  const [activeItem, setActiveItem] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
  });
  return (
    <div className={classes.container}>
      <div className={classes.footerContainer}>
        <p className={classes.footerText}>
          To access and use all the features of Apple Card, you must add Apple
          Card to Wallet on an iPhone or iPad with the latest version of iOS or
          iPadOS. Update to the latest version by going to Settings {`>`}{" "}
          General {`>`}
          Software Update. Tap Download and Install.
        </p>
        <p className={classes.footerText}>
          Available for qualifying applicants in the United States.
        </p>
        <p className={classes.footerText}>
          Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City Branch.
        </p>
        <p className={classes.footerText}>
          Learn more about how Apple Card applications are evaluated at{" "}
          <a
            href="https://support.apple.com/en-us/HT209218"
            style={{ color: "#424245", textDecoration: "none" }}
            className={classes.underline}
          >
            support.apple.com/kb/HT209218
          </a>
        </p>

        <div
          className={classes.divider}
          style={{ marginTop: 30, marginBottom: 20 }}
        ></div>

        <Accordion alwaysOpen flush bsPrefix={classes.accordionContainer}>
          <Accordion.Item eventKey="0" bsPrefix={classes.accordionItem}>
            <Accordion.Header
              onClick={() =>
                setActiveItem({ ...activeItem, 0: !activeItem[0] })
              }
              className={classes.accordionItemHeader}
            >
              <p
                className={classes.accordionItemHeaderText}
                style={{ color: activeItem[0] && "#000" }}
              >
                Shop and Learn
                <IconBox activeItem={activeItem} index={0} />
              </p>
            </Accordion.Header>
            <Accordion.Body>
              <div style={{ padding: "0px 15px 10px" }}>
                {[
                  "Store",
                  "Mac",
                  "iPad",
                  "iPhone",
                  "Watch",
                  "AirPods",
                  "TV &Home",
                  "AirTag",
                  "Accessories",
                  "Gift Cards",
                ].map((item) => (
                  <p key={item} style={{ margin: "10px 0" }}>
                    <a
                      href="/#"
                      className={classes.footerText2}
                      style={{ color: "#6e6e73", display: "block" }}
                    >
                      <span className={classes.underline2}>{item}</span>
                    </a>
                  </p>
                ))}
              </div>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1" bsPrefix={classes.accordionItem}>
            <Accordion.Header
              onClick={() =>
                setActiveItem({ ...activeItem, 1: !activeItem[1] })
              }
              className={classes.accordionItemHeader}
            >
              <p
                className={classes.accordionItemHeaderText}
                style={{ color: activeItem[1] && "#000" }}
              >
                Services
                <IconBox activeItem={activeItem} index={1} />
              </p>
            </Accordion.Header>

            <Accordion.Body>
              <div style={{ padding: "0px 15px 10px" }}>
                {[
                  "Apple Music",
                  "Apple TV+",
                  "Apple Fitness+",
                  "Apple News+",
                  "Apple Arcade",
                  "iCloud",
                  "Apple One",
                  "Apple Card",
                  "Apple Books",
                  "Apple Podcasts",
                  "App Store",
                ].map((item) => (
                  <p key={item} style={{ margin: "10px 0" }}>
                    <a
                      href="/#"
                      className={classes.footerText2}
                      style={{ color: "#6e6e73", display: "block" }}
                    >
                      <span className={classes.underline2}>{item}</span>
                    </a>
                  </p>
                ))}
              </div>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2" bsPrefix={classes.accordionItem}>
            <Accordion.Header
              onClick={() =>
                setActiveItem({ ...activeItem, 2: !activeItem[2] })
              }
              className={classes.accordionItemHeader}
            >
              <p
                className={classes.accordionItemHeaderText}
                style={{ color: activeItem[2] && "#000" }}
              >
                Account
                <IconBox activeItem={activeItem} index={2} />
              </p>
            </Accordion.Header>

            <Accordion.Body>
              <div style={{ padding: "0px 15px 10px" }}>
                {[
                  "Manage Your Apple ID",
                  "Apple Store Account",
                  "iCloud.com",
                ].map((item) => (
                  <p key={item} style={{ margin: "10px 0" }}>
                    <a
                      href="/#"
                      className={classes.footerText2}
                      style={{ color: "#6e6e73", display: "block" }}
                    >
                      <span className={classes.underline2}>{item}</span>
                    </a>
                  </p>
                ))}
              </div>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3" bsPrefix={classes.accordionItem}>
            <Accordion.Header
              onClick={() =>
                setActiveItem({ ...activeItem, 3: !activeItem[3] })
              }
              className={classes.accordionItemHeader}
            >
              <p
                className={classes.accordionItemHeaderText}
                style={{ color: activeItem[3] && "#000" }}
              >
                Apple Store
                <IconBox activeItem={activeItem} index={3} />
              </p>
            </Accordion.Header>

            <Accordion.Body>
              <div style={{ padding: "0px 15px 10px" }}>
                {[
                  "Find a Store",
                  "Genius Bar",
                  "Today at Apple",
                  "Apple Camp",
                  "Apple Store App",
                  "Refurbished and Clearance",
                  "Financing",
                  "Apple Trade In",
                  "Order Status",
                  "Shopping Help",
                ].map((item) => (
                  <p key={item} style={{ margin: "10px 0" }}>
                    <a
                      href="/#"
                      className={classes.footerText2}
                      style={{ color: "#6e6e73", display: "block" }}
                    >
                      <span className={classes.underline2}>{item}</span>
                    </a>
                  </p>
                ))}
              </div>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4" bsPrefix={classes.accordionItem}>
            <Accordion.Header
              onClick={() =>
                setActiveItem({ ...activeItem, 4: !activeItem[4] })
              }
              className={classes.accordionItemHeader}
            >
              <p
                className={classes.accordionItemHeaderText}
                style={{ color: activeItem[4] && "#000" }}
              >
                For Business
                <IconBox activeItem={activeItem} index={4} />
              </p>
            </Accordion.Header>

            <Accordion.Body>
              <div style={{ padding: "0px 15px 10px" }}>
                {["Apple and Business", "Shop for Business"].map((item) => (
                  <p key={item} style={{ margin: "10px 0" }}>
                    <a
                      href="/#"
                      className={classes.footerText2}
                      style={{ color: "#6e6e73", display: "block" }}
                    >
                      <span className={classes.underline2}>{item}</span>
                    </a>
                  </p>
                ))}
              </div>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="5" bsPrefix={classes.accordionItem}>
            <Accordion.Header
              onClick={() =>
                setActiveItem({ ...activeItem, 5: !activeItem[5] })
              }
              className={classes.accordionItemHeader}
            >
              <p
                className={classes.accordionItemHeaderText}
                style={{ color: activeItem[5] && "#000" }}
              >
                For Education
                <IconBox activeItem={activeItem} index={5} />
              </p>
            </Accordion.Header>

            <Accordion.Body>
              <div style={{ padding: "0px 15px 10px" }}>
                {[
                  "Apple and Education",
                  "Shop for K-12",
                  "Shop for College",
                ].map((item) => (
                  <p key={item} style={{ margin: "10px 0" }}>
                    <a
                      href="/#"
                      className={classes.footerText2}
                      style={{ color: "#6e6e73", display: "block" }}
                    >
                      <span className={classes.underline2}>{item}</span>
                    </a>
                  </p>
                ))}
              </div>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="6" bsPrefix={classes.accordionItem}>
            <Accordion.Header
              onClick={() =>
                setActiveItem({ ...activeItem, 6: !activeItem[6] })
              }
              className={classes.accordionItemHeader}
            >
              <p
                className={classes.accordionItemHeaderText}
                style={{ color: activeItem[6] && "#000" }}
              >
                For Healthcare
                <IconBox activeItem={activeItem} index={6} />
              </p>
            </Accordion.Header>

            <Accordion.Body>
              <div style={{ padding: "0px 15px 10px" }}>
                {[
                  "Apple in Healthcare",
                  "Health on Apple Watch",
                  "Health Records on iPhone",
                ].map((item) => (
                  <p key={item} style={{ margin: "10px 0" }}>
                    <a
                      href="/#"
                      className={classes.footerText2}
                      style={{ color: "#6e6e73", display: "block" }}
                    >
                      <span className={classes.underline2}>{item}</span>
                    </a>
                  </p>
                ))}
              </div>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="7" bsPrefix={classes.accordionItem}>
            <Accordion.Header
              onClick={() =>
                setActiveItem({ ...activeItem, 7: !activeItem[7] })
              }
              className={classes.accordionItemHeader}
            >
              <p
                className={classes.accordionItemHeaderText}
                style={{ color: activeItem[7] && "#000" }}
              >
                For Government
                <IconBox activeItem={activeItem} index={7} />
              </p>
            </Accordion.Header>

            <Accordion.Body>
              <div style={{ padding: "0px 15px 10px" }}>
                {["Shop for Government", "Shop for Veterans and Military"].map(
                  (item) => (
                    <p key={item} style={{ margin: "10px 0" }}>
                      <a
                        href="/#"
                        className={classes.footerText2}
                        style={{ color: "#6e6e73", display: "block" }}
                      >
                        <span className={classes.underline2}>{item}</span>
                      </a>
                    </p>
                  )
                )}
              </div>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="8" bsPrefix={classes.accordionItem}>
            <Accordion.Header
              onClick={() =>
                setActiveItem({ ...activeItem, 8: !activeItem[8] })
              }
              className={classes.accordionItemHeader}
            >
              <p
                className={classes.accordionItemHeaderText}
                style={{ color: activeItem[8] && "#000" }}
              >
                Apple Values
                <IconBox activeItem={activeItem} index={8} />
              </p>
            </Accordion.Header>

            <Accordion.Body>
              <div style={{ padding: "0px 15px 10px" }}>
                {[
                  "Accessibility",
                  "Education",
                  "Environment",
                  "Inclusion and Diversity",
                  "Privacy",
                  "Racial Equity and Justice",
                  "Supplier Responsibility",
                ].map((item) => (
                  <p key={item} style={{ margin: "10px 0" }}>
                    <a
                      href="/#"
                      className={classes.footerText2}
                      style={{ color: "#6e6e73", display: "block" }}
                    >
                      <span className={classes.underline2}>{item}</span>
                    </a>
                  </p>
                ))}
              </div>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="9" bsPrefix={classes.accordionItem}>
            <Accordion.Header
              onClick={() =>
                setActiveItem({ ...activeItem, 9: !activeItem[9] })
              }
              className={classes.accordionItemHeader}
            >
              <p
                className={classes.accordionItemHeaderText}
                style={{ color: activeItem[9] && "#000" }}
              >
                About Apple
                <IconBox activeItem={activeItem} index={9} />
              </p>
            </Accordion.Header>

            <Accordion.Body>
              <div style={{ padding: "0px 15px 10px" }}>
                {[
                  "Newsroom",
                  "Apple Leadership",
                  "Career Opportunities",
                  "Investors",
                  "Ethics & Compliance",
                  "Events",
                  "Contact Apple",
                ].map((item) => (
                  <p key={item} style={{ margin: "10px 0" }}>
                    <a
                      href="/#"
                      className={classes.footerText2}
                      style={{ color: "#6e6e73", display: "block" }}
                    >
                      <span className={classes.underline2}>{item}</span>
                    </a>
                  </p>
                ))}
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <p className={classes.footerText} style={{ marginTop: 15 }}>
          More ways to shop:{" "}
          <a
            href="/#"
            className={classes.underline}
            style={{
              textDecoration: "none",
              color: "#06c",
            }}
          >
            Find an Apple Store
          </a>{" "}
          or{" "}
          <a
            href="/#"
            className={classes.underline}
            style={{
              textDecoration: "none",
              color: "#06c",
            }}
          >
            other retailer
          </a>{" "}
          near you. Or call 1-800-MY-APPLE.
        </p>
        <p style={{ marginBottom: 10, fontSize: 13 }}>
          <a
            href="/#"
            className={`${classes.footerText2} ${classes.underline}`}
            style={{ color: "#424245", fontSize: 13 }}
          >
            United States
          </a>
        </p>

        <p className={classes.footerText} style={{ margin: 0 }}>
          Copyright © 2022 Apple Inc. All rights reserved.
        </p>
        <p>
          {[
            "Privacy Policy",
            " Terms of Use",
            "Sales and Refunds",
            " Legal",
            " Site Map",
          ].map((item) => (
            <a
              key={item}
              href="/#"
              className={`${classes.footerText2} ${classes.underline}`}
              style={{ color: "#424245" }}
            >
              {item}
            </a>
          ))}
        </p>
      </div>
    </div>
  );
};

export default FooterMobile;
