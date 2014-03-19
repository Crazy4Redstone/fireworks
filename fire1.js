// Firework mod
// Made by Crazy4Redstone

// Items

ModPE.setItem (401,'fireworks',0,'Firework Rocket')
ModPE.setItem (402,'fireworks_charge',0,'Orange Firework Star')
ModPE.setItem (403,'fireworks',0,'Firework Rocket')

// Crafting Recipes

ModPE.addCraftRecipe (401,1,0,[339,0,289,0])
ModPE.addCraftRecipe (402,1,0,[289,0,288,0,351,14])
ModPE.addCraftRecipe (403,1,0,[402,0,339,0])

// Code

function useItem (x,y,z,itemId,blockId,side)
{
  if (itemId == 403 && blockId !== 0 && side == 1)
  {
  setTile (x,y+15,z,11)
  setTile (x-1,y+16,z,11)
  setTile (x+1,y+16,z,11)
  setTile (x,y+16,z-1,11)
  setTile (x,y+16,z+1,11)
  setTile (x,y+17,z,11)
  
  Level.destroyBlock (x,y+15,z)
  Level.destroyBlock (x-1,y+16,z)
  Level.destroyBlock (x+1,y+16,z)
  Level.destroyBlock (x,y+16,z-1)
  Level.destroyBlock (x,y+16,z+1)
  Level.destroyBlock (x,y+17,z)
  }
}  

    
