ServerEvents.recipes(event => {
  // remove all recipes that directly use mekanism uranium ore
  event.remove({ input: 'mekanism:uranium_ore' })
  event.remove({ input: 'mekanism:deepslate_uranium_ore' })
})