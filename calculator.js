//Bug Log at the bottom

//set the variables so the code knows they're gonna be numbers
//plus opp cause... might as well!

/*var num1 = 0;
var num2 = 0;
let opp = '';*/

function emptyTxtOutput() { //For emptying output, used onload and on the clear button
	document.getElementById("txtOutput").value = '';
	document.getElementById("num1").value = '';
	document.getElementById("num2").value = '';
	document.getElementById("opp").value = '';
	opp = '';
	num = 0;
	num1 = 0;
	num2 = 0;
	result= 0;
}	

function onClick(num) { //setting num1 & num2
  if (opp === '') {//if no opp is selected, put numbers into num1
    num1 = parseFloat(document.getElementById("num1").value + num);
    document.getElementById("txtOutput").value += num;
    document.getElementById("num1").value += num;
	
  } else {//if opp is selected, put numbers into num2
    num2 = parseFloat(document.getElementById("num1").value + num);
    document.getElementById("txtOutput").value += num;
    document.getElementById("num2").value += num;
  }
}

function opperAnd(op) {//setting opp
  opp = op;
  document.getElementById("txtOutput").value = num1 + opp;
  document.getElementById("opp").value = opp;
  }

function equalsTo() {//you know.. the actual if else math part
	if (opp == '+') {
	let result = parseFloat(document.getElementById("num1").value) + parseFloat(document.getElementById("num2").value);
	//jeez this is ugly ^^^ i couldn't figure out how to make it smaller just yet
	//also could be where my 8.299999... issue is happening?
	
	num1 = result;
	num2 = 0;
	opp = '';
	//resetting everything so you can make multiple calcs in a row (1+1=2,+1=3, so on)
	
	document.getElementById("txtOutput").value = result;
	document.getElementById("num1").value = result;
	document.getElementById("num2").value = 0;
	document.getElementById("opp").value = '';
	// same as last comment except more on the user viewing side
}
else if (opp == '-') {
	let result = parseFloat(document.getElementById("num1").value) - parseFloat(document.getElementById("num2").value);
	
	num1 = result;
	num2 = 0;
	opp = '';
	
	document.getElementById("txtOutput").value = result;
	document.getElementById("num1").value = result;
	document.getElementById("num2").value = 0;
	document.getElementById("opp").value = '';
}
else if (opp == '*') { //the actual
	let result = parseFloat(document.getElementById("num1").value) * parseFloat(document.getElementById("num2").value);
	
	num1 = result;
	num2 = 0;
	opp = ''; 
	
	document.getElementById("txtOutput").value = result;
	document.getElementById("num1").value = result;
	document.getElementById("num2").value = 0;
	document.getElementById("opp").value = '';
}
else if (opp == '/') {
	let result = parseFloat(document.getElementById("num1").value) / parseFloat(document.getElementById("num2").value);
	
	num1 = result;
	num2 = 0;
	opp = '';
	
	document.getElementById("txtOutput").value = result;
	document.getElementById("num1").value = result;
	document.getElementById("num2").value = 0;
	document.getElementById("opp").value = '';
}
else {
	document.getElementById("txtOutput").value = "ERROR!";
	console.log("error with equalsTo");
}
}

/* Bug Log

Hi Adam :)
Known issues with this code so far:

1. the 8.2999... issue with the binary.

Possible fixes:
	>.toFixed() function somewhere. Not sure where to add it, but here's the format I'll have to use:
		(x + y).toFixed(10);


2. Continous calculator use
	>If you're curious about this one (not sure how to properly explain it),
	 I don't mind explaining in class
	 
Possible fixes:
	>I'm not quite sure yet, actually?
	>I may have to rewrite onClick to accept the idea 
	 of an opperand being entered instead of a equal?
	>Who knows!
*/
