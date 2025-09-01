ServerEvents.recipes(event => {
  // create ------------------------------------------------------
  
  // Rope Pulley
  // remove the original rope pulley recipe
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
})