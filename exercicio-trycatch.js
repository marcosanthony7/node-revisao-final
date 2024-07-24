let carregando = false;
try {
    carregando = true;
    let a = 10;
    let b = 11;

    if(!b) throw Error('ERRO DE DIVISÃO POR ZERO');

    let result = a / b;

    if(result < 1) throw new Error('A DIVISÃO NÃO PODE SER MENOR QUE 1');
    
    console.log('Calculou');
    console.log(result);
} catch (error) {
    console.log('ERRO!');
    console.log(error.message);
} finally {
    carregando = false;
    console.log('SEMPRE EXECUTADO!');
}