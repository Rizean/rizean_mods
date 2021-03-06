// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\dating\ex\stalk_ex_online.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'stalk_ex_online'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["check_social_media"])
    scene.where(["PC"])
    scene.when([0, 24])
    let Actor = scene.getSpecific("ExDating")
    scene.who(($IF) => {
        $IF(Actor = scene.getSpecific("ExDating"))
    })
    scene.other(($IF) => {
        $IF(random(0, 100) < 10)
    })


    scene.start(() => {
        narrative(`I was just looking through my social media feeds when I noticed a photo ... with my ex <Actor.name> tagged in it.`)
        Actor.dress()
        Actor.show(2)
        narrative(`It's been a while since I've seen <Actor.his_or_her> face. I don't know why, but it feels incredibly tempting to click on that tagged name.`)
        scene.option([
            {text: `Resist the urge`, condition: Player.masochist < 50},
            {text: `Click on it`},
        ])
        if (0) {
            narrative(`I closed the browser window immediately. Checking on my ex on social media would do nothing but make me depressed ...`)
            Player.masochist -= random(0, 1)
        } else {
            narrative(`I just couldn't resist it and click on that name, which took me to <Actor.name>'s profile.`)
            narrative(`I spent the next hour looking at <Actor.his_or_her> posts and photos. If <Actor.he_or_she> is still heartbroken about me, <Actor.his_or_her> social media profile certainly doesn't show it. And who's that <Player.guy_or_girl> that <Actor.name> is with in half of the photos? Is that <Actor.his_or_her> new <Player.boyfriend_or_girlfriend>?`)
            narrative(`Eventually, I managed to convince myself to stop looking. Too late to stop me from feeling depressed now though ...`)
            Player.masochist += random(0, 1)
            Player.mood -= 50
        }


    })
    scene.timeout(200, "stalk_ex_online")
})
module.exports = scene