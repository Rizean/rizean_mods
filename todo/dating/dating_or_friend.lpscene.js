// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\dating\dating_or_friend.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'dating_or_friend'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all", " -sleep", " -nap", " -sleep_hotel", " -nap_hotel"])
    scene.where(["all"])
    scene.when([0, 24])
    let Dating = scene.getSpecific("Dating")
    let Friend = scene.getPerson("true")
    scene.who(($IF) => {
        Dating = scene.getSpecific("Dating")
        Friend = scene.getPerson("true")
        $IF(Friend.rapportwithplayer > 40 && !Friend.isInterestedIn(Player) && Dating.attractionToPlayer > 40 && (Dating.intelligence - Friend.intelligence > random(20, 100) || Friend.intelligence - Dating.intelligence > random(20, 100)))
    })
    scene.other(($IF) => {
        $IF(!Player.isWithCompanion())
    })


    scene.start(() => {
        Dating.dress()
        Friend.dress()


        Dating.show(2)
        Friend.show(3)


        narrative(`Unfortunately, sometimes two of the most important people in your life don't get along: <Dating.name> and <Friend.name> clearly don't like each other. <Dating.name> has not stopped accusing <Friend.name> of being a bad influence on me, while <Friend.name> thinks I can do much better than a <Dating.boyfriend_or_girlfriend> like <Dating.name>.`)
        option([
            {text: `Spend more time with <Dating.name>, my <Dating.boyfriend_or_girlfriend>`},
            {text: `Spend more time with <Friend.name>, my close friend`},
            {text: `Try to mediate`},
        ])
        if (0) {
            narrative(`I decided to be on <Dating.name>'s side on this and spent more time with <Dating.him_or_her>. <Dating.He_or_She> is my <Dating.boyfriend_or_girlfriend> after all! Of course, my blatant betrayal clearly upset <Friend.name>.`)
            Dating.attractionToPlayer += random(0, 5)
            Friend.rapportwithplayer -= random(0, 5)
        } else if (1) {
            narrative(`I decided to be on <Friend.name>'s side on this and spent more time with <Friend.him_or_her>. <Friend.He_or_She> is one of my best friends after all! Of course, my blatant betrayal clearly upset <Dating.name>.`)
            Dating.attractionToPlayer -= random(0, 5)
            Friend.rapportwithplayer += random(0, 5)
        } else {
            narrative(`I'd rather not have to choose between two equally important people in my life. I tried instead to find a resolution to their conflict.`)
            if (random(0, 100) < Player.interpersonal) {
                narrative(`My effort worked out, their relationship has improved somewhat. They still aren't thrilled to see each other but at least they have stopped going at each other all the time.`)
                Dating.attractionToPlayer += random(0, 2)
                Friend.rapportwithplayer += random(0, 2)
                if (Player.perversion > 50) {
                    narrative(`Should I be satisfied with this improvement or should I push for even more? A perverted idea comes up in my head ...`)
                    option([
                        {text: `A threesome should resolve all conflicts!`},
                        {text: `That's a stupid idea`},
                    ])
                    if (0) {
                        narrative(`To be honest, I have always fantasized about having a threesome with my <Dating.boyfriend_or_girlfriend> and <Friend.name> ... Besides, maybe a threesome would be just what needed to make them two friends.`)
                        if (random(50, 100) < Dating.perversion && random(50, 100) < Friend.perversion) {
                            narrative(`Somehow I managed to convince them both to do it ... Sharing is caring after all.`)
                            Player.moveTo("home")
                            scene.sex(Player, Dating, Friend)
                            Player.perversion += random(0, 1)
                            Dating.attractionToPlayer += random(0, 2)
                            Friend.rapportwithplayer += random(0, 2)
                        } else {
                            narrative(`Unfortunately, as fantastic as the idea appears in my head, I didn't even get close to convicing them to go for it.`)
                        }
                    } else {
                        narrative(`Nah, not really. I must have been watching too much porn recently to even think about that.`)
                    }
                }
            } else {
                narrative(`My effort failed miserably. Not only did their relationship not get any better, they were both annoyed that I tried to make them friends and refused to pick a side.`)
                Dating.attractionToPlayer -= random(0, 5)
                Friend.rapportwithplayer -= random(0, 5)
            }
        }


        scene.timeout(500, "dating_or_friend")
    })


})
module.exports = scene