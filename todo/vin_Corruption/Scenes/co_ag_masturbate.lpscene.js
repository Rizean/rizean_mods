// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Corruption\Scenes\co_ag_masturbate.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'co_ag_masturbate'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all", " -sleep", " -nap", " -sleep_hotel", " -nap_hotel"])
    scene.where(["all"])
    scene.when([8, 24])
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
        narrative(`Maybe I can send <Actor.him_or_her> a video of me masturbating and open up <Actor.his_or_her> mind a bit ...`)
        option([
            {text: `Send <Actor.name> a sexy video`},
            {text: `That's a bad idea`},
        ])
        if (0) {
            scene.filter("Solo")
            scene.sex(Player)
            Player.show(2)
            narrative(`Got it all filmed nicely. Let's send it to <Actor.name>.`)
            if (random(0, 150) < Player.interpersonal + Actor.attractionToPlayer + Actor.perversion + Actor.masochist) {
                narrative(`No response at all ... Maybe <Actor.he_or_she> is secretly masturbating to it ...`)
                Actor.perversion += random(0, 0.25)
                if (random(0, 250) < Player.interpersonal + Actor.attractionToPlayer + Actor.incest + Actor.perversion + Actor.masochist) {
                    Actor.perversion += random(0, 0.25)
                }
            } else {
                narrative(`<Actor.name> texted me, making it clear sending such a video is totally inappropriate and not welcome. Damn, I screwed up big time here.`)
                Actor.attractionToPlayer -= random(0, 1)
            }
        } else {
            narrative(`That's a stupid idea. <Actor.name> is far too self-righteous to ever react well to this surprise.`)
        }


    })
    scene.timeout(200, "co_ag_masturbate")
})
module.exports = scene