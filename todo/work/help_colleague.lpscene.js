// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\work\help_colleague.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'help_colleague'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, actionDuration} = scene

    scene.what(["all"])
    scene.where(["work"])
    scene.when([8, 18])
    let Colleague = scene.getSpecific("Colleague")
    scene.who(($IF) => {
        Colleague = scene.getSpecific("Colleague")
        $IF(Colleague.intelligence < Player.intelligence && Colleague.rapportwithplayer > 0)
    })
    scene.other(($IF) => {
        $IF(random(0, 100) < 0.02 * (Player.intelligence * actionDuration))
    })


    scene.start(() => {
        let Loc = Colleague.getBuilding("Home")
        scene.setBackground("Work")
        Colleague.dress()
        Colleague.show(2)


        Player.dialogue(`What's the matter, <Colleague.name>? You don't look too happy!`, `Curious`)
        Colleague.dialogue(`I've got a deadline tomorrow. So much work left still. God, I'm so overwhelmed. It's going to be an all-nighter tonight.`, `Drained`)
        option([
            {text: `Wish <Colleague.him_or_her> luck`},
            {text: `Offer help`},
        ])
        if (0) {
            Player.dialogue(`Oh that's horrible to hear. Good luck anyways!`, `Sad`)
            Colleague.dialogue(`Yeah, I definitely need some luck to finish this mountain of work.`, `Sad`)
            Colleague.rapportwithplayer -= random(0, 2)
            if (Colleague.isInterestedIn(Player)) {
                Colleague.attractionToPlayer += (random(0, 3) * Colleague.masochist / 100)
            }
        } else {
            Player.dialogue(`I actually don't have too much on my plate right now. I can help you, if you want?`, `Happy`)
            Player.karma += 2.5
            Colleague.dialogue(`Oh thank you! Yes, I'll need all the help I can get ... Here, come, I'll update you on the project.`, `Excited`)
            Colleague.rapportwithplayer += random(0, 5)
            if (Colleague.isInterestedIn(Player)) {
                Colleague.attractionToPlayer -= (random(0, 10) * Colleague.masochist / 100)
            }
            scene.passTime(0.5, 2)
            narrative(`With my help, <Colleague.name> managed to meet the deadline. <Colleague.He_or_She> was very grateful.`)
            if (Player.intelligence < random(0, 100)) {
                Player.jobperformance -= random(0, 1)
                narrative(`Unfortunately, I was too distracted by helping out <Colleague.name> that I forgot to do some of my own work.`)
            }
            if (!Colleague.isContactExchanged()) {
                Player.dialogue(`Hey, you know what? I don't think I actually have your number outside of work.`, `Happy`)
                Colleague.dialogue(`Oh really? Let's exchange contacts then.`, `Excited`)
                Player.exchangeContact(Colleague)
            }


            narrative(`Now that I have helped <Colleague.name> meet the deadline, I imagine <Colleague.he_or_she> wouldn't turn me down if invited to go out to celebrate somewhere?`)
            option([
                {text: `Invite <Colleague.him_or_her> to a bar`},
                {text: `Turn <Colleague.him_or_her> down`},
            ])
            if (0) {
                Colleague.dialogue(`Excellent idea. We really need to celebrate. I know a bar nearby. And for all your help today, drinks are on me!`, `Excited`)
                scene.setBackground("bar")
                narrative(`We had a few drinks at the bar and a nice conversation but it is getting quite late now ...`)
                Colleague.attractionToPlayer += random(0, 2)
                if (random(75, 150) > Colleague.attractionToPlayer + Colleague.perversion) {
                    narrative(`We said goodbye and parted ways.`)
                } else {
                    Colleague.dialogue(`Hey, do you want to have another drink at my home?`, `Flirty`)
                    narrative(`Maybe <Colleague.he_or_she> wanted to give me a more 'personal' reward for helping out today?`)
                    option([
                        {text: `Come home with <Colleague.name>`},
                        {text: `Say goodbye`},
                    ])
                    if (0) {
                        Player.dialogue(`Of course. I would love to!`, `Flirty`)
                        narrative(`A while later ...`)
                        Loc = Colleague.getBuilding("Home")
                        Player.moveTo(Loc)
                        narrative(`As soon as we were inside, <Colleague.name> kissed me. I immediately understood what was going on and happily took my reward for being such a good team player today ...`)
                        Colleague.attractionToPlayer += random(0, 5)
                        scene.sex(Colleague, Player)
                        Colleague.hide()
                        narrative(`After we had sex, I left, more than satisfied with the good karma from helping out a colleague.`)
                    } else {
                        Player.dialogue(`No, thank you. I'd better get going.`, `Irritated`)
                    }
                }
            } else {
                Player.dialogue(`I'd love to, but to be honest, I'm exhausted from all the work. We should definitely plan something soon though!`, `Sad`)
                Colleague.dialogue(`No worries, go home and have a good sleep. You earned it!`, `Wink`)
                Colleague.attractionToPlayer -= random(0, 2)
            }
        }


    })
    scene.timeout(48, "help_colleague")


})
module.exports = scene