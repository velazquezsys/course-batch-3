'use strict';
var assert    = require("chai").assert;
var factorial = require("../factorial").factorial;
describe("Pruebas unitarias para la funcion factorial: ", () => {
    it("test_parametro_invalido ", () => {
        const parameter = '';
        const result_factorial = factorial(parameter);
        const valor_esperado = {error: '001', message : 'Parameter not is number integer'};
        assert.deepEqual(result_factorial, valor_esperado);
    });
    it("test_parametro_correcto ", () => {
        const parameter = 20;
        const result_factorial = factorial(parameter);
        const valor_esperado = 2432902008176640000;
        assert.equal(result_factorial, valor_esperado);
    });
    it("test_parametro_entero_negativo ", () => {
        const parameter = -2;
        const result_factorial = factorial(parameter);
        const valor_esperado = {error: '002', message : 'Parameter not >= 0'};
        assert.deepEqual(result_factorial, valor_esperado);
    });
});
