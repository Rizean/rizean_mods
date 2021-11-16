// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_NTR\scenes\prison_conjugal_cms.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'prison_conjugal_cms'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all"])
    scene.where(["prison"])
    scene.when([8, 22])
    let Actor = scene.getSpecific("Dating")
    scene.who(($IF) => {
        $IF(Actor = scene.getSpecific("Dating"))
    })
    scene.other(($IF) => {
        $IF(random(0, 100) < Player.masochist)
    })


    scene.start(() => {
        let Actor2 = scene.generatePersonTemporary(["athletic"])
        let Actor3 = scene.generatePersonTemporary([])
        narrative(`In prison, I'm only allowed the occasional conjugal visit from my <Actor.boyfriend_or_girlfriend> <Actor.name>.`)
        narrative(`<Actor.name> promised to visit me today. Why isn't <Actor.he_or_she> here yet?`)
        Player.hide()
        narrative(`Meanwhile, in another cell ...`)
        Actor.dress()
        Actor.show(2)


        if (Player.isMale()) {
            Actor2 = scene.generatePersonTemporary(["athletic"])
        } else {
            Actor2 = scene.generatePersonTemporary(["athletic_F"])
        }
        Actor2.randomizeFace()
        Actor2.randomizeHairs()
        Actor2.dress()
        Actor2.show()


        Actor2.dialogue(`Baby, I miss you! I'm so happy you visited. I can't wait for the day you can come home.`, `Happy`)
        Actor.dialogue(`What? Who are you? Why did they send me here? There must have been a mistake. I'm here for <Player.name> <Player.name_last>.`, `Surprised`)
        Actor.dialogue(`Excuse me! Guard! There's a mistake.`)
        Actor2.dialogue(`There's no mistake, I already bribed the guard to send you here instead ... Serves <Player.name> right for always bragging about how much action <Player.he_or_she> still gets even in jail.`, `Flirty`)
        Actor2.dialogue(`Why don't you give me some of that action instead?`, `Flirty`)
        Actor2.dialogue(`<Player.He_or_She>'s not going to know. Besides, think about it, if you don't let me fuck you, it will be a long time to go until the next conjugal visit ... Can you go that long without sex?`, `Flirty`)


        if (random(50, 100) < Actor.perversion - Actor.attractionToPlayer || Player.openRelationship()) {
            Actor.dialogue(`I guess you do have a point ...`)
            scene.sex(Actor2, Actor)
            Actor.attractionToPlayer -= random(0, 1)
            Player.masochist += 1


            if (random(0, 100) < 10) {
                Player.hide()
                Actor.show(2)
                Actor2.show()
                Actor3 = scene.generatePersonTemporary([])
                Actor3.dressUniform("Police")
                Actor3.show(3)
                Actor3.dialogue(`Having some fun there, I see?`, `Evil`)
                Actor3.dialogue(`You two got me quite turned on, I need to release now ... on <Player.name>'s <Actor.boyfriend_or_girlfriend>. It's part of our agreement earlier, remember?`, `Flirty`)
                scene.sex(Actor3, Actor2, Actor)
            }
        } else {
            Actor.dialogue(`In your wildest dream, <Actor2.bastard_or_bitch>! I'm faithful to my <Player.boyfriend_or_girlfriend>!`)
            Actor.dialogue(`Guard! Guard! Help me!`)
            scene.followUp("prison_conjugal")
        }


    })
    scene.timeout(200, "prison_conjugal_cms")
})
module.exports = scene