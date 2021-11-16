// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\work\big_project.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'big_project'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["work"])
    scene.where(["work"])
    scene.when([8, 20])
    let Colleague1 = scene.getSpecific("Colleague")
    let Colleague2 = scene.getSpecific("Colleague")
    let Colleague3 = scene.getSpecific("Colleague")
    scene.who(($IF) => {
        Colleague1 = scene.getSpecific("Colleague")
        Colleague2 = scene.getSpecific("Colleague")
        Colleague3 = scene.getSpecific("Colleague")
    })
    scene.other(($IF) => {
        $IF(random(0, 100) < 0.02 * Player.jobexperience)
    })


    scene.start(() => {
        let Score = 0
        scene.setBackground("work")
        narrative(`There's a big project coming up at work that has yet to have a lead. Should I volunteer for the position?`)
        option([
            {text: `Volunteer to lead`},
            {text: `Maybe not`},
        ])
        if (0) {
            narrative(`I volunteered to lead this project and the boss allowed me to do it. This is my chance to show off my leadership capability.`)
            narrative(`The colleagues who I will manage for this project are <Colleague1.name>, <Colleague2.name> and <Colleague3.name>, along with a few contractors.`)
            Colleague1.dress()
            Colleague2.dress()
            Colleague3.dress()
            Colleague1.show(1)
            Colleague2.show(2)
            Colleague3.show(3)


            narrative(`It's time to assign tasks for everyone.`)
            Score = 0
            Colleague2.hide()
            Colleague3.hide()


            Colleague1.show(2)
            narrative(`What should I ask <Colleague1.name> to do?`)
            option([
                {text: `Research`},
                {text: `Communicating with the client`},
            ])
            if (0) {
                Score += Colleague1.intelligence
            } else {
                Score += Colleague1.interpersonal
            }
            Colleague1.hide()


            Colleague2.show(2)
            narrative(`What should I ask <Colleague2.name> to do?`)
            option([
                {text: `Writing reports`},
                {text: `Coordinating the contractors`},
            ])
            if (0) {
                Score += Colleague2.intelligence
            } else {
                Score += Colleague2.interpersonal
            }
            Colleague2.hide()


            Colleague3.show(2)
            narrative(`What should I ask <Colleague3.name> to do?`)
            option([
                {text: `Quality control`},
                {text: `Focus groups`},
            ])
            if (0) {
                Score += Colleague3.intelligence
            } else {
                Score += Colleague3.interpersonal
            }
            Colleague3.hide()


            narrative(`Everything else will be left to the contractors ...`)


            narrative(`Which leadership style should I adopt?`)
            option([
                {text: `Lead from the front`},
                {text: `Delegate and supervise`},
            ])
            if (0) {
                Score += Player.intelligence * 2
            } else {
                Score += Player.interpersonal * 1
            }


            narrative(`With everyone knowing their duties, we got on with the tasks at hand and worked hard on the project.`)
            narrative(`A few weeks later ...`)
            if (Score > random(0, 500)) {
                narrative(`The project was a success. The client was very satisfied with our work. My leadership skills impressed higher-ups immensely and I can expect further opportunities to lead to come my way soon.`)
                narrative(`The colleagues that I managed during the project also earned plenty of respect for me.`)
                Colleague1.rapportwithplayer += random(0, 5)
                if (Colleague1.isInterestedIn(Player)) {
                    Colleague1.attractionToPlayer += random(0, 5)
                }
                Colleague2.rapportwithplayer += random(0, 5)
                if (Colleague2.isInterestedIn(Player)) {
                    Colleague2.attractionToPlayer += random(0, 5)
                }
                Colleague3.rapportwithplayer += random(0, 5)
                if (Colleague3.isInterestedIn(Player)) {
                    Colleague3.attractionToPlayer += random(0, 5)
                }
                Player.jobperformance += random(0, 15)
                Player.jobexperience += random(0, 2)
            } else {
                narrative(`The project was a failure. We made so many mistakes along the way and the client was extremely upset. My lousy leadership disappointed higher-ups immensely and I'm afraid further opportunities to lead may be more limited in the future.`)
                narrative(`The colleagues that I managed during the project also lost some respect for me.`)
                Colleague1.rapportwithplayer -= random(0, 2)
                if (Colleague1.isInterestedIn(Player)) {
                    Colleague1.attractionToPlayer -= random(0, 2)
                }
                Colleague2.rapportwithplayer -= random(0, 2)
                if (Colleague2.isInterestedIn(Player)) {
                    Colleague2.attractionToPlayer -= random(0, 2)
                }
                Colleague3.rapportwithplayer -= random(0, 2)
                if (Colleague3.isInterestedIn(Player)) {
                    Colleague3.attractionToPlayer -= random(0, 2)
                }
                Player.jobperformance -= random(0, 5)
            }
        } else {
            narrative(`I'm not sure I'm the best person to lead this project. It's better to take a back seat and follow instructions for now.`)
            Player.masochist += random(0, 1)
        }


    })
    scene.timeout(500, "big_project")
})
module.exports = scene