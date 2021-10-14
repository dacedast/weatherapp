import React from "react";
import PropTypes from "prop-types";

import "./currentDay.styles.css";

const CurrentDay = ({
  weekday,
  date,
  location,
  temperature,
  weatherIcon,
  weatherDescription,
}) => (
  <div className="myContainer">
    <div className="myGradient"></div>
    <div className="myCardInner">
      <div>
        <h2>{weekday}</h2>
        <p>{date}</p>
        <p className="myText">{location}</p>
      </div>
      <div>
        <img src={weatherIcon} alt="icon" className="weatherIcon" />
        <h2>{temperature}°C</h2>
        <h5>{weatherDescription}</h5>
      </div>
    </div>
  </div>
);

CurrentDay.propTypes = {
  weekday: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  weatherIcon: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
  weatherDescription: PropTypes.string.isRequired,
};

export default CurrentDay;
