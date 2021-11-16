// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\work\it_guy.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'it_guy'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["work"])
    scene.where(["work"])
    scene.when([8, 18])
    scene.who("none")
    scene.other(($IF) => {
        $IF(random(0, 100) < 100 / Player.intelligence)
    })


    scene.start(() => {
        let IT = scene.generatePerson()
        scene.setBackground("work")
        IT = scene.generatePerson()
        IT.addColleague()


        scene.$random(() => {
            IT.blendPreset("average")
            IT.blendPreset("common1")
            IT.blendPreset("common2")
            IT.blendPreset("common3")
            IT.blendPreset("common4")
            IT.blendPreset("common5")
            IT.blendPreset("heavy")
            IT.blendPreset("normal")
            IT.blendPreset("underweight")
        })
        IT.blendPreset("nerd")
        IT.randomizeFace()
        IT.randomizeHairs()
        IT.dress()


        Player.dialogue(`Damn it. What's wrong with my computer today? I can't get anything done with all these crashes.`, `Angry`)
        narrative(`My computer at work has been causing me all sorts of troubles today. I need to call IT ...`)
        scene.secondScreen(IT)
        IT.show(2)
        IT.dialogue(`Hello, IT support.`, `Happy`)
        Player.dialogue(`(Described the problem)`, `Irritated`)
        IT.dialogue(`Have you tried switching it off and on again?`, `Happy`)
        if (Player.intelligence < random(0, 50)) {
            Player.dialogue(`Let me try ...`, `Irritated`)
            Player.dialogue(`You know what? That did the trick. I'm an idiot. Thanks for your time.`, `Embarrassed`)
            IT.dialogue(`Glad to be of help ...`, `Irritated`)
        } else {
            Player.dialogue(`Yes, I have. It didn't solve the problem.`, `Irritated`)
            IT.dialogue(`Alright, I'll be with you in 10 minutes to take a look at your computer.`, `Surprised`)
            narrative(`A while later ...`)
            scene.secondScreen()
            IT.show()
            scene.passTime(0.1, 0.2)
            IT.dialogue(`There you go. Your computer should now be working as intended. Give us a call if it doesn't.`, `Happy`)
            Player.dialogue(`Excellent. Thank you so much! You're a lifesaver.`, `Excited`)
            narrative(`I like the guy. He's a bit awkward but nice and very smart. Maybe I should exchange contacts?`)
            if (Player.isInterestedIn(IT)) {
                narrative(`He's not someone most <Player.guys_or_girls> would go for, but a date or two with this guy might be something different.`)
            } else if (Player.intelligence < 50) {
                narrative(`Being friends with a tech wiz isn't the worst idea in the world nowadays.`)
            } else {
                narrative(`I'm quite interested in technology myself so we could be good friends outside of work.`)
            }
            option([
                {text: `Exchange contacts`},
                {text: `No`},
            ])
            if (0) {
                narrative(`He was a bit surprised at first at my request - it was obvious not many people who requested IT support cared about the person helping them. Eventually, we exchanged contacts. We can now meet outside of work.`)
                Player.exchangeContact(IT)
            } else {
                narrative(`Perhaps not. He's kinda weird.`)
            }
        }


        scene.timeout(700, "it_guy")
    })
})
module.exports = scene