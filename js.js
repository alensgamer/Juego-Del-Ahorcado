function con(weli){
    console.log(weli)
}


let palabra = ['h','o','l','a'];
con(palabra[0]);
var stile = palabra[1];


document.write(palabra.join(""));



window.addEventListener("keydown",function (tecla){
    con(tecla.key)
    let precionada = tecla.key;
    if (precionada == palabra [1]){
        document.write("precionaste o")
    }
})

/* NOTAS:
    alternator es para 0% 100% 0%

*/