import React from "react";

const Experience = () => {
  return (
    <div className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>experience</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Front End Development Skills </h3>
            <p>HTML/CSS/Javascript/jQuery/Bootstrap/React.js/Moment</p>
          </div>
        </div>

        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Back End Development Skills </h3>
            <p>
              Node/Express/Stripe/Insomnia/Postman/MySQL/SQLite3/Sequelize/MongoDB/bcrypt
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
