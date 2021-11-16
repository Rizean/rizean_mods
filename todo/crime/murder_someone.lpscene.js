// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\crime\murder_someone.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'murder_someone'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["none"])
    scene.where(["none"])
    scene.when([0, 24])
    scene.who("none")
    scene.other("none")


    scene.start(() => {
        let Actor2 = Player.getSelectedNPC()
        narrative(`Who do I want dead?`)
        Player.selectNPC()
        Actor2 = Player.getSelectedNPC()
        Actor2.dress()
        Actor2.show(2)
        narrative(`Do I hate <Actor2.name> so much that I want <Actor2.him_or_her> dead?`)
        option([
            {text: `Yes`},
            {text: `No`},
        ])
        if (0) {
            narrative(`I started planning for the murder ...`)
            scene.setBackground("street")
            Player.animate("sneak")
            narrative(`That's <Actor2.name>, walking down a dark alley ... as if <Actor2.he_or_she> is asking to be an easy target. I just need to sneak behid <Actor2.him_or_her> and once within range, shoot the <Actor2.bastard_or_bitch> to death. Easy enough.`)
            narrative(`Alright, I must be very quiet here as to not alert <Actor2.him_or_her> ...`)
            narrative(`Just a few more steps and it will be perfect range for a headshot ...`)
            Player.animate("gun")
            Player.moveToPerson("Actor")
            scene.sneakGame()
            if (random(0, 100) < Player.sneak) {
                narrative(`Perfect ... It's time to end this.`)
                narrative(`Pow!`)
                Actor2.hide()
                Actor2.deletePerson()
                narrative(`Perfect headshot ... the <Actor2.bastard_or_bitch> was sent straight to Hell. Now, let's get out of here before the cops arrive.`)
                Player.karma -= 50
            } else {
                Actor2.dialogue(`Help! Somebody help!`, `Furious`)
                Actor2.hide()
                narrative(`Pow!`)
                narrative(`Damn it, I wasn't sneaky enough. <Actor2.name> was alerted and immediately ran off. In panic, I completely misfired my shot.`)
                scene.sneakGame()
                if (random(0, 100) < Player.sneak) {
                    narrative(`Thankfully, <Actor2.name> didn't see my face.`)
                } else {
                    narrative(`Sure enough, the cops promptly arrived at the SCENE.`)
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
            }
        } else {
            narrative(`<Actor2.name> is intolerable, but I'm not a murderer.`)
        }
    })
})
module.exports = scene