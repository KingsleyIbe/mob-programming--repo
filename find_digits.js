
function findDigits(n) {
    let counter = 0;
    let newInteger = n.toString();
    for(let i=0; i<newInteger.length; i++){
        if(n % newInteger[i] === 0 ){
            counter ++;
        }
    }
    return counter;
}

/* 
An integer  d is a divisor of an integer n if the remainder of n%d = 0.

Given an integer, for each digit that makes up the 
integer determine whether it is a divisor. Count the number of divisors occurring within the integer.
*/
