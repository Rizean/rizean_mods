module.exports = function drop_flirt_submissive(scene, Target, isWearingUnderwear, playerPerversionScore) {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene
    // drop_flirt_submissive submissive non-resistances
    narrative("Encouraged by lack of my resistances they slid their hand into my bottoms.")
    if (isWearingUnderwear) {
        narrative("In a matter of seconds I feel their hand at the edge of my underwear!")
    } else {
         Target.dialogue("You're quite the little slut, aren't you?", 'Flirty')

        if (Player.perversion < 50) {
            narrative("I blush and look a way.")
            Player.dialogue("Um, I don't know what came over me.", 'Embarrassed')
        } else {
            Player.dialogue("Mmm, only for someone like you.", 'Flirty')
        }
    }
    option([
        {text: "This has gone to far.", condition: Player.perversion < 50},
        {text: "Stop this before it goes too far."},
        {text: "Ignore", condition: Player.perversion > 50},
        {text: "Meekly 'try' to stop them and 'fail'", condition: Player.perversion > 50},
        {text: "Encourage them to keep going", condition: playerPerversionScore > 150},
    ])


    // todo

    scene.timeout(600, "rizean_cnc_dropFlirt")
}