// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\hourly\maid_steals.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'maid_steals'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["work_hourly"])
    scene.where(["hotel"])
    scene.when([0, 24])
    scene.who("none")
    scene.other(($IF) => {
        $IF(random(0, 1000) < Player.sneak)
    })


    scene.start(() => {
        let Actor = scene.generatePersonTemporary([])
        scene.setBackground("home")
        narrative(`I was cleaning a room when I spotted a wallet under the bed. The guest staying in this room must have forgotten it.`)
        option([
            {text: `Steal some cash`},
            {text: `Leave it`},
        ])
        if (0) {
            narrative(`Most people don't remember how much cash they have left in their wallet. Taking some won't hurt ...`)
            Player.karma -= 2.5
            scene.sneakGame()
            if (random(0, 100) < Player.sneak * 2) {
                Player.sneak += random(0, 0.5)
                Player.money += random(0, 200)
            } else {
                narrative(`Suddenly, the door opened. What rotten luck! The guest is back ...`)
                Actor = scene.generatePersonTemporary([])
                Actor.dress()
                Actor.show(2)
                Actor.dialogue(`What on earth do you think you're doing? Thief!`, `Angry`)
                option([
                    {text: `Make excuse`},
                    {text: `Offer sex`, condition: scene.isModEnabled("vin_VanillaPorn") && Player.perversion > 30},
                ])
                if (0 && random(0, 100) < Player.interpersonal) {
                    narrative(`I managed to bluff my way out of trouble in the end with my slick tongues. Phew, that was close ...`)
                } else if (1 && random(50, 100) < Actor.perversion + Actor.attractionToPlayer) {
                    Actor.dialogue(`Oh well ... if that's on offer then I can consider not telling your manager all about this.`, `Flirty`)
                    scene.sex(Player, Actor)
                    Player.perversion += random(0, 0.5)
                } else {
                    narrative(`None of what I was saying impressed the guest. <Actor.He_or_She> went straight to my manager. I was fined heavily and was lucky to not get fired over this incident.`)
                    Player.money -= random(50, 250)
                    Player.mood -= random(0, 50)
                }
            }
        } else {
            narrative(`The hotel keeps records of who cleans which room on a given day. There's no way I can get away with theft.`)
        }
    })
    scene.timeout(72, "maid_steals")
})
module.exports = scene