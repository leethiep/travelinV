import React, { useState } from "react";
import dalat from "../../src/image/dalat.jpg";

function FeaturePost() {
  const [posts, setpost] = useState([
    {
      id: 1,
      title: "10 Best Places To Visit In Da Lat ",
      img: "https://media.timeout.com/images/105859745/750/422/image.jpg",
    },
    {
      id: 2,
      title: "10 Best Places To Visit In Da Lat ",
      img: "https://i.pinimg.com/564x/78/78/e3/7878e3e64ecb4571802998a85048fc27.jpg",
    },
    {
      id: 3,
      title: "10 Best Places To Visit In Da Lat ",
      img: "https://media.timeout.com/images/105859745/750/422/image.jpg",
      
    },
  ]);
  return (
    <>
      {posts.map((posts) => {
        const { id, title, img } = posts;
        return (
          <a href="#" className="feature_post" key={id}>
            <h2 className="feature_post--title">{title} </h2>
            <div className="feature_post--img">
              <img  src={img} alt={title} />
            </div>
          </a>
        );
      })}
    </>
  );
}

export default FeaturePost;
