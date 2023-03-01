import React, { useState } from 'react';
import './body.css';
import { useEffect } from 'react';
import axios from 'axios';
import Card from '../Card';

function Body() {
  const [items, setItems] = useState();

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/events')
      .then(data => {
        setItems(data.data);
        console.log(data.data);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <div id="content">
      {console.log(items)}
      <div id="upper">
        {items.map((item, index) => {
          return (
            <Card
              key={index}
              name={item.name}
              description={item.description}
              venue={item.venue}
              datetime={item.datetime}
              timezone={item.timezone}
              areSeatsAvailable={item.areSeatsAvailable}
            />
          );
        })}
      </div>
      <div id="lower"></div>
    </div>
  );
}

export default Body;
