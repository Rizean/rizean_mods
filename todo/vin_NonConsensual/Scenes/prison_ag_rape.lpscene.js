// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_NonConsensual\Scenes\prison_ag_rape.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'prison_ag_rape'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, choice} = scene

    scene.what(["all"])
    scene.where(["prison"])
    scene.when([0, 24])
    scene.who("none")
    scene.other(($IF) => {
        $IF(random(20, 100) < Player.perversion)
    })


    scene.start(() => {
        let Actor = scene.generatePersonTemporary([])
        Actor = scene.generatePersonTemporary([])
        while (!Player.isInterestedIn(Actor)) {
            Actor = scene.generatePersonTemporary([])
        }
        Actor.show(2)
        Actor.dress()
        scene.$random(() => {
            narrative(`<Actor.name> is some Criminology student doing an internship in my prison. Weak and naive - an easy target.`)
            narrative(`<Actor.name> is the new <Actor.guy_or_girl>, serving time for some white-collar financial crimes. First time in prison - in fact, probably first time being out of a city - an easy target.`)
            narrative(`<Actor.name> is the new warden. Inexperienced and still far too kind-hearted - an easy target.`)
            narrative(`<Actor.name> is the new <Actor.guy_or_girl>, serving time for illegal prostitution. I'm sure being fucked hard is not anything new to this whore.`)
        })
        narrative(`What should do with <Actor.him_or_her>`)
        option([
            {text: `Rape <Actor.him_or_her>`},
            {text: `No`},
        ])
        if (0) {
            narrative(`In prison, rape means power.`)
            narrative(`Taking <Actor.him_or_her> completely by surprise, I grabbed the <Actor.handsome_or_beautiful> <Actor.man_or_woman> by the <Actor.dick_or_pussy> from behind.`)
            Player.karma -= 20
            if (Player.martial < Actor.martial) {
                Player.dialogue(`Ah!`, `Pain`)
                Actor.dialogue(`That should teach you!`, `Angry`)
            } else {
                narrative(`The element of surprise was too great. <Actor.He_or_She> was overwhelmed before <Actor.he_or_she> could even react to the assault.`)
                Actor.dialogue(`No! Please stop ... I beg you ... Somebody help ...`, `Crying`)
                narrative(`<Actor.His_or_Her> cries for help went unheard in the dark prison cell and <Actor.he_or_she> had no choice but endure it all at my hand.`)
                scene.filter("Aggressive")
                scene.talkNonConsensual()
                scene.sexNoAffair(Player, Actor)


                Actor.hide()
                if (random(0, 100) < Actor.intelligence) {
                    narrative(`Unfortunately for me, after what happened, <Actor.name> went straight to the head warden to report the assault.`)
                    narrative(`I got some extra sentence ... was it really worth it?`)
                    Player.sentence *= 1.2
                } else {
                    narrative(`Fortunately, the whore was probably too embarrassed to admit that <Actor.he_or_she> had been raped. The assault went unreported and I got away with it.`)
                }
            }
        } else {
            narrative(`Nah, I don't want to spend the rest of my life rotting away in this prison. Not worth it.`)
        }
    })
    scene.timeout(200, "prison_ag_rape")
})
module.exports = scene