const HashMap = require('./HashMaps');



function main(){
  HashMap.MAX_LOAD_RATIO = 0.5;
  HashMap.SIZE_RATIO = 3; 
  let lotr = new HashMap;
  lotr.set("Hobbit", "Bilbo");
  lotr.set("Hobbit", "Frodo");
  lotr.set("Wizard", "Gandalf");
  lotr.set("Human", "Aragorn");
  lotr.set("Elf", "Legolas");
  lotr.set("Maiar", "The Necromancer");
  lotr.set("Maiar", "Sauron");
  lotr.set("RingBearer", "Gollum");
  lotr.set("LadyOfLight", "Galadriel");
  lotr.set("HalfElven", "Arwen");
  lotr.set("Ent", "Treebeard");
  console.log(lotr.get("Maiar"));
  console.log(lotr.get("Hobbit"));
  
  return lotr;
}

//console.log(main())

/*What are the values of Maiar and Hobbit that you have? Maiar:Sauron, Hobbit: Frodo
Is there a discrepancy? only received one of each value, instread of two.*/

//What is the capacity of your hash table after you have hashed all the above items? 
// 8 (same like initialCapacity we set)

//2. WhatDoesThisDo
//console.log(map1.get(str1)); ---20 the value of str2 will replace str1
//console.log(map2.get(str3)); ---10 the value of str4 will replace str3

//drill 4
function removeDuplicates(str) {
  //keep char first time it's seen. remove if it repeats
  let removeDup = new HashMap;
  let newStr= ''
  for(let i=0; i< str.length; i++){
    try {
      removeDup.get(str[i])
    }
    catch(e) {
      removeDup.set(str[i], 1)
      newStr += str[i]
    }
  }
  
  return newStr;
}

console.log(removeDuplicates('google all that you think can think of'));

//drill 5