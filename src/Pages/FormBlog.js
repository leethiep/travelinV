import React from "react";
import "../formBlog.css";
import { useState, useRef, useMemo } from "react";
import { HiChevronRight } from "react-icons/hi";
import { BsFileImage } from "react-icons/bs";
import { BiPlus } from "react-icons/bi";
import Header from "../components/Header";
import Input from "../components/Input";



function FormBlog() {
  const [selectedImage, setSelectedImage] = useState(null);

  const [inputList, setInputList] = useState([<Input />]);
  const onAddBtnClick = (event) => {
    setInputList(inputList.concat(<Input key={inputList.length} />));
  };
  // const handleSubmission = () => {
  //   const formData = new FormData();

  //   formData.append("File", selectedImage);

  //   fetch("https://freeimage.host/api/1/upload?key=6d207e02198a847aa98d0a2a901485a5", {
  //     method: "POST",
  //     body: formData,
  //   })
  //     .then((response) => response.json())
  //     .then((result) => {
  //       console.log("Success:", result);
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });
  // };

  // function handleSubmit(event) {
  //   event.preventDefault()
  //   const url = 'http://localhost:3000/uploadFile';
  //   const formData = new FormData();
  //   formData.append('file', file);
  //   formData.append('fileName', file.name);
  //   const config = {
  //     headers: {
  //       'content-type': 'multipart/form-data',
  //     },
  //   };
  //   axios.post(url, formData, config).then((response) => {
  //     console.log(response.data);
  //   });
  // }

  return (
    <>
      <Header />
      <div className="nav-container">
        {/* Thanh địa chỉ */}
        <a href="#">
          Home
          <HiChevronRight />
        </a>
        <a href="#">
          Blogs
          <HiChevronRight />
        </a>
        <a href="#">Create</a>
      </div>
      <h1>Create post </h1>
      {/* {inputList} */}
      {/* <form> */}
      <div className="form">
        <div className="container-image ">
          <label for="input-img" className="preview">
            <BsFileImage className="preview--icon" />

            <span>Upload your image for post here </span>
            {selectedImage && (
              <div>
                <img
                  alt="not fount"
                  width={"100%"}
                  src={URL.createObjectURL(selectedImage)}
                />
              </div>
            )}
          </label>
          <input
            type="file"
            hidden
            id="input-img"
            onChange={(event) => {
              setSelectedImage(event.target.files[0]);
            }}
          />
          <button  className="submit">
            Submit
          </button>
        </div>
        <div class="input">
          <h3>Title </h3>
          <input
            type="text"
            class="title"
            placeholder="Write the title of your blog ....."
          ></input>
          <textarea
            id="message"
            name="message"
            placeholder="Write the title of your blog ....."
          />

          <div className="description">
            {inputList}

          </div>
          <div className="addDesc">
            <h3>Add more description</h3>
          </div>
          <div>
            <button onClick={onAddBtnClick} className="add-btn">
              <BiPlus className="addDesc--icon" />
            </button>
          </div>
        </div>
        
      </div>
      
    </>
  );

  
}

export default FormBlog;
