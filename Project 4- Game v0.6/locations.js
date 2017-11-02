//locations.js for Nick Esposito
//Project 4
//Game v0.6
//November 2nd, 2017
////////////////
////////////////
////////////////
// 0
function UpperNew() {
	currentLoc = 0;
	var message = "You're back at Upper New. Go back out again or call it a night!";
	if (init === false) {
		message = "It is Friday night, and all of your friends want to go out, but where do you go?" +
				  " Explore local Poughkeepsie and see what you find! Please drink responsibly!" +
				  " You're currently at your townhouse in Upper New." ;
		init = true;
	UpdateDisplay(message); }
	UpdateDisplay(message);
	ScoreTime();
	NoNoTake();
}
//1
function Darbys() {
	currentLoc = 1;
	var message = "You guys arrive at Darby O'Gills, and the place is packed beacuse its 2 for $1 night!";
	UpdateDisplay(message);
	ScoreTime();
	NoNoNorth();
	NoNoWest();
	NoNoTake();
}
//2
function Donnelly() {
	currentLoc = 2;
	var message = "You are at Donnelly Hall hailing a cab, see where that takes you!";
	UpdateDisplay(message);
	ScoreTime();
	NoNoSouth();
	NoNoTake();
}
//3
function Union() {
	currentLoc = 3;
	var message = "You walked a few blocks, and now you are at Union Tavern, a LEGNENDARY bar! But the bar has a HUGE line. Should we wait or stay? Your call.";
	UpdateDisplay(message);
	ScoreTime();
	NoNoTake();
}
//4
function RiverStation() {
	currentLoc = 4;
	var message = "You now go to River Station, and you found five dollars on the ground in line. TAKE it!";
	UpdateDisplay(message);
	ScoreTime();
	NoNoNorth();
	NoNoWest();
}
//5
function ClubTT() {
	currentLoc = 5;
	var message = "You reach Club 33, the up and coming alternative to Union. Only upside is they're offering FREE BEER! TAKE the beer!";
	UpdateDisplay(message);
	ScoreTime();
	NoNoEast();
}
//6
function Gias() {
	currentLoc = 6;
	var message = "You guys take a quick stop at Gia's Pizza, one of the finest in Poughkeepsie. TAKE your pizza!";
	UpdateDisplay(message);
	ScoreTime();
	NoNoEast();
	NoNoSouth();
}
//7
function Amicis() {
	currentLoc = 7;
	var message = "Great, you guys got denied at River, nice work. You're now waiting for cab outside Amici's.";
	UpdateDisplay(message);
	ScoreTime();
	NoNoWest();
	NoNoSouth();
	NoNoTake();
}
//8
function BillyBobs() {
	currentLoc = 8;
	var message = "You head over to Vassar now to see some of your friends at Billy Bob's, their version of Union to Marist!"
	UpdateDisplay(message);
	ScoreTime();
	NoNoNorth();
	NoNoEast();
	NoNoWest();
	NoNoTake();
}
//9
function FratHouse() {
	currentLoc = 9;
	var message = "You stop by the frat house, where the party gets shut down and dispersed two hours in."
	UpdateDisplay(message);
	ScoreTime();
	NoNoNorth();
	NoNoSouth();
	NoNoEast();
	NoNoTake();
}
//End of Locations Game v0.6