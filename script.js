//---chapter 4---
//---------Q1---------

//var num1,num2,num3;

//---------Q2---------

//---legal variable---
//var fullName;
//var lastName;
//var age;
//var city;
//var country;

//---Illegal variable---
//var var;
//var const;
//var if;
//var else;
//var for;

//---------Q3---------

//document.write("<h1> Rules for naming JS variables </h1>")
//document.write("Variables can only contain, numbers, $ and _ . For Example : $my_1stVariable<br>")
//document.write("Variables must begin with a letters, $ and _ . For Example $name, _name or name<br>")
//document.write("Variables names are case sensitive<br>")
//document.write("Variables names should not be JS keywords")

//---chapter 4---
//---------Q1---------

//var sum = 3 + 5;
//document.write("Sum of 3+5 is : " + sum);

//---------Q2---------

//var sub = 5 - 3;
//document.write("Diff of 5-3 is : " + sub);

//var mul = 6*2;
//document.write("Product of 6*2 is : " + mul);

//var div = 12/4;
//document.write("Division of 12/4 is : " + div);

//var mod = 15%3;
//document.write("Modulus of 15%3 is : " + mod);

//---------Q3---------

//var value;
//document.write("Value after variable declaration is " + value + "<br>") ;

//value = 5;
//document.write("Initial value : " + value + "<br>");

//value++;
//document.write("Value after increment is : " + value + "<br>") ;

//value = value + 7;
//document.write("Value after addition is : " + value + "<br>");

//value--;
//document.write("Value after decrement is : " + value + "<br>") ;

//value = value%3;
//document.write("The remainder is : " + value + "<br>") ;

//---------Q4---------

//var ticket_price = 600;
//var  num_tickets = 5;
//var total = num_tickets*ticket_price;
//document.write("Total cost to buy " + num_tickets + " tickets to a movie is " + total + "PKR");

//---------Q5---------

// document.write("5 x 1 = 5" +  "<br>")
// document.write("5 x 2 = 10" +  "<br>")
// document.write("5 x 3 = 15" +  "<br>")
// document.write("5 x 4 = 20" +  "<br>")
// document.write("5 x 5 = 25" +  "<br>")
// document.write("5 x 6 = 30" +  "<br>")
// document.write("5 x 7 = 35" +  "<br>")
// document.write("5 x 8 = 40" +  "<br>")
// document.write("5 x 9 = 45" +  "<br>")
// document.write("5 x 10 = 50" +  "<br>")

//---------Q6---------

// var temp_1 = 20;
// var farenheit = (temp_1 * 1.8) + 32;
// document.write(temp_1 + "°C is : " + farenheit + "°F" + "<br>");

// var temp_2 = 70;
// var celsuis = (temp_2 - 32) * 0.5555555555555556;
// document.write(temp_2 + "°F is : " + celsuis + "°C");

//---------Q7---------

// var priceItem_1 = 650;
// var quantityItem_1 = 3;
// var priceItem_2 = 100;
// var quantityItem_2 = 7;
// var shippingCharges = 100;
// var Total = (650*3)+(100*7)+100;

// document.write("<h1>Shopping Cart</h1>" + "<br>");
// document.write("Price of item 1 is : " + priceItem_1 + "<br>");
// document.write("Quantity of item 1 is : " + quantityItem_1  + "<br>");
// document.write("Price of item 2 is : " + priceItem_2  + "<br>");
// document.write("Quantity of item 2 is : " + quantityItem_2  + "<br>");
// document.write("Shipping Charges is : " + shippingCharges  + "<br>");
// document.write("---------------------------------------"  + "<br>");
// document.write("Total cost of your order is : " + Total);

//---------Q8---------

// var totalMarks = 850;
// var  obtainedMarks = 710;
// var  percentage = (obtainedMarks/totalMarks) * 100;

// document.write("<h1>Marksheet</h1>"  + "<br>");
// document.write("Total Marks : " + totalMarks  + "<br>");
// document.write("Marks Obtained : " + obtainedMarks  + "<br>");
// document.write("Percentage : " +  percentage.toFixed(2));

//---------Q9---------

// var usdDollars = 10;
// var saudiRiyals = 25;
// var exchangeRateUsdToPkr = 104.80;
// var exchangeRateRiyalsToPkr = 28;
// var totalPkr = (104.80*10)+(25*28);

// document.write("<h1>Currency in PKR</h1>" + "<br>")
// document.write("Total Currency in PKR : " + totalPkr);

//---------Q10---------

// var num = 2;
// var calculate = num + 5 * 10 / 2;
// alert("The answer is : " + calculate);

//---------Q11---------

// var currentYear = 2024;
// var birthYear = 2003;
// var calculateAge = currentYear - birthYear;

// document.write("<h1>Age Calculator</h1>" + "<br>")
// document.write("Current Year : " + currentYear + "<br>");
// document.write("Birth Year : " + birthYear + "<br>");
// document.write("Your Age is: " + calculateAge);

//---------Q12---------

// var radius  = 20;
// var circumference  = 2 * 3.142 * radius;
// var  area = 3.142 * (radius * radius);

// document.write("<h1>The Geometrizer</h1>" + "<br>")
// document.write("Radius of a circle : " +  radius +"<br>");
// document.write("The circumference is : " + circumference + "<br>");
// document.write("The area is : " + area);

//---------Q13---------

// var favouriteSnack = "Potato Chips";
// var currentAge = 21;
// var maximumAge = 65;
// var snacksPerDay = 20;
// var remainingAge = maximumAge - currentAge;
// var totalSnacksNeeded = remainingAge  * snacksPerDay * 365;
// document.write("<h1>The Lifetime Supply Calculator</h1>" +"<br>");
// document.write("Favourite Snack : " + favouriteSnack + "<br>");
// document.write("Current Age : " + currentAge + "<br>");
// document.write("Estimated Maximum Age : " + maximumAge + "<br>");
// document.write("Amount of snacks per day : " + snacksPerDay + "<br>");
// document.write("You will need " + totalSnacksNeeded +" " + favouriteSnack + "to last you until the ripe old age of " + maximumAge);

//---chapter 6-9 ---
//---------Q1---------

// var a = 10;
// document.write("The value of a is : " + a + "<br>");
// document.write("---------------------------------" + "<br><br>");

// document.write("The value of ++a is : " + ++a + "<br>");
// document.write("Now the value of a is : " + a + "<br><br>");

// document.write("The value of a++ is : " + a++ + "<br>");
// document.write("Now the value of a is : " + a + "<br><br>");

// document.write("The value of --a is : " + --a + "<br>");
// document.write("Now the value of a is : " + a + "<br><br>");

// document.write("The value of a-- is : " + a-- + "<br>");
// document.write("Now the value of a is : " + a + "<br><br>");

//---------Q2---------

// var a = 2;
// var b = 1;
// var result = --a - --b + ++b + b--;

// document.write("Explanation" + "<br><br>")

// document.write("--a = 1" + "<br>");
// document.write("--a - --b = 1 - 0" + "<br>");
// document.write("--a - --b + ++b = 1 + 0 + 1" + "<br>");
// document.write("--a - --b + ++b + b-- = 1 + 0 + 1 + 1" + "<br><br>");

// document.write("result is : " + result + "<br>");

//---------Q3---------

// var name = prompt("Enter your name");
// alert("Hello! " + name);

//---------Q4---------

// var inputNumber = +prompt("Enter a number: ");

// if (!inputNumber) {
//   inputNumber = 5;
// }
// for (var i = 1; i <= 10; i++) {
//   document.write(inputNumber + "x" + i + "=" + inputNumber * i + "<br>");
// }

//---------Q5---------




