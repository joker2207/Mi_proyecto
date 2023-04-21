const textoInput = document.getElementById("texto");
const textoEncriptado = document.getElementById("textoEncriptado");
const btnEncriptar = document.getElementById("btnEncriptar");
const btnDesencriptar = document.getElementById("btnDesencriptar");

function encriptarTexto(texto) {
  let textoEncriptado = texto;

  // Comprobamos si el texto contiene mayúsculas, caracteres especiales o acentos
  const regex = /[A-ZÁÉÍÓÚÜÑ.,:;()¿¡'"!@#$%^&*_+=\-\[\]{}\\|<>\/?]/;
  if (regex.test(texto)) {
    alert("El texto no puede contener mayúsculas, caracteres especiales o acentos");
    return; // Agregamos return para detener la ejecución de la función
  }

  textoEncriptado = textoEncriptado.replace(/e/g, "enter");
  textoEncriptado = textoEncriptado.replace(/i/g, "imes");
  textoEncriptado = textoEncriptado.replace(/a/g, "ai");
  textoEncriptado = textoEncriptado.replace(/o/g, "ober");
  textoEncriptado = textoEncriptado.replace(/u/g, "ufat");

  document.getElementById("texto").value = ""; // Limpia el textarea de texto
  document.getElementById("textoEncriptado").value = ""; // Limpia el textarea de texto encriptado

  ocultarImagenes();
  return textoEncriptado;
}


function desencriptarTexto(textoEncriptado) {
  var textoDesencriptado = textoEncriptado.replace(/ufat/g, "u").replace(/ober/g, "o").replace(/ai/g, "a").replace(/imes/g, "i").replace(/enter/g, "e");
  return textoDesencriptado;
}

function copiarTexto() {
  var textoEncriptado = document.getElementById("textoEncriptado");
  textoEncriptado.select();
  document.execCommand("copy");
  alert("Texto copiado al portapapeles");
  document.getElementById("textoEncriptado").value = ""; // Limpia el textarea de texto encriptado
}

function ocultarImagenes() {
  var textoEncriptado = document.getElementById("textoEncriptado").value.trim();
  var caracteresEspeciales = /[^\w\s]/gi;
  var letrasMayusculas = /[A-Z]/g;

  if (textoEncriptado === "") {
    return;
  } else if (caracteresEspeciales.test(textoEncriptado) || letrasMayusculas.test(textoEncriptado)) {
    alert("El texto no debe contener caracteres especiales ni letras mayúsculas");
    return;
  }

  // Si no se cumplen las condiciones anteriores, entonces oculta las imágenes y muestra el textarea
  document.getElementById("imagenes").style.display = "none"; // Oculta el div de imágenes
  document.getElementById("textoEncriptado").style.display = "block"; // Muestra el textarea
  document.getElementById("btnEncriptar").style.display = "block"; // Oculta el botón de "Encriptar"
  document.getElementById("btnDesencriptar").style.display = "block"; // Muestra el botón de "Desencriptar"
  document.getElementById("btnCopiar").style.display = "block"; // Muestra el botón de "Copiar"
}


// Asignar valor al textarea de texto encriptado al cargar la página
document.addEventListener("DOMContentLoaded", function () {
  var textoEncriptado = obtenerTextoEncriptado();
  document.getElementById("textoEncriptado").value = textoEncriptado;
});

// Evento al hacer clic en el botón de encriptar
document.getElementById("btnEncriptar").addEventListener("click", function () {
  var texto = document.getElementById("texto").value;

  // Verificar si el texto cumple con los requisitos
  const regex = /[A-ZÁÉÍÓÚÜÑ.,:;()¿¡'"!@#$%^&*_+=\-\[\]{}\\|<>\/?]/;
  if (regex.test(texto)) {
    alert("El texto no puede contener mayúsculas, caracteres especiales o acentos");
    return;
  }

  var textoEncriptado = encriptarTexto(texto);
  document.getElementById("textoEncriptado").value = textoEncriptado;
  ocultarImagenes();
});


// Evento al hacer clic en el botón de desencriptar
document.getElementById("btnDesencriptar").addEventListener("click", function () {
  var textoEncriptado = document.getElementById("texto").value;
  var textoDesencriptado = desencriptarTexto(textoEncriptado);
  document.getElementById("textoEncriptado").value = textoDesencriptado;
  document.getElementById("texto").value = '';
});