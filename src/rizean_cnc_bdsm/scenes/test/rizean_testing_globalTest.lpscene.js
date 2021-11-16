// noinspection JSUnresolvedVariable
const {LPScene} = require('LifePlayjs')

const scene = new LPScene({name: 'rizean_testing_globalTest'}, (scene) => {
    const {Player, CurrentCompanion, random, option, choice, isModEnabled, start, paren, WHAT, narrative} = scene
    scene.what([])
    scene.where([])
    scene.when([0, 24])
    scene.who('none')
    scene.other(($IF) => {
    })


    scene.start(() => {
        narrative("actionDuration = <actionDuration>")
        narrative("business_reputation = <business_reputation>")
        narrative("business_staffintelligence = <business_staffintelligence>")
        narrative("business_staffinterpersonal = <business_staffinterpersonal>")
        narrative("business_staffnumber = <business_staffnumber>")
        narrative("choice = <choice>")
        narrative("costOfLiving = <costOfLiving>")
        narrative("day_of_week = <day_of_week>")
        narrative("dayOfWeek = <dayOfWeek>")
        narrative("daysOfMonth = <daysOfMonth>")
        narrative("gameDifficulty = <gameDifficulty>")
        narrative("percentageElves = <percentageElves>")
        narrative("percentageOrcs = <percentageOrcs>")
        narrative("percentageVampires = <percentageVampires>")
        narrative("timePassed = <timePassed>")
        narrative("toCum = <toCum>")
        narrative("version_main = <version_main>")
        narrative("version_sub = <version_sub>")
        narrative("WHEN = <WHEN>")

    })

})
module.exports = scene
