//////////////////////////////////////////////
// Write Reusable JavaScript with Functions //
//////////////////////////////////////////////
function reusableFunction() {
  console.log("Heyya, World");
}

reusableFunction();

// Only change code below this line
function reusableFunction(){
  console.log("Hi World");
  document.getElementById("demo").innerHTML = "Hi World";
}

reusableFunction();

/*********************************************
* Passing Values to Functions with Arguments *
**********************************************/
function functionWithArgs(a, b) {
  console.log(a - b);
}
functionWithArgs(10, 5); // Outputs 5

// Only change code below this line.
function functionWithArgs1(a,b){
  console.log(a + b);
  document.getElementById("demo1").innerHTML = a + b;
}
functionWithArgs1(10, 5);
