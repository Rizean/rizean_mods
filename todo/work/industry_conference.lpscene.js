// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\work\industry_conference.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'industry_conference'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, actionDuration} = scene

    scene.what(["all"])
    scene.where(["work"])
    scene.when([7, 11])
    let Colleague = scene.getSpecific("Colleague")
    scene.who(($IF) => {
        Colleague = scene.getSpecific("Colleague")
        $IF(Colleague.interpersonal > 50)
    })
    scene.other(($IF) => {
        $IF(random(0, 100) < 0.005 * (Player.interpersonal + Player.jobexperience + Player.jobperformance) * actionDuration)
    })


    scene.start(() => {
        let Boss = scene.getSpecific("Boss")
        let Going = false
        scene.setBackground("work")
        Boss = scene.getSpecific("Boss")
        Boss.dress()
        Boss.show(2)
        narrative(`There's an industry conference going on tomorrow. As expected, my company is sending a delegate, mostly consisting of more senior guys than me. However, at the last minute, one of them dropped out.`)
        Boss.dialogue(`So, who among you wants to join us at the conference tomorrow?`, `Happy`)
        Colleague.dress()
        Colleague.show(4)


        Colleague.dialogue(`I would love to do it!`, `Happy`)
        option([
            {text: `Volunteer also`},
            {text: `Stay silent`},
        ])
        if (1) {
            narrative(`If <Colleague.name> wants to go, I'll be nice enough to not stand in <Colleague.his_or_her> way.`)
            Going = false
        } else {
            Player.dialogue(`I would really appreciate this opportunity!`, `Excited`)
            Colleague.rapportwithplayer -= random(0, 5)
            if (Player.interpersonal + Player.intelligence - Colleague.interpersonal - Colleague.intelligence > random(0, 20) || Boss.rapportwithplayer > random(50, 100) || Boss.isDating()) {
                Going = true
                Boss.dialogue(`Alright, <Player.name>, you seem to be the most suitable person to go. <Colleague.name>, sorry, but next time we'll definitely consider you.`, `Happy`)
            } else {
                Going = false
                Boss.dialogue(`Sorry, <Player.name>, but we'll let <Colleague.name> go this time. Next time, we'll definitely consider you.`, `Sad`)
            }
        }


        Boss.hide()
        Colleague.hide()


        if (Going) {
            narrative(`I might have upset <Colleague.name>, but in exchange, I ended up with a fantastic conference day making so many new contacts. The experience was a decent boost to my career.`)
            Player.jobexperience += random(0, 5)
            scene.timeout(1500, "industry_conference")
        } else {
            narrative(`<Colleague.name> went to the conference. When <Colleague.he_or_she> came back, <Colleague.he_or_she> spent the whole lunch hour namedropping the big guns <Colleague.he_or_she> met there. If true, that was quite an opportunity missed for me ...`)
            scene.timeout(750, "industry_conference")
        }


    })


})
module.exports = scene