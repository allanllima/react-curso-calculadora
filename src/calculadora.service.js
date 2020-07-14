function CalculadoraService() {

    const SOMA = '+';
    const SUBTRACAO = '-';
    const MULTIPLICACAO = '*';
    const DIVISAO = '/';

    function calcular(numero1, numero2, op) {
        let resultado;

        switch (op) {
            case SOMA:
                resultado = numero1 + numero2;
                break;
            case SUBTRACAO:
                resultado = numero1 - numero2;
                break;
            case MULTIPLICACAO:
                resultado = numero1 * numero2;
                break;
            case DIVISAO:
                resultado = numero1 / numero2;
                break;

            default:
                break;
        }

        return resultado;
    }

    return [
        calcular,
        SOMA,
        SUBTRACAO,
        MULTIPLICACAO,
        DIVISAO
    ];
}

export default CalculadoraService;