// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\uni_student\enroll_degree.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'enroll_degree'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, costOfLiving} = scene

    scene.what(["none"])
    scene.where(["none"])
    scene.when([0, 24])
    scene.who("none")
    scene.other("none")


    scene.start(() => {
        let Tuition = 500 * costOfLiving
        let TuitionConverted = Tuition.convertToLocalCurrency("true")
        let Total = random(10, 25)
        let count = 0
        let Actor = scene.generatePerson()
        Tuition = 500 * costOfLiving
        TuitionConverted = Tuition.convertToLocalCurrency("true")
        narrative(`Do I want to apply for a degree course at this university? Thanks to the government's restrictions, the tuition for all courses work out at around <TuitionConverted> per month.`)
        option([
            {text: `Yes`},
            {text: `No`},
        ])
        if (0) {
            Player.moveSchools()
            Tuition.setTuition()
            narrative(`Yeah, the education is worth that money. I can get a once-in-a-lifetime experience and a much better job after I graduate.`)
            narrative(`Now, what should I go for as my major?`)
            Player.chooseMajor()
            Player.setMajor()
            scene.setBackground("home")
            narrative(`A month later ...`)
            narrative(`My application was successful. I cannot wait to start the course!`)
            scene.dressFormal()
            scene.setBackground("bar")
            Player.dress()
            narrative(`The Department of <Player.Major> organized a welcome drink event a day before the course's start date. I just had to go, this is the perfect chance to meet my coursemates and lecturers.`)
            Total = random(10, 25)
            count = 0
            while (count < Total) {
                Actor = scene.generatePerson()
                if (random(0, 100) < 95) {
                    Actor.age = random(18, 22)
                    Actor.randomizeHairs()
                    Actor.randomizeFace()
                }
                Actor.setSameMajor()
                Actor.dress()
                Actor.show(2)
                narrative(`A future coursemate approached me.`)
                Actor.dialogue(`Hi there, I'm <Actor.name>. Nice to meet you!`, `Happy`)
                Player.dialogue(`Nice to meet you, <Actor.name>. I'm <Player.name>.`, `Happy`)
                option([
                    {text: `Offer to add <Actor.him_or_her> on Facebook`},
                    {text: `Just chat`},
                ])
                if (0) {
                    narrative(`Before we ended our conversation, I made sure to befriend <Actor.name> on Facebook for easy contact in the future.`)
                    Player.exchangeContact(Actor)
                }
                Actor.hide()
                Actor.saveAndDelete()
                count += 1
            }


            Total = random(5, 8)
            count = 0
            while (count < Total) {
                Actor = scene.generatePerson()
                Actor.age = random(27, 70)
                Actor.randomizeHairs()
                Actor.randomizeFace()
                Actor.setSubject()
                Actor.dress()
                Actor.show(2)
                narrative(`One of my future lecturers approached me.`)
                Actor.dialogue(`Hi there, I'm Dr <Actor.name> <Actor.name_last>. I teach the <Actor.major> module.`, `Happy`)
                Player.dialogue(`Nice to meet you, Dr <Actor.name_last>. I'm <Player.name>. I'm looking forward to your class.`, `Happy`)
                Actor.hide()
                Actor.saveAndDelete()
                count += 1
            }
            narrative(`Eventually, the event wound down. I'm glad to have met many of my coursemates and lecturers. I cannot wait for my first day tomorrow.`)
        }
    })
})
module.exports = scene