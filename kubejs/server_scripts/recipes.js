// priority: 100

ServerEvents.recipes(event => {
  // Create ---------------------------------------------------------------------------------------
  // rope pulley
  event.remove({ output: "create:rope_pulley" })

  // add back a new one that accepts any forge:ropes
  event.shaped('create:rope_pulley', [
    ' S ',
    ' R ',
    ' G '
  ], {
    S: 'create:andesite_casing',       // or whatever Create uses here
    R: '#forge:ropes',          // accept anything tagged as rope
    G: '#forge:plates/iron'
  })

  // Create: Steam & Rails ------------------------------------------------------------------------
  // redwood tracks
  event.remove({id: "railways:sequenced_assembly/track_biomesoplenty_redwood"})

  event.recipes.createSequencedAssembly(
    [
      "railways:track_biomesoplenty_redwood"
    ], // output(s)
    "regions_unexplored:redwood_slab", // input
    [
      // step 1: deploy iron nugget or zinc nugget
      event.recipes.createDeploying("create:incomplete_track", [
        "create:incomplete_track",
        Ingredient.of(["minecraft:iron_nugget", "create:zinc_nugget"])
      ]),

      // step 2: deploy iron nugget or zinc nugget
      event.recipes.createDeploying("create:incomplete_track", [
        "create:incomplete_track",
        Ingredient.of(["minecraft:iron_nugget", "create:zinc_nugget"])
      ]),

      // step 3: press
      event.recipes.createPressing("create:incomplete_track", "create:incomplete_track")
    ]
  )
  .transitionalItem("create:incomplete_track")
  .loops(1)

  // Wide Redwood Track
  event.remove({ id: "railways:sequenced_assembly/track_biomesoplenty_redwood_wide" })

  event.recipes.createSequencedAssembly(
    [
      "railways:track_biomesoplenty_redwood_wide" // final output
    ],
    "railways:track_biomesoplenty_redwood", // starting input
    [
      // step 1: cut
      event.recipes.createCutting("create:incomplete_track", "create:incomplete_track"),

      // step 2: deploy RU redwood slab
      event.recipes.createDeploying("create:incomplete_track", [
        "create:incomplete_track",
        "regions_unexplored:redwood_slab"
      ]),

      // step 3: press
      event.recipes.createPressing("create:incomplete_track", "create:incomplete_track")
    ]
  )
  .transitionalItem("create:incomplete_track")
  .loops(1)

  // Narrow Redwood Track
  event.remove({ id: "railways:sequenced_assembly/track_biomesoplenty_redwood_narrow" })

  event.recipes.createSequencedAssembly(
    [
      "railways:track_biomesoplenty_redwood_narrow" // final output
    ],
    "regions_unexplored:redwood_slab", // starting input
    [
      // step 1: cut
      event.recipes.createCutting("create:incomplete_track", "create:incomplete_track"),

      // step 2: deploy iron or zinc nugget
      event.recipes.createDeploying("create:incomplete_track", [
        "create:incomplete_track",
        Ingredient.of(["minecraft:iron_nugget", "create:zinc_nugget"])
      ]),

      // step 3: press
      event.recipes.createPressing("create:incomplete_track", "create:incomplete_track")
    ]
  )
  .transitionalItem("create:incomplete_track")
  .loops(1)
})