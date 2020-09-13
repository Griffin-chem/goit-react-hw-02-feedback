import React from "react";
import PropTypes from "prop-types";

import { Stat } from "./styledStatistic";

const Statistic = (options, total, positivePercentage) => {
  return (
    <>
      {Object.entries(options).map((option) => (
        <Stat key={option[0]}>
          {option[0]}: {option[1]}
        </Stat>
      ))}
      <Stat>Total: {total}</Stat>
      <Stat>Positive Feedback: {positivePercentage}%</Stat>
    </>
  );
};

Statistic.propTypes = {
  options: PropTypes.object.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistic;
