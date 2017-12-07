//Project 6 Javascript
//NE
//Nick Esposito
//LAST UPDATED 12-07-2017
//December 7th, 2017
//Project 6 - Game v1.0
///////////////////////
///////////////////////
///////////////////////
//New Global Variables
var currentLoc = 0;
var nextLocation = 0;
var score = 0;
var userInventory = []
var North = 0;
var South = 1;
var East = 2;
var West = 3;
var init = false;
//
//Movement- using a matrix, so much easier than switch-case
//reworking this BIGLY!!!!!!!:)
//Each array reps currentLoc, value represents movement based on N,S,E,W btn click, 0-9 loc in order
////
var btn = ["btnNorth","btnSouth","btnEast","btnWest"]
var Movement = [           /*N S E W*/
						   [1,2,3,4],	//0			
						   [-1,0,5,-1],	//1
						   [0,-1,6,7],	//2
						   [5,6,9,0],	//3
						   [-1,7,0,-1],	//4
						   [8,3,-1,1],	//5
						   [3,-1,-1,2],	//6
						   [4,-1,2,-1],	//7
						   [10,5,-1,-1], //8
						   [-1,-1,-1,3], //9
						   [-1,-1,-1,-1], //10
						   ]
//create matrix>>array to enable/disable buttons!, 1 is disable
var NoNoBtn = [				/*N S E W*/
							[0,0,0,0],  //0
							[1,0,0,1],	//1
							[0,1,0,0],	//2
							[0,0,0,0],	//3
							[1,0,0,1],	//4
							[0,0,1,0],	//5
							[0,1,1,0],	//6
							[0,1,0,1],	//7
							[0,0,1,1],	//8
							[1,1,1,0],	//9
							[1,1,1,1],  //10
							]
//Directional Buttons
function btnNorth_click() {
	nextLoc(North);
}
function btnSouth_click() {
	nextLoc(South);
}
function btnEast_click() {
	nextLoc(East);
}
function btnWest_click() {
	nextLoc(West);
}
////
//Introducing basic logic, will be a lot less code than if/else and switch-case, will use for navigation
//create one function to control btn clicks
function nextLoc(move) {
	var message = "Wrong Way!";
	nextLocation = Movement[currentLoc][move];
	if (nextLocation >= 0) {
		lookTime(nextLocation);
	} else {		
		gameMessage(message);
	}
}
//lookTime function, something new!
function lookTime(nextLocation) {
	var message = "";
	message = locations[nextLocation].desc;
	if (nextLocation >= 10) {
	if (userInventory.length > 3) {
			currentLoc = nextLocation;
			UpdateDisplay(message);
			gameMessage("Congrats, you win!");
			document.getElementById("btnTake").disabled = true;
			document.getElementById("btnInventory").disabled = true;
			document.getElementById("btnCommand").disabled = true;
		} else {
		gameMessage("You must collect all the items before you proceed!");
	}
	} else {
	currentLoc = nextLocation;
	UpdateDisplay(message);
	gameMessage("");
	}
	DisableTime();
	ScoreTime();
}
////
//Created a matrix to disable certain btns, uses btn array tod decipher which buttons to toggle
function DisableTime() {
	var disable = 0;
	for (j=0; j < btn.length; j++) {
		disable = NoNoBtn[currentLoc][j];
	  if (disable === 1) {
	  document.getElementById(btn[j]).disabled = true;
	  } else {
	  document.getElementById(btn[j]).disabled = false;
	 }
}
}
//New ScoreTime function
function ScoreTime() {
	var ScoreLook = locations[currentLoc];
	if(ScoreLook.visited === false) {
		score += 5;
		document.getElementById("score").innerHTML = score;
		ScoreLook.visited = true;
	}
}
//Command box
function btnEnterCommands_click() {
   var message = "Invalid Command. Please try again! Click Need Help to see valid commands!";
	var userText = document.getElementById("textinput").value;
	if (userText === "N" || userText === "n") {
		btnNorth_click();
	} else if (userText === "S" || userText ==="s"){
		btnSouth_click();
	} else if (userText === "E" || userText ==="e"){
		btnEast_click();
	} else if (userText === "W" || userText ==="w") {
		btnWest_click();
	} else if (userText === "T" || userText ==="t") {
		Take();
	} else if (userText === "I" || userText ==="i") {
		checkInventory();
	} else if (userText === "H" || userText ==="h") {
		HelpTime();							
	} else {
		gameMessage(message);
	}
}
//Upgrading Take function from v0.6
function Take() {
	var checkItem = locations[currentLoc];
	if (checkItem.item === null) {
		gameMessage("There is nothing to take here!");
	} else {
	userInventory.push(items[currentLoc].name);
	gameMessage("Item is now in your inventory! " + items[currentLoc].desc);
	locations[currentLoc].item = null;
	}
}
////
//Keeping same from previous version	
//Textarea for var message for each button, coming from each locations function
function UpdateDisplay(MSGTA) {
    var textarea = document.getElementById("textarea");
    textarea.value = MSGTA;
}
//
//Function for displaying game-related messages
function gameMessage(message) {
	document.getElementById("gameMessages").innerHTML = message;
}
//Check status of inventory
function checkInventory() {
	var playerInventory = "";
	for (j=0; j < userInventory.length; j++) {
		playerInventory = playerInventory + "|" + userInventory[j] + "|";
	}
	gameMessage(playerInventory);
}
// Init function
function Init() {
	if (init === false) {
	message = "It is Friday night, and all of your friends want to go out, but where do you go?" +
			" Explore local Poughkeepsie and see what you find! Please drink responsibly!" +
			" You're currently at your townhouse in Upper New." ;
	init = true;
	UpdateDisplay(message);}
}
//Help function for help button
function HelpTime() {
	var message = "The following commands can be entered into the textbox:" +
				  " N, n (north), S, s (south), E, e (east), and W, w (west)" +
				  " I, i (check inventory), T, t (take item), H, h (need help?)!" +
				  " The maximum score in this game is 55 points, since there are 10 locations and you get 5 points" +
				  " when you visit a location for the first time. The game map can assist you in finding different locations" +
				  " and the correct direction to move in." +
				  " You can only move in the cardinal directions (N, S, E, W) in this game! There are only FOUR items you can take." +
				  " Unlocking the secret location allows you to win the game! You also get 5 points when you advance to the secret location.";
	alert(message);
	}
function FunTime() {
	window.open("https://www.youtube.com/watch?v=tYrTyxXpIFU");
}
function BioTime() {
	window.open("https://www.linkedin.com/in/nicholasjesposito/");
	}
////
////END GAME V1.0