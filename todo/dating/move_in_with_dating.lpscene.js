// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\dating\move_in_with_dating.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'move_in_with_dating'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, CurrentCompanion} = scene

    scene.what(["all"])
    scene.where(["home"])
    scene.when([0, 24])
    scene.who("none")
    scene.other(($IF) => {
        $IF(Player.playerHasHome() && Player.datingHasHome() && Player.isWithCompanion() && CurrentCompanion.isDating() && (Player.isPlayerMarried() || CurrentCompanion.attractionToPlayer > 40))
    })


    scene.start(() => {


        CurrentCompanion.show(2)
        if (Player.isPlayerMarried()) {
            CurrentCompanion.dialogue(`Baby, now that we're married: Why don't you move in to live with me? Surely as a married couple, we must live together ...`, `Happy`)
        } else {
            CurrentCompanion.dialogue(`Baby, I was just thinking: Why don't you move in to live with me? I think our relationship is at the stage where we could move on to the next level by living together ...`, `Happy`)
        }
        narrative(`Start living together?`)
        option([
            {text: `Yes`},
            {text: `No`},
            {text: `Ask <CurrentCompanion.name> to move in instead`},
        ])
        if (0) {
            narrative(`I accepted <CurrentCompanion.name>'s offer. It would be a good experience living together. Besides, I can save quite a bit of money on rent.`)
            Player.loseHome()
            CurrentCompanion.attractionToPlayer += random(0, 10)
        } else if (1) {
            narrative(`I turned down <CurrentCompanion.name>'s offer.`)
            CurrentCompanion.attractionToPlayer -= random(0, 2)
        } else {
            narrative(`Actually, I think it's more appropriate that <CurrentCompanion.name> moves in with me instead. After a short discussion, <CurrentCompanion.he_or_she> accepted my offer.`)
            Player.loseHomeDating()
        }


        scene.timeout(500, "move_in_with_dating")
    })
})
module.exports = scene