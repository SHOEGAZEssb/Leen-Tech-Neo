ServerEvents.tags("block", event => {
  console.log("Tag event running. itemsToHideInJei =", global.itemsToHideInJei)
  global.itemsToHideInJei.forEach(id => {
    // remove from all other block tags
    event.removeAllTagsFrom(id)
    // add to our custom removal tag
    event.add("leentechneo:removed", id)
  })

  // log the final contents of the tag
  var removed = event.get("leentechneo:removed").getObjectIds()
  console.log("[Block Tags] leentechneo:removed =", removed)
})

ServerEvents.tags("item", event => {
  console.log("Tag event running. itemsToHideInJei =", global.itemsToHideInJei)
  global.itemsToHideInJei.forEach(id => {
    // remove from all other item tags
    event.removeAllTagsFrom(id)
    // add to our custom removal tag
    event.add("leentechneo:removed", id)
  })

  // log the final contents of the tag
  var removed = event.get("leentechneo:removed").getObjectIds()
  console.log("[Item Tags] leentechneo:removed =", removed)
})