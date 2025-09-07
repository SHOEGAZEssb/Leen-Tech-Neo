/**
 * Hide all JEI items matching a wildcard pattern (e.g. "modid:iron_*")
 * @param {JEI.HideEventJS} event
 * @param {string} pattern
 */
function hideWildcard(event, pattern) {
  var regex = new RegExp("^" + pattern.replace(/\*/g, ".*") + "$")
  var items = Ingredient.all.itemIds.filter(id => regex.test(id))
  items.forEach(id => event.hide(id))
}

JEIEvents.hideItems(event => {
  if (global.itemsToHideInJei) {
    global.itemsToHideInJei.forEach(id => event.hide(id))
  }

  // twilight forest
  hideWildcard(event, "twilightforest:*boss_spawner")
  hideWildcard(event, "twilightforest:*miniature_structure")
  event.hide(event, "twilightforest:ore_meter")
  event.hide(event, "twilightforest:slider")
  event.hide("twilightforest:wrought_iron_fence")
})