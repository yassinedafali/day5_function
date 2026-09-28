const prompt = require('prompt-sync')();
let students = [

  { name: "Sara", grade: 15 },
  { name: "Karim", grade: 9 },
  { name: "Lina", grade: 18 },
  { name: "Ayman", grade: 17 },
  { name: "Mohammed", grade: 19 },
  { name: "Ahmed", grade: 8 }

];
let name = prompt("print student to search: ")


let isFound = false 

for(let student of students)
{
  if(student.name === name){
    console.log(student.name,student.grade)
    isFound = true
    break
  }

}

if(!isFound)
 console.log("Not Found !!")


console.log("Fin!!")

// if(isFound) <==> if(isFound===true)
// if(!isFound) <==> if(isFound!==true)