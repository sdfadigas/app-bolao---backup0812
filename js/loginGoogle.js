//LOGIN GOOGLE

const auth = firebase.auth();
//declara uma constante que inicializa a instância do Firebase Authentication.
const provider = new firebase.auth.GoogleAuthProvider();
//cria uma instância do provedor de autenticação do Google.
var authGoogleButton = document.getElementById('authGoogleButton');
authGoogleButton.addEventListener('click', function () {
    auth.signInWithPopup(provider);
})
//verifica se um usuário está autenticado e, se estiver, grava seu endereço de e-mail no armazenamento local e redireciona o usuário para uma página de boas-vindas.
auth.onAuthStateChanged((val) => {
    if (val) {
        console.log(auth.currentUser)
        localStorage.setItem("emailUser", auth.currentUser.email)
        window.location.href="welcome.html"
    }
});



