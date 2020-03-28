/*Mod School*/

ModPE.setItem(500, "blaze_rod", 0, "The Stick Of Truth");
Item.addCraftRecipe(500, 1, 0, [264, 1, 0, 265, 1, 0, 266, 1, 0]);
Item.addFurnaceRecipe(266, 500, 1);
Item.setCategory(500, ItemCategory. MATERIAL);