//1
let result = 1
for (let i = 0; i < 10; i++) {
  result = result * 2 
  console.log(result);  
}

//1*
let po = 1
function power(n) {
  for (let i = 0; i < 10; i++) {
    po = po * 2 
    console.log(po);  
  }
}

power(10)

//2
let str = ":)";
for (let i = 1; i <= 5; i++) {  
  console.log(str);
  str = str + ":)";
}

//2*

function printSmile(str, n) {  
  for (let i = 1; i <= n; i++) {  
    console.log(str);
    str = str + ":)";
}
}

printSmile(":)", 5)

//3**

function getWordStructure(wordd) { 
    let vowel = 0; 
    let consonant = 0;  
    let word = []
    for (let i = 0; i < wordd.length; i++) {
    if (wordd[i].match(/[a-z]/i)) {
      word.push(wordd[i])
    } else {continue}    
    }  
  for (let i = 0; i < word.length; i++) {       
        if (word[i] == 'a' || word[i] =='o' || word[i] =='e' || word[i] =='i' || word[i] == 'u' || word[i] == 'y') {
          vowel = vowel + 1;
        } else {
          consonant = consonant + 1;
        }         
  }
  console.log(`Word ${wordd} consists of ${vowel} vowels and ${consonant} consonants`)  
}

getWordStructure("dhyeh-annDneoiyt")

//4**

function isPalindrom(word) {
word = word.toLowerCase();
word_new = word.split("").reverse().join("");
  if (word == word_new) {
    console.log("Palindrom")
  } else {
    console.log("Not palindrom")
  }
}


isPalindrom("addedda")


