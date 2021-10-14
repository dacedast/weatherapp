import React from "react";
import PropTypes from "prop-types";

import UpcomingDaysForecastItem from "../UpcomingDaysForecastItem";

import "./udf.styles.css";

const UpcomingDaysForecast = ({ days }) => (
  <ul className=" d-flex justify-content-between p-0 weeklist">
    {days.map((day) => (
      <UpcomingDaysForecastItem {...day} key={day.weekday} />
    ))}
  </ul>
);

UpcomingDaysForecast.propTypes = {
  days: PropTypes.array.isRequired,
};

export default UpcomingDaysForecast;
