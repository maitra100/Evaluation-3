import React from 'react';
import './card.css';
import { PropTypes } from 'prop-types';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import smallStar from '../../assets/Images/smallStar.png';
import bigStar from '../../assets/Images/bigStar.png';
import axios from 'axios';

// import { useState } from 'react';

function Card({ id, name, description, venue, datetime, areSeatsAvailable, imgUrl, isBookmarked }) {
  const [bookmark, setBookMark] = useState(isBookmarked);

  //   const [register, setRegister] = useState(isRegistered);
  const navigate = useNavigate();
  function navigateTo() {
    navigate(`/event/${id}`);
  }

  async function bookMarkIt() {
    setBookMark(!bookmark);
    await axios.patch(`/api/events/${id}`, { isBookmarked: bookmark });
  }

  return (
    <div id="card">
      <div>
        <img id="img1" onClick={navigateTo} src={imgUrl} from alt="cover_image" width="300px" height="250px" />
      </div>
      <div id="name" onClick={navigateTo}>
        <p>{name}</p>
      </div>
      <div id="desc" onClick={navigateTo}>
        <p>{description}</p>
      </div>
      <div id="venue" onClick={navigateTo}>
        <p>{`VENUE: ${venue}`}</p>
      </div>
      <div id="datetime">
        <p>{`DATE: ${datetime}`}</p>
      </div>
      <div id="areSeatsAvailable">{areSeatsAvailable}</div>
      <div id="icons">
        <div id="reg">
          <div className="icon">
            <i className="fa-regular fa-bookmark"></i>
          </div>
          <p>Register</p>
        </div>
        <div className="icon" onClick={bookMarkIt}>
          <img src={bookmark ? bigStar : smallStar} alt="bookmark" height="25px" width="25px" />
        </div>
      </div>
    </div>
  );
}

// { key, name, description, venue, datetime, areSeatsAvailable }
Card.propTypes = {
  key: PropTypes.number,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.number.isRequired,
  venue: PropTypes.string.isRequired,
  datetime: PropTypes.instanceOf(Date).isRequired,
  areSeatsAvailable: PropTypes.bool.isRequired,
  imgUrl: PropTypes.string.isRequired,
  isBookmarked: PropTypes.bool.isRequired,
};

export default Card;
