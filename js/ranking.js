
const banco = firebase.firestore();
const user = localStorage.getItem("emailUser");
const palpites = banco.collection('palpites').doc(user)
const resultadosTest = banco.collection('resultadosTest').doc("teste")



let palpitesArray = [];
let resultadosArray = [];
palpites.get().then((doc) => {
  if (doc.exists) {
    console.log(doc.data())
    palpitesArray = Object.assign(doc.data())
    console.log(palpitesArray)
  }
}).then(() => {
  resultadosTest.get().then((doc) => {
    if (doc.exists) {
    console.log(doc.data())
     resultadosArray = Object.assign (doc.data())
     console.log(resultadosArray)
    }
  }).then(() => {
    if (palpitesArray[0] === resultadosArray[0]) {
      console.log("okbeleo")
    } else { console.log('errou') }
  })
}) 


