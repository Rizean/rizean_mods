module.exports = function drop_flirt_non_submissive({scene, Target, playerPerversionScore}) {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene
    // player doesn't resist but is also not submissive
    narrative("todo drop_flirt_non_submissive - player doesn't resist but is also not submissive")


    Target.dialogue('Exactly what you wanted.', 'Grin')

    narrative("<Target.S> pulls me into a kiss.")
    Target.animatePair(Player, 'Kissing')

    if (Target.attractiveness > 70) {
        narrative("This <Target.dude_or_babe> is fucking hot!")
        narrative("I feel my body melting in <Target.his_or_her> arms.")
        Player.arousal += 5
        narrative("I feel <Target.his_or_her> hands starting to roam again. Should I put a stop to it?")


        // todo this is just a template
        option([
            {text: 'Encourage them'},
            {text: 'A bit more than I wanted, push the hand away', condition: playerPerversionScore >= 100},
            {text: 'Ignore', condition: playerPerversionScore >= 100},
            {text: "Meekly 'try' to push the hand away and 'fail'", condition: playerPerversionScore >= 100 && Player.masochist > 50},
            {text: 'Um, what do you think your doing?', condition: playerPerversionScore >= 100},
        ])
    }
}