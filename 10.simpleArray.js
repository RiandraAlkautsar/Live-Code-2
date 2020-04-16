// let people = [
//     {
//         name : "Azka",
//         gender : "female"
//     },
//     {
//         name : "Dhio",
//         gender: "male"
//     },
//     {
//         name : "Dhio",
//         gender: "male"
//     }
// ];

// let males = people.filter(people => {
//         return people.gender === "male"
// });

// console.log(...males);

// let number = [2,4,6,7];

// number.forEach(num => {
//     console.log(num);
// });


let number = [2,4,6,7];

// number.forEach(num => {
//     console.log(num);
// });

let genap = number.find(num =>{
    return num % 2 == 0; 
    
});

console.log(genap);
