exports.translate = function(english) {
    let splitWords = english.split(' ');
    let pigLatin = [];
    //let pigWord = [];
    for (let word of splitWords) {
        /////////////// EDGE CASES /////////////////////////
        // word starts with 'sch' as in school
        if ((/(^sch|Sch)/).test(word)){
            console.log('entered sch')
            pigLatin.push(word.substring(3) + word.substring(0,3) + "ay");
        // qu is second consonant sound
        } else if ((/^([^aeiouAEIOU][qQ]u)/).test(word)){
            console.log('entered con(qu)');
            pigLatin.push(word.substring(3) + word.substring(0,3) + "ay");       
        //word starts with qu
        } else if ((/(^qu|Qu)/).test(word)){
            console.log('entered qu');
            pigLatin.push(word.substring(2) + word.substring(0,2) + "ay");
        // starts with 3 consonants
        } else if ((/^([^aeiouAEIOU]){3}/).test(word)){
            console.log('entered 3con');
            pigLatin.push(word.substring(3) + word.substring(0,3) + "ay");      
        // starts with 2 consonants
        } else if ((/^([^aeiouAEIOU]){2}/).test(word)){
            console.log('entered 2con');
            pigLatin.push(word.substring(2) + word.substring(0,2) + "ay");
        ///////////////////////////////////////////////////
        // if starts with a vowel, just add 'ay' to the end
        } else if ((/(^[aeiouAEIOU])/).test(word)){
            console.log('entered vowels')
            pigLatin.push(word[0] + word.substring(1) + "ay");
        //if starts with a consonant, add first letter and 'ay' to the end
        } else if ((/^([^aeiouAEIOU])/).test(word)){
            console.log('entered consonants')
            pigLatin.push(word.substring(1) + word[0] + "ay");
        // } else {
        //     pigLatin.push(word);
        }
    }
    return(pigLatin.join(' '));
};
console.log(exports.translate("square"));