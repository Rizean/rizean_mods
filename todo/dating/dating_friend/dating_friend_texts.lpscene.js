// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\dating\dating_friend\dating_friend_texts.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'dating_friend_texts'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all", " -sleep", " -nap", " -sleep_hotel", " -nap_hotel"])
    scene.where(["all"])
    scene.when([0, 24])
    let Dating = scene.getSpecific("Dating")
    let Actor = scene.getSpecific("Dating_Friend")
    scene.who(($IF) => {
        Dating = scene.getSpecific("Dating")
        Actor = scene.getSpecific("Dating_Friend")
        $IF(Actor.isInterestedIn(Player) && Actor.attractionToPlayer + Actor.perversion > random(75, 500))
    })
    scene.other("none")


    scene.start(() => {
        narrative(`I received a text massasge, it's from <Actor.name>, my <Dating.boyfriend_or_girlfriend>'s friend. Hmm, what would <Actor.he_or_she> text me for? I barely know the <Actor.guy_or_girl>.`)
        scene.secondScreen(Actor)
        Actor.show()
        Actor.dialogue(`How are you, <Player.handsome_or_beautiful>. Thinking about you ...`)
        narrative(`What a shameless flirter! And a terrible friend ...`)
        option([
            {text: `Ignore`},
            {text: `Flirt back`},
            {text: `Tell <Dating.name>`},
        ])
        if (0) {
            narrative(`Whatever! I don't want to start any drama. I'll just ignore <Actor.him_or_her> ...`)
            Player.masochist += random(0, 1)
            Actor.attractionToPlayer -= random(0, 2)
        } else if (1) {
            narrative(`I won't lie: I'm a bit flattered by the attention. A few flirty texts back won't hurt. It doesn't exactly count as cheating.`)
            Player.perversion += random(0, 0.5)
            Actor.attractionToPlayer += random(0, 5)
        } else {
            narrative(`What a shameless pervert! How could <Actor.he_or_she> flirt with <Actor.his_or_her> friend's <Player.man_or_woman>? I need to show <Dating.name> what a horrible 'friend' <Dating.he_or_she> has.`)
            scene.secondScreen()
            Dating.dress()
            Dating.show(2)
            Dating.dialogue(`Unbelievable! How blind was I to ever consider that <Actor.asshole_or_bitch> a friend! Don't worry, babe, that so-called friendship is now over for good.`, `Angry`)
            Actor.removeDatingFriend()
            Actor.rapportwithplayer -= 50
            Actor.attractionToPlayer -= 50
            Dating.attractionToPlayer += random(0, 3)
        }


    })
    scene.timeout(96, "dating_friend_texts")
})
module.exports = scene