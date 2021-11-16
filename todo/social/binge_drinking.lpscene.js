// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\social\binge_drinking.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'binge_drinking'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all", " -go_to_the_bathroom"])
    scene.where(["bar", " pub"])
    scene.when([0, 24])
    scene.who("none")
    scene.other(($IF) => {
        $IF(Player.intoxication < 90 && random(0, 500) < Player.intoxication)
    })


    scene.start(() => {
        let Actor = scene.generatePerson()
        let Drunk = false
        Actor = scene.generatePerson()
        Actor.dress()
        Actor.show(2)


        narrative(`<Actor.name> approached me and challenged me to a drinking duel.`)
        option([
            {text: `Yes`},
            {text: `No`},
        ])
        if (0) {
            Drunk = false
            while (!Drunk) {
                narrative(`<Actor.name> downed <Actor.his_or_her> drink.`)
                narrative(`I downed mine`)
                Actor.intoxication += random(0, 15)
                Player.intoxication += random(0, 15)


                if (Actor.intoxication >= 100) {
                    narrative(`<Actor.name> seemed out of it now. I won the duel!`)
                    Player.money += random(50, 200)
                    Drunk = true
                } else if (Player.intoxication >= 100) {
                    narrative(`That's enough. I can't stomach another drink now. I lost the duel!`)
                    Player.money -= random(50, 200)
                    Drunk = true
                }
            }
        } else {
            narrative(`I'm a mature enough person to know better than engaging in drinking games like that.`)
        }


    })
    scene.timeout(200, "binge_drinking")
})
module.exports = scene