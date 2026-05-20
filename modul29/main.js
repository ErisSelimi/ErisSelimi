var programmmingL = ['Java','html','Python'];

console.log(programmmingL);

console.log(programmmingL[1]);

programmmingL.pop();
console.log(programmmingL);

programmmingL.push('css');
console.log(programmmingL);


programmmingL.unshift('react');
console.log(programmmingL);

programmmingL.shift();
console.log(programmmingL);

programmmingL.splice(0,2,'javascript');
console.log(programmmingL);


console.log(Math.random()*100);

console.log(Math.floor(Math.random()*100))


var students = ["Darisin","Donartin"];

var [s1,s2] = students;

console.log(s1);

var places = ["prishtine","prizrenin","peja","gjilanin"];

var [, firstplace,,secondplace] = places;

console.log(secondplace);