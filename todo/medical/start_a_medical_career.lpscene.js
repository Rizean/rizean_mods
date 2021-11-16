// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\medical\start_a_medical_career.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'start_a_medical_career'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, costOfLiving, choice} = scene

    scene.what(["none"])
    scene.where(["none"])
    scene.when([0, 24])
    scene.who("none")
    scene.other("none")


    scene.start(() => {
        let Tuition = costOfLiving * 2 * (750 + (Player.intelligence * 20))
        let TuitionConverted = Tuition.convertToLocalCurrency("true")
        let TuitionNurse = costOfLiving * 1.25 * (750 + (Player.intelligence * 20))
        let TuitionNurseConverted = TuitionNurse.convertToLocalCurrency("true")
        let Total = random(3, 10)
        let count = 0
        let Actor = scene.generatePerson()
        Tuition = costOfLiving * 2 * (750 + (Player.intelligence * 20))
        TuitionConverted = Tuition.convertToLocalCurrency("true")
        TuitionNurse = costOfLiving * 1.25 * (750 + (Player.intelligence * 20))
        TuitionNurseConverted = TuitionNurse.convertToLocalCurrency("true")
        narrative(`Do I want to apply for a medical career at this hospital? They are offering average salaries per month of <TuitionConverted> for a doctor and <TuitionNurseConverted> for a nurse.`)
        option([
            {text: `Apply for the doctor job`},
            {text: `Apply for the nurse job`},
            {text: `Look elsewhere`},
        ])
        if (choice < 2) {
            Player.moveJobs()
            narrative(`Yeah, it's a good career to save people's lives and make a living out of it.`)
            scene.setBackground("home")
            narrative(`A month later ...`)
            narrative(`My application was successful. I cannot wait to start the job!`)
            if (0) {
                Player.setJob("Doctor")
                Tuition.setSalary()
                Player.dressUniform()
            } else {
                Player.setJob("Nurse")
                TuitionNurse.setSalary()
                Player.dressUniform()
            }


            scene.setBackground("hospital")
            narrative(`The Hospital organized a welcome reception a day before my first day. I just had to go, this is the perfect chance to meet my new colleagues.`)
            Total = random(3, 10)
            count = 0
            while (count < Total) {
                Actor = scene.generatePerson()
                Actor.age = random(25, 60)
                Actor.randomizeHairs()
                Actor.randomizeFace()
                Actor.setJob("Doctor")
                Actor.dressUniform()
                Actor.show(2)
                narrative(`A doctor approached me.`)
                Actor.dialogue(`Good evening, <Player.name>. I'm Dr <Actor.name_last>, but you can call me <Actor.name>. It's my pleasure to meet you!`, `Happy`)
                Player.dialogue(`Nice to meet you, <Actor.name>.`, `Happy`)
                Player.exchangeContact(Actor)
                Actor.hide()
                Actor.saveAndDelete()
                count += 1
            }


            Total = random(5, 13)
            count = 0
            while (count < Total) {
                Actor = scene.generatePerson()
                Actor.setJob("Nurse")
                Actor.dressUniform()
                Actor.show(2)
                narrative(`A nurse approached me.`)
                Actor.dialogue(`Hi there, I'm <Actor.name>. I work here as a nurse.`, `Happy`)
                Player.dialogue(`Nice to meet you,<Actor.name>. I'm <Player.name>. I'm looking forward to working with you.`, `Happy`)
                Player.exchangeContact(Actor)
                Actor.hide()
                Actor.saveAndDelete()
                count += 1
            }
            narrative(`Eventually, the event wound down. I'm glad to have met many of my colleagues. I cannot wait for my first day tomorrow.`)
        }
    })
})
module.exports = scene