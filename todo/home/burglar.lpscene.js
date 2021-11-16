// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\home\burglar.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'burglar'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["sleep", " nap"])
    scene.where(["home"])
    scene.when([0, 4])
    scene.who("none")
    scene.other(($IF) => {
        $IF(Player.isAtHome() && Player.intelligence < random(0, 100) * random(0, 1) * random(0, 1) * random(0, 1))
    })


    scene.start(() => {
        let Actor = scene.generatePersonTemporary([])
        let Loc = scene.findNearbyBuilding("hospital")


        narrative(`Wait, what's that sound?`)
        narrative(`I was awaken by the sound of steps. I slowly opened one of my eyes only to see a shadow - one of a burglar trying sneak past my bed! The thief hasn't noticed me yet.`)
        option([
            {text: `Pretend to be asleep`},
            {text: `Ambush the thief`},
            {text: `Start masturbating`, condition: scene.isModEnabled("vin_VanillaPorn") && Player.perversion > 50},
        ])
        if (0) {
            narrative(`The burglar is already inside and I don't want to risk being harmed. Let's just close my eyes and pretend to be asleep and let the thief take some of my properties - better them than my life.`)
            Player.masochist += random(0, 0.5)
            Player.money -= random(250, 3000)
            Player.mood -= 50
        } else {
            Actor = scene.generatePersonTemporary([])
            Actor.dress()
            Actor.show(2)
            Player.masochist -= random(0, 1)
            if (1) {
                Player.dialogue(`It's your unlucky day, thief!`, `Furious`)
                narrative(`I took the thief by surprise, jumped off my bed and tackled <Actor.him_or_her>. A wrestling match began.`)
                if (Player.martial + 10 > Actor.martial) {
                    narrative(`After a brief struggle, I managed to overwhelm the burglar. I then called the cops, who quickly arrested the intruder.`)
                    Player.martial += random(0, 1)
                    Player.mood += random(0, 50)
                } else {
                    narrative(`Unfortunately, the burglar was too strong for me and soon overcame my initial advantage of surprise and beat me up, before escaping.`)
                    Actor.hide()
                    narrative(`Badly injured, I barely managed to reach for the phone to call an ambulance for myself.`)
                    Loc = scene.findNearbyBuilding("hospital")
                    Player.moveTo(Loc)
                    Player.mood -= 100
                    Player.energy -= 100
                    Player.fitness -= random(0, 2)
                    Player.martial -= random(0, 5)
                    Player.attractiveness -= random(0, 2)
                    narrative(`The injuries weren't life-threatening or permanent thankfully, and I made a speedy recovery in hospital. Oh well, at least in <Actor.his_or_her> hurry to escape, <Actor.he_or_she> didn't take any stolen properties with <Actor.him_or_her>.`)
                }
            } else {
                Player.perversion += random(0, 0.5)
                narrative(`Inspired by a recent porn I watched, I came up with a crazy idea: With my eyes still closed, I reached my hand down to my crotch and started masturbating.`)
                if (Actor.isInterestedIn(Player)) {
                    narrative(`The thief smirked at <Actor.his_or_her> horny victim. Thinking <Actor.he_or_she> could get away with it, <Actor.he_or_she> moved towards me and started touching me.`)
                    option([
                        {text: `Ambush <Actor.him_or_her>`},
                        {text: `Fuck <Actor.him_or_her>`},
                    ])
                    if (0) {
                        narrative(`This is my chance! Too occupied with feeling me up, the thief never saw my knee strike coming at <Actor.his_or_her> crotch, followed by a bedroom lamp smashed on <Actor.his_or_her> head, rendering <Actor.him_or_her> unconscious. I then called the cops, who quickly arrested the intruder.`)
                        Player.martial += random(0, 1)
                        Player.mood += random(0, 50)
                    } else {
                        narrative(`I think the thief is going to get a whole lot more than some stolen money tonight!`)
                        narrative(`Making it known that I was not asleep, just extremely horny, I reached up to kiss my intruder and the most cliche porn plot ever started playing out ...`)
                        scene.sex(Actor, Player)
                        Player.perversion += random(0, 1)
                    }
                } else {
                    narrative(`Obviously confused and freaked out by what's going on and worried that I might wake up out of arousal, the thief made a speedy escape.`)
                }
            }
        }


    })
    scene.timeout(1000, "burglar")
})
module.exports = scene