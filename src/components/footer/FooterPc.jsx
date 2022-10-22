import classes from "./Footer.module.css";

const Footer = () => {
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

        <div className={classes.divider} style={{ marginTop: 30 }}></div>

        <div className={classes.footerSubContainer}>
          <div>
            <p
              className={classes.footerText2}
              style={{ color: "#1d1d1f", fontWeight: "600" }}
            >
              Shop and Learn
            </p>
            {[
              "Store",
              "Mac",
              "iPad",
              "iPhone",
              "Watch",
              "AirPods",
              "TV & Home",
              "AirTag",
              "Accessories",
              "Gift Cards",
            ].map((item) => (
              <p style={{ marginBottom: 0 }}>
                <a
                  key={item}
                  href="/#"
                  className={`${classes.footerText2} ${classes.underline}`}
                  style={{ color: "#6e6e73" }}
                >
                  {item}
                </a>
              </p>
            ))}
          </div>

          {/* ************* */}

          <div>
            <p
              className={classes.footerText2}
              style={{ color: "#1d1d1f", fontWeight: "600" }}
            >
              Services
            </p>

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
              <p key={item} style={{ marginBottom: 0 }}>
                <a
                  href="/#"
                  className={`${classes.footerText2} ${classes.underline}`}
                  style={{ color: "#6e6e73" }}
                >
                  {item}
                </a>
              </p>
            ))}

            <p
              className={classes.footerText2}
              style={{ color: "#1d1d1f", fontWeight: "600", marginTop: 20 }}
            >
              Account
            </p>

            {["Manage Your Apple ID", "Apple Store Account", "iCloud.com"].map(
              (item) => (
                <p key={item} style={{ marginBottom: 0 }}>
                  <a
                    href="/#"
                    className={`${classes.footerText2} ${classes.underline}`}
                    style={{ color: "#6e6e73" }}
                  >
                    {item}
                  </a>
                </p>
              )
            )}
          </div>

          {/* ************* */}

          <div>
            <p
              className={classes.footerText2}
              style={{ color: "#1d1d1f", fontWeight: "600" }}
            >
              Apple Store
            </p>

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
              <p key={item} style={{ marginBottom: 0 }}>
                <a
                  href="/#"
                  className={`${classes.footerText2} ${classes.underline}`}
                  style={{ color: "#6e6e73" }}
                >
                  {item}
                </a>
              </p>
            ))}
          </div>

          {/* ********* */}

          <div>
            <p
              className={classes.footerText2}
              style={{ color: "#1d1d1f", fontWeight: "600" }}
            >
              For Business
            </p>

            {["Apple and Business", "Shop for Business"].map((item) => (
              <p key={item} style={{ marginBottom: 0 }}>
                <a
                  href="/#"
                  className={`${classes.footerText2} ${classes.underline}`}
                  style={{ color: "#6e6e73" }}
                >
                  {item}
                </a>
              </p>
            ))}

            <p
              className={classes.footerText2}
              style={{ color: "#1d1d1f", fontWeight: "600", marginTop: 20 }}
            >
              For Education
            </p>

            {["Apple and Education", "Shop for K-12", "Shop for College"].map(
              (item) => (
                <p key={item} style={{ marginBottom: 0 }}>
                  <a
                    href="/#"
                    className={`${classes.footerText2} ${classes.underline}`}
                    style={{ color: "#6e6e73" }}
                  >
                    {item}
                  </a>
                </p>
              )
            )}

            <p
              className={classes.footerText2}
              style={{ color: "#1d1d1f", fontWeight: "600", marginTop: 20 }}
            >
              For Healthcare
            </p>

            {[
              "Apple in Healthcare",
              "Health on Apple Watch",
              "Health Records on iPhone",
            ].map((item) => (
              <p key={item} style={{ marginBottom: 0 }}>
                <a
                  href="/#"
                  className={`${classes.footerText2} ${classes.underline}`}
                  style={{ color: "#6e6e73" }}
                >
                  {item}
                </a>
              </p>
            ))}

            <p
              className={classes.footerText2}
              style={{ color: "#1d1d1f", fontWeight: "600", marginTop: 20 }}
            >
              For Government
            </p>

            {["Shop for Government", "Shop for Veterans and Military"].map(
              (item) => (
                <p key={item} style={{ marginBottom: 0 }}>
                  <a
                    href="/#"
                    className={`${classes.footerText2} ${classes.underline}`}
                    style={{ color: "#6e6e73" }}
                  >
                    {item}
                  </a>
                </p>
              )
            )}
          </div>

          {/* ********* */}

          <div>
            <p
              className={classes.footerText2}
              style={{ color: "#1d1d1f", fontWeight: "600" }}
            >
              Apple Values
            </p>

            {[
              "Accessibility",
              "Education",
              "Environment",
              "Inclusion and Diversity",
              "Privacy",
              "Racial Equity and Justice",
              "Supplier Responsibility",
            ].map((item) => (
              <p key={item} style={{ marginBottom: 0 }}>
                <a
                  href="/#"
                  className={`${classes.footerText2} ${classes.underline}`}
                  style={{ color: "#6e6e73" }}
                >
                  {item}
                </a>
              </p>
            ))}

            <p
              className={classes.footerText2}
              style={{ color: "#1d1d1f", fontWeight: "600", marginTop: 20 }}
            >
              About Apple
            </p>

            {[
              "Newsroom",
              "Apple Leadership",
              "Career Opportunities",
              "Investors",
              "Ethics & Compliance",
              "Events",
              "Contact Apple",
            ].map((item) => (
              <p key={item} style={{ marginBottom: 0 }}>
                <a
                  href="/#"
                  className={`${classes.footerText2} ${classes.underline}`}
                  style={{ color: "#6e6e73" }}
                >
                  {item}
                </a>
              </p>
            ))}
          </div>
        </div>

        <p className={classes.footerText}>
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

        <div className={classes.divider}></div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 3,
          }}
        >
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <p
              className={classes.footerText}
              style={{ margin: "6px 30px 0px 0px" }}
            >
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
          <p>
            <a
              href="/#"
              className={`${classes.footerText2} ${classes.underline}`}
              style={{ color: "#424245", marginRight: 0, width: 72 }}
            >
              United States
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
