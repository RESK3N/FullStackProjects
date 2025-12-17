// let arr=[1,2,3,4,5];
// arr.forEach((num)=>{console.log(numf**2)})


//return scores above 90
// let arr=[87,93,64,91,88,98,91];
// console.log(`all marks are : ${arr}`);
// let filtered= arr.filter((marks)=>{
//     return marks > 90;
// });
// console.log(`90+ marks are : ${filtered}`);

//take a number n from the user. create an array 1 to n . calculate sum and product of all numbers in array
// let n = prompt("Enter a number to calculate sum and product");
// let arr=[];
// for (let i = 1; i <= n; i++) {
//     arr[i-1]=i;
// }
// alert(arr.toString());
// let sum=arr.reduce((res,val)=>{
//     return res + val;
// })
// let product=arr.reduce((res,val)=>{
//     return res * val;
// })
// alert(`sum = ${sum.toString()}`);
// alert(`factorial= ${product.toString()}`);


//create a h2 heading element "hello Javascript" and append "from apna college students " using js
/*
let head = document.querySelector(".heading");
console.log(head);
console.log(head.innerText);
head.innerText = head.innerText+" from apna college students";
*/

//3 divs with same class and assign unique text to each
// let divs = document.querySelectorAll(".box");
// divs[0].innerText = divs[0].innerText +" added text to div 1";
// divs[1].innerText =divs[1].innerText +" added text to div 2";
// divs[2].innerText =divs[2].innerText +" added text to div 3";

let divs = document.querySelectorAll(".box");
let count=0;
for (div of divs) {
    div.innerText = div.innerText + ` added text to div ${count+1}`
    count++;
}

