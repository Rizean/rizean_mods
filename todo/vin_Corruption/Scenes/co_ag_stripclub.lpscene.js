// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Corruption\Scenes\co_ag_stripclub.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'co_ag_stripclub'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all"])
    scene.where(["all", " -stripclub"])
    scene.when([20, 3])
    let Actor = Player.getCompanion()
    scene.who(($IF) => {
        Actor = Player.getCompanion()
        $IF(!Actor.isRelative() && Player.isInterestedIn(Actor) && (Player.perversion - Actor.perversion > 40 || Actor.isVirgin()) && Actor.attractionToPlayer > 10)
    })
    scene.other("none")


    scene.start(() => {
        let Stripper = scene.generatePersonTemporary([])
        let Stripper2 = scene.generatePersonTemporary([])
        if (!Actor.isValid() || scene.forcedTrigger()) {
            Actor = Player.getCompanion()
        }
        scene.setBackground("street")
        narrative(`<Actor.name> is such an innocent <Actor.guy_or_girl>.`)
        if (Actor.isVirgin()) {
            narrative(`I'm pretty sure <Actor.he_or_she> is still a virgin too ...`)
        }
        narrative(`I reckon a little visit to my favorite stripclub could help <Actor.him_or_her> open up a bit ...`)
        option([
            {text: `Take <Actor.him_or_her> to a stripclub`},
            {text: `Not a good idea`},
        ])
        if (0) {
            narrative(`A while later ...`)
            Actor.dialogue(`<Player.name>, where are you taking me to? Wait, is this a ... stripclub?`, `Surprised`)
            Player.dialogue(`Come on. You're an adult - you've got to go to a stripclub at least once in your life, surely?`, `Flirty`)
            if (random(0, 200) < Player.interpersonal + Actor.attractionToPlayer + Actor.incest + Actor.perversion + Actor.masochist) {
                Actor.dialogue(`Fine ... I guess since we're already here, I want to see what the fuss is all about.`, `Embarrassed`)
                Actor.perversion += random(0, 0.5)
                scene.setBackground("nightclub")
                Stripper = scene.generatePersonTemporary([])
                while (!Actor.isSameGender(Stripper)) {
                    Stripper = scene.generatePersonTemporary([])
                }


                Stripper2 = scene.generatePersonTemporary([])
                while (!Actor.isSameGender(Stripper2)) {
                    Stripper2 = scene.generatePersonTemporary([])
                }
                Stripper.blendPreset("twenties")
                Stripper2.blendPreset("twenties")


                if (Stripper.isMale()) {
                    Stripper.blendPreset("bodybuilder")
                } else {
                    Stripper.blendPreset("hourglass1_F")
                }
                Stripper.randomizeFace()
                Stripper.randomizeHairs()


                if (Stripper2.isMale()) {
                    Stripper2.blendPreset("bodybuilder")
                } else {
                    Stripper2.blendPreset("hourglass1_F")
                }
                Stripper2.randomizeFace()
                Stripper2.randomizeHairs()


                Stripper.show(2)
                Stripper2.show(3)
                narrative(`<Actor.name> seems impressed by the strippers' skill ... Maybe I should challenge <Actor.him_or_her> to strip down ... Might just work: <Actor.he_or_she> is quite competitive by nature.`)
                option([
                    {text: `Challenge <Actor.name> to strip`},
                    {text: `Maybe not`},
                ])
                if (0) {
                    Player.dialogue(`You see how the professionals do it? I bet you can't take off your clothes as seductively as they can ...`, `Wink`)
                    if (random(100, 300) < Player.interpersonal + Actor.attractionToPlayer + Actor.incest + Actor.perversion + Actor.masochist) {
                        Actor.dialogue(`Of course I can! Do you think I'm not sexy enough?`, `Angry`)
                        Actor.perversion += random(0, 1)
                        while (!Actor.isNaked()) {
                            Actor.dialogue(`Off this goes ...`, `Flirty`)
                            Actor.stripOne()
                        }
                        Actor.dialogue(`Happy now? Are you still doubting my ability?`, `Angry`)
                        Player.dialogue(`Not anymore, darling. I didn't see that coming from you.`, `Flirty`)
                        narrative(`Oh god, did I just manage to get <Actor.name> to do that? One minute <Actor.he_or_she> is a classy <Actor.gentleman_or_lady>, the next <Actor.he_or_she> becomes a stripper ... Was it <Actor.his_or_her> competitiveness and ego or was it <Actor.his_or_her> inner slut?`)
                        Actor.dress()
                    } else {
                        Actor.dialogue(`Well, that's why they're strippers and I'm not.`, `Irritated`)
                    }
                }
            } else {
                Actor.dialogue(`Hey, who do you take me for? No way I'm going in there!`, `Angry`)
                Player.masochist -= random(0, 0.25)
                Actor.attractionToPlayer -= random(0, 0.5)
            }
        } else {
            narrative(`Let's take this slow ... No way <Actor.he_or_she> would agree to go in such a place.`)
        }


    })
    scene.timeout(200, "co_ag_stripclub")
})
module.exports = scene