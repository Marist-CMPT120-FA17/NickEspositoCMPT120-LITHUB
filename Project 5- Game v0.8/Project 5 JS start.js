//Project 5
//NE
//11717
///////////////////////
///////////////////////
///////////////////////
//Location function
function location (id, name, desc, item){
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
var UpperNew = new location (0, "Upper New", "You're back at Upper New. Go back out again or call it a night!", false);
var Darbys = new location (1, "Darbys", "You guys arrive at Darby O'Gills, and the place is packed beacuse its 2 for $1 night!", false);
var Donnelly = new location (2, "Donnelly Hall", "You are at Donnelly Hall hailing a cab, see where that takes you!", false);
var Union = new location (3, "Union", "You walked a few blocks, and now you are at Union Tavern, a LEGNENDARY bar! But the bar has a HUGE line. Should we wait or stay? Your call.", false);
var RiverStation = new location (4, "River Station", "You now go to River Station, and you found five dollars on the ground in line. TAKE it!", beerMoney);
var ClubTT = new location (5, "Club 33", "You reach Club 33, the up and coming alternative to Union. Only upside is they're offering FREE BEER! TAKE the beer!", beer);
var Gias = new location (6, "Gias", "You guys take a quick stop at Gia's Pizza, one of the finest in Poughkeepsie. TAKE your pizza!", pizza);
var Amicis = new location (7, "Amicis", "Great, you guys got denied at River, nice work. You're now waiting for cab outside Amici's.", false);
var BillyBobs = new location (8. "BillyBobs", "You head over to Vassar now to see some of your friends at Billy Bob's, their version of Union to Marist!", false);
var FratHouse = new location (9, "Frat House", "You stop by the frat house, where the party gets shut down and dispersed two hours in.", false);
//Array for locations
var location = [UpperNew,Darbys,Donnelly,Union,RiverStation,ClubTT,Gias,Amicis,BillyBobs,FratHouse]
//
/* for loop







*/
//Items protoype
function item (id, name, desc) {
	this.id = id;
	this.name = name;
	this.desc = desc;
	this.taken = false;
	function toString() {
		return desc;
	}
}
//Declaring items (Id,name,desc. of item)
var beer = new item (0, "Beer", "This Bud Light is Rocky Mountain Cold!");
var pizza = new item (1, "Pizza", "Gia's pizza is the freaking BOMB!");
var beerMoney = new item (2, "Beer Money", "Sweet! Five Dollars!");
//Array for items
var items = [beer,pizza,beerMoney]
//
//






//function MoveTime()
function MoveTime() {
	