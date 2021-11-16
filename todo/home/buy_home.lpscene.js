// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\home\buy_home.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'buy_home'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["none"])
    scene.where(["none"])
    scene.when([0, 24])
    scene.who("none")
    scene.other("none")


    scene.start(() => {
        let Rent = Player.getRent()
        let Price = Rent * 120
        let PriceConverted = Price.convertToLocalCurrency("true")
        let Zero = 0
        narrative(`I have rented this place for a while and gotten used to calling it home. I think I can now afford to buy it for good.`)
        option([
            {text: `Enquire about purchase price`},
            {text: `Nothing wrong with renting`},
        ])
        if (0) {
            Rent = Player.getRent()
            Price = Rent * 120
            PriceConverted = Price.convertToLocalCurrency("true")
            narrative(`The landlord is prepared to sell the home at <PriceConverted>.`)
            option([
                {text: `Go for it`},
                {text: `That's too expensive`},
            ])
            if (0) {
                Player.money = Player.money - Price
                Zero = 0
                Zero.setRent()
                Player.setLandlord()
                narrative(`I now own my home ... It's a wonderful feeling and now I don't have to worry about paying rent each month.`)
                Player.mood += random(0, 100)
            }
        }
    })
})
module.exports = scene