// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Corruption\Scenes\co_vi_masturbate.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'co_vi_masturbate'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all", " -sleep", " -nap", " -sleep_hotel", " -nap_hotel"])
    scene.where(["all"])
    scene.when([8, 24])
    let Actor = scene.getPerson("true")
    scene.who(($IF) => {
        Actor = scene.getPerson("true")
        $IF(!Actor.isRelative() && Actor.isInterestedIn(Player) && Actor.perversion > 70 && Actor.attractionToPlayer > 30)
    })
    scene.other("none")


    scene.start(() => {
        narrative(`It's my phone. I've got a new message.`)
        Player.dialogue(`What the hell!?`, `Shocked`)
        Player.hide()
        scene.setBackground("home")
        Actor.show(2)
        scene.filter("Solo")
        scene.sex(Actor)
        narrative(`<Actor.name> sent me a video of <Actor.him_or_her> masturbating ...`)
        option([
            {text: `Say nothing`},
            {text: `Tell <Actor.him_or_her> off`},
        ])
        if (0) {
            Player.perversion += random(0, 0.25)
            narrative(`I know it's not the classiest thing to do, but for some reasons, I couldn't help but keep my mind off <Actor.name>'s masturbation video ... Maybe I should watch it again back home tonight?`)
            option([
                {text: `Masturbate to it tonight`},
                {text: `Resist the temptation`},
            ])
            if (0) {
                Player.perversion += random(0, 0.5)
                narrative(`That night ...`)
                Player.moveTo("home")
                Actor.hide()
                narrative(`I guess nobody needs to know about this ...`)
                scene.filter("Solo")
                scene.sex(Player)
            }
        } else {
            narrative(`I immediately texted <Actor.name>, making it clear that sending such a video is totally inappropriate and not welcome.`)
            Actor.attractionToPlayer -= random(0, 1)
        }
    })
    scene.timeout(200, "co_vi_masturbate")
})
module.exports = scene