import React from "react";
import PropTypes from "prop-types";
import CurrentDay from "../CurrentDay";
import CurrentDayDescription from "../CurrentDayDescription";
import UpcomingDaysForecast from "../UpcomingDaysForecast";
import "./forecast.styles.css";
const Forecast = ({ forecast }) => {
  return (
    <div className="container boxi">
      <div className="myRow">
        <div className="myCol">
          <div className="myCard">
            <CurrentDay {...forecast.currentDay} />
          </div>
        </div>
        <div className="myCol2">
          <CurrentDayDescription forecast={forecast.currentDayDetails} />
          <UpcomingDaysForecast days={forecast.upcomingDays} />
        </div>
      </div>
    </div>
  );
};
Forecast.propTypes = {
  forecast: PropTypes.shape({
    currentDay: PropTypes.object,
    currentDayDetails: PropTypes.array,
    upcomingDays: PropTypes.array,
  }),
};
export default Forecast;
