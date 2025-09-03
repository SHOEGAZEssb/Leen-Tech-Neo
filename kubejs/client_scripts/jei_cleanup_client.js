JEIEvents.hideItems(event => {
  if (global.itemsToHideInJei) {
    global.itemsToHideInJei.forEach(id => event.hide(id))
  }
})