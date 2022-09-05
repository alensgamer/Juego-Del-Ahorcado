function con(weli){
    console.log(weli)
}

let palabra = ['h','o','l','a']; //se declara el array
con(palabra[1]); //imprimimos la letra que no queremos
palabra[1] = [" "]; //cambiamos el valor de la letra que no queremos


document.write(palabra.join(""));

window.addEventListener("keyup", function(actualizacion){
    //con(actualizacion)
    
})








window.addEventListener("keydown",function (tecla){
    con(tecla.key)
    let precionada = tecla.key;
    if (precionada == palabra [1]){
        palabra[1] = ["o"];
        
    }
})

/* NOTAS:
    alternator es para 0% 100% 0%

*/