// setting up firebase with our website

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDwzJryreh4sj_RAM3lzpEJKAT1GtAbJdY",
  authDomain: "auth-form-af374.firebaseapp.com",
  projectId: "auth-form-af374",
  storageBucket: "auth-form-af374.appspot.com",
  messagingSenderId: "430935176039",
  appId: "1:430935176039:web:065c3135738cffb7dd35c2",
  measurementId: "G-CKXCPMV18R",
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
 


// Sign up function
const signUp = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  console.log(email, password);
  // firebase code
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((result) => {
      // Signed in
      console.log(result);
      location.replace("index.html")

    })
      // ...
   
      .catch((error) => {
        document.getElementById("error").innerHTML = error.message
    });
}



// Sign In function
const signIn = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  // firebase code
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((result) => {
    //   // Signed in
    //   document.write("You are Signed In");
      console.log(result);
      location.replace("index.html")
    })
   
    .catch((error) => {
    //   console.log(error.code);
    //   console.log(error.message);
    document.getElementById("error").innerHTML = error.message

    });
};

function logout(){
  // firebase.auth().signOut()
  location.replace("signin.html")
}
