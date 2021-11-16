// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Corruption\Scenes\fake_modeling.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'fake_modeling'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all"])
    scene.where(["all", " -home"])
    scene.when([8, 21])
    scene.who("none")
    scene.other(($IF) => {
        $IF(random(0, 100) < Player.attractiveness && !Player.isProstitute() && Player.modelfame == 0 && !Player.isWithCompanion())
    })


    scene.start(() => {
        let Actor = scene.generatePersonTemporary([])
        Actor = scene.generatePersonTemporary([])
        Actor.makeInterested(Player)
        Actor.dress()
        Actor.show()
        narrative(`I was going about my business when suddenly a <Actor.man_or_woman> approached me ...`)
        Actor.dialogue(`Hello there, I represent this city's biggest model agency. You look like you have what it takes to go far in this industry. Would you like to come to our office to sort out some arrangements?`)
        option([
            {text: `Yes`},
            {text: `No`},
        ])
        if (0) {
            narrative(`This is a once-in-a-lifetime opportunity ... I've always wanted to be a model ...`)
            Actor.dialogue(`Please, follow me ...`)
            scene.setBackground("home")
            narrative(`The agency office turns out to be rather small and more like a cheap motel room than an office.`)
            Actor.dialogue(`As I said, you have the look we're looking for ... what remains to be seen is whether you have the drive and determination to do whatever it takes to survive and thrive in this cutthroat industry ...`)
            Player.dialogue(`I do ...`)
            Actor.dialogue(`Have you heard about casting couch culture? Let me tell you it's a very real and necessary part of the industry. You refuse to do it, and your modelling career will be cut short right away ...`)
            Actor.dialogue(`What are you waiting for? Show me how driven you are for success in this industry, and we'll give you a contract right away.`)
            option([
                {text: `Fuck the agent for a modelling contract`},
                {text: `No way`},
            ])
            if (0) {
                Player.perversion += 1
                scene.sex(Actor, Player)
                Actor.dialogue(`Well done, I was right about you. You have everything required for a successful modelling career. Now, let me go to the next room and grab some paperwork and we can sort out the contract right away ...`)
                Actor.hide()
                narrative(`So I wait ... and wait ... and wait ... the agent never came bank`)
                narrative(`I soon found out that the so-called 'agency office' was in fact an AirBnB and I was duped ... How embarrassing`)
                Player.mood -= 20
            } else {
                Actor.dialogue(`It's your loss ...`)
                Player.perversion -= 1
            }
        } else {
            narrative(`I'm not that keen on becoming a model. Besides, this is too out of the blue, I'm a little bit suspicious ...`)
        }
    })
    scene.timeout(500, "fake_modeling")
})
module.exports = scene