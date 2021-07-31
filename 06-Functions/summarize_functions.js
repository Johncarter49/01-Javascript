let sentence = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, deserunt?afasdfsf afafasf';

let maxCharacter = 20;
let summarysentence = [];

if(maxCharacter> sentence.length){
    console.log(sentence);
}else{
    let words = sentence.split(' ');

    let totalCharacter = 0;

    for( let i= 0; i<words.length;i++){
        summarysentence.unshift(words[i]);
        totalCharacter += words[i].length;

        if(totalCharacter>maxCharacter){
            break;
        }
    }

console.log(summarysentence.join(' ')+ '...');
