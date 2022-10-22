import classes from "./HomeCards.module.css";

import { AiOutlineRight } from "react-icons/ai";

const cards = [
  {
    id: 1,
    bgImg: "./image/cards/card1.jpg",
    heading: "iPhone 14 Pro",
    subHeading: "Pro. Beyond.",
    bgDark: true,
  },
  {
    id: 2,
    bgImg: "./image/cards/card2.jpg",
    heading: "iPhone 14",
    subHeading: "Big and bigger.",
    bgDark: false,
  },
  {
    id: 3,
    bgImg: "./image/cards/card3.jpg",
    headingImg: "./image/cards/cardlogo1.png",
    subHeading: "Adventure awaits.",
    bgDark: false,
  },
  {
    id: 4,
    bgImg: "./image/cards/card4.jpg",
    headingImg: "./image/cards/cardlogo2.png",
    subHeading: "A healthy leap ahead.",
    bgDark: true,
  },
  {
    id: 5,
    bgImg: "./image/cards/card5.jpg",
    heading: "AirPods Pro",
    subHeading: "Rebuilt from the sound up.",
    bgDark: true,
  },
  {
    id: 6,
    bgImg: "./image/cards/card6.jpg",
    headingImg: "./image/cards/cardlogo3.png",
    subHeading: `Get up to 3% Daily Cash back ${(<br />)} with every purchase.`,
    bgDark: false,
  },
];

const HomeCards = () => {
  return (
    <div className={classes.container}>
      {cards.map((card) => (
        <div key={card.id} className={classes.cardContainer}>
          <img src={card.bgImg} alt="card1" />
          <div className={classes.cardContent}>
            <h4
              className={classes.headline}
              style={{ color: !card.bgDark && "#1d1d1f" }}
            >
              {card?.headingImg ? (
                <img src={card.headingImg} alt="card1" />
              ) : (
                card.heading
              )}
            </h4>
            <h5
              className={classes.subHeading}
              style={{ color: !card.bgDark && "#1d1d1f" }}
            >
              {card.subHeading}
            </h5>
            <div className={classes.btnContainer}>
              <p className={classes.clickBtn}>
                <a
                  href="/#"
                  className={classes.btnLink}
                  style={{ color: card.bgDark ? "#2997ff" : "#0066cc" }}
                >
                  Learn more
                </a>{" "}
                <AiOutlineRight
                  style={{
                    fontSize: 15,
                    transform: "translate(-2px, 0px)",
                    color: card.bgDark ? "#2997ff" : "#0066cc",
                  }}
                />
              </p>
              <p className={classes.clickBtn} style={{ marginLeft: 25 }}>
                <a
                  href="/#"
                  className={classes.btnLink}
                  style={{ color: card.bgDark ? "#2997ff" : "#0066cc" }}
                >
                  Buy
                </a>{" "}
                <AiOutlineRight
                  style={{
                    fontSize: 15,
                    transform: "translate(-2px, 0px)",
                    color: card.bgDark ? "#2997ff" : "#0066cc",
                  }}
                />
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeCards;
