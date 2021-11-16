// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\work\international_transfer.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'international_transfer'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["work"])
    scene.where(["work"])
    scene.when([8, 11])
    scene.who("none")
    scene.other(($IF) => {
        $IF(random(0, 100) < 2)
    })


    scene.start(() => {
        let Transfer = scene.generatePerson()
        scene.setBackground("work")


        Transfer = scene.generatePerson()
        Transfer.addColleague()
        Transfer.dress()
        Transfer.show(2)


        narrative(`My company has offices in many countries and occasionally a staff member from one country is transferred to another. The latest case is <Transfer.name>, who is joining my department today.`)
        narrative(`How should I treat <Transfer.name>?`)
        option([
            {text: `Like everyone else`},
            {text: `Impress <Transfer.him_or_her> with my cultural awareness`},
        ])
        if (0) {
            narrative(`It's best to not try to be a smart ass or risk embarrassing myself.`)
        } else if (Player.intelligence > random(0, 100)) {
            narrative(`I impressed <Transfer.name> with my knowledge of <Transfer.his_or_her> country and culture. As a result, I became <Transfer.name>'s closest friend in the office and <Transfer.he_or_she> even taught me a basic command of <Transfer.his_or_her> language.`)
            Player.exchangeContact(Transfer)
            Player.interpersonal += random(0, 1)
            Player.intelligence += random(0, 0.5)
            Transfer.rapportwithplayer += random(0, 30)
            if (Transfer.isInterestedIn(Player)) {
                Transfer.attractionToPlayer += random(0, 15)
            }
        } else {
            narrative(`I tried very hard to impress but failed miserably. It turned out everything I knew about <Transfer.name>'s country were silly stereotypes hated by the locals. Instead of making friends with <Transfer.name>, I came across as ignorant and even slightly racist.`)
            Transfer.rapportwithplayer -= random(0, 10)
            Transfer.attractionToPlayer -= random(0, 5)
        }


    })
    scene.timeout(1000, "international_transfer")
})
module.exports = scene