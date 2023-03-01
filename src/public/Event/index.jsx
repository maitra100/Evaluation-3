import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './event.css';

function Event() {
  const { id } = useParams();
  const [item, setItem] = useState(undefined);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/events/${id}`)
      .then(data => setItem(data.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <Header />
      {!item ? (
        <p>Loading</p>
      ) : (
        <div id="uppers">
          <div id="cards">
            <div>
              <img id="img2" src={item.imgUrl} from alt="cover_image" />
            </div>
            <div id="name">
              <p>{item.name}</p>
            </div>
            <div id="descs">
              <p>{item.description}</p>
            </div>
            <div id="venues">
              <p>{`VENUE: ${item.venue}`}</p>
            </div>
            <div id="datetimes">
              <p>{`DATE: ${item.datetime}`}</p>
            </div>
            <div id="areSeatsAvailable">{item.areSeatsAvailable}</div>
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
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Event;
