// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\work\contractor.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'contractor'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["work"])
    scene.where(["work"])
    scene.when([8, 20])
    scene.who("none")
    scene.other(($IF) => {
        $IF(random(0, 100) < 0.05 * Player.jobexperience)
    })


    scene.start(() => {
        let Contractor = scene.generatePerson()
        Contractor = scene.generatePerson()
        Contractor.dress()
        Contractor.show(2)


        narrative(`Not everyone I work with is permanent staff. We have a lot of contractors on a short to medium term basis to help out with projects. One such contractor is <Contractor.name>. We got along quite well during <Contractor.his_or_her> time with us, but the contract is running out and <Contractor.he_or_she> is leaving soon.`)
        narrative(`Should I ask for <Contractor.name>'s contact number so that we can see each other again outside of work?`)
        option([
            {text: `Ask for <Contractor.his_or_her> number`},
            {text: `Maybe not`},
        ])
        if (0) {
            narrative(`We exchanged personal contacts before <Contractor.name>'s contract ran out. I can now meet <Contractor.him_or_her> outside of work.`)
            Player.exchangeContact(Contractor)
        } else {
            narrative(`I decided not to exchange numbers with <Contractor.name>.`)
        }


    })
    scene.timeout(500, "contractor")


})
module.exports = scene