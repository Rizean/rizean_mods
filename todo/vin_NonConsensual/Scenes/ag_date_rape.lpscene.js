// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_NonConsensual\Scenes\ag_date_rape.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'ag_date_rape'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all", " -go_to_the_bathroom"])
    scene.where(["all"])
    scene.when([21, 4])
    let Actor = Player.getCompanion()
    scene.who(($IF) => {
        Actor = Player.getCompanion()
        $IF(!Actor.isDating())
    })
    scene.other(($IF) => {
        $IF(random(50, 200) < Actor.attractiveness && Actor.attractionToPlayer < 10 && random(40, 500) < Player.perversion && random(-100, 0) > Player.masochist)
    })


    scene.start(() => {
        let Actor2 = scene.generatePersonTemporary([])
        if ($WHERE.eq("bar") || $WHERE.eq("nightclub")) {
            Player.arousal += 0.1
        } else {
            scene.setBackground("bar")
        }
        Actor.dress()
        Actor.show(2)
        narrative(`Wow, what a <Actor.handsome_or_beautiful> <Actor.guy_or_girl> my date <Actor.name> is. Should I offer <Actor.him_or_her> a drink?`)
        option([
            {text: `Yes`},
            {text: `No`},
        ])
        if (0) {
            Player.dialogue(`Wow, you're the most <Actor.handsome_or_beautiful> <Actor.guy_or_girl> I've ever been on a date with. I'd love nothing more than being able to buy you a drink.`, `Happy`)
            Actor.dialogue(`Of course! I'd love to have a drink with you.`, `Happy`)
            Actor2 = scene.generatePersonTemporary([])
            Actor2.dress()
            Actor2.show(4)
            Actor2.dialogue(`One Margarita and one Gin & Tonic coming ...`, `Happy`)
            Actor2.dialogue(`Listen buddy, I can tell you're trying to get with that <Actor.handsome_or_beautiful> <Actor.guy_or_girl>. I must say though <Actor.he_or_she> is kinda out of your league to be honest ...`, `Evil`)
            narrative(`What the hell! What rotten luck I have to receive some unsolicited reality check from a bartender ...`)
            Actor2.dialogue(`... unless you're smart enough to cheat. For a generous tip, I can put some special powder in <Actor.his_or_her> Margarita that will guarantee you score tonight ... Come on buddy, you're the underdog - only a fool would play fair here.`, `Evil`)
            option([
                {text: `Spike the drink`},
                {text: `No way`},
            ])
            if (0) {
                Player.karma -= 20
                Player.money -= random(200, 500)
                Player.masochist -= random(0, 2)
                Player.perversion += random(0, 2)
                narrative(`The bartender is right. <Actor.name> is so out of my league that spiking <Actor.his_or_her> drink is my only hope.`)
                Actor2.hide()
                narrative(`Soon enough, I was back with drinks for both of us. We enjoyed our drinks while having a pleasant conversation.`)
                narrative(`A while later ...`)
                narrative(`<Actor.His_or_Her> speech is becoming slurred now. It seems the drug is taking effect. Let's get <Actor.him_or_her> out of here and into the nearest hotel room.`)
                narrative(`A while later ...`)
                scene.setBackground("home")
                Player.dialogue(`Now, let us have some fun, because you're gonna forget all about this in the morning!`, `Flirty`)
                scene.filter("Aggressive")
                scene.talkNonConsensual()
                scene.sexNoAffair(Player, Actor)
                Actor.rapportwithplayer = -100
                Actor.attractionToPlayer = -100
                Player.endDate()
                Player.blockContact(Actor)


                if (random(0, 100) < 20) {
                    scene.setBackground("home")
                    narrative(`Sure enough, the cops promptly arrived at my home a few days later to arrest me.`)
                    narrative(`'Hands in the air, now!'`)
                    option([
                        {text: `Run`},
                        {text: `Surrender`},
                    ])
                    if (0) {
                        if (random(0, 100) < Player.fitness) {
                            narrative(`I managed to lose the cops. Phew, that was close.`)
                        } else {
                            Player.dialogue(`You're not taking me alive.`, `Angry`)
                            narrative(`Pow!`)
                            Player.hide()
                            narrative(`A cop fired his gun. It was a perfect shot ...`)
                            scene.followUp("death")
                        }
                    } else {
                        Player.animate("fightlost")
                        Player.dialogue(`Please, don't shoot!`, `Scared`)
                        narrative(`I put my hands up and surrendered to the overwhelming number of cops.`)
                        Player.sentence = 1825
                        scene.followUp("imprisoned")
                    }
                }
            } else {
                Player.dialogue(`I'm not Bill Cosby! What kind of bartender are you?`, `Angry`)
                Actor2.hide()
                narrative(`Having turned down the bartender's evil plan, I returned to the <Actor.handsome_or_beautiful> <Actor.guy_or_girl> with the drinks and we had a brief conversation.`)
                narrative(`It didn't lead anywhere and I didn't even manage to get <Actor.his_or_her> number. <Actor.He_or_She> was out of my league.`)
                narrative(`Oh well ... at least I didn't use dodgy methods to try to sleep with <Actor.him_or_her> and I'm proud of my decision.`)
            }
        } else {
            narrative(`No way. <Actor.He_or_She> is way too hot for me and completely out of my league.`)
        }
    })
    scene.timeout(250, "ag_date_rape")
})
module.exports = scene