// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\companion\date_hit_on.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'date_hit_on'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all"])
    scene.where(["all", " -home"])
    scene.when([0, 24])
    let Actor = Player.getCompanion()
    scene.who(($IF) => {
        Actor = Player.getCompanion()
        $IF(random(50, 200) < Actor.attractiveness && !Actor.isProstitute())
    })
    scene.other("none")


    scene.start(() => {
        let Actor2 = scene.generatePersonTemporary([])
        let Went = true
        Actor2 = scene.generatePersonTemporary([])
        Actor2.dress()
        Actor2.show(2)
        Actor2.makeInterested(Actor)
        Actor2.moveToPersonStand(Actor, 100)
        Actor2.dialogue(`Aren't you an eye-candy? What's your name? I'm <Actor2.name>. Let's go out some time.`, `Flirty`)
        narrative(`What a <Actor2.sleazy_or_slutty> <Actor2.asshole_or_bitch>! Trying to pick up <Actor.name> just like that while completely ignoring me. As if I wasn't even there!`)
        option([
            {text: `Shut <Actor2.name> down`},
            {text: `Let <Actor2.him_or_her> continue flirting with <Actor.name>`},
        ])
        if (0) {
            Player.dialogue(`Fuck off! <Actor.He_or_She>'s taken!`, `Angry`)
            Actor.attractionToPlayer += random(0, 2)
            Player.masochist -= random(0, 1)
        } else {
            narrative(`No point making a big deal of this ... <Actor.name> is the type of <Actor.guy_or_girl> that gets a lot of attention anyway.`)
            Actor.attractionToPlayer -= random(0, 2)
            Player.masochist += random(0, 1)
            if (random(35, 65) < Actor.perversion && Actor.isInterestedIn(Actor2) && scene.isModEnabled("vin_NTR")) {
                narrative(`<Actor.name> doesn't seem a tiny bit put off by my presence there and also doesn't mind the aggressive flirting from <Actor2.name>.`)
                narrative(`They continue to flirt as if I wasn't there!`)
                Actor2.dialogue(`Let's get out of here, darling? I can't wait to get to know you more ... `)
                narrative(`<Actor2.He_or_She> can't be serious in inviting <Actor.name> to come with <Actor2.him_or_her> right in front of me ... have I turned invisible or something?`)
                if (Player.masochist > Actor.masochist + 20) {
                    narrative(`For some reason, my tongue seems to be all tied up and I can't mutter a word of disapproval.`)
                    narrative(`<Actor2.name> took my silence as submission and didn't have to think twice about stealing my date away right in front of me.`)
                    Actor.dialogue(`Don't wait up on me, I'm gonna go play with my new friend`)
                    Went = true
                } else {
                    narrative(`Maybe I should stop this before it's too late. I'm not THAT much of a pushover, am I?`)
                    option([
                        {text: `Put an end to it`},
                        {text: `Let them go`},
                    ])
                    if (0) {
                        Player.dialogue(`Excuse me, but <Actor.he_or_she> is with me.`)
                        Went = false
                        narrative(`<Actor2.name> got the message and left us alone.`)
                    } else {
                        narrative(`I stayed silent and just like that the stranger took my date with <Actor2.him_or_her>`)
                        Actor.dialogue(`Don't worry. We're just going to hang out a bit and check out this club that <Actor2.name> just told me about.`)
                        Went = true
                        Player.masochist += random(0, 2)
                    }
                }


                if (Went) {
                    narrative(`<Actor2.name> and <Actor.name> is about to leave together. Should I leave them alone or secretly follow them?`)
                    option([
                        {text: `Let them be`},
                        {text: `Follow them`},
                    ])
                    if (1) {
                        scene.setBackground("hotel")
                        narrative(`I knew it ... The cheeky <Actor2.guy_or_girl> took <Actor.name> straight to the nearest hotel ...`)
                        option([
                            {text: `Peep on them`},
                            {text: `It's humiliating enough already`},
                        ])
                        if (0) {
                            Player.hide()
                            narrative(`I couldn't have imagined when I first invited <Actor.name> to hang out that tonight would end with me watching <Actor.him_or_her> fucking some random <Actor2.guy_or_girl> <Actor.he_or_she>'s just met.`)
                            scene.setBackground("home")
                            scene.sex(Actor2, Actor)
                            Player.masochist += random(0, 3)
                        }
                    }
                    Player.endDate()
                    Player.show()
                }
            } else {
                if (Actor.isDating()) {
                    Actor.dialogue(`Can't you see I'm already here with my <Player.boyfriend_or_girlfriend>?`)
                } else if (Actor.isRelative()) {
                    Actor.dialogue(`Can't you see I'm already here with my <Actor.callplayer>?`)
                } else {
                    Actor.dialogue(`Can't you see I'm already here with someone?`)
                }
                Actor.dialogue(`Please leave me alone!`)
                narrative(`<Actor.name> firmly rejected the advances from the stranger.`)
            }
        }
    })
    scene.timeout(24, "date_hit_on")
})
module.exports = scene