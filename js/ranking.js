
const banco = firebase.firestore();
//const user = localStorage.getItem("emailUser");
const userName = localStorage.getItem("userName");
const palpites = banco.collection('palpites').doc(user)
const resultadosTest = banco.collection('resultadosTest').doc("teste")

palpites.get().then((doc)=>{
  if (doc.exists) {
    console.log(doc.data());
  }
})

