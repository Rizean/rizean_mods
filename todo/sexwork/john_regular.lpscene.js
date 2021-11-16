// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\sexwork\john_regular.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'john_regular'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, choice} = scene

    scene.what(["all"])
    scene.where(["all"])
    scene.when([0, 24])
    let Actor = scene.getPerson("tag_john")
    scene.who(($IF) => {
        $IF(Actor = scene.getPerson("tag_john"))
    })
    scene.other(($IF) => {
        $IF()
    })


    scene.start(() => {
        let Times = Actor.getActorVar("tag_john")
        let Dice = 500
        let P1C = Dice.convertToLocalCurrency("true")
        let P2 = Dice / 2
        let P2C = P2.convertToLocalCurrency("true")
        let P3 = Dice / 3
        let P3C = P3.convertToLocalCurrency("true")
        let SugarParent = Actor.getID()
        scene.secondScreen(Actor)
        Actor.show()
        narrative(`One of my past customers, <Actor.name> got in touch with me again and wanted to 'meet' tonight ...`)
        Times = Actor.getActorVar("tag_john")
        if (Times > 3) {
            narrative(`<Actor.name> has become somewhat of a regular customer who frequently blows a fortune on my service.`)
        }
        Dice = 500
        P1C = Dice.convertToLocalCurrency("true")
        P2 = Dice / 2
        P2C = P2.convertToLocalCurrency("true")
        P3 = Dice / 3
        P3C = P3.convertToLocalCurrency("true")


        narrative(`How much should I charge <Actor.him_or_her>?`)
        option([
            {text: `Turn <Actor.him_or_her> down`},
            {text: `Rip <Actor.him_or_her> off (<P1C>)`},
            {text: `Offer a fair price (<P2C>)`},
            {text: `Give <Actor.him_or_her> a bargain (<P3C>)`},
        ])
        if (0) {
            Player.dialogue(`Sorry, but I'm not in town today ...`, `Sad`)
            narrative(`Should I ignore <Actor.name> permanently from now on?`)
            option([
                {text: `Yes`},
                {text: `No, this is still a good regular client to keep around`},
                {text: `Tell all my regular customers that I'm retired from prostitution`},
            ])
            if (0) {
                Actor.setActorVar("tag_john", 0)
                narrative(`This particular client annoys me, I don't want to see <Actor.him_or_her> ever again ...`)
            } else if (2) {
                narrative(`I no longer consider myself a prostitute so should go ahead and text all my regular customers to not contact me anymore.`)
                Actor.setActorVar("tag_john", 0)
                while (Actor.isValid()) {
                    Actor = scene.getPerson("tag_john")
                    Actor.setActorVar("tag_john", 0)
                }


                narrative(`I told all of them to leave me alone from now on. Let's move on from this stage of my life.`)
            }
        } else {
            Times += 1
            Actor.setActorVar("tag_john", Times)
            Actor.attractionToPlayer += choice * 3
            Actor.dialogue(`Of course darling, I'll pay anything to be with you again.`, `Flirty`)
            scene.secondScreen()
            Actor.dress()
            Actor.show()
            narrative(`Soon enough, we were meeting at a hotel room that we agreed on. <Actor.name> didn't spare any expenses for this hotel either.`)
            scene.setBackground("home")
            scene.sex(Actor, Player)
            Player.money = Player.money + Dice / choice
            Player.perversion += 0.25
            narrative(`Aside from our agreed fee, the John also gave me a big tip.`)
            Player.money += Dice / choice / 2
            if (Times > 6 && Actor.attractionToPlayer > 50) {
                Actor.dialogue(`Listen, can we talk for a bit?`, `Anxious`)
                narrative(`<Actor.name> has been acting rather weirdly tonight, as if <Actor.he_or_she> had something important to say.`)
                Player.dialogue(`Of course, darling. What is it?`, `Curious`)
                Actor.dialogue(`You know, although our intimacy started as an transaction, I have grown emotionally attached to you and I hope you feel the same ...`, `Happy`)
                Actor.dialogue(`If so, I would love nothing more than to take our relationship to the next level and be able to call you my <Player.boyfriend_or_girlfriend>.`, `Happy`)
                option([
                    {text: `Agree to be <Actor.his_or_her> <Player.boyfriend_or_girlfriend>`},
                    {text: `Reject <Actor.him_or_her>`},
                ])
                if (0) {
                    Player.karma += 10
                    Player.dialogue(`I like you a lot too, <Actor.name>. Of course I'll be your <Player.boyfriend_or_girlfriend>!`, `Happy`)
                    Player.exchangeContact(Actor)
                    Actor.setDating()
                    Actor.setActorVar("tag_john", 0)
                } else {
                    narrative(`Why would I agree and then have to have sex with <Actor.him_or_her> for free from now on? The money is too good!`)
                    Player.dialogue(`Sorry, I'd prefer to keep this relationship strictly ... 'professional'.`, `Sad`)
                    Actor.attractionToPlayer -= 7
                }
            } else if (Times > 4 && Actor.attractionToPlayer > 35) {
                Actor.dialogue(`Listen, can we talk for a bit?`, `Anxious`)
                narrative(`<Actor.name> has been acting rather weirdly tonight, as if <Actor.he_or_she> had something important to say.`)
                Player.dialogue(`Of course, darling. What is it?`, `Curious`)
                Actor.dialogue(`You know, you've become my absolute favorite <Player.boy_or_girl>, I just can't get enough of you ...`, `Happy`)
                Actor.dialogue(`You deserve better than to be a common prostitute and sleep with just anyone. Why don't you become my sugarbabe instead?`, `Happy`)
                option([
                    {text: `Agree to be <Actor.his_or_her> sugarbabe`},
                    {text: `Reject <Actor.him_or_her>`},
                ])
                if (0) {
                    Player.karma += 10
                    Player.dialogue(`Yes, <Actor.Daddy_or_Mama>. Of course I'll be your sugarbabe!`, `Happy`)
                    Actor.setActorVar("tag_john", 0)
                    SugarParent = Actor.getID()
                    scene.setGlobal(`SugarParent`, `SugarParent`)
                } else {
                    narrative(`Nah, I'd rather keep my options open`)
                    Player.dialogue(`Sorry, but sugardating isn't for me.`, `Sad`)
                    Actor.attractionToPlayer -= 4
                }
            }
        }


    })
    scene.timeout(150, "john_regular")
})
module.exports = scene