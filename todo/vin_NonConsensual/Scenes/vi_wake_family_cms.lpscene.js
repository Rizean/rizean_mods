// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_NonConsensual\Scenes\vi_wake_family_cms.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'vi_wake_family_cms'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["sleep"])
    scene.where(["home"])
    scene.when([0, 24])
    let Actor = Player.getRelative()
    scene.who(($IF) => {
        Actor = Player.getRelative()
        $IF(Actor.livesWithPlayer() && Actor.isInterestedIn(Player) && Player.isInterestedIn(Actor) && Actor.perversion > 50 && Actor.masochist < -50)
    })
    scene.other(($IF) => {
        $IF(scene.isModEnabled("vin_Incest") && Player.masochist > 30)
    })


    scene.start(() => {
        let Rape = true
        Player.animate("na_sleep")
        Actor.show()
        narrative(`In the middle of the night ...`)
        Actor.animate("na_sleep")
        narrative(`I was suddenly awakened to the sight of horror, my <Actor.relationship> <Actor.name> already naked in my bed trying to rape me ...`)
        option([
            {text: `Resist`},
            {text: `Surrender ...`},
        ])
        if (0) {
            if (Player.martial < Actor.martial) {
                narrative(`Unfortunately, my <Actor.relationship> was too strong for me ...`)
                Rape = true
            } else {
                narrative(`I managed to push my <Actor.relationship> off me. Defeated, <Actor.he_or_she> promptly left ...`)
                Rape = false
            }
        } else {
            Rape = true
            Player.masochist += 2
        }
        if (Rape) {
            if (!Actor.isMale() && Player.isMale()) {
                scene.filter("AggressiveFM")
            } else {
                scene.filter("Aggressive")
            }
            scene.talkNonConsensual()
            scene.sex(Actor, Player)
        }


        narrative(`Now that this incident is over, what should I do about my <Actor.relationship>?`)
        scene.option([
            {text: `Confess that I enjoyed being raped by <Actor.him_or_her>`, condition: Rape},
            {text: `Kick them out of my place`},
            {text: `Call the cops and have <Actor.him_or_her> put away for good`},
        ])
        if (0) {
            narrative(`I confessed to my <Actor.relationship> that I enjoyed every second of <Actor.him_or_her> roughly forcing <Actor.himself_or_herself> on me ...`)
            Actor.dialogue(`It's good that you've learned to accept your place ...`)
            Actor.dialogue(`I'll make sure to give some plenty of attention in the future.`)
            Actor.incest = 100
        } else if (1) {
            Actor.setLivingWithPlayer("false")
            narrative(`I couldn't bring myself to put my <Actor.relationship> in jail which would make everyone know about the sexual assault and destroy my whole family.`)
        } else {
            narrative(`I decided to report the sexual assault. It was the most clear-cut case and the jury was especially appalled that it was my own <Actor.relationship> that did it.`)
            Actor.setLivingWithPlayer("false")
            Actor.deletePerson()
            narrative(`The jail sentence that was handed out was so long that I probably will never see my assaulter again ...`)
        }
    })
    scene.timeout(200, "vi_wake_family_cms")
})
module.exports = scene