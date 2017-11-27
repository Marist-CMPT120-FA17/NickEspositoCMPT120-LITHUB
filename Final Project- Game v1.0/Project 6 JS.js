//Project 6 Javascript
//NE
//Nick Esposito
//LAST UPDATED 11-27-2017
//Project 6 - Game v1.0
///////////////////////
///////////////////////
///////////////////////
//New Global Variables
var currentLoc = 0;
var score = 0;
var userInventory = []
var North = 0;
var South = 1;
var East = 2;
var West = 3;
var init = false;
//
//Loc function
function loc (id, name, desc, item){
	this.id = id;
    this.name = name;
    this.desc = desc;
    this.item = item;
    this.visited = false;
	function toString() {
		return name + desc;
	}
}
//Declaring locations (Id,name,desc. of location, item or not)
var UpperNew = new loc (0, "Upper New", "You're back at Upper New. Go back out again or call it a night!", null, false);
var Darbys = new loc (1, "Darbys", "You guys arrive at Darby O'Gills, and the place is packed beacuse its 2 for $1 night!", null, false);
var Donnelly = new loc (2, "Donnelly Hall", "You are at Donnelly Hall hailing a cab, see where that takes you! But first, you meet your friend with your new ID!", fakeId, false);
var Union = new loc (3, "Union", "You walked a few blocks, and now you are at Union Tavern, a LEGNENDARY bar! But the bar has a HUGE line. Should we wait or stay? Your call.", null, false);
var RiverStation = new loc (4, "River Station", "You now go to River Station, and you found five dollars on the ground in line. TAKE it!", beerMoney, false);
var ClubTT = new loc (5, "Club 33", "You reach Club 33, the up and coming alternative to Union. Only upside is they're offering FREE BEER! TAKE the beer!", beer, false);
var Gias = new loc (6, "Gias", "You guys take a quick stop at Gia's Pizza, one of the finest in Poughkeepsie. TAKE your pizza!", pizza, false);
var Amicis = new loc (7, "Amicis", "Great, you guys got denied at River, nice work. You're now waiting for cab outside Amici's.", null, false);
var BillyBobs = new loc (8, "BillyBobs", "You head over to Vassar now to see some of your friends at Billy Bob's, their version of Union to Marist!", null, false);
var FratHouse = new loc(9, "Frat House", "You stop by the frat house, where the party gets shut down and dispersed two hours in.", null, false);
//Array for locations
var locations = [UpperNew,Darbys,Donnelly,Union,RiverStation,ClubTT,Gias,Amicis,BillyBobs,FratHouse]
//Items protoype
function item (id, name, desc) {
	this.id = id;
	this.name = name;
	this.desc = desc;
	this.isTaken = false;
	function toString() {
		return desc;
	}
}
//Declaring items (Id,name,desc. of item)
var beer = new item (5, "Beer", "This Bud Light is Rocky Mountain Cold!", false);
var pizza = new item (6, "Pizza", "Gia's pizza is the freaking BOMB!", false);
var beerMoney = new item (4, "Beer Money", "Sweet! Five Dollars!", false);
var fakeId = new item (2, "Fake ID", "Your fake looks good! It's one of the new versions from Connecticut!", false);
//Array for items
//Numbers are currentLoc where items are
var items = new Array();
items[5]= beer
items[6]= pizza;
items[4]= beerMoney;
items[2]= fakeId;
//Movement- using a matrix, so much easier than switch-case
//reworking this BIGLY!!!!!!!:)
//Each array reps currentLoc, value represents movement based on N,S,E,W btn click, 0-9 loc in order
////
var btn = ["btnNorth","btnSouth","btnEast","btnWest"]
var Movement = [           /*N S E W */
						   [1,2,3,4],	//0			
						   [-1,0,5,-1],	//1
						   [0,-1,6,7],	//2
						   [5,6,9,0],	//3
						   [-1,7,0,-1],	//4
						   [8,3,-1,1],	//5
						   [3,-1,-1,2],	//6
						   [4,-1,2,-1],	//7
						   [-1,5,-1,-1], //8
						   [-1,-1,-1,3], //9
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
							[1,0,1,1],	//8
							[1,1,1,0],	//9
							]
//Directional Buttons
/*function btnNorth_click() {
	nextLoc(North);
	lookTime();
	DisableTime();
	ScoreTime();
}
function btnSouth_click() {
	nextLoc(South);
	lookTime();
	DisableTime();
	ScoreTime();
}
function btnEast_click() {
	nextLoc(East);
	lookTime();
	DisableTime();
	ScoreTime();
}
function btnWest_click () {
	nextLoc(West);
	lookTime();
	DisableTime();
	ScoreTime();
}*/
function CommandTime(move) {
	
	















//
//lookTime function, something new!
function lookTime() {
	var message = "";
	message = locations[currentLoc].desc;
	UpdateDisplay(message);
}
//Introducing basic logic, will be a lot less code than if/else and switch-case, will use for navigation
//create one function to control btn clicks
function nextLoc(move) {
	if (move <= 3) {
	var next = Movement[currentLoc][move];
	if (next >= 0) {
		currentLoc = next;
	} else if (next === -1) {
		UpdateDisplay("Invalid Direction. Try again!"); }
	var message = "";
	message = locations[currentLoc].desc;
	UpdateDisplay(message);
}
}
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
//Command box
function btnEnterCommands_click() {
   var message = "Invalid Command. Please try again! Click Need Help? to see valid commands!";
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
		UpdateDisplay(message);
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
				  " The maximum score in this game is 50 points, since there are 10 locations and you get 5 points" +
				  " when you visit a location for the first time. The game map can assist you in finding different locations" +
				  " and the correct direction to move in." +
				  " You can only move in the cardinal directions (N, S, E, W) in this game! There are only FOUR items you can take." ;
	alert(message);
	}
////
//New ScoreTime function
function ScoreTime() {
	var ScoreLook = locations[currentLoc];
	if(ScoreLook.visited === false) {
		score += 5;
		document.getElementById("score").innerHTML = score;
		ScoreLook.visited = true;
	}
}
////END GAME V0.8