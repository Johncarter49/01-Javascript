/*

function summation(a,b){
    return a+b;
}

let total = summation(10,20);

console.log(total);
console.log(summation(40,50));

*/
 
let now = 2018;

function ageTotal(birth){
    return now-birth;
}

let ahmet = ageTotal(1990);
let ali = ageTotal(1996);

console.log(ahmet);
console.log(ali);

function sayRetire(name, birth){
    let u_age = ageTotal(birth);
    let retire = 65 - u_age;

    if (retire > 0){    
    console.log(name + ' can retire after ' + retire + ' year.');
    }else{
        console.log(name + 'is retired also before '+ (retire*-1) + ' year. ');
    }
}

sayRetire('cinar', 1950);
sayRetire('ali', 1998);