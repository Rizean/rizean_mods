function dropFlirt_bathRoomGetReady({scene, Target, isWearingBra, isWearingUnderwear, forced}) {
  const {Player, none, $WHERE, narrative, option, random, WHEN} = scene
  let loc = scene.findNearbyBuilding(['bathroom'], "loc")
  Player.moveTo(loc)
  narrative("My fantasy had very quickly turned into a reality. Did I really want it?")
  scene.$if(forced, function () {
      option([{text: "My pussy was dripping wet. There was no doubt I really wanted this!", condition: Player.arousal.gt(60)}, {text: "Yes..."}, {text: "No, but I had gone too far. <Target.He_or_She> was right though, so best I just get it over."}])
  }).$else(function () {
      option([{text: "My pussy was dripping wet. There was no doubt I really wanted this!", condition: Player.arousal.gt(60)}, {text: "Yes..."}])
  }).$endIf()
  scene.$if(scene.$choice(0).or(scene.$choice(1)), function () {
      narrative("I smiled to myself and fixed my makeup.")
      scene.$if(isWearingBra, () => {
          narrative("I slide off my bra giving my nipples a slight squeeze as I do so.")
Player.arousal.addEq(2)
      }).$endIf()
      scene.$if(isWearingUnderwear, () => {
          narrative("I slip out of my panties stroking my swollen clit a few times.")
Player.arousal.addEq(5)
      }).$endIf()
      scene.$if(0, () => {
          narrative("I loosen my clothing up to show off more of my assets.")
      }).$endIf()
      narrative("Giving myself one final once over I head back to <Target.him_or_her>.")
      Player.moveToPerson(Target)
  }).$else(function () {
      narrative("I took a deep breath and resigned myself to my fate.")
      scene.$if(isWearingUnderwear.and(isWearingBra), function () {
          narrative("First slipping my panties off then my bra.")
      }).$else$if(isWearingUnderwear, function () {
              narrative("Slipping my panties off.")
          }).$else(function () {
              narrative("Slipping my bra off.")
          }).$endIf()
      Player.moveToPerson(Target)
  }).$endIf()
}