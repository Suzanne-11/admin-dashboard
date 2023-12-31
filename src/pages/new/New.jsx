import React, { useEffect, useState } from 'react';
import './new.scss';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db, storage } from "../../firebase";
import {addDoc, collection, doc, serverTimestamp, setDoc} from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

{/* For adding a new user and a new product

users/new ; products/new
*/}

const New = ({inputs,title}) => {

  const [file, setFile] = useState("");
  const [data, setData] = useState({});
  const [per, setPerc] = useState(null);
  const navigate = useNavigate()

  useEffect(()=>{
    const uploadFile = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setPerc(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev) => ({ ...prev, img: downloadURL }));
          });
        }
      );
    };
    file && uploadFile();
    
  },[file])

  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setData({...data, [id]:value});
  };

  console.log(data);
 
  const handleAdd = async (e) => {
    e.preventDefault();
     
    try {
      const res = await createUserWithEmailAndPassword(auth, data.email, data.password);
      await setDoc(doc(db, "users", res.user.uid), {
        ...data,
        timeStamp: serverTimestamp(),
      });
      navigate(-1);
    } catch (err) {
      console.log(err);
    } 
  };

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
            <form onSubmit={handleAdd}>
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
                  <input type={input.type} id={input.id} placeholder={input.placeholder} onChange={handleInput} />
                </div>
              ))}          

              <button disabled={per !== null && per<100} type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New