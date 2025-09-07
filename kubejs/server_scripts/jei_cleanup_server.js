// global storage for items to hide in JEI (shared with client)
if (!global.itemsToHideInJei) global.itemsToHideInJei = []

function hideAndTrack(id) {
  if (!global.itemsToHideInJei.includes(id)) {
    global.itemsToHideInJei.push(id)
  }
}

function removeRecipesByItemIdPrefix(event, keyword) {
  var items = Ingredient.all.itemIds.filter(id => id.startsWith(keyword))
  items.forEach(id => {
    event.remove({ input: id })
    event.remove({ output: id })
    hideAndTrack(id)
  })
}

function removeRecipesByItemIdWildcard(event, pattern, exclusions) {
  if (!exclusions) exclusions = []
  var regex = new RegExp("^" + pattern.replace(/\*/g, ".*") + "$")
  var items = Ingredient.all.itemIds.filter(id => regex.test(id))
  items.forEach(id => {
    if (exclusions.includes(id))
      return // skip excluded IDs
    event.remove({ input: id })
    event.remove({ output: id })
    hideAndTrack(id)
  })
}


function removeRecipesByItemId(event, id) {
  event.remove({ input: id })
  event.remove({ output: id })
  hideAndTrack(id)
}

function removeRecipesByItemTag(event, tag) {
  event.remove({ input: tag })
  event.remove({ output: tag })
}

function removeRecipesByRecipeId(event, recipeId) {
  event.remove({ id: recipeId })
  // recipeId != itemId, so nothing to hide here
}

ServerEvents.recipes(event => {
  // ae2
  removeRecipesByItemIdPrefix(event, "ae2:facade")
  removeRecipesByItemTag(event, "#ae2:facade")
  event.remove({input: "ae2:cable_anchor", output: "ae2:facade"})

  // biomes o plenty
  removeRecipesByItemIdWildcard(event, "biomesoplents:*maple*", ["biomesoplenty:yellow_maple_leaf_pile", "biomesoplenty:yellow_maple_leaves", "biomesoplenty:yellow_maple_sapling"])
  removeRecipesByItemIdWildcard(event, "biomesoplenty:*redwood*")
  removeRecipesByItemId(event, "biomesoplenty:spanish_moss")
  removeRecipesByItemId(event, "biomesoplenty:spanish_moss_plant")

  // environmental
  removeRecipesByItemIdWildcard(event, "environmental:*pine*")
  removeRecipesByItemIdWildcard(event, "environmental:*willow*")

  // mekanism
  removeRecipesByItemId(event, "mekanism:uranium_ore")
  removeRecipesByItemId(event, "mekanism:deepslate_uranium_ore")

  // productive bees
  removeRecipesByItemId(event, "productivebees:advanced_biomesoplenty_redwood_beehive")
  removeRecipesByItemId(event, "productivebees:expansion_box_biomesoplenty_redwood")
  removeRecipesByItemId(event, "productivebees:advanced_regions_unexplored_dead_beehive")
  removeRecipesByItemId(event, "productivebees:expansion_box_regions_unexplored_dead")
  removeRecipesByItemId(event, "productivebees:advanced_regions_unexplored_maple_beehive")
  removeRecipesByItemId(event, "productivebees:expansion_box_regions_unexplored_maple")
  removeRecipesByItemId(event, "productivebees:advanced_regions_unexplored_palm_beehive")
  removeRecipesByItemId(event, "productivebees:expansion_box_regions_unexplored_palm")
  removeRecipesByItemId(event, "productivebees:advanced_regions_unexplored_willow_beehive")
  removeRecipesByItemId(event, "productivebees:expansion_box_regions_unexplored_willow")

  // regions unexplored
  removeRecipesByItemIdWildcard(event, "regions_unexplored:*_branch")

  removeRecipesByItemIdPrefix(event, "regions_unexplored:alpha_")
  removeRecipesByItemId(event, "regions_unexplored:apple_oak_leaves")
  removeRecipesByItemId(event, "regions_unexplored:apple_oak_sapling")
  removeRecipesByItemId(event, "regions_unexplored:ashen_log")
  removeRecipesByItemId(event, "regions_unexplored:ashen_wood")
  removeRecipesByItemIdWildcard(event, "regions_unexplored:*dead*")
  removeRecipesByItemIdWildcard(event, "regions_unexplored:*maple*", ["regions_unexplored:maple_shrub", "regions_unexplored:red_maple_shrub", "regions_unexplored:orange_maple_shrub"]);
  removeRecipesByItemIdWildcard(event, "regions_unexplored:*palm*")
  removeRecipesByItemIdWildcard(event, "regions_unexplored:*willow*")

  removeRecipesByItemId(event, "regions_unexplored:clover")

  // supplementaries
  removeRecipesByItemId(event, "supplementaries:biomesoplenty/sign_post_maple")
  removeRecipesByItemId(event, "supplementaries:biomesoplenty/sign_post_redwood")
  removeRecipesByItemId(event, "supplementaries:environmental/sign_post_pine")
  removeRecipesByItemId(event, "supplementaries:environmental/sign_post_willow")
  removeRecipesByItemId(event, "supplementaries:regions_unexplored/sign_post_alpha")
  removeRecipesByItemId(event, "supplementaries:regions_unexplored/sign_post_dead")
  removeRecipesByItemId(event, "supplementaries:regions_unexplored/sign_post_palm")
  removeRecipesByItemId(event, "supplementaries:regions_unexplored/sign_post_maple")
  removeRecipesByItemId(event, "supplementaries:regions_unexplored/sign_post_willow")

  // twilight forest
  removeRecipesByItemIdWildcard(event, "twilightforest:*mangrove*")
})