// receber  uma quantidade de valores para avalia
//função exibir se cada valor é par ou impar

exibirTipo(100);
function exibirTipo(limite){

    for( let i = 0; i <= limite; i++){
        if (i % 2 === 0)
        console.log( `${i}  é Par`)
  
    else
        console.log( `${i}  é impar`)
  
}
}