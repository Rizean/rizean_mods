// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\dating\dating_jealous.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'dating_jealous'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, CurrentCompanion} = scene

    scene.what(["all"])
    scene.where(["all", " -home"])
    scene.when([0, 24])
    scene.who("none")
    scene.other(($IF) => {
        Player.isWithCompanion() && CurrentCompanion.isDating() && CurrentCompanion.isDominantSex(Player)
        $IF(random(20, 1000) < CurrentCompanion.attractionToPlayer + Player.attractiveness - CurrentCompanion.attractiveness)
    })


    scene.start(() => {
        let Flirter = scene.generatePersonTemporary([])
        narrative(`It was in a middle of a date with <CurrentCompanion.name> when someone approached me ...`)
        Flirter = scene.generatePersonTemporary([])
        while (!Flirter.isInterestedIn(Player)) {
            Flirter = scene.generatePersonTemporary([])
        }
        Flirter.makePermanent()


        Flirter.dress()
        Flirter.attractionToPlayer += random(0, 30)
        Flirter.show(2)


        Flirter.dialogue(`Excuse me, but did you just fall from heaven? You totally took my breath away. Can I have your number?`, `Flirty`)
        CurrentCompanion.dialogue(`Watch yourself there, <Flirter.dickhead_or_bitch>. <Player.He_or_She> is taken!`, `Angry`)
        Flirter.dialogue(`By you? Come on, surely a <Player.handsome_or_beautiful> <Player.man_or_woman> like this could do better than you <CurrentCompanion.asshole_or_slut>!`, `Sarcastic`)
        CurrentCompanion.dialogue(`Say that one more time, you <Flirter.cunt_or_bitch>!`, `Furious`)
        narrative(`This is getting very heated. What should I do?`)
        option([
            {text: `Let them fight`},
            {text: `Calm them down`},
        ])
        if (0) {
            CurrentCompanion.dialogue(`<Flirter.Cunt_or_Bitch>, take this!`, `Furious`)
            Flirter.dialogue(`You dare sucker-punch me? Take this!`, `Furious`)
            narrative(`Oh no, this is now totally out of control. They are going at each other.`)


            if (CurrentCompanion.martial > Flirter.martial) {
                Flirter.hide()
                Flirter.attractionToPlayer -= random(0, 100)
                narrative(`<CurrentCompanion.name> beat the stranger thoroughly, the latter ending up running away for <Flirter.his_or_her> life.`)
                option([
                    {text: `Thank <CurrentCompanion.name>`},
                    {text: `Tell <CurrentCompanion.name> off`},
                ])
                if (0) {
                    Player.dialogue(`Baby, that was so brave of you, standing up to protect me like that!`, `Happy`)
                    CurrentCompanion.attractionToPlayer += random(0, 2)
                } else {
                    Player.dialogue(`<CurrentCompanion.name>! You acted like a thug. You ruined our date!`, `Angry`)
                    CurrentCompanion.attractionToPlayer -= random(0, 2)
                }
            } else {
                CurrentCompanion.hide()
                narrative(`Unfortunately, <CurrentCompanion.name> was completely beaten. The stranger was way too strong for <CurrentCompanion.him_or_her>.`)
                Flirter.dialogue(`Did you see that, baby? I told you that you deserved better than that pathetic scum`, `Flirty`)
                option([
                    {text: `Attend to <CurrentCompanion.name>'s injuries`},
                    {text: `Exchange numbers with <Flirter.name>`},
                    {text: `Fuck <Flirter.name>`, condition: scene.isModEnabled("vin_VanillaPorn")},
                ])
                if (0) {
                    Player.dialogue(`Get the fuck away from me, you thug! Or I'll call the police.`, `Angry`)
                    Flirter.hide()
                    Player.dialogue(`Baby, are you okay? Are you hurt?`, `Anxious`)
                    CurrentCompanion.attractionToPlayer += random(0, 2)
                } else if (1) {
                    Player.karma -= 2.5
                    narrative(`I must admit: seeing <Flirter.name> teach my weak-ass <CurrentCompanion.boyfriend_or_girlfriend> a lesson was a huge turn-on.`)
                    narrative(`Without letting <CurrentCompanion.name> notice, I managed to slip my number to <Flirter.name>. <CurrentCompanion.name> would be furious if <CurrentCompanion.he_or_she> ever finds out ...`)
                    Player.dialogue(`Baby, are you okay? Are you hurt?`, `Anxious`)
                    narrative(`I then proceeded to pretend to be concerned about <CurrentCompanion.name>'s injuries ...`)
                    Player.exchangeContact(Flirter)
                } else {
                    Player.karma -= 10
                    narrative(`What a pathetic <CurrentCompanion.boyfriend_or_girlfriend> I have! I might as well humilate <CurrentCompanion.him_or_her>!`)
                    Player.dialogue(`Maybe you're right, I deserve someone stronger. Come here you, claim your prey!`, `Flirty`)
                    Flirter.dialogue(`Much obliged, baby!`, `Flirty`)


                    CurrentCompanion.attractionToPlayer -= random(0, 100)
                    scene.sex(Flirter, Player)
                    Flirter.show(2)
                    Flirter.dialogue(`That was amazing, baby. Listen, the next time you get bored of your pathetic <CurrentCompanion.boyfriend_or_girlfriend>, don't forget to call me!`, `Flirty`)
                    Player.exchangeContact(Flirter)
                }
            }
        } else {
            narrative(`I managed to calm them down. It can be flattering to see your <CurrentCompanion.boyfriend_or_girlfriend> being a bit possessive of you, but this was going too far.`)
        }


        scene.timeout(200, "dating_jealous")
    })
})
module.exports = scene