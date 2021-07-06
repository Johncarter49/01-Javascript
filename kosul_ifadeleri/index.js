var marka = 'Opel';
var model = 'Astra';
var otomatik = 'yes';

if(otomatik=='yes'){
    console.log('arac otomatiktir.');
}
else{
    console.log('arac otomatik degildir');
}

otomatik = true;

if(otomatik){
    console.log(marka+ " "+ model+ " otomatik");
}

if(otomatik=='true'){

    console.log("true");
}

if(10=='10');{
    console.log('sayılar esittir.');
}

/* switch statement */

//1 : manuel
//2 : otomatik

 var vites = '2';

 if(vites=="1"){
     console.log('vehicle manuel');
 }else if(vites=='2'){
     console.log('vehicle auto');
 }else{
     console.log('wrong value');
 }

 vites=3;
 switch(vites){
    case '1':
        console.log('vehicle manuel');
        break;
    case '2' :
        console.log('vehicle auto');
        break;
    default:
        console.log('wrong value');
 }

