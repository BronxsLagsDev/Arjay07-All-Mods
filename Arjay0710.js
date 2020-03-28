/*Mod School*/
/*Custom Weapons*/

ModPE.setItem(502, "slimeball", 0, "Ball Of Doom");

function attackHook(attacker,  victim){

if(Player.getCarriedItem() == 502){
	
var dmg = 5;

Entity.setHealth(victim, Entity.getHealth(victim) - dmg);

}

}