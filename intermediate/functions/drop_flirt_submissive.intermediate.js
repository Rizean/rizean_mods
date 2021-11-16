function drop_flirt_submissive(scene, Target, isWearingUnderwear, playerPerversionScore) {
  const {Player, none, $WHERE, narrative, option, random, WHEN} = scene
  narrative("Encouraged by lack of my resistances they slid their hand into my bottoms.")
  scene.$if(isWearingUnderwear, function () {
      narrative("In a matter of seconds I feel their hand at the edge of my underwear!")
  }).$else(function () {
      Target.dialogue("You're quite the little slut, aren't you?", 'Flirty')
      scene.$if(Player.perversion.lt(50), function () {
          narrative("I blush and look a way.")
          Player.dialogue("Um, I don't know what came over me.", 'Embarrassed')
      }).$else(function () {
          Player.dialogue("Mmm, only for someone like you.", 'Flirty')
      }).$endIf()
  }).$endIf()
  option([{text: "This has gone to far.", condition: Player.perversion.lt(50)}, {text: "Stop this before it goes too far."}, {text: "Ignore", condition: Player.perversion.gt(50)}, {text: "Meekly 'try' to stop them and 'fail'", condition: Player.perversion.gt(50)}, {text: "Encourage them to keep going", condition: playerPerversionScore.gt(150)}])
  scene.timeout(600, "rizean_cnc_dropFlirt")
}