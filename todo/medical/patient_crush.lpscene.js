// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\medical\patient_crush.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'patient_crush'}, (scene) => {
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
        narrative(`I'm doing cancer screening with a patient, who was asked to strip down. I know I should stay professional, but I can't help but notice that the patient is far too comfortable naked in front of me and is making all sort of moves on me. <Actor.He_or_She> must be another one with fantasies of sleeping with a <Player.job>.`)
        option([
            {text: `I don't mind too much ...`},
            {text: `Ew ...`},
        ])
        if (0) {
            narrative(`The patient is quite hot so I don't mind the flirting too much. I wish I could touch <Actor.his_or_her> body right now ... Wait, I can! At least I have all the medical excuses to, and it's just me and <Actor.him_or_her> in this room right now. Besides, <Actor.he_or_she> looks like <Actor.he_or_she> might welcome it.`)
            option([
                {text: `Feel <Actor.him_or_her> up a bit`},
                {text: `Stay professional`},
            ])
            if (0) {
                narrative(`I took advantage of the cancer screening to get more than my fair share of touchy-feely. <Actor.He_or_She> seemed delighted by my response and brazenness.`)
                Player.perversion += random(0, 0.25)
                Player.arousal += random(0, 20)
            }


            narrative(`The examination is now done. I should ask the patient to put <Actor.his_or_her> clothes on. But damn, <Actor.he_or_she> is clearly not too keen on doing that ... still eye-banging me.`)
            option([
                {text: `Ask <Actor.name> to get dressed`},
                {text: `Give in to the temptation`},
            ])
            if (0) {
                Actor.dress()
                narrative(`The patient put <Actor.his_or_her> clothes back on, clearly disappointed. I then wrapped it up and welcomed the next patient.`)
            } else {
                Player.animatePair(Player, Actor, "Kissing")
                narrative(`Damn it, I can't take this anymore. I decided to give in, grabbed <Actor.him_or_her> and started making out.`)
                Player.dialogue(`...`, `Kiss`)
                Actor.dialogue(`...`, `Kiss`)
                narrative(`The patient is clearly keen on getting down and dirty with <Actor.his_or_her> <Player.job>. Well, I'm certainly ready too.`)
                scene.sex(Player, Actor)
                Player.perversion += random(0, 0.5)
            }
        } else {
            narrative(`Ew ... definitely not my type. Let's get this over and done with before I go blind from having to stare at this sloppy body for too long.`)
        }
    })
    scene.timeout(100, "patient_crush")
})
module.exports = scene