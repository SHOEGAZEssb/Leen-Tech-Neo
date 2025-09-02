function removeRecipesByPrefix(event, keyword) {
  var items = Ingredient.all.itemIds.filter(id => id.startsWith(keyword));
  items.forEach(id => {
    event.remove({ input: id });
    event.remove({ output: id });
  });
}

function removeRecipesById(event, id) {
  event.remove({ input: id });
  event.remove({ output: id });
}

ServerEvents.recipes(event => {
  // ae2
  removeRecipesByPrefix(event, "ae2:facade")

  // biomes o plenty
  removeRecipesByPrefix(event, "biomesoplenty:redwood")
  removeRecipesById(event, "biomesoplenty:stripped_redwood_wood");
  removeRecipesById(event, "biomesoplenty:stripped_redwood_log");
  removeRecipesById(event, "biomesoplenty:spanish_moss")
  removeRecipesById(event, "biomesoplenty:spanish_moss_plant")

  // mekanism
  removeRecipesById(event, "mekanism:uranium_ore");
  removeRecipesById(event, "mekanism:deepslate_uranium_ore");

  // productive bees
  removeRecipesById(event, "productivebees:advanced_biomesoplenty_redwood_beehive")
  removeRecipesById(event, "productivebees:expansion_box_biomesoplenty_redwood")

  // supplementaries
  removeRecipesById(event, "supplementaries:biomesoplenty/sign_post_redwood")
})