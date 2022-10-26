import React from "react";
import PropTypes from "prop-types";
import "./TotalCard.style.css";

const TotalCard = ({ type, totalNumber, minNumber, maxNumber }) => {
  return (
    <div className="total">
      <div className="total-type">
        <div
          className={
            type === "Total Generation"
              ? "total-type-dot primary"
              : "total-type-dot secondary"
          }
        ></div>
        <div className="total-type-name">{type}</div>
      </div>
      <div className="total-number">
        <p>{totalNumber}</p>
      </div>
      <div className="total-stat">
        <div className="total-stat-min">
          <p>MIN</p>
          <p className="red">{minNumber}</p>
        </div>
        <div className="total-stat-min">
          <p>MAX</p>
          <p className="green">{maxNumber}</p>
        </div>
      </div>
    </div>
  );
};

TotalCard.propTypes = {
  type: PropTypes.string,
  totalNumber: PropTypes.number,
  minNumber: PropTypes.number,
  maxNumber: PropTypes.number,
};

export default TotalCard;
