// noinspection JSUnresolvedVariable
const {LPScene} = require('LifePlayjs')

const scene = new LPScene({name: 'rizean_testing_pairAnimations'}, (scene) => {
    const {Player, CurrentCompanion, random, option, choice, isModEnabled, start, paren, WHAT, narrative} = scene
    scene.what([])
    scene.where([])
    scene.when([0, 24])
    scene.who('none')
    scene.other(($IF) => {
    })

    scene.start(() => {
        // let Actor = scene.generatePersonTemporary(['fourties', 'bodybuilder'])
        let Actor = scene.generatePersonTemporary(['normal_F'])
        Actor.show()
        Actor.dress()


        narrative('Main')

        narrative('RubAss')
        Player.animatePair(Actor, 'RubAss') // no, but no t-pose
        narrative('RubAss 2')
        Actor.animatePair(Player, 'RubAss') // no, but no t-pose
        narrative('Piledriver')
        Player.animatePair(Actor, 'Piledriver') // works - dominate actor
        narrative('Piledriver 2')
        Actor.animatePair(Player, 'Piledriver') // works - dominate actor
        narrative('ProneBone')
        Player.animatePair(Actor, 'ProneBone') // works/tpose
        narrative('ProneBone 2')
        Actor.animatePair(Player, 'ProneBone') // works/tpose

        narrative('Doggy')
        Player.animatePair(Actor, 'Doggy') // works - dominate actor
        narrative('Doggy 2')
        Actor.animatePair(Player, 'Doggy') // works/tpose - dominate actor

        narrative('Cowgirl')
        Player.animatePair(Actor, 'Cowgirl') // works - some times - dominate actor
        narrative('Cowgirl 2')
        Actor.animatePair(Player, 'Cowgirl') // works - some times - dominate actor

        narrative('ReverseCowgirl')
        Player.animatePair(Actor, 'ReverseCowgirl') // works- dominate actor
        narrative('ReverseCowgirl 2')
        Actor.animatePair(Player, 'ReverseCowgirl') // works- dominate actor

        narrative('Sidefuck')
        Player.animatePair(Actor, 'Sidefuck') // tpose - works with FF
        narrative('Sidefuck 2')
        Actor.animatePair(Player, 'Sidefuck') // tpose  - works with FF

        narrative('Tribadism')
        Player.animatePair(Actor, 'Tribadism') // no
        narrative('Tribadism 2')
        Actor.animatePair(Player, 'Tribadism') // no

        narrative('69')
        Player.animatePair(Actor, '69') // works- dominate actor - no works FF
        narrative('69 2')
        Actor.animatePair(Player, '69') // works- dominate actor  - no works FF

        narrative('Deepthroat')
        Player.animatePair(Actor, 'Deepthroat') // tpose - no works FF
        narrative('Deepthroat 2')
        Actor.animatePair(Player, 'Deepthroat') // calling actor - no works FF

        narrative('Blowjob')
        Player.animatePair(Actor, 'Blowjob') //works- dominate actor
        narrative('Blowjob 2')
        Actor.animatePair(Player, 'Blowjob') //works- dominate actor

        narrative('Handjob')
        Player.animatePair(Actor, 'Handjob') //works- dominate actor
        narrative('Handjob 2')
        Actor.animatePair(Player, 'Handjob') //works- dominate actor

        narrative('Fingering')
        Player.animatePair(Actor, 'Fingering') //works- dominate actor - no works FF
        narrative('Fingering 2')
        Actor.animatePair(Player, 'Fingering') //works- dominate actor - no works FF

        narrative('Licking')
        Player.animatePair(Actor, 'Licking') // works-calling actor?
        narrative('Licking 2')
        Actor.animatePair(Player, 'Licking') // works-calling actor?

        narrative('NonSexual - more like dominance') // FF is frisking
        Player.animatePair(Actor, 'NonSexual') // works- but seems like calling actor some times and other times dominate actor
        narrative('NonSexual 2 - more like dominance')
        Actor.animatePair(Player, 'NonSexual') // works- but seems like calling actor some times and other times dominate actor

        narrative('----- Others -----')

        narrative('Standing')
        Player.animatePair(Actor, 'Standing') // sort of works? - some time t poses
        narrative('Standing 2')
        Actor.animatePair(Player, 'Standing') // sort of works? - some time t poses
        narrative('Sitting')
        Player.animatePair(Actor, 'Sitting') // no
        narrative('Sitting 2')
        Actor.animatePair(Player, 'Sitting') // no

        narrative('Aggressive')
        Player.animatePair(Actor, 'Aggressive') // works/tpose
        narrative('Aggressive 2')
        Actor.animatePair(Player, 'Aggressive') // works good


        narrative('Hugging')
        Player.animatePair(Actor, 'Hugging') // good one - works- dominate actor  - no works FF
        narrative('Hugging 2')
        Actor.animatePair(Player, 'Hugging') // good one - works- dominate actor  - no works FF

        narrative('Kissing')
        Player.animatePair(Actor, 'Kissing') // good one - not always kissing
        narrative('Kissing 2')
        Actor.animatePair(Player, 'Kissing') // good one  - not always kissing


        narrative('anal')
        Player.animatePair(Actor, 'anal') // work/tpose
        narrative('anal 2')
        Actor.animatePair(Player, 'anal') // work/tpose


        narrative('Vaginal')
        Player.animatePair(Actor, 'Vaginal') // had wall sex animation once - dominate actor
        narrative('Vaginal 2')
        Actor.animatePair(Player, 'Vaginal') // had wall sex animation once - dominate actor



        narrative('Missionary')
        Player.animatePair(Actor, 'Missionary') //works- dominate actor
        narrative('Missionary 2')
        Actor.animatePair(Player, 'Missionary') //works- dominate actor

        narrative('RubPussy')
        Player.animatePair(Actor, 'RubPussy') // really good one //works- dominate actor
        narrative('RubPussy 2')
        Actor.animatePair(Player, 'RubPussy') // works- dominate actor


        narrative('Foreplay')
        Player.animatePair(Actor, 'Foreplay') // works- dominate actor
        narrative('Foreplay 2')
        Actor.animatePair(Player, 'Foreplay') // works- dominate actor

        narrative('Couple')
        Player.animatePair(Actor, 'Couple') // maybe good works- dominate actor   - no works FF
        narrative('Couple 2')
        Actor.animatePair(Player, 'Couple') // works- dominate actor   - no works FF

        narrative('Spooning')
        Player.animatePair(Actor, 'Spooning') // works- dominate actor
        narrative('Spooning 2')
        Actor.animatePair(Player, 'Spooning') // works- dominate actor

        narrative('Vibrator')
        Player.animatePair(Actor, 'Vibrator') // works- dominate actor - but no vibrator
        narrative('Vibrator 2')
        Actor.animatePair(Player, 'Vibrator') // works- dominate actor - but no vibrator

        narrative("---")
        narrative("Done")
    })

})
module.exports = scene
