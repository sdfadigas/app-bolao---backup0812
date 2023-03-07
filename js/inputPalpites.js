const palpiteA = document.querySelectorAll('.palpiteA');
const palpiteB = document.querySelectorAll('.palpiteB');
const submit = document.getElementById("submitBtn");
const banco = firebase.firestore();
//inicializa uma instância do Firestore do Firebase e a armazena em uma variável constante chamada banco. 
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
    //acessa a coleção palpites no banco de dados Firestore e adiciona um novo documento com o ID igual ao valor armazenado na variável user. O conteúdo desse documento é um objeto que contém todos os valores dos palpites armazenados nos objetos objetoPalpiteA e objetoPalpiteB. O operador spread (...) é usado para combinar os dois objetos em um único objeto antes de salvá-lo no banco de dados.
  });