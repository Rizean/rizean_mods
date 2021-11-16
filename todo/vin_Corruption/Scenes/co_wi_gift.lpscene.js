// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Corruption\Scenes\co_wi_gift.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'co_wi_gift'}, (scene) => {
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
        narrative(`Hmm, what's this? It's a parcel for my <Actor.relationship> <Actor.name> ...`)
        narrative(`It's a gift from <Actor.his_or_her> <Actor2.boyfriend_or_girlfriend> <Actor2.name> ... 'I hope this keeps you company when I'm not around'`)
        narrative(`What the hell is <Actor2.he_or_she> on about? I'm getting curious now. Let's unpack it ...`)
        narrative(`It's a <Actor.Fleshlight_or_dildo>!`)
        option([
            {text: `Throw it away`},
            {text: `Repack it`},
        ])
        if (0) {
            narrative(`That <Actor2.sleazy_or_slutty> <Actor2.asshole_or_bitch> is trying to corrupt my innocent <Actor.relationship>? Not happening under my watch!`)
            Actor2.rapportwithplayer -= random(0, 2)
            Player.karma += 1
        } else {
            narrative(`Perverted gifts in a relationship are normal. Nothing to worry about.`)
            Player.masochist += random(0, 1)
            Actor.perversion += random(0, 0.5)
        }


    })
    scene.timeout(500, "co_wi_gift")
})
module.exports = scene