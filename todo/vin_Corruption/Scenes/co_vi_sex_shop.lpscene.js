// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Corruption\Scenes\co_vi_sex_shop.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'co_vi_sex_shop'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all"])
    scene.where(["all"])
    scene.when([8, 24])
    let Actor = Player.getCompanion()
    scene.who(($IF) => {
        Actor = Player.getCompanion()
        $IF(!Actor.isRelative() && Actor.isInterestedIn(Player) && Actor.perversion > 70 && Actor.attractionToPlayer > 10)
    })
    scene.other("none")


    scene.start(() => {
        scene.setBackground("street")
        narrative(`I was hanging out with <Actor.name> when <Actor.he_or_she> insisted that I followed <Actor.him_or_her> to some shop. I have a feeling that <Actor.he_or_she> is up to no good ...`)
        narrative(`A while later ...`)
        narrative(`I knew it! My <Actor.sleazy_or_slutty> date is trying to take me to a sex shop ...`)
        option([
            {text: `Refuse to go in`},
            {text: `A little look won't hurt`},
        ])
        if (0) {
            Player.dialogue(`Hey, who do you take me for? No way I'm going in there!`, `Angry`)
            narrative(`The cheek of <Actor.him_or_her> ... taking a classy <Player.gentleman_or_lady> like me to this fifthy establishment.`)
            Player.masochist -= random(0, 0.25)
            Actor.attractionToPlayer -= random(0, 0.5)
        } else {
            Player.dialogue(`Fine ... I guess since we're already here, a little look around won't hurt.`, `Embarrassed`)
            Player.perversion += random(0, 0.25)
            scene.setBackground("department_store")
            narrative(`<Actor.name> is clearly in <Actor.his_or_her> element in this shop. The shopkeeper greeted <Actor.him_or_her> as if <Actor.he_or_she> is a regular customer.`)
            Actor.dialogue(`Why don't you take a seat over the counter over there and try this toy, <Player.handsome_or_beautiful>? I'll be happy to buy it for you if you find it ... satisfactory.`, `Flirty`)
            narrative(`What the hell? <Actor.name> wants me to try this <Player.Fleshlight_or_dildo> right here, in front of all the sex shop customers?`)
            option([
                {text: `No way!`},
                {text: `Alright ...`, condition: Player.perversion > 30},
            ])
            if (0) {
                Player.dialogue(`In your dream I will do that! A self-respecting <Player.man_or_woman> like me doesn't have any use for such toys, let alone try it in public.`, `Angry`)
            } else {
                narrative(`Playing with a sex toy in the middle of the sex shop in front of everyone ... It's shameless, degrading yet so ... tempting.`)
                Player.masochist += random(0, 0.25)
                Player.perversion += random(0, 0.5)
                narrative(`I took the <Player.Fleshlight_or_dildo> off <Actor.name>'s hand, walked towards the counter, sat down, took off my <Player.pants_or_panties> and started playing with it.`)
                Player.dialogue(`Ah ...`, `Pain`)
                narrative(`Damn this thing does feel so good ...`)
                Player.dialogue(`Ahhhhhh Ahhhhhh Ahhhhhh`, `Pain`)
                narrative(`My moaning has attracted the attention all the other customers who now circle around me to enjoy the show ...`)
                Player.animatePair(Player, Actor, "Kissing")
                narrative(`As I was nearing orgasm, <Actor.name> came closer and started to caress my sensitive spot. It's clear <Actor.he_or_she> wants a grand finale for this little sexy show <Actor.he_or_she> somehow convinced me to put on.`)
                option([
                    {text: `Let <Actor.him_or_her>`},
                    {text: `This is going too far ...`},
                ])
                if (0) {
                    narrative(`The <Player.Fleshlight_or_dildo> has got me all hot and bothered ... I really need a <Actor.man_or_woman>'s touch now ... As shameless as doing it in front of all the sex shop customers is.`)
                    scene.sex(Actor, Player)
                    Player.perversion += random(0, 1)
                    Actor.dress()
                } else {
                    Player.arousal += random(0, 50)
                    narrative(`Playing with a sex toy in public is shameless enough ... no way I'm having intercourse right here.`)
                }
            }
        }


    })
    scene.timeout(200, "co_vi_sex_shop")
})
module.exports = scene