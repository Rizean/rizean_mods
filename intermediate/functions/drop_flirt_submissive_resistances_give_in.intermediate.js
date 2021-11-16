function drop_flirt_submissive_resistances_give_in({scene, Target, isPublic, tempAttractiveness, isWearingBra, isWearingUnderwear, playerPerversionScore, targetWillForce}) {
  const {Player, none, $WHERE, narrative, option, random, WHEN} = scene
  Player.dialogue("What now?", "Shy")
  scene.$if(isWearingUnderwear.or(isWearingBra), () => {
      narrative("<Target.He_or_She> wipes the tears off my face.")
      scene.$if(isPublic, function () {
          Target.dialogue("Go to the bathroom and take off you bra and underwear.")
          Player.dialogue("...")
          Player.dialogue("OK", 'Anxious')
          let forced = scene.boolean(true, "forced")
                    scene.lpMod.getFunction('dropFlirt_bathRoomGetReady')({scene, Target, isWearingBra, isWearingUnderwear, forced})
          narrative("<Target.He_or_She> didn't waste anytime")
      }).$else(function () {
          Target.dialogue("Strip!", 'Angry')
          option([{text: "Make me!", condition: Player.masochist.gt(50)}, {text: "Strip..."}])
          scene.$if(0, function () {
              Target.dialogue("Gladly!", 'Evil')
Target.likes_rough.addEq(1)
Player.masochist.addEq(1)
Player.likes_rough.addEq(1)
              narrative("<Target.He_or_She> storms over and grabs me by my hair!")
              narrative("They rip my clothing off with such force I hear it tearing, and a button goes flying across the room.")
              Player.strip()
              option([{text: "Give in..."}, {text: "Fight back!"}])
              scene.$if(1, () => {
                  narrative("With an effort I nearly break free scratching <Target.him_or_her> in the process.")
                  narrative("They smile at me...")
                  Target.dialogue("This is going to be fun!", 'Evil')
Target.likes_rough.addEq(1)
Player.masochist.addEq(1)
Player.likes_rough.addEq(1)
                  Player.dressBondage('Bdg_Handcuffs')
                  Player.dressBondage('Bdg_Foulard')
              }).$endIf()
              Target.sexCNC(Player)
          }).$else(function () {
              Player.dialogue("Yes <Target.Sir_or_Ma'am>.", 'Anxious')
              narrative("With nervous excitement I start stripping off my clothing.")
              scene.$while(scene.not(              Player.isNaked()), () => {
                                  narrative("Off this goes...")
                  Player.stripOne()
              })
              Target.sexNoAffair(Player)
          }).$endIf()
      }).$endIf()
  }).$endIf()
    scene.lpMod.getFunction('dropFlirt_exchange')({scene, Target, targetWillForce})
  scene.timeout(720, "rizean_cnc_dropFlirt")
}