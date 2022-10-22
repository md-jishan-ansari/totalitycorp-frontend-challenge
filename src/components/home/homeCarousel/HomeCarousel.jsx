import { useState, useEffect } from "react";

import classes from "./HomeCarousel.module.css";

import { Button } from "react-bootstrap";

import { AiFillPlayCircle } from "react-icons/ai";

import useWindowDimensions from "../../../utils/WindowDimension.js";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const carouselItem = [
  {
    id: 1,
    pcImg: "image/carousels/Carousel1.jpg",
    mobImg: "image/carousels/Carousel1b.jpg",
    genre: "Drama",
    Description: "Welcome to Bombay.",
  },
  {
    id: 2,
    pcImg: "image/carousels/Carousel2.jpg",
    mobImg: "image/carousels/Carousel2b.jpg",
    genre: "Comedy",
    Description: "4 Emmy® wins including Outstanding Comedy.",
  },
  {
    id: 3,
    pcImg: "image/carousels/Carousel3.jpg",
    mobImg: "image/carousels/Carousel3b.jpg",
    genre: "Drama",
    Description: "Friendship has no last call.",
  },
  {
    id: 4,
    pcImg: "image/carousels/Carousel4.jpg",
    mobImg: "image/carousels/Carousel4b.jpg",
    genre: "Drama",
    Description: "The epic series comes to an end.",
  },
  {
    id: 5,
    pcImg: "image/carousels/Carousel5.jpg",
    mobImg: "image/carousels/Carousel5b.jpg",
    genre: "Drama",
    Description: "Family. It’s a killer.",
  },
  {
    id: 6,
    pcImg: "image/carousels/Carousel6.jpg",
    mobImg: "image/carousels/Carousel6b.jpg",
    genre: "Animation",
    Description: "Happiness  is a Halloween tradition.",
  },
  {
    id: 7,
    pcImg: "image/carousels/Carousel7.jpg",
    mobImg: "image/carousels/Carousel7b.jpg",
    genre: "Animation",
    Description: "Sometimes all you need is for everything to go wrong.",
  },
  {
    id: 8,
    pcImg: "image/carousels/Carousel8.jpg",
    mobImg: "image/carousels/Carousel8b.jpg",
    genre: "Thriller",
    Description: "We’re all different people at work.",
  },
  {
    id: 9,
    pcImg: "image/carousels/Carousel9.jpg",
    mobImg: "image/carousels/Carousel9b.jpg",
    genre: "Drama",
    Description: "Two brothers. One final request.",
  },
  {
    id: 10,
    pcImg: "image/carousels/Carousel10.jpg",
    mobImg: "image/carousels/Carousel10b.jpg",
    genre: "Drama",
    Description: "Control is an illusion.",
  },
  {
    id: 11,
    pcImg: "image/carousels/Carousel11.jpg",
    mobImg: "image/carousels/Carousel11b.jpg",
    genre: "Drama",
    Description: "One man’s freedom hides in another man’s darkness.",
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 734 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 734, min: 600 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
  },
};

const HomeCarousel = () => {
  const { width } = useWindowDimensions();
  const [isMobile, setIsMobile] = useState(width < 735);
  const [isCenterWidth, setIsCenterWidth] = useState(width < 735);

  useEffect(() => {
    if (width < 735) setIsMobile(true);
    else setIsMobile(false);

    if ((width > 735 && width < 1200) || width < 400) {
      setIsCenterWidth(false);
    } else {
      setIsCenterWidth(true);
    }
  }, [width]);

  return (
    <Carousel
      containerClass={`react-multi-carousel-list ${classes.carouselcontainer}`}
      dotListClass={`react-multi-carousel-list ${classes.dotListContainer}`}
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      centerMode={isCenterWidth}
      autoPlay={true}
      autoPlaySpeed={2000}
      keyBoardControl={true}
      itemClass="carousel-item-padding-40-px"
    >
      {carouselItem.map((item) => (
        <div className={classes.carouselItemContainer}>
          <img src={isMobile ? item.mobImg : item.pcImg} alt="Third slide" />

          {isMobile ? (
            <div className={classes.carouselMobileItemContent}>
              <p style={{ fontWeight: "600", margin: 0 }}>{item.genre} </p>
              <p>{item.Description}</p>

              <Button variant="light" className={classes.btn}>
                Stream now <AiFillPlayCircle />
              </Button>
            </div>
          ) : (
            <div className={classes.carouselItemContent}>
              <Button variant="light" className={classes.btn}>
                Stream now <AiFillPlayCircle />
              </Button>
              <p>
                {" "}
                <span style={{ fontWeight: "600" }}>{item.genre} · </span>
                {item.Description}
              </p>
            </div>
          )}
        </div>
      ))}
    </Carousel>
  );
};

export default HomeCarousel;
