// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\work\lazy_colleague.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'lazy_colleague'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all"])
    scene.where(["work"])
    scene.when([8, 18])
    let Colleague = scene.getSpecific("Colleague")
    scene.who(($IF) => {
        Colleague = scene.getSpecific("Colleague")
        $IF(Colleague.intelligence < random(0, 50))
    })
    scene.other(($IF) => {
        $IF(Player.jobperformance > 50)
    })


    scene.start(() => {
        let Boss = scene.getSpecific("Boss")


        scene.setBackground("work")
        Colleague.dress()
        Colleague.show(2)


        narrative(`It's no secret that <Colleague.name> is a lazy ass. <Colleague.He_or_She> is always the last one to arrive at the office and the first to leave, and spends whole days browsing the web.`)
        option([
            {text: `Just let <Colleague.him_or_her> slack off`},
            {text: `Convince <Colleague.him_or_her> to change <Colleague.his_or_her> ways`},
            {text: `Complain to my boss`},
            {text: `Blackmail <Colleague.him_or_her> for sex`},
        ])
        if (0) {
            narrative(`It's none of my business. I'll just leave <Colleague.him_or_her> be.`)
        } else if (1) {
            narrative(`I tried to convince <Colleague.name> to be more responsible and stop taking the mickey at work everyday.`)
            if (Colleague.rapportwithplayer + Player.interpersonal > random(0, 150)) {
                Colleague.dialogue(`I guess you're right. I will lose my job sooner or later if I continue on like this.`, `Happy`)
                Colleague.rapportwithplayer += random(0, 2)
                Colleague.intelligence = 51
            } else {
                Colleague.dialogue(`Who told you I was slacking off? Frankly, I work harder than anyone else here!`, `Angry`)
                Colleague.rapportwithplayer -= random(0, 2)
            }
        } else if (2) {
            Colleague.hide()


            Boss = scene.getSpecific("Boss")
            Boss.dress()
            Boss.show(2)
            Boss.dialogue(`Thank you for telling me about this, <Player.name>. I will talk to the other staff and deal with <Colleague.name> accordingly.`, `Happy`)
            Boss.hide()
            if (Colleague.intelligence - Boss.rapportwithplayer < random(0, 50) || Boss.isDating()) {
                narrative(`A few days later, I received an e-mail announcing that <Colleague.name> had been let go by the company. Was it too harsh or did <Colleague.he_or_she> deserve it?`)
                Colleague.rapportwithplayer -= random(0, 50)
                Colleague.removeColleague()
            } else {
                narrative(`<Colleague.name> was issued a warning by the boss for <Colleague.his_or_her> behaviour. I hope that will be enough for <Colleague.him_or_her> to get off <Colleague.his_or_her> lazy ass.`)
                Colleague.rapportwithplayer -= random(0, 10)
                if (random(0, 100) < 50) {
                    Colleague.intelligence = 51
                }
            }
        } else {
            narrative(`I threatened to tell the boss about <Colleague.name>'s lazy attitude unless <Colleague.he_or_she> sleeps with me.`)
            Colleague.rapportwithplayer -= 10
            if (random(0, 100) < Colleague.perversion) {
                Colleague.dialogue(`Okay ...`)
                scene.sex(Player, Colleague)
                Colleague.perversion += 1
            } else {
                Colleague.dialogue(`Now that you've made that threat, I have one of my own: You either keep your mouth shut about my slacking off, or I'll tell HR about you sexually harrassing me ... Let them judge whether sexual harrassment is a more serious offence than being simply lazy ...`)
                narrative(`Damn ... <Colleague.he_or_she> is cleverer than I thought.`)
            }
        }


        scene.timeout(200, "lazy_colleague")
    })
})
module.exports = scene