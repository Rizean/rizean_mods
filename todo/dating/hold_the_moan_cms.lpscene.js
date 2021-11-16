// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\dating\hold_the_moan_cms.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'hold_the_moan_cms'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all"])
    scene.where(["all"])
    scene.when([19, 24])
    let Actor = scene.getSpecific("Affair")
    let Actor2 = Actor.getRelatedPerson("Dating", "Spouses")
    scene.who(($IF) => {
        Actor = scene.getSpecific("Affair")
        Actor2 = Actor.getRelatedPerson("Dating", "Spouses")
        $IF(Actor.isContactExchanged() && random(70, 100) < Actor.perversion)
    })
    scene.other("none")


    scene.start(() => {
        let Loc = Actor.getBuilding("home")
        narrative(`My phone rang`)
        Actor.dress()
        scene.secondScreen(Actor)
        Actor.show()
        narrative(`It's <Actor.name>, who I have been having an affair with behind <Actor.his_or_her> <Actor2.boyfriend_or_girlfriend>'s back.`)
        Actor.dialogue(`<Actor2.name> is away tonight. Come over and fuck me!`)
        option([
            {text: `Hell yeah!`},
            {text: `Not tonight`},
        ])
        if (0) {
            Player.dialogue(`I'll be there as soon as I can, baby!`, `Flirty`)
            scene.secondScreen()
            Loc = Actor.getBuilding("home")
            Player.moveTo(Loc)
            scene.setBackground("home")
            Actor.show()
            narrative(`As soon as I arrived, we started making out.`)
            scene.sex(Player, Actor)
            narrative(`That was amazing. Affair sex is always the best.`)
            narrative(`Suddenly, <Actor.name>'s phone rang.`)
            Actor.animate("call")
            Actor.dialogue(`Yes baby, I'm at home ... missing you of course.`)
            narrative(`It's <Actor.his_or_her> <Actor2.boyfriend_or_girlfriend>, <Actor2.name> ... the poor unknowing victim of our affair.`)
            Actor2.dress()
            scene.secondScreen(Actor2)
            Actor2.show()
            Actor2.dialogue(`What are you doing?`)
            Actor.dialogue(`Nothing much, just watching a movie on Netflix.`)
            narrative(`To my surprise, <Actor.name> signalled to me to come over and continue fucking <Actor.him_or_her> ... while <Actor.he_or_she>'s still on the phone with <Actor.his_or_her> <Actor2.boyfriend_or_girlfriend>.`)
            option([
                {text: `Fuck <Actor.him_or_her> while <Actor2.name> is on the phone`},
                {text: `Too risky`},
            ])
            if (0) {
                scene.sex(Player, Actor)
            }
            scene.secondScreen(Actor2)
            Actor2.show()
            Actor.animate("call")
            Actor2.dialogue(`Baby? What's all that noise about? I think I heard someone ... moaning`)
            Actor.dialogue(`It's nothing baby, just some bad acting from someone pretending to cry in the movie I'm watching ...`)
        }
    })
    scene.timeout(200, "hold_the_moan_cms")
})
module.exports = scene