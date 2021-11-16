// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\hourly\train_new_staff.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'train_new_staff'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["work_hourly"])
    scene.where(["all"])
    scene.when([0, 24])
    scene.who("none")
    scene.other(($IF) => {
        $IF(random(50, 1000) < Player.interpersonal)
    })


    scene.start(() => {
        let Actor = scene.generatePerson()
        Actor = scene.generatePerson()
        Actor.dress()
        Actor.show(2)
        narrative(`<Actor.name> just joined the team. I have been asked to train <Actor.him_or_her> on the job.`)
        option([
            {text: `Train <Actor.him_or_her> enthusiastically`},
            {text: `Focus on my own work`},
        ])
        if (0) {
            narrative(`I decided to be a good trainer, passing on my experience to the newcomer. <Actor.name> got on very well thanks to my efforts.`)
            Actor.rapportwithplayer += 10
            Actor.attractionToPlayer += 5
            Player.karma += 2.5
        } else {
            narrative(`In this service industry, turnover rate is high and people come and go easily. Who cares? Why should I waste much time training someone who might quit next week.`)
            Actor.rapportwithplayer -= 10
        }
    })
    scene.timeout(500, "train_new_staff")
})
module.exports = scene