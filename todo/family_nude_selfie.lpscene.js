// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Incest\Scenes\family_nude_selfie.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'family_nude_selfie'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all", " -sleep", " -nap"])
    scene.where(["home"])
    scene.when([0, 24])
    let Actor = Player.getRelative()
    scene.who(($IF) => {
        Actor = Player.getRelative()
        $IF(Actor.livesWithPlayer() && Actor.isInterestedIn(Player) && random(50, 300) < Actor.perversion)
    })
    scene.other(($IF) => {
        $IF(Player.isAtHome())
    })


    scene.start(() => {
        Actor.dress()
        Actor.show(2)
        Actor.dialogue(`Look, I saw a cute dog on the way back home today and took a snap of him.`, `Happy`)
        Player.dialogue(`Really? Let me see ...`, `Happy`)
        Actor.hide()
        narrative(`My <Actor.relationship> gave me <Actor.his_or_her> phone to show me the picture. What a cute dog indeed! I wonder if <Actor.he_or_she> took more than one snap of the dog.`)
        option([
            {text: `Swipe for more`},
            {text: `Return the phone`},
        ])
        if (0) {
            narrative(`There must be more!`)
            Actor.strip()
            Actor.show(3)
            narrative(`What the fuck!`)
            narrative(`Oh no, there were no more cute dog pictures. Instead, the next photo was a nude selfie of my <Actor.relationship>. I wonder if <Actor.he_or_she> took it for a lover.`)
            narrative(`I didn't say anything though and proceeded to calmly swipe back to the dog photo and returned the phone to my <Actor.relationship>.`)
            Actor.incest += random(0, 2)
        } else {
            narrative(`Yeah, it's probably just the one photo that <Actor.he_or_she> wanted to show me.`)
        }


    })
    scene.timeout(200, "family_nude_selfie")
})
module.exports = scene