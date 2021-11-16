// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\home\neighbour_move_out.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'neighbour_move_out'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all", " -sleep", " -nap"])
    scene.where(["home"])
    scene.when([8, 20])
    let Neighbour = scene.getSpecific("Neighbour")
    scene.who(($IF) => {
        Neighbour = scene.getSpecific("Neighbour")
        $IF(Neighbour.isContactExchanged() && Neighbour.rapportwithplayer > 10)
    })
    scene.other(($IF) => {
        $IF(random(0, 100) < 5)
    })


    scene.start(() => {
        let Quit = true
        let InvitedHome = false


        Quit = true
        Neighbour.dress()
        Neighbour.show(2)


        if (Neighbour.rapportwithplayer > 40 && Neighbour.isContactExchanged()) {
            Neighbour.dialogue(`<Player.name>, can we have a private chat?`, `Sad`)
            Player.dialogue(`Yes, what's the matter, <Neighbour.name>?`, `Happy`)
            Neighbour.dialogue(`I haven't told anyone else about this ... but I found another place to live that is cheaper but newer. You know I like the people in this neighbourhood, but this new place is too good to turn down.`, `Sad`)
            option([
                {text: `Congratulate <Neighbour.him_or_her>`},
                {text: `Convince <Neighbour.him_or_her> to stay`},
            ])
            if (0) {
                Player.dialogue(`That's great news! I'm so happy for you. By all means, go for it! Sounds like a fantastic place to live.`, `Happy`)
                Neighbour.dialogue(`I'm glad that you understand. Thank you. We'll keep in touch even after I move out, okay?`, `Happy`)
            } else {
                Player.dialogue(`<Neighbour.name>, I understand the appeal but I really hope that you stay. Who knows whether you will suit the new environment or not? Plus didn't the landlord promise a refurbishment later this year?`, `Happy`)
                if (Player.interpersonal > random(0, 100)) {
                    Quit = false
                    Neighbour.dialogue(`I guess you're right. There are plenty of risks moving home and I already have it good here. I'll talk to my family about it and come up with a final decision`, `Surprised`)
                    narrative(`Eventually, my persuasion worked out and <Neighbour.name> decided to stay.`)
                } else {
                    Neighbour.dialogue(`I'm sorry but I don't think it would be a financially responsible decision to turn down such a good opportunity to save up on rent. I have other commitments to meet.`, `Sad`)
                }
            }
        }


        InvitedHome = false
        if (Quit) {
            Neighbour.removeNeighbour()
            narrative(`<Neighbour.name> is moving out, having found a cheaper place to live! I was invited to <Neighbour.his_or_her> farewell party with our closest neighbours, planned for in a few days.`)
            narrative(`A few days later ...`)
            scene.setBackground("bar")
            narrative(`Of course I had to attend <Neighbour.name>'s farewell party. <Neighbour.He_or_She> is one of the most likable <Neighbour.guys_or_girls> in the apartment building. I'm feeling quite sad and downing a decent amount of booze to quell my sadness.`)
            if (Player.isInterestedIn(Neighbour)) {
                narrative(`But is the sadness only the result of friendship with a neighbour?`)
                option([
                    {text: `<Neighbour.name> is just a friend`},
                    {text: `I have a crush on <Neighbour.him_or_her>`},
                ])
                if (0) {
                    narrative(`The sadness is normal when your friend is no longer living near to you. Oh well, I'm sure we'll still hang out occassionally.`)
                } else {
                    narrative(`The truth is: I'm so sad to be losing <Neighbour.name> because I have quite a crush on <Neighbour.him_or_her>. Now that <Neighbour.he_or_she> is moving out, maybe this is the time to tipsily admit my feelings for <Neighbour.him_or_her>.`)
                    option([
                        {text: `Admit your feelings`},
                        {text: `Maybe not`},
                    ])
                    if (0) {
                        narrative(`Today is the day: I finally have the courage to admit my feelings for <Neighbour.name>.`)
                        if (Neighbour.attractionToPlayer > random(0, 100)) {
                            Neighbour.dialogue(`I like you too, <Player.name>. Maybe now that we won't be neighbours anymore, we can be more than friends ...`, `Flirty`)
                            Neighbour.attractionToPlayer += random(0, 10)
                            option([
                                {text: `Invite <Neighbour.name> home`},
                                {text: `Another day`},
                            ])
                            if (0) {
                                narrative(`I need to have <Neighbour.him_or_her> tonight. We agreed to come back to my place, but after the farewell party concluded so that I wouldn't become the target of neighbourhood gossips tomorrow.`)
                                InvitedHome = true
                            } else {
                                narrative(`We agreed to go on dates soon.`)
                            }
                        } else {
                            Neighbour.dialogue(`I'm sorry but I only see you as a friend.`, `Sad`)
                            narrative(`I was heartbroken but what could I do? I spent the rest of night drinking down my sorrows.`)
                        }
                    } else {
                        narrative(`I'd better not play out some drama in front of a bunch of people I see around the neighbourhood everyday.`)
                    }
                }
            }
            narrative(`Eventually, the farewell party concluded. Everyone said their goodbye to <Neighbour.name> and wished <Neighbour.him_or_her> luck.`)
        }


        if (InvitedHome) {
            narrative(`Little did the rest of my neighbours know, soon after they left, <Neighbour.name> and I walked back to my place.`)
            Player.moveTo("Home")
            narrative(`As soon as we were inside, we started kissing and undressing each other.`)
            scene.sex(Neighbour, Player)
            Neighbour.show(2)
            narrative(`After we had sex, we spent the night together. I might have lost <Neighbour.name> as a neighbour and won't get to see <Neighbour.him_or_her> around the apartment everyday anymore, but we are going to be so much more than neighbours now!`)
        }


    })
    scene.timeout(500, "neighbour_move_out")
})
module.exports = scene