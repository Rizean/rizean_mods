// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\sexwork\cam.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'cam'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["none"])
    scene.where(["none"])
    scene.when([0, 24])
    scene.who("none")
    scene.other("none")


    scene.start(() => {
        let Selfie = random(0.7, 1.3) * (Player.pornfame + Player.attractiveness)
        let Actor = scene.getSpecific("Dating")
        let Actor2 = Player.getRelative()
        let IncomeConverted = Selfie.convertToLocalCurrency("true")
        narrative(`Do I want to start a live webcame show right now?`)
        option([
            {text: `Yes`},
            {text: `No`},
        ])
        if (0) {
            scene.setBackground("home")
            Player.pornfame += 0.5
            Selfie = random(0.7, 1.3) * (Player.pornfame + Player.attractiveness)
            narrative(`Let's go live ...`)
            narrative(`Let's start by playing with myself a bit while giving some jerk-off instructions to my audience, that always gets the party going ...`)
            scene.filter("Solo")
            scene.sex(Player)
            narrative(`The tips are starting to pour in after my little live solo show ...`)
            if (random(0, 100) < 30) {
                narrative(`Quite a few viewers are requesting a live oral show ...`)
                scene.filter("Oral")
            } else if (random(0, 100) < 50) {
                narrative(`Quite a few viewers are requesting a live anal show ...`)
                scene.filter("Anal")
            } else {
                narrative(`Quite a few viewers are requesting to watch me get fucked ...`)
            }
            Actor = scene.getSpecific("Dating")


            if (Actor.isValid()) {
                Actor.dress()
                Actor.show()
                narrative(`Right that moment, I hear the footsteps of my <Actor.boyfriend_or_girlfriend> <Actor.name> just arriving home ... Perfect timing ...`)
                option([
                    {text: `Indulge my viewers with a live show with <Actor.name> ...`},
                    {text: `No`},
                ])
                if (0) {
                    Selfie *= random(1.5, 2.5)
                    scene.sex(Player, Actor)
                    Player.pornfame += 1
                }
            } else {
                narrative(`Unfortunately, I don't have a co-star to do that with ...`)
            }


            Actor2 = Player.getRelative()
            if (Actor2.isValid() && (Actor2.perversion > 50 || Actor2.hadSex())) {
                narrative(`Hmm, I ran out of lube. Let's go get some ...`)
                Player.dialogue(`I'll be right back! Keep watching, guys!`)
                Player.hide()
                Actor.hide()
                Actor2.dress()
                Actor2.dialogue(`<Player.name>, can I come in?`)
                Actor2.dialogue(`...`)
                Actor2.show()
                Actor2.dialogue(`I've come to ask if you want to... What?!`)
                narrative(`Unbeknown to me, as soon as I was out of the room, my <Actor2.relationship> happened to walk into it.`)
                Actor2.dialogue(`So, my <Actor2.callplayer> was doing a live cam show ...`)
                Actor2.dialogue(`Maybe I can have some fun too ...`)
                scene.filter("Solo")
                scene.sex(Actor2)
                Selfie *= random(1.5, 2.5)
                Actor2.dialogue(`Shit, <Player.name> is coming back. Let's get out of here ...`)
                Actor2.hide()
                Player.show()
                Player.dialogue(`Finally, I found some lube. I hope my viewers didn't all get bored and stop watching.`)
                Player.dialogue(`What? So many tips while I was gone! Just how? I wasn't even in the room ...`)
                narrative(`Whatever ... they are such simps ...`)
                Player.dialogue(`Thank you sweeties, you're so generous! You're the best viewers ever!`)
            }


            narrative(`After playing with myself some more while interacting with my viewers, I ended today's cam show.`)
            IncomeConverted = Selfie.convertToLocalCurrency("true")
            Player.money = Player.money + Selfie
            narrative(`I earned <IncomeConverted> in total from camming today. Not bad!`)
        }
    })
})
module.exports = scene