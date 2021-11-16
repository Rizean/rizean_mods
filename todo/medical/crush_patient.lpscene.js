// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\medical\crush_patient.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'crush_patient'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all"])
    scene.where(["hospital:work"])
    scene.when([0, 24])
    scene.who("none")
    scene.other(($IF) => {
        $IF(!Player.isAsexual())
    })


    scene.start(() => {
        let Actor = scene.generatePersonTemporary([])
        Actor = scene.generatePersonTemporary([])
        Actor.show(2)
        narrative(`I'm doing cancer screening with a patient, who was asked to strip down. I know I should stay professional, but I can't help but look at the patient's naked body`)
        option([
            {text: `<Actor.He_or_She> is hot!`},
            {text: `Ew ...`},
        ])
        if (0) {
            narrative(`The patient is insanely hot. I wish I could touch <Actor.his_or_her> body right now ... Wait, I can! At least I have all the medical excuses to, and it's just me and <Actor.him_or_her> in this room right now.`)
            option([
                {text: `Feel <Actor.him_or_her> up a bit`},
                {text: `Stay professional`},
            ])
            if (0) {
                narrative(`I took advantage of the cancer screening to get more than my fair share of touchy-feely. <Actor.He_or_She> seemed embarrassed and turned on by my touches, probably still assuming that this is part of the standard procedure.`)
                Player.karma -= 2.5
                Player.perversion += random(0, 0.25)
                Player.arousal += random(0, 20)
                Actor.attractionToPlayer += random(0, 10)
            }


            narrative(`The examination is now done. I should ask the patient to put <Actor.his_or_her> clothes on ... or not.`)
            option([
                {text: `Ask <Actor.name> to get dressed`},
                {text: `Make my move`},
            ])
            if (0) {
                Actor.dress()
                narrative(`The patient put <Actor.his_or_her> clothes back on. I should wrap this up and welcome the next patient.`)
                option([
                    {text: `Ask for <Actor.his_or_her> number`},
                    {text: `Just say goodbye`},
                ])
                if (0) {
                    narrative(`I found an excuse to get the patient's number, promising to text <Actor.him_or_her> when the results are available, something that the hospital admin staff do. <Actor.He_or_She> believed it right away though and didn't think twice before handing over <Actor.his_or_her> number.`)
                    Actor.makePermanent()
                    Player.exchangeContact(Actor)
                }
            } else {
                Player.animatePair(Player, Actor, "Kissing")
                narrative(`I decided to make my move, grabbed <Actor.him_or_her> and started making out.`)
                Player.dialogue(`...`, `Kiss`)
                if (random(0, 200) < Actor.attractionToPlayer + Actor.perversion) {
                    Actor.dialogue(`...`, `Kiss`)
                    narrative(`The patient is clearly keen on getting down and dirty with <Actor.his_or_her> <Player.job>. Well, I'm certainly ready too.`)
                    Actor.makePermanent()
                    scene.sex(Player, Actor)
                    Player.perversion += random(0, 0.5)
                    Actor.show(2)
                    Player.show(0)
                    narrative(`After the sex, we exchanged numbers and I went back to work before any of my colleagues noticed.`)
                    Player.exchangeContact(Actor)
                } else {
                    Actor.dialogue(`<Player.Job>, what are you doing? I'm getting out of here. What a dodgy hospital this is!`, `Angry`)
                    narrative(`Thankfully, the patient didn't report the incident to the hospital's management, or I would have been fired for unprofessional conduct.`)
                }
            }
        } else {
            narrative(`Ew ... definitely not my type. Let's get this over and done with before I go blind from having to stare at this sloppy body for too long.`)
        }
    })
    scene.timeout(100, "crush_patient")
})
module.exports = scene