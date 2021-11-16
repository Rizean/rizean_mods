// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\consequences\death.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'death'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, CurrentCompanion} = scene

    scene.what(["none"])
    scene.where(["none"])
    scene.when([0, 24])
    scene.who("none")
    scene.other("none")


    scene.start(() => {
        scene.setBackground("hospital")
        if (Player.isWithCompanion()) {
            CurrentCompanion.hide()
        }
        narrative(`I was rushed to a hospital on an ambulance as I began to lose consciousness. My last thought was about how very bad decisions in life led me down this path and what I could have done differently`)
        option([
            {text: `Black out`},
        ])
        Player.hide()
        narrative(`Maybe this emergency room is where I depart from this life.`)
        option([
            {text: `The surgeons tried in vain ...`},
            {text: `A miracle happened (consume all karma)`},
        ])
        if (0) {
            narrative(`The surgeons tried their best, but the operation was ultimately unsuccessful. My life was over ...`)
            narrative(`GAME OVER!`)
            option([
                {text: `Load last save`},
                {text: `Revive my character (consume all karma)`},
            ])
            if (0) {
                scene.sceneEndLoadLastSave()
            } else {
                Player.karma -= 100
            }
        } else {
            narrative(`The heart stopped beating for minutes, but somehow I was revived. Even the doctors told me afterwards that it was a medical miracle.`)
            Player.karma -= 100
        }
    })
})
module.exports = scene