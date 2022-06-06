import re

def translate(english):
  split_words = english.split(' ');
  pig_latin = []
  for word in split_words:
    if re.match('^sch|Sch', word):
      pig_latin.append(word[3:] + word[0:3] + "ay")
    elif re.match('^([^aeiouAEIOU][qQ]u)', word):
      pig_latin.append(word[3:] + word[0:3] + "ay")
    elif re.match('^(qu|Qu)', word):
      pig_latin.append(word[2:] + word[0:2] + "ay")
    elif re.match('^([^aeiouAEIOU]){3}', word):
      pig_latin.append(word[3:] + word[0:3] + "ay")
    elif re.match('^([^aeiouAEIOU]){2}', word):
      pig_latin.append(word[2:] + word[0:2] + "ay")
    elif re.match('(^[aeiouAEIOU])', word):
      pig_latin.append(word[0] + word[1:] + "ay")
    elif re.match('^([^aeiouAEIOU])', word):
      pig_latin.append(word[1:] + word[0] + "ay")

  return ' '.join(pig_latin)

#print(translate('the quick brown fox'))