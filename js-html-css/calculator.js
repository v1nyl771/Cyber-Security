//Bug Log at the bottom

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
  if (opp !== '') {
  equalsTo();
  }
  else {
  opp = op;
  document.getElementById("txtOutput").value = num1 + opp;
  document.getElementById("opp").value = opp;
  }
  }

function equalsTo() {//you know... the actual if else math part
	if (opp == '+') {
	let result = (parseFloat(document.getElementById("num1").value) + parseFloat(document.getElementById("num2").value)).toFixed(1);
	//jeez this is ugly ^^^ i couldn't figure out how to make it smaller just yet
	
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
	let result = (parseFloat(document.getElementById("num1").value) - parseFloat(document.getElementById("num2").value)).toFixed(1);
	
	num1 = result;
	num2 = 0;
	opp = '';
	
	document.getElementById("txtOutput").value = result;
	document.getElementById("num1").value = result;
	document.getElementById("num2").value = 0;
	document.getElementById("opp").value = '';
}
else if (opp == '*') { //the actual
	let result = (parseFloat(document.getElementById("num1").value) * parseFloat(document.getElementById("num2").value)).toFixed(1);
	
	num1 = result;
	num2 = 0;
	opp = ''; 
	
	document.getElementById("txtOutput").value = result;
	document.getElementById("num1").value = result;
	document.getElementById("num2").value = 0;
	document.getElementById("opp").value = '';
}
else if (opp == '/') {
	let result = (parseFloat(document.getElementById("num1").value) / parseFloat(document.getElementById("num2").value)).toFixed(1);
	
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
Known issues with this code so far:

1. *FIXED* The 8.2999... issue with the binary.

Possible fixes:
	>.toFixed() function somewhere. Not sure where to add it, but here's the format I'll have to use:
		(x + y).toFixed(10);


2. *FIXED ... sortve* Continous calculator use
	>If you're curious about this one (not sure how to properly explain it),
	 I don't mind explaining in class
	 
Possible fixes:
	>I'm not quite sure yet, actually?
	>I may have to rewrite onClick to accept the idea 
	 of an opperand being entered instead of a equal?
	>Who knows!
*/
