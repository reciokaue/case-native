import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCSulmNDiQMD6s2u7Z6FYvgpOEhEu7CWqA",
  authDomain: "casenative.firebaseapp.com",
  projectId: "casenative",
  storageBucket: "casenative.appspot.com",
  messagingSenderId: "404178955082",
  appId: "1:404178955082:web:06c2a83e4bd975fc2eefb3",
  measurementId: "G-ZDZEDCMQ5W"
};

// const firebaseConfig = {
//   apiKey: "AIzaSyCxhSshyyRjbKvRuDjfVNP0jPPBPIptMb8",
//   authDomain: "caseirinhos-e9a9b.firebaseapp.com",
//   databaseURL: "https://caseirinhos-e9a9b-default-rtdb.firebaseio.com",
//   projectId: "caseirinhos-e9a9b",
//   storageBucket: "caseirinhos-e9a9b.appspot.com",
//   messagingSenderId: "628157945423",
//   appId: "1:628157945423:web:c367e70715e5f9599fbc3a",
//   measurementId: "G-K3M8DZCWTP"
// };

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const storage = firebase.storage()
export const database = firebase.database()
