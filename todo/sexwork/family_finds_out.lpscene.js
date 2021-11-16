// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\sexwork\family_finds_out.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'family_finds_out'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all", " -sleep", " -nap"])
    scene.where(["home"])
    scene.when([0, 24])
    let Actor = Player.getRelative()
    scene.who(($IF) => {
        Actor = Player.getRelative()
        $IF(Actor.perversion < 25 && !Actor.isProstitute() && Actor.incest < 5)
    })
    scene.other(($IF) => {
        $IF(random(0, 1000) < Player.pornfame / Player.intelligence)
    })


    scene.start(() => {
        Actor.dress()
        Actor.show(2)
        Actor.dialogue(`<Player.name>, can we talk please?`, `Angry`)
        narrative(`Oh god, this doesn't sound good.`)
        narrative(`<Actor.name> showed me a printout with a screenshot on it ... It's my porn Twitter account ...`)
        Actor.dialogue(`How could I have guessed? My <Actor.callplayer> is a porn star ... You humiliated our family honour!`, `Angry`)
        narrative(`I tried to apologize and get my <Actor.relationship>'s support for my porn career. Unfortunately, <Actor.he_or_she> was having none of it.`)
        Player.mood -= random(0, 50)
        Actor.rapportwithplayer -= random(0, 50)
    })
})
module.exports = scene