// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\sexwork\reluctant_star.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'reluctant_star'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, choice} = scene

    scene.what(["all", " -go_to_the_bathroom"])
    scene.where(["bar", " nightclub"])
    scene.when([21, 4])
    let Actor = Player.getCompanion()
    scene.who(($IF) => {
        Actor = Player.getCompanion()
        $IF(!Actor.isRelative() && random(70, 200) < Actor.perversion && random(-100, -50) > Actor.masochist && !Actor.isDating() && !Actor.isSameGender(Player))
    })
    scene.other(($IF) => {
        $IF(scene.isModEnabled("vin_NonConsensual") && Player.pornfame == 0 && !Player.isGay())
    })


    scene.start(() => {
        narrative(`It's been a decent date with <Actor.name> I guess. <Actor.He_or_She> is a bit handsy though, but I'm giving <Actor.him_or_her> none of it.`)
        Actor.dialogue(`You're the most <Player.handsome_or_beautiful> <Player.guy_or_girl> I've ever been on a date with. I'd love nothing more than being able to buy you a drink.`, `Happy`)
        option([
            {text: `Yes`},
            {text: `No`},
        ])
        if (0) {
            narrative(`Ah, what a charming <Actor.gentleman_or_lady>!`)
            Player.dialogue(`Of course! I'd love to have a drink with you.`, `Happy`)
            narrative(`Soon enough, <Actor.name> was back with drinks for both of us. We enjoyed our drinks while having a pleasant conversation.`)
            narrative(`A while later ...`)
            narrative(`What's happening to me? I only had one drink for God's sake. My head is already shaking and I'm feeling ... aroused?`)
            narrative(`I'm losing control of my body - wait, where is <Actor.name> leading me to? We're leaving the bar ...`)
            narrative(`A while later ...`)
            scene.setBackground("home")
            narrative(`Why am I in this disgusting hotel room? Oh no, that drink was spiked!`)
            Actor.dialogue(`You stupid <Player.idiots_or_bitches> never learn. Show you some charm and you all drink the first thing given to you.`, `Evil`)
            Actor.dialogue(`Now, let us have some fun, because you're gonna forget all about this in the morning!`, `Flirty`)
            narrative(`Part of my mind still wanted to resist but it's too weak compared to the strong drug in my system.`)
            if (Actor.isMale()) {
                scene.filter("Aggressive")
            } else {
                scene.filter("AggressiveFM")
            }
            scene.talkNonConsensual()
            scene.sexNoAffair(Actor, Player)
            Player.mood = 0
            narrative(`I was barely conscious while <Actor.name> was raping me but at one point, I did notice that <Actor.he_or_she> was filming the whole thing ...`)
            Actor.hide()
            narrative(`I woke up the next morning. Of course, <Actor.name> was long gone ...`)
            narrative(`There's a new message from <Actor.him_or_her> on my phone! <Actor.He_or_She> still had the <Actor.balls_or_galls> to text me after what happened?`)
            narrative(`It's a PornHub link ...`)
            narrative(`Oh no ... <Actor.name> filmed everything and put it everywhere on the internet as porn ...`)
            narrative(`Even though I was a rape victim, an even bigger punishment is that my life is basically over now that all my intimates are out there for everyone to see ...`)
            narrative(`For some reason, I couldn't help but notice that the videos were getting a huge number of views. I ended up scrolling down to the comments, all of them are asking who the porn <Player.actor_or_actress> is cause they find <Player.him_or_her> so hot.`)
            narrative(`They are referring to me of course ...`)
            narrative(`Trying to take down the video would be futile. Once something is on the internet, it's there forever ...`)
            narrative(`Maybe I could make the most out of this terrible situation ...`)
            narrative(`Now that this video is out there, all my career paths are basically over ...`)
            narrative(`Except one ...`)
            option([
                {text: `Become a pornstar`},
                {text: `No way`},
            ])
            if (0) {
                narrative(`Now that it comes to this, I don't have any other choice ...`)
                narrative(`At least the video was very popular so I should have good demand as a pornstar and can make a living that way ...`)
                Player.pornfame += 5
            }
        } else {
            narrative(`You can never be too careful nowadays. I'd better not accept a drink from someone I don't know that well.`)
        }
    })
    scene.timeout(1000, "reluctant_star")
})
module.exports = scene