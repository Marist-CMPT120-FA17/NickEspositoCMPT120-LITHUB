//Project 5
//NE
<<<<<<< HEAD
<<<<<<< HEAD
//LAST UPDATED 111417
=======
//LAST UPDATED 111017
>>>>>>> 0e6af183b6c6a0c0f98f9a560e354389de36d021
=======
//LAST UPDATED 111017
>>>>>>> 0e6af183b6c6a0c0f98f9a560e354389de36d021
///////////////////////
///////////////////////
///////////////////////
//New Global Variables
var currentLoc = 0;
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> 0e6af183b6c6a0c0f98f9a560e354389de36d021
var nextcurrentLoc = 0;
var score = 0;
var userInventory = []










//
//Location function
function location (id, name, desc, item){
>>>>>>> 0e6af183b6c6a0c0f98f9a560e354389de36d021
	this.id = id;
    this.name = name;
    this.desc = desc;
    this.item = item;
    this.visited = false;
	function toString() {
		return desc;
	}
}
//Declaring locations (Id,name,desc. of location, item or not)
var UpperNew = new loc (0, "Upper New", "You're back at Upper New. Go back out again or call it a night!", false);
var Darbys = new loc (1, "Darbys", "You guys arrive at Darby O'Gills, and the place is packed beacuse its 2 for $1 night!", false);
var Donnelly = new loc (2, "Donnelly Hall", "You are at Donnelly Hall hailing a cab, see where that takes you!", false);
var Union = new loc (3, "Union", "You walked a few blocks, and now you are at Union Tavern, a LEGNENDARY bar! But the bar has a HUGE line. Should we wait or stay? Your call.", false);
var RiverStation = new loc (4, "River Station", "You now go to River Station, and you found five dollars on the ground in line. TAKE it!", beerMoney);
var ClubTT = new loc (5, "Club 33", "You reach Club 33, the up and coming alternative to Union. Only upside is they're offering FREE BEER! TAKE the beer!", beer);
var Gias = new loc (6, "Gias", "You guys take a quick stop at Gia's Pizza, one of the finest in Poughkeepsie. TAKE your pizza!", pizza);
var Amicis = new loc (7, "Amicis", "Great, you guys got denied at River, nice work. You're now waiting for cab outside Amici's.", false);
var BillyBobs = new loc (8, "BillyBobs", "You head over to Vassar now to see some of your friends at Billy Bob's, their version of Union to Marist!", false);
var FratHouse = new loc(9, "Frat House", "You stop by the frat house, where the party gets shut down and dispersed two hours in.", false);
//Array for locations
<<<<<<< HEAD
var locations = [UpperNew,Darbys,Donnelly,Union,RiverStation,ClubTT,Gias,Amicis,BillyBobs,FratHouse]
=======
var location = [UpperNew,Darbys,Donnelly,Union,RiverStation,ClubTT,Gias,Amicis,BillyBobs,FratHouse]
//Movement 
//reworking this BIGLY!!!!!!!:)
//Each array reps currentLoc, value represents movement based on N,S,E,W btn click, 0-9 loc in ord
var MoveTimeButtons = new Array ("btnNorth","btnSouth","btnEast","btnWest");
////
var Movement = new Array ( [1,2,3,4],				
						   [-1,0,8,-1],
						   [0,-1,6,4],
						   [5,6,9,0],
						   [-1,7,0,-1],
						   [8,3,-1,1],
						   [3,-1,-1,2],
						   [4,-1,2,-1],
						   [-1,5,-1,-1],
						   [-1,-1,-1,3]
						   )
//create array to enable/disable buttons!



















//Introducing basic logic, will be a lot less code than if/else and switch-case
//create one function to control btn clicks
function ButtonTime() {
	if  (user === "N" || user === "n") {
		user = north	
	} else if (user === "S" || user ==="s"){
		user = south
	} else if (user === "E" || user ==="e"){
		user = east
	} else if (user === "W" || user ==="w") {
		user = west;
	}
	nextcurrentLoc = Movement[currentLoc][user];
	










/* for loop







*/
>>>>>>> 0e6af183b6c6a0c0f98f9a560e354389de36d021
//Items protoype
function item (id, name, desc) {
	this.id = id;
	this.name = name;
	this.desc = desc;
<<<<<<< HEAD
<<<<<<< HEAD
	this.isTaken = false;
=======
>>>>>>> 0e6af183b6c6a0c0f98f9a560e354389de36d021
=======
>>>>>>> 0e6af183b6c6a0c0f98f9a560e354389de36d021
	function toString() {
		return desc;
	}
}
//Declaring items (Id,name,desc. of item)
var beer = new item (0, "Beer", "This Bud Light is Rocky Mountain Cold!", false);
var pizza = new item (1, "Pizza", "Gia's pizza is the freaking BOMB!", false);
var beerMoney = new item (2, "Beer Money", "Sweet! Five Dollars!", false);
//Array for items
var items = [beer,pizza,beerMoney]
//
//Movement 
//reworking this BIGLY!!!!!!!:)
//Each array reps currentLoc, value represents movement based on N,S,E,W btn click, 0-9 loc in order
////
var Movement = [
						   [1,2,3,4],				
						   [-1,0,8,-1],
						   [0,-1,6,4],
						   [5,6,9,0],
						   [-1,7,0,-1],
						   [8,3,-1,1],
						   [3,-1,-1,2],
						   [4,-1,2,-1],
						   [-1,5,-1,-1],
						   [-1,-1,-1,3]
						   ]
//create array to enable/disable buttons!
//Directional Buttons
function btnNorth_click() {
	nextLoc(North);
	lookTime();
}
function btnSouth_click() {
	nextLoc(South);
	lookTime();
}
function btnEast_click() {
	nextLoc(East);
	lookTime();
}
function btnWest_click () {
	nextLoc(West);
	lookTime();
}
//
//lookTime function, something new:)
function lookTime() {
	var message = "";
	message = locations[currentLoc].desc;
	UpdateDisplay(message);
}
//Introducing basic logic, will be a lot less code than if/else and switch-case
//create one function to control btn clicks
function nextLoc(move) {
	var nextLoc = Movement[currentLoc][move];
	if (nextLoc >= 0) {
		currentLoc = nextLoc;
	} else {
		UpdateDisplay("Wrong way. Try another Direction!");
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
		take();
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
	userInventory.push(items[currentLoc].name);
	gameMessage("Item is now in your inventory!" + items[currentLoc].name);
	items[currentLoc].isTaken = true;
}	
//Keeping same from previous version	
//Textarea for var message for each button, coming from each locations function
function UpdateDisplay(MSGTA) {
    var textarea = document.getElementById("textarea");
    textarea.value = MSGTA;
 }
//
<<<<<<< HEAD
//Function for displaying game-related messages
function gameMessage(message) {
	document.getElementById("gameMessages").innerHTML = message;
}
//Check status of inventory
function checkInventory() {
	var playerInventory = "";
	for (j=0; j < userInventory.length; j++) {
		playerInventory = playerInventory + userInventory[j];
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
	var message = "The follwing commands can be entered into the textbox:" +
				  " N, n (north), S, s (south), E, e (east), and W, w (west)" +
				  " I, i (check inventory), T, t (take item), H, h (need help?)!" +
				  " The maximum score in this game is 50 points, since there are 10 locations and you get 5 points" +
				  " when you visit a location for the first time. The game map can assist you in finding different locations" +
				  " and the correct direction to move in. The Take button will be enabled at locations where you can take items." +
				  " You can only move in the cardinal directions (N, S, E, W) in this game! There are only three items you can take." ;
	alert(message);
	}
////
//Enabling and Disabling buttons
// Created via boolean function
//TAKE button will enable at locations where you can take items
function ButtonTime() {
	document.getElementById("btnEast").disabled = false;
    document.getElementById("btnWest").disabled = false;
    document.getElementById("btnSouth").disabled = false;
    document.getElementById("btnNorth").disabled = false;
	document.getElementById("btnTake").disabled = false;
	}
function NoNoNorth() {
	document.getElementById("btnNorth").disabled = true;
	}
function NoNoSouth() {
	document.getElementById("btnSouth").disabled = true;
	}
function NoNoEast() {
	document.getElementById("btnEast").disabled = true;
	}
function NoNoWest() {
	document.getElementById("btnWest").disabled = true;
	}
function NoNoTake() {
	document.getElementById("btnTake").disabled = true;
	}
////////////////
=======

<<<<<<< HEAD
	
>>>>>>> 0e6af183b6c6a0c0f98f9a560e354389de36d021
=======
	
>>>>>>> 0e6af183b6c6a0c0f98f9a560e354389de36d021
