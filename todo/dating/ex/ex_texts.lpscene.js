// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\dating\ex\ex_texts.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'ex_texts'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all", " -sleep", " -nap", " -sleep_hotel", " -nap_hotel"])
    scene.where(["all"])
    scene.when([0, 24])
    let Actor = scene.getSpecific("ExDating")
    scene.who(($IF) => {
        Actor = scene.getSpecific("ExDating")
        $IF(Actor.isContactExchanged() && random(0, 100) < Actor.attractionToPlayer)
    })
    scene.other("none")


    scene.start(() => {
        Actor.dialogue(`I miss you. I was a fool to lose you.`)
        narrative(`It's my ex <Actor.name> texting me. <Actor.He_or_She> is probably drunk.`)
        option([
            {text: `Ignore`},
            {text: `Respond`},
            {text: `Block`},
        ])
        if (0) {
            narrative(`Let's just ignore the text. I don't want to give <Actor.him_or_her> any wrong signal.`)
            Actor.attractionToPlayer += random(0, 1)
        } else if (1) {
            narrative(`Well, for everything we had together, I can't be so emotionless. <Actor.He_or_She> reached out first.`)
            narrative(`I decided to text back: 'Miss you too ...'`)
            Actor.attractionToPlayer += random(0, 3)
        } else {
            narrative(`I'd rather not have to deal with this emotional baggage anymore. I'll just block <Actor.him_or_her> and be done with it.`)
            Player.blockContact(Actor)
            Actor.attractionToPlayer -= random(0, 10)
        }


    })
    scene.timeout(200, "ex_texts")
})
module.exports = scene