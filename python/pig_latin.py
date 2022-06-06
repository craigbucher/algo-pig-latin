import re

def translate(english):
  split_words = english.split(' ');
  pig_latin = []
  for word in split_words:
    # word starts with 'sch' as in school
    if re.match('^sch|Sch', word):
      pig_latin.append(word[3:] + word[0:3] + "ay")
    # qu is second consonant sound
    elif re.match('^([^aeiouAEIOU][qQ]u)', word):
      pig_latin.append(word[3:] + word[0:3] + "ay")
    #word starts with qu
    elif re.match('^(qu|Qu)', word):
      pig_latin.append(word[2:] + word[0:2] + "ay")
    # starts with 3 consonants
    elif re.match('^([^aeiouAEIOU]){3}', word):
      pig_latin.append(word[3:] + word[0:3] + "ay")
    # starts with 2 consonants
    elif re.match('^([^aeiouAEIOU]){2}', word):
      pig_latin.append(word[2:] + word[0:2] + "ay")
    # if starts with a vowel, just add 'ay' to the end
    elif re.match('(^[aeiouAEIOU])', word):
      pig_latin.append(word[0] + word[1:] + "ay")
    #if starts with a consonant, add first letter and 'ay' to the end
    elif re.match('^([^aeiouAEIOU])', word):
      pig_latin.append(word[1:] + word[0] + "ay")
      
  return ' '.join(pig_latin)

#print(translate('This is a test'))