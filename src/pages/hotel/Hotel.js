import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocation,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import "./hotel.css";
import MailList from "./../../components/mailList/MailList";
import Footer from "./../../components/footer/Footer";
import { useState } from "react";
const Hotel = () => {
  const [sildeNumber, setSildeNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const photos = [
    {
      src: "../imges/24.jpg",
    },
    {
      src: "../imges/24.jpg",
    },
    {
      src: "../imges/24.jpg",
    },
    {
      src: "../imges/24.jpg",
    },
    {
      src: "../imges/24.jpg",
    },
    {
      src: "../imges/24.jpg",
    },
  ];
  const handelOpen = (i) => {
    setSildeNumber(i);
    setOpen(true);
  };
  const handelMove = (direction) => {
    let newSildeNumber;
    if (direction === "l") {
      newSildeNumber = sildeNumber === 0 ? 5 : sildeNumber - 1;
    } else {
      newSildeNumber = sildeNumber === 5 ? 0 : sildeNumber + 1;
    }
    setSildeNumber(newSildeNumber);
  };
  return (
    <div>
      <Navbar />
      <Header type="List" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handelMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[sildeNumber].src} className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handelMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reseve or Book Now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New your</span>
          </div>
          <span className="hotelDistance">
            Excellent Location - 500m From Center
          </span>
          <span className="hotelPriceHighLight">
            Book A Stay Over $123 At Propery And Get a Free Airport
          </span>
          <div className="hotelImages">
            {photos.map((photos, i) => (
              <div className="hotelImgWrapper">
                <img
                  onClick={() => handelOpen(i)}
                  src={photos.src}
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay In The Heart Of Esna</h1>
              <p className="hotelDesc">
                Book A Stay Over $123 At Propery And Get a Free Airport Lorem
                Book A Stay Over $123 At Propery And Get a Free Airport
                LoremBook A Stay Over $123 At Propery And Get a Free Airport
                LoremBook A Stay Over $123 At Propery And Get a Free Airport
                LoremBook A Stay Over $123 At Propery And Get a Free Airport
                LoremBook A Stay Over $123 At Propery And Get a Free Airport
                LoremBook A Stay Over $123 At Propery And Get a Free Airport
                LoremBook A Stay Over $123 At Propery And Get a Free Airport
                LoremBook A Stay Over $123 At Propery And Get a Free Airport
                LoremBook A Stay Over $123 At Propery And Get a Free Airport
                LoremBook A Stay Over $123 At Propery And Get a Free Airport
                LoremBook A Stay Over $123 At Propery And Get a Free Airport
                LoremBook A Stay Over $123 At Propery And Get a Free Airport
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect For A-Night Stay!</h1>
              <span>
                Locatin In the real Heart of Esna , This Property Has An
                Excellent Location score of 9.8
              </span>
              <h2>
                <b>$954</b>(9 Night)
              </h2>
              <button>Reseve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
