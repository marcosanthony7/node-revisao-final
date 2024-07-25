class DivisaoPorZeroError extends Error {
    constructor(message) {
        super(message);
        this.name = 'DivisaoPorZeroError';
    }
}

class ResultadoMenorQueUmError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ResultadoMenorQueUmError';
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
        throw new ResultadoMenorQueUmError('O RESULTADO DA DIVISÃO NÃO PODE SER MENOR QUE 1!');
    }

    console.log('CALCULOU!');
    console.log('RESULTADO:', result);
} catch (error) {
    if (error instanceof DivisaoPorZeroError || error instanceof ResultadoMenorQueUmError) {
        console.log('ERRO!');
        console.log(error.message);
    } else {
        console.log('ERRO DESCONHECIDO:', error.message);
    }
} finally {
    carregando = false;
    console.log('SEMPRE EXECUTADO!');
}
