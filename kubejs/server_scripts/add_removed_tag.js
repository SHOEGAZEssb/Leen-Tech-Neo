ServerEvents.tags("block", event => {
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