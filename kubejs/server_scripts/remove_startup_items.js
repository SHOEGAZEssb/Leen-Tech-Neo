// server_scripts/remove_annoying_book.js

PlayerEvents.loggedIn(event => {
  var player = event.player

  // only act on *first join*, not every login
  if (!player.persistentData.contains("gotBookRemoved")) {
    player.inventory.clear(Item.of("ars_nouveau:worn_notebook"))
    player.inventory.clear(Item.of("mg_secrets_of_mermaids:of_mermaids_and_other_sea_monsters"))
    player.persistentData.putBoolean("gotBookRemoved", true)
  }
})
