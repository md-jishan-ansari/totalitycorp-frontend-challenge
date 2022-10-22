import { useState, useEffect } from "react";

import classes from "./HomeTop.module.css";

import { AiOutlineRight } from "react-icons/ai";

import useWindowDimensions from "../../../utils/WindowDimension";

const HomeTop = () => {
  const { width } = useWindowDimensions();
  const [isMobile, setIsMobile] = useState({
    top: false,
    mid: false,
    bottom: false,
  });

  useEffect(() => {
    if (width < 735) {
      setIsMobile({ top: true, mid: true, bottom: true });
    } else if (width < 1070) {
      setIsMobile({ top: false, mid: true, bottom: false });
    } else {
      setIsMobile({ top: false, mid: false, bottom: false });
    }
  }, [width]);

  return (
    <div style={{ backgroundColor: "#fff" }}>
      <div
        className={classes.homepageImg}
        style={{ marginTop: isMobile.top && 38 }}
      >
        {isMobile.top ? (
          <img src="./image/homepage/homepage1b.jpg" alt="Home Page" />
        ) : (
          <img src="./image/homepage/homepage1a.jpg" alt="Home Page" />
        )}

        <div className={classes.homeContent}>
          <h2 className={classes.headline}>iPad</h2>
          <h3 className={classes.subHeading}>Lovable. Drawable. Magical.</h3>
          <p className={classes.avalHeading}>Available starting 10.26</p>
          <div className={classes.btnContainer}>
            <p className={classes.clickBtn}>
              <a href="/#" className={classes.btnLink}>
                Learn more
              </a>{" "}
              <AiOutlineRight className={classes.btnLinkIcon} />
            </p>
            <p className={classes.clickBtn} style={{ marginLeft: 30 }}>
              <a href="/#" className={classes.btnLink}>
                Order now
              </a>{" "}
              <AiOutlineRight className={classes.btnLinkIcon} />
            </p>
          </div>
        </div>
      </div>
      <div className={classes.homepageImg} style={{ marginTop: 10 }}>
        {isMobile.mid ? (
          <img src="./image/homepage/homepage2b.jpg" alt="Home Page" />
        ) : (
          <img src="./image/homepage/homepage2a.jpg" alt="Home Page" />
        )}

        <div className={`${classes.homeContent} ${classes.homeContentMid}`}>
          <h2 className={classes.headline} style={{ color: "#f5f5f7" }}>
            iPad Pro
          </h2>
          <h3
            className={classes.subHeading}
            style={{
              color: "#f5f5f7",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: !isMobile.top ? "0 0 4px 0" : 0,
            }}
          >
            <span>Supercharged by</span>
            <img src="./image/homepage/homepageIcon1.png" alt="Home Page" />
          </h3>
          <p className={classes.avalHeading} style={{ marginTop: 0 }}>
            Available starting 10.26
          </p>
          <div className={classes.btnContainer}>
            <p className={classes.clickBtn}>
              <a
                href="/#"
                className={classes.btnLink}
                style={{ color: "#2997ff" }}
              >
                Learn more
              </a>{" "}
              <AiOutlineRight
                className={classes.btnLinkIcon}
                style={{
                  color: "#2997ff",
                }}
              />
            </p>
            <p className={classes.clickBtn} style={{ marginLeft: 30 }}>
              <a
                href="/#"
                className={classes.btnLink}
                style={{ color: "#2997ff" }}
              >
                Order now
              </a>{" "}
              <AiOutlineRight
                className={classes.btnLinkIcon}
                style={{
                  color: "#2997ff",
                }}
              />
            </p>
          </div>
        </div>
      </div>
      <div className={classes.homepageImg} style={{ marginTop: 10 }}>
        {isMobile.bottom ? (
          <img src="./image/homepage/homepage3b.jpg" alt="Home Page" />
        ) : (
          <img src="./image/homepage/homepage3a.jpg" alt="Home Page" />
        )}

        <div className={`${classes.homeContent} ${classes.homeContentBottom}`}>
          <h2 className={classes.headline}>
            <img src="./image/homepage/homepageIcon2.png" alt="Home Page" />
          </h2>
          <h3 className={classes.subHeading}>
            The Apple experience. Cinematic in every sense.
          </h3>
          <p className={classes.avalHeading}>Available starting 11.4</p>
          <div className={classes.btnContainer}>
            <p className={classes.clickBtn}>
              <a href="/#" className={classes.btnLink}>
                Learn more
              </a>{" "}
              <AiOutlineRight className={classes.btnLinkIcon} />
            </p>
            <p className={classes.clickBtn} style={{ marginLeft: 30 }}>
              <a href="/#" className={classes.btnLink}>
                Order now
              </a>{" "}
              <AiOutlineRight className={classes.btnLinkIcon} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTop;
