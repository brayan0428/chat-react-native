import firebase from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyCR4nRgcDPmhP_lEv9Az6aTgR4Y-qEU4Uo",
  authDomain: "chat-f9f23.firebaseapp.com",
  databaseURL: "https://chat-f9f23.firebaseio.com",
  projectId: "chat-f9f23",
  storageBucket: "chat-f9f23.appspot.com",
  messagingSenderId: "479974185551",
  appId: "1:479974185551:web:56aebe0cf7d517c897e83a"
};

export default firebase.initializeApp(firebaseConfig);