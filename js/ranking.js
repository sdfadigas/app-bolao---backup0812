
const containerRanking = document.querySelector('.containerRanking');
const texto = "clique aqui";
const ancora = "meuspalpites.html";
containerRanking.innerHTML = "Você ainda não palpitou" + texto.link(ancora) + "  para inserir seus palpites"

const banco = firebase.firestore();
const user = localStorage.getItem("emailUser");
const palpites = banco.collection('palpites').doc(user)
const resultadosTest = banco.collection('resultadosTest').doc("teste")



let palpitesArray = [];
let resultadosArray = [];
palpites.get().then((doc) => {
  if (doc.exists) {
    palpitesArray = Object.assign(doc.data())
    console.log(palpitesArray)
  }
}).then(() => {
  resultadosTest.get().then((doc) => {
    if (doc.exists) {
     resultadosArray = Object.assign(doc.data())
     console.log(resultadosArray)
    }
  }).then(() => {
    if (palpitesArray[0] === resultadosArray[0]) {
      //alert("você acertou o resultado do jogo Catar e Equador")
    } else { console.log('errou') }
  })
}) 


