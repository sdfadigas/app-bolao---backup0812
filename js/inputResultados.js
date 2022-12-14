const banco = firebase.firestore();
window.onload = function(){
banco.collection('resultadosTest').doc("teste").set({
      resultadoA1:0,
      resultadoA2:2,
      resultadoB1:6,
      resultadoB2:2,
      resultadoC1:0,
      resultadoC2:2
    })}
