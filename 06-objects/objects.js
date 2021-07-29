// let marka = ['Opel', 'Toyota', 'Mazda'];
// let model = ['Corsa', 'Yaris', 'CX-3'];
// let Year = ['2015', '2012', '2016'];
// console.log(marka[0] + ' ' + model[0] + ' ' + Year[0]);

// let opel = ['Opel', 'Corsa', '2015'];
// let toyota = ['Toyota', 'Yaris', '2012'];
// let mazda = ['Mazda', 'CX-3', '2016'];

// console.log(opel);

let opel = {
    marka : 'Opel',
    model : 'Corsa',
    year : '2015',
    color : 'blue',
    automatic : true,
};
console.log(opel.marka);
console.log(opel.automatic);
console.log(opel['color']);

let toyota = new Object();
toyota.marka = 'Toyota';
toyota.model = 'Yaris';
toyota.year = '2012';
toyota.color = 'red';
toyota.automatic = true;

console.log(toyota.model);

toyota.model = 'Auris';

console.log(toyota);

let cars = [
    {
        marka : 'Opel',
        model : 'Corsa',
        year : '2015',
        color : 'blue',
        automatic : true,
    },
    {
        marka : 'Mercedes',
        model : 'c120',
        year : '2018',
        color : 'yellow',
        automatic : true,
    },
]

console.log(cars[0].color);

for(i=0; i<cars.length; i++){
    console.log(cars[i]);
}