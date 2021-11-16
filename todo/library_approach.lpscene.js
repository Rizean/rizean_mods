// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\misc\library_approach.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'library_approach'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, actionDuration} = scene

    scene.what(["all"])
    scene.where(["library"])
    scene.when([0, 24])
    scene.who("none")
    scene.other(($IF) => {
        $IF(random(0, 1000) < Player.interpersonal * actionDuration)
    })


    let New_Person = scene.generatePersonTemporary([])
    New_Person = scene.generatePersonTemporary([])
    while (!Player.isInterestedIn(New_Person)) {
        New_Person = scene.generatePersonTemporary([])
    }
    New_Person.makePermanent()


    scene.start(() => {
        New_Person.dress()
        New_Person.show(2)


        narrative(`It's my lucky day. While spending time in the library, I found myself sitting opposite to a <New_Person.handsome_or_cute> <New_Person.guy_or_girl>. Out of courtesy to fellow library goers, I probably shouldn't start a loud conversation, but maybe I should sneakily slip a piece of paper with my number on it to <New_Person.him_or_her>. If <New_Person.he_or_she> is interested, we could go on a date someday.`)
        scene.option([
            {text: `Offer your number sneakily`, condition: Player.interpersonal > 5},
            {text: `Maybe not`},
        ])
        if (0) {
            narrative(`I carefully slipped a piece of paper into <New_Person.him_or_her> hand, onto which I wrote 'Text me back' along with my number. <New_Person.He_or_She> was confused for a few seconds before understanding my intention. <New_Person.He_or_She> said nothing though and continued being absorbed in <New_Person.his_or_her> books.`)
            New_Person.hide()
            narrative(`A while later ...`)
            scene.setBackground("street")
            if (New_Person.isInterestedIn(Player) && (New_Person.isDominantSex(Player) || New_Person.attractionToPlayer > random(0, 50) || New_Person.perversion > random(0, 50))) {
                Player.exchangeContact(New_Person)
                narrative(`I received a text message from an unknown number. Hmm, let's read it ...`)
                New_Person.dialogue(`Hey, it's me, <New_Person.name>, the <New_Person.guy_or_girl> you just gave your number to in the library earlier!`)
                if (Player.isDominantSex(New_Person)) {
                    narrative(`Ah, so <New_Person.he_or_she> is interested! Now that we have each other's number, I should ask <New_Person.him_or_her> out soon.`)
                } else {
                    narrative(`It seems the <New_Person.handsome_or_cute> bookworm found me attractive too! Now that we have each other's number, I hope <New_Person.he_or_she> will ask me on a date soon.`)
                }
            } else {
                narrative(`Still no text back from the <New_Person.guy_or_girl> I met earlier in the library. Oh well, I guess there are worse ways to get rejected!`)
            }
        } else {
            narrative(`Well, that would be kinda weird, I'd better not do that.`)
        }


    })
    scene.timeout(12, "library_approach")
})
module.exports = scene