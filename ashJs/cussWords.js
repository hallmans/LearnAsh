//Using method functions to pick out 4 letter words out of an array
//Day 12

var cussWords = [
  'Ass',
  'Shit',
  'Fuck',
  'Asshole',
  'Bitch',
  'Cunt',
  'Bastard',
  'Damn',
  'Twat',
  'Dick',
];
function checkL(lNum) {
  return lNum < 5;
}
var num = 0;
while (num < cussWords.length) {
  var word = cussWords[num];
  if (word.length == 4) {
    console.log('These are 4 letter cuss words:', word);
  }
  num = num + 1;
}
