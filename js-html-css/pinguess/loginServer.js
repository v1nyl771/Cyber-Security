//*CODE WAS NOT WRITTEN BY ME*
//Code was provided by instructor, only edited line 15-16 (response.sendFile)
//Run loginServer.js in Node, then visit localhost:80
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

console.log("starting up");
//Default
app.get('/', function(request, response) {
    console.log("in app.get /");
	response.sendFile('c:/web/node/loginGuesser.html');
    //response.sendFile('c:/web/node/loginPage.html');
});

// http://localhost:80/auth
app.post('/auth', function(request, response) {
    console.log("in app.post /auth");
	//get the values from the "body"
	let username = request.body.username;
	let pin = request.body.pin;
    console.log(request.body);
    // check for if they are set
	if (username && pin) {
        console.log("username = " + username);
        console.log("pin = " + pin);
        if (username == "adam" && pin == "0003")
        {
            response.status(200).json('You got in!');
            response.end();
        }
        else
        {
            response.status(401).json('Wrong pin you hacking bugger!!');
		    response.end();
        }
	} else  //If they did not enter a username/password
    {
		response.send('Please enter Username and pin!');
		response.end();
	}
});

app.post("*", function(request, response) {
    response.render("this aint right");
});

app.listen(80);
