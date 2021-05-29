var firebaseConfig = {
  apiKey: "AIzaSyCgJP1Gba4LoTccVzViFqXgWosQ260NUM0",
  authDomain: "js-master-methods.firebaseapp.com",
  projectId: "js-master-methods",
  storageBucket: "js-master-methods.appspot.com",
  messagingSenderId: "325589840116",
  appId: "1:325589840116:web:05076dab1ec44dd5432ea1"
};
function CopyToClipboard(containerid) {
  if (document.selection) {
    var range = document.body.createTextRange();
    range.moveToElementText(document.getElementById(containerid));
    range.select().createTextRange();
    document.execCommand("copy");
  } else if (window.getSelection) {
    var range = document.createRange();
    range.selectNode(document.getElementById(containerid));
    window.getSelection().addRange(range);
    document.execCommand("copy");
    var alert = document.getElementById('copy-alert')
    alert.style.display = "block"
    setTimeout(() => {
      alert.style.display = "none"
    }, 3000)

  }
}


firebase.initializeApp(firebaseConfig);

function comment(){

  var comm=document.getElementById("comment").innerText;
  var cont=document.getElementById("contact").innerText;
  firebase.firestore().collection('data').add({
    comment:comm,
    contact:cont
  }).then(data=>{
    console.log("success")
  }).catch(err=>{
    console.log(err)
  })
}