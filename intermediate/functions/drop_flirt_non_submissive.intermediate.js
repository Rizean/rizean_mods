function drop_flirt_non_submissive({scene, Target, playerPerversionScore}) {
  const {Player, none, $WHERE, narrative, option, random, WHEN} = scene
  narrative("todo drop_flirt_non_submissive - player doesn't resist but is also not submissive")
  Target.dialogue('Exactly what you wanted.', 'Grin')
  narrative("<Target.S> pulls me into a kiss.")
  Target.animatePair(Player, 'Kissing')
  scene.$if(Target.attractiveness.gt(70), () => {
      narrative("This <Target.dude_or_babe> is fucking hot!")
      narrative("I feel my body melting in <Target.his_or_her> arms.")
Player.arousal.addEq(5)
      narrative("I feel <Target.his_or_her> hands starting to roam again. Should I put a stop to it?")
      option([{text: 'Encourage them'}, {text: 'A bit more than I wanted, push the hand away', condition: playerPerversionScore.gte(100)}, {text: 'Ignore', condition: playerPerversionScore.gte(100)}, {text: "Meekly 'try' to push the hand away and 'fail'", condition: playerPerversionScore.gte(100).and(Player.masochist.gt(50))}, {text: 'Um, what do you think your doing?', condition: playerPerversionScore.gte(100)}])
  }).$endIf()
}