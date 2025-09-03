var ruBlacklist = [
  "regions_unexplored:acacia_branch",
  "regions_unexplored:baobab_branch",
  "regions_unexplored:birch_branch",
  "regions_unexplored:blackwood_branch",
  "regions_unexplored:cypress_branch",
  "regions_unexplored:cherry_branch",
  "regions_unexplored:dark_oak_branch",
  "regions_unexplored:dead_branch",
  "regions_unexplored:eucalyptus_branch",
  "regions_unexplored:jungle_branch",
  "regions_unexplored:kapok_branch",
  "regions_unexplored:larch_branch",
  "regions_unexplored:mangrove_branch",
  "regions_unexplored:maple_branch",
  "regions_unexplored:mauve_branch",
  "regions_unexplored:oak_branch",
  "regions_unexplored:pine_branch",
  "regions_unexplored:redwood_branch",
  "regions_unexplored:magnolia_branch",
  "regions_unexplored:silver_birch_branch",
  "regions_unexplored:socotra_branch",
  "regions_unexplored:spruce_branch",
  "regions_unexplored:willow_branch"
]

ServerEvents.tags("block", event => {
  var tag = event.get("productivebees:flowers/lumber")
  if (tag) {
    var original = tag.getObjectIds().map(o => o.toString())

    var filtered = original.filter(v => !ruBlacklist.includes(v))

    // clear tag and re-add only filtered values
    event.removeAll("productivebees:flowers/lumber")
    filtered.forEach(v => event.add("productivebees:flowers/lumber", v))
  }
})

ServerEvents.tags("item", event => {
  var tag = event.get("productivebees:flowers/lumber")
  if (tag) {
    var original = tag.getObjectIds().map(o => o.toString())

    var filtered = original.filter(v => !ruBlacklist.includes(v))
    event.removeAll("productivebees:flowers/lumber")
    filtered.forEach(v => event.add("productivebees:flowers/lumber", v))
  }
})
