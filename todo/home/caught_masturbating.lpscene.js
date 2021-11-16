// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\home\caught_masturbating.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'caught_masturbating'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["masturbate"])
    scene.where(["home"])
    scene.when([0, 24])
    scene.who("none")
    scene.other(($IF) => {
        $IF(random(0, 300) < Player.attractiveness)
    })


    let Peeping = scene.getPerson()
    Peeping = scene.getPerson()
    if (Player.isAtHome()) {
        scene.$random(() => {
            Peeping = scene.getSpecific("Neighbour")
            Peeping = scene.getSpecific("Landlord")
        })
        if (!Peeping.isValid()) {
            Peeping = scene.getSpecific("Landlord")
        }
    } else {
        scene.$random(() => {
            Peeping = scene.getSpecific("Dating_Friend")
            Peeping = scene.getSpecific("Dating")
        })
        if (!Peeping.isValid()) {
            Peeping = scene.getSpecific("Dating")
        }
    }


    let Interested = Peeping.isInterestedIn(Player)
    Interested = Peeping.isInterestedIn(Player)


    if (Interested) {
        scene.start(() => {
            Player.strip()
            scene.setBackground("home")
            scene.filter("Solo")
            scene.sex(Player)
            Player.dialogue(`God damn it! This feels so good ...`, `Pain`)
            Player.dialogue(`What? Who's there?`, `Embarrassed`)
            narrative(`I was enjoying a bit of alone time when suddenly I heard a noise. I thought someone might be peeping on me!`)
            option([
                {text: `Get dressed`},
                {text: `Continue pleasuring myself`},
            ])
            if (0) {
                Player.dress()
                narrative(`I quickly put some clothes on and went looking around but couldn't find anyone. Whoever the peeping Tom was must have some quick feet.`)
            } else {
                Player.perversion += random(0, 0.1)
                Peeping.attractionToPlayer += random(0, 0.5)


                narrative(`I won't lie: The thought of someone watching me turned me on even further ... I might as well give my peeping Tom a show to remember`)


                if (Peeping.isDating() || Peeping.attractionToPlayer + Peeping.perversion > random(0, 200)) {
                    narrative(`My bedroom door slowly crept open and behind it revealed my not-so-secret admirer. It was no other than <Peeping.name>.`)
                    Peeping.dress()
                    Peeping.show(2)
                    Peeping.dialogue(`You look like you could do with a hand ...`, `Flirty`)
                    option([
                        {text: `Invite <Peeping.him_or_her> into bed with you`},
                        {text: `Turn <Peeping.him_or_her> down`},
                    ])
                    if (0) {
                        Player.dialogue(`I think you could be of help indeed ...`, `Flirty`)
                        Player.perversion += random(0, 0.2)
                        Peeping.attractionToPlayer += random(0, 2)
                        scene.sex(Peeping, Player)
                        Peeping.show(2)
                        narrative(`Well, that was a much better release than I expected!`)
                    } else {
                        narrative(`I quickly grabbed the blanket to cover myself.`)
                        Player.dialogue(`Hey! Get out! Remember to knock next time, you perv!`, `Embarrassed`)
                        Peeping.attractionToPlayer -= random(0, 1)
                        Peeping.hide()
                        Player.dress()
                        narrative(`Disappointed, <Peeping.name> retreated, while I put on my clothes.`)
                    }
                } else {
                    narrative(`A while later ...`)
                    Player.dialogue(`Yes! Yes! Yes!`, `Pain`)
                    narrative(`I came. I must have given my peeping Tom one hell of a show!`)
                }
            }
            scene.timeout(24, "caught_masturbating")
        })
    } else {
        Peeping.delete()
    }


})
module.exports = scene