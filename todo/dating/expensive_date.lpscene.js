// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\dating\expensive_date.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'expensive_date'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, CurrentCompanion} = scene

    scene.what(["all"])
    scene.where(["all"])
    scene.when([17, 21])
    scene.who("none")
    scene.other(($IF) => {
        $IF(Player.isWithCompanion() && CurrentCompanion.isDating() && CurrentCompanion.isDominantSex(Player) && random(0, 1000) < CurrentCompanion.attractionToPlayer + CurrentCompanion.intelligence + CurrentCompanion.interpersonal)
    })


    scene.start(() => {
        let Loc = scene.findNearbyBuilding("restaurant")
        CurrentCompanion.show(2)
        Loc = scene.findNearbyBuilding("restaurant")
        Player.moveTo(Loc)


        narrative(`<CurrentCompanion.name> is so sweet - <CurrentCompanion.he_or_she> took me to a very expensive restaurant in town for dinner. <CurrentCompanion.He_or_She> doesn't earn a lot, so this dinner must have cost a fortune for <CurrentCompanion.him_or_her>.`)
        option([
            {text: `Show my appreciation`},
            {text: `Say it was a waste`},
        ])
        if (0) {
            narrative(`I thanked <CurrentCompanion.name> for taking me out to such a nice place even though it must have cost <CurrentCompanion.him_or_her> quite a bit of savings.`)
            option([
                {text: `Thank <CurrentCompanion.name> with sex`},
                {text: `End the dinner`},
            ])
            if (0) {
                Player.karma += 2.5
                Player.moveTo("Home")
                narrative(`I think <CurrentCompanion.name> deserves something more than a simple thank-you ... I invited <CurrentCompanion.him_or_her> home after dinner. <CurrentCompanion.He_or_She> knew exactly what I was offering ...`)
                CurrentCompanion.attractionToPlayer += random(0, 2)
                scene.sex(CurrentCompanion, Player)
                CurrentCompanion.show(2)
                CurrentCompanion.dialogue(`Oh baby, I should take you out a lot more often if this is my reward!`, `Flirty`)
            } else {
                narrative(`We finished the fancy dinner and continued our date.`)
            }
        } else {
            narrative(`I told <CurrentCompanion.him_or_her> it was pretentious to dine at a restaurant so out of our budget and that <CurrentCompanion.name> shouldn't have wasted <CurrentCompanion.his_or_her> money like that.`)
            CurrentCompanion.attractionToPlayer -= random(0, 2)
        }


        scene.timeout(500, "expensive_date")
    })
})
module.exports = scene