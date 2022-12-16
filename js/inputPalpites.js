const palpiteA1 = document.querySelector('.palpiteA1');
const palpiteA2 = document.querySelector('.palpiteA2');
const palpiteB1 = document.querySelector('.palpiteB1');
const palpiteB2 = document.querySelector('.palpiteB2');
const palpiteC1 = document.querySelector('.palpiteC1');
const palpiteC2 = document.querySelector('.palpiteC2');
//copiar e colar essas const de cima e mudar o nome pra palpiteD1, palpiteD2 e assim sucessivamente até completar 108 linhas
const submit = document.getElementById("submitBtn");
const banco = firebase.firestore();
const user = localStorage.getItem("emailUser")


  submit.addEventListener('click', (event) => {
    event.preventDefault();
    confirm("confirmar palpites?");
    console.log(localStorage.getItem("emailUser"))
  //  window.history.back();
    banco.collection('palpites').doc(user).set({
      palpiteA1: palpiteA1.value,
      palpiteA2: palpiteA2.value,
      palpiteB1: palpiteB1.value,
      palpiteB2: palpiteB2.value,
      palpiteC1: palpiteC1.value,
      palpiteC2: palpiteC2.value,
    })
  });