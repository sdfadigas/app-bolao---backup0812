
const banco = firebase.firestore();
const user = localStorage.getItem("emailUser");
const palpites = banco.collection('palpites').doc(user)
const resultadosTest = banco.collection('resultadosTest').doc("teste")



const palpitesArray = [];
const resultadosArray = [];

palpites.get().then((doc) => {
  if (doc.exists) {
    console.log('beleza')
    palpitesArray.push(doc.data().palpites)
  }
}).then((doc) => {
  resultadosTest.get().then((doc) => {
    if (doc.exists) {
      console.log("ok");
      resultadosArray.push(doc.data().resultadosTest)
    }
  }).then((doc) => {
    if (palpitesArray[0] === resultadosArray[0]) {
      console.log("okbeleo")
    } else { console.log('errou') }
  })
})


