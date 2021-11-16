// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Corruption\Scenes\co_ag_changingroom.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'co_ag_changingroom'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all"])
    scene.where(["department_store", " clothes"])
    scene.when([8, 22])
    let Actor = Player.getCompanion()
    scene.who(($IF) => {
        Actor = Player.getCompanion()
        $IF(!Actor.isRelative() && Actor.isInterestedIn(Player) && Actor.attractionToPlayer > 10)
    })
    scene.other(($IF) => {
        $IF(random(30, 100) < Player.perversion)
    })


    scene.start(() => {
        if (!Actor.isValid() || scene.forcedTrigger()) {
            Actor = Player.getCompanion()
            scene.setBackground("clothes")
        }
        Actor.hide()
        narrative(`<Actor.name> and I am going shopping. <Actor.name> is trying some clothes in the changing room right now.`)
        option([
            {text: `Peep`},
            {text: `Just wait`},
        ])
        if (0) {
            Actor.strip()
            Actor.show(2)
            narrative(`What a nice view! But am I truly satisfied by just watching?`)
            option([
                {text: `Come inside`},
                {text: `That's enough`},
            ])
            if (0) {
                Player.dialogue(`Damn it baby, trying out clothes with the door unlocked - you got me all horny. Mind if I join you in there?`, `Flirty`)
                if (random(100, 300) < Player.interpersonal + Actor.attractionToPlayer + Actor.incest + Actor.perversion + Actor.masochist) {
                    Actor.dialogue(`I can't believe I would end up having sex in a public changing room ...`, `Embarrassed`)
                    scene.sex(Player, Actor)
                    Actor.perversion += random(0, 2)
                    Actor.attractionToPlayer += random(0, 0.5)
                    Actor.dress()
                } else {
                    Actor.dialogue(`What are you doing? Get out now!`, `Angry`)
                    Actor.attractionToPlayer -= random(0, 0.25)
                }
            }
        }
    })
    scene.timeout(200, "co_ag_changingroom")
})
module.exports = scene