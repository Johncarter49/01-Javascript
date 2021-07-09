/*

let now = 2018;
let models = ["Toyota","Mazda","Mercedes","Opel"];
let years = ["2015", "2012", "2016", "2014"];

#1: make write all models.


let now = 2021;
let models = ["Toyota","Mazda","Mercedes","Opel"];
let years = ["2015", "2012", "2016", "2014"];

for ( let i=0; i<models.length; i++){
    console.log(models[i]);
}

models.forEach(function(element){
    console.log(element);
});



#2: Create the following building in console.

 // Toyota 2015 model ve 3 yaşında bir araçtır.
 // MAzda 2012 model ve 6 yaşında bir araçtır.
 // Mercedes 2016 model ve 2 yaşında bir araçtır.
 // Opel 2014 model ve 4 yaşında bir araçtır.


let now = 2021;
let models = ["Toyota","Mazda","Mercedes","Opel"];
let years = ["2015", "2012", "2016", "2014"];
 
for ( let i=0; i<models.length; i++){
    console.log(models[i] +" have "+years[i]+" model and he is "+(now-years[i])+" years old.");
}


 #3: models ve years dizilerine eleman eklenebilsin.

 */


let now = 2021;
let models = ["Toyota","Mazda","Mercedes","Opel"];
let years = ["2015", "2012", "2016", "2014"];
 
let model = prompt("enter model : ");
let year = prompt("enter year of model : ");

models.push(model);
years.push(year);

for ( let i=0; i<models.length; i++){
    console.log(models[i] +" have "+years[i]+" model and he is "+(now-years[i])+" years old.");
};