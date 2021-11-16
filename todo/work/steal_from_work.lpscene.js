// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\work\steal_from_work.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'steal_from_work'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, actionDuration} = scene

    scene.what(["work"])
    scene.where(["work"])
    scene.when([8, 20])
    scene.who("none")
    scene.other(($IF) => {
        $IF(random(0, 100) < 0.01 * Player.intelligence * actionDuration)
    })


    scene.start(() => {
        let Boss = scene.getSpecific("Boss")
        narrative(`My company has a procedure for claiming out-of-pocket expenses on business trips and client entertainments. It didn't take long for me to realize that there were plenty of holes to exploit in that procedure that I can take advantage of to make some quick cash. I suspect some of my colleagues are already doing it. Should I take this risk?`)
        option([
            {text: `Yes`},
            {text: `No`},
        ])
        if (0) {
            narrative(`How can I turn down money? What's life without risks?`)
            narrative(`My clever exploits earned me quite a bit of cash from all the expenses I claimed that were never actually incurred.`)
            Player.karma -= 10
            if (Player.intelligence > random(0, 100) * random(0, 1)) {
                Player.money += random(200, 2000)
                narrative(`However, I didn't go overboard in order to avoid suspicions and got away with it.`)
                Player.sneak += random(0, 2)
            } else {
                Boss = scene.getSpecific("Boss")
                Boss.dress()
                Boss.show(2)
                Player.dialogue(`<Boss.Mr_or_Ms> <Boss.name_last>, you called for me? Are there any issues? You look ... angry.`, `Happy`)
                Boss.dialogue(`I'll keep this short ... You're a thief and you're fired!`, `Angry`)
                Boss.hide()
                Player.loseJob()
                scene.setBackground("street")
                narrative(`Not only did I lose my job, my reputation as a thief was passed from one HR team to another. It's harder to get a decent job now ...`)
                Player.jobexperience -= random(0, 20)
                Player.mood -= 100
            }
        } else {
            narrative(`I think I like my job and my integrity too much to steal.`)
        }


        scene.timeout(750, "steal_from_work")
    })
})
module.exports = scene