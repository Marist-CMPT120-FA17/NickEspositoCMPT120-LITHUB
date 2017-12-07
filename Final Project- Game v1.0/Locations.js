//Locations.js for v1.o
//Nick Esposito
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
var SecretRoom = new loc(10, "Secret Location", "Congrats! You have now entered the SECRET BAR, the most exclusive bar around town! Enjoy the rest of your night!", null, false);
//new secret loc coming soon--STAY TUNED!!!!
//Array for locations
var locations = [UpperNew,Darbys,Donnelly,Union,RiverStation,ClubTT,Gias,Amicis,BillyBobs,FratHouse,SecretRoom]
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