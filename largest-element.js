// function largestElement(numbers) {
//     let largest = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         const element = numbers[i];
//         if (element > largest) {
//             largest = element;
//         }
//     }
//     return largest

// }

// const numbers = [42, 22, -550, 11, 63, -52, 73];
// largestElement(numbers);

// console.log(largestElement(numbers));


// ৪. একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে। 
const bestFriend = ["Shakib", "Alok", "Mr_T", "amajdex", "shouan", "ron", "HelloThisIsAnotherFriend"]
// function bestFriends(names) {
//     let largest = 0;
//     for(let i = 0; i < names.length; i++) {
//         const element = names[i].length;
//         if(element > largest) {
//             largest = element;
//         }
//     }
//    return 
// }
// bestFriends(bestFriend)

// function longestFriendName(name){
//   let z=  name.sort(function(a,b){
//       return a.length - b.length
//     });

//     return z[z.length-1];
 
// }
// console.log(longestFriendName(bestFriend));



// ১০. তোমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে console log করে দেখাতে সেটা কি তুমি পারবে? তাহলে তুমি সেই কোড করে ফেলো 

const numbers =[95,20,80,85,30,81,60,97,50,120];

// ****Using for loop************
// function NumbersAbove80(numbers){ 
//     const elementAbove80=[]  
//     for(i=0; i<numbers.length; i++){
//         let element=numbers[i];
//         if(element<=80){
//             continue;
//         }
//         elementAbove80.push(element);       
       
//     }
//     // console.log(elementAbove80);
//     return elementAbove80;
   
// }
// let z=NumbersAbove80(numbers);
// console.log(z);

//********* */ Using for of loop**********

// function NumberAbove80(numbers){
//     elementAbove80=[]
//     for(number of numbers){
//         if(number<=80){
//             continue;
//         }
//         elementAbove80.push(number);

//     };
//     return elementAbove80;
// }
// let z=NumberAbove80(numbers);
// console.log(z);

// ১১. তিনটা সংখ্যার গুনফল বের করে ফাইনাল রেজাল্ট আউটপুট হিসেবে রিটার্ন করতে হবে। তুমি কি সেই কোড লিখতে পারবে। যদি পারো তাহলে সেই কোড লিখে ফেলো। 

// function multiply3Num(num1,num2,num3){
//     return num1*num2*num3;
// };

// let z=multiply3Num(10,20,30);
// console.log(z);


// ১২. একটা অবজেক্ট ডিক্লেয়ার করবে। সেটাতে তিনটা প্রপার্টি থাকবে। এবং কোন একটা প্রোপার্টি এর মান চেইঞ্জ করবা। 
// let talha={
//     name:"Abdur Rahman Talha",
//     age:11,
//     class:"Front-end Developer"
// };

// talha.class="MERN stack Developer";
// console.log(talha);


// ৫. এইটা একটু ট্রিকি হতে পারে। একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array এর মধ্যে রাখবে। আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে। 

// const allNumbers=[25,30,15,20,21,48,-15,35,-11];
// function positiveNumber(){
//     const positiveArray=[]
//     for(i=0;i<allNumbers.length; i++){
//         let element=allNumbers[i]
//         if(element<0){
//             break;
//         }
//         positiveArray.push(element);
//     };
//     return positiveArray;
    
// }
// console.log(positiveNumber());