
/*
GROUP MEMBERS
1. Eugenia Musiimemaria
2. Collines Mukasa
3. Wamanga Peter 

*/
const MathsService = require('../factorialapp');
const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;  

describe('Factorial', function() {

    it('factorial should return correct value', function() {
        const mathsService = new MathsService();
        assert.equal(mathsService.factorial(-99),-1);

    });
    it('factorial should return correct value', function() {
        const mathsService = new MathsService();
        assert.equal(mathsService.factorial(1),1);
        assert.equal(mathsService.factorial(0),1);
    });
    it('factorial should return correct value', function() {
        const mathsService = new MathsService();
        assert.equal(mathsService.factorial(4),24);
        assert.equal(mathsService.factorial(6),720);
     
    });
   
});

