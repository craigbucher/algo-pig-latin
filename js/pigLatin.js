exports.translate = function(english) {
    let splitWords = english.split(' ');
    let pigLatin = [];
    for (let word of splitWords) {
        // check to see if begins with letter
        if ((/(^[aeiouAEIOU])/).test(word)){
            pigLatin.push(word[0] + word.substring(1) + "ay");
        } else if ((/(^[^aeiouAEIOU])/).test(word)){
            pigLatin.push(word.substring(1) + word[0] + "ay");
        } else {
            pigLatin.push(word);
        }
    }
    console.log(pigLatin)
};
console.log(exports.translate("banana"));