// // const product ={  
// //     name : "Bell pen",
// //     rating : 4,
// //     offer : 5,
// //     price : 270,

// // };

// // // console.log(product)


// // let mode = "dark";
// // let color;

// // if (mode === "dark")
// // {
// //     color = "black";
// // }
// // if (mode === "light")
// // {
// //     color = "white"
// // }

// // // console.log(color)

// // let Hell = "dark";
// // let color1;

// // if (Hell === "dark")
// // {
// //     color1 = "black";
// // }
// // else {
// //     color1 = "white";
// // }

// // // console.log(color1)

// // let a = 50;

// // if ( a%2 == 0)
// // {
// //     // console.log("the No. is even");
// // } 
// // else{
// //     // console.log("the No. is odd");
// // }

// // let age;

// // if(age < 18){
// //     // console.log("Your are child");
// // } 
// // else if( age > 60)
// // {
// //     // console.log("Your are Old");
// // }
// // else if(age > 18 && age < 60)
// // {
// //     // console.log("Your are Young men");
// // }
// // else
// // {
// //     // console.log("Your not men");
// // } 

// let age = 16;

// let result = age > 18 ? "adult" : "Not adult";
// console.log(result)


let a = prompt("Enter the value")
let grade;

if (a >=90 && a <=100)
{
    grade = "A"
}
else if (a >=70 && a <=89)
{
    grade = "B"
}
else if (a >=60 && a<=69)
{
    grade = "C"
}
else if (a >=50 && a<=59)
{
    grade = "D"
}
else if (a>=0 && a<=49)
{
    grade = "F"
}

console.log(grade)