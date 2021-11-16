// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\lifeplayjs_test\lifeplayjs_test.lpscene

const {LPScene} = require('LifePlayjs')

const scene = new LPScene({name: 'rizean_testMenu'}, (scene) => {

    const {Player, CurrentCompanion, none, random, option, narrative, $WHERE, WHEN, $random, percentageOrcs, percentageElves, timePassed, hoursElapsed, costOfLiving, currentBuilding, actionDuration, GameDifficulty, business_reputation, business_staffnumber, percentageVampires, business_staffintelligence, business_staffinterpersonal} = scene
    let choice = scene.choice

    scene.what(["none"])
    scene.where(["none"])
    scene.when([0, 24])
    scene.who("none")
    scene.other("none")

    scene.start(() => {
        option([
            {text: 'Global Test'},
            {text: 'Clothing Test'},
            {text: 'isGenitalsAccessible'},
            {text: 'Pass day'},
            {text: 'Set costOfLiving'},
            {text: 'intoxication bonus test'},
            {text: 'Power test'},
            {text: 'solo animation test'},
            {text: 'pair animation test'},
            {text: 'solo sex'},
            {text: 'Pass 12 hours'},
            {text: 'Exit'}
        ])

        if (0) {
            scene.followUp('rizean_globalTest')
        } else if (1) {
            scene.followUp('rizean_testing_clothingTest')
        } else if (2) {
            scene.followUp('rizean_testing_areGenitalsAccessible')
        } else if (3) {
            choice = 0
            while (choice < 5) {
                narrative("Pass Time")
                option([
                    {text: '1 Day'},
                    {text: '18 Hours'},
                    {text: '12 Hours'},
                    {text: '6 Hours'},
                    {text: '3 Hours'},
                    {text: 'Exit'}
                ])
                if (0) {
                    scene.passTime(24, 24)
                } else if (1) {
                    scene.passTime(18, 18)
                } else if (2) {
                    scene.passTime(12, 12)
                } else if (3) {
                    scene.passTime(6, 6)
                } else if (4) {
                    scene.passTime(3, 3)
                }
            }

        } else if (4) {
            narrative("Set costOfLiving from <costOfLiving> to 3")
            let costOfLiving = 3
        } else if (5) {
            Player.intoxication = random(20,100)
            let growthRate = 1.035
            let intoxicationBonus = growthRate.power(Player.intoxication)
            narrative("Player.intoxication <Player:intoxication>  intoxicationBonus = <intoxicationBonus>")
        } else if (6) {

            let a = 2
            let p = a.power(2)
            narrative("a = <a>  p = <p>")
        } else if (7) {
            scene.followUp('rizean_testing_soloAnimations')
        } else if (8) {
            scene.followUp('rizean_testing_pairAnimations')
        } else if (9) {
            scene.sex(Player)
        }

    })
})
module.exports = scene