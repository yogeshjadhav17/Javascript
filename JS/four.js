alert("Hello, Yogesh!");

// This Keyword example
let Vname = {
      classname: "Hubsem",
      collegename:"Garware College",
      fullname: function() {
          return this.classname + "" + this.collegename;
      },
};

console.log(Vname.fullname());

//closure example 1
function YogeshUser() {
    const name= "Yogesh";
    function student() {
        console.log("Hello,"+name+ "Welcome to Javascript");
        document.write("Hello," +name+ "Welcome to my website");
    }
    return student;
}

const function1 = YogeshUser();
function1();

// closure example 2
function JavaUser() {
    let name= "Javascript";
    function java() {
        document.write("I love "+name+ "It is fun to learn" +name);
        document.write("<br>");
        console.log("Hello" +name+ "You are fun to learn");
    }
    return java;
}

let It= JavaUser();
It();

//Destructuring -  It allows extracting and assigning values from objects and arrays into variables.

// Destructuring array example 1

const Vclass= ["React","Bootstrap","Java","Springboot"];

const [first1,second2,third3,...end2]= Vclass;

console.log(first1);
document.write(first1);
document.write("<br>");

console.log(second2);
document.write(second2);
document.write("<br>");

console.log(third3);
document.write(third3);
document.write("<br>");

console.log(end2);
document.write(end2);
document.write("<br>");



// example 2  destructuring array

const Hclass= [11,12,13,14,15,16,17,18,19,20];

const [Eleven,Twelve,Thirteen,...end]= Hclass;

console.log(Eleven);
document.write(Eleven);
document.write("<br>");
console.log(Twelve);
document.write(Twelve);
document.write("<br>");

console.log(Thirteen);
document.write(Thirteen);
document.write("<br>");

console.log(end);
document.write(end);
document.write("<br>");

// Destructuring array example 3

let Gteamplayer= [1,2,3,4,5,6,7,8,9,10,11];
let [first,second,third,...end1]= Gteamplayer;

console.log(first);
document.write(first);
document.write("<br>");
console.log(second);
document.write(second);
document.write("<br>");
console.log(third);
document.write(third);
document.write("<br>");
console.log(end1);
document.write(end1);
document.write("<br>");




// Destructuring objects example 1

const employee = {
    namee:"Yogesh",
    role:"React Full stack developer",
    address:{
        street:"Sinhgad road",
        city:"Pune",
        country:"India",
    },
};

const {namee,role,address:{street,city,...address},} = employee;

console.log(namee);
document.write(namee);
document.write("<br>");
console.log(role);
document.write(role);
document.write("<br>");
console.log(address);
document.write(address);
document.write("<br>");

// Destructuring objects example 2

const school={
    nam:"Bitco boys and girls highschool",
    stream:"Science",
    address1: {
        street1:"CBS road",
        city1:"Nasik",
        country1:"India",
    },
};

const {nam,stream,address1}= school;

console.log(nam);
console.log(stream);
console.log(address1);

// Destructuring default values

const employee2={
    nameee:"Priti",
    rolee:"Java Backend Developer",
};

const {nameee,rolee,addresss="nothing"}= employee2;

console.log(nameee);
document.write(nameee);
document.write("<br>");
console.log(rolee);
document.write(rolee);
document.write("<br>");
console.log(addresss);


/*const a,i,n;
for(i=1; i<=n; i++)
{
if(a[i]%2==0)
{
console.log("No is even");
}
else
{
console.log("no is odd");
}
};*/

let human = {
    firstname:"Yogesh",
    lastname:"Jadhav",
    fullname: function(){
        return this.firstname + "" + this.lastname;
    },
};

console.log(human.fullname());
document.write(human.fullname());

function Classdata(){
     const nam="Yogesh";
     function body(){
         console.log("Hello" +nam+ "Welcome to my class");
     }
     return body;
}

const React= Classdata();
React();


//array destructuring
const umbrella = [31,32,33,34,35];

const [thirtyone,thirtytwo,thirtythree,...end3] = umbrella;

console.log(thirtyone);
console.log(thirtytwo);
console.log(thirtythree);
console.log(end3);



// destructuring objects
const company = {
    namr:"Mphasis",
    Role2:"IT MNC company",
    address3:{
        street3:"Magarpatta city road",
        city3:"Pune",
        Country3:"India",
    },
};

const {
    namr,Role2,address3
} = company;


console.log(namr);
console.log(Role2);
console.log(address3);



// Destructuring default valures

const college2 = {
    namt:"Gokhale college",
    Rolt:"Computer Application",
};

const {namt,Rolt, address4="nothing"} = college2;

console.log(namt);
console.log(Rolt);
console.log(address4);