// priority: 100

ServerEvents.recipes(event => {
  // alexs caves ----------------------------------------------------------------------------------
  // nuclear bomb
  event.remove({id: "alexscaves:nuclear_bomb"})

  event.shaped("alexscaves:nuclear_bomb", [
    'ABA',
    'CDC',
    'EBE'
  ], {
    A: "#forge:storage_blocks/iron",
    B: "alexscaves:fissile_core",
    C: "alexscaves:uranium_rod",
    D: "#forge:storage_blocks/uranium",
    E: "enlightened_end:irradium_bar"
  })

  // nuclear furnace component
  event.remove({id: "alexscaves:nuclear_furnace_component"})

  event.shaped(Item.of("alexscaves:nuclear_furnace_component", 2), [
    'ABA',
    'BCB',
    'DBD'
  ], {
    A: "#forge:raw_materials/uranium",
    B: "alexscaves:charred_remnant",
    C: "minecraft:blast_furnace",
    D: "enlightened_end:irradium_bar"
  })

  // Create ---------------------------------------------------------------------------------------
  // rope pulley
  event.remove({ output: "create:rope_pulley" })

  // add back a new one that accepts any forge:ropes
  event.shaped('create:rope_pulley', [
    ' S ',
    ' R ',
    ' G '
  ], {
    S: 'create:andesite_casing',
    R: '#forge:ropes',          // accept anything tagged as rope
    G: '#forge:plates/iron'
  })

  // Create: Steam & Rails ------------------------------------------------------------------------
  // azalea tracks ---
  event.remove({id: "railways:sequenced_assembly/track_quark_azalea"})

  event.recipes.createSequencedAssembly(
    [
      "railways:track_quark_azalea"
    ], // output(s)
    "ecologics:azalea_slab", // input
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

  // Wide azalea Track
  event.remove({ id: "railways:sequenced_assembly/track_quark_azalea_wide" })

  event.recipes.createSequencedAssembly(
    [
      "railways:track_quark_azalea_wide" // final output
    ],
    "railways:track_quark_azalea", // starting input
    [
      // step 1: cut
      event.recipes.createCutting("create:incomplete_track", "create:incomplete_track"),

      // step 2: deploy azalea slab
      event.recipes.createDeploying("create:incomplete_track", [
        "create:incomplete_track",
        "ecologics:azalea_slab"
      ]),

      // step 3: press
      event.recipes.createPressing("create:incomplete_track", "create:incomplete_track")
    ]
  )
  .transitionalItem("create:incomplete_track")
  .loops(1)

  // Narrow azalea Track
  event.remove({ id: "railways:sequenced_assembly/track_quark_azalea_narrow" })

  event.recipes.createSequencedAssembly(
    [
      "railways:track_quark_azalea_narrow" // final output
    ],
    "ecologics:azalea_slab", // starting input
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

  // redwood tracks ---
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

  // farmers delight ------------------------------------------------------------------------------
  // safety net
  event.shapeless("farmersdelight:safety_net", [
    "#forge:ropes",
    "#forge:ropes",
    "#forge:ropes",
    "#forge:ropes",
    "#forge:ropes",
    "#forge:ropes"
  ])

  // Productive Bees ------------------------------------------------------------------------------
  // Advanced Azaela Beehive
  event.remove({ id: "productivebees:hives/advanced_quark_azaela_beehive" })

  event.shaped("productivebees:advanced_quark_azalea_beehive", [
    'SSS',
    'ARA',
    'BSC'
  ], {
    S: "ecologics:azalea_planks",
    R: '#forge:hives',
    A: '#forge:honeycombs',
    B: "#forge:campfires",
    C: "#forge:shears"
  })

  // Azalea Expansion Box
  event.remove({ id: "productivebees:expansion_boxes/expansion_box_quark_azaela" })

  event.shaped("productivebees:expansion_box_quark_azalea", [
    'AAA',
    'ABA',
    'AAA'
  ], {
    A: "ecologics:azalea_planks",
    B: "#forge:honeycombs"
  })

  // Advanced Maple Beehive
  event.remove({ id: "productivebees:hives/advanced_regions_unexplored_maple_beehive" })

  event.shaped("productivebees:advanced_regions_unexplored_maple_beehive", [
    'SSS',
    'ARA',
    'BSC'
  ], {
    S: "blue_skies:maple_planks",
    R: '#forge:hives',
    A: '#forge:honeycombs',
    B: "#forge:campfires",
    C: "#forge:shears"
  })

  // Maple Expansion Box
  event.remove({ id: "productivebees:expansion_boxes/expansion_box_regions_unexplored_maple" })

  event.shaped("productivebees:expansion_box_regions_unexplored_maple", [
    'AAA',
    'ABA',
    'AAA'
  ], {
    A: "blue_skies:maple_planks",
    B: "#forge:honeycombs"
  })

  // regions unexplored ---------------------------------------------------------------------------
  event.shaped("regions_unexplored:ashen_dirt", [
    ' A ',
    'ABA',
    ' A '
  ], {
    A: "#forge:dusts/ash",
    B: "minecraft:dirt"
  })

  event.shaped("regions_unexplored:ashen_dirt", [
    ' A ',
    'ABA',
    ' A '
  ], {
    A: "#forge:dusts/ash",
    B: "regions_unexplored:silt_dirt"
  })

  event.shaped("regions_unexplored:ashen_dirt", [
    ' A ',
    'ABA',
    ' A '
  ], {
    A: "#forge:dusts/ash",
    B: "regions_unexplored:peat_dirt"
  })
})