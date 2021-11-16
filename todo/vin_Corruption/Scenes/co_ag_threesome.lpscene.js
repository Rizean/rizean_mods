// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Corruption\Scenes\co_ag_threesome.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'co_ag_threesome'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all"])
    scene.where(["all", " -home"])
    scene.when([17, 22])
    let Actor = Player.getCompanion()
    let Actor2 = scene.getSpecific("Dating")
    scene.who(($IF) => {
        Actor = Player.getCompanion()
        Actor2 = scene.getSpecific("Dating")
        $IF(!Actor.isRelative() && Actor.isInterestedIn(Player) && Player.perversion - Actor.perversion > 40 && Actor.attractionToPlayer > 10 && Actor2.attractionToPlayer > 10)
    })
    scene.other(($IF) => {
        $IF(Player.openRelationship())
    })


    scene.start(() => {
        scene.setBackground("street")


        narrative(`<Actor.name> is such an innocent <Actor.guy_or_girl>. I reckon my <Actor2.boyfriend_or_girlfriend> and I could seduce <Actor.him_or_her> into a threesome and help <Actor.him_or_her> open up a bit ...`)
        option([
            {text: `Invite <Actor.name> over for 'dinner'`},
            {text: `Not a good idea`},
        ])
        if (0) {
            if (random(0, 200) < Player.interpersonal + Actor.attractionToPlayer + Actor.incest + Actor.perversion + Actor.masochist) {
                Actor.masochist += random(0, 0.25)
                Actor.perversion += random(0, 0.25)
                scene.setBackground("home")
                Actor2.dress()
                Actor2.show(2)
                Actor.dialogue(`Nice to see you again, <Actor2.name>.`, `Happy`)
                Actor2.dialogue(`The pleasure is all mine, <Actor.name>. Come in, dinner's ready!`, `Happy`)
                narrative(`An hour later ...`)
                Actor.dialogue(`Thank you for dinner, you two. I think I'd better get going.`, `Happy`)
                Player.dialogue(`You wouldn't leave before finishing dessert, would you?`, `Flirty`)
                Actor.dialogue(`What do you mean? We just had cake, didn't we?`, `Confused`)
                Player.dialogue(`I mean this dessert ...`, `Flirty`)
                Player.animatePair(Player, Actor, "Kissing")
                Player.dialogue(`...`, `Kiss`)
                Actor.dialogue(`<Player.name>! What are you doing? Your <Actor2.boyfriend_or_girlfriend> is right here!`, `Angry`)
                Actor2.dialogue(`...`, `Kiss`)
                Actor2.dialogue(`Don't worry about it, honey. Just sit back and relax. My <Player.boyfriend_or_girlfriend> and I talked about this - we're in an open relationship you see ...`, `Flirty`)
                if (random(100, 300) < Player.interpersonal + Actor.attractionToPlayer + Actor.incest + Actor.perversion + Actor.masochist) {
                    Actor.dialogue(`...`, `Kiss`)
                    scene.sex(Player, Actor, Actor2)
                    Player.perversion += random(0, 3)
                    Actor.dress()
                } else {
                    Actor.dialogue(`Sorry, I don't feel comfortable with all of this. You two should go find someone else.`, `Embarrassed`)
                    Player.endDate()
                }
            } else {
                Actor.dialogue(`Sorry, but I've eaten.`, `Sad`)
                Actor.masochist -= random(0, 0.25)
                Actor.attractionToPlayer -= random(0, 0.25)
            }
        }
    })
    scene.timeout(500, "co_ag_threesome")
})
module.exports = scene