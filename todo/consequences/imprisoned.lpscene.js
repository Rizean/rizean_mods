// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\consequences\imprisoned.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'imprisoned'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["none"])
    scene.where(["none"])
    scene.when([0, 24])
    scene.who("none")
    scene.other("none")


    scene.start(() => {
        let Court = true
        let Actor = scene.generatePersonTemporary([])
        Court = true
        scene.setBackground("police")
        narrative(`I was taken back to the police station.`)
        Actor = scene.generatePersonTemporary([])
        Actor.dressUniform("police")
        narrative(`The officer in charge of my case is <Actor.name> <Actor.name_last>.`)
        if (random(0, 150) < Actor.attractionToPlayer + Actor.perversion) {
            narrative(`<Actor.name> didn't waste any time and offer to release me and clear my record if I just fuck <Actor.him_or_her>`)
            option([
                {text: `No way`},
                {text: `It's better than going to jail ...`},
            ])
            if (1) {
                scene.sex(Player, Actor)
                Court = false
            }
        } else {
            narrative(`Maybe I can try to seduce <Actor.him_or_her> to release me and clear my record?`)
            option([
                {text: `Yes`},
                {text: `I'd rather go to jail then lose my honour`},
            ])
            if (0) {
                if (random(0, 200) < Actor.attractionToPlayer + Actor.perversion) {
                    Actor.dialogue(`I suppose that's a fair deal!`)
                    scene.sex(Player, Actor)
                    Court = false
                } else {
                    Actor.dialogue(`I'm afraid you have been watching too much cop porn. I'm not one of those cops.`)
                }
            }
        }


        if (Court) {
            scene.setBackground("prison")
            narrative(`I've been arrested, awaiting trial for my crimes.`)
            option([
                {text: `Accept my fate`},
                {text: `Be represented by the world's best lawyer (consume all karma)`},
            ])
            if (0) {
                narrative(`The court-appointed lawyer didn't do me much good. I got the expected sentence and was sent on my way to jail.`)
                Player.imprison()
                scene.setBackground("prison")
            } else {
                narrative(`My world-class lawyer turned everything around and I was eventually cleared of all charges. I'm a free <Player.man_or_woman> again!`)
                Player.sentence = 0
                Player.karma -= 100
            }
        }
    })


})
module.exports = scene