import React from 'react';
import './card.css';
import { PropTypes } from 'prop-types';

function Card({ key, name, description, venue, datetime, areSeatsAvailable }) {
  return <div>{console.log(key, name, description, venue, datetime, areSeatsAvailable)}</div>;
}

Card.propTypes = {
  key: PropTypes.number,
  name: PropTypes.string.isRequired,
  description: PropTypes.number.isRequired,
  venue: PropTypes.string.isRequired,
  datetime: PropTypes.instanceOf(Date).isRequired,
  areSeatsAvailable: PropTypes.bool.isRequired,
};

export default Card;
