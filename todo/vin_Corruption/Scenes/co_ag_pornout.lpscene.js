// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Corruption\Scenes\co_ag_pornout.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'co_ag_pornout'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all"])
    scene.where(["all"])
    scene.when([8, 24])
    let Actor = Player.getCompanion()
    scene.who(($IF) => {
        Actor = Player.getCompanion()
        $IF(!Actor.isRelative() && Player.isInterestedIn(Actor) && (Player.perversion - Actor.perversion > 40 || Actor.isVirgin()) && Actor.attractionToPlayer > 10)
    })
    scene.other("none")


    scene.start(() => {
        if (!Actor.isValid() || scene.forcedTrigger()) {
            Actor = Player.getCompanion()
        }
        scene.setBackground("street")
        narrative(`<Actor.name> is such an innocent <Actor.guy_or_girl>. I reckon a little visit to my favorite X-rated cinema could help <Actor.him_or_her> open up a bit ...`)
        if (Actor.isVirgin()) {
            narrative(`Maybe this is my opportunity to seduce my way into deflowering this innocent virgin ...`)
        }
        narrative(`Should I?`)
        option([
            {text: `Take <Actor.him_or_her> to a porn cinema`},
            {text: `Not a good idea`},
        ])
        if (0) {
            narrative(`A while later ...`)
            Actor.dialogue(`<Player.name>, where are you taking me to? Wait, is this cinema showing ... adult movies?`, `Surprised`)
            Player.dialogue(`Come on. You're an adult - you are missing out by not watching these pieces of art ...`, `Flirty`)
            if (random(0, 200) < Player.interpersonal + Actor.attractionToPlayer + Actor.incest + Actor.perversion + Actor.masochist) {
                Actor.dialogue(`Fine ... I guess since we're already here, watching a movie won't hurt.`, `Embarrassed`)
                Actor.perversion += random(0, 0.5)
                scene.setBackground("cinema")
                narrative(`Half an hour later ...`)
                narrative(`<Actor.name> is clearly turned on by the steamy sex SCENEs unfolding in front of <Actor.him_or_her>. And it certainly helps that all the couples around us are already getting all intimate. Maybe it's my chance to get lucky?`)
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
                Actor.dialogue(`Hey, who do you take me for? No way I'm going in there!`, `Angry`)
                Player.masochist -= random(0, 0.25)
                Actor.attractionToPlayer -= random(0, 0.5)
            }
        } else {
            narrative(`Let's take this slow ... No way <Actor.he_or_she> would agree to go in such a place.`)
        }


    })
    scene.timeout(200, "co_ag_pornout")
})
module.exports = scene