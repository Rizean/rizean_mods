// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Corruption\Scenes\co_ag_sex_shop.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'co_ag_sex_shop'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all"])
    scene.where(["all"])
    scene.when([8, 24])
    let Actor = Player.getCompanion()
    scene.who(($IF) => {
        Actor = Player.getCompanion()
        $IF(!Actor.isRelative() && Player.isInterestedIn(Actor) && Player.perversion - Actor.perversion > 40 && Actor.attractionToPlayer > 10)
    })
    scene.other("none")


    scene.start(() => {
        if (!Actor.isValid() || scene.forcedTrigger()) {
            Actor = Player.getCompanion()
        }
        scene.setBackground("street")
        narrative(`<Actor.name> is such an innocent <Actor.guy_or_girl>.`)
        if (Actor.isVirgin()) {
            narrative(`I'm pretty sure <Actor.he_or_she> is still a virgin too ...`)
        }
        narrative(`I reckon a little visit to my favorite sex shop could help <Actor.him_or_her> open up a bit ...`)
        option([
            {text: `Take <Actor.him_or_her> to a sex shop`},
            {text: `Not a good idea`},
        ])
        if (0) {
            narrative(`A while later ...`)
            Actor.dialogue(`<Player.name>, where are you taking me to? Wait, is this a ... sex shop?`, `Surprised`)
            Player.dialogue(`Come on. I swear you'll find many interesting things to discover in there. Trust me ...`, `Flirty`)
            if (random(0, 200) < Player.interpersonal + Actor.attractionToPlayer + Actor.incest + Actor.perversion + Actor.masochist) {
                Actor.dialogue(`Fine ... I guess since we're already here, a little look around won't hurt.`, `Embarrassed`)
                Actor.perversion += random(0, 0.25)
                scene.setBackground("department_store")
                narrative(`Now that we're inside, should I just let <Actor.name> look around a bit or should I push a bit more and handpick a sex toy for <Actor.him_or_her> to try?`)
                option([
                    {text: `Convince <Actor.name> to try out a <Actor.Fleshlight_or_dildo>`},
                    {text: `Just let <Actor.him_or_her> explore on <Actor.his_or_her> own`},
                ])
                if (0) {
                    narrative(`Hmm, let me see ...`)
                    narrative(`Yup, this one should do.`)
                    Player.dialogue(`Why don't you take a seat over the counter over there and try this toy, <Actor.handsome_or_beautiful>? I'll be happy to buy it for you if you find it ... satisfactory.`, `Flirty`)
                    narrative(`Damn, have I gone too far here? Am I truly expecting a classy <Actor.man_or_lady> like <Actor.name> to try this <Actor.Fleshlight_or_dildo> right here, in front of all the sex shop customers?`)
                    if (random(0, 250) < Player.interpersonal + Actor.attractionToPlayer + Actor.incest + Actor.perversion + Actor.masochist) {
                        Actor.masochist += random(0, 0.25)
                        Actor.perversion += random(0, 0.5)
                        narrative(`To my surprise, <Actor.name> actually took the <Actor.Fleshlight_or_dildo> off my hand, walked towards the counter, sat down, took off <Actor.his_or_her> <Actor.pants_or_panties> and started playing with it.`)
                        Actor.dialogue(`Ah ...`, `Pain`)
                        Actor.dialogue(`Ahhhhhh Ahhhhhh Ahhhhhh`, `Pain`)
                        narrative(`<Actor.name>'s moaning has attracted the attention all the other customers who now circle around <Actor.him_or_her> to enjoy the show ...`)
                        narrative(`<Actor.name> is clearly nearing orgasm now ... should I try to get lucky or just leave <Actor.him_or_her> to finish alone?`)
                        option([
                            {text: `Touch <Actor.him_or_her>`},
                            {text: `Let <Actor.him_or_her> enjoy <Actor.himself_or_herself>`},
                        ])
                        if (0) {
                            Player.animatePair(Player, Actor, "Kissing")
                            narrative(`I came closer and started to caress <Actor.name>'s sensitive spot. I made it clear that I wanted a grand finale for this little sexy show I somehow convinced <Actor.him_or_her> to put on.`)
                            if (random(100, 300) < Player.interpersonal + Actor.attractionToPlayer + Actor.incest + Actor.perversion + Actor.masochist) {
                                narrative(`The <Actor.Fleshlight_or_dildo> has got <Actor.name> all hot and bothered ... <Actor.He_or_She> signalled to me that <Actor.he_or_she> really needed a <Player.man_or_woman>'s touch now ...`)
                                scene.sex(Player, Actor)
                                Actor.perversion += random(0, 1)
                                Actor.dress()
                            } else {
                                narrative(`<Actor.name> pushed my hand away, clearly suggesting that this is going too far.`)
                            }
                        }
                    } else {
                        Actor.dialogue(`In your dream I will do that! A self-respecting <Actor.man_or_woman> like me doesn't have any use for such toys, let alone try it in public.`, `Angry`)
                    }
                } else {
                    narrative(`After a little look around the sex shop, we left.`)
                }
            } else {
                Actor.dialogue(`Hey, who do you take me for? No way I'm going in there!`, `Angry`)
                Player.masochist -= random(0, 0.25)
                Actor.attractionToPlayer -= random(0, 0.5)
            }
        } else {
            narrative(`Let's take this slow ... No way <Actor.he_or_she> would agree to go in such a place.`)
        }


    })
    scene.timeout(200, "co_ag_sex_shop")
})
module.exports = scene