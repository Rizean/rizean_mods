// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\dating\dating_webcamshow.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'dating_webcamshow'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all", " -sleep", " -nap"])
    scene.where(["home"])
    scene.when([0, 24])
    let Dating = scene.getSpecific("Dating")
    scene.who(($IF) => {
        Dating = scene.getSpecific("Dating")
        $IF(Dating.perversion > random(70, 100))
    })
    scene.other(($IF) => {
        $IF(!Player.isWithCompanion() && random(0, 1000) < Player.intelligence)
    })


    scene.start(() => {


        narrative(`By accident, I found out that <Dating.name> has been paying for adult webcam shows online! In fact, I'm pretty sure it's one of <Dating.his_or_her> favorite pastimes when I'm not around. What should I do about this?`)
        option([
            {text: `Nothing`},
            {text: `Accuse <Dating.him_or_her> of cheating`},
        ])
        if (0) {
            narrative(`What's the big deal? <Dating.He_or_She> just has a healthy sex drive and needs to release when I'm not around. Watching a naked <Player.guy_or_girl> masturbating on webcam is harmless - It's not like <Dating.name> is actually fucking the webcam model!`)
            Player.perversion += random(0, 1)
            Player.masochist += random(0, 0.5)
        } else {
            narrative(`I got very upset and quite frankly, I considered this 'cyber cheating'. I made it known to <Dating.name> that this is unacceptable and must stop immediately if <Dating.name> wants to stay in a relationship with me.`)
            Dating.attractionToPlayer -= random(0, 2)
            Dating.perversion -= random(0, 1)
        }


        scene.timeout(200, "dating_webcamshow")
    })
})
module.exports = scene