// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Corruption\Scenes\co_wi_pornout.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'co_wi_pornout'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all"])
    scene.where(["all", " -home"])
    scene.when([8, 24])
    let Actor = Player.getRelative("Sibling", "StepSibling", "Cousin", "Child", "StepChild")
    let Actor2 = Actor.getRelatedPerson("Dating")
    scene.who(($IF) => {
        Actor = Player.getRelative("Sibling", "StepSibling", "Cousin", "Child", "StepChild")
        Actor2 = Actor.getRelatedPerson("Dating")
        $IF(Actor2.perversion - Actor.perversion > 40)
    })
    scene.other("none")


    scene.start(() => {
        scene.setBackground("street")
        Actor.dress()
        Actor.show(2)
        Actor2.dress()
        Actor2.show(3)
        narrative(`Wait, isn't that my <Actor.relationship> <Actor.name>? <Actor.He_or_She> is with that <Actor2.boyfriend_or_girlfriend> of <Actor.his_or_her>.`)
        narrative(`They're heading into a small street - I know this one. There's a well-known X-rated cinema in there!`)
        option([
            {text: `Try to stop them`},
            {text: `Do nothing`},
        ])
        if (0) {
            narrative(`That <Actor2.sleazy_or_slutty> <Actor2.asshole_or_bitch> is trying to corrupt my innocent <Actor.relationship>? This will not do at all!`)
            Player.dialogue(`Oh hi there <Actor.name>, fancy seeing you here!`, `Happy`)
            Actor.dialogue(`Nice to see you here, <Actor.callplayer>! You've met my <Actor2.boyfriend_or_girlfriend> <Actor2.name>, right?`, `Happy`)
            Player.dialogue(`Yes, I've met <Actor2.him_or_her>. Anyway, I'm sure <Actor2.name> here is taking you to that classy restaurant near here for a fancy meal - I won't bother you guys any longer.`, `Sarcastic`)
            Actor2.dialogue(`... Oh yes, of course, that's where I'm taking <Actor.him_or_her>.`, `Embarrassed`)
            Actor.dialogue(`Wow, that sounds nice. You should have just told me then, rather than acting all mysterious our whole trip here.`, `Happy`)
            Actor2.dialogue(`Oh well, it was supposed to be a surprise ... but your <Actor.callplayer> here clearly knows the town so well ...`, `Embarrassed`)
            Actor2.rapportwithplayer -= random(0, 2)
            Player.karma += 1
        } else {
            narrative(`It's their freedom to do whatever they want as a couple. Besides, I find <Actor.name> far too naive and innocent sometimes, opening up <Actor.his_or_her> mind a bit could only do some good for <Actor.him_or_her>.`)
            Actor.perversion += random(0, 2)
            Player.masochist += random(0, 1)
        }


    })
    scene.timeout(1000, "co_wi_pornout")
})
module.exports = scene