// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_NonConsensual\Scenes\vi_datingfriend_rape.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'vi_datingfriend_rape'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all", " -sleep", " -nap"])
    scene.where(["home"])
    scene.when([0, 24])
    let Actor2 = scene.getSpecific("Dating")
    let Actor = scene.getSpecific("Dating_Friend")
    scene.who(($IF) => {
        Actor2 = scene.getSpecific("Dating")
        Actor = scene.getSpecific("Dating_Friend")
        $IF(Actor.isInterestedIn(Player) && random(50, 300) < Actor.attractionToPlayer && Actor.masochist < -50 && Actor.perversion > 50)
    })
    scene.other(($IF) => {
        $IF(!Player.isWithCompanion() && Player.isAtDatingHome())
    })


    scene.start(() => {
        narrative(`There's someone at the door.`)
        Actor.dress()
        Actor.show(2)
        narrative(`It's <Actor.name>, one of my <Actor2.boyfriend_or_girlfriend>'s best friends.`)
        Actor.dialogue(`Oh hey there, <Player.name>. Is <Actor2.name> home?`, `Happy`)
        Player.dialogue(`What a shame. <Actor2.He_or_She> just headed out and won't be back until tomorrow.`, `Sad`)
        Actor.dialogue(`Oh that's unfortunate. Can I come in for a drink at least? It was a long journey to get here for nothing.`, `Sad`)
        narrative(`Did <Actor.name> just invite <Actor.himself_or_herself> into our apartment? I must admit: I never liked <Actor.name>. <Actor.He_or_She> always tried to flirt with me behind <Actor2.name>'s back ...`)
        option([
            {text: `Find an excuse`},
            {text: `Invite <Actor.him_or_her> in`},
        ])
        if (0) {
            Player.dialogue(`I wish I could let you stay. But I'm preparing to head out soon too ...`, `Sad`)
        } else {
            narrative(`I don't want to be rude to one of my <Actor2.boyfriend_or_girlfriend>'s best friends. `)
            option([
                {text: `Serve alcohol`},
                {text: `Just make some tea`},
            ])
            if (0) {
                narrative(`Oh well, if I'm going to get stuck with my <Actor2.boyfriend_or_girlfriend>'s unlikable friend, maybe some alcohol would help me tolerate the conversation.`)
                narrative(`A while later ...`)
                narrative(`Damn it, the conversation was so awkward that I had nothing to do but drink. I'm now feeling quite tipsy.`)
                Player.animatePair(Player, Actor, "Kissing")
                narrative(`All of a sudden, <Actor.name> grabbed me ...`)
                Actor.dialogue(`...`, `Kiss`)
                Player.dialogue(`<Actor.name>! What the hell are you doing? I have a <Actor2.boyfriend_or_girlfriend>! And worse, <Actor2.he_or_she> is your best friend!`, `Angry`)
                Actor.rapportwithplayer -= random(0, 10)
                Player.dialogue(`Please leave, right away! I can't believe you just forced a kiss on me like that!`, `Angry`)


                if (random(-100, -50) < Player.masochist) {
                    Actor.dialogue(`I'm sorry ... It was a moment of passion. I didn't know what I was doing ... Please don't tell <Actor2.name>.`, `Embarrassed`)
                } else {
                    Actor.dialogue(`Nobody rejects me like that! Let's see if you can remain so loyal to your <Actor2.boyfriend_or_girlfriend> after a hard pounding!`, `Furious`)
                    Player.dialogue(`Get your hands off me! Have you gone crazy? Help!`, `Angry`)
                    Actor.dialogue(`Listen and stop screaming! You'd better be a good <Player.boy_or_girl> for me, or I'll tell <Actor2.name> that you tried to seduce me. How would you like your relationship in ruin? We both know that <Actor2.name> is going to trust me over you. We've been best friends since well before <Actor2.he_or_she> even met you.`, `Evil`)
                    narrative(`Maybe my decision making was affected by the alcohol. Or maybe, my relationship just means that much to me. Either way, my mind seemed to let go after what <Actor.he_or_she> said and I stopped struggling. Soon, <Actor.he_or_she> was ripping my clothes off and proceeded to force <Actor.himself_or_herself> upon me.`)
                    Player.dialogue(`No! Please stop ... What if <Actor2.name> comes home to find us like this ...`, `Crying`)
                    scene.filter("Aggressive")
                    scene.talkNonConsensual()
                    scene.sexNoAffair(Actor, Player)
                    Actor.hide()


                    Actor.rapportwithplayer = -100
                    Player.blockContact(Actor)
                    narrative(`I never had the courage to report <Actor.name> to the police or even my <Actor2.boyfriend_or_girlfriend>, but I did blocked <Actor2.his_or_her> phone and start avoiding speaking to <Actor2.him_or_her> since that night, to <Actor2.name>'s confusion.`)
                }
            } else {
                narrative(`Let's just make the <Actor.guy_or_girl> some tea so that <Actor.he_or_she> can be on <Actor.his_or_her> way soon. Don't want <Actor.him_or_her> lingering around or trying anything funny.`)
            }
        }
    })
    scene.timeout(500, "vi_datingfriend_rape")
})
module.exports = scene