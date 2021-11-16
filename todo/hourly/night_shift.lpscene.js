// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\hourly\night_shift.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'night_shift'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["work_hourly"])
    scene.where(["alcohol", " bag", " bar", " beverages", " bicycle", " books", " chemist", " clothes", " computer", " confectionery", " convenience", " copyshop", " cosmestics", " deli", " department_store", " doityourself", " electronics", " fast_food", " furniture", " gift", " greengrocer", " jewellery", " mobile_phone", " musical_instrument", " newsagent", " outdoor", " photo", " pub", " shoes", " sports", " stationery", " supermarket", " tea", " tobacco", " toys", " variety_store"])
    scene.when([21, 4])
    let Actor = scene.getPersonHere("true")
    scene.who(($IF) => {
        $IF(Actor = scene.getPersonHere("true"))
    })
    scene.other(($IF) => {
        $IF()
    })


    scene.start(() => {
        let Work = Actor.getBuilding("work")
        let Cur = Actor.getBuilding("current")
        Work = Actor.getBuilding("work")
        Cur = Actor.getBuilding("current")
        if (Work.isSameBuilding(Cur)) {
            narrative(`I'm working the night shift today. Thankfully, my workmate <Actor.name> was there to keep me company.`)
            Actor.rapportwithplayer += 2
            Actor.attractionToPlayer += 2
            if (Actor.isInterestedIn(Player) && (Actor.perversion > 50 || Actor.attractionToPlayer > 50 || Actor.hadSex())) {
                Actor.dialogue(`This is sooo boring! Let's sneak into the back storage and fuck, what do you say?`)
                option([
                    {text: `Yes`},
                    {text: `No`},
                ])
                if (0) {
                    scene.sex(Player, Actor)
                }
            }
        } else {
            narrative(`I'm working the night shift today. It's boring as hell.`)
            Player.mood -= 2
        }
    })
    scene.timeout(100, "night_shift")


})
module.exports = scene