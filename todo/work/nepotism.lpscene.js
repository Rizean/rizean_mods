// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\work\nepotism.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'nepotism'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["work"])
    scene.where(["work"])
    scene.when([7, 11])
    let Colleague1 = scene.getSpecific("Colleague")
    let Colleague2 = scene.getSpecific("Colleague")
    let Colleague3 = scene.getSpecific("Colleague")
    scene.who(($IF) => {
        Colleague1 = scene.getSpecific("Colleague")
        Colleague2 = scene.getSpecific("Colleague")
        Colleague3 = scene.getSpecific("Colleague")
    })
    scene.other(($IF) => {
        $IF(random(0, 100) < 2)
    })


    scene.start(() => {
        let Relative = scene.generatePerson()
        scene.setBackground("work")


        narrative(`Anyone who says their company is totally free from nepotism is simply naive. My company is no exception. In fact, today, one of the relatives of the CEO was joining my department, who seemed to be totally unqualified for the job.`)


        Relative = scene.generatePerson()
        Relative.intelligence = random(0, 40)
        Relative.dress()
        Relative.addColleague()
        Relative.show(2)


        Relative.dialogue(`Hey there, I'm new here but just so you know, I'm related to the CEO. Nice to meet you!`, `Evil`)
        narrative(`What a cocky shameless <Relative.bastard_or_bitch>! And I'm not the only one annoyed by <Relative.name>'s arrogance either. <Colleague1.name>, <Colleague2.name> and <Colleague3.name> were standing nearby at the time and were visibly upset. How should I respond?`)
        option([
            {text: `Lick <Relative.his_or_her> ass`},
            {text: `Respond sarcastically`},
        ])
        if (0) {
            Player.dialogue(`Nice to meet you too, <Relative.name>. I heard all about your amazing talents and have been eagerly awaiting your arrival.`, `Happy`)
            narrative(`My shameless flattery seemed to impress the crown <Relative.prince_or_princess>, whose connections could help my career immensely. However, it lost me the respect of my more upright colleagues.`)
            Colleague1.rapportwithplayer -= random(0, 10)
            Colleague2.rapportwithplayer -= random(0, 10)
            Colleague3.rapportwithplayer -= random(0, 10)
            Colleague1.attractionToPlayer -= random(0, 10)
            Colleague2.attractionToPlayer -= random(0, 10)
            Colleague3.attractionToPlayer -= random(0, 10)
            Relative.rapportwithplayer += random(0, 40)
            Player.jobperformance += random(0, 5)
        } else {
            Player.dialogue(`Oh? Looks like someone is honest upfront about their only qualification: coming out of a rich vagina!`, `Sarcastic`)
            narrative(`The comment upset <Relative.name> but instantly made me a hero in front of my more upright colleagues.`)
            Colleague1.rapportwithplayer += random(0, 10)
            Colleague2.rapportwithplayer += random(0, 10)
            Colleague3.rapportwithplayer += random(0, 10)
            if (Colleague1.isInterestedIn(Player)) {
                Colleague1.attractionToPlayer += random(0, 5)
            }
            if (Colleague2.isInterestedIn(Player)) {
                Colleague2.attractionToPlayer += random(0, 5)
            }
            if (Colleague3.isInterestedIn(Player)) {
                Colleague3.attractionToPlayer += random(0, 5)
            }


            Relative.rapportwithplayer -= random(0, 40)
            Player.jobperformance -= random(0, 5)
        }


    })
    scene.timeout(1000, "nepotism")
})
module.exports = scene