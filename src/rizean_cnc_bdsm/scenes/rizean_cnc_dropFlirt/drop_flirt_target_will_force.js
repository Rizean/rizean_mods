module.exports = function drop_flirt_target_will_force({scene, Target, isPublic, growthRate, arousalBonus}) {
    const {Player, none, $WHERE, narrative, option, random, WHEN, noneActor} = scene
    // player is resistance and target will force

    let temp = scene.getPersonHere()
    let opportunist0 = noneActor()
    let opportunist1 = noneActor()
    let opportunist2 = noneActor()
    let opportunist3 = noneActor()
    let opportunistCount = 0
    let martialTotal = Target.martial
    let shouldStop = false
    let hero = noneActor()
    while (temp.isValid() && !shouldStop) {
        if (temp.masochist < -50) {
            if (opportunistCount === 0) {
                opportunist0 = temp.copy()
                opportunistCount += 1
                martialTotal += temp.martial
            } else if (opportunistCount === 1) {
                opportunist1 = temp.copy()
                opportunistCount += 1
                martialTotal += temp.martial
            } else if (opportunistCount === 2) {
                opportunist2 = temp.copy()
                opportunistCount += 1
                martialTotal += temp.martial
            } else if (opportunistCount === 3) {
                opportunist3 = temp.copy()
                opportunistCount += 1
                martialTotal += temp.martial
            } else {
                temp.hide()
            }
        } else {
            if (temp.isMale() && temp.martial > martialTotal + opportunistCount) {
                shouldStop = true
                hero = temp.copy()
                let total = opportunistCount + 1
                if (total > 1) {
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
                } else {
                    narrative("One dude steps up in my defense against my attacker.")
                    narrative("My attacker takes one look at him and decided it's not worth it and leaves.")
                    Target.hide()
                }
            } else {
                temp.hide()
            }
        }
    }
    if (hero.isValid()) {
        scene.lpMod.getFunction('dropFlirt_heroSpoils')({scene, hero})
    } else if (opportunistCount > 0) {
        scene.lpMod.getFunction('dropFlirt_groupCNC')({scene, Target, opportunist0, opportunist1, opportunist2, opportunist3})
    } else {
        scene.lpMod.getFunction('dropFlirt_soloCNC')({scene, Target})
    }

}