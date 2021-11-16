module.exports = function drop_flirt_base({scene, growthRate, arousalBonus, Target, targetWillForce, playerPerversionScore, isWearingUnderwear, isWearingBra, willpower, isPublic}) {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    narrative("Suddenly, I feel a hand on my butt!")
    option([
        {text: 'This is more than I wanted, push the hand away', condition: playerPerversionScore < 100},
        {text: 'A bit more than I wanted, push the hand away', condition: playerPerversionScore >= 100},
        {text: 'Ignore', condition: playerPerversionScore >= 100},
        {text: "Meekly 'try' to push the hand away and 'fail'", condition: playerPerversionScore >= 100 && Player.masochist > 50},
        {text: 'Um, what do you think your doing?', condition: playerPerversionScore >= 100},
    ])

    if (0 || 1 && !targetWillForce) {
        // resist no forced
        narrative("<Target.He_or_She> seems a bit disappointed but gives me a smile anyways.")
        Player.perversion -= 0.3
        Target.attractionToPlayer -= 0.1
        scene.timeout(10, "rizean_cnc_dropFlirt")
    } else if (0 && isPublic) {
        narrative("<Target.He_or_She> doesn't seem to get the hint and comes on strong.")
        narrative("I struggle to keep <Target.his_or_her> hands off me.")
        if (Target.isFemale()) {
            Player.dialogue('Back the fuck off BITCH!', 'Anger')
        } else {
            Player.dialogue('Get your hands of me you JACKASS!', 'Anger')
        }
        narrative("My outburst draws the attention of others which encourages <Target.him_or_her> to walk away leaving.")
        Target.hide()
        scene.timeout(200, "rizean_cnc_dropFlirt")
    } else if (0 || 1) {
        scene.lpMod.getFunction('drop_flirt_target_will_force')({scene, Target, isPublic, growthRate, arousalBonus})
        scene.timeout(600, "rizean_cnc_dropFlirt")
    } else if (2) {
        scene.lpMod.getFunction('drop_flirt_submissive')(scene, Target, isWearingUnderwear, playerPerversionScore)
    } else if (3) {
        scene.lpMod.getFunction('drop_flirt_submissive_resistances')({scene, Target, isWearingBra, isWearingUnderwear, willpower, isPublic, playerPerversionScore, targetWillForce})
    } else if (4) {
        scene.lpMod.getFunction('drop_flirt_non_submissive')({scene, Target, playerPerversionScore})
        scene.timeout(600, "rizean_cnc_dropFlirt")
    }
}