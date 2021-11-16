// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_NonConsensual\Scenes\wi_locker_rape.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'wi_locker_rape'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, choice} = scene

    scene.what(["go_to_the_bathroom"])
    scene.where(["sports_centre"])
    scene.when([0, 24])
    scene.who("none")
    scene.other(($IF) => {
        $IF(random(0, 1000) < Player.sneak)
    })


    scene.start(() => {
        let Actor2 = scene.generatePersonTemporary([])
        let Actor = scene.generatePersonTemporary([])
        let Rape = false
        Actor2 = scene.generatePersonTemporary([])
        narrative(`What's that sound coming from the <Actor2.male_or_female> locker room? Is that ... a scream? I need to check it out, sounds like someone's in serious distress.`)
        Actor = scene.generatePersonTemporary([])
        Actor2.show(3)
        Actor.show(2)
        narrative(`Oh my god, someone is being sexually assaulted in the locker room's shower! I must do something!`)
        option([
            {text: `Report to staff`},
            {text: `Attack the rapist`},
            {text: `Watch`},
        ])
        if (0) {
            Player.masochist += random(0, 0.5)
            Rape = false
            narrative(`I shouldn't be foolish as to confront the rapist head-on. The <Actor.guy_or_girl> could be dangerous.`)
            narrative(`I decided to run and call for help from the gym's staff. Eventually, they overwhelmed the rapist and rescued the poor <Actor2.guy_or_girl>. It was sorta too late though, as by the time help arrives, the rapist had already came inside <Actor.his_or_her> poor victim.`)
        } else if (1) {
            Player.karma += 5
            Player.masochist -= random(0, 2)
            Player.animate("martialart")
            Player.moveToPersonStand(Actor, 100)
            narrative(`I haven't got time to waste. The poor <Actor2.guy_or_girl> is being assaulted right now. I must act quick!`)
            Player.animate()
            Actor.animate()
            if (Player.martial > Actor.martial || !scene.isModEnabled("vin_NTR")) {
                Rape = false
                Actor.animate("fightlost")
                Actor.dialogue(`Ah!`, `Pain`)
                Player.dialogue(`That should teach you to not sexually assault people in locker rooms!`, `Angry`)
                Actor.hide()
                Actor2.dialogue(`My hero! You taught that creep a lesson. I don't know what I can do to thank you, honestly.`, `Happy`)
                option([
                    {text: `It's only the right thing to do`},
                    {text: `Ask for <Actor2.his_or_her> number`},
                ])
                if (0) {
                    Player.dialogue(`It's only my citizen's duty. I cannot let criminals like that get away with their horrendous acts of violence.`, `Happy`)
                } else {
                    Player.dialogue(`You know ... I'd love to get to know you more.`, `Happy`)
                    Actor2.dialogue(`Of course, here's my number. I'd love to get to know a strong <Player.gentleman_or_lady> like you better too.`, `Happy`)
                    Actor2.makePermanent()
                    Actor2.attractionToPlayer += random(0, 50)
                    Actor2.rapportwithplayer += random(0, 50)
                    Player.exchangeContact(Actor2)
                }
            } else {
                Rape = true
                Player.animate("fightlost")
                Player.dialogue(`Ah!`, `Pain`)
                Actor.dialogue(`Ha! You really thought you could match me in a fight? I have to say - this just makes me want to fuck <Actor2.his_or_her> brain out even more and make you watch it all, wannabe hero!`, `Evil`)
            }
        } else {
            Player.karma -= 2.5
            Rape = true
            narrative(`I really should do something to help, but for some reason, I couldn't help but be excited at the thought of watching some live forced porn living out in front of my eyes.`)
            Player.masochist += random(0, 2)
        }


        if (Rape) {
            Actor2.animate("fightlost")
            Actor2.dialogue(`No! Please stop ... I beg you ... Somebody help ...`, `Crying`)
            narrative(`<Actor2.His_or_Her> cries for help went unheard in the locker room and <Actor2.he_or_she> had no choice but endure it all at the hand of this vile <Actor.man_or_woman>.`)
            scene.filter("Aggressive")
            scene.talkNonConsensual()
            scene.sexNoAffair(Actor, Actor2)
        }
    })
    scene.timeout(500, "wi_locker_rape")
})
module.exports = scene