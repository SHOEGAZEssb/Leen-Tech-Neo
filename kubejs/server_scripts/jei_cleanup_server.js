function removeRecipesByItemIdPrefix(event, keyword) {
  var items = Ingredient.all.itemIds.filter(id => id.startsWith(keyword));
  items.forEach(id => {
    event.remove({ input: id });
    event.remove({ output: id });
  });
}

// remove any recipe where input or output id matches a wildcard pattern
function removeRecipesByItemWildcard(event, pattern) {
  // convert simple wildcard "*" into ".*" for regex
  var regex = new RegExp("^" + pattern.replace(/\*/g, ".*") + "$");

  var items = Ingredient.all.itemIds.filter(id => regex.test(id));
  items.forEach(id => {
    event.remove({ input: id });
    event.remove({ output: id });
  });
}

function removeRecipesByItemId(event, id) {
  event.remove({ input: id });
  event.remove({ output: id });
}

function removeRecipesByRecipeId(event, recipeId) {
  event.remove({ id: recipeId });
}

ServerEvents.recipes(event => {
  // ae2
  removeRecipesByItemIdPrefix(event, "ae2:facade")

  // biomes o plenty
  removeRecipesByItemIdPrefix(event, "biomesoplenty:redwood")
  removeRecipesByItemId(event, "biomesoplenty:stripped_redwood_wood");
  removeRecipesByItemId(event, "biomesoplenty:stripped_redwood_log");
  removeRecipesByItemId(event, "biomesoplenty:spanish_moss")
  removeRecipesByItemId(event, "biomesoplenty:spanish_moss_plant")

  // mekanism
  removeRecipesByItemId(event, "mekanism:uranium_ore");
  removeRecipesByItemId(event, "mekanism:deepslate_uranium_ore");

  // productive bees
  removeRecipesByItemId(event, "productivebees:advanced_biomesoplenty_redwood_beehive")
  removeRecipesByItemId(event, "productivebees:expansion_box_biomesoplenty_redwood")

  // regions unexplored
  removeRecipesByItemWildcard(event, "regions_unexplored:*_branch");

  // supplementaries
  removeRecipesByItemId(event, "supplementaries:biomesoplenty/sign_post_redwood")
})