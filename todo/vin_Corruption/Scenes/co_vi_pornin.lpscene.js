// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Corruption\Scenes\co_vi_pornin.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'co_vi_pornin'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["watch_a_movie_in"])
    scene.where(["home"])
    scene.when([8, 24])
    let Actor = Player.getCompanion()
    scene.who(($IF) => {
        Actor = Player.getCompanion()
        $IF(!Actor.isRelative() && Actor.isInterestedIn(Player) && Actor.perversion > 70 && Actor.attractionToPlayer > 10)
    })
    scene.other(($IF) => {
        $IF(Player.isAtHome())
    })


    scene.start(() => {
        Actor.dialogue(`That's a good movie. But I've got something even better.`, `Happy`)
        Player.dialogue(`Oh, have you? Let's watch it then.`, `Surprised`)
        narrative(`<Actor.name> took out a DVD from <Actor.his_or_her> bag and put it in the DVD player.`)
        narrative(`The intro starts. The movie title is 'The Private Gladiator' ...`)
        narrative(`Hmm, I watched the one with Russell Crowe ... Maybe this is a sequel ...`)
        narrative(`A few minutes later ...`)
        narrative(`Oh no, this is clearly a porn parody. I can't believe that <Actor.name> tricked me into watching this obSCENE content.`)
        option([
            {text: `Continue watching anyway`},
            {text: `Turn off the TV`},
        ])
        if (0) {
            narrative(`I don't want to come across as a prude ... Let's just bear this. It's only a movie, right ...`)
            narrative(`Half an hour later ...`)
            narrative(`I must admit: the sex SCENEs are steamy ... I'm feeling so aroused now. Let's make sure <Actor.name> doesn't notice that or my classy image will be ruined.`)
            Player.perversion += random(0, 0.5)
            Actor.dialogue(`You're sweating a lot, <Player.name>. This movie is turning you on, isn't it?`, `Flirty`)
            narrative(`Damn it! I couldn't hide it from <Actor.him_or_her>.`)
            Player.animatePair(Player, Actor, "Kissing")
            Actor.dialogue(`...`, `Kiss`)
            narrative(`<Actor.name> is trying to make out with me ... It's also clear that <Actor.he_or_she> is looking for more than a kiss.`)
            option([
                {text: `Let it happen`},
                {text: `Stop right there`},
            ])
            if (0) {
                Player.dialogue(`...`, `Kiss`)
                scene.sex(Actor, Player)
                Player.perversion += random(0, 1)
                Actor.dress()
            } else {
                narrative(`This is escalating way too quickly. I need to walk away and calm down.`)
            }
        } else {
            Player.dialogue(`Hey, not cool! I'm not watching this sort of stuff with you.`, `Angry`)
            Actor.attractionToPlayer -= random(0, 1)
        }
    })
    scene.timeout(200, "co_vi_pornin")
})
module.exports = scene