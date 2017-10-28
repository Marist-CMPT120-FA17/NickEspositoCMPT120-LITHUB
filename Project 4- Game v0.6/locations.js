//locations.js for Nick Esposito

////////////////
////////////////
// 0
function UpperNew() {
	currentLoc = 0;
	if (init === true) {
		message = "It is Friday night, and all of your friends want to go out, but where do you go?" +
				  "Explore local Poughkeepsie and see what you find! Please drink responsibly!";
		init = false;
	UpdateDisplay(message); }
	var message = "You're back at Upper New. Go back out again or call it a night!";
	UpdateDisplay(message);
	ScoreTime();
	ButtonTime();
}
//1
function Darbys() {
	currentLoc = 1;
	var message = "You guys arrive at Darby O'Gills, and the place is packed beacuse its 2 for $1 night!";
	UpdateDisplay(message);
	ScoreTime();
	ButtonTime();
}
//2
function Donnelly() {
	currentLoc = 2;
	var message = "You are at Donnelly Hall hailing a cab, see where that takes you!";
	UpdateDisplay(message);
	ScoreTime();
	ButtonTime();
}
//3
function Union() {
	currentLoc = 3;
	var message = "You walked a few blocks, and now you are at Union Tavern, a LEGNENDARY bar! But the bar has a HUGE line. Should we wait or stay? Your call.";
	UpdateDisplay(message);
	ScoreTime();
	ButtonTime();
}
//4
function RiverStation() {
	currentLoc = 4;
	var message = "You now go to River Station, and you all get in, have fun!";
	UpdateDisplay(message);
	ScoreTime();
	ButtonTime();
}
//5
function ClubTT() {
	currentLoc = 5;
	var message = "You reach Club 33, the up and coming alternative to Union. Only upside is they're offering FREE BEER! TAKE the beer!";
	UpdateDisplay(message);
	ScoreTime();
	ButtonTime();
}
//6
function Gias() {
	currentLoc = 6;
	var message = "You guys take a quick stop at Gia's Pizza, one of the finest in Poughkeepsie. TAKE your pizza!";
	UpdateDisplay(message);
	ScoreTime();
	ButtonTime();
}
//7
function Amicis() {
	currentLoc = 7;
	var messageBEGIN = "Great, you guys got denied at River, nice work. You're now waiting for cab outside Amici's."
	var messageEND = "Great, you guys got denied at River AGAIN, nice work. You're now waiting for cab outside Amici's.";
	if (VisitLoc7 === false) {
		UpdateDisplay(messageBEGIN);
		ScoreTime();
		ButtonTime();
	} else if (VisitLoc7 === true) {
		UpdateDisplay(messageEND);
		ScoreTime();
		ButtonTime();
	}
}
//8
function BillyBobs() {
	currentLoc = 8;
	var message = "You head over to Vassar now to see some of your friends at Billy Bob's, their version of Union to Marist!"
	UpdateDisplay(message);
	ScoreTime();
	ButtonTime();
}
//9
function FratHouse() {
	currentLoc = 9;
	var message = "You stop by the frat house, where the party gets shut down and dispersed two hours in."
	UpdateDisplay(message);
	ScoreTime();
	ButtonTime();
}
//End of Locations Game v0.6
	
	
	
	
	
	