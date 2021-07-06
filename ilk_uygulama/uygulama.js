
var ad = prompt("enter your name : ");

var ogrno = prompt("enter your student number : ");

var cinsiyet = prompt("Gender : "); //erkek : true kadın : false

var ders = prompt("enter lesson : ");

var not1 = prompt("note 1 : ") ;
var not2 = prompt("note 2 : ") ;

var ortalama = (Number(not1) + Number(not2))/2;

console.log(ogrno + " numarali " + ad+ "("+cinsiyet+")" + " isimli ögrencinin " + ders + " dersinden aldigi ortalama " + ortalama);