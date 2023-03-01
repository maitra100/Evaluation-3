import React, { useState } from 'react';
import './body.css';
import { useEffect } from 'react';
import axios from 'axios';
import Card from '../Card';
import pic from '../../assets/Images/search.png';
import drop from '../../assets/Images/drop.png';
import up from '../../assets/Images/up.png';

function Body() {
  const [items, setItems] = useState(undefined);
  const [allItems, setAllItems] = useState(undefined);
  const [value, setValue] = useState('');
  const [photo, setPhoto] = useState(true);

  function changePic() {
    setPhoto(!photo);
  }

  function seeEvent(event) {
    console.group(event.target.value);
    setValue(event.target.value);
    console.log(value);
    const lists = items.filter(item => {
      return item.name.includes(value);
    });
    setAllItems(lists);
    console.log(lists);
    console.log(allItems);
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
            <p>
              <bold>Filter</bold>
            </p>
            <div className="search">
              <img src={photo ? drop : up} onClick={changePic} alt="drop" width="25px" height="25px" />
            </div>
          </div>
          <div id="right">
            <input type="text" placeholder="EVENT NAME" onChange={seeEvent} value={value} />
            <div className="search">
              <img src={pic} alt="pic" width="25px" height="25px" />
            </div>
          </div>
        </div>
        {/* {photo ? (
          <div>
            <div id="second">
              <input type="radio" id="html" name="fav_language" value="ALL" />
              <input type="radio" id="html" name="fav_language" value="BOOKMARKED" />
            </div>
            <div id="third">
              <input type="radio" id="html" name="fav_language" value="REGISTERED" />
              <input type="radio" id="html" name="fav_language" value="SEAT AVAILABLE" />
            </div>
          </div>
        ) : (
          <p></p>
        )} */}
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
