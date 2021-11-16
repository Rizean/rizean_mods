// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\dating\dating_past.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'dating_past'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, choice} = scene

    scene.what(["all", " -sleep", " -nap", " -sleep_hotel", " -nap_hotel"])
    scene.where(["all"])
    scene.when([0, 24])
    let Dating = scene.getSpecific("Dating")
    scene.who(($IF) => {
        Dating = scene.getSpecific("Dating")
        $IF(Dating.perversion > random(70, 100) && !Dating.isExRelative())
    })
    scene.other(($IF) => {
        $IF(!Player.isWithCompanion())
    })


    scene.start(() => {
        let DatingFriend = scene.getSpecific("Dating_Friend")
        let KnowPast = true
        narrative(`Ever since we started seeing each other, I couldn't help but notice just how sexually experienced <Dating.name> actually is. I'm not entirely sure how I should feel about this ...`)
        option([
            {text: `Good for me`},
            {text: `<Dating.He_or_She> must have been with many <Player.men_or_women> before me`},
        ])
        if (0) {
            narrative(`Well, <Dating.him_or_her> being experienced in bed means better sex for me. Surely, it's a good thing that I can't really complain about!`)
            Player.perversion += random(0, 1)
        } else {
            narrative(`Unfortunately, I can't help but wonder how many partners <Dating.name> must have had before me to become so good in bed. Should I try to find out?`)
            option([
                {text: `Ask one of <Dating.his_or_her> friends`},
                {text: `Ask <Dating.him_or_her> directly`},
                {text: `I don't need to know`},
            ])
            if (0) {
                narrative(`I decided to convince one of <Dating.name>'s close friend to tell me about <Dating.his_or_her> past.`)
                DatingFriend = scene.getSpecific("Dating_Friend")
                if (DatingFriend.isValid()) {
                    DatingFriend.dress()
                    DatingFriend.show(2)
                    narrative(`I reckon I can extract some answer from <Dating.name>.`)
                    if (random(0, 200) < Player.interpersonal + Dating.rapportwithplayer) {
                        DatingFriend.dialogue(`Alright, I guess you deserve to know and it's unfair that <Dating.name> has hidden everything from you so far. I'll tell you everything, just don't let <Dating.name> know it was me who spilled the beans.`, `Sad`)
                        narrative(`<DatingFriend.name> told me everything: all the ex-<Player.boyfriends_or_girlfriends> <Dating.name> had, all the flings, and all the wild parties. I'm dating quite a player!`)
                        KnowPast = true
                    } else {
                        DatingFriend.dialogue(`Sorry, but I'm not about to betray my friend. You shouldn't care about <Dating.his_or_her> past anyway. It's the person dating you now who matters, not what <Dating.he_or_she> might have done.`, `Irritated`)
                        DatingFriend.rapportwithplayer -= random(0, 5)
                        KnowPast = false
                    }
                    DatingFriend.hide()
                } else {
                    narrative(`Unfortunately, I don't know any of <Dating.his_or_her> friends well enough to ask such a private question.`)
                    KnowPast = false
                }
            } else if (1) {
                Dating.dress()
                Dating.show(2)
                if (Dating.attractionToPlayer - Dating.intelligence > random(0, 100)) {
                    Dating.dialogue(`Oh well, it's not something I'm proud of, but since you are so desperate to know, I have no choice but come clean ...`, `Sad`)
                    narrative(`<Dating.name> told me everything: all the ex-<Player.boyfriends_or_girlfriends> <Dating.he_or_she> had, all the flings, and all the wild parties. I'm dating quite a player!`)
                    Dating.dialogue(`But baby ... I'm a changed <Dating.man_or_woman> now. The only person I want to be with now is you.`, `Sad`)
                    KnowPast = true
                } else {
                    Dating.dialogue(`What? I don't think I need to answer your 'interrogations' about my past. Stop being so jealous and possessive! Whatever happened in my past is none of your business.`, `Angry`)
                    Dating.attractionToPlayer -= random(0, 3)
                    KnowPast = false
                }
            } else {
                narrative(`What would be the point of digging deep into <Dating.his_or_her> past? It would just make me full of jealousy and make our relationship more difficult. I'd better stop thinking about this altogether.`)
                KnowPast = false
                Player.karma += 5
            }


            if (KnowPast) {
                narrative(`Now that I know about <Dating.name>'s adventurous past, what should I do about the knowledge?`)
                option([
                    {text: `Give <Dating.him_or_her> a hard time`},
                    {text: `Nothing`},
                    {text: `Think about it during sex`, condition: scene.isModEnabled("vin_NTR")},
                ])
                if (0) {
                    narrative(`I don't know why, but now that I know everything, I find it hard to resist the urge to take the moral high ground and be all judgemental about <Dating.name>'s past. Whenever we have an argument, I would bring it up again and again to mock <Dating.him_or_her>.`)
                    Dating.attractionToPlayer -= random(0, 10)
                } else if (1) {
                    narrative(`It was good to know more about my partner, but it doesn't mean anything. I have full trust in <Dating.name> to be a faithful <Dating.boyfriend_or_girlfriend> for me.`)
                    Dating.attractionToPlayer += random(0, 3)
                } else {
                    narrative(`In a strange way, I must admit the thought of <Dating.him_or_her> having been with so many <Player.men_or_women> really turns me on. So much so that I can't help but think about it whenever we have sex or when I masturbate. The thought has the instant effect of bringing me to orgasm.`)
                    Player.masochist += random(0, 1)
                    Player.perversion += random(0, 1)
                }
            }
        }


        scene.timeout(1000, "dating_past")
    })


})
module.exports = scene