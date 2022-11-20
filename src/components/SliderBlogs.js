import { useState } from "react";
import React from "react";
import { HiChevronRight } from "react-icons/hi";
import { HiChevronLeft } from "react-icons/hi";

const slideImages = [
    {
      url: 'https://www.sbb.ch/content/dam/internet/sharedimages/objekte/Swiss-Bankers-Travel.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg',
      titile:'Sustainable Travel',
      des: 'de di da lat thi ban can nhung gi1 co con chim vanh khuyen nho sac long muot nhu to ong goi da bao vang ay the ngoan nhat nha'
    },
    {
      url: 'https://v-biz.vn/static/media/Travel.ff88c854.jpg',
      titile:'da la ne2',
      des: 'de di da lat thi ban can nhung gi2'
    },
    {
      url: 'https://e4life.vn/wp-content/uploads/2021/09/tu-vung-ielts-chu-de-travel.png',
      titile:'da la ne3',
      des: 'de di da lat thi ban can nhung gi3'
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbK9ZHYnPY39soqR7NBQjuvykQwq2JSy1RuA&usqp=CAU',
      titile:'da la ne4',
      des: 'de di da lat thi ban can nhung gi4'
    }
  ];
const Slider = () => {
const [currentSlide, setCurrentSlide] = useState(0)
    const slideLengh = slideImages.length;
    const nextSlide = () => {
      setCurrentSlide(currentSlide === slideLengh - 1 ? 0 : currentSlide + 1);
    }
    const prevSlide = () => {
      setCurrentSlide(currentSlide === 0 ? slideLengh - 1: currentSlide - 1);
    }
    return(
        <div>
          <button className=" slider-btn" id="left" onClick={prevSlide} ><HiChevronLeft/></button>
          <button className=" slider-btn" id="right" onClick={nextSlide} ><HiChevronRight/></button>
          <span className="slider-title">{slideImages[currentSlide].titile}</span>
          <span className="slider-des">{slideImages[currentSlide].des}</span>
            {slideImages.map((slideImage, index) =>(
                <div key={index}>
                  {index === currentSlide && (
                      <img className="slider-img" src={slideImage.url} ></img>)}
                  </div>
            )
            )}
          <button className="slider-button">Subtain Travel</button>
        </div>
    );
}
export default Slider