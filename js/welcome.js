//LOGIN GOOGLE

const banco = firebase.firestore();
const user = localStorage.getItem("emailUser")
const welcome = document.getElementById("welcome")

function myFunction() {
    console.log(localStorage.getItem("emailUser"))
    
    
    welcome.innerText = "SEJA BEM VINDA(O) " + user
  }






