/* 

Uygulama 1:

Girilen doğum yılına göre ehliyet alınıp alınamayacağını hesaplayınız Eger 18 yasından kücük ise kac senesi kalmıstır?

Uygulama 2: 

Girilen ay bilgisine göre mevsim bilgisini yazınız.

*/

/*App-1*/

var birth = prompt( " Please enter your date of birth : ");

var year = 2021;
var age = year - birth;

if(age<18){
    console.log("you can't take drive license!");

    console.log("to take drive license, you should wait " +(18-age)+ " years");

}else if(age<= 18){
    console.log("you can take drive license!");

}else{
    console.log("wrong value")
}


/*App-2*/

var month = prompt("Enter month : ");

switch(month){
    case '1':
    case '2':
    case '12':
        console.log("Winter");
        break;
    case '3':
    case '4':
    case '5':
        console.log("Spring");
        break;
    case '6':
    case '7':
    case '8':
        console.log("Summer");
        break;
    case '9':
    case '10':
    case '11':
        console.log("Herbst");
        break;
            
                        

}
