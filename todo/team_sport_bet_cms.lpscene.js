// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\gym\team_sport_bet_cms.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'team_sport_bet_cms'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, choice} = scene

    scene.what(["play_a_team_sport"])
    scene.where(["all"])
    scene.when([0, 24])
    scene.who("none")
    scene.other(($IF) => {
        $IF()
    })


    scene.start(() => {
        let Actor = scene.generatePersonTemporary([])
        let bet = 200
        narrative(`We're about to play a game against one of our fiercest rivals with a team captain that I hate.`)
        Actor = scene.generatePersonTemporary([])
        Actor.dress()
        Actor.show()
        narrative(`<Actor.name> dared me to a bet whether my team was going to win or not`)
        option([
            {text: `Go big on the bet`},
            {text: `Have a moderate bet`},
            {text: `Just a small bet`},
            {text: `No bet`},
        ])
        if (3) {
            narrative(`I decided not to bet this time.`)
        } else {
            if (0) {
                bet = 200
            } else if (1) {
                bet = 100
            } else {
                bet = 50
            }


            if (Actor.fitness < Player.fitness) {
                narrative(`My team won the match, I won the bet.`)
                narrative(`The other team captain had no choice but pay up`)
                Player.money += bet
            } else {
                narrative(`My team lost the match, I lost the bet.`)
                narrative(`The other team captain is now demanding that I pay up`)
                option([
                    {text: `Pay <Actor.him_or_her>`},
                    {text: `Have sex with <Actor.him_or_her> as payment`},
                ])
                if (0) {
                    Player.money -= bet
                } else {
                    Actor.dialogue(`Look at you! I'm starting to suspect you lost on purpose.`)
                    Actor.dialogue(`Fine, come, I'll take your alternative payment ...`)
                    scene.sex(Actor, Player)
                }
            }
        }
    })
    scene.timeout(200, "team_sport_bet_cms")
})
module.exports = scene