// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\modeling\photoshoot_lingerie.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'photoshoot_lingerie'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, choice} = scene

    scene.what(["all"])
    scene.where(["all"," -work"])
    scene.when([8, 22])
    scene.who("none")
    scene.other(($IF) => {
        $IF(random(1, 150) <  Player.modelfame  && random(30, 100) <  Player.fitness)
    })


    scene.start(() => {
let Actor = scene.generatePersonTemporary([])


            narrative(`A lingerie brand wants to book me to model for one of their new collections ...`)
            option([
                {text: `Turn down the offer`},
                {text: `Rip them off`},
                {text: `Offer a fair price`},
                {text: `Give them a bargain`},
                    ])
            if (0) {
                    Player.dialogue(`Sorry, but I'm not comfortable modeling lingerie ...`, `Sad`)
            } else if (3 || random(0, 100) < choice* Player.modelfame) {
                    narrative(`The company accepted my demands.`)
                    scene.setBackground("modeling")
                    narrative(`The day of the shoot ...`)
                    Actor = scene.generatePersonTemporary([])
                    Actor.dress()
                    Actor.show(2)
                    Actor.dialogue(`Here, put this on.`, `Happy`)


                    Player.strip()
                    Player.dressExcept("Outerwear", "Top", "Bottom", "Foot", "Headwear", "Eyewear")
                    Actor.dialogue(`That's it ... perfect.`, `Happy`)
                    Player.strip()
                    Player.dressExcept("Outerwear", "Top", "Bottom", "Foot", "Headwear", "Eyewear")
                    Actor.dialogue(`Put more emotions into it ... there you go.`, `Happy`)
                    Player.strip()
                    Player.dressExcept("Outerwear", "Top", "Bottom", "Foot", "Headwear", "Eyewear")
                    Actor.dialogue(`A bit more to the left ... that's perfect.`, `Happy`)
                    Player.strip()
                    Player.dressExcept("Outerwear", "Top", "Bottom", "Foot", "Headwear", "Eyewear")
                    Actor.dialogue(`Yup, that's how you do it. This is going to look so great!`, `Happy`)


                     Player.money  += random(250, 1000)/choice
                     Player.modelfame  += 0.25
                     Player.perversion  += 0.25


                    narrative(`Aside from my agreed pay, they also offered to let me keep the lingerie I did the photo shoot in.`)
                    option([
                        {text: `Keep the lingerie also`},
                        {text: `Just take the money`},
                                    ])
                    if (1) {
                            Player.removeAddedClothes()
                    }


                    if (Actor.isInterestedIn(Player) && Actor.perversion > 35) {
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
            } else {
                    narrative(`Unfortunately, the lingerie designer considered my rate too high and hired another model for the job instead.`)
            }


    })
            scene.timeout(48, "photoshoot_lingerie")
})
module.exports = scene