import React from "react";
import PropTypes from "prop-types";

import { Button } from "./styledFeedback";

const Feedback = ({ options, onFeedbackLeave }) => {
  return options.map((option) => (
    <Button name={option} key={option} onClick={onFeedbackLeave}>
      {option}
    </Button>
  ));
};

Feedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onFeedbackLeave: PropTypes.func.isRequired,
};

export default Feedback;
