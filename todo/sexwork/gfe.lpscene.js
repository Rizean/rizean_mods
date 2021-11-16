// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\sexwork\gfe.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'gfe'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["whore_out", " whore_out_brothel", " whore_out_online"])
    scene.where(["all"])
    scene.when([17, 21])
    scene.who("none")
    scene.other(($IF) => {
        $IF(random(0, 150) < Player.pornfame + Player.attractiveness + Player.interpersonal)
    })


    scene.start(() => {
        let Actor = scene.generatePersonTemporary([])
        narrative(`A pretty common and well-paid gig for sex workers like me is something called '<Player.Boyfriend_or_Girlfriend> Experience'. It's for customers that want more than just sex.`)
        narrative(`Usually they are people who feel lonely and want to pretend they are actually dating someone for the night. Of course, the date is guaranteed to end in bed, it's the sex industry after all.`)
        Actor = scene.generatePersonTemporary([])
        while (!Player.isInterestedIn(Actor)) {
            Actor = scene.generatePersonTemporary([])
        }
        Actor.makeInterested(Player)
        scene.dressFormal()
        Actor.dress()
        scene.secondScreen(Actor)
        Actor.show()
        narrative(`<Actor.name> is one such client, who is requesting my company tonight and is willing to pay generously for it.`)
        option([
            {text: `Go on a date with <Actor.name>`},
            {text: `Not tonight`},
        ])
        if (0) {
            scene.secondScreen()
            scene.setBackground("restaurant")
            narrative(`I was asked to meet <Actor.name> at a fine dining restaurant.`)
            Actor.show()
            Actor.moveToPerson(Player)
            narrative(`<Actor.name> showed up with some gift right away`)
            narrative(`It was a lavish and expensive dinner and <Actor.name> spent most of it talking about <Actor.his_or_her> painful breakup and how I looked just like <Actor.his_or_her> ex ...`)
            scene.setBackground("bar")
            narrative(`We then moved on to a fancy bar`)
            Actor.moveToPerson(Player)
            narrative(`<Actor.name> ordered a vintage bottle of wine for both of us.`)
            narrative(`Thankfully, the conversation got better too and <Actor.he_or_she> focused on more on asking about my life than talking about <Actor.his_or_her> ex.`)
            scene.setBackground("home")
            narrative(`Of course, I'm a sex worker after all and as much of a <Actor.gentleman_or_lady> <Actor.name> was during our date, it's been agreed beforehand that we'll end up in a hotel room together.`)
            narrative(`<Actor.name> wasn't in a rush to get down to business right away though since <Actor.he_or_she> has hired me for the whole night ...`)
            narrative(`We talked some more before things got heated.`)
            scene.sex(Actor, Player)
            Player.money += 500
            if (Actor.attractionToPlayer > 35) {
                Actor.dialogue(`Listen, can we talk for a bit?`, `Anxious`)
                Player.dialogue(`Of course, darling. What is it?`, `Curious`)
                Actor.dialogue(`You know, although our intimacy started as an transaction, I have grown emotionally attached to you after tonight and I hope you feel the same ...`, `Happy`)
                Actor.dialogue(`If so, I would love nothing more than to take our relationship to the next level and be able to call you my <Player.boyfriend_or_girlfriend>.`, `Happy`)
                option([
                    {text: `Agree to be <Actor.his_or_her> <Player.boyfriend_or_girlfriend>`},
                    {text: `Reject <Actor.him_or_her>`},
                ])
                if (0) {
                    Player.karma += 10
                    Player.dialogue(`I like you a lot too, <Actor.name>. Of course I'll be your <Player.boyfriend_or_girlfriend>!`, `Happy`)
                    Actor.makePermanent()
                    Player.exchangeContact(Actor)
                    Actor.setDating()
                    Actor.setActorVar("tag_john", 0)
                } else {
                    narrative(`Why would I agree and then have to have sex with <Actor.him_or_her> for free from now on? The money is too good!`)
                    Player.dialogue(`Sorry, I'd prefer to keep this relationship strictly ... 'professional'.`, `Sad`)
                }
            }
        }
    })
    scene.timeout(150, "gfe")
})
module.exports = scene