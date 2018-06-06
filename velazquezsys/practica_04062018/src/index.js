'use strict';

const fibonacci = (repeticiones) => {
    if (repeticiones == 'a') {
        return 'Se requiere un valor numerico';
    }
    if (repeticiones === 0) {
        return '0';
    }
    if (repeticiones === 1) {
        return '1';
    }
    if (repeticiones <= 0) {
        return 'Se requieren valores iguales o mayores a 0';
    }

    let firstValue = 0;
    let secondValue = 1;
    let temp_value;
    let result = '';
    let numero_repeticiones = 2;

    result = result.concat(firstValue + ',' + secondValue);

    while (numero_repeticiones < repeticiones) {
        temp_value = secondValue + firstValue;
        result = result.concat(',' + temp_value);
        firstValue = secondValue;
        secondValue = temp_value;
        numero_repeticiones++;
    }
    return result;
};

module.exports = fibonacci;