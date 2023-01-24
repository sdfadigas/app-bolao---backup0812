const palpiteA = document.querySelectorAll('.palpiteA');
const palpiteB = document.querySelectorAll('.palpiteB');

//copiar e colar essas const de cima e mudar o nome pra #palpiteD1, #palpiteD2 e assim sucessivamente até completar 108 linhas
const submit = document.getElementById("submitBtn");
const banco = firebase.firestore();
const user = localStorage.getItem("emailUser")
const title = document.getElementById("title")
const subtitle = document.getElementById("subtitle")
const form = document.querySelectorAll('input[type=number]')

  submit.addEventListener('click', (event) => {
    event.preventDefault();
    confirm("confirmar palpites?");
 
    title.innerText = "MEUS PALPITES"
    subtitle.innerText = "confira seus palpites abaixo"
    submit.style.display = "none"

    objetoPalpiteA = {}
    objetoPalpiteB = {}
    
    palpiteA.forEach((palpite)=>{ 
      objetoPalpiteA[palpite.id] = palpite.value
    })
    palpiteB.forEach((palpite)=>{ 
      objetoPalpiteB[palpite.id] = palpite.value
    })
    console.log(objetoPalpiteA)
    console.log(objetoPalpiteB)
    banco.collection('palpites').doc(user).set({...objetoPalpiteA, ...objetoPalpiteB
     
    })
  });