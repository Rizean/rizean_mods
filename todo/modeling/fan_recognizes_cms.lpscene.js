// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\modeling\fan_recognizes_cms.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'fan_recognizes_cms'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all"])
    scene.where(["all"," -home"," -work"," -prison"])
    scene.when([0, 24])
    scene.who("none")
    scene.other(($IF) => {
        $IF(random(1, 100) <  Player.modelfame  || random(1, 100) <  Player.pornfame)
    })


    scene.start(() => {
let Actor = scene.generatePersonTemporary([])
            Actor = scene.generatePersonTemporary([])
            Actor.dress()
            Actor.show()
            Actor.attractionToPlayer += 50
            Actor.rapportwithplayer += 50


            narrative(`I was stopped by a fan and asked for a picture. <Actor.He_or_She> introduced <Actor.himself_or_herself> as <Actor.name>`)
            option([
                {text: `Take a photo with the fan`},
                {text: `Ignore and walk away quickly`},
                    ])
            if (0) {
                    narrative(`It's the fans that keep my career going after all so it's not too much to ask to take the occasional selfies with them.`)
                    option([
                        {text: `Ask for the fan's number`},
                        {text: `Say goodbye`},
                                    ])
                    if (0) {
                            narrative(`The fan was absolutely star-struck that I asked for <Actor.his_or_her> number and of course gave it to me without hesitation.`)
                            Actor.makePermanent()
                            Player.exchangeContact(Actor)
                    }
            }
    })
            scene.timeout(200, "fan_recognizes_cms")
})
module.exports = scene