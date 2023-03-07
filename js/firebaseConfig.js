//Este código define uma constante firebaseConfig que contém as informações de configuração necessárias para se conectar a um projeto Firebase. Em seguida, ele chama firebase.initializeApp(firebaseConfig) para inicializar o SDK do Firebase com essas informações de configuração.
const firebaseConfig = {
    apiKey: "AIzaSyDtAv9R6czPxg4HLX2qhsI7EqaxNVA9DL0",
    //chave API exclusiva que identifica o projeto Firebase;
    authDomain: "bolao-app-1b7a3.firebaseapp.com",
    //domínio que será usado para autenticar usuários do projeto;
    projectId: "bolao-app-1b7a3",
    //ID do projeto Firebase;
    storageBucket: "bolao-app-1b7a3.appspot.com",
    //o nome do bucket de armazenamento do Firebase usado pelo projeto;
    messagingSenderId: "489238253823",
    //ID do remetente usado pelo serviço de mensagens em nuvem do Firebase;
    appId: "1:489238253823:web:d82c6945809f76a02b3cca"
    //ID do aplicativo Firebase que está sendo usado.
};

firebase.initializeApp(firebaseConfig);