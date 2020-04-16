
//ES5
// var numbers = [1, 2, 3, 4, 5];
// var total = 0;

// numbers.forEach(function(number){
//     test = total += number;
// });

// //ES6
// var total2 = [1, 2, 3, 4, 5].reduce(function(previous, current){
//     return previous + current;

// },0);

// console.log(test);
// console.log(total2)

var total = [1, 2, 3, 4, 5].reduce(function(previous, current, index){
    var val = previous + current;
    console.log("The prevoius value is "+ previous +
    "; the current value is " + current +
    ", and the current iteration is" + (index + 1));
    return val;
},0);

console.log("The loop is done, and the final value is " + total + ".");