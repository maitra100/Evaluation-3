import React, { useState } from 'react';
import './body.css';
import { useEffect } from 'react';
import axios from 'axios';
import Card from '../Card';

function Body() {
  const [items, setItems] = useState(undefined);
  const [allItems, setAllItems] = useState(undefined);
  const [value, setValue] = useState('');

  function seeEvent(event) {
    setValue(event.target.value);
    console.log(value);

    const lists = items.filter(item => {
      return item.name.includes(value);
    });
    setAllItems(lists);
    console.log(lists);
    console.log(allItems);
    setValue('');
  }

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/events')
      .then(data => {
        const list = data.data.sort((a, b) => a.date > b.date);
        setItems(list);
        setAllItems(list);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <div id="content">
      <div id="filter">
        <div id="first">
          <div id="left">
            <img />
            <p>Filter</p>
            <img />
          </div>
          <div id="right">
            <input type="text" placeholder="EVENT NAME" onChange={seeEvent} value={value} />
          </div>
        </div>
        <div id="second"></div>
        <div id="third"></div>
      </div>
      <div id="upper">
        {items ? (
          items.map((item, index) => {
            return (
              <Card
                key={index}
                id={item.id}
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
