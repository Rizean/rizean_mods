// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\work\farewell_party.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'farewell_party'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["work"])
    scene.where(["work"])
    scene.when([8, 20])
    let Colleague = scene.getSpecific("Colleague")
    scene.who(($IF) => {
        Colleague = scene.getSpecific("Colleague")
        $IF(Colleague.intelligence > random(50, 100))
    })
    scene.other(($IF) => {
        $IF(random(0, 100) < 5)
    })


    scene.start(() => {
        let Quit = true
        let InvitedHome = false
        scene.setBackground("work")


        Quit = true
        Colleague.dress()
        Colleague.show(2)


        if (Colleague.rapportwithplayer > 0 && Colleague.isContactExchanged()) {
            Colleague.dialogue(`<Player.name>, can we have a private chat?`, `Sad`)
            Player.dialogue(`Yes, what's the matter, <Colleague.name>?`, `Happy`)
            Colleague.dialogue(`I haven't told anyone else about this ... but I received a job offer from a rival company. You know I like the people here, but the offer is too lucrative to turn down.`, `Sad`)
            option([
                {text: `Congratulate <Colleague.him_or_her>`},
                {text: `Convince <Colleague.him_or_her> to stay`},
            ])
            if (0) {
                Player.dialogue(`That's great news! I'm so happy for you. By all means, go for it! You've got to do what's best for your career.`, `Happy`)
                Colleague.dialogue(`I'm glad that you understand. Thank you. We'll keep in touch even after I leave the company, okay?`, `Happy`)
            } else {
                Player.dialogue(`<Colleague.name>, I understand the appeal but I really hope that you stay with us. Who knows whether you will suit the new environment or not? Plus I'm sure the bosses here will recognize your performance soon and give you a promotion that is equally lucrative.`, `Happy`)
                if (Player.interpersonal > random(0, 100)) {
                    Quit = false
                    Colleague.dialogue(`I guess you're right. There are plenty of risks moving jobs and I already have it good here. I'll talk to my family about it and come up with a final decision`, `Surprised`)
                    narrative(`Eventually, <Colleague.name> decided to stay with the company. The knowledge of the rival offer was never shared with anyone else but me.`)
                } else {
                    Colleague.dialogue(`I'm sorry but I don't think it would be a financially responsible decision to turn down such an offer. I have commitments to meet.`, `Sad`)
                }
            }
        }


        InvitedHome = false
        if (Quit) {
            Colleague.removeColleague()
            narrative(`Today, I received an e-mail from the boss: <Colleague.name> is leaving for another job elsewhere! And <Colleague.his_or_her> farewell party will be organized in a few days.`)
            narrative(`A few days later ...`)
            scene.setBackground("bar")
            if (Colleague.rapportwithplayer < 0) {
                narrative(`I attended the farewell party out of politeness. The truth was: I didn't like the <Colleague.guy_or_girl> that much, so good riddance really ...`)
            } else {
                narrative(`Of course I had to attend <Colleague.name>'s farewell party. <Colleague.He_or_She> is one of the most likable <Colleague.guys_or_girls> in the office. I'm feeling quite sad and downing a decent amount of booze to quell my sadness.`)
                if (Player.isInterestedIn(Colleague)) {
                    narrative(`But is the sadness only the result of friendship with a colleague?`)
                    option([
                        {text: `<Colleague.name> is just a friend`},
                        {text: `I have a crush on <Colleague.him_or_her>`},
                    ])
                    if (0) {
                        narrative(`The sadness is normal when your friend is leaving the company. Oh well, I'm sure we'll still hang out outside of work.`)
                    } else {
                        narrative(`The truth is: I'm so sad to be losing <Colleague.name> because I have quite a crush on <Colleague.him_or_her>. Now that we will no longer be colleagues, maybe this is the time to tipsily admit my feelings for <Colleague.him_or_her>.`)
                        option([
                            {text: `Admit your feelings`},
                            {text: `Maybe not`},
                        ])
                        if (0) {
                            narrative(`Today is the day: I finally have the courage to admit my feelings for <Colleague.name>.`)
                            if (Colleague.attractionToPlayer > random(0, 100)) {
                                Colleague.dialogue(`I like you too, <Player.name>. Maybe now that we won't be colleagues anymore, we can be more than friends ...`, `Flirty`)
                                Colleague.attractionToPlayer += random(0, 10)
                                option([
                                    {text: `Invite <Colleague.name> home`},
                                    {text: `Another day`},
                                ])
                                if (0) {
                                    narrative(`I need to have <Colleague.him_or_her> tonight. We agreed to come back to my place, but after the party concluded so that I wouldn't become the target of gossips tomorrow.`)
                                    InvitedHome = true
                                } else {
                                    narrative(`We agreed to go on dates soon. Now that we are no longer colleagues, it's no longer unprofessional to do so.`)
                                }
                            } else {
                                Colleague.dialogue(`I'm sorry but I only see you as a colleague and a friend.`, `Sad`)
                                narrative(`I was heartbroken but what could I do? I spent the rest of night drinking down my sorrows.`)
                            }
                        } else {
                            narrative(`I'd better not play out some drama in front of all my colleagues.`)
                        }
                    }
                }
            }
            narrative(`Eventually, the farewell party concluded. Everyone said their goodbye to <Colleague.name> and wished <Colleague.him_or_her> luck.`)
        }


        if (InvitedHome) {
            narrative(`Little did the rest of my colleagues know, soon after they left, <Colleague.name> and I walked back to my place.`)
            Player.moveTo("Home")
            narrative(`As soon as we were inside, we started kissing and undressing each other.`)
            scene.sex(Colleague, Player)
            Colleague.show(2)
            narrative(`After we had sex, we spent the night together. I might have lost <Colleague.name> as a colleague and won't get to see <Colleague.him_or_her> in the office everyday anymore, but we are going to be so much more than colleagues now!`)
        }


    })
    scene.timeout(500, "farewell_party")
})
module.exports = scene