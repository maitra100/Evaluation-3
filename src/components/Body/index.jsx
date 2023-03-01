import React, { useState } from 'react';
import './body.css';
import { useEffect } from 'react';
import axios from 'axios';
import Card from '../Card';

function Body() {
  const [items, setItems] = useState(undefined);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/events')
      .then(data => {
        setItems(data.data);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <div id="content">
      {console.log(items)}
      <div id="upper">
        {items ? (
          items.map((item, index) => {
            return (
              <Card
                key={index}
                name={item.name}
                description={item.description}
                venue={item.venue}
                datetime={item.datetime}
                timezone={item.timezone}
                areSeatsAvailable={item.areSeatsAvailable}
                imgUrl={item.imgUrl}
                isRegistered={item.isRegistered}
                isBookmarked={item.isBookmarked}
              />
            );
          })
        ) : (
          <p>Loading</p>
        )}
      </div>
    </div>
  );
}

export default Body;

// return (
//   <Card
//     key={index}
//     // name={item.name}
//     // description={item.description}
//     // venue={item.venue}
//     // datetime={item.datetime}
//     // timezone={item.timezone}
//     // areSeatsAvailable={item.areSeatsAvailable}
//   />
// );
