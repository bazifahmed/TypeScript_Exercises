//Exercise 3: Name Cases
//Lower Case
let Name: string= "Bazif";
console.log("Lower Case:", Name.toLowerCase());

//Upper Case
console.log("Upper Case:", Name.toUpperCase());

//Title Case
console.log("Title Case:", Name.replace(/\bw/g,c => c.toUpperCase()));
