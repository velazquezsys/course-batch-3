'use strict';

const expect = require('chai').expect;
const fibonacci = require('../src/index.js');


it('Mayor a 0', function () {
    const numero_repetciones = -1;
    const result = 'Se requieren valores iguales o mayores a 0';
    expect(fibonacci(numero_repetciones)).to.equal(result);
});

it('Tipo numerico', function () {
    const numero_repetciones = 'a';
    const result = 'Se requiere un valor numerico';
    expect(fibonacci(numero_repetciones)).to.equal(result);
});

it('Cero repeticiones', function () {
    const numero_repetciones = 0;
    const result = '0';
    expect(fibonacci(numero_repetciones)).to.equal(result);
});

it('Una repeticion', function () {
    const numero_repetciones = 0;
    const result = '0';
    expect(fibonacci(numero_repetciones)).to.equal(result);
});

it('Serie de 4 repeticiones', function () {
    const numero_repetciones = 4;
    const result = '0,1,1,2';
    expect(fibonacci(numero_repetciones)).to.equal(result);
});