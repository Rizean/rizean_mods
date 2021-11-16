// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\work\stripclub.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'stripclub'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["work"])
    scene.where(["work"])
    scene.when([21, 24])
    let Colleague = scene.getSpecific("Colleague")
    scene.who(($IF) => {
        Colleague = scene.getSpecific("Colleague")
        $IF(Colleague.perversion > random(50, 100) && Colleague.rapportwithplayer > random(0, 50) && !Colleague.isInterestedIn(Player))
    })
    scene.other(($IF) => {
        $IF(random(0, 100) < 0.05 * Player.perversion)
    })


    scene.start(() => {
        let Stripper = scene.generatePerson()
        scene.setBackground("work")
        Colleague.dress()
        Colleague.show(2)


        Colleague.dialogue(`Yo, you're still going strong this late? Listen, I'm heading out to a stripclub soon. Wanna join?`, `Excited`)
        option([
            {text: `Sure`},
            {text: `Nope`},
        ])
        if (0) {
            Player.dialogue(`Actually that's an excellent idea. Watching a few hotties dancing naked is just what I need right now to relieve the stress.`, `Excited`)
            Player.mood += random(0, 20)
            Player.perversion += random(0, 0.25)
            Colleague.rapportwithplayer += random(0, 20)
            narrative(`Later that night ...`)
            scene.setBackground("nightclub")
            Stripper = scene.generatePerson()
            Stripper.blendPreset("twenties")
            Stripper.blendPreset("hourglass1_F")
            Stripper.randomizeHairs()
            if (!Player.isInterestedIn(Stripper)) {
                Stripper.blendPreset("athletic")
            }
            Stripper.randomizeFace()
            Stripper.randomizeHairs()


            Colleague.show(4)


            Stripper.dress()
            Stripper.strip()
            Stripper.show(2)
            Player.arousal += random(0, 30)
            narrative(`The stripper gave me quite a lap dance. I really need to release now ...`)
            option([
                {text: `Pay for extra service`},
                {text: `Just enjoy the show`},
                {text: `Let's share`},
            ])
            if (0) {
                Player.money -= random(200, 1000)
                narrative(`It cost quite a bit of money but eventually I managed to convince the stripper to do more than just giving me a show.`)
                Colleague.hide()
                scene.sex(Player, Stripper)
                Player.perversion += random(0, 0.5)
                Stripper.show(2)
                narrative(`That was a very pleasurable night out after work!`)
            } else if (1) {
                narrative(`I'd rather just watch ...`)
                if (Colleague.isInterestedIn(Stripper)) {
                    narrative(`With me not going for it, <Colleague.name> paid the stripper instead to have sex with <Colleague.him_or_her>.`)
                    Player.hide()
                    scene.sex(Colleague, Stripper)
                    Stripper.hide()
                    Colleague.show(4)
                    Player.show(0)
                    narrative(`I can't believe I watched the whole thing! I got to see another side of my colleague.`)
                }
                narrative(`That was an enjoyable night out after work, even if I never got to release myself.`)
            } else {
                Player.money -= random(200, 1000)
                narrative(`It cost quite a bit of money but eventually we managed to convince the stripper to do more than just giving us a show. What a way to bond with your colleague!`)
                scene.sex(Player, Stripper, Colleague)
                Player.perversion += random(0, 1)
            }
        } else {
            Player.dialogue(`Sorry, it's not my thing. Besides, I still have plenty of work to do.`, `Sad`)
        }


    })
    scene.timeout(500, "stripclub")
})
module.exports = scene