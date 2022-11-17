import React,{useState} from 'react'
import dalat from "../../src/image/dalat.jpg"

function FeaturePost() {
  const [posts, setpost] = useState([
    {
      id: 1,
      title: "10 Best Places To Visit In Da Lat ",
      img : "https://i.pinimg.com/564x/db/ad/ac/dbadac8eb02af37537ae00d81965802a.jpg"
    },
    {
      id: 2,
      title: "10 Best Places To Visit In Da Lat ",
      img :"https://i.pinimg.com/564x/db/ad/ac/dbadac8eb02af37537ae00d81965802a.jpg"
    },
    {
      id: 3,
      title: "10 Best Places To Visit In Da Lat ",
      img : "https://i.pinimg.com/564x/db/ad/ac/dbadac8eb02af37537ae00d81965802a.jpg"
    },
    {
      id: 4,
      title: "10 Best Places To Visit In Da Lat ",
      img :"https://i.pinimg.com/564x/db/ad/ac/dbadac8eb02af37537ae00d81965802a.jpg"
    },

  ])
  return (
    <>
    {posts.map((posts) =>{
      const {id, title, img} = posts;
      return (
        <div className="feature_post" key={id}>
          <h2 className="feature_post--title" >{title} </h2>
          <img className="feature_post--img" src={img } alt={title} />
        </div>
      )
    })}
    
    
    
    </>
  )
}

export default FeaturePost