// noinspection ES6ConvertVarToLetConst

const {LPScene} = require('LifePlayjs')

const scene = new LPScene({name: 'rizean_cnc_drop_flirt'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene
    const drop_flirt_base = scene.lpMod.getFunction('drop_flirt_base')

    scene.what(["none"])
    scene.where(["none"])
    scene.when([0, 24])
    scene.who("none")
    scene.other("none")

    scene.start(() => {
        let Target = Player.getTarget()

        let growthRate = 1.035
        let intoxicationBonus = growthRate.power(Player.intoxication)
        let arousalBonus = growthRate.power(Player.arousal)
        let targetIntoxicationBonus = growthRate.power(Target.intoxication)

        let willpower = Player.energy / 100 * Player.intelligence
        // WHERE != home && WHERE != fraternity && WHERE != brothel && WHERE != stripclub && WHERE != prison
        let isPublic = $WHERE !== 'Home' || $WHERE !== 'residential'
        let publicScore = 5
        if (isPublic) {
            publicScore = -5
        }
        let targetPerversionScore = Target.perversion + targetIntoxicationBonus - Target.masochist + publicScore
        let targetWillForce = targetPerversionScore > 150
        // less make sure they will like it
        if (targetWillForce) {
            Target.likes_rough += random(25, 100)
            Target.likes_vaginal += random(25, 100)
            Target.likes_anal += random(25, 100)
            Target.prone_to_orgasm += random(25, 100)
        }
        let playerSubmissiveScore = Player.masochist + intoxicationBonus
        let playerPerversionScore = Player.perversion + Player.masochist + intoxicationBonus
        let isWearingUnderwear = Player.isEquipped('Bottom_Under')
        // could be wearing only a Top_Under which in effect means they are not wearing a bra
        let isWearingBra = Player.isEquipped('Top') && Player.isEquipped('Top_Under')


        narrative("I let me phone 'accidentally' slide out of my hand.")
        Player.dialogue("Opps...", 'Flirty')
        narrative("I bend over to pick it up making sure <Target.he_or_she> has a 'good' view.")
        if (targetPerversionScore >= 100) {
            drop_flirt_base({scene, Target, targetWillForce, targetPerversionScore, growthRate, arousalBonus, playerPerversionScore, isWearingUnderwear, isWearingBra, willpower, isPublic})
        } else {
            narrative("I catch <Target.him_or_her> checking my butt out.")
            Target.attractionToPlayer += 0.5
            if (targetPerversionScore < 50) {
                narrative("<Target.him_or_her> blushes and turns away.")
                Target.perversion += 0.1
            } else {
                narrative("<Target.He_or_She> didn't say a word but smiled at me. They definitely enjoyed what they saw.")
                Target.perversion += 0.3
            }
            scene.timeout(5, "rizean_cnc_dropFlirt")
        }
    })

})
module.exports = scene