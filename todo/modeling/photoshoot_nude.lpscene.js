// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\modeling\photoshoot_nude.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'photoshoot_nude'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, choice} = scene

    scene.what(["all"])
    scene.where(["all"," -work"])
    scene.when([8, 22])
    scene.who("none")
    scene.other(($IF) => {
        $IF(random(1, 200) <  Player.modelfame)
    })


    scene.start(() => {
let Actor = scene.generatePersonTemporary([])


            narrative(`A <Player.women_or_men>'s magazine wants to book me for a nude photoshoot ...`)
            option([
                {text: `Turn down the offer`},
                {text: `Rip them off`},
                {text: `Offer a fair price`},
                {text: `Give them a bargain`},
                    ])
            if (0) {
                    Player.dialogue(`Sorry, but I'm not comfortable modeling nude ...`, `Sad`)
            } else if (3 || random(0, 100) < choice* Player.modelfame) {
                    narrative(`The company accepted my demands.`)
                    scene.setBackground("modeling")
                    narrative(`The day of the shoot ...`)
                    Actor = scene.generatePersonTemporary([])
                    Actor.dress()
                    Actor.show(2)


                    Player.strip()
                    Actor.dialogue(`That's it ... perfect.`, `Happy`)
                    Actor.dialogue(`Put more emotions into it ... there you go.`, `Happy`)
                    Actor.dialogue(`A bit more to the left ... that's perfect.`, `Happy`)
                    Actor.dialogue(`Yup, that's how you do it. This is going to look so great!`, `Happy`)


                     Player.money  += random(350, 1200)/choice
                     Player.modelfame  += 0.25
                     Player.perversion  += 0.5


                    if (Actor.perversion > 60 &&  Player.pornfame  == 0) {
                            Actor.dialogue(`You know ... with a body like that, I'm sure you could make a killing in the porn industry.`, `Flirty`)
                            Actor.dialogue(`One of my friends is a porn director. I can help you get into that world if you want?`, `Flirty`)
                            option([
                                {text: `Become a pornstar`},
                                {text: `No way`},
                                                    ])
                            if (0) {
                                    Player.dialogue(`I guess ... since I'm already doing nude photoshoots ... might as well go further down the rabbit hole.`, `Happy`)
                                    Actor.dialogue(`Excelent, I'll introduce you to my friend.`, `Happy`)
                                     Player.pornfame  = 0.25* Player.modelfame
                            } else {
                                    Player.dialogue(`Who do you take me for? I'm a serious model, not some <Player.gigolo_or_whore>.`, `Angry`)
                                    Actor.dialogue(`Don't get upset. It was just a suggestion. I thought since you were already doing nudes, you might be interested.`, `Sarcastic`)
                            }
                    } else {
                            if (Actor.isInterestedIn(Player) && Actor.perversion > 50) {
                                    narrative(`Throughout the shoot today, I can't help but notice how flirty the photographer has been.`)
                                    Actor.dialogue(`You know, to get far in this business, only look is not enough. We have to have a certain 'friendly' attitude.`, `Flirty`)
                                    Player.animatePair(Player, Actor, "Kissing")
                                    Actor.dialogue(`Mwah`, `Kiss`)
                                    Actor.dialogue(`You have great skin ... Oh look, where's my manner? I just couldn't help myself but touching you.`, `Flirty`)
                                    narrative(`Touching is an understatement, this perverted photographer was basically groping me.`)
                                    option([
                                        {text: `Shut <Actor.him_or_her> down`},
                                        {text: `Flirt back`},
                                        {text: `Kiss <Actor.him_or_her>`},
                                                                    ])
                                    if (0) {
                                            Player.dialogue(`Sorry, I'm not a 'casting couch' type of <Player.guy_or_girl>. Why don't you find yourself some other <Player.gigolo_or_whore>?`, `Angry`)
                                            Actor.dialogue(`No need to get so serious! With that attitude, you're going nowhere!`, `Angry`)
                                             Player.modelfame  -= 1
                                    } else if (1) {
                                            Player.dialogue(`You're not bad looking yourself. I'm surprised you're always behind the camera because you look like you could be in front of it.`, `Flirty`)
                                            narrative(`I guess some harmless flirting for career advancement is a good deal.`)
                                             Player.modelfame  += 1
                                    } else {
                                            Player.dialogue(`Is this the sort of friendly attitude you're taking about?`, `Flirty`)
                                            narrative(`What's the harm in a kiss anyway? Especially if it gets me ahead of the competition.`)
                                            scene.filter("NonSexual")
                                            scene.sexNoAffair(Actor, Player)
                                             Player.modelfame  += 3
                                    }
                            }
                    }
            } else {
                    narrative(`Unfortunately, the magazine editor considered my rate too high and hired another model for the job instead.`)
            }


    })
            scene.timeout(48, "photoshoot_nude")
})
module.exports = scene