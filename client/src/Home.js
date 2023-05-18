import RecomApartments from "./components/inc/recom_apartments/RecomApartments";
import { useState } from "react";
import { app as hello, storage } from "../src/config/firebaseConfig";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { v4 as uuidv4 } from 'uuid';

function Home() {



  return (
    <div className='App'>
      <div className='app_page'>
        <RecomApartments />
      </div>
    </div>
  );
}

export default Home;