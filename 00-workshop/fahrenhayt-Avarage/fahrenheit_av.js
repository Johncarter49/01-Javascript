//converter from Fahrenheit to Celcius

function convert(x){
    return (x-32)/1.8;
}

console.log(convert(32));

//average for one arrays every element

let mainList = [1, 2 , 3 , 6, 12, 24]

let sum = 0
function av(list){
    
    for (let i=0; i<list.length; i++){
        sum += list[i];
    }

    return avrg = sum/list.length;

}

    console.log(av(mainList));