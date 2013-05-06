/*
    Numbero.js - http://github.com/felquis/numbero
    @felquis Do this shit better.
*/
(function () {
    Numeros = {
    // 1
    '0' : {
            '0' : 'zero',
            '1' : 'um',
            '2' : 'dois',
            '3' : 'três',
            '4' : 'quatro',
            '5' : 'cinco',
            '6' : 'seis',
            '7' : 'sete',
            '8' : 'oito',
            '9' : 'nove'
        },
    // 2
    '1' : {
        '1' : {
            '1' : 'onze',
            '2' : 'doze',
            '3' : 'treze',
            '4' : 'quatorze',
            '5' : 'quinze',
            '6' : 'dezesseis',
            '7' : 'dezessete',
            '8' : 'dezoito',
            '9' : 'dezenove'
            },
        '2' : 'vinte',
        '3' : 'trinta',
        '4' : 'quarenta',
        '5' : 'cinquenta',
        '6' : 'sessenta',
        '7' : 'setenta',
        '8' : 'oitenta',
        '9' : 'noventa'
        },
    // 3
    '2' : {
        '1' : 'cento',
        '2' : 'duzentos',
        '3' : 'trezentos',
        '4' : 'quatrocentos',
        '5' : 'quinhentos',
        '6' : 'seiscentos',
        '7' : 'setecentos',
        '8' : 'oitocentos',
        '9' : 'novecentos'
        },
    // 4
    '3' : {
        '1' : 'mil',
        '2' : 'dois mil',
        '3' : 'três mil',
        '4' : 'quatro mil',
        '5' : 'cinco mil',
        '6' : 'seis mil',
        '7' : 'sete mil',
        '8' : 'oito mil',
        '9' : 'nove mil'
        }
    }

    var Numero = function (numero) {

        var numero = parseFloat(numero).toString();

        // Verifica se não é um número
        if (numero === 'NaN') {
            console.log('Shit :/ Esta funcionalidade ainda não foi implementada.');

            return false;
        }

        // Numero em versão array invertida
        var numeroArray = numero.split('').reverse(),

        // Para armazenar o resultado
        result = [],

        // Salva o número por extenso dentro do loop
        numeroExtenso = '';

        // Pegamos cada número para pegar o valor dele no objeto Numeros
        for(var i = 0; i < numero.length; i++) {
            numeroExtenso = Numeros[i][numeroArray[i]];
            result.push(numeroExtenso);
        }

        // Retorna o número por extenso
        return result.reverse().join(' ');
    }

    window.Numbero = Numero;
}());