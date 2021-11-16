// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_NonConsensual\Scenes\vi_date_rape.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'vi_date_rape'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all", " -go_to_the_bathroom"])
    scene.where(["bar", " nightclub"])
    scene.when([21, 4])
    let Actor = Player.getCompanion()
    scene.who(($IF) => {
        Actor = Player.getCompanion()
        $IF(!Actor.isRelative() && random(30, 200) < Actor.perversion && random(-100, -30) > Actor.masochist && random(30, 100) < Actor.attractionToPlayer)
    })
    scene.other(($IF) => {
        $IF(!Player.isDating())
    })


    scene.start(() => {
        narrative(`It's been a decent date with <Actor.name> I guess. <Actor.He_or_She> is a bit handsy though, but I'm giving <Actor.him_or_her> none of it.`)
        Actor.dialogue(`You're the most <Player.handsome_or_beautiful> <Player.guy_or_girl> I've ever been on a date with. I'd love nothing more than being able to buy you a drink.`, `Happy`)
        option([
            {text: `Yes`},
            {text: `No`},
        ])
        if (0) {
            narrative(`Ah, what a charming <Actor.gentleman_or_lady>!`)
            Player.dialogue(`Of course! I'd love to have a drink with you.`, `Happy`)
            narrative(`Soon enough, <Actor.name> was back with drinks for both of us. We enjoyed our drinks while having a pleasant conversation.`)
            if (random(-100, -70) > Actor.masochist && random(80, 200) < Actor.perversion) {
                narrative(`A while later ...`)
                narrative(`What's happening to me? I only had one drink for God's sake. My head is already shaking and I'm feeling ... aroused?`)
                narrative(`I'm losing control of my body - wait, where is <Actor.name> leading me to? We're leaving the bar ...`)
                narrative(`A while later ...`)
                scene.setBackground("home")
                narrative(`Why am I in this disgusting hotel room? Oh no, that drink was spiked!`)
                Actor.dialogue(`You stupid <Player.idiots_or_bitches> never learn. Show you some charm and you all drink the first thing given to you.`, `Evil`)
                Actor.dialogue(`Now, let us have some fun, because you're gonna forget all about this in the morning!`, `Flirty`)
                narrative(`Part of my mind still wanted to resist but it's too weak compared to the strong drug in my system.`)
                scene.filter("Aggressive")
                scene.talkNonConsensual()
                scene.sexNoAffair(Actor, Player)
                Player.mood = 0
            }
        } else {
            narrative(`You can never be too careful nowadays. I'd better not accept a drink from someone I don't know that well.`)
        }
    })
    scene.timeout(250, "vi_date_rape")
})
module.exports = scene