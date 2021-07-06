/*

#1 : 10-100 arasındaki sayıları yazdırın.(for)

#2 : 10-100 arasındaki sayıları 5'er 5'er yazdırın.(while)

#3 : Login Kontrolü : Kullanıcı adı ve parola kontrolünden gecene kadar kullanıcı bilgilerini kullanıcıdan isteyin.

               var k_username= "guest";
               var k_password= "12345";

*/

//#1 

/*
for(var i=10; i<100; i++){
    console.log(i);
}
*/


//#2
/*
var i = 10
while(i<100){
    if(i%5==0){
        console.log(i);
    }
    i++;
}
*/

//#3

var k_username= "guest";
var k_password= "12345";

var username= prompt("enter username : ");
var password= prompt("enter your password : ");

if((k_username= username) && (k_password= password)){
    console.log("you are in!")
}else {
    console.log("your username or password wrong!")
}