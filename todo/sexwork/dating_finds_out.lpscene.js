// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\sexwork\dating_finds_out.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'dating_finds_out'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all", " -sleep", " -nap"])
    scene.where(["home"])
    scene.when([0, 24])
    let Actor = scene.getSpecific("Dating")
    scene.who(($IF) => {
        Actor = scene.getSpecific("Dating")
        $IF(Actor.perversion < 50 && !Actor.isProstitute() && Actor.masochist < 25)
    })
    scene.other(($IF) => {
        $IF(random(0, 1000) < Player.pornfame / Player.intelligence)
    })


    scene.start(() => {
        Actor.dress()
        Actor.show(2)
        Actor.dialogue(`<Player.name>, can we talk please?`, `Angry`)
        narrative(`Oh god, this doesn't sound good.`)
        Actor.dialogue(`So this is what you have been doing for a living? You hid the truth from me all this time.`, `Sarcastic`)
        narrative(`<Actor.name> showed me a printout with a screenshot on it ... It's my porn Twitter account ...`)
        Actor.dialogue(`It's over! I'm breaking up with you. This is the biggest humiliation of my life, being with a porn star unknowingly`, `Angry`)
        narrative(`No point trying to talk <Actor.him_or_her> out of it now ... it's no use. Not many people can tolerate their significant other sleeping with another person, let alone doing it for money and publishing it all over the internet.`)
        if (Player.isPlayerMarried()) {
            Actor.dialogue(`I'm afraid this marriage isn't working ...`, `Sad`)
            narrative(`And just like that, <Actor.name> divorced me ...`)
            Player.mood -= 100
            Player.divorce()
            Player.loseDating()
            if (Player.isDominantSex(Actor) && Player.money > 1000) {
                narrative(`To make matters worse, the court awarded half of my hard-earned fortune to <Actor.name> ... What a disaster of a marriage that was ...`)
                Player.money -= Player.money * 0.5
            }
        } else {
            narrative(`And just like that, <Actor.name> broke up with me ... What's more - I found out later that <Actor.he_or_she> also blocked my number.`)
            Player.loseDating()
            Player.mood -= 50
        }
        Player.blockContact(Actor)
        Actor.attractionToPlayer -= random(0, 100)
    })
})
module.exports = scene