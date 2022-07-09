import {initializeApp} from "firebase/app";
import { getDatabase,ref,child,get } from "firebase/database";


const firebaseConfig = {
  databaseURL: "https://protfolio-54c86-default-rtdb.firebaseio.com",
  
};

// Initialize Firebase
const app=initializeApp(firebaseConfig);


const dbRef = ref(getDatabase());
const fetchdata=()=>{
  get(child(dbRef,'projects')).then((snapshot) => {
    if (snapshot.exists()) {
     console.log(snapshot.val()); 

    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  }); 
}
 export default fetchdata;