module.exports = function drop_flirt_submissive_resistances_toFar({scene, Target, isWearingBra, isPublic, isWearingUnderwear, willpower, playerPerversionScore, targetWillForce}) {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    narrative([
        "I put all my effort into breaking free and finally manage to break away from <Target.his_or_her> kiss.",
        "With tears streaming down my face now."
    ])
    Player.dialogue("Stop, or I'll scream.", 'Scared')

    Target.dialogue("No you won't. You wanted this.", 'Evil')
    Target.dialogue("You're just a submissive little slut who wants to be used.", 'Evil')
    option([
        {text: "<Target.He_or_She>'s is right..."},
        {text: "NO! <Target.He_or_She> was wrong, this had gone too far...", condition: willpower - playerPerversionScore > 50},
    ])

    if (0) { // Target is right
        scene.lpMod.getFunction('drop_flirt_submissive_resistances_give_in')({scene, Target, isPublic, isWearingBra, isWearingUnderwear, playerPerversionScore, targetWillForce})

    } else { // Target is wrong
        scene.lpMod.getFunction('dropFlirt_submissiveResistances_scream')({scene, Target, isPublic, isWearingBra, isWearingUnderwear, playerPerversionScore, targetWillForce})
    }
}