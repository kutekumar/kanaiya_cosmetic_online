import React from "react";

import StarIcon from "@material-ui/icons/Star";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import PropTypes from "prop-types";

function Rating({ value, text, color }) {
  return (
    <div className='rating'>
      <span style={{ color }}>
        {value >= 1 ? (
          <StarIcon />
        ) : value >= 0.5 ? (
          <StarHalfIcon />
        ) : (
          <StarOutlineIcon />
        )}
      </span>
      <span style={{ color }}>
        {value >= 2 ? (
          <StarIcon />
        ) : value >= 1.5 ? (
          <StarHalfIcon />
        ) : (
          <StarOutlineIcon />
        )}
      </span>
      <span style={{ color }}>
        {value >= 3 ? (
          <StarIcon />
        ) : value >= 2.5 ? (
          <StarHalfIcon />
        ) : (
          <StarOutlineIcon />
        )}
      </span>
      <span style={{ color }}>
        {value >= 4 ? (
          <StarIcon />
        ) : value >= 3.5 ? (
          <StarHalfIcon />
        ) : (
          <StarOutlineIcon />
        )}
      </span>
      <span style={{ color }}>
        {value >= 5 ? (
          <StarIcon />
        ) : value >= 4.5 ? (
          <StarHalfIcon />
        ) : (
          <StarOutlineIcon />
        )}
      </span>
      <span>{text && text}</span>
    </div>
  );
}

Rating.defaultProps = {
  color: "#ff0080",
};

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};
export default Rating;
