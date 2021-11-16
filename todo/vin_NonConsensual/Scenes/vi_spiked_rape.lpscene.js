// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_NonConsensual\Scenes\vi_spiked_rape.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'vi_spiked_rape'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all", " -go_to_the_bathroom"])
    scene.where(["bar", " nightclub"])
    scene.when([21, 4])
    scene.who("none")
    scene.other(($IF) => {
        $IF(!Player.isWithCompanion() && random(40, 500) < Player.attractiveness)
    })


    scene.start(() => {
        let Actor = scene.generatePersonTemporary([])
        Actor = scene.generatePersonTemporary([])
        while (!Player.isInterestedIn(Actor)) {
            Actor = scene.generatePersonTemporary([])
        }
        Actor.dress()
        Actor.show(2)
        narrative(`I was just hanging out at the bar when a stranger approached me.`)
        Actor.dialogue(`I'm sorry if this is all too sudden. But you're the most <Player.handsome_or_beautiful> <Player.guy_or_girl> I've ever seen. I'd love nothing more than being able to buy you a drink.`, `Happy`)
        option([
            {text: `Yes`},
            {text: `No`},
        ])
        if (0) {
            narrative(`Ah, what a charming <Actor.gentleman_or_lady>!`)
            Player.dialogue(`Of course! I'd love to have a drink with you.`, `Happy`)
            narrative(`Soon enough, the charming stranger was back with drinks for both of us. We enjoyed our drinks while having a pleasant conversation. <Actor.He_or_She> introduced <Actor.himself_or_herself> as <Actor.name>.`)
            narrative(`A while later ...`)
            narrative(`What's happening to me? I only had one drink for God's sake. My head is already shaking and I'm feeling ... aroused?`)
            narrative(`I'm losing control of my body - wait, where is <Actor.name> leading me to? We're leaving the bar ...`)
            narrative(`A while later ...`)
            scene.setBackground("home")
            narrative(`Why am I in this disgusting hotel room? Oh no, that drink was spiked!`)
            Actor.dialogue(`You stupid <Player.bastards_or_bitches> never learn. Show you some charm and you all drink the first thing given to you.`, `Evil`)
            Actor.dialogue(`Now, let us have some fun, because you're gonna forget all about this in the morning!`, `Flirty`)
            narrative(`Part of my mind still wanted to resist but it's too weak compared to the strong drug in my system.`)
            scene.filter("Aggressive")
            scene.talkNonConsensual()
            scene.sexNoAffair(Actor, Player)
            Player.mood = 0
        } else {
            narrative(`You can never be too careful nowadays. I'd better not accept a drink from a complete stranger.`)
        }
    })
    scene.timeout(250, "vi_spiked_rape")
})
module.exports = scene