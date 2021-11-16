// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\dating\night_out_without_dating.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'night_out_without_dating'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all", " -sleep", " -nap", " -sleep_hotel", " -nap_hotel"])
    scene.where(["all"])
    scene.when([18, 22])
    let Dating = scene.getSpecific("Dating")
    let Friend = scene.getPerson("true")
    scene.who(($IF) => {
        Dating = scene.getSpecific("Dating")
        Friend = scene.getPerson("true")
        $IF(Friend.rapportwithplayer > 20 && !Friend.isInterestedIn(Player) && Friend.interpersonal > 70 && Friend.perversion > 50)
    })
    scene.other(($IF) => {
        $IF(!Player.isWithCompanion() && !Player.openRelationship())
    })


    scene.start(() => {
        let GoToParty = false
        let Loc = scene.findNearbyBuilding("nightclub")
        let Bird = scene.generatePersonTemporary([])
        narrative(`My phone rang. It's my friend, <Friend.name>.`)
        scene.secondScreen(Friend)
        Friend.dress()
        Friend.show(2)
        Friend.dialogue(`Hey <Player.name>, wanna come out with us tonight? Just a fun night out between friends so don't invite your <Dating.boyfriend_or_girlfriend>!`, `Excited`)
        option([
            {text: `Yes`},
            {text: `No`},
        ])
        if (0) {
            Player.dialogue(`I'd love to. We'll have so much fun.`, `Excited`)
            Friend.dialogue(`Excellent. See you soon then!`, `Excited`)
            scene.secondScreen()
            Friend.hide()
            Player.moveTo("home")
            Dating.dress()
            Dating.show(2)
            narrative(`Later on, while I was getting ready for the night out, <Dating.name> paid me a surprise visit and was disappointed to hear about my plans for the night.`)
            if (random(0, 200) < Dating.attractionToPlayer + Player.attractiveness - Dating.attractiveness - Dating.masochist) {
                Dating.dialogue(`So I'm specifically not invited? That sounds to me less like an innocent night out among friends and more an excuse to get yourself drunk and surrounded by horny <Dating.guys_or_girls> that are not me!`, `Sarcastic`)
                option([
                    {text: `Stay at home with <Dating.name>`},
                    {text: `Ignore <Dating.him_or_her>`},
                ])
                if (0) {
                    narrative(`If that's the way <Dating.name> thinks, then it's not a good idea to upset <Dating.him_or_her> by going to the party - <Dating.he_or_she> would end up feeling unease all night. I decided instead to stay at home with my <Dating.boyfriend_or_girlfriend>. Obviously, bailing at the last minute caused some damage to my friendship with <Friend.name> though.`)
                    Friend.rapportwithplayer -= random(0, 10)
                    GoToParty = false
                    Player.masochist += random(0, 1)
                } else {
                    Player.dialogue(`You're being paranoid and possessive, <Dating.name>. I'm just going to hang out with a few friends and socialize. That's it! You don't get to control what I can or cannot do.`, `Irritated`)
                    Dating.attractionToPlayer -= random(0, 2)
                    GoToParty = true
                    Player.masochist -= random(0, 1)
                }
            } else {
                Dating.dialogue(`Oh, that's a shame. I was hoping that we'll spend some time together tonight, but I won't stop you. Go with your friends, and have fun!`, `Sad`)
                GoToParty = true
            }


            Dating.hide()


            if (GoToParty) {
                narrative(`Later on that night ...`)
                Loc = scene.findNearbyBuilding("nightclub")
                Player.moveTo(Loc)
                Friend.dress()
                Friend.show(5)
                narrative(`We were having a pretty wild night out. With no significant others being there to stop us, we all got pretty shit-faced. I could barely walk now ...`)
                Friend.dialogue(`I wasn't wrong, was I? It's so much more fun to go out without your <Dating.boyfriend_or_girlfriend>, right?`, `Excited`)
                Bird = scene.generatePersonTemporary([])
                while (!Player.isInterestedIn(Bird)) {
                    Bird = scene.generatePersonTemporary([])
                }
                Bird.makePermanent()
                Bird.dress()
                Bird.show(2)


                Friend.dialogue(`Hey, you know what? Let's have a bet. See that cute <Bird.guy_or_girl> over there? Let's see who can get <Bird.him_or_her> in bed first!`, `Wink`)
                option([
                    {text: `Accept the bet`},
                    {text: `Refuse`},
                    {text: `A threesome should tempt <Bird.him_or_her>`},
                ])
                if (0) {
                    Player.karma -= 1
                    narrative(`The peer pressure, coupled with the amount of alcohol I drank, was too much. I accepted the bet.`)
                    Friend.show(4)
                    narrative(`<Friend.name> was the first one to try. <Friend.He_or_She> tried to flirt with the <Bird.handsome_or_pretty> stranger but got nowhere.`)
                    Friend.hide()
                    narrative(`Now it's my turn to try. The stranger was immediately smitten by my charm and I ended up following <Bird.him_or_her> home.`)
                    Loc = Bird.getBuilding("home")
                    Player.moveTo(Loc)
                    Player.perversion += random(0, 0.5)
                    scene.sex(Bird, Player)
                    Bird.hide()
                    narrative(`I won my bet with <Friend.name>, but at the cost of cheating on <Dating.name>. However, I was too drunk from the alcohol and exhausted from the sex to feel too guilty at that particular moment. Let's just hope <Dating.name> will never find out.`)
                } else if (1) {
                    narrative(`I might be drunk but I'm not a cheater.`)
                    Player.dialogue(`Come on, you know I can't do that! I'm taken ...`, `Irritated`)
                    Friend.dialogue(`You're no fun at all!`, `Angry`)
                    Friend.rapportwithplayer -= random(0, 3)
                } else {
                    Player.karma -= 1
                    Player.dialogue(`Forget about the bet! How about us both trying to seduce <Bird.him_or_her> at the same time? Surely no <Bird.man_or_girl> can turn down a threesome?`, `Happy`)
                    Player.perversion += random(0, 1)
                    narrative(`As we expected, the cute <Bird.guy_or_girl> stood no chance of resisting the prospect of a steamy threesome with me and <Friend.name>. We ended up following <Bird.him_or_her> home.`)
                    Loc = Bird.getBuilding("home")
                    Player.moveTo(Loc)
                    scene.sex(Bird, Player, Friend)
                    Bird.hide()
                    Friend.hide()
                    Player.show(0)
                    narrative(`I don't know what came over to make such a bold suggestion and follow through with it. However, I was too drunk from the alcohol and exhausted from the sex to feel too guilty at that particular moment. Let's just hope <Dating.name> will never find out.`)
                }
            }
        } else {
            Player.dialogue(`I'm busy today. Sorry. Maybe next time.`, `Sad`)
            Friend.rapportwithplayer -= random(0, 2)
            Friend.dialogue(`That's a shame. Alright, I'll see around then.`, `Sad`)
        }


        scene.timeout(250, "night_out_without_dating")
    })
})
module.exports = scene