const inputBox = document.getElementById("input-box");
const btnCriptografar = document.getElementById("btn-criptografar");
const btnDescriptografar = document.getElementById("btn-descriptografar");
const outputView = document.getElementById("output-view");
const btnCopiar = document.getElementById("btn-copiar");
const removeImage = document.getElementById("remove-image");

function criptografar() {
  var text = inputBox.value.toLowerCase();
  var textNoAccent = text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  
  removeImage.style.display = "none";
  
  outputView.style.display = "block";
  btnCopiar.style.display = "flex";
  outputView.style.color = "#0A3871";
  outputView.style.fontSize = "18px";
  
  var codifyText = textNoAccent.replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/e/g, "enter")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
    
    outputView.innerHTML = codifyText;
    
    if (inputBox.value == "") {
      btnCopiar.style.display = "none";
      outputView.style.display = "none";
      removeImage.style.display = "flex";
    }
}

function descriptografar() {
  var text = inputBox.value.toLowerCase();
  removeImage.style.display = "none";
  
  outputView.style.display = "block";
  outputView.style.color = "#0A3871";
  outputView.style.fontSize = "18px";
  
  var decodifyText = text.replace(/enter/g, "")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/enter/g, "e")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
    
    outputView.innerHTML = decodifyText;
    
    if (inputBox.value == "") {
      btnCopiar.style.display = "none";
      outputView.style.display = "none";
      removeImage.style.display = "block";
    }
}

function copyText() {
  outputView.select();
  document.execCommand("copy");
}