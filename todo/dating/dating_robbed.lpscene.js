// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\dating\dating_robbed.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'dating_robbed'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, CurrentCompanion, choice} = scene

    scene.what(["all", " -sleep_hotel", " -nap_hotel"])
    scene.where(["all", " -home"])
    scene.when([22, 4])
    scene.who("none")
    scene.other(($IF) => {
        $IF(Player.isWithCompanion() && CurrentCompanion.isDating() && CurrentCompanion.isDominantSex(Player) && random(0, 5000) < Player.interpersonal + Player.intelligence + CurrentCompanion.interpersonal + CurrentCompanion.intelligence)
    })


    scene.start(() => {
        let Thug = scene.generatePersonTemporary([])
        scene.setBackground("street")
        Thug = scene.generatePersonTemporary([])
        Thug.dress()
        Thug.show(2)
        narrative(`I was walking with <CurrentCompanion.name> at night when suddenly we were stopped by a shady figure. <Thug.He_or_She> was holding a knife and demanding us to hand over all our money ... We were being robbed!`)
        if (CurrentCompanion.intelligence > CurrentCompanion.martial) {
            CurrentCompanion.dialogue(`Go easy there ... Don't hurt us. We're handing over the money right now ...`, `Scared`)
            narrative(`With my <CurrentCompanion.boyfriend_or_girlfriend> unable to protect us, we had no choice but to hand over all our cash.`)
            Player.money -= random(20, 500)
            Player.mood -= random(0, 50)
            Thug.dialogue(`Good choice! Alright, off you go then. Don't you dare call the cops!`, `Evil`)
            Thug.hide()
            narrative(`With the robber gone, how should I react to <CurrentCompanion.name>'s decision to hand over all the money?`)
            option([
                {text: `<CurrentCompanion.He_or_She> did the right thing`},
                {text: `<CurrentCompanion.He_or_She> was a coward!`},
            ])
            if (0) {
                narrative(`Money is cheap, our safety is more important. <CurrentCompanion.name> dealt with the situation calmly and I had to thank <CurrentCompanion.him_or_her> for that.`)
                CurrentCompanion.attractionToPlayer += random(0, 2)
            } else {
                narrative(`What kind of pathetic <CurrentCompanion.boyfriend_or_girlfriend> was <CurrentCompanion.he_or_she>? Why didn't <CurrentCompanion.he_or_she> dare to teach the robber a lesson? I blamed <CurrentCompanion.him_or_her> for losing us so much money.`)
                CurrentCompanion.attractionToPlayer -= random(0, 2)
                scene.option([
                    {text: `Offer my body to the robber`, condition: Player.perversion > 70 && scene.isModEnabled("vin_VanillaPorn")},
                    {text: `Go home`},
                ])
                if (0) {
                    Player.karma -= 10
                    narrative(`That robber put <CurrentCompanion.name> back in <CurrentCompanion.his_or_her> place and made my <CurrentCompanion.boyfriend_or_girlfriend> <Thug.his_or_her> bitch. I just couldn't resist such strength and dominance!`)
                    narrative(`Leaving my pathetic <CurrentCompanion.boyfriend_or_girlfriend> behind, I ran after the robber.`)
                    CurrentCompanion.hide()
                    Thug.show(2)
                    Thug.dialogue(`What? What are you doing here? Sweet, you reckon you can get your money back, with just you, alone?`, `Surprised`)
                    Player.dialogue(`I'm not looking for my money back. In fact, I have something else to give you ...`, `Flirty`)
                    scene.sex(Thug, Player)
                    CurrentCompanion.attractionToPlayer -= random(0, 50)
                    Player.perversion += random(0, 2)
                    Player.masochist += random(0, 1)
                } else {
                    narrative(`It's been a bad enough night. We should go home and try to calm ourselves down.`)
                    Player.moveTo("Home")
                }
            }
        } else {
            CurrentCompanion.animate("martialart")
            CurrentCompanion.moveToPersonStand(Thug, 100)
            CurrentCompanion.dialogue(`You think you can scare me, just like that? Take this!`, `Furious`)
            Thug.dialogue(`So you chose to fight? It's your last mistake!`, `Furious`)
            narrative(`<CurrentCompanion.name> bravely attacked the thug and a fight erupted.`)
            Thug.animate()
            CurrentCompanion.animate()
            if (CurrentCompanion.martial > Thug.martial) {
                Thug.animate("fightlost")
                narrative(`<CurrentCompanion.name> managed to disarm the robber and knock the thug down on the ground. We then called the cops, who promptly arrested the thug.`)
                narrative(`How should I react to <CurrentCompanion.name>'s action?`)
                option([
                    {text: `It was heroic`},
                    {text: `It was foolish`},
                ])
                if (0) {
                    narrative(`I showed my appreciation for my brave <CurrentCompanion.boyfriend_or_girlfriend>. I'm proud to have a partner that can protect us.`)
                    option([
                        {text: `Reward my hero with sex`},
                        {text: `Maybe not`},
                    ])
                    if (0) {
                        narrative(`And there's only one way to reward my hero ...`)
                        scene.sex(CurrentCompanion, Player)
                        CurrentCompanion.attractionToPlayer += random(0, 2)
                    }
                } else {
                    narrative(`Although <CurrentCompanion.name> managed to win the fight, it was pure luck and we could have been seriously hurt. It was an act of a foolish brute!`)
                    CurrentCompanion.attractionToPlayer -= random(0, 2)
                }
            } else {
                CurrentCompanion.animate("fightlost")
                narrative(`Unfortunately, despite <CurrentCompanion.name>'s best efforts, the knife gave the thug an unfair advantage that was easily capitalized on. <CurrentCompanion.name> was soon on the ground, stabbed several times and sent to a hospital. Of course, the robber didn't forget to take our money before disappearing into the darkness.`)
                Thug.hide()
                CurrentCompanion.animate()
                scene.setBackground("hospital")
                CurrentCompanion.attractiveness -= random(0, 5)
                CurrentCompanion.fitness -= random(0, 5)
                Player.money -= random(20, 500)
                narrative(`After a while, <CurrentCompanion.name> regained consciousness. How should I react to <CurrentCompanion.his_or_her> action?`)
                option([
                    {text: `It was heroic`},
                    {text: `It was foolish`},
                ])
                if (0) {
                    narrative(`I showed my appreciation for my brave <CurrentCompanion.boyfriend_or_girlfriend>. I'm proud to have a partner that will risk <CurrentCompanion.his_or_her> life to protect me.`)
                    option([
                        {text: `Reward my hero with sex`},
                        {text: `Maybe not`},
                    ])
                    if (0) {
                        narrative(`And there's only one way to reward my fallen hero ...`)
                        scene.sex(CurrentCompanion, Player)
                        CurrentCompanion.attractionToPlayer += random(0, 2)
                    }
                } else {
                    narrative(`It was such a foolish act that could have killed both of us!`)
                    CurrentCompanion.attractionToPlayer -= random(0, 2)
                }
            }
        }


    })
    scene.timeout(1000, "dating_robbed")


})
module.exports = scene