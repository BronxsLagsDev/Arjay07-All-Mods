/*Mod School*/

Block.defineBlock(180, "Awesome", [["iron_block", 0], ["gold_block", 0], ["diamond_block", 0], ["redstone_block", 0], ["redstone_block", 0], ["emerald_block", 0]]);
Block.setLightLevel(180, 15);
Block.setDestroyTime(180, 0.05);

function destroyBlock(x, y, z){
	
var blockId = Level.getTile(x, y, z);

if(blockId == 180){
	
preventDefault();
Level.destroyBlock(x, y, z, true);

}

}