console.log("Hello I am Yogesh. I am learning full stack course for react and java. It is very nice and interactive course.");
document.write("Hello I am Yogesh Jadhav.I am learning the Javascript language right now."); 

/*var name="Sanjeev";
var message= Hello My father's name is"+ name +" My father retired in 2016 from service;
console.log(message);*/

window.alert("Hello Yogesh Sanjeev");

// use of variables in an example
let myname="Sanjeev";
console.log(myname);
document.write(myname);
document.write("<br>");


let number1=10;
let number2=20;
let multiplication=number1 * number2;
console.log(multiplication);
document.write(multiplication);
document.write("<br>");


let fathername="sanjeev";
let message= "Hello My father's name is"+ fathername +" My father retired in 2016 from service";
document.write(message);
document.write("<br>");


// example of array
let employee=["Bharani", "Sanjeev", "Yogesh","Girish"];
document.write(employee);
document.write("<br>");
document.write(employee[3]);
console.log(employee);
console.log(employee[2]);
document.write("<br>");

// example of function
function YogeshUser()
{
   Name="Bharani";
    Job="Full stack developer";
 Age=30;
  Sex="male";
    
};

YogeshUser();

document.write(YogeshUser);
console.log(YogeshUser);
document.write("<br>");

console.log(Name,Job,Age,Sex);
document.write("<br>");

document.write(Name,Job,Age,Sex);
document.write("<br>");


let festival = {
    Name:"Ganesh Festival",
    Place:"Pune",
    Month:"September",
    festival1: function(){
       return this.Name+""+ this.Place+ "" + this.Month;
    },
};

console.log(festival.festival1());
document.write("<br>");

document.write(festival.festival1());
document.write("<br>");

// if ..else statement. example

let month1= "January";
let month2= "February";
let month3= "March";
let month4= "April";
let month5= "May";
let month6= "June";
let month7= "July";
let month8= "August";
let month9= "September";
let month10= "October";
let month11= "November";
let month12= "December";

if(month2="February",month4="April", month6="June", month8="August", month10= "October", month12= "December" ){
console.log("This month is February");
document.write("This month is February");
document.write("<br>");

console.log("This month is April");
document.write("This month is April");
document.write("<br>");

console.log("This month is June");
document.write("This month is June");
document.write("<br>");

console.log("This month is August");
document.write("This month is August");
document.write("<br>");

console.log("This month is October");
document.write("This month is October");
document.write("<br>");

console.log("This month is December");
document.write("This month is December");

document.write("<br>");
}
else{
console.log("Try other months");
document.write("Try other months");
document.write("<br>");

}
/*
if(month2="February"){
console.log("This month is february");
document.write("This month is february");
document.write("<br>");

}
else
{
    console.log("Try other months");
    document.write("Try other months");
    }

    if(month3="March"){
        console.log("This month is March");
        document.write("This month is March");
        document.write("<br>");

        }
        else
        {
            console.log("Try other months");
            document.write("Try other months");
            }

            if(month4="April"){
                console.log("This month is April");
                document.write("This month is April");
                document.write("<br>");

                }
                else
                {
                    console.log("Try other months");
                    document.write("Try other months");
                    }*/

                    

/* Javascript data types-
 primitive data types-

1. string 
2.integer
3. Boolean
4. undefined
5. Null
*/

let classname="Hubsem";
let subject= 4;
let ischangeable= "true";
let place;
let branches= null;

console.log(classname);
document.write(classname);
document.write("<br>");
console.log(subject);
document.write(subject);
document.write("<br>");

console.log(ischangeable);
document.write(ischangeable);
document.write("<br>");

console.log(branches);
document.write(branches);

/* 2. reference data types-
a. object-
*/
let project= {
    name:"Environment project",
    subject:"plants and trees",
    year:2023,
    place:"pune",
};

document.write(project);
document.write("<br>");

console.log(project);

//  b.  array-  it is used to store multiple values in single variable.

let classroom= ["Yogesh","Bharani","Sanjeev","Sumit"];
document.write(classroom);
document.write("<br>");
document.write(classroom[2]);


/* Operators- It is a special symbol used to perform operations. variables + operators= expressions

1. Aritmetic operators-

a. addition*/
let a=10;
let b=5;
document.write(a+b);
document.write("<br>");

// b. subtraction-

let x=10;
let y=5;
document.write(x-y);
document.write("<br>");


// c. multiplication

let n=20;
let m=2;
document.write(n*m);
document.write("<br>");


//d. division
let p=10;
let q=2;
document.write(p/q);
document.write("<br>");


//e. exponentiation
let e=20;
document.write(e**2);
document.write("<br>");

//f. modulus
let c=40;
let d=20;
document.write(c%d);
document.write("<br>");

//g. increment 

let f=10;
document.write(++f);
document.write("<br>");

// h. decrement

let g=20;
document.write(--g);
document.write("<br>");
