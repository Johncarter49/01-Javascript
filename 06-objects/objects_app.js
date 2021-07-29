/*
    #1: we hide  information about one person in object.

    ** name         :   Ali
    ** last name    :   Yilmaz
    ** gender       :   Male
    ** phone num.   :   056565566556
    ** Address      :   Hamburg
    ** Job          :   IT engineer
    ** languages    :   English, Germen
    ** Hobbies      :   cinema, spor, read book
    
    #2: How many languages know this person?
    £3: Please write the hobbies of this person in one row.
    #4: please create one person information list for 3 people.

*/

let ali = {
    name: 'Ali',
    last_name: 'Yilmaz',
    gender: 'Male',
    phone_num: '056565566556',
    Address: 'Hamburg',
    Job: 'IT_engineer',
    languages: ['English', 'German'],
    Hobbies: ['cinema', 'spor', 'read book']
};
console.log(ali.languages.length);

ali.Hobbies.forEach(function(hobby){
    console.log(hobby);
});

personal_list = [
    {
        name: 'Ali',
        last_name: 'Yilmaz',
        gender: 'Male',
        phone_num: '056565566556',
        Address: 'Hamburg',
        Job: 'IT_engineer',
        languages: ['English', 'German', 'French'],
        Hobbies: ['cinema', 'spor', 'read book']
    },
    {
        name: 'Ahmet',
        last_name: 'Tan',
        gender: 'Male',
        phone_num: '056565566556',
        Address: 'Düsseldorf',
        Job: 'Manager',
        languages: ['English', 'German'],
        Hobbies: ['cinema', 'spor', 'read book']
    },
    {
        name: 'Elif',
        last_name: 'Sen',
        gender: 'Female',
        phone_num: '056565566556',
        Address: 'Berlin',
        Job: 'Judge',
        languages: ['English', 'German', 'spanish'],
        Hobbies: ['cinema', 'spor', 'read book']
    }

]

personal_list.forEach(function(personal){
    console.log('*******************');
    console.log(personal.name+' '+ personal.last_name);

    personal.languages.forEach(function(language){
        console.log(language);
    });
    console.log('*******************');

});