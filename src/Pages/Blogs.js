
import React from 'react';
import "../App.css"
import "../Blogs.css"
import SliderBlogs from "../components/SliderBlogs";
import Goto from "../components/Goto"
const content = [{
  title: "How to plan the trip: 7 Easy tips for your next adventure",
  image: "https://e4life.vn/wp-content/uploads/2021/09/tu-vung-ielts-chu-de-travel.png"
},
{
  title: "How to plan the trip: 7 Easy tips for your next adventure",
  image: "https://e4life.vn/wp-content/uploads/2021/09/tu-vung-ielts-chu-de-travel.png"
}
]
export default function App() {

  return ( 
  <div>
    <div class=" h1-container">
      <h1>Travel Tips</h1>
    </div>
    <div class="goto-container">
    <ul>
    <span>
      Go to: 
    </span>
    <Goto/>
    </ul>
  </div>
  <div class=" featured-container">  
    <h2>Featured Posts</h2>
      <div class="image-ctn" >
        <img src="https://e4life.vn/wp-content/uploads/2021/09/tu-vung-ielts-chu-de-travel.png"alt="image not found"></img>
      </div>
      <div class="image-ctn2" >
        <img src="https://e4life.vn/wp-content/uploads/2021/09/tu-vung-ielts-chu-de-travel.png" alt="image not found"></img>
      </div>
    </div>
    <div class="div-featured-post1">
      <p className="post-name2" >Best Travel Insurances in 2022</p>
    </div>
    <div class="div-featured-post2">
      <p className="post-name2" >Best Travel Insurances in 2022</p>
    </div>
  <div class="recent">
  <h2>Recent Posts</h2>
  <ul class="">
    <li class="img-div1" >
    <img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtxWxmiFknNsoaXvL5sRy-EnLFUeCAla80pw&usqp=CAU" class="recent-img" alt=""></img>
    </li>
    <li class="img-div1">
    <img class="recent-img" src="https://imageio.forbes.com/specials-images/imageserve/62f2863deb9b0c0cd1fe6374/fall-travel-cheaper/0x0.jpg?format=jpg&width=960" alt=""></img>
    </li>
    <li class="img-div1">
    <img class="recent-img" src="https://www.sbb.ch/content/dam/internet/sharedimages/objekte/Swiss-Bankers-Travel.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg" alt=""></img>
    </li>
  </ul>
  <p>con bo kiu meo meo asasdasdhasmdgdsgdyasjdhygsjkdg</p>
  <p>con cho kiu moo moo as,jcbhfvsguidjlkx,mnbvgjhuijlk,mnbv</p>
  <p>con heo kiu cuc tac cuc tac alskhdgyujbvcfbgxdrtfuyhjlnbhgf</p>
</div>
<div class="slider-ctn">
  <div class="slider-div">
    <SliderBlogs/>
  </div>
  <div>
    <text class="txt-ctn" >Start your trip</text>
  </div>
</div>

</div> 
  )
}