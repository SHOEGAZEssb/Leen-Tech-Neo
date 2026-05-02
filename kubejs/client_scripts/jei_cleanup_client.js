/**
 * Hide all JEI items matching a wildcard pattern (e.g. "modid:iron_*")
 * @param {JEI.HideEventJS} event
 * @param {string} pattern
 */
function hideWildcard(event, pattern, exclusions) {
  if (!exclusions) exclusions = []
  var regex = new RegExp("^" + pattern.replace(/\*/g, ".*") + "$")
  var items = Ingredient.all.itemIds.filter(id => regex.test(id))
  items.forEach(id => {
      if (exclusions.includes(id))
        return // skip excluded IDs
      event.hide(id)
    })
}

JEIEvents.hideItems(event => {
  if (global.itemsToHideInJei) {
    global.itemsToHideInJei.forEach(id => event.hide(id))
  }

  // better archeology
  event.hide("betterarcheology:infested_mud_bricks")

  // display delight
  hideWildcard(event, "displaydelight:*")

  // dungeon now loading
  event.hide("dungeonnowloading:dnl_logo")
  event.hide("dungeonnowloading:fairkeeper_spawner")

  // minecraft
  hideWildcard(event, "minecraft:infested_*")
  event.hide("minecraft:air")
  event.hide("minecraft:bedrock")
  event.hide("minecraft:end_portal_frame")
  event.hide("minecraft:fire")
  event.hide("minecraft:spawner")
  event.hide("minecraft:reinforced_deepslate")

  // more sniffer flowers
  hideWildcard(event, "moresnifferflowers:giant_*")

  // opposing force
  event.hide("opposing_force:infested_amethyst_block")

  // spawn eggs
  hideWildcard(event, "*_spawn_egg")
  hideWildcard(event, "alexscaves:spawn_egg_*")
  hideWildcard(event, "alexsmobs:spawn_egg_*")
  hideWildcard(event, "ars_nouveau:*_se")
  hideWildcard(event, "butterflies:spawn_egg_egg_*")
  hideWildcard(event, "dungeonnowloading:spawn_egg_*")
  hideWildcard(event, "productivebees:spawn_egg_*")

  // species
  event.hide("species:spectralibur_pedestal")
})