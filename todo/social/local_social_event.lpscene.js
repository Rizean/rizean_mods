// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\social\local_social_event.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'local_social_event'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all", " -sleep", " -nap", " -sleep_hotel", " -nap_hotel"])
    scene.where(["all"])
    scene.when([18, 22])
    scene.who("none")
    scene.other(($IF) => {
        $IF(random(0, 1000) < Player.interpersonal)
    })


    scene.start(() => {
        let count = 0
        let Actor = scene.generatePerson()
        narrative(`I heard about a social event being organized tonight at a bar near here. It would be a good opportunity to meet new people. Should I go?`)
        option([
            {text: `Yes`},
            {text: `No`},
        ])
        if (0) {
            narrative(`Why not? I would never turn down an opportunity to socialize.`)
            narrative(`Later that night ...`)
            scene.setBackground("bar")
            narrative(`I'm at the event. The attendance is decent. Plenty of cool-looking people here.`)


            count = 0
            while (count < Player.interpersonal * random(0.01, 0.1)) {
                Actor = scene.generatePerson()
                Actor.dress()
                Actor.show(2)
                narrative(`A fellow event attendee smiles at me from far away.`)
                option([
                    {text: `Smile back`},
                    {text: `Look away`},
                ])
                if (0) {
                    narrative(`<Actor.He_or_She> approached me and introduced <Actor.himself_or_herself> as <Actor.name>. We went on to have a nice pleasant conversation. Before we part to mingle with other people, should I ask for <Actor.his_or_her> number?`)
                    option([
                        {text: `Yes`},
                        {text: `No`},
                    ])
                    if (0) {
                        narrative(`We chat for a bit before exchanging contacts, hopefully to hang out with each other another day.`)
                        Player.exchangeContact(Actor)
                    } else {
                        narrative(`Not yet. I literally just met the <Actor.guy_or_girl>.`)
                    }
                } else {
                    narrative(`Nah, <Actor.he_or_she> doesn't look like we would have much to talk about.`)
                }
                Actor.hide()
                count += 1
            }
            narrative(`Eventually, the event wound down and everyone left. It had been a fun way to meet new people.`)
        } else {
            narrative(`I'm busy today. Maybe another day.`)
            Player.interpersonal -= random(0, 0.25)
        }


    })
    scene.timeout(500, "local_social_event")
})
module.exports = scene