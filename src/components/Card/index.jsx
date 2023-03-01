import React from 'react';
import './card.css';
import { PropTypes } from 'prop-types';
// import { useState } from 'react';

function Card({ name, description, venue, datetime, areSeatsAvailable, imgUrl }) {
  //   const [bookmark, setBookMark] = useState(isBookmarked);
  //   const [register, setRegister] = useState(isRegistered);
  return (
    <div id="card">
      <div>
        <img id="img1" src={imgUrl} from alt="cover_image" width="300px" height="250px" />
      </div>
      <div id="name">
        <p>{name}</p>
      </div>
      <div id="desc">
        <p>{description}</p>
      </div>
      <div id="venue">
        <p>{`VENUE: ${venue}`}</p>
      </div>
      <div id="datetime">
        <p>{`DATE: ${datetime}`}</p>
      </div>
      <div id="areSeatsAvailable">{areSeatsAvailable}</div>
      <div id="icons">
        <div id="reg">
          <div className="icon">
            <i className="fa-solid fa-bookmark"></i>
          </div>
          <p>Register</p>
        </div>
        <div className="icon">
          <i className="fa-solid fa-bookmark"></i>
        </div>
      </div>
    </div>
  );
}

// { key, name, description, venue, datetime, areSeatsAvailable }
Card.propTypes = {
  key: PropTypes.number,
  name: PropTypes.string.isRequired,
  description: PropTypes.number.isRequired,
  venue: PropTypes.string.isRequired,
  datetime: PropTypes.instanceOf(Date).isRequired,
  areSeatsAvailable: PropTypes.bool.isRequired,
  imgUrl: PropTypes.string.isRequired,
};

export default Card;
