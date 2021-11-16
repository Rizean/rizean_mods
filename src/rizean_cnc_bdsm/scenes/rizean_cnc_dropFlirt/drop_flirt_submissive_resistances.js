module.exports = function drop_flirt_submissive_resistances({scene, Target, isWearingBra, isPublic, isWearingUnderwear, willpower, playerPerversionScore, targetWillForce}) {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    narrative(["I weakly try to <Target.his_or_her> hand away from my butt."])
    Target.dialogue("You're not really trying to stop me, are you?", 'Flirty')
    narrative([
        "I feel their hand slowly sliding into my bottoms.",
        "I give <Target.him_or_her> a stern look and use both my hand to 'try' and stop them.",
        "This is what they were waiting for.",
        "With both my hands busy they quickly slide their other hand into my top!",
    ])

    if (isWearingBra) {
        narrative("<Target.He_or_She> pushes my bra up...")
    }
    narrative("...and gives my nipple a hard squeeze!")
    Player.dialogue("Oh! Wh...", 'Surprised')
    narrative("Before I can finish asking 'What the hell they are doing?!?' <Target.He_or_She> leans in are starts making out with me.")
    Player.arousal += Player.masochist / 10

    option([
        {text: "This has gone too far, time to stop this.", condition: Player.arousal < 60},
        {text: "Meekly try to push them away"},
        {text: "Given in", condition: Player.arousal > 60},
    ])
    if (0) { // This has gone too far, time to stop this.
        scene.lpMod.getFunction('dropFlirt_submissiveResistances_toFar')({scene, Target, isWearingBra, isPublic, isWearingUnderwear, willpower, playerPerversionScore, targetWillForce})
    }
    else if (1) {
        // scene.lpMod.getFunction('drop_flirt_submissive_resistances')({scene, Target, isWearingBra, isWearingUnderwear, willpower, isPublic, playerPerversionScore, targetWillForce})
    }
    else if (2) {
        narrative("I melted in to their arms.")
        // todo add more content
        let forced = false
        scene.lpMod.getFunction('drop_flirt_submissive_resistances_give_in')({scene, Target, isWearingBra, isWearingUnderwear, forced})
    }

    scene.timeout(600, "rizean_cnc_dropFlirt")
}