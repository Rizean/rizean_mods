// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\misc\expensive_shopping.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'expensive_shopping'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, choice} = scene

    scene.what(["all", " -go_to_the_bathroom"])
    scene.where(["clothes", " department_store", " shoes", " bag", " cosmestics"])
    scene.when([0, 24])
    scene.who("none")
    scene.other(($IF) => {
        $IF(Player.jobexperience < random(0, 50) && Player.attractiveness > random(70, 100))
    })


    scene.start(() => {
        let Actor = scene.generatePersonTemporary([])


        Player.dialogue(`Damn, that looks so good ... but it's too expensive.`, `Sad`)
        narrative(`I won't lie: my salary isn't enough for me to afford much luxury in life and sometimes I have no choice but sigh at something so appealing, yet so unaffordable.`)
        Actor = scene.generatePersonTemporary([])
        while (!Actor.isInterestedIn(Player)) {
            Actor = scene.generatePersonTemporary([])
        }
        Actor.makePermanent()
        Actor.dress()
        Actor.show(2)


        Actor.dialogue(`Hey there, I'm sorry if I'm being too forward, but you looked like you wanted that so much. I could buy it for you, as an introduction gift.`, `Happy`)
        option([
            {text: `Yes`},
            {text: `No`},
        ])
        if (0) {
            Player.dialogue(`Really? You would do that for me? Why, though? I don't even know you.`, `Excited`)
            Actor.dialogue(`That price tag is really not much money for me at all and I would love nothing more than to be able to spoil a <Player.handsome_or_beautiful> <Player.prince_or_princess> like you ...`, `Happy`)
            narrative(`And just like that, <Actor.he_or_she> went ahead to buy me what I wanted, seemingly unmoved by a small fortune that thing cost. <Actor.He_or_She> then handed me <Actor.his_or_her> introduction gift, introduced <Actor.himself_or_herself> as <Actor.name>. We had a small chat before <Actor.he_or_she> asked for my number. Obviously, having received such an expensive gift, I had to say yes.`)
            Player.exchangeContact(Actor)
            Player.masochist += random(0, 0.5)
        } else {
            narrative(`Now that's really really weird. Something is fishy here, there's no free lunch after all.`)
            narrative(`I decided to ignore the stranger's request and move on.`)
            Player.masochist -= random(0, 0.5)
        }


    })
    scene.timeout(200, "expensive_shopping")
})
module.exports = scene