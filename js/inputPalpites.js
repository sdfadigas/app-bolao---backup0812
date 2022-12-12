const palpites = document.querySelector(".palpites");
const palpiteA = document.querySelector('[name="palpiteA"]');
const palpiteB = document.querySelector('[name="palpiteB"]');
const submit = document.getElementById("submitBtn");
const banco = firebase.firestore();
submit.addEventListener('click', () => {
    
    banco.collection('palpites').doc().set({
        palpiteA: palpiteA.value,
        palpiteB: palpiteB.value,
    }).then(()=>{
        palpites.reset();
    })

});