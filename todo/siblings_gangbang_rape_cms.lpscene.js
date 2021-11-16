// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Incest\Scenes\siblings_gangbang_rape_cms.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'siblings_gangbang_rape_cms'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all"])
    scene.where(["home"])
    scene.when([0, 24])
    let Actor = Player.getRelative("Sibling")
    let Actor1 = Player.getRelative("Sibling")
    scene.who(($IF) => {
        Actor = Player.getRelative("Sibling")
        Actor1 = Player.getRelative("Sibling")
        $IF(!Actor.isMale() && Actor1.isMale() && Actor1.perversion - Actor1.masochist > 75)
    })
    scene.other(($IF) => {
        $IF(scene.isModEnabled("vin_NonConsensual") && Player.isMale())
    })


    scene.start(() => {
        let Actor2 = Player.getRelative("Sibling")
        let Actor3 = Player.getRelative("Sibling")
        Actor1.dress()
        Actor1.show()
        narrative(`I can't believe it: My brother <Actor1.name> is trying to get me into his cynical plan to get my sister <Actor.name> drunk and gangrape her!`)
        option([
            {text: `That sounds like a good plan`},
            {text: `That's disgusting!`},
        ])
        if (0) {
            narrative(`We're family after all. This forbidden fruit shall be shared among us brothers!`)
            Actor.dress()
            Actor.show()
            Actor.dialogue(`Oh my god, <Player.name>, stop already! I can't drink anymore ...`)
            narrative(`After getting <Actor.name> nice and drunk, us brothers immediately got to some quality family bonding time.`)
            Actor.incest += 100
            Actor2 = Player.getRelative("Sibling")
            Actor3 = Player.getRelative("Sibling")
            if (Actor2.isValid() && Actor2.isMale()) {
                if (Actor3.isValid() && Actor3.isMale()) {
                    scene.sex(Player, Actor1, Actor2, Actor3, Actor)
                } else {
                    scene.sex(Player, Actor1, Actor2, Actor)
                }
            } else {
                scene.sex(Player, Actor1, Actor)
            }
        }
    })
    scene.timeout(200, "siblings_gangbang_rape_cms")
})
module.exports = scene