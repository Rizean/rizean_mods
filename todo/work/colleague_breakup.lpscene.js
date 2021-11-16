// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\work\colleague_breakup.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'colleague_breakup'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all"])
    scene.where(["work"])
    scene.when([8, 18])
    let Colleague = scene.getSpecific("Colleague")
    scene.who(($IF) => {
        Colleague = scene.getSpecific("Colleague")
        $IF(!Colleague.isDating())
    })
    scene.other(($IF) => {
        $IF(random(0, 100) < 0.02 * Player.interpersonal)
    })


    scene.start(() => {
        let Loc = Colleague.getBuilding("home")
        scene.setBackground("work")
        Colleague.dress()
        Colleague.show(2)


        Player.dialogue(`What's the matter, <Colleague.name>? You look sad ...`, `Curious`)
        if (Player.interpersonal + Colleague.rapportwithplayer > random(0, 150) || Colleague.attractionToPlayer > random(0, 50)) {
            Colleague.dialogue(`Me and my <Colleague.girlfriend_or_boyfriend> ... we broke up!`, `Crying`)
            option([
                {text: `Console`},
                {text: `Flirt`, condition: Player.isInterestedIn(Colleague) && Player.interpersonal > 10},
            ])
            if (0) {
                Player.dialogue(`Oh, that's horrible to hear. I'll be here if you need someone to talk to.`, `Sad`)
                Colleague.dialogue(`Thank you, I'll remember that.`, `Sad`)
                Colleague.rapportwithplayer += random(0, 5)
            } else {
                Player.dialogue(`Don't be so sad. There are other fish in the ocean ... There might even be one waiting for you right here.`, `Flirty`)
                if (Colleague.attractionToPlayer > random(0, 30)) {
                    Colleague.dialogue(`I bet you're right ... So I should just move then, hah?`, `Flirty`)
                    Colleague.attractionToPlayer += random(0, 5)
                    narrative(`<Colleague.He_or_She> seemed receptive enough. Should I be more aggressive?`)
                    option([
                        {text: `Leave it there`},
                        {text: `Exchange numbers`, condition: !Colleague.isContactExchanged()},
                        {text: `Offer sex`, condition: Player.perversion > 30},
                    ])
                    if (0) {
                        narrative(`That's enough. I should give <Colleague.name> some space to breath after the breakup before going for it.`)
                    } else if (1) {
                        Player.exchangeContact(Colleague)
                        narrative(`As if looking for a rebound from the breakup, <Colleague.name> immediately agreed to exchange numbers with me.`)
                    } else if (Colleague.perversion > random(50, 100) || Colleague.isDominantSex(Player)) {
                        Colleague.dialogue(`You know what? Let's do it tonight after work. I'll show my stupid ex what <Colleague.she_or_he> is missing out on!`, `Flirty`)
                        narrative(`That night ...`)
                        Loc = Colleague.getBuilding("home")
                        Player.moveTo(Loc)
                        scene.sex(Colleague, Player)
                        Colleague.show(2)
                        Colleague.dialogue(`That was so satisfying. Revenge sex is the best. I wished we filmed the whole thing and sent it to my ex.`, `Flirty`)
                    } else {
                        Colleague.dialogue(`What? You're a pervert, you know that? I'm not doing that. Who do you take me for?`, `Angry`)
                        Colleague.rapportwithplayer -= random(0, 10)
                    }
                } else {
                    Colleague.dialogue(`Come on! That's so cheesy and inappropriate. How could you be so insensitive?`, `Irritated`)
                    Colleague.rapportwithplayer -= random(0, 5)
                }
            }
        } else {
            Colleague.dialogue(`It's nothing. Just some personal matters. Don't worry ...`, `Sad`)
            narrative(`There's no point pressing <Colleague.name> further. It's clear <Colleague.he_or_she> doesn't trust me enough to tell me.`)
        }


        scene.timeout(500, "colleague_breakup")
    })


})
module.exports = scene