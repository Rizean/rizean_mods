// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\work\insider_trading.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'insider_trading'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, actionDuration} = scene

    scene.what(["work"])
    scene.where(["work"])
    scene.when([8, 20])
    scene.who("none")
    scene.other(($IF) => {
        $IF(Player.jobexperience > 30 && Player.intelligence > 60 && random(0, 100) < 0.002 * Player.intelligence * actionDuration)
    })


    scene.start(() => {
        let Boss = scene.getSpecific("Boss")
        narrative(`I was working on a project with a client whose company is publicly traded. As a result, I was given access to some sensitive private information about the company. I quickly realized that the company's financial results this quarter were well below market expectations. I could take advantage of this and buy a lot of short options on the company. This is a clear violation of my employment contract and also illegal though ...`)
        option([
            {text: `Yes`},
            {text: `No`},
        ])
        if (0) {
            narrative(`How can I turn down money? What's life without risks?`)
            narrative(`As predicted, as soon as this quarter's results came out, the investors panicked and the company in question suffered a record one-day drop. I made quite a bit of money from my illegal trading.`)
            if (Player.intelligence > random(0, 100)) {
                Player.money += random(1000, 100000)
                narrative(`I also covered my tracks well enough and got away with it.`)
                Player.sneak += random(0, 10)
            } else {
                Boss = scene.getSpecific("Boss")
                Boss.dress()
                Boss.show(2)
                Player.dialogue(`<Boss.Mr_or_Ms> <Boss.name_last>, you called for me? Are there any issues? You look ... angry.`, `Happy`)
                Boss.dialogue(`I'll keep this short ... We know about your sneaky trading. You're fired!`, `Angry`)
                Boss.dialogue(`Also, there are a few agents waiting for you ...`, `Furious`)
                Boss.hide()
                Player.loseJob()
                Player.moveTo("home")
                if (random(0, 100) < 80) {
                    narrative(`The extent of my crime wasn't enough to send me to prison, but that was the only saving grace. Not only did I lose my job, I was ordered by the court to pay back all the money I earned illegally from the trade. I also lost a lot of money in legal fees, and my reputation in the industy was forever damaged. It's a lot harder to get a decent job now ...`)
                    Player.jobexperience -= random(0, 50)
                    Player.money -= random(1000, 20000)
                    Player.mood -= 100
                } else {
                    narrative(`Sure enough, the cops promptly arrived at my home to arrest me.`)
                    narrative(`'Hands in the air, now!'`)
                    option([
                        {text: `Run`},
                        {text: `Surrender`},
                    ])
                    if (0) {
                        if (random(0, 100) < Player.fitness) {
                            narrative(`I managed to lose the cops. Phew, that was close.`)
                        } else {
                            Player.dialogue(`You're not taking me alive.`, `Angry`)
                            narrative(`Pow!`)
                            Player.hide()
                            narrative(`A cop fired his gun. It was a perfect shot ...`)
                            scene.followUp("death")
                        }
                    } else {
                        Player.animate("fightlost")
                        Player.dialogue(`Please, don't shoot!`, `Scared`)
                        narrative(`I put my hands up and surrendered to the overwhelming number of cops.`)
                        Player.sentence = 1825
                        scene.followUp("imprisoned")
                    }
                }
            }
            scene.timeout(30000, "insider_trading")
        } else {
            narrative(`I think I like my job and my integrity too much for insider trading.`)
            scene.timeout(1500, "insider_trading")
        }


    })
})
module.exports = scene