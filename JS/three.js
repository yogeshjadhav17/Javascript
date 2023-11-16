alert("Hi Yogesh");

let text;
switch (new Date().getDay()) {
  default:
    text = "Looking forward to the Weekend";
    break;
  case 6:
    text = "Today is Saturday";
    break;
  case 0:
    text = "Today is Sunday";
}
console.log(text);
document.write(text);
/*document.getElementById("demo").innerHTML= text;*/


/*let school="B";
switch (school) 
{
    case "S":
        school="Student can give exam";
        break;

    case "B":
        school="Student cannot give exam";
       break;

    case "C":
       school="student has to take admission to school";
       break;

    default:
        school="No school";
}

console.log(school);
document.write(school);
*/
let school="S";
switch (school) 
{
    case "S":
console.log("student can give exam");
        break;

    case "B":
        console.log("Student cannot give exam");
       break;

    case "C":
       console.log("student has to take admission to school");
       break;

    default:
        console.log("No school");
}

console.log(school);
document.write(school);


let grade = "B";
switch (grade) {
  case "S":
    console.log("Super Grade");
    break;

  case "A":
    console.log("Excellent Grade");
    break;

  case "B":
    console.log("70% pass");
    break;

  default:
    console.log("No Grade");
}


/*Switch(S):
console.log("Student has received 80 % or more");
break;

Switch(A):
console.log("Student has received less than 80 and greater than 60 percentage");
break;

Switch(B):
console.log("student has received less than 60 or is just passed");
break;

default(D):
console.log("Wrong selection");
*/



let person=   {
  name:"Yogesh",
  sex:"Male",
  Age:30,
  address:"Sinhgad road, Pune",
};

console.log(person);
document.write(person);

function Yogeshuser(){
  let name="Yogesh";
  let message="My Name is " +name+ "I am learning Javascript";
  document.write(message);
  console.log(message);
  document.write("<br>");
}

Yogeshuser();

let is_array = function(input) {
  if (toString.call(input) === "[object Array]")
  return true;
  return false;
};
console.log(is_array('w3resource'));
console.log(is_array([1,2,4,0]));

const x=[];
x[1]=5;
console.log(x);

x[2]=[,,42];
console.log(x);



let first = function(array, n){
if(array == null)
return void 0;
if(n == null)
return array[0];
if(n < 0)
return [];
return array.slice(0,n);
};

console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));


let john=["John", 25];
let pete=["pete", 30];
let mary=["mary", 29];
let getAverageAge= average_age;

let arr=[john,pete,mary];

getAverageAge(arr);

let vegetables=["Garlic","Carrot","Brocolli","Pumpkin"];

console.log(vegetables);
document.write(vegetables[2]);
document.write("<br>");

function myfunction(){
  let cityname="Kolhapur";
  let templename="Mahalakshmi temple";
  let message="The city of" +cityname+ "has " +templename+ "as the old origin temple of the city."
  console.log(message);
  document.write("<br>");
  document.write(message);
  document.write("<br>");
}

myfunction();

let employee = {
  name:"Pritam",
  Sex:"Male",
  Age:25,
  role:"Full stack developer",
};

console.log(employee);
document.write("<br>");
document.write(employee);

/* data types in javascript=
1) Primitive data types
2)Reference data types

1)
a. string
b. integer.
c. boolean
d. undefined
e. null

2) reference-
a. object-  stand alone entity with different types and properties.
b.Array- used to store multiple values in single variable.

eg-
let class = ["Yogesh","Bharani", "Sanjeev"];

Conditional staements-
1)if...else
2)switch case.

*/

let student_name="Yogesh";

let college="C";
let student_age=18;


if(student_age >=15)
console.log(student_name+" can go to college");
else
console.log(student_name+" cannot go to college");

let school2="S";
switch(school2){
  case "A":
    console.log("Student is in Shantiniketan School");
    break;
  case "B":
    console.log("Student is in New Modern school");
    break;
  case "S":
    console.log("Student is in Kolhapur Public School");
    break;
  default:
    console.log("Wrong case number");
}


let grade1="A";
switch(grade1){
  case "A":
    document.write("Student has got first class");
    break;
  case "B":
    document.write("Student is just pass 70%");
    break;
  case "C":
    document.write("student has got distiction");
    break;
  default:
    document.write("Wrong grade");
}