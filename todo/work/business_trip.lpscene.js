// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\work\business_trip.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'business_trip'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["work"])
    scene.where(["work"])
    scene.when([7, 11])
    scene.who("none")
    scene.other(($IF) => {
        $IF(random(0, 100) < 0.05 * Player.jobperformance)
    })


    scene.start(() => {
        let Boss = scene.getSpecific("Boss")
        scene.setBackground("work")
        Boss = scene.getSpecific("Boss")
        Boss.dress()
        Boss.show(2)
        narrative(`I'm going on a business trip out of town with my boss <Boss.name> for a few days. It's a good experience to have.`)
        Player.jobexperience += random(0, 0.5)
        narrative(`The last night of the trip ...`)
        scene.setBackground("hotel")
        narrative(`We're back in the local hotel after many exhausting meetings that day in town. I should go back to my room and rest, ready to head back home in the morning.`)
        scene.setBackground("home")
        Boss.hide()
        if (Boss.isDating() || (Boss.isInterestedIn(Player) && Boss.attractionToPlayer + Boss.perversion > random(0, 100))) {
            narrative(`About to go to sleep, I heard a knock on my door ...`)
            Boss.show(2)
            Boss.dialogue(`<Player.name>, can I come in ... for tea?`, `Flirty`)
            narrative(`It's obvious that <Boss.name> wants a hell lot more than tea. Should I invite <Boss.him_or_her> in though? Once <Boss.he_or_she> is inside, I can't really say no ...`)
            option([
                {text: `Invite <Boss.him_or_her> in`},
                {text: `Turn <Boss.him_or_her> down`},
            ])
            if (0) {
                narrative(`I invited <Boss.him_or_her> in. Needless to say, we ended up spending the night together.`)
                scene.sex(Boss, Player)
                Player.perversion += random(0, 0.5)
                Boss.attractionToPlayer += random(0, 3)
            } else {
                Player.dialogue(`I'm sorry, but I'm already about to go to bed. See you tomorrow morning though!`, `Irritated`)
                Boss.attractionToPlayer -= random(0, 3)
            }
        } else {
            narrative(`Exhausted, I fell asleep quickly.`)
        }


        scene.setBackground("work")
        Boss.show(2)
        narrative(`The next morning, we had breakfast at the hotel before traveling back to the office.`)


    })
    scene.timeout(200, "business_trip")
})
module.exports = scene