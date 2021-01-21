// Wayne fights program
// Day 5

/*var fightsLk = 1;


function skillLevel(fight){
	var strength = Math.floor(Math.random() * 11);      // returns a random integer from 0 to 10
	console.log("The strength of your opponent is " + strength);
	return strength;
}
function wayne(fight){
	var strength = 3 + Math.floor(Math.random() * 11);
	console.log("The strength of Wayne is " + strength);
	return strength;
}

var wayneSkill;
var challengerSkill;

while (fightsLk < 21){
	wayneSkill = wayne();
	challengerSkill = skillLevel();
	if (wayneSkill == challengerSkill){
		console.log("TIE!\n");
	}
	else if(wayneSkill < challengerSkill){
		console.log("Skid is the winner!\n");		
	}
	else{
		console.log("Wayne is the winner!\n");
	}
	fightsLk = fightsLk + 1;
}
*/

var fightNum = 1;

var stewart = {
	name : "Stewart",
	skillLevel : 6,
	takeHit : 1,
	stamina : 5,
	friendsWith : stewart
};
var wayne = {
	name : "Wayne",
	skillLevel : 10,
	takeHit : 10,
	stamina : 8,
	friendsWith : sDan
};
var pillBoy = {
	name : "Pillboy",
	skillLevel : 9,
	takeHit : 7,
	stamina : 8
};
var mcmurray = {
	name : "McMurray",
	skillLevel : 6,
	takeHit : 7,
	stamina : 10
};
var sDan = {
	name : "Squirley Dan",
	skillLevel : 7,
	takeHit : 10,
	stamina : 7,
	friendsWith : wayne
};
var pGlen= {
	name : "Pastor Glen",
	skillLevel : 1,
	takeHit : 1,
	stamina : 1
};
var rould= {
	name : "Rould",
	skillLevel : 1,
	takeHit : 1,
	stamina : 1,
	friendsWith : stewart
};

var toughGuys = [stewart, wayne, pillBoy, mcmurray, sDan, pGlen, rould];

function pickFighter(){
	var fighterIndex = Math.floor(Math.random() * 6);
	return toughGuys[fighterIndex];
}

function winner(){
		if (f1.skillLevel > f2.skillLevel){
			if (f1.takeHit > f2.takeHit){
				if (f1.stamina > f2.stamina){
					console.log("The toughest guy in Letterkenny is: " + f1.name + "\n");
				}
			}
		} else {
			console.log("The toughest guy in Letterkenny is: " + f2.name + "\n");
		}
	}

var f1;
var f2;
while (fightNum < 21){

	f1 = pickFighter();
	f2 = pickFighter();

	console.log("Fighter 1:", f1.name);
	console.log("Fighter 2:", f2.name);
	
	if (f1 == f2){
		console.log("You can't fight yourself" + "\n");
	} 
	else if (f1.friendsWith && f2.friendsWith && f1.friendsWith == f2.friendsWith){
		console.log("Let's get a Puppers");
	} else {
		console.log(winner());
	}

	fightNum = fightNum + 1;	
}

