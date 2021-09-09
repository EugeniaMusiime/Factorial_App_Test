
/*
GROUP MEMBERS
1. Eugenia Musiimemaria
2. Collines Mukasa
3. Wamanga Peter 

*/
const Factorial = require('../factorialapp');
const chai = require('chai');
const assert = chai.assert;  

describe('Factorial', function() {

    /*it('factorial should return correct value', function() {
        const mathsService = new Factorial();
        assert.equal(mathsService.factorial(1),1);
        assert.equal(mathsService.factorial(0),1);
    });*/
    
    it('factorial should return correct value', function() {
        const mathsService = new Factorial();
        assert.equal(mathsService.factorial(4),24);
        assert.equal(mathsService.factorial(6),720);
     
    });
   
});

