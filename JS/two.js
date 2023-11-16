

alert("Hello Class");
//  Primitive Data Types
let firstname="Yogesh";    //string
let age=30;                // number
let isIndian = true;       // Boolean
let lastname;              // undefined
let daughters = null;      // null



document.write(firstname);
document.write("<br>");

document.write(age);
document.write("<br>");

document.write(isIndian);
document.write("<br>");

document.write(lastname);
document.write("<br>");

document.write(daughters);
document.write("<br>");
// Reference data Types-object
 
let employee= {
    Name:"Yogesh",
    Sex:"Male",
    Age:30,
    City:"Pune",
};


console.log(employee);
document.write("<br>");

document.write(employee);
document.write("<br>");

// Array  Data Type

let member = ["Bharani", "Sanjeev", "Yogesh"];
document.write(member);
document.write("<br>");
document.write(member[1]);
document.write("<br>");

// Functions

function Important(){
    let firstname="Yogesh";
    let message="Hello Everyone! My Name is " +firstname+ "I am learning Javascript";
    document.write(message);
    console.log(message);
    document.write("<br>");
}

Important();


/*  Operators     -   variables  +  operators=  expressions

   Arithmetic Operators
   */


   
   let x =300;
   let y=200;
   document.write(x+y);
   document.write("<br>");

   let a=200;
   let b=100;
   document.write(a-b);
   document.write("<br>");

   let p=200;
   let q=100;
   document.write(p*q);
   document.write("<br>");

   let l=200;
   let m=10;
   document.write(l/m);
   document.write("<br>");

   let h= 20;
   let i=2;
   document.write(h**i);
   document.write("<br>");

   let j=300;
   let k=10;
   document.write(j%k);
   document.write("<br>");

   let d=10;
   document.write(++d);
   document.write("<br>");

   let n= 20;
   document.write(--n);
   document.write("<br>");

   let hometown=false;
   let officetown=false;
   
   if(hometown||officetown)
{
 
     console.log("Ready to relocate");
    }
    else{
        console.log("Cannot relocate");
    }
 
    let job=false;
    let marriage=true;
 
    if (job&&marriage){
        console.log("Yogesh can get married");
    }
    else{
        console.log("Yogesh cannot get married");
    }
 
    let w=10;
     let v=20;
    if(w > v){
    console.log("True");
    }
    else{
        console.log("False");
    }
 
    let g=10;
    if (g!=10) {
        console.log("True");
    }
    else{
        console.log("False");
    }
 
    let nisha=30;
 console.log(nisha>25);
 
 let naitik=10;
 console.log(naitik ===10);
 
 let jaideep = 20;
 console.log(jaideep !== 5);
 
 let harshal = 40;
 console.log(harshal <  30);



