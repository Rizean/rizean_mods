// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_NonConsensual\Scenes\ag_locker_rape.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'ag_locker_rape'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, choice} = scene

    scene.what(["go_to_the_bathroom"])
    scene.where(["sports_centre"])
    scene.when([0, 24])
    let Actor2 = scene.getPerson()
    scene.who(($IF) => {
        Actor2 = scene.getPerson()
        $IF(!Player.isWithCompanion() && random(50, 1000) < Player.perversion)
    })
    scene.other("none")


    scene.start(() => {
        let Actor = scene.generatePersonTemporary([])
        Actor = scene.generatePersonTemporary([])
        while (!Player.isInterestedIn(Actor)) {
            Actor = scene.generatePersonTemporary([])
        }
        narrative(`The gym is so empty today. Maybe I should peep on the <Actor.male_or_female> locker room?`)
        option([
            {text: `Yes`},
            {text: `No`},
        ])
        if (0) {
            Actor.show(2)
            narrative(`Oh wow, what a hottie taking a shower in the locker room! No-one else is around ... Perhaps I should take this chance.`)
            option([
                {text: `Force myself on <Actor.him_or_her>`},
                {text: `Just watch <Actor.him_or_her> shower`},
            ])
            if (0) {
                narrative(`Taking <Actor.him_or_her> completely by surprise, I grabbed the <Actor.handsome_or_beautiful> <Actor.man_or_woman> by the <Actor.dick_or_pussy> from behind.`)
                Player.karma -= 20
                if (Player.martial < Actor.martial) {
                    Player.dialogue(`Ah!`, `Pain`)
                    Actor.dialogue(`That should teach you to not sexually assault people in locker rooms!`, `Angry`)
                } else {
                    narrative(`The element of surprise was too great. <Actor.He_or_She> was overwhelmed before <Actor.he_or_she> could even react to the assault.`)
                    Actor.dialogue(`No! Please stop ... I beg you ... Somebody help ...`, `Crying`)
                    narrative(`<Actor.His_or_Her> cries for help went unheard in the locker room and <Actor.he_or_she> had no choice but endure it all at my hand.`)
                    scene.filter("Aggressive")
                    scene.talkNonConsensual()
                    scene.sexNoAffair(Player, Actor)
                }
            } else {
                narrative(`Nah, let's not be rash. I may be a pervert, but no rapist.`)
                scene.filter("Shower")
                scene.sex(Actor)
            }
        } else {
            narrative(`Nah, let's not be a creep here ...`)
        }
    })
    scene.timeout(500, "ag_locker_rape")
})
module.exports = scene