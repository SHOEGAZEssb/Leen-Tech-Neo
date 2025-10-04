var tag = "minecraft:spawns_white_rabbits"

ServerEvents.tags("block", event => {
  var removed = event.get(tag).getObjectIds()
  console.log("[DEBUG Block Tags] " + tag + ":", removed)
})

ServerEvents.tags("item", event => {
  var removed = event.get(tag).getObjectIds()
  console.log("[DEBUG Item Tags] " + tag + ":", removed)
})

ServerEvents.tags("fluid", event => {
  var removed = event.get(tag).getObjectIds()
  console.log("[DEBUG Fluid Tags] " + tag + ":", removed)
})

ServerEvents.tags("entity_type", event => {
  var removed = event.get(tag).getObjectIds()
  console.log("[DEBUG entity_type Tags] " + tag + ":", removed)
})

ServerEvents.tags("worldgen/biome", event => {
  var removed = event.get(tag).getObjectIds()
  console.log("[DEBUG Biome Tags] " + tag + ":", removed)
})

ServerEvents.tags("worldgen/structure", event => {
  var removed = event.get(tag).getObjectIds()
  console.log("[DEBUG Structure Tags] " + tag + ":", removed)
})

ServerEvents.tags("worldgen/configured_feature", event => {
  var removed = event.get(tag).getObjectIds()
  console.log("[DEBUG configured_feature Tags] " + tag + ":", removed)
})

ServerEvents.tags("worldgen/placed_feature", event => {
  var removed = event.get(tag).getObjectIds()
  console.log("[DEBUG placed_feature Tags] " + tag + ":", removed)
})