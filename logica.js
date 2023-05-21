function encriptar() {
  var mensaje = document.getElementById("oracion").value.toLowerCase();
  let mensajex = "";

  for (let i = 0; i < mensaje.length; i++) {
    switch (mensaje[i]) {
      case "a":
        mensajex += "ai";
        break;
      case "e":
        mensajex += "enter";
        break;
      case "i":
        mensajex += "imes";
        break;
      case "o":
        mensajex += "ober";
        break;
      case "u":
        mensajex += "ufat";
        break;
      default:
        mensajex += mensaje[i];
    }
  }
  if (mensaje.length > 0) {
  document.getElementById("textosal").value = mensajex;
  document.getElementById("textosal").style.opacity = 1;
  document.getElementById("textosal").style.border = "none";
  document.getElementById("textosal").style.backgroundImage = "none";
  document.getElementById("copiar").style.opacity = 1;
}
}

function desencriptar() {
  var mensajeEncriptado = document.getElementById("oracion").value.toLowerCase();
  let mensajeOriginal = "";

  for (let i = 0; i < mensajeEncriptado.length; i++) {
    switch (mensajeEncriptado[i]) {
      case "a":
        if (mensajeEncriptado[i + 1] === "i") {
          mensajeOriginal += "a";
          i++;
        } else {
          mensajeOriginal += mensajeEncriptado[i];
        }
        break;
      case "e":
        if (mensajeEncriptado.substring(i, i + 5) === "enter") {
          mensajeOriginal += "e";
          i += 4;
        } else {
          mensajeOriginal += mensajeEncriptado[i];
        }
        break;
      case "i":
        if (mensajeEncriptado.substring(i, i + 4) === "imes") {
          mensajeOriginal += "i";
          i += 3;
        } else {
          mensajeOriginal += mensajeEncriptado[i];
        }
        break;
      case "o":
        if (mensajeEncriptado.substring(i, i + 4) === "ober") {
          mensajeOriginal += "o";
          i += 3;
        } else {
          mensajeOriginal += mensajeEncriptado[i];
        }
        break;
      case "u":
        if (mensajeEncriptado.substring(i, i + 4) === "ufat") {
          mensajeOriginal += "u";
          i += 3;
        } else {
          mensajeOriginal += mensajeEncriptado[i];
        }
        break;
      default:
        mensajeOriginal += mensajeEncriptado[i];
    }
  }
  
  if (mensajeOriginal.length > 0) {
    document.getElementById("textosal").value = mensajeOriginal;
    document.getElementById("textosal").style.opacity = 1;
    document.getElementById("textosal").style.border = "none";
    document.getElementById("textosal").style.backgroundImage = "none";
    document.getElementById("copiar").style.opacity = 1;
  }
}


function copiarTexto() {
  const textArea = document.getElementById("textosal");
  textArea.select();
  document.execCommand("copy");
}