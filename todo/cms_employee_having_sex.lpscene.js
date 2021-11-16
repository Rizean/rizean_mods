// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\business\cms_employee_having_sex.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'cms_employee_having_sex'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all"])
    scene.where(["alcohol:business"," bag:business"," bakery:business"," bar:business"," beauty:business"," beverages:business"," bicycle:business"," biergarten:business"," books:business"," butcher:business"," cafe:business"," car:business"," chemist:business"," cinema:business"," clothes:business"," coffee:business"," computer:business"," confectionery:business"," convenience:business"," copyshop:business"," cosmestics:business"," deli:business"," doityourself:business"," electronics:business"," fast_food:business"," florist:business"," furniture:business"," gift:business"," greengrocer:business"," hairdresser:business"," hotel:business"," ice_cream:business"," jewellery:business"," laundry:business"," mobile_phone:business"," motorcycle:business"," musical_instrument:business"," newsagent:business"," nightclub:business"," optician:business"," outdoor:business"," pet:business"," pharmacy:business"," photo:business"," pub:business"," restaurant:business"," seafood:business"," shoes:business"," sports:business"," sports_centre:business"," stationery:business"," supermarket:business"," tea:business"," theatre:business"," tobacco:business"," toys:business"," variety_store:business"," travel_agency:business"," art:business"," brothel:business"," stripclub:business"])
    scene.when([0, 24])
let Actor = scene.getSpecific("Employee")
    scene.who(($IF) => {
        Actor = scene.getSpecific("Employee")
        $IF(random(70, 500) < Actor.perversion)
    })
    scene.other("none")


    scene.start(() => {
let Actor2 = scene.generatePersonTemporary([])
            narrative(`Today I was reviewing the security type for my business when I came across a surprise ...`)
            Actor2 = scene.generatePersonTemporary([])
            scene.sex(Actor, Actor2)
            Actor.hide()
            Actor2.hide()
            narrative(`I caught on tape my employee <Actor.name> having a quickie with a customer in the storage room ...`)
            option([
                {text: `Fire <Actor.him_or_her>`},
                {text: `Sell video online`},
                {text: `Blackmail for sex`},
                {text: `Do nothing`},
                    ])
            if (0) {
                    Actor.removeEmployee()
                     Player.perversion  -= 1
                    Actor.rapportwithplayer -= 100
            } else if (1) {
                    narrative(`I imagine these types of videos will be in high demand for a secret cam fetish website.`)
                     Player.perversion  += 1
                     Player.money  += 50
            } else if (2) {
                     Player.perversion  += 5
                     Player.masochist  -=10
                    Actor.masochist += 10
                    Actor.perversion += 5
                    Actor.rapportwithplayer -= 10
                    Actor.dress()
                    Actor.show()
                    Actor.dialogue(`Alright ... I'll do it. I really need to keep this job ...`, `Sad`)
                    scene.sex(Player, Actor)
            }


    })
            scene.timeout(500, "cms_employee_having_sex")
})
module.exports = scene