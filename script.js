const textArea=  document.querySelector(".txt_area_ingresa_texto");
const mensaje= document.querySelector(".res_texto_encriptado");
const munieco= document.querySelector(".div_imagen_esperando");
const msjNoEncontrado= document.querySelector(".div_texto_munieco");
const btnCopiar = document.querySelector(".btn_copiar");


function btnEncriptar(){

    if (textArea.value == "") {
        alert("Ingresa el mensaje a encriptar")
    } else {
        const textoEncriptado = encriptar(textArea.value);
        mensaje.value = textoEncriptado;
        textArea.value = "";
        munieco.style.visibility = "hidden";
        msjNoEncontrado.style.visibility = "hidden";
        btnCopiar.style.visibility = "visible";
    }

    //console.log(textoEncriptado)
}

function encriptar(stringEncriptada){
    let matrizCodigo=[["e","enter"],["i", "imes"], ["a","ai"],["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i=0; i<matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada=stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}



function btnDesencriptar(){
    
    if (textArea.value == "") {
        alert("Ingresa el mensaje a desencriptar")
    } else {
        const textoEncriptado = desencriptar(textArea.value);
        mensaje.value = textoEncriptado;
        textArea.value = "";
        munieco.style.visibility = "hidden";
        msjNoEncontrado.style.visibility = "hidden";
        btnCopiar.style.visibility = "visible";
    }
}



function desencriptar(stringDesencriptada){
    let matrizCodigo=[["e","enter"],["i", "imes"], ["a","ai"],["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i=0; i<matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada=stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada
}

function copiar(){
    mensaje.select();
    mensaje.setSelectionRange(0, 99999) ;
    navigator.clipboard.writeText(mensaje.value);
}
