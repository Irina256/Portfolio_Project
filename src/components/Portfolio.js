import React from "react";
import devconnect from "../images/Shop.png";
import exploreoutdoors from "../images/Rome.jpg";
import techblog from "../images/tech-blog.png";
import biweekly from "../images/search-engine-optimization.jpg";
import budget from "../images/budget.png";
import telegram from "../images/telegram.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";
const Portfolio = () => {
  //devConnect
  const openPopupboxDevConnect = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={devconnect}
          alt="Dev Connect Project"
        />
        <p> Lorem Ipsum</p>
        <b>GitHub:</b>
        <a
          className="hyper-link"
          onClick={() => window.open("https://github.com/Irina256/dev-connect")}
        >
          https://github.com/Irina256/dev-connect
        </a>
        <br />
        <b>Deployed site </b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open(" https://dev-connect-ac.herokuapp.com/login")
          }
        >
          https://dev-connect-ac.herokuapp.com/login{" "}
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };
  const popupboxConfigDevConnect = {
    titleBar: {
      enable: true,
      text: "Dev Connect Project",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  //exploreoutdoors
  const openPopupboxexploreoutdoors = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={exploreoutdoors}
          alt="Explore Outdoors"
        />
        <p> Lorem Ipsum</p>
        <b>GitHub:</b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://github.com/Irina256/Explore-Outdoors")
          }
        >
          https://github.com/Irina256/Explore-Outdoors
        </a>
        <br />
        <b>Deployed site</b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open(" https://ajcuddeback.github.io/Explore-Outdoors/")
          }
        >
          https://ajcuddeback.github.io/Explore-Outdoors/
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };
  const popupboxConfigexploreoutdoors = {
    titleBar: {
      enable: true,
      text: "Explore Outdoors Project",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  //techblog
  const openPopupboxtechblog = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={techblog}
          alt="Tech Blog"
        />
        <p> Lorem Ipsum</p>
        <b>GitHub:</b>
        <a
          className="hyper-link"
          onClick={() => window.open("https://github.com/Irina256/Tech-blog")}
        >
          https://github.com/Irina256/Tech-blog
        </a>
        <br />
        <b>Deployed site:</b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open(" https://limitless-gorge-94169.herokuapp.com/")
          }
        >
          https://limitless-gorge-94169.herokuapp.com/
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };
  const popupboxConfigtechblog = {
    titleBar: {
      enable: true,
      text: "Tech Blog Project",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  //biweekly
  const openPopupboxbiweekly = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={biweekly}
          alt="biweekly"
        />
        <p> Lorem Ipsum</p>
        <b>GitHub:</b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://github.com/Irina256/Work-Day-Scheduler")
          }
        >
          https://github.com/Irina256/Work-Day-Scheduler
        </a>
        <br />
        <b>Deployed site</b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://irina256.github.io/Work-Day-Scheduler/")
          }
        >
          https://irina256.github.io/Work-Day-Scheduler/
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };
  const popupboxConfigbiweekly = {
    titleBar: {
      enable: true,
      text: "Work Day Scheduler Project",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };
  //budget
  const openPopupboxbudget = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={budget} alt="budget" />
        <p> Lorem Ipsum</p>
        <b>GitHub:</b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://github.com/Irina256/budget-tracker")
          }
        >
          https://github.com/Irina256/budget-tracker
        </a>
        <br />
        <b>Deployed site</b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://damp-hamlet-23141.herokuapp.com/")
          }
        >
          https://damp-hamlet-23141.herokuapp.com/
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };
  const popupboxConfigbudget = {
    titleBar: {
      enable: true,
      text: "Budget Project",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };
  //telegram
  const openPopupboxtelegram = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={telegram}
          alt="telegram"
        />
        <p> Lorem Ipsum</p>
        <b>GitHub:</b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://github.com/Irina256/urban-octo-telegram")
          }
        >
          https://github.com/Irina256/urban-octo-telegram
        </a>
        <br />
        <b>Deployed site:</b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open(" https://irina256.github.io/urban-octo-telegram/")
          }
        >
          https://irina256.github.io/urban-octo-telegram/
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };
  const popupboxConfigtelegram = {
    titleBar: {
      enable: true,
      text: "Telegram Project",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };
  //devconnect2
  const openPopupboxdevconnect2 = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={devconnect2}
          alt="Explore Outdoors"
        />
        <p> Lorem Ipsum</p>
        <b>GitHub:</b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://github.com/Irina256/dev-connect-v2")
          }
        >
          https://github.com/Irina256/dev-connect-v2
        </a>

        <b>Deployed App:</b>
        <a
          className="hyper-link"
          onClick={() => window.open(" https://dev-connect-v2.herokuapp.com")}
        >
          https://dev-connect-v2.herokuapp.com
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };
  const popupboxConfigdevconnect2 = {
    titleBar: {
      enable: true,
      text: "Dev-Connect",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">portfolio</h1>
        <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box" onClick={openPopupboxDevConnect}>
            <img
              className="portfolio-image"
              src={devconnect}
              alt="Dev Connect.."
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>

          <div
            className="portfolio-image-box"
            onClick={openPopupboxexploreoutdoors}
          >
            <img
              className="portfolio-image"
              src={exploreoutdoors}
              alt="Explore Outdoors.."
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>

          <div className="portfolio-image-box" onClick={openPopupboxtechblog}>
            <img className="portfolio-image" src={techblog} alt="Tech Blog.." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          <div className="portfolio-image-box" onClick={openPopupboxbiweekly}>
            <img className="portfolio-image" src={biweekly} alt="BiWeekly.." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          <div className="portfolio-image-box" onClick={openPopupboxbudget}>
            <img className="portfolio-image" src={budget} alt="Budget.." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          <div className="portfolio-image-box" onClick={openPopupboxtelegram}>
            <img className="portfolio-image" src={telegram} alt="Telegram.." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          <div
            className="portfolio-image-box"
            onClick={openPopupboxdevconnect2}
          >
            <img
              className="portfolio-image"
              src={devconnect2}
              alt="Telegram.."
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigDevConnect} />
      <PopupboxContainer {...popupboxConfigtelegram} />
      <PopupboxContainer {...popupboxConfigbudget} />
      <PopupboxContainer {...popupboxConfigbiweekly} />
      <PopupboxContainer {...popupboxConfigtechblog} />
      <PopupboxContainer {...popupboxConfigexploreoutdoors} />
      <PopupboxContainer {...popupboxConfigdevconnect2} />
    </div>
  );
};

export default Portfolio;
