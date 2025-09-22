ServerEvents.tags("worldgen/biome", event => {
  // add multiple
  event.add("mowziesmobs:has_structure/has_mowzie_structure", [
    "blue_skies:snow_covered_pines",
    "blue_skies:rising_creek",
    "biomesoplenty:crag",
    "biomesoplenty:jade_cliffs"
  ])

  var myTag = event.get("mowziesmobs:has_structure/has_mowzie_structure").getObjectIds()
  console.log("[Biome Tags] has_structure/has_mowzie_structure =", myTag)
})