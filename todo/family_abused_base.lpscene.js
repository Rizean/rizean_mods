// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\family\family_abused_base.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'family_abused_base'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all", " -sleep_hotel", " -nap_hotel"])
    scene.where(["all", " -home"])
    scene.when([8, 22])
    let Actor = Player.getRelative("Cousin", "Sibling", "Child", "StepSibling", "StepChild")
    scene.who(($IF) => {
        Actor = Player.getRelative("Cousin", "Sibling", "Child", "StepSibling", "StepChild")
        $IF(!Actor.isAsexual() && Actor.rapportwithplayer > 30 && random(0, 500) < Actor.masochist - Actor.martial)
    })
    scene.other(($IF) => {
        $IF(random(0, 500) < Player.martial - Player.masochist)
    })


    scene.start(() => {
        let Actor2 = Actor.getRelatedPerson("Dating", "Spouses")
        let livesWithMe = Actor.livesWithPlayer()
        let Loc = Actor.getBuilding("home")
        narrative(`My phone is ringing. It's my <Actor.relationship>, <Actor.name>. I wonder what <Actor.he_or_she> is calling me for ...`)
        scene.secondScreen(Actor)
        Actor.dress()
        Actor.show(2)
        Actor2 = Actor.getRelatedPerson("Dating", "Spouses")
        if (!Actor2.isValid()) {
            Actor2 = scene.generatePersonTemporary([])
            while (!Actor.isInterestedIn(Actor2)) {
                Actor2 = scene.generatePersonTemporary([])
            }
            Actor2.makePermanent()
            scene.addNpcRelationship("Dating", Actor, Actor2)
        }
        livesWithMe = Actor.livesWithPlayer()
        Actor.dialogue(`It's my <Actor2.boyfriend_or_girlfriend> <Actor2.name> ... <Actor2.he_or_she> got all psycho and hit me again!`, `Crying`)
        option([
            {text: `Console <Actor.him_or_her> on the phone`},
            {text: `Rush home to confront <Actor.name>'s <Actor2.boyfriend_or_girlfriend>`, condition: livesWithMe},
            {text: `Rush to <Actor.name>'s place to confront <Actor.his_or_her> <Actor2.boyfriend_or_girlfriend>`, condition: !livesWithMe},
        ])
        if (0) {
            Player.dialogue(`Oh no, that sucks. I'm so sorry to hear that ... Maybe you should call the cops. Get a restraining order.`, `Sad`)
            Player.masochist += random(0, 1)
        } else {
            Actor.rapportwithplayer += random(0, 20)
            scene.secondScreen()
            Loc = Actor.getBuilding("home")
            Player.moveTo(Loc)
            Actor.show()
            Actor2.dress()
            Actor2.show(3)
            Player.dialogue(`<Actor.name> told me everything! How dare you abuse my <Actor.relationship>!?`, `Angry`)
            Player.moveToPerson(Actor2)
            Player.karma += 2.5
            Actor2.dialogue(`Shut up and get your nose out of our relationship! <Actor.He_or_She>'s my <Actor.boyfriend_or_girlfriend>. I can do whatever I want with <Actor.him_or_her>.`, `Furious`)
            scene.option([
                {text: `Intimidate <Actor2.name>`, condition: Player.interpersonal > 75},
                {text: `Beat <Actor2.name> up`, condition: Player.martial > 60},
                {text: `Just get <Actor.name> out of there`},
            ])
            if (0) {
                narrative(`I'm not 100% confident about my ability to fight, but at least I know how to sound intimidating.`)
                Player.dialogue(`You lay a finger on my <Actor.relationship> again and you'll go home in a body bag!`, `Furious`)
                Actor2.dialogue(`Okay okay ... easy there. It was just a spur of the moment. I didn't mean to hurt <Actor.him_or_her> ...`, `Surprised`)
                Actor2.hide()
                Player.masochist -= random(0, 1)
            } else if (1) {
                Player.animate("martialart")
                Player.moveToPersonStand(Actor2, 100)
                Player.dialogue(`I'll teach you a lesson. Take this!`, `Furious`)
                Player.animate()
                Actor2.animate("fightlost")
                Actor2.dialogue(`Ah ...`, `Furious`)
                narrative(`And just like that, I proceeded to beat the crap out of <Actor2.name>. That would teach <Actor2.him_or_her> for abusing my dear <Actor.relationship>!`)
                Actor2.dialogue(`That's enough. Please stop hitting me. I wouldn't dare to harm <Actor.him_or_her> again.`, `Crying`)
                Actor2.hide()
                Player.masochist -= random(0, 0.5)
                Player.martial += random(0, 0.5)
            }


            Player.dialogue(`Let's get out of here, <Actor.name>. You have suffered enough in the hands of this <Actor2.asshole_or_bitch>.`, `Sad`)
            Actor2.hide()
            narrative(`A few hours later ...`)
            Actor.dialogue(`Thank you for standing up for me and being there for me. I feel so much better now with you here. You're right. I deserve so much better than that <Actor2.asshole_or_bitch> of a <Actor2.boyfriend_or_girlfriend>. I'll be strong and break up with <Actor2.him_or_her>.`, `Happy`)
            scene.removeNpcRelationship(Actor, Actor2)
        }


    })
    scene.timeout(1000, "family_abused_base")
})
module.exports = scene