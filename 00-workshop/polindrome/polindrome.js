// isPolindrome(rotor) true
// isPolindrome(yusuf) false
let m="yusuf";
let n=m.split("").reverse().join("")
if(m===n){
  console.log(true)
}else{
  console.log(false)
}
function isPolindrome(word){
  let emptyWord=""
  for(let k=word.length-1;k>=0;k--){
     emptyWord=emptyWord+word[k]
}
if(word===emptyWord){
console.log("isPolindrome:",true)
}else{
  console.log("isPolindrome:",false)
}
}
isPolindrome("rotor")
isPolindrome("yusuf")