exports.translate = function(english) {
    let splitWords = english.split(' ');
    let pigLatin = [];
    //let pigWord = [];
        // check to see if begins with vowel
    for (let word of splitWords) {
        /////////////// EDGE CASES /////////////////////////
        // word starts with 'sch' as in school
        if ((/(^sch|Sch)/).test(word)){
            pigLatin.push(word.substring(3) + word.substring(0,3) + "ay");
        // qu is second consonant sound
        } else if ((/^([^aeiouAEIOU][qQ]u)/).test(word)){
            pigLatin.push(word.substring(3) + word.substring(0,3) + "ay"); 
        //word starts with qu
        } else if ((/(^qu|Qu)/).test(word)){
            pigLatin.push(word.substring(2) + word.substring(0,2) + "ay");
        // starts with 3 consonants
        } else if ((/^([^aeiouAEIOU]){3}/).test(word)){
            pigLatin.push(word.substring(3) + word.substring(0,3) + "ay");      
        // starts with 2 consonants
        } else if ((/^([^aeiouAEIOU]){2}/).test(word)){
            pigLatin.push(word.substring(2) + word.substring(0,2) + "ay");
        ///////////////////////////////////////////////////
        // if starts with a vowel, just add 'ay' to the end
        } else if ((/(^[aeiouAEIOU])/).test(word)){
            pigLatin.push(word[0] + word.substring(1) + "ay");
        //if starts with a consonant, add first letter and 'ay' to the end
        } else if ((/^([^aeiouAEIOU])/).test(word)){
            pigLatin.push(word.substring(1) + word[0] + "ay");
        }
    }
    return(pigLatin.join(' '));
};
console.log(exports.translate("square"));