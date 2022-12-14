
window.onload = function () {
var docRef = banco.collection("resultadosTest").doc("teste");

docRef.get().then((doc) => {
  if (doc.exists) {
    console.log("Document data:", doc.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
}).catch((error) => {
  console.log("Error getting document:", error);
});
}

//https://stackoverflow.com/questions/67295000/firebase-firestore-compare-data-from-2-collections