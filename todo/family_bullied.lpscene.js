// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\family\family_bullied.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'family_bullied'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all", " -sleep_hotel", " -nap_hotel"])
    scene.where(["all", " -home"])
    scene.when([8, 22])
    let Actor = Player.getRelative("Cousin", "Sibling", "StepSibling", "Child", "StepChild")
    scene.who(($IF) => {
        Actor = Player.getRelative("Cousin", "Sibling", "StepSibling", "Child", "StepChild")
        $IF(Actor.age < 23 && Actor.rapportwithplayer > 30 && random(0, 500) < Actor.masochist - Actor.martial - Actor.interpersonal)
    })
    scene.other(($IF) => {
        $IF(random(0, 500) < Player.martial - Player.masochist)
    })


    scene.start(() => {
        let Actor2 = scene.generatePersonTemporary([])
        narrative(`My phone is ringing. It's my <Actor.relationship>, <Actor.name>, who is at university. I wonder what <Actor.he_or_she> is calling me for ...`)
        scene.secondScreen(Actor)
        Actor.dress()
        Actor.show(2)
        Actor2 = scene.generatePersonTemporary([])
        Actor2.blendPreset("bodybuilder")
        Actor.dialogue(`It's that bully <Actor2.name> again. <Actor2.He_or_She> hit me and stole my money!`, `Crying`)
        option([
            {text: `Console <Actor.him_or_her> on the phone`},
            {text: `Rush there to confront <Actor.name>'s bully`},
        ])
        if (0) {
            Player.dialogue(`Oh no, that sucks. I'm so sorry to hear that ... Maybe you should call the cops or the university's security.`, `Sad`)
            Player.masochist += random(0, 1)
        } else {
            scene.secondScreen()
            Actor.show()
            Actor.rapportwithplayer += random(0, 20)
            scene.setBackground("street")
            Actor2.dress()
            Actor2.show(3)
            Player.dialogue(`<Actor.name> told me everything! How dare you bully my <Actor.relationship>!?`, `Angry`)
            Player.moveToPerson(Actor2)
            Player.karma += 2.5
            Actor2.dialogue(`Shut up and get your nose out of our business! Unless you want to get beat up too ...`, `Furious`)
            option([
                {text: `Intimidate <Actor2.name>`},
                {text: `Beat <Actor2.name> up`, condition: Player.martial > 70},
            ])
            if (0) {
                narrative(`I'm not 100% confident about my ability to fight, but at least I know how to sound intimidating.`)
                Player.dialogue(`You lay a finger on my <Actor.relationship> again and you'll go home in a body bag!`, `Furious`)
                Actor2.dialogue(`Okay okay ... easy there. It was just a spur of the moment. I didn't mean to hurt <Actor.him_or_her> ...`, `Surprised`)
                Player.masochist -= random(0, 1)
            } else if (1) {
                Player.animate("martialart")
                Player.moveToPersonStand(Actor2, 100)
                Player.dialogue(`I'll teach you a lesson. Take this!`, `Furious`)
                Player.animate()
                Actor2.animate("fightlost")
                Actor2.dialogue(`Ah ...`, `Furious`)
                narrative(`And just like that, I proceeded to beat the crap out of <Actor2.name>. That would teach <Actor2.him_or_her> for bullying my dear <Actor.relationship>!`)
                Actor2.dialogue(`That's enough. Please stop hitting me. I wouldn't dare to harm <Actor.him_or_her> again.`, `Crying`)
                Player.masochist -= random(0, 0.5)
                Player.martial += random(0, 0.5)
            }


            Player.dialogue(`Let's get out of here, <Actor.name>.`, `Sad`)
            Actor2.hide()
            narrative(`A few hours later ...`)
            Actor.dialogue(`Thank you for standing up for me and being there for me. You're right. I need to gain more confidence and no bullies would dare to mess with me. You're the best <Actor.callplayer> ever!`, `Happy`)
        }


    })
    scene.timeout(1000, "family_bullied")
})
module.exports = scene