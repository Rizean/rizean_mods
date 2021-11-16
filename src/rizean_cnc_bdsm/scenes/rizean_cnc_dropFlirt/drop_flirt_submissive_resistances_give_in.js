module.exports = function drop_flirt_submissive_resistances_give_in({scene, Target, isPublic, tempAttractiveness, isWearingBra, isWearingUnderwear, playerPerversionScore, targetWillForce}) {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    Player.dialogue("What now?", "Shy")
    if (isWearingUnderwear || isWearingBra) {
        narrative("<Target.He_or_She> wipes the tears off my face.")
        if (isPublic) {
            Target.dialogue("Go to the bathroom and take off you bra and underwear.")
            Player.dialogue("...")
            Player.dialogue("OK", 'Anxious')
            let forced = true
            scene.lpMod.getFunction('dropFlirt_bathRoomGetReady')({scene, Target, isWearingBra, isWearingUnderwear, forced})
            // todo what next?
            narrative("<Target.He_or_She> didn't waste anytime")

        }
        else { // !isPublic
            Target.dialogue("Strip!", 'Angry')
            option([
                {text: "Make me!", condition: Player.masochist > 50},
                {text: "Strip..."},
            ])

            if (0) {
                Target.dialogue("Gladly!", 'Evil')
                Target.likes_rough += 1
                Player.masochist += 1
                Player.likes_rough += 1
                narrative("<Target.He_or_She> storms over and grabs me by my hair!")
                narrative("They rip my clothing off with such force I hear it tearing, and a button goes flying across the room.")
                Player.strip()

                option([
                    {text: "Give in..."},
                    {text: "Fight back!"},
                ])

                if (1) {
                    narrative("With an effort I nearly break free scratching <Target.him_or_her> in the process.")
                    narrative("They smile at me...")
                    Target.dialogue("This is going to be fun!", 'Evil')
                    Target.likes_rough += 1
                    Player.masochist += 1
                    Player.likes_rough += 1
                    Player.dressBondage('Bdg_Handcuffs')
                    Player.dressBondage('Bdg_Foulard')
                }
                Target.sexCNC(Player)
            } else { // Strip...
                Player.dialogue("Yes <Target.Sir_or_Ma'am>.", 'Anxious')
                narrative("With nervous excitement I start stripping off my clothing.")

                while (!Player.isNaked()) {
                    narrative("Off this goes...")
                    Player.stripOne()
                }
                Target.sexNoAffair(Player)
            }
        }
    }
    scene.lpMod.getFunction('dropFlirt_exchange')({scene, Target, targetWillForce})
    scene.timeout(720, "rizean_cnc_dropFlirt")
}