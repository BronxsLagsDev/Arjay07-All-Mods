/*Mod School*/
/*Sounds*/

function useItem(x, y, z, item, block){
	
if(item == 280){
	
Level.playSound(x, y, z, "random.click", 1, 1);

}

}

function attackHook(a, v){
	
Level.playSoundEnt(v, "random.chestopen", 1, 1);

}