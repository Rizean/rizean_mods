// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\work\client_lunch.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'client_lunch'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, actionDuration} = scene

    scene.what(["all"])
    scene.where(["work"])
    scene.when([9, 14])
    scene.who("none")
    scene.other(($IF) => {
        $IF(random(0, 100) < 0.01 * (Player.jobexperience * actionDuration))
    })


    scene.start(() => {
        let Client = scene.generatePerson()
        let Dominant = Client.isDominantSex(Player)
        scene.setBackground("work")
        narrative(`I'm scheduled to meet an important prospect over lunch today. If I can secure this business for the company, I would be one step further towards that long-awaited promotion.`)


        Client = scene.generatePerson()
        if (random(0, 1) < 0.8) {
            scene.$random(() => {
                Client.blendPreset("thirties")
                Client.blendPreset("fourties")
                Client.blendPreset("fifties")
            })
        }


        Client.randomizeFace()
        Client.randomizeHairs()


        Client.dress()


        scene.setBackground("restaurant")
        Client.show(2)
        Player.dialogue(`It's a pleasure to meet you finally in person, <Client.Mr_or_Ms> <Client.name_last>. Thank you for taking the time out of your busy schedule for this lunch.`, `Happy`)
        Client.dialogue(`The pleasure is all mine.`, `Happy`)
        narrative(`We ordered our food and soon went right into business ...`)
        Client.dialogue(`So, <Player.name>, tell me all about what your company can offer us.`, `Excited`)
        Dominant = Client.isDominantSex(Player)
        narrative(`I have my usual standard sales pitch, but it's basically the same salesmanship as all other companies. Choosing a right way to approach this would make or break the deal.`)
        option([
            {text: `Make use of your product knowledge`},
            {text: `Show enthusiasm and build rapport`},
            {text: `Seduce`, condition: Player.perversion > 5},
        ])
        if (2 && Client.isInterestedIn(Player) && (Dominant && Client.perversion + Client.attractionToPlayer > random(0, 100)) || (!Dominant && Client.perversion + Client.attractionToPlayer > random(0, 150))) {
            narrative(`I didn't really say anything special. Rather I focused on looking as sexy as possible while talking, and the client seemed swayed by my good look.`)
            Client.dialogue(`Alright, I can't bring myself to disappoint a <Player.handsome_or_beautiful> <Player.man_or_woman> like you. How about this? I still need to talk to my team to decide, but I'll put your company on first priority.`, `Flirty`)
            Player.jobperformance += random(0, 2)
            narrative(`I could go back to office now and consider this lunch meeting a success. Or maybe I should go in for the kill and make the client commit more?`)
            option([
                {text: `Conclude the meeting`},
                {text: `Give <Client.him_or_her> my personal number`},
                {text: `Offer sex`, condition: Player.perversion > 50 && scene.isModEnabled("vin_VanillaPorn")},
            ])
            if (0) {
                narrative(`Let's just end it here. Don't want to get too ambitious and screw up what I already have!`)
            } else if (1) {
                Player.dialogue(`I know there's not enough time in this lunch meeting to convince you to commit to our company right away. But please, call me later on my personal cell, and I'll be happy to do another 'presentation' in my personal time for you.`, `Flirty`)
                Player.exchangeContact(Client)
                Player.jobperformance += random(0, 3)
                Client.dialogue(`You know what? Now that I see your commitment to 'go the extra mile', I don't think I need to talk to my team still - I decided to give your company a chance right away with the first piece of business from us.`, `Flirty`)
                narrative(`That was without doubt a success and will certainly reflect well on me in the next appraisal.`)
            } else {
                narrative(`I took <Client.his_or_her> hand and led <Client.him_or_her> straight into the restaurant's bathroom. We soon started making out inside one of the cubicles.`)
                Player.jobperformance += random(0, 5)
                Player.perversion += random(0, 2)
                scene.sex(Client, Player)
                Client.show(2)
                Client.dialogue(`That was amazing. I can't believe how far you were willing to go to secure the business. I shall reward you: a massive piece of business is coming your company's way this week.`, `Flirty`)
                narrative(`My bodily sacrifices for the company were worth it. This was a massive success, and that long overdue promotion is now very near indeed!`)
            }
        } else if (0 && Player.intelligence > random(0, 120)) {
            narrative(`<Client.He_or_She> seemed to be impressed by my deep knowledge.`)
            Client.dialogue(`Well, if everyone at your company is as intelligent and well-spoken as you are, then I have full belief that your team can deliver the results that we require.`, `Happy`)
            Client.dialogue(`You can be assured that we'll send a lot of business your way in the future.`, `Excited`)
            narrative(`That was without doubt a success and will certainly reflect well on me in the next appraisal.`)
            Player.jobperformance += random(0, 5)
        } else if (1 && Player.interpersonal > random(0, 120)) {
            narrative(`<Client.He_or_She> seemed to be impressed by my charisma.`)
            Client.dialogue(`I'm quite good at judging people. And just from talking to you, I can feel that you guys can do a good job. Alright, we'll be sending over the first piece of business tomorrow - see how you can handle it.`, `Happy`)
            narrative(`That was without doubt a success and will certainly reflect well on me in the next appraisal.`)
            Player.jobperformance += random(0, 5)
        } else {
            narrative(`I spoke on and on but nothing seemed to impress the client. <Client.He_or_She> has heard it all before.`)
            narrative(`Needless to say, I went back to office that afternoon without even a verbal commitment to do business from the client. This certainly reflected badly on my ability.`)
            Player.jobperformance -= random(0, 3)
        }


        Client.hide()
        scene.timeout(300, "client_lunch")
    })


})
module.exports = scene