import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyA5m1G1ABwKmyrMo5NTq6TqZUEtkd_2NOk",
  authDomain: "mini-6efdc.firebaseapp.com",
  projectId: "mini-6efdc",
  storageBucket: "mini-6efdc.appspot.com",
  messagingSenderId: "656859956953",
  appId: "1:656859956953:web:576d93bd572b54d08220c8"
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;