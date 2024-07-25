class DivisaoPorZeroError extends Error {
    constructor(message) {
        super(message);
        this.name = 'DivisaoPorZeroError';
    }
}

class DivisaoMenorQueUmError extends Error {
    constructor(message) {
        super(message);
        this.name = 'DivisaoMenorQueUmError';
    }
}

let carregando = false;

try {
    carregando = true;
    let a = 10;
    let b = 2;

    if (b === 0) {
        throw new DivisaoPorZeroError('ERRO DE DIVISÃO POR ZERO!');
    }

    let result = a / b;

    if (result < 1) {
        throw new DivisaoMenorQueUmError('A DIVISÃO NÃO PODE SER MENOR QUE 1!');
    }

    console.log('Calculou');
    console.log(result);
} catch (error) {
    if (error instanceof DivisaoPorZeroError) {
        console.log('Erro de divisão por zero!');
        console.log(error.message);
    } else if (error instanceof DivisaoMenorQueUmError) {
        console.log('Erro de divisão menor que 1!');
        console.log(error.message);
    } else {
        console.log('Erro desconhecido:');
        console.log(error.message);
    }
} finally {
    carregando = false;
    console.log('SEMPRE EXECUTADO!');
}
