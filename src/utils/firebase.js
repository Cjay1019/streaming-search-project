import firebase from "firebase";

var config = {
  apiKey: "AIzaSyCaarLYFJU90SSt13ajCQ2wzlJgdF36u7I",
  authDomain: "streaming-search-cfc13.firebaseapp.com",
  databaseURL: "https://streaming-search-cfc13.firebaseio.com",
  projectId: "streaming-search-cfc13",
  storageBucket: "streaming-search-cfc13.appspot.com",
  messagingSenderId: "1080536984608"
};

firebase.initializeApp(config);

export default firebase.auth();
