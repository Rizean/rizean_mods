// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_NonConsensual\Scenes\prison_vi_rape.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'prison_vi_rape'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, choice} = scene

    scene.what(["all"])
    scene.where(["prison"])
    scene.when([0, 24])
    scene.who("none")
    scene.other(($IF) => {
        $IF(random(0, 100) < Player.perversion)
    })


    scene.start(() => {
        let Actor = scene.generatePersonTemporary([])
        Actor = scene.generatePersonTemporary([])
        while (!Player.isInterestedIn(Actor)) {
            Actor = scene.generatePersonTemporary([])
        }
        Actor.show(2)
        Actor.dressUniform("Prison")
        Actor.dialogue(`I'm horny, let's fuck, bitch!`, `Evil`)
        narrative(`Another inmate grabbed me from behind, clearly already highly aroused ...`)
        option([
            {text: `Struggle`},
            {text: `Accept your fate`},
        ])
        if (0 && Actor.martial < Player.martial) {
            Actor.dialogue(`Ah!`, `Pain`)
            Player.dialogue(`That should teach you!`, `Angry`)
        } else {
            narrative(`The element of surprise was too great. I was overwhelmed before I could even react to the assault.`)
            Player.dialogue(`No! Please stop ... I beg you ... Somebody help ...`, `Crying`)
            narrative(`My cries for help went unheard in the dark prison cell and I had no choice but endure it all.`)
            scene.filter("Aggressive")
            scene.talkNonConsensual()
            scene.sexNoAffair(Actor, Player)


            Actor.hide()
            narrative(`Despite the horrible incident that happened, I didn't have the guts to report the crime to the warden. I figure they'll just laugh at my face. Here in a prison, rape is the language of power.`)
        }
    })
    scene.timeout(200, "prison_vi_rape")
})
module.exports = scene