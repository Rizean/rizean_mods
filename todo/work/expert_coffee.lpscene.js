// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\work\expert_coffee.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'expert_coffee'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, actionDuration} = scene

    scene.what(["all"])
    scene.where(["work"])
    scene.when([8, 18])
    scene.who("none")
    scene.other(($IF) => {
        $IF(Player.interpersonal > 40 && Player.jobexperience < 75 && random(0, 100) < 0.01 * (Player.interpersonal - Player.jobexperience) * actionDuration)
    })


    scene.start(() => {
        let Expert = scene.generatePerson()
        let Success = true
        scene.setBackground("Work")
        Expert = scene.generatePerson()
        if (random(0, 1) < 0.7) {
            scene.$random(() => {
                Expert.blendPreset("workaholic")
                Expert.blendPreset("workhard_playhard")
            })
        }
        if (random(0, 1) < 0.95) {
            scene.$random(() => {
                Expert.blendPreset("fifties")
                Expert.blendPreset("sixties")
            })
        }
        Expert.randomizeFace()
        Expert.randomizeHairs()
        Expert.dress()


        narrative(`Everyone knows that it's not what you know but who you know that makes the difference between success and failure in this business. Therefore, I try to take any opportunity to network with the big guns as much as possible.`)
        narrative(`I recently managed to get an introduction to <Expert.Mr_or_Ms> <Expert.name_last>, a C-level executive of another company who is a household name in the industry. Having <Expert.him_or_her> in my network would open many doors for my career.`)
        narrative(`We arranged for a quick coffee meeting so that I can introduce myself properly in person.`)
        scene.setBackground("coffee")
        Expert.show(2)
        Player.dialogue(`<Expert.Mr_or_Ms> <Expert.name_last>, it is a pleasure to meet you finally in person. I'm such an admirer of your work.`, `Happy`)
        Expert.dialogue(`It's nice to put a face to the name too, <Player.name>.`, `Happy`)
        narrative(`I only have 15 minutes to make an impression on this industry titan. Let's not screw up!`)
        option([
            {text: `Impress <Expert.him_or_her> with my knowledge and intelligence`},
            {text: `Impress <Expert.him_or_her> with my personality`},
            {text: `Flatter and seduce <Expert.him_or_her>`},
        ])
        if (0 && Player.intelligence > random(50, 100)) {
            narrative(`It might have been a risky move to try to impress the expert this way, but it actually worked!`)
            Expert.dialogue(`It never ceases to amaze me how intellectually curious some young <Player.guys_or_gals> like yourself are. You have learned so much in so little time in the industry. You are much more knowledgeable than I was at your age. Well done!`, `Happy`)
            Success = true
        } else if (1 && Player.interpersonal > random(0, 100)) {
            narrative(`No point trying to be a smartass here. Let's stay humble and focus on building rapport with the <Expert.guy_or_lady>.`)
            Expert.dialogue(`You sure are one of the more interesting <Player.guys_or_girls> I've met recently. I was getting worried that the young generation have all become boring clones in suits.`, `Happy`)
            Success = true
        } else if (2 && Expert.attractionToPlayer + Expert.perversion > random(50, 150)) {
            narrative(`I spent the whole coffee meeting licking <Expert.his_or_her> ass (not literally though!), while trying to show <Expert.him_or_her> some skin.`)
            Expert.dialogue(`You know, maybe we should exchange our mobile numbers. Your company might not be too pleased after all with you exchanging e-mails with someone at another company for professional development purposes.`, `Flirty`)
            narrative(`As if 'professional development' is the only thing <Expert.he_or_she> will be calling me about! In any case, of course I gave <Expert.him_or_her> my number.`)
            Player.exchangeContact(Expert)
            Success = true
        } else {
            narrative(`Nothing I said seemed to impress <Expert.name>. <Expert.He_or_She> ended up looking completely uninterested in the conversation. I probably came across as just another brown-noser wasting <Expert.his_or_her> time.`)
            Success = false
        }


        scene.passTime(0.1, 0.3)
        narrative(`After a while, <Expert.name> had to go back to <Expert.his_or_her> office so we said goodbye.`)
        Expert.hide()


        if (Success) {
            narrative(`This little coffee meeting was a success. The day after the meeting, <Expert.name> sent me a few interesting leads and I now have earned the right to namedrop this big gun as one of my professional contacts. This will surely prove useful down the road.`)
            Player.jobexperience += random(0, 2)
        } else {
            narrative(`I didn't leave much of an impression on <Expert.name>. <Expert.He_or_She> never bothers to reply to my e-mails again.`)
        }
    })
    scene.timeout(700, "expert_coffee")


})
module.exports = scene