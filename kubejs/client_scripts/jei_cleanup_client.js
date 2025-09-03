// helper function: hide all items starting with a given prefix
function hideByPrefix(event, prefix) {
  var items = Ingredient.all.itemIds.filter(id => id.startsWith(prefix));
  items.forEach(id => event.hide(id));
}

// helper function: hide all items matching a wildcard pattern
function hideByWildcard(event, pattern) {
  // turn into a regex
  var regex = new RegExp("^" + pattern.replace(/\*/g, ".*") + "$")
  var items = Ingredient.all.itemIds.filter(id => regex.test(id))
  items.forEach(id => event.hide(id))
}

JEIEvents.hideItems(event => {
  // ae2
  event.hide('ae2:facade')

  // biomes o plenty
  event.hide("biomesoplenty:barley")
  event.hide("biomesoplenty:cattail")
  hideByPrefix(event, "biomesoplenty:redwood");
  event.hide("biomesoplenty:stripped_redwood_wood")
  event.hide("biomesoplenty:stripped_redwood_log")
  event.hide("biomesoplenty:spanish_moss")
  event.hide("biomesoplenty:spanish_moss_plant")

  // productive bees
  event.hide("productivebees:advanced_biomesoplenty_redwood_beehive")
  event.hide("productivebees:expansion_box_biomesoplenty_redwood")

  // mekanism
  event.hide('mekanism:uranium_ore')
  event.hide('mekanism:deepslate_uranium_ore')
  event.hide('mekanism:raw_uranium')

  // regions unexplored
  hideByWildcard(event, "regions_unexplored:*_branch")

  // supplementaries
  event.hide("supplementaries:biomesoplenty/sign_post_redwood")
})