// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\dating\dating_jealouscutcontacts.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'dating_jealouscutcontacts'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, CurrentCompanion, choice} = scene

    scene.what(["all"])
    scene.where(["home"])
    scene.when([0, 24])
    let Admirer = scene.getPerson("true")
    scene.who(($IF) => {
        Admirer = scene.getPerson("true")
        $IF(Admirer.attractionToPlayer > 10)
    })
    scene.other(($IF) => {
        $IF(Player.isWithCompanion() && CurrentCompanion.isDating() && random(20, 400) < CurrentCompanion.attractionToPlayer + Player.attractiveness - CurrentCompanion.attractiveness)
    })


    scene.start(() => {


        CurrentCompanion.show(2)
        CurrentCompanion.dialogue(`So, who's <Admirer.name> that keeps texting you? Your text exchanges seemed more than friendly.`, `Angry`)
        scene.option([
            {text: `Tell <CurrentCompanion.him_or_her> off for invading my privacy`, condition: Player.masochist < 30},
            {text: `Say <Admirer.name> is just a friend`},
        ])
        if (0) {
            Player.dialogue(`<CurrentCompanion.name>, I don't have to respond to your questioning because I'm not your possession. You have no right to go through my text messages like that.`, `Angry`)
            if (random(0, 200) < Player.interpersonal + CurrentCompanion.masochist) {
                CurrentCompanion.dialogue(`Sorry baby, I shouldn't have been so jealous. It's my fault. I will never go through your phone again ...`, `Surprised`)
            } else {
                CurrentCompanion.dialogue(`Oh? It sounds like <Admirer.name> is definitely a lot more than your friend then. It was a simple question, why did you get all defensive?`, `Angry`)
                CurrentCompanion.attractionToPlayer -= random(0, 5)
            }
        } else {
            Player.dialogue(`<Admirer.name> is just my friend. <Admirer.He_or_She> just likes to flirt sometimes but it's harmless.`, `Irritated`)
            if (CurrentCompanion.masochist > random(0, 30)) {
                CurrentCompanion.dialogue(`I guess you're right. Sorry I asked.`, `Sad`)
            } else {
                CurrentCompanion.dialogue(`Oh yeah? And am I supposed to just put up with your 'friendly flirting'? I'm your <CurrentCompanion.boyfriend_or_girlfriend>.`, `Angry`)
                CurrentCompanion.dialogue(`I'm only going to say this once: cut off all contacts with this <Admirer.name> immediately!`, `Angry`)
                option([
                    {text: `Block <Admirer.name>`},
                    {text: `Refuse`, condition: Player.masochist < 50},
                ])
                if (0) {
                    Player.dialogue(`I guess I have no other choice. Baby, you're more important to me than this friend could ever be.`, `Sad`)
                    Player.blockContact(Admirer)
                    narrative(`It might have been totally unfair to <Admirer.name>, but I had to do it or risk damaging our relationship.`)
                } else {
                    Player.dialogue(`I'm afraid I'm not willing to do that. <Admirer.name> is my friend and has done nothing wrong ...`, `Angry`)
                    narrative(`We then went on to have a massive argument. I'm not sure how long this relationship can survive with <CurrentCompanion.name> being so possessive.`)
                    CurrentCompanion.attractionToPlayer -= random(0, 5)
                }
            }
        }


        scene.timeout(200, "dating_jealouscutcontacts")
    })
})
module.exports = scene