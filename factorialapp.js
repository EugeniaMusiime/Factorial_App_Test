/*
GROUP MEMBERS
1. Eugenia Musiimemaria
2. Collines Mukasa
3. Wamanga Peter 

*/

//Factorialize a number with recursion.

/*module.exports = class Factorial {
    factorial(num) {
        // If the number is less than 0, reject it.
        if (num < 0) 
            return -1
         // If the number is 0, its factorial is 1.
        else if (num == 0) 
            return 1;
        // Otherwise, call the recursive procedure again
        else {
            return (num * this.factorial(num - 1));
        }
    }
};*/

//Factorialize a number with a FOR loop.

module.exports = class Factorial{
    factorial(num){
        // If num = 0 OR num = 1, the factorial will return 1
        if (num === 0 || num === 1)
            return 1

        // We start the FOR loop with i = 4
        // We decrement i after each iteration
        for (var i = num - 1; i >= 1; i--) {
            // We store the value of num at each iteration
            num = num * i; 
          }
        return num;
    }
}