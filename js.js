//Queria ahorrarme todo el Console.log("");
function cons(weli){
    console.log(weli)
}

//Funcion para saber que tecla se ha precionado
window.addEventListener("keydown",function (tecla){
    cons(  "La tecla que precionaste fue: " +  "'" + tecla.key  + "'" + " y su keycode es: " + tecla.keyCode);
    //Cambiar de "ventanas"
    if(tecla.keyCode == 13){
        this.document.getElementById("Pantalla_Carga").style.visibility="hidden";
        this.document.getElementById("Juego").style.visibility="visible"
    }
    //Logica Palabras
    if(this.document.getElementById("Juego").style.visibility == "visible"){
        //Hacemos cambio entre guiones bajos y letras acertadas
        let arrores = 0
        for(let n=0; n<(Comprobacion.length); n++){
            Comprobacion[n].toString;
            if(tecla.key == Comprobacion[n]){
                if (array[n] == "_" ){
                    cons("acertaste, la escribo arriba")
                    array[n] = Comprobacion[n];
                    //cons(array)
                    this.document.getElementById("Palabra").textContent = array.join(" ");
                }
            }
            if(tecla.key != Comprobacion[n]){
                arrores++;
                    if(arrores == 4){//arreglar pedo de que se pone en los 2 lugares la letra
                        if(tecla.key != "Enter"){
                            texto_erro = this.document.getElementById("Erro").textContent;
                            texto_erro = texto_erro.split("");
                            if(texto_erro.indexOf(tecla.key) == -1){
                                if(array.indexOf(tecla.key) > -1){
                                    cons("ya esta presente, no la escribo abajo")
                                }else{
                                    cons("imprimo abajo")
                                    this.document.getElementById("Erro").textContent += tecla.key
                                }                                
                            }
                        }
                    }
            }
        }
    }
})


let Palabras_correctas = ["puto", "hola", "webos", "mouse","html", "r"]
let Palabra_random = Palabras_correctas[ Math.floor(Math.random()*Palabras_correctas.length)]

cons( "La palabra random es: " + Palabra_random);
let Comprobacion = Palabra_random.split("");
let array = Palabra_random.split("");
/* cons("El array termina como: " + array) */

//Nesesitaba cambiar de letras a guionesbajos
for(let n=0; n<(array.length); n++){
    array[n].toString;
    array[n] = "_";
}
document.getElementById("Palabra").textContent = array.join(" ");




