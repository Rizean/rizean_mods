module.exports = function generateCNCActor(scene) {
    const {Player, random} = scene
    let cncActorIsMale = true
    if (Player.isInterestedInWomen() && Player.isInterestedInMen()) {
        if (random(0, 1) > 0) {
            cncActorIsMale = false
        }
    } else if (Player.isInterestedInWomen()) {
        cncActorIsMale = false
    }

    let CNCActor = scene.generatePersonTemporary(['fourties', 'bodybuilder'])
    CNCActor.dress()

    if (cncActorIsMale) {
        CNCActor.likes_vaginal = random(50, 100)
        CNCActor.fertility = random(5, 20)
    } else {
        CNCActor = scene.generatePersonTemporary(['fourties', 'bodybuilder_F'])
        CNCActor.likes_tribadism = random(50, 100)
        CNCActor.fertility = random(0, 2)
        CNCActor.stock_pill = random(5, 20)
    }

    CNCActor.masochist = random(-100, -20)
    CNCActor.likes_rough = random(50, 100)
    CNCActor.likes_anal = random(50, 100)
    CNCActor.likes_bondage = random(50, 100)
    CNCActor.prone_to_orgasm = random(50, 100)
    CNCActor.stock_rapedrug = random(5, 20)
    CNCActor.stock_condom = random(5, 20)
    return CNCActor
}