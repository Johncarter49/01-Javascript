

let marka = ["Opel", "Toyota", "Mazda", "Renault","BMW"];
let model = new Array("Corsa", "Yaris", "CX-3", "Clio");

console.log(marka[2]);
console.log(model[2]);

model[0] = "Astra";

console.log(model);

let auris = ["Toyota", "Auris", 42, true];

auris.push("blue");
auris.unshift("HB");
auris.pop();
auris.shift();

console.log(auris);

for(let i=0; i<marka.length; i++){
    console.log(marka[i]);
}

if(marka.indexOf('Mercedes')!==-1){
    console.log("founded!")
}else{
    console.log("the searching word ıs not founded.");
}