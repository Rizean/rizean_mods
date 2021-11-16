// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Corruption\Scenes\co_vi_pornout.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'co_vi_pornout'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all"])
    scene.where(["all"])
    scene.when([8, 24])
    let Actor = Player.getCompanion()
    scene.who(($IF) => {
        Actor = Player.getCompanion()
        $IF(!Actor.isRelative() && Actor.isInterestedIn(Player) && Actor.perversion > 70 && Actor.attractionToPlayer > 10)
    })
    scene.other("none")


    scene.start(() => {
        scene.setBackground("street")


        narrative(`I was hanging out with <Actor.name> when <Actor.he_or_she> insisted that I followed <Actor.him_or_her> somewhere. I have a feeling that <Actor.he_or_she> is up to no good ...`)
        narrative(`A while later ...`)
        narrative(`I knew it! My <Actor.sleazy_or_slutty> date is trying to take me to a cinema showing X-rated movies ...`)
        option([
            {text: `Refuse to go in`},
            {text: `It's just a movie`},
        ])
        if (0) {
            Player.dialogue(`Hey, who do you take me for? No way I'm going in there!`, `Angry`)
            narrative(`The cheek of <Actor.him_or_her> ... taking a classy <Player.gentleman_or_lady> like me to this fifthy establishment.`)
            Player.masochist -= random(0, 0.25)
            Actor.attractionToPlayer -= random(0, 0.5)
        } else {
            Player.dialogue(`Fine ... I guess since we're already here, watching a movie won't hurt.`, `Embarrassed`)
            Player.perversion += random(0, 0.5)
            scene.setBackground("cinema")
            narrative(`I must admit: the sex SCENEs are steamy ... I'm feeling so aroused now. And it doesn't help that all the couples around are already getting all intimate. Let's just make sure <Actor.name> doesn't notice my rising arousal or my classy image will be ruined.`)
            Actor.dialogue(`You're sweating a lot, <Player.name>. This movie is turning you on, isn't it?`, `Flirty`)
            narrative(`Damn it! I couldn't hide it from <Actor.him_or_her>.`)
            Player.animatePair(Player, Actor, "Kissing")
            Actor.dialogue(`...`, `Kiss`)
            narrative(`<Actor.name> is trying to make out with me ... It's also clear that <Actor.he_or_she> is looking for more than a kiss.`)
            scene.option([
                {text: `Let it happen`, condition: Player.perversion > 30},
                {text: `Stop right there`},
            ])
            if (0) {
                Player.dialogue(`...`, `Kiss`)
                scene.sex(Actor, Player)
                Player.perversion += random(0, 2)
                Actor.dress()
            } else {
                Player.dialogue(`Let's get out this place. I don't feel comfortable with all of this.`, `Embarrassed`)
            }
        }
    })
    scene.timeout(200, "co_vi_pornout")
})
module.exports = scene