ServerEvents.highPriorityData(event => {
  console.log("Patching AE2 meteorite spawn...")

  event.addJson('ad_astra:tags/worldgen/biome/has_structure/meteor_biomes', {
    "replace": true,
    "values": [
    ]
  })
})
