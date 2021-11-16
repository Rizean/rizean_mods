// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Corruption\Scenes\co_vi_changingroom.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'co_vi_changingroom'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all"])
    scene.where(["department_store", " clothes"])
    scene.when([8, 22])
    let Actor = Player.getCompanion()
    scene.who(($IF) => {
        Actor = Player.getCompanion()
        $IF(!Actor.isRelative() && Actor.isInterestedIn(Player) && Actor.attractionToPlayer > 10)
    })
    scene.other("none")


    scene.start(() => {
        Actor.hide()
        narrative(`Hmm, let's try these clothes on. Don't want to buy them only to find out they don't fit.`)
        narrative(`I need to take off my current clothes first.`)
        Player.strip()
        Actor.show(2)
        Actor.dialogue(`Damn it baby, trying out clothes with the door unlocked - you got me all horny. Mind if I join you in there?`, `Flirty`)
        scene.option([
            {text: `Let <Actor.him_or_her> in`, condition: Player.perversion > 30},
            {text: `Turn <Actor.him_or_her> down`},
        ])
        if (0) {
            narrative(`I can't believe I would end up having sex in a public changing room ...`)
            scene.sex(Actor, Player)
            Player.perversion += random(0, 2)
            Actor.attractionToPlayer += random(0, 0.5)
            Actor.dress()
        } else {
            Player.dialogue(`What are you doing? Get out now!`, `Angry`)
            Actor.attractionToPlayer -= random(0, 0.25)
        }
    })
    scene.timeout(200, "co_vi_changingroom")
})
module.exports = scene