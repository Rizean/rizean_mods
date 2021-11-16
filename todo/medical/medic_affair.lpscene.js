// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\medical\medic_affair.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'medic_affair'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all"])
    scene.where(["hospital:work"])
    scene.when([0, 24])
    let Actor = scene.getSpecific("Doctor", "Nurse")
    let Actor2 = scene.getSpecific("Doctor", "Nurse")
    scene.who(($IF) => {
        Actor = scene.getSpecific("Doctor", "Nurse")
        Actor2 = scene.getSpecific("Doctor", "Nurse")
        $IF(!Actor.isDating() && !Actor2.isDating() && Actor2.isInterestedIn(Actor) && Actor.isInterestedIn(Actor2) && Actor.perversion + Actor2.perversion > random(75, 150))
    })
    scene.other("none")


    scene.start(() => {
        Actor2.dressUniform()
        Actor2.show(3)


        Actor.dressUniform()
        Actor.show(2)


        narrative(`Wait, are those my colleagues <Actor2.job> <Actor2.name_last> and <Actor.job> <Actor.name_last> walking together towards a storeroom?`)
        narrative(`What should I do?`)
        option([
            {text: `Follow them`},
            {text: `No big deal`},
        ])
        if (0) {
            narrative(`Could they be having an affair? Who says that doctors and nurses work too much and have boring sex lives?`)
            narrative(`What should I do now?`)
            option([
                {text: `Peep`},
                {text: `Leave it`},
            ])
            if (0) {
                scene.sneakGame()
                if (random(0, 100) < Player.sneak) {
                    narrative(`Luckily, they forgot to lock the door behind them, leaving me an easy opening to have a peek.`)
                    scene.sex(Actor, Actor2)
                    Actor.hide()
                    Actor2.hide()
                    Player.show(0)
                } else {
                    narrative(`Unfortunately, they locked the door as soon as they went inside the storeroom and I couldn't see a thing.`)
                }
            }


            narrative(`Now, what should I do about what I saw?`)
            option([
                {text: `Tell everyone`},
                {text: `Stay silent`},
            ])
            if (0) {
                narrative(`I decided to spread the rumour to the rest of the hospital's staff, which <Actor.name> firmly denied.`)
                Actor.rapportwithplayer -= random(0, 5)
                Actor2.rapportwithplayer -= random(0, 10)
                Player.karma -= 10
            } else {
                narrative(`Let's be honest: I would totally bang a colleague myself if I have the chance. I feel for <Actor2.name> here. Let's not destroy their careers.`)
            }
        } else {
            narrative(`Who cares? They're probably just looking for some medical supplies together.`)
        }


    })
    scene.timeout(500, "medic_affair")
})
module.exports = scene