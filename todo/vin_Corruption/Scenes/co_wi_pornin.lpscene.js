// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Corruption\Scenes\co_wi_pornin.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'co_wi_pornin'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all", " -sleep", " -nap"])
    scene.where(["home"])
    scene.when([17, 24])
    let Actor = Player.getRelative("Sibling", "StepSibling", "Cousin", "Child", "StepChild")
    let Actor2 = Actor.getRelatedPerson("Dating")
    scene.who(($IF) => {
        Actor = Player.getRelative("Sibling", "StepSibling", "Cousin", "Child", "StepChild")
        Actor2 = Actor.getRelatedPerson("Dating")
        $IF(Actor.livesWithPlayer() && Actor2.perversion - Actor.perversion > 40)
    })
    scene.other(($IF) => {
        $IF(Player.isAtHome())
    })


    scene.start(() => {
        Actor.dress()
        Actor.show(2)
        Actor2.dress()
        Actor2.show(3)
        narrative(`My <Actor.relationship> is lying in <Actor.his_or_her> bed with <Actor.his_or_her> <Actor2.boyfriend_or_girlfriend> watching something on <Actor.his_or_her> TV screen.`)
        narrative(`Wait, is that ... porn they're watching? That looks like far too much skin showing to be an innocent movie surely.`)
        narrative(`What influence this <Actor2.guy_or_girl> is having on my <Actor.relationship>! <Actor.name> has always been such an innocent <Actor.guy_or_girl>.`)
        option([
            {text: `Sabotage them`},
            {text: `Leave it`},
        ])
        if (0) {
            narrative(`That <Actor2.sleazy_or_slutty> <Actor2.asshole_or_bitch> is trying to corrupt my innocent <Actor.relationship>? Not happening under my watch!`)
            narrative(`I went ahead and switched off electricity in the apartment.`)
            narrative(`Now, let's pretend it's nothing to do with me.`)
            Player.dialogue(`Damn it, power cut again! Looks like I'll have to wash these clothes by hand then.`, `Angry`)
            Actor2.rapportwithplayer -= random(0, 2)
            Player.karma += 1
        } else {
            narrative(`Nothing wrong with a couple watching porn together ...`)
            Player.masochist += random(0, 1)
            Actor.perversion += random(0, 0.5)
        }
    })
    scene.timeout(500, "co_wi_pornin")
})
module.exports = scene