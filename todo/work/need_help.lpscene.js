// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\work\need_help.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'need_help'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["work"])
    scene.where(["work"])
    scene.when([17, 23])
    let Colleague = scene.getSpecific("Colleague")
    scene.who(($IF) => {
        Colleague = scene.getSpecific("Colleague")
        $IF(Colleague.rapportwithplayer > 0 && Colleague.intelligence > Player.intelligence && !Colleague.isDating())
    })
    scene.other(($IF) => {
        $IF(Player.intelligence < random(0, 100) * random(0, 1))
    })


    scene.start(() => {
        scene.setBackground("Work")
        Colleague.dress()
        Colleague.show(2)


        Colleague.dialogue(`What's the matter, <Player.name>? You don't look too happy!`, `Curious`)
        Player.dialogue(`I've got a deadline tomorrow. So much work left still. God, I'm so overwhelmed. It's going to be an all-nighter tonight.`, `Drained`)
        option([
            {text: `Ask <Colleague.name> for help`},
            {text: `Nevermind`},
        ])
        if (0) {
            Player.dialogue(`Hey, do you have anything on at the moment? Would you mind giving me some help on this project?`, `Sad`)
            if (Colleague.rapportwithplayer < random(0, 100) && Colleague.attractionToPlayer < random(0, 100)) {
                Colleague.dialogue(`I'm sorry but I also have plenty on my plates right now. Good luck anyways!`, `Sad`)
                Player.dialogue(`Yeah, I definitely need some luck to finish this mountain of work.`, `Sad`)
                Player.energy -= random(0, 20)
            } else {
                Colleague.dialogue(`I actually don't have too much on my plates right now. I can help you, if you want?`, `Happy`)
                Player.dialogue(`Oh thank you! Yes, I'll need all the help I can get ... Here, come, I'll update you on the project.`, `Excited`)
                Colleague.rapportwithplayer += random(0, 2)
                if (Colleague.isInterestedIn(Player)) {
                    Colleague.attractionToPlayer += random(0, 2)
                }
                scene.passTime(0.5, 2)
                narrative(`With <Colleague.name>'s help, I managed to finish the work before the deadline. I was very grateful.`)


                if (!Colleague.isContactExchanged()) {
                    Colleague.dialogue(`Hey, you know what? I don't think I actually have your number outside of work.`, `Happy`)
                    Player.dialogue(`Oh really? Let's exchange contacts then.`, `Excited`)
                    narrative(`How can I turn <Colleague.him_or_her> down after <Colleague.his_or_her> help today?`)
                    Player.exchangeContact(Colleague)
                }


                if (Colleague.isInterestedIn(Player)) {
                    Colleague.dialogue(`By the way, now that the deadline has been met. Do you want to celebrate somewhere?`, `Flirty`)
                    option([
                        {text: `Invite <Colleague.him_or_her> to a bar`},
                        {text: `Turn <Colleague.him_or_her> down`},
                    ])
                    if (0) {
                        Player.dialogue(`Excellent idea. We really need to celebrate. I know a bar nearby. And for all your help today, drinks are on me!`, `Excited`)
                        scene.setBackground("bar")
                        narrative(`We had a few drinks at the bar and a nice conversation but it is getting quite late now ...`)
                        Colleague.attractionToPlayer += random(0, 2)
                        narrative(`We can either say goodbye ... or I could invite <Colleague.name> home for a more 'personal' show of gratitude.`)
                        option([
                            {text: `Say goodbye`},
                            {text: `Invite <Colleague.him_or_her> home`, condition: Player.perversion > 5},
                        ])
                        if (0) {
                            narrative(`We said goodbye and parted ways.`)
                        } else {
                            Player.dialogue(`Hey, do you want to have another drink at my home?`, `Flirty`)
                            if ((Colleague.isDominantSex(Player) && Colleague.attractionToPlayer + Colleague.perversion > random(0, 100)) || Colleague.attractionToPlayer + Colleague.perversion > random(0, 200)) {
                                Colleague.dialogue(`Of course. I would love to!`, `Flirty`)
                                narrative(`A while later ...`)
                                Player.moveTo("home")
                                narrative(`As soon as we were inside, I kissed <Colleague.him_or_her>. <Colleague.He_or_She> immediately understood what was going on and happily took <Colleague.his_or_her> reward for being such a good team player today ...`)
                                Colleague.attractionToPlayer += random(0, 5)
                                scene.sex(Colleague, Player)
                                Colleague.hide()
                                narrative(`After we had sex, <Colleague.name> left, clearly more than satisfied with the good karma from helping out a colleague.`)
                            } else {
                                Colleague.dialogue(`No, thank you. I'd better get going.`, `Irritated`)
                            }
                        }
                    } else {
                        Player.dialogue(`I'd love to, but to be honest, I'm exhausted from all the work. We should definitely plan something soon though!`, `Sad`)
                        Colleague.dialogue(`No worries, go home and have a good sleep. You earned it!`, `Wink`)
                        Colleague.attractionToPlayer -= random(0, 2)
                    }
                }
            }
        } else {
            narrative(`It was good to have someone to moan to for a few minutes, but I'd better not bother <Colleague.him_or_her> anymore. <Colleague.He_or_She> surely has <Colleague.his_or_her> own problems to deal with.`)
        }


    })
    scene.timeout(48, "need_help")
})
module.exports = scene