// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_NonConsensual\Scenes\vi_hospital_rape.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'vi_hospital_rape'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["get_a_health_checkup"])
    scene.where(["all"])
    scene.when([0, 24])
    scene.who("none")
    scene.other(($IF) => {
        $IF(!Player.isWithCompanion() && random(70, 1000) < Player.attractiveness)
    })


    scene.start(() => {
        let Actor = scene.generatePersonTemporary([])
        Actor = scene.generatePersonTemporary([])
        while (!Player.isInterestedIn(Actor)) {
            Actor = scene.generatePersonTemporary([])
        }
        Actor.dressUniform("Nurse")
        Actor.show(2)
        narrative(`I'm lying on the examination couch for some tests. I've got to say the nurse who has been administering the test is kinda creepy and has been looking at me a bit weird.`)
        Actor.dialogue(`Now, stay still. This may hurt a bit ...`, `Evil`)
        option([
            {text: `Wait, what's that needle for?`},
            {text: `<Actor.He_or_She> knows what <Actor.he_or_she> is doing`},
        ])
        if (0) {
            Player.dialogue(`Wait, why do you need to inject anything into me? Aren't you supposed to take my blood samples?`, `Angry`)
            Actor.dialogue(`Oh god, silly me. Sorry!`, `Sad`)
            narrative(`Damn, that's bizarre. I should go to another hospital for medical checkup next time.`)
        } else {
            narrative(`Maybe for the blood to be ready for testing, it needs some drug first ...`)
            narrative(`A while later ...`)
            narrative(`What's happening to me? My head is already shaking and I'm feeling ... aroused? I'm losing control of my body. What drug was I injected with?`)
            Actor.dialogue(`You stupid <Player.bastards_or_bitches> never question what gets injected into your body, do you?`, `Evil`)
            Actor.dialogue(`Now, let us have some fun, because you're gonna forget all about this once the drug's effects pass!`, `Flirty`)
            narrative(`Part of my mind still wanted to resist but it's too weak compared to the strong drug in my system.`)
            scene.filter("Aggressive")
            scene.talkNonConsensual()
            scene.sexNoAffair(Actor, Player)
            Player.mood = 0
        }
    })
    scene.timeout(1000, "vi_hospital_rape")
})
module.exports = scene