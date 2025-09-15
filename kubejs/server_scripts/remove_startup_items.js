PlayerEvents.loggedIn(event => {
  var player = event.player

  if (!player.persistentData.contains("gotBookRemoved")) {
    // delay 5 ticks (5 × 1/20 sec)
    event.server.scheduleInTicks(150, () => {
      player.inventory.clear(Item.of("ars_nouveau:worn_notebook"))
      player.inventory.clear(Item.of("mg_secrets_of_mermaids:of_mermaids_and_other_sea_monsters"))
      player.persistentData.putBoolean("gotBookRemoved", true)
      console.log("removed startup items")
    })
  }
})
