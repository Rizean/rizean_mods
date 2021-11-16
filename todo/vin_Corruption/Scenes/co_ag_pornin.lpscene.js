// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Corruption\Scenes\co_ag_pornin.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'co_ag_pornin'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["watch_a_movie_in"])
    scene.where(["home"])
    scene.when([8, 24])
    let Actor = Player.getCompanion()
    scene.who(($IF) => {
        Actor = Player.getCompanion()
        $IF(!Actor.isRelative() && Player.isInterestedIn(Actor) && (Player.perversion - Actor.perversion > 40 || Actor.isVirgin()) && Actor.attractionToPlayer > 10)
    })
    scene.other(($IF) => {
        $IF(Player.isAtHome())
    })


    scene.start(() => {
        if (!Actor.isValid() || scene.forcedTrigger()) {
            Actor = Player.getCompanion()
        }
        scene.setBackgroundCustom("livingroom")
        narrative(`I've just finished watching a movie with <Actor.name>, which reminded me that I happened to have a porn dvd in my bag right now ...`)
        if (Actor.isVirgin()) {
            narrative(`Maybe this is my opportunity to seduce my way into deflowering this innocent virgin ...`)
        }
        narrative(`Should I?`)
        option([
            {text: `Trick <Actor.him_or_her> into watching it together`},
            {text: `Maybe not`},
        ])
        if (0) {
            Player.dialogue(`That's a good movie. But I've got something even better.`, `Happy`)
            Actor.dialogue(`Oh, have you? Let's watch it then.`, `Surprised`)
            narrative(`I took out the DVD from my bag and put it in the DVD player.`)
            narrative(`A few minutes later ...`)
            narrative(`The first sex SCENE is starting. It should be obvious now what kind of movie this is. Let's see how <Actor.name> reacts ...`)
            if (random(0, 200) < Player.interpersonal + Actor.attractionToPlayer + Actor.incest + Actor.perversion + Actor.masochist) {
                narrative(`To my pleasant surprise, <Actor.name> didn't seem to mind and continued watching ...`)
                Actor.perversion += random(0, 0.5)
                narrative(`Half an hour later ...`)
                narrative(`<Actor.name> is clearly turned on by the steamy sex SCENEs unfolding in front of <Actor.him_or_her>. Maybe it's my chance to get lucky?`)
                option([
                    {text: `Try to make out with <Actor.him_or_her>`},
                    {text: `Maybe not`},
                ])
                if (0) {
                    Player.dialogue(`You're sweating a lot, <Actor.name>. This movie is turning you on, isn't it?`, `Flirty`)
                    Player.animatePair(Player, Actor, "Kissing")
                    Player.dialogue(`...`, `Kiss`)
                    if (random(100, 300) < Player.interpersonal + Actor.attractionToPlayer + Actor.incest + Actor.perversion + Actor.masochist) {
                        Actor.dialogue(`...`, `Kiss`)
                        scene.sex(Actor, Player)
                        Actor.perversion += random(0, 1)
                        Actor.dress()
                    } else {
                        Actor.dialogue(`Get off me! I'm not that easy!`, `Angry`)
                    }
                }
            } else {
                Actor.dialogue(`Hey, not cool! I'm not watching this sort of stuff with you.`, `Angry`)
                Actor.attractionToPlayer -= random(0, 1)
            }
        } else {
            narrative(`Knowing <Actor.name>, <Actor.he_or_she> would surely walk out the minute <Actor.he_or_she> realizes it's a porn movie.`)
        }
    })
    scene.timeout(200, "co_ag_pornin")
})
module.exports = scene