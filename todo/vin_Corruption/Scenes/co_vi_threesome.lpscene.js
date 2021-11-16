// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Corruption\Scenes\co_vi_threesome.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'co_vi_threesome'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all"])
    scene.where(["all", " -home"])
    scene.when([17, 22])
    let Actor = Player.getCompanion()
    let Actor2 = Actor.getRelatedPerson("Spouses", "Dating")
    scene.who(($IF) => {
        Actor = Player.getCompanion()
        Actor2 = Actor.getRelatedPerson("Spouses", "Dating")
        $IF(!Actor.isRelative() && Actor.isInterestedIn(Player) && Actor.perversion > 70 && Actor.attractionToPlayer > 10)
    })
    scene.other("none")


    scene.start(() => {
        scene.setBackground("street")


        narrative(`I was hanging out with <Actor.name> when <Actor.he_or_she> insisted that I came over for dinner with <Actor.him_or_her> and <Actor.his_or_her> <Actor2.boyfriend_or_girlfriend>.`)
        option([
            {text: `Turn them down`},
            {text: `That's nice of you`},
        ])
        if (0) {
            Player.dialogue(`Sorry, but I've eaten.`, `Sad`)
            Player.masochist -= random(0, 0.25)
            Actor.attractionToPlayer -= random(0, 0.5)
        } else {
            Player.masochist += random(0, 0.25)
            Player.perversion += random(0, 0.25)
            scene.setBackground("home")
            Actor2.dress()
            Actor2.show(2)
            Player.dialogue(`Nice to see you again, <Actor2.name>.`, `Happy`)
            Actor2.dialogue(`The pleasure is all mine, <Player.name>. Come in, dinner's ready!`, `Happy`)
            narrative(`An hour later ...`)
            Player.dialogue(`Thank you for dinner, you two. I think I'd better get going.`, `Happy`)
            Actor.dialogue(`You wouldn't leave before finishing dessert, would you?`, `Flirty`)
            Player.dialogue(`What do you mean? We just had cake, didn't we?`, `Confused`)
            Actor.dialogue(`I mean this dessert ...`, `Flirty`)
            Player.animatePair(Player, Actor, "Kissing")
            Actor.dialogue(`...`, `Kiss`)
            narrative(`What the hell! <Actor.name> is trying to kiss me ... right in front of <Actor.his_or_her> <Actor2.boyfriend_or_girlfriend>.`)
            Player.dialogue(`<Actor.name>! What are you doing? Your <Actor2.boyfriend_or_girlfriend> is right here!`, `Angry`)
            Actor2.dialogue(`...`, `Kiss`)
            Actor2.dialogue(`Don't worry about it, honey. Just sit back and relax. My <Actor.boyfriend_or_girlfriend> and I talked about this - we're in an open relationship you see ...`, `Flirty`)
            narrative(`Oh god, this is all planned ... They're trying to get me into their threesome fantasy ...`)
            option([
                {text: `Let it happen`},
                {text: `Stop right there`},
            ])
            if (0) {
                Player.dialogue(`...`, `Kiss`)
                scene.sex(Actor, Player, Actor2)
                Player.perversion += random(0, 3)
                Actor.dress()
            } else {
                Player.dialogue(`Sorry, I don't feel comfortable with all of this. You two should go find someone else.`, `Embarrassed`)
                Player.endDate()
            }
        }
    })
    scene.timeout(500, "co_vi_threesome")
})
module.exports = scene