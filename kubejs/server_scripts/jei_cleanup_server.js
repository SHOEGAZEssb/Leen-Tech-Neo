// priority: 100

// global storage for items to hide in JEI (shared with client)
if (!global.itemsToHideInJei) global.itemsToHideInJei = []

function hideAndTrack(id) {
  if (!global.itemsToHideInJei.includes(id)) {
    global.itemsToHideInJei.push(id)
  }
}

function removeRecipesByItemIdPrefix(event, keyword) {
  var items = Ingredient.all.itemIds.filter(id => id.startsWith(keyword))
  items.forEach(id => {
    event.remove({ input: id })
    event.remove({ output: id })
    hideAndTrack(id)
  })
}

function removeRecipesByItemIdWildcard(event, pattern, exclusions) {
  if (!exclusions) exclusions = []
  var regex = new RegExp("^" + pattern.replace(/\*/g, ".*") + "$")
  var items = Ingredient.all.itemIds.filter(id => regex.test(id))
  items.forEach(id => {
    if (exclusions.includes(id))
      return // skip excluded IDs
    event.remove({ input: id })
    event.remove({ output: id })
    hideAndTrack(id)
  })
}

function removeRecipesByItemId(event, id) {
  event.remove({ input: id })
  event.remove({ output: id })
  hideAndTrack(id)
}

function removeRecipesByItemTag(event, tag) {
  event.remove({ input: tag })
  event.remove({ output: tag })
}

function removeRecipesByRecipeId(event, recipeId) {
  event.remove({ id: recipeId })
  // recipeId != itemId, so nothing to hide here
}

ServerEvents.recipes(event => {
  // ae2
  removeRecipesByItemIdPrefix(event, "ae2:facade")
  removeRecipesByItemTag(event, "#ae2:facade")
  event.remove({input: "ae2:cable_anchor", output: "ae2:facade"})

  // alexs caves exemplified
  removeRecipesByItemId(event, "alexscavesexemplified:acewiki")

  // alexs mobs
  removeRecipesByItemId(event, "alexsmobs:animal_dictionary")

  // ambient additions
  removeRecipesByItemId(event, "ambientadditions:blowgun")
  removeRecipesByItemId(event, "ambientadditions:chocolate_chip_starfish_bucket")
  removeRecipesByItemId(event, "ambientadditions:dart")
  removeRecipesByItemId(event, "ambientadditions:starfish_arm")

  // atmospheric
  removeRecipesByItemId(event, "atmospheric:arid_sprouts")

  // biomes o plenty
  removeRecipesByItemIdWildcard(event, "biomesoplenty:*maple*", ["biomesoplenty:yellow_maple_leaf_pile", "biomesoplenty:yellow_maple_leaves", "biomesoplenty:yellow_maple_sapling"])
  removeRecipesByItemIdWildcard(event, "biomesoplenty:*redwood*")
  removeRecipesByItemId(event, "biomesoplenty:algal_end_stone")
  removeRecipesByItemId(event, "biomesoplenty:anomaly")
  removeRecipesByItemId(event, "biomesoplenty:barley")
  removeRecipesByItemId(event, "biomesoplenty:barnacles")
  removeRecipesByItemId(event, "biomesoplenty:cattail")
  removeRecipesByItemId(event, "biomesoplenty:cypress_leaves")
  removeRecipesByItemId(event, "biomesoplenty:cypress_sapling")
  removeRecipesByItemId(event, "biomesoplenty:dried_salt")
  removeRecipesByItemId(event, "biomesoplenty:enderphyte")
  removeRecipesByItemId(event, "biomesoplenty:huge_lily_pad")
  removeRecipesByItemId(event, "biomesoplenty:null_block")
  removeRecipesByItemId(event, "biomesoplenty:null_end_stone")
  removeRecipesByItemId(event, "biomesoplenty:null_leaves")
  removeRecipesByItemId(event, "biomesoplenty:null_plant")
  removeRecipesByItemId(event, "biomesoplenty:spanish_moss")
  removeRecipesByItemId(event, "biomesoplenty:spanish_moss_plant")
  removeRecipesByItemId(event, "biomesoplenty:thermal_calcite")
  removeRecipesByItemId(event, "biomesoplenty:thermal_calcite_vent")
  removeRecipesByItemId(event, "biomesoplenty:tiny_cactus")
  removeRecipesByItemId(event, "biomesoplenty:unmapped_end_stone")
  removeRecipesByItemId(event, "biomesoplenty:wispjelly")

  // blue skies
  removeRecipesByItemId(event, "blue_skies:venison")
  removeRecipesByItemId(event, "blue_skies:cooked_venison")

  // call of yucatan
  removeRecipesByItemId(event, "call_of_yucutan:blow_gun")
  removeRecipesByItemId(event, "call_of_yucutan:poisonous_dart")

  // create: steam n rails
  removeRecipesByItemId(event, "railways:track_twilightforest_mangrove")
  removeRecipesByItemId(event, "railways:track_twilightforest_mangrove_narrow")
  removeRecipesByItemId(event, "railways:track_twilightforest_mangrove_wide")

  // environmental
  removeRecipesByItemIdWildcard(event, "environmental:*pine*")
  removeRecipesByItemIdWildcard(event, "environmental:*willow*")

  // exotic birds
  removeRecipesByItemId(event, "exoticbirds:bird_book")
  removeRecipesByItemId(event, "exoticbirds:bluejay_egg")
  removeRecipesByItemId(event, "exoticbirds:duck_egg")
  removeRecipesByItemId(event, "exoticbirds:eggshell")
  removeRecipesByItemId(event, "exoticbirds:gull_egg")
  removeRecipesByItemId(event, "exoticbirds:hummingbird_egg")
  removeRecipesByItemId(event, "exoticbirds:hummingbird_feeder")
  removeRecipesByItemId(event, "exoticbirds:penguin_egg")
  removeRecipesByItemId(event, "exoticbirds:roadrunner_egg")
  removeRecipesByItemId(event, "exoticbirds:toucan_egg")

  // farmers delight
  removeRecipesByItemId(event, "farmersdelight:rope")

  // grimoire of gaia
  removeRecipesByItemId(event, "grimoireofgaia:projectile_bomb")
  removeRecipesByItemId(event, "grimoireofgaia:bone_shield")
  removeRecipesByItemId(event, "grimoireofgaia:weapon_book")
  removeRecipesByItemId(event, "grimoireofgaia:weapon_book_battle")
  removeRecipesByItemId(event, "grimoireofgaia:weapon_book_hunger")
  removeRecipesByItemId(event, "grimoireofgaia:book_of_memory")
  removeRecipesByItemId(event, "grimoireofgaia:weapon_book_nature")
  removeRecipesByItemId(event, "grimoireofgaia:weapon_book_wither")
  removeRecipesByItemId(event, "grimoireofgaia:bag_book")
  removeRecipesByItemId(event, "grimoireofgaia:broom")
  removeRecipesByItemId(event, "grimoireofgaia:projectile_bubble")
  removeRecipesByItemId(event, "grimoireofgaia:cave_spider_staff")
  removeRecipesByItemId(event, "grimoireofgaia:weapon_book_buff")
  removeRecipesByItemId(event, "grimoireofgaia:spawn_creeper_girl")
  removeRecipesByItemId(event, "grimoireofgaia:experience_iron")
  removeRecipesByItemId(event, "grimoireofgaia:experience_gold")
  removeRecipesByItemId(event, "grimoireofgaia:experience_diamond")
  removeRecipesByItemId(event, "grimoireofgaia:cursed_metal_sword")
  removeRecipesByItemId(event, "grimoireofgaia:box_diamond")
  removeRecipesByItemId(event, "grimoireofgaia:diamond_shard")
  removeRecipesByItemId(event, "grimoireofgaia:chest_dungeon")
  removeRecipesByItemId(event, "grimoireofgaia:box_egg")
  removeRecipesByItemId(event, "grimoireofgaia:weapon_book_ender")
  removeRecipesByItemId(event, "grimoireofgaia:spawn_ender_girl")
  removeRecipesByItemId(event, "grimoireofgaia:weapon_book_freezing")
  removeRecipesByItemId(event, "grimoireofgaia:fur")
  removeRecipesByItemId(event, "grimoireofgaia:box_gold")
  removeRecipesByItemId(event, "grimoireofgaia:gold_shield")
  removeRecipesByItemId(event, "grimoireofgaia:golden_apple_pie")
  removeRecipesByItemId(event, "grimoireofgaia:golden_apple_pie_slice")
  removeRecipesByItemId(event, "grimoireofgaia:fan")
  removeRecipesByItemId(event, "grimoireofgaia:giga_gear")
  removeRecipesByItemId(event, "grimoireofgaia:heavy_barbell")
  removeRecipesByItemId(event, "grimoireofgaia:holstaurus_token")
  removeRecipesByItemId(event, "grimoireofgaia:honeydew")
  removeRecipesByItemId(event, "grimoireofgaia:box_iron")
  removeRecipesByItemId(event, "grimoireofgaia:iron_shield")
  removeRecipesByItemId(event, "grimoireofgaia:chest_jungle")
  removeRecipesByItemId(event, "grimoireofgaia:knuckles")
  removeRecipesByItemId(event, "grimoireofgaia:projectile_magic")
  removeRecipesByItemId(event, "grimoireofgaia:magic_staff")
  removeRecipesByItemId(event, "grimoireofgaia:mandrake")
  removeRecipesByItemId(event, "grimoireofgaia:meat")
  removeRecipesByItemId(event, "grimoireofgaia:weapon_book_metal")
  removeRecipesByItemId(event, "grimoireofgaia:metal_club")
  removeRecipesByItemId(event, "grimoireofgaia:metal_dagger")
  removeRecipesByItemId(event, "grimoireofgaia:minotaur_hammer")
  removeRecipesByItemId(event, "grimoireofgaia:monster_feed")
  removeRecipesByItemId(event, "grimoireofgaia:box_nether")
  removeRecipesByItemId(event, "grimoireofgaia:nether_wart_jam")
  removeRecipesByItemId(event, "grimoireofgaia:weapon_book_nightmare")
  removeRecipesByItemId(event, "grimoireofgaia:box_old")
  removeRecipesByItemId(event, "grimoireofgaia:box_overworld")
  removeRecipesByItemId(event, "grimoireofgaia:projectile_poison")
  removeRecipesByItemId(event, "grimoireofgaia:chest_desert")
  removeRecipesByItemId(event, "grimoireofgaia:projectile_random_magic")
  removeRecipesByItemId(event, "grimoireofgaia:ring_of_haste")
  removeRecipesByItemId(event, "grimoireofgaia:ring_of_jump")
  removeRecipesByItemId(event, "grimoireofgaia:ring_of_night")
  removeRecipesByItemId(event, "grimoireofgaia:ring_of_speed")
  removeRecipesByItemId(event, "grimoireofgaia:rotten_heart")
  removeRecipesByItemId(event, "grimoireofgaia:bag_arrows")
  removeRecipesByItemId(event, "grimoireofgaia:seashell_hairpin")
  removeRecipesByItemId(event, "grimoireofgaia:shiny_pearl")
  removeRecipesByItemId(event, "grimoireofgaia:skeleton_staff")
  removeRecipesByItemId(event, "grimoireofgaia:spawn_slime_girl")
  removeRecipesByItemId(event, "grimoireofgaia:stone_coal")
  removeRecipesByItemId(event, "grimoireofgaia:stone_shield")
  removeRecipesByItemId(event, "grimoireofgaia:taproot")
  removeRecipesByItemId(event, "grimoireofgaia:totem_of_undying_fragment")
  removeRecipesByItemId(event, "grimoireofgaia:spawn_trader")
  removeRecipesByItemId(event, "grimoireofgaia:trader_token")
  removeRecipesByItemId(event, "grimoireofgaia:projectile_web")
  removeRecipesByItemId(event, "grimoireofgaia:weresheep_token")
  removeRecipesByItemId(event, "grimoireofgaia:withered_brain")
  removeRecipesByItemId(event, "grimoireofgaia:zombie_staff")

  // monsters&girls secrets of mermaid
  removeRecipesByItemId(event, "mg_secrets_of_mermaids:cooked_crab_meat")
  removeRecipesByItemId(event, "mg_secrets_of_mermaids:crab_burger")
  removeRecipesByItemId(event, "mg_secrets_of_mermaids:green_crab_armor_boots")
  removeRecipesByItemId(event, "mg_secrets_of_mermaids:green_crab_armor_chestplate")
  removeRecipesByItemId(event, "mg_secrets_of_mermaids:green_crab_armor_helmet")
  removeRecipesByItemId(event, "mg_secrets_of_mermaids:green_crab_armor_leggings")
  removeRecipesByItemId(event, "mg_secrets_of_mermaids:green_crab_shell")
  removeRecipesByItemId(event, "mg_secrets_of_mermaids:lime_crab_armor_boots")
  removeRecipesByItemId(event, "mg_secrets_of_mermaids:lime_crab_armor_chestplate")
  removeRecipesByItemId(event, "mg_secrets_of_mermaids:lime_crab_armor_helmet")
  removeRecipesByItemId(event, "mg_secrets_of_mermaids:lime_crab_armor_leggings")
  removeRecipesByItemId(event, "mg_secrets_of_mermaids:lime_crab_shell")
  removeRecipesByItemId(event, "mg_secrets_of_mermaids:purple_crab_armor_boots")
  removeRecipesByItemId(event, "mg_secrets_of_mermaids:purple_crab_armor_chestplate")
  removeRecipesByItemId(event, "mg_secrets_of_mermaids:purple_crab_armor_helmet")
  removeRecipesByItemId(event, "mg_secrets_of_mermaids:purple_crab_armor_leggings")
  removeRecipesByItemId(event, "mg_secrets_of_mermaids:purple_crab_shell")
  removeRecipesByItemId(event, "mg_secrets_of_mermaids:violet_crab_armor_boots")
  removeRecipesByItemId(event, "mg_secrets_of_mermaids:violet_crab_armor_chestplate")
  removeRecipesByItemId(event, "mg_secrets_of_mermaids:violet_crab_armor_helmet")
  removeRecipesByItemId(event, "mg_secrets_of_mermaids:violet_crab_armor_leggings")
  removeRecipesByItemId(event, "mg_secrets_of_mermaids:violet_crab_shell")
  removeRecipesByItemId(event, "mg_secrets_of_mermaids:of_mermaids_and_other_sea_monsters")
  removeRecipesByItemId(event, "mg_secrets_of_mermaids:pearl")
  removeRecipesByItemId(event, "mg_secrets_of_mermaids:pearl_shovel")
  removeRecipesByItemId(event, "mg_secrets_of_mermaids:raw_crab_meat")

  // more critters
  removeRecipesByItemId(event, "more_critters:critter_atlas")
  removeRecipesByItemId(event, "more_critters:frightshroom_spawn_doll")
  removeRecipesByItemId(event, "more_critters:fungal_zombie_spawn_doll")
  removeRecipesByItemId(event, "more_critters:nightshroom_spawn_doll")

  // mowzies mobs
  removeRecipesByItemId(event, "mowziesmobs:mob_remover")

  // productive bees
  removeRecipesByItemId(event, "productivebees:advanced_biomesoplenty_redwood_beehive")
  removeRecipesByItemId(event, "productivebees:expansion_box_biomesoplenty_redwood")
  removeRecipesByItemId(event, "productivebees:advanced_regions_unexplored_dead_beehive")
  removeRecipesByItemId(event, "productivebees:expansion_box_regions_unexplored_dead")
  removeRecipesByItemId(event, "productivebees:advanced_regions_unexplored_palm_beehive")
  removeRecipesByItemId(event, "productivebees:expansion_box_regions_unexplored_palm")
  removeRecipesByItemId(event, "productivebees:advanced_regions_unexplored_willow_beehive")
  removeRecipesByItemId(event, "productivebees:expansion_box_regions_unexplored_willow")

  // rainbow reef
  removeRecipesByItemIdWildcard(event, "rainbowreef:*starfish")
  removeRecipesByItemId(event, "rainbowreef:raw_angelfish")
  removeRecipesByItemId(event, "rainbowreef:raw_basslet")
  removeRecipesByItemId(event, "rainbowreef:raw_butterflyfish")
  removeRecipesByItemId(event, "rainbowreef:raw_clownfish")
  removeRecipesByItemId(event, "rainbowreef:crab_meat")
  removeRecipesByItemId(event, "rainbowreef:raw_dwarf_angelfish")
  removeRecipesByItemId(event, "rainbowreef:raw_goby")
  removeRecipesByItemId(event, "rainbowreef:raw_moorish_idol")
  removeRecipesByItemId(event, "rainbowreef:raw_tang")

  // regions unexplored
  removeRecipesByItemIdWildcard(event, "regions_unexplored:*_branch")

  removeRecipesByItemIdPrefix(event, "regions_unexplored:alpha_")
  removeRecipesByItemId(event, "regions_unexplored:apple_oak_leaves")
  removeRecipesByItemId(event, "regions_unexplored:apple_oak_sapling")
  removeRecipesByItemId(event, "regions_unexplored:ashen_log")
  removeRecipesByItemId(event, "regions_unexplored:ashen_wood")
  removeRecipesByItemIdWildcard(event, "regions_unexplored:*dead*")
  removeRecipesByItemIdWildcard(event, "regions_unexplored:*maple*", ["regions_unexplored:maple_shrub", "regions_unexplored:red_maple_shrub", "regions_unexplored:orange_maple_shrub"]);
  removeRecipesByItemIdWildcard(event, "regions_unexplored:*palm*")
  removeRecipesByItemIdWildcard(event, "regions_unexplored:*willow*")

  removeRecipesByItemId(event, "regions_unexplored:barrel_cactus")
  removeRecipesByItemTag(event, "regions_unexplored:cattail")
  removeRecipesByItemId(event, "regions_unexplored:clover")
  removeRecipesByItemId(event, "regions_unexplored:sandy_grass")
  removeRecipesByItemId(event, "regions_unexplored:sandy_tall_grass")
  removeRecipesByItemId(event, "regions_unexplored:volcanic_ash")

  // seafarer
  removeRecipesByItemId(event, "seafarer:cooked_shore_crab_leg")
  removeRecipesByItemId(event, "seafarer:shore_crab_leg")

  // supplementaries
  removeRecipesByItemId(event, "supplementaries:biomesoplenty/sign_post_maple")
  removeRecipesByItemId(event, "supplementaries:biomesoplenty/sign_post_redwood")
  removeRecipesByItemId(event, "supplementaries:environmental/sign_post_pine")
  removeRecipesByItemId(event, "supplementaries:environmental/sign_post_willow")
  removeRecipesByItemId(event, "supplementaries:quark/sign_post_azalea")
  removeRecipesByItemId(event, "supplementaries:regions_unexplored/sign_post_alpha")
  removeRecipesByItemId(event, "supplementaries:regions_unexplored/sign_post_dead")
  removeRecipesByItemId(event, "supplementaries:regions_unexplored/sign_post_palm")
  removeRecipesByItemId(event, "supplementaries:regions_unexplored/sign_post_maple")
  removeRecipesByItemId(event, "supplementaries:regions_unexplored/sign_post_willow")
  removeRecipesByItemId(event, "supplementaries:twilightforest/sign_post_mangrove")

  // the aether
  removeRecipesByItemId(event, "aether:candy_cane")
  removeRecipesByItemId(event, "aether:candy_cane_sword")
  removeRecipesByItemId(event, "aether:gingerbread_man")

  // the twilight forest
  removeRecipesByItemIdWildcard(event, "twilightforest:*mangrove*")
  removeRecipesByItemId(event, "twilightforest:huge_lily_pad")
  removeRecipesByItemId(event, "twilightforest:clover_patch")
  removeRecipesByItemId(event, "twilightforest:raw_venison")
  removeRecipesByItemId(event, "twilightforest:transformation_powder")
  removeRecipesByItemId(event, "twilightforest:cooked_venison")

  // vanilla
  removeRecipesByItemId(event, "minecraft:tropical_fish_bucket")
  removeRecipesByItemId(event, "minecraft:torchflower")
})