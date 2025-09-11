ServerEvents.highPriorityData(event => {
  console.log("Patching AE2 meteorite spawn...")

  // --- Biome control ---
  // Replace the biome tag with only the biomes you want
  event.addJson('ae2:tags/worldgen/biome/has_meteorites', {
    "replace": true,
    "values": [
      "ad_astra:lunar_wastelands"
    ]
  })

  // --- Rarity control ---
  // Override the structure set
  event.addJson('ae2:worldgen/structure_set/meteorite', {
    "structures": [
      {
        "structure": "ae2:meteorite",
        "weight": 1
      }
    ],
    "placement": {
      "type": "minecraft:random_spread",
      "salt": 124895654,
      "spacing": 32,   // average distance between meteorites (bigger = rarer)
      "separation": 8  // minimum distance (must be < spacing)
    }
  })
})
