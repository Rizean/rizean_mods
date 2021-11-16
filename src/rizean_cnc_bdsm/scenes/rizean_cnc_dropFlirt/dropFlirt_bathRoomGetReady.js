module.exports = function dropFlirt_bathRoomGetReady({scene, Target, isWearingBra, isWearingUnderwear, forced}) {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    let loc = scene.findNearbyBuilding(['bathroom'])
    Player.moveTo(loc)
    narrative("My fantasy had very quickly turned into a reality. Did I really want it?")

    if (forced) {
        option([
            {text: "My pussy was dripping wet. There was no doubt I really wanted this!", condition: Player.arousal > 60},
            {text: "Yes..."},
            {text: "No, but I had gone too far. <Target.He_or_She> was right though, so best I just get it over."},
        ])
    } else {
        option([
            {text: "My pussy was dripping wet. There was no doubt I really wanted this!", condition: Player.arousal > 60},
            {text: "Yes..."},
        ])
    }

    if (0 || 1) {
        narrative("I smiled to myself and fixed my makeup.")
        if (isWearingBra) {
            narrative("I slide off my bra giving my nipples a slight squeeze as I do so.")
            Player.arousal += 2
        }
        if (isWearingUnderwear) {
            narrative("I slip out of my panties stroking my swollen clit a few times.")
            Player.arousal += 5
        }
        if (0) {
            narrative("I loosen my clothing up to show off more of my assets.")
        }
        narrative("Giving myself one final once over I head back to <Target.him_or_her>.")
        Player.moveToPerson(Target)
    } else {
        narrative("I took a deep breath and resigned myself to my fate.")
        if (isWearingUnderwear && isWearingBra) {
            narrative("First slipping my panties off then my bra.")
        } else if (isWearingUnderwear) {
            narrative("Slipping my panties off.")
        } else {
            narrative("Slipping my bra off.")
        }

        Player.moveToPerson(Target)
    }
}