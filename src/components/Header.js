import React from 'react'
import "../App.css"; 

import { useState } from "react";
import { RiShoppingBasket2Line } from "react-icons/ri";
import { HiChevronDown } from "react-icons/hi";
import { IconContext } from "react-icons";
function Header() {
  const [str, setStr] = useState(
    "https://vivureviews.com/wp-content/uploads/2022/08/avatar-vo-danh-9.png"
  );
  console.log(str);
  return (
    <div>
      <header>
        <div id="nav">
          <a href="#">logo</a>
          <a href="#/home">Home</a>
          <a href="#/blogs">Blogs</a>
          <a href="#/shop">
            Shop
            <IconContext.Provider value={{ className: "icon_shop" }}>
              <RiShoppingBasket2Line />
            </IconContext.Provider>
          </a>
          <a href="#/shop">About us</a>
        </div>
        <ul id="nav1">
          <li className="search">
            <a href="">
              Want to go ...
              <IconContext.Provider value={{ className: "icon_chevDown" }}>
                <HiChevronDown />
              </IconContext.Provider>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="image">
                <img className="img1" src={str} alt="avatar"></img>
                <HiChevronDown />
              </div>
            </a>
            <ul className="avatar">
              {str ==
              "https://vivureviews.com/wp-content/uploads/2022/08/avatar-vo-danh-9.png" ? (
                <div>
                  <li>
                    <a href="">Login</a>
                  </li>
                  <li>
                    <a href="">Signin</a>
                  </li>
                </div>
              ) : (
                <div>
                  <li>
                    <a href="">Personal</a>
                  </li>
                  <li>
                    <a href="">Logout</a>
                  </li>
                </div>
              )}
            </ul>
          </li>
        </ul>
      </header>
      {/* <div id="img_post">
        <img className="img_title" src="./Dalat.png"></img>
        <img className="img_custom" src="./img_custom.png"></img>
      </div> */}
    </div>
  );
}

export default Header
