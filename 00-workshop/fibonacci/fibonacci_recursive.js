
num = prompt("Kaca kadar fibonaci hesaplasin?")
function fibonacci(num)
    {
      if (num <= 1) return 1
      return fibonacci(num - 1) + fibonacci(num - 2);
    }
console.log(`Fibonacci(${num}):` + fibonacci(num)

//pascalNumber

const pascalNumber = function total (n){ //4+3+2+1
    if(n===1) return 1;
    return n + total(n-1)



 //reverse text

let newText = "";
function reverse(text) {
    for(let i = text.length -1; i >= 0; i--) {
        newText += text[i]; 
    }
console.log(newText);
}
reverse("Hello world");

