// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_NonConsensual\Scenes\ag_friendzone_rape.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'ag_friendzone_rape'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all"])
    scene.where(["all"])
    scene.when([0, 24])
    let Actor = Player.getCompanion()
    scene.who(($IF) => {
        Actor = Player.getCompanion()
        $IF(!Actor.isRelative() && !Actor.isDating())
    })
    scene.other(($IF) => {
        $IF(Player.isInterestedIn("Actor") && Actor.attractionToPlayer < 10 && random(70, 300) < Actor.attractiveness)
    })


    scene.start(() => {
        narrative(`<Actor.name> is smoking hot ... What a shame that <Actor.he_or_she> doesn't seem to be into me at all ... I feel stuck in the friend zone.`)
        option([
            {text: `Other fish in the ocean`},
            {text: `I bet I can change <Actor.his_or_her> heart`},
        ])
        if (0) {
            narrative(`Oh well, not everyone can be attracted to you I suppose. There are a million other <Actor.guys_or_girls> out there for me.`)
        } else {
            narrative(`<Actor.He_or_She> might not be interested in me for now. But <Actor.he_or_she> will be mine eventually.`)
            narrative(`Now, how am I supposed to do that?`)
            option([
                {text: `Get <Actor.him_or_her> drunk`},
                {text: `Be a nice <Player.gentleman_or_lady>`},
            ])
            if (0) {
                narrative(`Some good old alcohol should do the trick in bringing <Actor.him_or_her> to <Actor.his_or_her> true attraction to me.`)
                scene.setBackground("home")
                Player.moveTo("Home")
                Actor.dialogue(`Thank you for inviting me into your apartment and for the drinks, but I think I'd gotta leave now. Would you mind calling me a taxi? I'm so drunk ...`, `Pain`)
                option([
                    {text: `Call the cab for <Actor.him_or_her>`},
                    {text: `Grab <Actor.him_or_her> and start making out`},
                ])
                if (0) {
                    Player.dialogue(`Sure, I'll get you a cab right away. Should be here in ten minutes.`, `Happy`)
                    Actor.rapportwithplayer += random(0, 2)
                } else {
                    narrative(`<Actor.He_or_She> is out of it. It's time for my master plan.`)
                    Player.animatePair(Player, Actor, "Kissing")
                    Player.dialogue(`...`, `Kiss`)
                    Actor.dialogue(`<Player.name>! What the hell are you doing? You know I'm not into you that way! I only like you as a friend.`, `Angry`)
                    Actor.rapportwithplayer -= random(0, 10)
                    Actor.dialogue(`I'm leaving! I can't believe you just forced a kiss on me like that!`, `Angry`)
                    option([
                        {text: `Apologize`},
                        {text: `Force myself upon <Actor.him_or_her>`, condition: Player.masochist < 0},
                    ])
                    if (0) {
                        Player.dialogue(`I'm sorry ... It was a moment of passion. I didn't know what I was doing ...`, `Embarrassed`)
                    } else {
                        Player.dialogue(`Nobody keeps rejecting me like that! Let's see if I can't change your mind after a hard pounding!`, `Furious`)
                        Actor.dialogue(`Get your hands off me! Have you gone crazy? Help!`, `Angry`)
                        if (Actor.martial * 0.5 > Player.martial) {
                            narrative(`Unfortunately for me, even drunk, <Actor.name> was more than a handful for me to subdue. After a brief struggle, <Actor.he_or_she> managed to get away from me and escaped my apartment.`)
                        } else {
                            narrative(`Affected by the alcohol, <Actor.name> never stood a chance and I managed to overcome <Actor.his_or_her> struggles easily. Soon, I was ripping <Actor.his_or_her> clothes off and proceeded to force myself upon <Actor.him_or_her>.`)
                            Actor.dialogue(`No! Please stop ... I trusted you ... Somebody help ...`, `Crying`)
                            scene.filter("Aggressive")
                            scene.talkNonConsensual()
                            scene.sexNoAffair(Player, Actor)
                            Actor.hide()
                        }


                        Actor.rapportwithplayer = -100
                        Player.blockContact(Actor)
                        if (random(0, 100) < 85) {
                            narrative(`I was lucky to avoid jail time as <Actor.name> never reported me to the police, perhaps thinking about our past friendship, but <Actor.he_or_she> blocked me and never wanted to see me again. One thing for sure: I did nothing to make <Actor.name> fall in love with me.`)
                        } else {
                            narrative(`Sure enough, the cops promptly arrived at the SCENE.`)
                            narrative(`'Hands in the air, now!'`)
                            option([
                                {text: `Run`},
                                {text: `Surrender`},
                            ])
                            if (0) {
                                if (random(0, 100) < Player.fitness) {
                                    narrative(`I managed to lose the cops. Phew, that was close.`)
                                } else {
                                    Player.dialogue(`You're not taking me alive.`, `Angry`)
                                    narrative(`Pow!`)
                                    Player.hide()
                                    narrative(`A cop fired his gun. It was a perfect shot ...`)
                                    scene.followUp("death")
                                }
                            } else {
                                Player.animate("fightlost")
                                Player.dialogue(`Please, don't shoot!`, `Scared`)
                                narrative(`I put my hands up and surrendered to the overwhelming number of cops.`)
                                Player.sentence = 1825
                                scene.followUp("imprisoned")
                            }
                        }
                    }
                }
                Player.endDate()
            } else {
                narrative(`I'll just continue hanging out with <Actor.him_or_her> and treating <Actor.him_or_her> well. Eventually, <Actor.he_or_she> will surely fall for my charm.`)
            }
        }
    })
    scene.timeout(500, "ag_friendzone_rape")
})
module.exports = scene