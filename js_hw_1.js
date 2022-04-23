let item_1;
item_1 = 5;
console.log(item_1);
let item_2;
item_2 = 3;
console.log(item_2);
let item_3;
item_3 = item_1 + item_2;
console.log(item_3);
let item_4;
item_4 = "Yolochka";
console.log(item_4);
console.log(item_3 + item_4);
console.log(item_3 * item_4);
let item_5;
item_5 = item_3;
let item_6;
let item_6_type;
item_6 = 15;
item_6_type = typeof(item_6);
console.log(`item_6 = ${item_6}, item_6_type = ${item_6_type}`);
let item_7 = String(item_6);
let item_7_type;
item_7_type = typeof(item_7);
console.log(`item_7 = ${item_7}, item_7_type = ${item_7_type}`);

//1****************************************************************

const checkAge1 = function(age) {
  let age_2 = 18;
  let age_3 = 60;
    if (age < age_2) {
    console.log(`You don't have access cause your age is ${age}. It's less then 18`);
  } else if (age >= age_2 && age < age_3) {
    console.log("Welcome !");
  } else if (age >= age_3) {
    console.log("Keep calm and look Culture channel");
  } 
}

checkAge1(17);
checkAge1(18);
checkAge1(61);

//2***********************************************************

const checkAge2 = function(age) {
  let age_2 = 18;
  let age_3 = 60;
  if (typeof(age) != "number") {
   console.log("Error");
  } else {
  if (age < age_2) {
    console.log(`You don't have access cause your age is ${age}. It's less then 18`);
  } else if (age >= age_2 && age < age_3) {
    console.log("Welcome !");
  } else if (age >= age_3) {
    console.log("Keep calm and look Culture channel");
  } 
}
}

checkAge2(17);
checkAge2(18);
checkAge2(61);
checkAge2("cvv");
checkAge2("2a"); 

//3**********************************************************

const checkAge3 = function(age) {
  let age_2 = 18;
  let age_3 = 60;
  age = Number(age)
  if (isNaN(age)) {
   console.log("Error");
  } else {
    if (age < age_2) {
    console.log(`You don't have access cause your age is ${age}. It's less then ${age_2}`);
  } else if (age >= age_2 && age < age_3) {
    console.log("Welcome !");
  } else if (age >= age_3) {
    console.log("Keep calm and look Culture channel");
  } 
}
}

checkAge3(17);
checkAge3(18);
checkAge3(61);
checkAge3("cvv");
checkAge3("2a");
checkAge3("2");

//4***********************************************************

let input = +prompt("enter your age");
let userage = number(input);

const checkAge4 = function(age) {
  let age_2 = 18;
  let age_3 = 60;  
  if (isNaN(age)) {
   alert("Error");
  } else {
  if (age < age_2) {
    alert(`You don't have access cause your age is ${age}. It's less then ${age_2}`);
  } else if (age >= age_2 && age < age_3) {
    alert("Welcome !");
  } else if (age >= age_3) {
    alert("Keep calm and look Culture channel");
  } 
}
}

checkAge4(userAge);
