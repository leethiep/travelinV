import React from "react";
import "../formBlog.css";

import { BiPlus } from "react-icons/bi";

import ImageUploading from "react-images-uploading";

function Input() {
  const [images, setImages] = React.useState([]);
  const maxNumber = 2;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    if (imageList.length === 2) 
    {
  
      
      const addImgBtns = document.querySelectorAll('.add-img-btn')
      // addImgBtns.classList.add('hidden')
      console.log(addImgBtns)
      addImgBtns.forEach(addBtn => {
        addBtn.classList.add('hidden');

        
      });
     
    }
    console.log(imageList.length, addUpdateIndex);
    
    
    setImages(imageList);
    
  };

 

 
  

  return (
    <div className="App">
      <h3>Description </h3>
      <input
        type="text"
        class="title-description"
        placeholder="Write the title  of your description  ....."
      ></input>
      <textarea
        id="message"
        name="message"
        placeholder="Write the description of your blog...."
      />
      <div className="App">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
        acceptType={["jpg"]}
      >
        {({
          imageList,
          onImageUpload,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image.data_url} alt="" width="100" />
              
              </div>
            ))}
            <button className="add-img-btn"
            
              onClick={onImageUpload}
              // onClick={()=>{
              //   onImageUpload;
              //   onChange;
              // }}
           
            >
              <BiPlus className="preview_des--icon"/>
              Upload photo
            </button>
          </div>
        )}
      </ImageUploading>
    </div>
      {/* <div class="description-img">
        <label for="des-img" className="preview-des">
          
          <ImageUploading
            multiple
            value={images}
            onChange={onChange}
            maxNumber={maxNumber}
            dataURLKey="data_url"
            acceptType={["jpg"]}
          >
            {({ imageList, onImageUpload, isDragging, dragProps }) => (
              // write your building UI
              <div className="upload__image-wrapper">
                <button className="add-img-btn"
                  style={isDragging ? { color: "red" } : null}
                  onClick={onImageUpload}
                  {...dragProps}
                >
                  <BsFileImage className="preview_des--icon" />
                  Click or Drop here
                </button>
                &nbsp;
                {imageList.map((image, index) => (
                  <div key={index} className="image-item">
                    <img src={image.data_url} alt="" width="100px" />
                  </div>
                ))}
              </div>
            )}
          </ImageUploading>
        </label>
        <div className="add-img">
          <BiPlus className="preview_des--icon" />
        </div>
      </div> */}
    </div>
  );
}

export default Input;
