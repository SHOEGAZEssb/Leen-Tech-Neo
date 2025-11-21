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

  // aether
  hideWildcard(event, "aether:boss_doorway*")
  hideWildcard(event, "aether:*angelic_stone", ["aether:angelic_stone", "aether:light_angelic_stone"])
  hideWildcard(event, "aether:*carved_stone", ["aether:carved_stone"])
  hideWildcard(event, "aether:*hellfire_stone", ["aether:hellfire_stone", "aether:light_hellfire_stone"])
  hideWildcard(event, "aether:*sentry_stone", ["aether:sentry_stone"])
  event.hide("aether:aether_portal_frame")
  event.hide("aether:chest_mimic")

  // aether redux
  hideWildcard(event, "aether_redux:boss_doorway*")
  hideWildcard(event, "aether_redux:*carved_base", ["aether_redux:carved_base"])
  hideWildcard(event, "aether_redux:*carved_pillar", ["aether_redux:carved_pillar"])
  hideWildcard(event, "aether_redux:*sentry_base", ["aether_redux:sentry_base"])
  hideWildcard(event, "aether_redux:*sentry_pillar", ["aether_redux:sentry_pillar"])
  event.hide("aether_redux:locked_polished_sentrite")
  event.hide("aether_redux:locked_runelight")

  // aether: lost content
  hideWildcard(event, "lost_aether_content:*gale_stone", ["lost_aether_content:gale_stone"])

  // blue skies
  event.hide("blue_skies:everbright_portal")
  event.hide("blue_skies:everdawn_portal")

  // deep aether
  hideWildcard(event, "deep_aether:*nimbus_stone", ["deep_aether:nimbus_stone", "deep_aether:light_nimbus_stone"])
  hideWildcard(event, "deep_aether:*nimbus_pillar", ["deep_aether:nimbus_pillar", "deep_aether:light_nimbus_pillar"])

  // display delight
  hideWildcard(event, "displaydelight:*")

  // minecraft
  hideWildcard(event, "minecraft:infested_*")
  event.hide("minecraft:bedrock")
  event.hide("minecraft:end_portal_frame")
  event.hide("minecraft:spawner")
  event.hide("minecraft:reinforced_deepslate")

  // spawn eggs
  hideWildcard(event, "*_spawn_egg")
  hideWildcard(event, "alexscaves:spawn_egg_*")
  hideWildcard(event, "alexsmobs:spawn_egg_*")
  hideWildcard(event, "ars_noveau:*_se")
  hideWildcard(event, "butterflies:spawn_egg_egg_*")

  // species
  event.hide("species:spectralibur_pedestal")

  // twilight forest
  hideWildcard(event, "twilightforest:*boss_spawner")
  hideWildcard(event, "twilightforest:*miniature_structure")
  event.hide("twilightforest:auroralized_glass")
  event.hide("twilightforest:brittle_potion_flask")
  event.hide("twilightforest:candelabra")
  event.hide("twilightforest:cinder_furnace")
  event.hide("twilightforest:cinder_log")
  event.hide("twilightforest:cinder_wood")
  event.hide("twilightforest:cube_of_annihilation")
  event.hide("twilightforest:greater_potion_flask")
  event.hide("twilightforest:keepsake_casket")
  event.hide("twilightforest:ore_meter")
  event.hide("twilightforest:slider")
  event.hide("twilightforest:wrought_iron_fence")
})