let assert    = require("chai").assert;
let bubble = require("../app/bubble");

describe("Bubble should accept only array objects ", function() {
    describe("Check isArray Function: ", function() {
        it("return true if the parameter in an array object", function() {
            const myArray = [12,4,62,56,8,23];
            result   = bubble.isArray(myArray);
            assert.equal(result, true);
        });
        it("return false if a variable integer is not an Array Object", function() {
            const myArray = 50;
            result   = bubble.isArray(myArray);
            assert.equal(result, false);
        });
        it("return false if a String as parameter is not an Array Object", function() {
            const myArray = 'string'
            result   = bubble.isArray(myArray);
            assert.equal(result, false);
        });
        it("return false if the undefined variable other is not an Array Object", function() {
            let other;
            result   = bubble.isArray(other);
            assert.equal(result, false);
        });
        it("return false if null as parameter is not an Array Object", function() {
            result   = bubble.isArray(null);
            assert.equal(result, false);
        });
       /* it("Check the returned value using: assert.typeOf(value,'value'): ", function() {
            result   = bubble.addTested("text");
            assert.typeOf(result, "string");
        });
        it("Check the returned value using: assert.lengthOf(value,'value'): ", function() {
            result   = bubble.addTested("text");
            assert.lengthOf(result, 11);
        });*/
    });

});

describe("Bubble should accept only Integer array objects ", function() {
    describe("Check isNumericArray Function: ", function() {
        it("return true if the parameter in an numeric array object", function() {
            const myArray = [12,4,62,56,8,23];
            result   = bubble.isNumericArray(myArray);
            assert.equal(result, true);
        });
        it("return false if new Array as parameter is not a numeric array object", function() {
            const myArray = new Array;
            result   = bubble.isNumericArray(myArray);
            assert.equal(result, false);
        });
        it("return false if ['s','a','d'] as parameter is not a numeric array object", function() {
            const myArray = ['s','a','d'];
            result   = bubble.isNumericArray(myArray);
            assert.equal(result, false);
        });
        it("return false if [12,4,62,56,8,'a'] as parameter is not a numeric array object", function() {
            const myArray = [12,4,62,56,8,'a'];
            result   = bubble.isNumericArray(other);
            assert.equal(result, false);
        });
        it("return false if [] as parameter is not a numeric array object", function() {
            const myArray = [];
            assert.equal(result, false);
        });
        /* it("Check the returned value using: assert.typeOf(value,'value'): ", function() {
             result   = bubble.addTested("text");
             assert.typeOf(result, "string");
         });
         it("Check the returned value using: assert.lengthOf(value,'value'): ", function() {
             result   = bubble.addTested("text");
             assert.lengthOf(result, 11);
         });*/
    });




});
