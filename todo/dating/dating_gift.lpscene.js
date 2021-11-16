// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\dating\dating_gift.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'dating_gift'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, CurrentCompanion} = scene

    scene.what(["all"])
    scene.where(["all"])
    scene.when([0, 24])
    scene.who("none")
    scene.other(($IF) => {
        $IF(Player.isWithCompanion() && random(0, 500) < CurrentCompanion.attractionToPlayer && !CurrentCompanion.isRelative())
    })


    scene.start(() => {
        CurrentCompanion.show(2)


        narrative(`I was walking with <CurrentCompanion.name> when <CurrentCompanion.he_or_she> suddenly stops to say something to me.`)
        CurrentCompanion.dialogue(`Look, I got you a gift.`, `Happy`)
        option([
            {text: `Thank <CurrentCompanion.him_or_her>`},
            {text: `Thank <CurrentCompanion.him_or_her> with sex`, condition: Player.perversion > 50 || CurrentCompanion.isDating()},
            {text: `Refuse the gift`},
        ])
        if (0) {
            narrative(`I thanked <CurrentCompanion.name> for being so thoughtful and said I enjoyed the gift very much`)
            Player.dialogue(`Wow, you really do know what I like ...`, `Excited`)
            CurrentCompanion.attractionToPlayer += random(0, 1)
        } else if (1) {
            Player.dialogue(`Aw, that's so sweet of you. You know what? I think you deserve more than a normal thank-you, don't you agree?`, `Flirty`)
            if (CurrentCompanion.isDating() || random(0, 100) < CurrentCompanion.perversion + CurrentCompanion.attractionToPlayer) {
                CurrentCompanion.dialogue(`Yes, I absolutely agree ...`, `Flirty`)
                Player.moveTo("home")
                narrative(`We went back to my place. As soon as we were there, I proceeded to give <CurrentCompanion.him_or_her> <CurrentCompanion.his_or_her> reward.`)
                scene.sex(Player, CurrentCompanion)
                CurrentCompanion.show(2)
                CurrentCompanion.dialogue(`You know what? I think I will give you even more gifts now every day. It's definitely worth it.`, `Flirty`)
                CurrentCompanion.attractionToPlayer += random(0, 5)
                Player.perversion += random(0, 0.25)
            } else {
                CurrentCompanion.dialogue(`No, that's not necessary. I was just trying to be nice, don't read too much into it. I'm not expecting anything from you.`, `Irritated`)
                narrative(`Oh well, I thought I would offer. It's <CurrentCompanion.his_or_her> loss being too much of a <CurrentCompanion.gentleman_or_lady>.`)
                CurrentCompanion.attractionToPlayer -= random(0, 1)
            }
        } else {
            narrative(`I decided to refuse the gift. <CurrentCompanion.name> seemed quite offended.`)
            CurrentCompanion.attractionToPlayer -= random(0, 2)
        }


        scene.timeout(72, "dating_gift")
    })
})
module.exports = scene