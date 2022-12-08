//LOGIN GOOGLE
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
var authGoogleButton = document.getElementById('authGoogleButton');
authGoogleButton.addEventListener('click', function () {
    auth.signInWithPopup(provider);
})
auth.onAuthStateChanged((val) => {
    if (val) {
        window.location.href="welcome.html"
    }
});





