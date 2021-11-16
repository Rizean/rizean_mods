// noinspection JSUnresolvedVariable
const {LPScene} = require('LifePlayjs')

const scene = new LPScene({name: 'rizean_testing_areGenitalsAccessible'}, (scene) => {
    const {Player, CurrentCompanion, random, option, choice, isModEnabled, start, paren, WHAT, narrative} = scene
    scene.what([])
    scene.where([])
    scene.when([0, 24])
    scene.who('none')
    scene.other(($IF) => {
    })


    scene.start(() => {
        let isNotWearingUnderwear = Player.isNotWearingUnderwear()
        let isNotWearingBottoms = Player.isNotWearingBottoms()
        let areGenitalsAccessible = Player.areGenitalsAccessible()
        narrative("areGenitalsAccessible=<areGenitalsAccessible>  isNotWearingUnderwear=<isNotWearingUnderwear> isWearingSkirtDress=<isWearingSkirtDress> isWearingSkirt=<isWearingSkirt>  isWearingDress=<isWearingDress>  isNotWearingBottoms=<isNotWearingBottoms>")
    })

})
module.exports = scene
