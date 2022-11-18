import { useState } from "react";
import React from "react";
import { HiChevronRight } from "react-icons/hi";
import { HiChevronLeft } from "react-icons/hi";

const slideImages = [
    {
      url: 'https://www.sbb.ch/content/dam/internet/sharedimages/objekte/Swiss-Bankers-Travel.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg',
      caption: 'Slide 1'
    },
    {
      url: 'https://v-biz.vn/static/media/Travel.ff88c854.jpg',
      caption: 'Slide 2'
    },
    {
      url: 'https://e4life.vn/wp-content/uploads/2021/09/tu-vung-ielts-chu-de-travel.png',
      caption: 'Slide 3'
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbK9ZHYnPY39soqR7NBQjuvykQwq2JSy1RuA&usqp=CAU',
      caption:'slide 4'
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
            {slideImages.map((slideImage, index) =>(
                <div key={index}>
                  {index === currentSlide && (
                      <img className="slider-img" src={slideImage.url} ></img>)}
                  </div>
            )
            )}
        </div>
    );
}
export default Slider