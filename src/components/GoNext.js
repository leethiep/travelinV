import React, { useState } from "react";
import danang from "../../src/image/danang.jpg";

function GoNext() {
  const [places, setPlace] = useState([
    {
      id: 1,
      province: "Da Nang",
      img: { danang },
    },
    {
      id: 2,
      province: "Da Nang",
      img: { danang },
    },
    {
      id: 3,
      province: "Da Nang",
      img: { danang },
    },
    {
      id: 4,
      province: "Da Nang",
      img: { danang },
    },
    {
      id: 5,
      province: "Da Nang",
      img: { danang },
    },
    {
      id: 6,
      province: "Da Nang",
      img: { danang },
    },
  ]);
  return (
    <>
      <div className="next-container">
      <div>
          <p>Where to</p>
          <h2>Next?</h2>
        </div>
        {places.map((place) => {
          const { id, province, img } = place;
          return (
            <div className="next_place" key={id}>
              <a href="#">
                <img
                  src={window.location.origin + danang}
                  alt={place.province}
                  width="50px"
                  height="50px"
                />
                <p>{province}</p>
              </a>
            </div>
          );
        })}
        

      </div>
    </>
  );
}

export default GoNext;
