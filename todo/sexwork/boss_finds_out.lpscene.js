// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\sexwork\boss_finds_out.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'boss_finds_out'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["work"])
    scene.where(["work"])
    scene.when([0, 24])
    let Actor = scene.getSpecific("Boss")
    scene.who(($IF) => {
        Actor = scene.getSpecific("Boss")
        $IF(Actor.perversion < 75 && !Actor.isProstitute())
    })
    scene.other(($IF) => {
        $IF(random(0, 1000) < Player.pornfame / Player.intelligence)
    })


    scene.start(() => {
        Actor.dress()
        Actor.show(2)
        Actor.dialogue(`<Player.name>, meet me in my office please!`, `Angry`)
        narrative(`Oh god, this doesn't sound good.`)
        Actor.dialogue(`It seems you have a very interesting second job ...`, `Sarcastic`)
        narrative(`<Actor.name> showed me a printout with a screenshot on it ... It's my porn Twitter account ...`)
        Actor.dialogue(`You're fired! Frankly, you should have known better.`, `Angry`)
        narrative(`No point begging for my job now ... it's no use. No companies want to risk their reputation by keeping a porn star employed.`)
        narrative(`My chance of getting another job is rather low now. Surely, any HR department could easily find out about my porn career.`)
        Player.loseJob()
        Player.jobexperience -= random(0, 100)
        Player.mood -= random(0, 100)
    })
})
module.exports = scene