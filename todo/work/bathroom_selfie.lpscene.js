// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\work\bathroom_selfie.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'bathroom_selfie'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["go_to_the_bathroom"])
    scene.where(["work"])
    scene.when([6, 23])
    scene.who("none")
    scene.other(($IF) => {
        $IF(Player.perversion > 20 && random(0, 100) < (Player.perversion + Player.arousal) * 0.01)
    })


    scene.start(() => {
        let isDating = Player.isDating()
        let Dating = scene.getSpecific("Dating")
        let Boss = scene.getSpecific("Boss")
        scene.setBackground("work")
        narrative(`I was taking a bathroom break at work when I came up with a crazy idea: taking a sexy selfie in the office bathroom.`)
        option([
            {text: `Take a selfie`},
            {text: `I'd better not`},
        ])
        if (0) {
            narrative(`Why not? That's quite exciting and ... erotic!`)
            Player.perversion += random(0, 0.5)
            Player.dialogue(`...`, `Pose`)
            isDating = Player.isDating()
            if (isDating) {
                Dating = scene.getSpecific("Dating")
            }
            narrative(`I've snapped a sexy selfie. Now, what do I do with it?`)
            scene.option([
                {text: `Send it to my babe`, condition: isDating},
                {text: `Post it on social media`, condition: Player.perversion > 40},
                {text: `Just keep it`},
            ])
            if (0) {
                narrative(`I sent the selfie to my <Dating.boyfriend_or_girlfriend>. <Dating.He_or_She> replied back immediately.`)
                Dating.dialogue(`Wow baby. That was a nice surprise!`, `Flirty`)
                Dating.attractionToPlayer += random(0, 1)
                Player.perversion += random(0, 0.5)
            } else if (1) {
                narrative(`The world needs to see how much of a risk-taking exhibitionist I am!`)
                narrative(`The selfie didn't quite break the internet, but it did receive a large amount of likes.`)
                Player.interpersonal += random(0, 1)
                Player.perversion += random(0, 1)
                Boss = scene.getSpecific("Boss")


                if (!Boss.isDating() && Player.intelligence < random(0, 100) * random(0, 1) * random(0, 1) * random(0, 1) * random(0, 1) * random(0, 1)) {
                    Boss.dress()
                    Boss.show(2)
                    Player.dialogue(`Please, <Boss.Sir_or_Madam>, it was a moment of stupidity. It will never happen again!`, `Crying`)
                    Boss.dialogue(`You deserve this! You should have known better than posting things like that on social media and damaging the company's reputation! Your contract clearly stated this sort of things wasn't tolerated.`, `Angry`)
                    narrative(`Oh no! Someone from HR found the sexy selfie on my social media profile and they fired me, citing the company's social media policy. Damn, this was a stupid way to lose my job.`)
                    Player.mood -= 50
                    Player.loseJob()
                }
            } else {
                narrative(`I'll just keep it myself as my naughty secret ...`)
            }
        } else {
            narrative(`That's crazy. What if someone caught me? I'll easily lose my job!`)
        }


    })
    scene.timeout(100, "bathroom_selfie")


})
module.exports = scene