// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Corruption\Scenes\co_ag_gift.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'co_ag_gift'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all", " -sleep", " -nap", " -sleep_hotel", " -nap_hotel"])
    scene.where(["all"])
    scene.when([8, 20])
    let Actor = scene.getPerson("true")
    scene.who(($IF) => {
        Actor = scene.getPerson("true")
        $IF(!Actor.isRelative() && Player.isInterestedIn(Actor) && (Player.perversion - Actor.perversion > 40 || Actor.isVirgin()) && Actor.attractiveness > 60)
    })
    scene.other(($IF) => {
        $IF(random(65, 300) < Player.perversion)
    })


    scene.start(() => {
        if (!Actor.isValid() || scene.forcedTrigger()) {
            Actor = Player.getCompanion()
        }
        Actor.dress()
        Actor.show(2)
        narrative(`<Actor.name> is a <Actor.handsome_or_beautiful> <Actor.guy_or_girl> yet <Actor.he_or_she> is so innocent.`)
        if (Actor.isVirgin()) {
            narrative(`I'm pretty sure <Actor.he_or_she> is still a virgin too ...`)
        }
        narrative(`Maybe a perverted gift like a <Actor.Fleshlight_or_dildo> would encourage <Actor.him_or_her> to explore <Actor.his_or_her> body a bit ...`)
        option([
            {text: `Send <Actor.name> this gift`},
            {text: `That's a bad idea`},
        ])
        if (0) {
            Player.money -= random(30, 200)
            narrative(`Later that day ...`)
            if (random(0, 150) < Player.interpersonal + Actor.attractionToPlayer + Actor.perversion + Actor.masochist) {
                Actor.perversion += random(0, 0.25)
                narrative(`<Actor.name> just texted me to thank me for the gift. Maybe <Actor.he_or_she> is not so innocent after all ...`)
                if (random(0, 250) < Player.interpersonal + Actor.attractionToPlayer + Actor.incest + Actor.perversion + Actor.masochist) {
                    Actor.perversion += random(0, 0.25)
                }
            } else {
                narrative(`<Actor.name> texted me, making it clear such a gift is totally inappropriate and not welcome. Damn, I screwed up big time here.`)
                Actor.attractionToPlayer -= random(0, 1)
            }
        } else {
            narrative(`That's a stupid idea. <Actor.name> is far too self-righteous to ever accept such a gift.`)
        }


    })
    scene.timeout(200, "co_ag_gift")
})
module.exports = scene