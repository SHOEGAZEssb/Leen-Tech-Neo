ServerEvents.highPriorityData(event => {
  console.log("Patching ad astra meteorite spawn...")

  event.addJson('ad_astra:tags/worldgen/biome/has_structure/meteor_biomes', {
    "replace": true,
    "values": [
    ]
  })
})
