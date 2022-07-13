import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/database'

  const firebaseConfig = {
    apiKey: "AIzaSyA9GPJJ2vGVcbvTzk_OYz6m-mi9yjw86cA",
    authDomain: "advertisementportal11.firebaseapp.com",
    projectId: "advertisementportal11",
    storageBucket: "advertisementportal11.appspot.com",
    messagingSenderId: "198134710757",
    appId: "1:198134710757:web:9cce898899959645252f0c",
    measurementId: "G-L5GXLSX5F2"
   
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  const storage = firebase.storage();

  export {
      storage,
      firebase as default
  }
