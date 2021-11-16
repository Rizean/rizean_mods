const $IF = (rhs) => {
   //rhs.writeLine(`If ${rhs.expression || rhs}`)
   rhs.write(`If `)
}

module.exports = (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene
    const drop_flirt_base = scene.lpMod.getFunction('drop_flirt_base', "drop_flirt_base")
    scene.what(["none"])
    scene.where(["none"])
    scene.when([0, 24])
    scene.who("none")
    scene.other("none")
    scene.start(() => {
        let Target = Player.getTarget("Target")
        let growthRate = scene.float(1.035, "growthRate")
        let intoxicationBonus = growthRate.power(Player.intoxication, "intoxicationBonus")
        let arousalBonus = growthRate.power(Player.arousal, "arousalBonus")
        let targetIntoxicationBonus = growthRate.power(Target.intoxication, "targetIntoxicationBonus")
        let willpower = Player.energy.div(100).mul(Player.intelligence, "willpower")
        let isPublic = $WHERE.ne('Home').or($WHERE.ne('residential'), "isPublic")
        let publicScore = scene.float(5, "publicScore")
        scene.$if(isPublic, () => {
            publicScore.assign(-5, "publicScore")
        }).$endIf()
        let targetPerversionScore = Target.perversion.add(targetIntoxicationBonus).sub(Target.masochist).add(publicScore, "targetPerversionScore")
        let targetWillForce = targetPerversionScore.gt(150, "targetWillForce")
        scene.$if(targetWillForce, () => {
Target.likes_rough.addEq(            random(25, 100))
Target.likes_vaginal.addEq(            random(25, 100))
Target.likes_anal.addEq(            random(25, 100))
Target.prone_to_orgasm.addEq(            random(25, 100))
        }).$endIf()
        let playerSubmissiveScore = Player.masochist.add(intoxicationBonus, "playerSubmissiveScore")
        let playerPerversionScore = Player.perversion.add(Player.masochist).add(intoxicationBonus, "playerPerversionScore")
        let isWearingUnderwear = Player.isEquipped('Bottom_Under', "isWearingUnderwear")
        let isWearingBra = Player.isEquipped('Top').and(Player.isEquipped('Top_Under'), "isWearingBra")
        narrative("I let me phone 'accidentally' slide out of my hand.")
        Player.dialogue("Opps...", 'Flirty')
        narrative("I bend over to pick it up making sure <Target.he_or_she> has a 'good' view.")
        scene.$if(targetPerversionScore.gte(100), function () {
            drop_flirt_base({scene, Target, targetWillForce, targetPerversionScore, growthRate, arousalBonus, playerPerversionScore, isWearingUnderwear, isWearingBra, willpower, isPublic})
        }).$else(function () {
            narrative("I catch <Target.him_or_her> checking my butt out.")
Target.attractionToPlayer.addEq(0.5)
            scene.$if(targetPerversionScore.lt(50), function () {
                narrative("<Target.him_or_her> blushes and turns away.")
Target.perversion.addEq(0.1)
            }).$else(function () {
                narrative("<Target.He_or_She> didn't say a word but smiled at me. They definitely enjoyed what they saw.")
Target.perversion.addEq(0.3)
            }).$endIf()
            scene.timeout(5, "rizean_cnc_dropFlirt")
        }).$endIf()
    })
}