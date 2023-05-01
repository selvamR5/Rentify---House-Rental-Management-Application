import RecomApartments from "./components/inc/recom_apartments/RecomApartments";
import { useState } from "react";
import { app as hello, storage } from "../src/config/firebaseConfig";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { v4 as uuidv4 } from 'uuid';

function Home() {

  // State to store uploaded file
  const [file, setFile] = useState("");

  // Handle file upload event and update state
  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  const handleUpload = async () => {
    console.log('hegllo')
    let imgUrl = '';
    console.log(storage)
    const storageRef = ref(storage, `houserentalmanagement/images/${uuidv4()}`);

    uploadBytes(storageRef, file).then((snapshot) => {
      console.log('Uploaded a blob or file!');
      console.log(snapshot)
      getDownloadURL(snapshot.ref).then((url) => {
              console.log(url);
            });
    });
  }

  return (
    <div className='App'>
      <div>Hellpo</div>
      <input type="file" onChange={handleChange} accept="" />
      <button onClick={handleUpload}>Upload to Firebase</button>
      <div className='app_page'>
        <RecomApartments />
      </div>
    </div>
  );
}

export default Home;