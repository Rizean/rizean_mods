// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Corruption\Scenes\free_rent.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'free_rent'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all"])
    scene.where(["home"])
    scene.when([8, 22])
    let Actor = scene.getSpecific("Landlord")
    scene.who(($IF) => {
        Actor = scene.getSpecific("Landlord")
        $IF(Actor.isInterestedIn(Player) && (Actor.perversion > 70 || Actor.attractionToPlayer > 40 || Actor.hadSex()))
    })
    scene.other(($IF) => {
        $IF()
    })


    scene.start(() => {
        let Zero = 0
        let CurrentRent = Player.getRent()
        Actor.dress()
        Actor.show()
        Zero = 0
        CurrentRent = Player.getRent()
        narrative(`My perverted <Actor.landlord_or_landlady> is offering to forgo this month's rent payment if I sleep with <Actor.him_or_her> ...`)
        option([
            {text: `Yes`},
            {text: `No`},
        ])
        if (0) {
            narrative(`It's just sex, one night with the <Actor.him_or_her> and I can save so much money!`)
            Player.perversion += 2
            scene.sex(Actor, Player)
            if (CurrentRent > 0) {
                scene.setGlobal(`SavedRent`, `CurrentRent`)
                Zero.setRent()
            }
        } else {
            narrative(`I'd rather pay with money ...`)
            if (CurrentRent == 0) {
                CurrentRent = scene.getGlobal(`SavedRent`)
                CurrentRent.setRent()
            }
        }
    })
    scene.timeoutPrecise(672, "free_rent")
})
module.exports = scene