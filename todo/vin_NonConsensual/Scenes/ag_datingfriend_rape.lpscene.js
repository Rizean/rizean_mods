// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_NonConsensual\Scenes\ag_datingfriend_rape.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'ag_datingfriend_rape'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all", " -sleep", " -nap"])
    scene.where(["home"])
    scene.when([0, 24])
    let Actor2 = scene.getSpecific("Dating")
    let Actor = scene.getSpecific("Dating_Friend")
    scene.who(($IF) => {
        Actor2 = scene.getSpecific("Dating")
        Actor = scene.getSpecific("Dating_Friend")
        $IF(Actor.attractionToPlayer < 20 && Player.isInterestedIn(Actor) && random(70, 300) < Actor.attractiveness && Player.isAtDatingHome())
    })
    scene.other("none")


    scene.start(() => {
        narrative(`There's someone at the door.`)
        Actor.dress()
        Actor.show(2)
        narrative(`It's <Actor.name>, one of my <Actor2.boyfriend_or_girlfriend>'s best friends.`)
        Actor.dialogue(`Oh hey there, <Player.name>. Is <Actor2.name> home?`, `Happy`)
        Player.dialogue(`What a shame. <Actor2.He_or_She> just headed out and won't be back until tomorrow.`, `Sad`)
        Actor.dialogue(`Oh that's unfortunate. Alright then, I'll come back tomorrow.`, `Sad`)
        narrative(`<Actor.name> is smoking hot ... What a shame that <Actor.he_or_she> is so loyal to <Actor2.name> as a friend that <Actor.he_or_she> seems to pay zero romantic attention to me ...`)
        option([
            {text: `Bless their friendship`},
            {text: `I bet I can bed <Actor.him_or_her>`},
        ])
        if (0) {
            narrative(`I'd got to respect that. I'm glad my <Actor2.boyfriend_or_girlfriend> has such good friends.`)
        } else {
            narrative(`<Actor.He_or_She> might try to stay loyal to <Actor.his_or_her> friend, but deep inside, I just knew <Actor.he_or_she> gets wet whenever <Actor.he_or_she> thinks of me. <Actor.He_or_She> just wouldn't admit it.`)
            narrative(`Now, should I try to move a move?`)
            option([
                {text: `Get <Actor.him_or_her> drunk`},
                {text: `Go watch some bestie porn`},
            ])
            if (0) {
                narrative(`Some good old alcohol should do the trick in bringing <Actor.him_or_her> to <Actor.his_or_her> true attraction to me.`)
                Player.dialogue(`Hang on. Are you sure you don't want a drink? I feel bad that you had to come all the way here yet <Actor2.name> isn't around.`, `Happy`)
                Actor.dialogue(`I shouldn't ... Fine then, just one drink, okay?`, `Happy`)
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
                    Player.karma -= 20
                    Player.animatePair(Player, Actor, "Kissing")
                    Player.dialogue(`...`, `Kiss`)
                    Actor.dialogue(`<Player.name>! What the hell are you doing? You have a <Actor2.boyfriend_or_girlfriend>! And worse, <Actor2.he_or_she> is my best friend!`, `Angry`)
                    Actor.rapportwithplayer -= random(0, 10)
                    Actor.dialogue(`I'm leaving! I can't believe you just forced a kiss on me like that!`, `Angry`)
                    option([
                        {text: `Apologize`},
                        {text: `Blackmail <Actor.him_or_her>`, condition: Player.masochist < 0},
                    ])
                    if (0) {
                        Player.dialogue(`I'm sorry ... It was a moment of passion. I didn't know what I was doing ... Please don't tell <Actor2.name>.`, `Embarrassed`)
                    } else {
                        Player.dialogue(`Nobody rejects me like that! Let's see if you can remain so loyal to your friend after a hard pounding!`, `Furious`)
                        Actor.dialogue(`Get your hands off me! Have you gone crazy? Help!`, `Angry`)
                        Player.dialogue(`Listen and stop screaming! You'd better be a good <Actor.boy_or_girl> for me, or I'll tell <Actor2.name> that you tried to seduce me. How would you like your friendship in ruin? We both know that <Actor2.name> is going to trust <Actor2.his_or_her> own <Player.boyfriend_or_girlfriend> over a friend like you.`, `Evil`)
                        narrative(`Maybe <Actor.name>'s decision making was affected by the alcohol. Or maybe, that friendship with <Actor2.name> just means that much to <Actor.him_or_her>. Either way, <Actor.he_or_she> seemed to let go after what I said. Soon, I was ripping <Actor.his_or_her> clothes off and proceeded to force myself upon <Actor.him_or_her>.`)
                        Actor.dialogue(`No! Please stop ... What if <Actor2.name> comes home to find us like this ...`, `Crying`)
                        scene.filter("Aggressive")
                        scene.talkNonConsensual()
                        scene.sexNoAffair(Player, Actor)
                        Actor.hide()


                        Actor.rapportwithplayer = -100
                        Player.blockContact(Actor)


                        if (random(0, 100) < 20) {
                            scene.setBackground("home")
                            narrative(`Sure enough, the cops promptly arrived at my home a few days later to arrest me.`)
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
                        } else {
                            narrative(`<Actor.name> was an idiot. <Actor.He_or_She> never reported me to the police or even my <Actor2.boyfriend_or_girlfriend>, but <Actor.he_or_she> blocked my phone and avoided speaking to me ever since, to <Actor2.name>'s confusion.`)
                        }
                    }
                }
            } else {
                narrative(`It might not be a good idea to actually fuck your <Actor2.boyfriend_or_girlfriend>'s best friend, but no harm fantasizing about it. In fact, plenty of porn videos have this plot - I'll just go watch some while fantasizing about <Actor.name>.`)
            }
        }
    })
    scene.timeout(500, "ag_datingfriend_rape")
})
module.exports = scene