// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\misc\naked_with_doctor.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'naked_with_doctor'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["get_a_health_checkup"])
    scene.where(["all"])
    scene.when([0, 24])
    scene.who("none")
    scene.other(($IF) => {
        $IF(!Player.isWithCompanion())
    })


    scene.start(() => {
        let Actor = scene.generatePerson()
        let Actor2 = scene.generatePersonTemporary([])


        Actor = scene.generatePerson()
        Actor.dressUniform("Doctor")
        Actor.show(2)
        narrative(`I decided to go for a health check-up. I was guided through the procedures by my doctor, <Actor.name>.`)
        narrative(`Now comes the genital examination. I was asked to strip down.`)
        Player.strip()


        if (Actor.perversion + Actor.attractionToPlayer > random(75, 125)) {
            narrative(`The examination started professional, but <Actor.he_or_she> is now lingering there for much longer than I feel is needed. This doctor is clearly a pervert! Although maybe I do enjoy this a bit.`)
            option([
                {text: `Storm out`},
                {text: `Give <Actor.him_or_her> my number`},
                {text: `Enjoy my 'happy ending'`, condition: scene.isModEnabled("vin_VanillaPorn") && Player.perversion > 50},
            ])
            if (0) {
                Player.dialogue(`Hey pervert, what the fuck do you think you're doing? This isn't a porno!`, `Furious`)
                narrative(`I stormed off and complained to the department head, threatening them with a rape lawsuit if <Actor.name> wasn't fired immediately.`)
                Actor.rapportwithplayer -= 100
                Actor.attractionToPlayer -= 100
                Player.masochist -= random(0, 1)
            } else if (1) {
                narrative(`I enjoyed <Actor.his_or_her> hands feeling me up but didn't want to do something too crazy right there.`)
                narrative(`Instead, I waited it out until the end of this very sensual examination to give <Actor.name> my personal number. <Actor.He_or_She> was delighted to have it.`)
                Player.exchangeContact(Actor)
                Player.perversion += random(0, 0.25)
            } else {
                narrative(`It was obvious what the cute doctor really wanted. And I wanted it too, right here!`)
                narrative(`<Actor.His_or_Her> stimulating got more and more intense and soon enough, I got up and started making out with the lucky doctor.`)
                scene.sex(Actor, Player)
                Player.show(0)
                Actor.show(2)
                Player.perversion += random(0, 1)
                Actor2 = scene.generatePersonTemporary([])
                Actor2.dressUniform("Nurse")
                Actor2.show(3)
                Actor2.dialogue(`Doctor, what is taking you so long? The next patient has been waiting for half an hour!`, `Happy`)
                Actor2.dialogue(`Doctor ... What on earth are you doing? This is so unprofessional ...`, `Shocked`)
                narrative(`Ooops, the nurse walked in on us ...`)
                option([
                    {text: `Join us!`},
                    {text: `Run`},
                ])
                if (0) {
                    Player.dialogue(`Come on and join us! I'm sure the other patients can wait!`, `Flirty`)
                    Actor2.dialogue(`Don't mind if I do ...`, `Flirty`)
                    scene.sex(Actor, Player, Actor2)
                    Player.perversion += random(0, 1)
                } else {
                    narrative(`This is so embarrassing. I should just get the hell out of here.`)
                }
            }
        } else {
            narrative(`Despite me being completely naked without even a piece of cloth covering my body, <Actor.name> remained completely professional in <Actor.his_or_her> genital examination.`)
        }


    })
    scene.timeout(500, "naked_with_doctor")
})
module.exports = scene