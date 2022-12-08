const firebaseConfig = {
    apiKey: "AIzaSyDtAv9R6czPxg4HLX2qhsI7EqaxNVA9DL0",
    authDomain: "bolao-app-1b7a3.firebaseapp.com",
    projectId: "bolao-app-1b7a3",
    storageBucket: "bolao-app-1b7a3.appspot.com",
    messagingSenderId: "489238253823",
    appId: "1:489238253823:web:d82c6945809f76a02b3cca"
};

firebase.initializeApp(firebaseConfig);
//LOGIN GOOGLE
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
setTimeout(function () {
    auth.signInWithPopup(provider);
}, 3000)
auth.onAuthStateChanged((val) => {
    if (val) {
        alert("logado");
    }
});

/*var authGoogleButton = document.getElementById('authGoogleButton');
authGoogleButton.addEventListener('click', function () {
    firebase.auth()
    .signInWithPopup(provider)
    
});*/



