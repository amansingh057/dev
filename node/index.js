const fs = require('fs');
const hero = require('superheroes');
const villains = require('supervillains');
// fs.copyFileSync("file1.txt","file2.txt");
var myHeroName = hero.random()
console.log(myHeroName);
console.log(villains.random())