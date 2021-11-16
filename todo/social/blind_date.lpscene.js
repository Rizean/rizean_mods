// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\social\blind_date.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'blind_date'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all", " -sleep", " -nap"])
    scene.where(["all"])
    scene.when([17, 20])
    let Actor = scene.getPerson("true")
    scene.who(($IF) => {
        Actor = scene.getPerson("true")
        $IF(random(0, 100) < Actor.interpersonal && !Actor.isInterestedIn(Player) && Actor.rapportwithplayer > 40)
    })
    scene.other(($IF) => {
        $IF(!Player.isDating() && !Player.isWithCompanion())
    })


    scene.start(() => {
        let Date = scene.generatePersonTemporary([])
        let Loc = scene.findNearbyBuilding("restaurant")
        narrative(`My phone is ringing. It's <Actor.name>. I wonder what <Actor.he_or_she> is calling me for ...`)
        Actor.dress()
        scene.secondScreen(Actor)
        Actor.show(2)
        Date = scene.generatePersonTemporary([])
        while (!Date.isInterestedIn(Player) || !Player.isInterestedIn(Date)) {
            Date = scene.generatePersonTemporary([])
        }


        Actor.dialogue(`Listen, have you gotten tired of the single life yet? There's this <Date.guy_or_girl> that I'm 100% certain is your type. I was thinking about setting up a blind date for you two ...`, `Happy`)
        option([
            {text: `Yes`},
            {text: `No`},
        ])
        if (0) {
            Actor.rapportwithplayer += random(0, 2)
            Date.makePermanent()
            Player.dialogue(`Fancy yourself a bit of a matchmaker? Oh well, I guess I'll give it a shot. But if it turns out to be the worst date in my life, I'm blaming you!`, `Wink`)
            scene.secondScreen()
            Actor.hide()
            narrative(`Later on ...`)
            Loc = scene.findNearbyBuilding("restaurant")
            Player.moveTo(Loc)
            Date.dress()
            Date.show(2)
            narrative(`My blind date introduced <Date.himself_or_herself> as <Date.name> and <Actor.name> set us up to meet each other at a restaurant nearby. <Date.He_or_She> seemed alright at first, although without knowing much about the <Date.guy_or_girl>, I didn't feel any instant connection either.`)
            Date.show(2)
            narrative(`Now that we've finished dinner, should I exchange contacts with <Date.name>?`)
            option([
                {text: `Yes`},
                {text: `No`},
            ])
            if (0) {
                narrative(`We exchanged contacts so that we can go on future dates.`)
                Player.exchangeContact(Date)
                narrative(`Should I continue to hang out with <Date.name> after the dinner?`)
                option([
                    {text: `Yes`},
                    {text: `No`},
                ])
                if (0) {
                    narrative(`Why not? I'm quite interested in getting to know my blind date better. Dinner didn't give me enough time to learn anything about the <Date.guy_or_girl>.`)
                    Date.startDate()
                } else {
                    narrative(`No, that's enough for the first date. <Date.He_or_She> has my number now so we could always go on another date some other day.`)
                }
            } else {
                narrative(`I don't really like the <Date.guy_or_girl>. I'll probably never want to go on a date with <Date.him_or_her> again, so what's the point in giving <Date.him_or_her> my number?`)
            }
        } else {
            Player.dialogue(`Thank you for the offer, but no, the single life is great. Wouldn't swap it for anything else!`, `Sarcastic`)
            Actor.rapportwithplayer -= random(0, 1)
        }


    })
    scene.timeout(200, "blind_date")
})
module.exports = scene