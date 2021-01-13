IDRegistry.genItemID("TeaStick");
Item.createItem("TeaStick", "Tea stick", {name: "teastick"});
//tea lestok
IDRegistry.genBlockID("TeaSeedling");
Block.createBlock("TeaSeedling", [ {name: "саженец чая", texture: [["TeaSeedling", 0]], inCreative: true} ]);
//teabag
IDRegistry.genItemID("tea_bag");
Item.createItem("tea_bag", "Tea bag", {name: "hz"});
Recipes.addShaped({id: ItemID.teabag, count: 4, data: 0}, 
[
   "wwx",
   "ssw",
   "ssw"
   ], ["x", 287, 0, "s", 339, 0]
);
// tea bags
//green
Item.createItem("green_tea_bag", "green tea bag", {name: "teastick"});
//yellow
Item.createItem("yellow_tea_bag", "yellow tea bag", {name: "teastick"});
//black
Item.createItem("black_tea_bag", "black tea bag", {name: "teastick"});
//chaynik

