// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\dating\dating_and_ex.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'dating_and_ex'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all", " -sleep", " -nap", " -sleep_hotel", " -nap_hotel"])
    scene.where(["all"])
    scene.when([0, 24])
    let Dating = scene.getSpecific("Dating")
    let Ex = scene.getSpecific("ExDating")
    scene.who(($IF) => {
        Dating = scene.getSpecific("Dating")
        Ex = scene.getSpecific("ExDating")
        $IF(Ex.isContactExchanged() && Ex.attractionToPlayer > 40 && Dating.attractionToPlayer > 40)
    })
    scene.other(($IF) => {
        $IF(!Player.isWithCompanion() && !Player.openRelationship())
    })


    scene.start(() => {
        Dating.dress()
        Ex.dress()


        Dating.show(2)
        Ex.show(3)


        narrative(`<Dating.name> and my ex <Ex.name> clearly don't like each other. <Dating.name> has not stopped accusing <Ex.name> of still harboring romantic intention of getting back with me, while <Ex.name> couldn't believe I ended up with someone like <Dating.name> after <Ex.him_or_her>.`)
        option([
            {text: `Spend more time with <Dating.name>, my <Dating.boyfriend_or_girlfriend>`},
            {text: `Be more flirtatous to <Ex.name>, my ex`},
            {text: `Try to mediate`},
        ])
        if (0) {
            narrative(`I decided to be on <Dating.name>'s side on this and spent more time with <Dating.him_or_her>. <Dating.He_or_She> is my <Dating.boyfriend_or_girlfriend> after all! Of course, this also sent a message to <Ex.name>.`)
            Dating.attractionToPlayer += random(0, 5)
            Ex.attractionToPlayer -= random(0, 5)
        } else if (1) {
            narrative(`I decided to be on <Ex.name>'s side on this and openly flirted with <Ex.him_or_her> many times. Of course, my blatant betrayal clearly upset <Dating.name>.`)
            Dating.attractionToPlayer -= random(0, 5)
            Ex.attractionToPlayer += random(0, 5)
        } else {
            narrative(`I'd rather not have to choose. I tried instead to find a resolution to their conflict.`)
            if (random(0, 200) < Player.interpersonal) {
                narrative(`My effort worked out, their relationship has improved somewhat. They still aren't thrilled to see each other but at least they have stopped going at each other all the time.`)
                Dating.attractionToPlayer += random(0, 2)
                Ex.attractionToPlayer += random(0, 2)
                if (Player.perversion > 50) {
                    narrative(`Should I be satisfied with this improvement or should I push for even more? A perverted idea comes up in my head`)
                    option([
                        {text: `A threesome should resolve all conflicts!`},
                        {text: `That's a stupid idea`},
                    ])
                    if (0) {
                        narrative(`To be honest, I have always fantasized about getting sandwiched between my <Dating.boyfriend_or_girlfriend> and my ex ... Besides, maybe a threesome would be just what needed to stop these two from being so possessive of me.`)
                        if (random(50, 100) < Dating.perversion && random(50, 100) < Ex.perversion) {
                            narrative(`Somehow I managed to convince them both to do it ... Sharing is caring after all.`)
                            scene.setBackground("home")
                            scene.sex(Player, Dating, Ex)
                            Player.perversion += random(0, 1)
                            Dating.attractionToPlayer += random(0, 2)
                            Ex.attractionToPlayer += random(0, 2)
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
                Ex.attractionToPlayer -= random(0, 5)
            }
        }


        scene.timeout(500, "dating_and_ex")
    })
})
module.exports = scene