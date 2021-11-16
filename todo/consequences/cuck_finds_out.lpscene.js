// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\consequences\cuck_finds_out.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'cuck_finds_out'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["none"])
    scene.where(["none"])
    scene.when([0, 24])
    let Actor = scene.getSpecific("Impregnated")
    let Actor2 = Actor.getRelatedPerson("Dating", "Spouses")
    scene.who(($IF) => {
        Actor = scene.getSpecific("Impregnated")
        Actor2 = Actor.getRelatedPerson("Dating", "Spouses")
    })
    scene.other("none")


    scene.start(() => {
        let Cuck = Actor.getActorVar("tag_NTRCuck")
        Cuck = Actor.getActorVar("tag_NTRCuck")
        if (scene.isModEnabled("vin_Netori") && (Cuck > 0 || Actor.masochist > 25)) {
            Actor.setActorVar("tag_NTRCuck", 1)
            Actor2.show()
            Actor.dress()
            Actor.show()
            narrative(`While fucking <Actor2.name>, I caught <Actor2.his_or_her> <Actor.boyfriend_or_girlfriend> <Actor.name> watching from the hallway ...`)
            narrative(`I decided to keep silent. If someone enjoys watching <Actor.his_or_her> <Actor2.boyfriend_or_girlfriend> fucking another <Player.man_or_woman>, that's only good for me.`)
            if (Actor.masochist > 50 && Actor.masochist < 60) {
                narrative(`As I was leaving, <Actor.name> finally made <Actor.his_or_her> presence known and approached me, which usually would mean a disastrous situation of me getting caught red-handed.`)
                narrative(`In this case however, I have a feeling this would lead to a pleasant surprise ...`)
                Actor.dialogue(`I must admit I can't help but feel incredibly turned on watching you and my <Actor2.boyfriend_or_girlfriend> go at it ...`)
                Actor.dialogue(`Feel free to fuck <Actor2.him_or_her> as much as you want from now on ... You have my blessing ...`)
                Actor.dialogue(`I'll just watch and try not to disturb you ...`)
                Player.dialogue(`It's good that you've learned your place, cuck! Fine, I'll let you watch whenever I feel like fucking your <Actor2.boyfriend_or_girlfriend> again!`)
            }
            Actor.masochist += 10
        } else {
            narrative(`By sleeping with <Actor2.name>, I have made <Actor2.him_or_her> cheat on <Actor2.his_or_her> <Actor.boyfriend_or_girlfriend> <Actor.name>. I don't know if I should feel guilty or victorious.`)
            narrative(`Let's just hope <Actor.name> will never find out or this could get messy.`)


            if (random(0, 400) < Actor.interpersonal + Actor.intelligence - Player.karma) {
                narrative(`A few days later ...`)
                scene.removeNpcRelationship(Actor, Actor2)
                Player.blockContact(Actor)
                Actor.rapportwithplayer -= 200
                scene.setBackground("home")
                Actor.dress()
                Actor.dialogue(`Open the fucking door!`, `Angry`)
                Actor.show(2)
                Player.dialogue(`What's the matter, <Actor.name>? You look angry.`, `Surprised`)
                if (Actor.masochist + Player.karma < -50) {
                    Actor.animate("gun")
                    Actor.moveToPerson(Player)
                    Actor.dialogue(`You fucked my <Actor2.boyfriend_or_girlfriend>! Now die, <Player.scum_or_bitch>!`, `Furious`)
                    narrative(`Pow!`)
                    scene.followUp("death")
                } else {
                    Actor.dialogue(`You fucked my <Actor2.boyfriend_or_girlfriend>! I should just kill you, <Player.scum_or_bitch>!`, `Furious`)
                    Actor.dialogue(`But I won't lower myself to deal with the likes of you. You both adulterers could fuck off from my life!`, `Angry`)
                }
            }
        }


    })


})
module.exports = scene