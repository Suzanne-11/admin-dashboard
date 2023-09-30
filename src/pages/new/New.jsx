import React, { useState } from 'react';
import './new.scss';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";


{/* For adding a new user and a new product

users/new ; products/new
*/}

const New = ({inputs,title}) => {

  const [file, setFile] = useState("");

  return (
    <div className='new'>
      <Sidebar />
      <div className="new-container">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              } alt="Profile Pic"/>
          </div>
          <div className="right">
            <form>
            <div className="form-input">
                <label htmlFor='file'>
                  Upload Image: <DriveFolderUploadOutlinedIcon className='icon' />
                </label>
                <input type="file" id="file" 
                onChange={(e)=>setFile(e.target.files[0])}
                style={{display: "none"}}/>
              </div>

              {inputs.map((input)=>(
                <div className="form-input" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder}/>
                </div>
              ))}
              

              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New