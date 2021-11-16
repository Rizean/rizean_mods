// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Corruption\Scenes\co_wi_dickpic.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'co_wi_dickpic'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all", " -sleep", " -nap"])
    scene.where(["home"])
    scene.when([8, 20])
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
        narrative(`What's that sound? Ah, it's my <Actor.relationship> <Actor.name>'s phone. <Actor.He_or_She> must have forgotten it on the table ...`)
        narrative(`Wait, is that a nude pic? Let me see ...`)
        scene.secondScreen(Actor2)
        Actor2.show(2)
        narrative(`It is ... It's that <Actor2.sleazy_or_slutty> <Actor2.guy_or_girl> <Actor2.name> that <Actor.name> has been seeing ...`)
        option([
            {text: `Text back to intimidate <Actor2.name>`},
            {text: `Put the phone back`},
        ])
        if (0) {
            narrative(`That <Actor2.sleazy_or_slutty> <Actor2.asshole_or_bitch> is trying to corrupt my innocent <Actor.relationship>? Not happening under my watch!`)
            Player.dialogue(`Hey, it's <Actor.name>'s <Actor.callplayer> here! Stop sending my <Actor.relationship> these filthy pictures, will you? Or I'll beat you up!`, `Angry`)
            Actor2.rapportwithplayer -= random(0, 2)
            Player.karma += 1
        } else {
            narrative(`Perverted gifts in a relationship are normal. Nothing to worry about.`)
            Player.masochist += random(0, 1)
            Actor.perversion += random(0, 0.5)
        }


    })
    scene.timeout(500, "co_wi_dickpic")
})
module.exports = scene