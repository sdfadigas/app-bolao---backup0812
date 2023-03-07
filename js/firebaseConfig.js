//Este é um código em JavaScript que define um objeto chamado firebaseConfig que contém as configurações necessárias para conectar o aplicativo à plataforma Firebase do Google. O objeto firebaseConfig possui várias propriedades que fornecem informações de configuração, como a chave da API, o nome de domínio de autenticação, o ID do projeto, o armazenamento em bucket, o ID do remetente de mensagens e o ID do aplicativo.
const firebaseConfig = {
    apiKey: "AIzaSyDtAv9R6czPxg4HLX2qhsI7EqaxNVA9DL0",
    authDomain: "bolao-app-1b7a3.firebaseapp.com",
    projectId: "bolao-app-1b7a3",
    storageBucket: "bolao-app-1b7a3.appspot.com",
    messagingSenderId: "489238253823",
    appId: "1:489238253823:web:d82c6945809f76a02b3cca"
};

firebase.initializeApp(firebaseConfig);