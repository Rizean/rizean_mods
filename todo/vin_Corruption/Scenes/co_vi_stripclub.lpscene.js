// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Corruption\Scenes\co_vi_stripclub.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'co_vi_stripclub'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all"])
    scene.where(["all", " -stripclub"])
    scene.when([20, 3])
    let Actor = Player.getCompanion()
    scene.who(($IF) => {
        Actor = Player.getCompanion()
        $IF(!Actor.isRelative() && Actor.isInterestedIn(Player) && Actor.perversion > 70 && Actor.attractionToPlayer > 10)
    })
    scene.other("none")


    scene.start(() => {
        let Stripper = scene.generatePersonTemporary([])
        let Stripper2 = scene.generatePersonTemporary([])
        let count = 0
        scene.setBackground("street")


        narrative(`I was hanging out with <Actor.name> when <Actor.he_or_she> insisted that I followed <Actor.him_or_her> somewhere. I have a feeling that <Actor.he_or_she> is up to no good ...`)
        narrative(`A while later ...`)
        narrative(`I knew it! My <Actor.sleazy_or_slutty> date is trying to take me to a stripclub ...`)
        option([
            {text: `Refuse to go in`},
            {text: `It's just naked people dancing, right?`},
        ])
        if (0) {
            Player.dialogue(`Hey, who do you take me for? No way I'm going in there!`, `Angry`)
            narrative(`The cheek of <Actor.him_or_her> ... taking a classy <Player.gentleman_or_lady> like me to this fifthy establishment.`)
            Player.masochist -= random(0, 0.25)
            Actor.attractionToPlayer -= random(0, 0.5)
        } else {
            Player.dialogue(`Fine ... I guess since we're already here, let's see what all the fuss is about.`, `Embarrassed`)
            Player.perversion += random(0, 0.5)
            scene.setBackground("nightclub")
            Stripper = scene.generatePersonTemporary([])
            while (!Player.isSameGender(Stripper)) {
                Stripper = scene.generatePersonTemporary([])
            }


            Stripper2 = scene.generatePersonTemporary([])
            while (!Player.isSameGender(Stripper2)) {
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


            narrative(`Wow, these strippers are impressive I must say ...`)
            Actor.dialogue(`You see how the professionals do it? I bet you can't take off your clothes as seductively as they can ...`, `Wink`)
            option([
                {text: `Of course I can!`},
                {text: `I'm not a stripper`},
            ])
            if (0) {
                Player.dialogue(`Of course I can! Do you think I'm not sexy enough?`, `Angry`)
                narrative(`I might not be able to pole dance, but taking off my clothes and looking sexy doing it? Of course I can do that.`)
                Player.perversion += random(0, 1)
                count = 0
                while (!Player.isNaked() && count < 5) {
                    narrative(`Off this goes ...`)
                    Player.stripOne()
                    count += 1
                }
                Player.dialogue(`Happy now? Are you still doubting my ability?`, `Angry`)
                Actor.dialogue(`Not anymore, darling. I didn't see that coming from you.`, `Flirty`)
                narrative(`Oh god, did I just do that? One minute I'm a classy <Player.gentleman_or_lady>, the next I'm a stripper ... Was it my competitiveness and ego or was it my inner slut?`)
            } else {
                Player.dialogue(`Well, that's why they're strippers and I'm not.`, `Irritated`)
                narrative(`Nice try, <Actor.name>. Better luck next time though.`)
            }
        }
    })
    scene.timeout(200, "co_vi_stripclub")
})
module.exports = scene