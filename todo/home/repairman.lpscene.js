// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\home\repairman.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'repairman'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, actionDuration} = scene

    scene.what(["all", " -sleep", " -nap"])
    scene.where(["home"])
    scene.when([6, 22])
    scene.who("none")
    scene.other(($IF) => {
        $IF(Player.isAtHome() && Player.intelligence < random(0, 1) * random(0, 1) * random(0, 1) * 30 * actionDuration)
    })


    scene.start(() => {
        let Equipment = "TV"
        let Repairman = scene.generatePerson()
        let Fee = random(30, 200)
        let FeeConverted = Fee.convertToLocalCurrency("true")
        let CanExchangeNumber = true
        scene.$random(() => {
            Equipment = "TV"
            Equipment = "washing machine"
            Equipment = "microwave"
            Equipment = "dryer"
            Equipment = "fridge"
            Equipment = "dishwasher"
            Equipment = "oven"
            Equipment = "stove"
            Equipment = "heater"
            Equipment = "air conditioner"
            Equipment = "shower"
        })


        scene.setBackground("home")
        Player.dialogue(`Damn it! Why won't this work?`, `Angry`)
        narrative(`Oh no, my <Equipment> is broken and I have no idea to fix it. I'm going to need to call a repairman.`)
        narrative(`An hour or so later ...`)
        scene.passTime(0.5, 1.5)
        Repairman = scene.generatePerson()
        scene.$random(() => {
            Repairman.blendPreset("athletic")
            Repairman.blendPreset("bodybuilder")
            Repairman.blendPreset("stocky1")
            Repairman.blendPreset("stocky2")
        })


        Repairman.randomizeFace()
        Repairman.randomizeHairs()
        Repairman.dress()
        Repairman.dress("Worksuit")
        Repairman.show(2)


        Repairman.dialogue(`Here you are. The <Equipment> is working again ...`, `Happy`)
        Player.dialogue(`Great! Thank you so much. You're a true lifesaver.`, `Excited`)
        Fee = random(30, 200)
        FeeConverted = Fee.convertToLocalCurrency("true")
        CanExchangeNumber = true
        Repairman.dialogue(`That would be <FeeConverted> in total, please.`, `Happy`)
        option([
            {text: `Pay`},
            {text: `Offer sex instead`, condition: Player.perversion > 50 && Player.isInterestedIn(Repairman) && scene.isModEnabled("vin_VanillaPorn")},
        ])
        if (0) {
            narrative(`I happily gave him the money for services well rendered.`)
            Player.money -= Fee
        } else {
            Player.dialogue(`Actually, I can think of a much more pleasurable way to pay you for your efforts ...`, `Flirty`)
            if (Repairman.isInterestedIn(Player) && Repairman.perversion + Repairman.attractionToPlayer > random(0, 50)) {
                Repairman.dialogue(`How can I say no? An offer like that rarely comes by ...`, `Flirty`)
                Player.perversion += random(0, 0.5)
                scene.sex(Repairman, Player)
                Repairman.show(2)
                Player.dialogue(`Wow, that was something else! You certainly know how to use your 'tools'.`, `Flirty`)
                Repairman.dialogue(`You flattered me. I've never had a client 'paying' like you before.`, `Flirty`)
            } else {
                Repairman.dialogue(`I'm afraid I'm just a honest tradesman and 'pleasure' doesn't quite pay the bills ...`, `Angry`)
                Player.dialogue(`Fine, it's your loss. Take your money then!`, `Angry`)
                CanExchangeNumber = false
                Player.money -= Fee
            }
        }


        if (CanExchangeNumber) {
            narrative(`Before he leaves, should I exchange contacts with him?`)
            option([
                {text: `Yes`},
                {text: `No`},
            ])
            if (0) {
                narrative(`We exchanged numbers and the repairman soon left.`)
                Player.exchangeContact(Repairman)
            } else {
                narrative(`Why should I? I barely know the guy.`)
                narrative(`Having received the reward for his services, the repairman soon left.`)
            }
        }


        scene.timeout(200, "repairman")
    })
})
module.exports = scene