// define blacklist with exact IDs or wildcards (*)
var ruBlacklist = [
  "biomesoplenty:*maple*",
  "biomesoplenty:*redwood*",
  "environmental:*pine*",
  "environmental:*willow*",
  "regions_unexplored:*_branch",
  "regions_unexplored:*alpha*",
  "regions_unexplored:ashen_wood",
  "regions_unexplored:ashen_log",
  "regions_unexplored:*dead*",
  "regions_unexplored:*maple*",
  "regions_unexplored:*palm*",
  "regions_unexplored:*willow*"
]

// turn blacklist into regex list
var blacklistRegex = ruBlacklist.map(pattern =>
  new RegExp("^" + pattern.replace(/\*/g, ".*") + "$")
)

// helper: check if id matches any blacklist pattern
function isBlacklisted(id) {
  return blacklistRegex.some(re => re.test(id))
}

function cleanTag(event, type) {
  var tag = event.get("productivebees:flowers/lumber")
  if (tag) {
    var original = tag.getObjectIds().map(o => o.toString())

    var filtered = original.filter(v => !isBlacklisted(v))

    event.removeAll("productivebees:flowers/lumber")
    filtered.forEach(v => event.add("productivebees:flowers/lumber", v))
  }
}

ServerEvents.tags("block", event => cleanTag(event, "block"))
ServerEvents.tags("item", event => cleanTag(event, "item"))