// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\hourly\maid_peeps.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'maid_peeps'}, (scene) => {
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
        let Actor2 = scene.generatePersonTemporary([])
        Player.dialogue(`Housekeeper!`, `Happy`)
        narrative(`There's no answer and the door is slightly open ...`)
        scene.setBackground("home")
        Actor = scene.generatePersonTemporary([])
        Actor2 = scene.generatePersonTemporary([])
        Actor.show(2)
        Actor2.show(3)
        narrative(`Wait ... is that sound what I think it is? These guests seem to be having some intimate time.`)
        scene.option([
            {text: `Peep`, condition: Player.perversion > 5},
            {text: `Leave`},
        ])
        if (0) {
            narrative(`My curiosity got the better of me. I couldn't help but stay there and get a sneaky eyeful of the action.`)
            Player.karma -= 1
            Player.perversion += random(0, 0.5)
            Player.sneak += random(0, 0.5)
            scene.sex(Actor, Actor2)
            Actor.show(3)
            Actor2.show(2)
            Player.show(0)
            narrative(`That was hot. But it looks like they're already ready for another round ...`)
            option([
                {text: `Offer to join them`},
                {text: `Enough`},
            ])
            if (0) {
                Player.dialogue(`Looks like you guys are having some fun there? Mind if I join?`, `Flirty`)
                if (random(50, 100) < Actor.perversion || random(30, 100) < Actor.attractionToPlayer) {
                    Actor.dialogue(`I didn't realize this hotel employs such perverts as housekeepers ... Come on and join us then, what are you waiting for?`, `Flirty`)
                    scene.sex(Actor, Actor2, Player)
                    Player.perversion += random(0, 1)
                } else {
                    Actor.dialogue(`What the fuck are you doing here, peeping Tom? Get out or I'll call the manager.`, `Angry`)
                    Actor.rapportwithplayer -= random(0, 3)
                }
            } else {
                narrative(`I should get out of here before I get caught.`)
            }
        } else {
            narrative(`Oh well, I take that as a virtual 'Do not disturb' sign then ... I'll just move on to clean the next room.`)
        }
    })
    scene.timeout(48, "maid_peeps")
})
module.exports = scene