// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\dating\ex\come_across_ex_dating.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'come_across_ex_dating'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all", " -sleep_hotel", " -nap_hotel", " -go_to_the_bathroom"])
    scene.where(["all", " -home", " -work"])
    scene.when([0, 24])
    let Actor = scene.getSpecific("ExDating")
    scene.who(($IF) => {
        Actor = scene.getSpecific("ExDating")
        $IF(!Actor.isAsexual() && Actor.masochist < 0)
    })
    scene.other("none")


    scene.start(() => {
        let NewDating = Actor.getRelatedPerson("Dating", "Spouses")
        narrative(`I was just walking when I spotted a familiar figure hand in hand with someone else.`)
        Actor.dress()
        Actor.show(2)
        NewDating = Actor.getRelatedPerson("Dating", "Spouses")
        if (!NewDating.isValid()) {
            NewDating = scene.generatePersonTemporary([])
            while (!Actor.isInterestedIn(NewDating)) {
                NewDating = scene.generatePersonTemporary([])
            }
            NewDating.makePermanent()
            scene.addNpcRelationship("Dating", Actor, NewDating)
        }
        NewDating.dress()
        NewDating.show(3)
        narrative(`It's my ex <Actor.name>! <Actor.He_or_She> recognized me right away. To rub salt into the injury, <Actor.he_or_she> suddenly leaned over and kissed the <NewDating.man_or_woman> <Actor.he_or_she> was with. It must be <Actor.his_or_her> new <NewDating.boyfriend_or_girlfriend>.`)
        scene.option([
            {text: `Ignore`, condition: Player.masochist < 50},
            {text: `Cry`},
        ])
        if (0) {
            narrative(`Who cares? The new <NewDating.guy_or_girl> is ugly as hell! <Actor.name> certainly has had to lower <Actor.his_or_her> standards after me.`)
            narrative(`I ignored them and kept walking, as if I never recognized <Actor.name> at all.`)
            Player.masochist -= random(0, 2)
        } else {
            Player.dialogue(`...`, `Crying`)
            narrative(`I just couldn't hold back the tears. Seeing my ex with another <NewDating.man_or_woman> was too hurtful.`)
            Player.masochist += random(0, 2)
        }


    })
    scene.timeout(1500, "come_across_ex_dating")
})
module.exports = scene