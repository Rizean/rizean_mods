function drop_flirt_target_will_force({scene, Target, isPublic, growthRate, arousalBonus}) {
  const {Player, none, $WHERE, narrative, option, random, WHEN, noneActor} = scene
  let temp = scene.getPersonHere('', "temp")
  let opportunist0 = noneActor("opportunist0")
  let opportunist1 = noneActor("opportunist1")
  let opportunist2 = noneActor("opportunist2")
  let opportunist3 = noneActor("opportunist3")
  let opportunistCount = scene.float(0, "opportunistCount")
  let martialTotal = Target.martial
  let shouldStop = scene.boolean(false, "shouldStop")
  let hero = noneActor("hero")
  scene.$while(  temp.isValid().and(scene.not(shouldStop)), () => {
          scene.$if(temp.masochist.lt(-50), function () {
          scene.$if(opportunistCount.eq(0), function () {
              opportunist0.assign(              temp.copy(), "opportunist0")
opportunistCount.addEq(1)
martialTotal.addEq(temp.martial)
          }).$else$if(opportunistCount.eq(1), function () {
                  opportunist1.assign(                  temp.copy(), "opportunist1")
opportunistCount.addEq(1)
martialTotal.addEq(temp.martial)
              }).$else$if(opportunistCount.eq(2), function () {
                      opportunist2.assign(                      temp.copy(), "opportunist2")
opportunistCount.addEq(1)
martialTotal.addEq(temp.martial)
                  }).$else$if(opportunistCount.eq(3), function () {
                          opportunist3.assign(                          temp.copy(), "opportunist3")
opportunistCount.addEq(1)
martialTotal.addEq(temp.martial)
                      }).$else(function () {
                          temp.hide()
                      }).$endIf()
      }).$else(function () {
          scene.$if(          temp.isMale().and(temp.martial.gt(martialTotal.add(opportunistCount))), function () {
              shouldStop.assign(true, "shouldStop")
              hero.assign(              temp.copy(), "hero")
              let total = opportunistCount.add(1, "total")
              scene.$if(total.gt(1), function () {
                  narrative("One dude steps up in my defense against <total> others!")
                  narrative("He takes one at the group gathers against me and just smiles.")
                  hero.dialogue('Bring it!', 'Serene')
                  Target.dialogue("Get him!", 'Angry')
                  narrative("My hero doesn't wait for the group to charge.")
                  narrative("He steps over one of my attackers, kicking them in the shin and then slamming his fist into their nose quickly taking the fight out of them.")
                  narrative("My attacker comes up behind my hero thinking to take them by surprise only to be caught off guard when my hero spins around planting an elbow in their face!")
                  narrative("It seems like the fight only just started, but the group is already scattering!")
                  Target.hide()
                  opportunist0.hide()
                  opportunist1.hide()
                  opportunist2.hide()
                  opportunist3.hide()
              }).$else(function () {
                  narrative("One dude steps up in my defense against my attacker.")
                  narrative("My attacker takes one look at him and decided it's not worth it and leaves.")
                  Target.hide()
              }).$endIf()
          }).$else(function () {
              temp.hide()
          }).$endIf()
      }).$endIf()
  })
  scene.$if(  hero.isValid(), function () {
            scene.lpMod.getFunction('dropFlirt_heroSpoils')({scene, hero})
  }).$else$if(opportunistCount.gt(0), function () {
                    scene.lpMod.getFunction('dropFlirt_groupCNC')({scene, Target, opportunist0, opportunist1, opportunist2, opportunist3})
      }).$else(function () {
                    scene.lpMod.getFunction('dropFlirt_soloCNC')({scene, Target})
      }).$endIf()
}