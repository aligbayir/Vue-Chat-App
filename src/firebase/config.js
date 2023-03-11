import  firebase  from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD0P_gumza3_6jV80N49KpQOV5on0TFbDk",
    authDomain: "blog-vue3-488a1.firebaseapp.com",
    projectId: "blog-vue3-488a1",
    storageBucket: "blog-vue3-488a1.appspot.com",
    messagingSenderId: "397597454370",
    appId: "1:397597454370:web:b4da5f3a6fea1c17f11a7b"
  };
  firebase.initializeApp(firebaseConfig)

  const projectAuth = firebase.auth()
  const projectFirestore = firebase.firestore()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export { projectFirestore, timestamp,projectAuth};