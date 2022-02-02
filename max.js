const business = 450;
const minister = 530;
const army = 600;

// if(business > minister) {
//     console.log("he is better than him");
// } else {
//     console.log("No He Is")
// }

// if (business > minister && business > army) {
//     console.log("Business is the biggest one");
// } else if (minister > business && minister > army) {
//     console.log("Told You Im the best");
// } else {
//     console.log("THE ARMY ROCKSSS")
// }

// var max = Math.max(business, minister, army);
// console.log('largest is', max)

// function findLargest(one, two, three) {
//     // if (businesss > ministers && businesss > armys) {
//     //     console.log("Business is the biggest one");
//     // } else if (ministers > businesss && ministers > armys) {
//     //     console.log("Told You Im the best");
//     // } else {
//     //     console.log("THE ARMY ROCKSSS")
//     // }

//     if (one > two && one > three) {
//         return one;
//     } else if (two > one && two > three) {
//         return two;
//     } else {
//         return three;
//     }
// }

// console.log(findLargest(10, 40, 10))


// function findSmallest(one, two, three) {
//     if (one < two && one < three) {
//         return one;
//     } else if (two < one && two < three) {
//         return two;
//     } else {
//         return three;
//     }
// }

// console.log(findSmallest(10,4,1))


var sentence = "I am hardworking. I am determined. I will be a web developer.";
var count = 0;
for(var i = 0; i < sentence.length; i++){
  var letter = sentence[i];
  if(letter=='g'){
    count++;
  }
}
console.log(count)


let x=[2,5,4,7];

let sum=0;
for (let i=0; i<x.length; i++){
    sum=sum+x[i];
}

