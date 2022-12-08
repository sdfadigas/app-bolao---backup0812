//LOGOUT
logoutBtn.addEventListener('click', function logout() {
    firebase.auth().signOut().then(function () {

            window.location.href="login.html";
    }).catch(function (error) {
        console.error(error);
    });
}) 