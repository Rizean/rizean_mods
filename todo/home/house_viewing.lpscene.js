// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\home\house_viewing.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'house_viewing'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, costOfLiving, choice} = scene

    scene.what(["none"])
    scene.where(["none"])
    scene.when([0, 24])
    scene.who("none")
    scene.other("none")


    let Difficulty = random(0.25, 2)
    Difficulty = random(0.25, 2)
    let Salary = Player.getSalary()
    Salary = Player.getSalary()
    let Rent = random(800, 1500) * costOfLiving + Difficulty * Salary * 0.25
    Rent = random(800, 1500) * costOfLiving + Difficulty * Salary * 0.25
    let RentConverted = Rent.convertToLocalCurrency("true")
    RentConverted = Rent.convertToLocalCurrency("true")


    scene.start(() => {
        let Landlord = scene.generatePerson()
        let choice = 2
        let Knowledge = false
        let Charm = false
        let Seduce = false
        let LoweredPrice = false
        let Bought = false
        let Vanilla = scene.isModEnabled("vin_VanillaRealistic")
        let Price = Rent * 120
        let PriceConverted = Price.convertToLocalCurrency("true")
        let Zero = 0


        narrative(`Looking for a new place to live, I discovered a nice place that might just fit my budget. The rent per month being advertised, including utility bills, is around <RentConverted>. However, I reckon I can try to negotiate that down.`)
        if (Rent > Salary * 0.7) {
            narrative(`I'm not entirely sure if this is really affordable considering my current financial situation.`)
        } else {
            narrative(`This rent seems reasonable and might just fit in my budget.`)
        }


        narrative(`Should I arrange for a viewing?`)
        option([
            {text: `Yes`},
            {text: `No`},
        ])
        if (0) {
            Landlord = scene.generatePerson()
            Landlord.dress()
            Landlord.show(2)
            Landlord.dialogue(`So that's the apartment. It's available for just <RentConverted> a month, including bills. You won't get a better deal anywhere else! What do you think? Are you going to go for it? I can prepare the lease contract right away.`, `Excited`)
            choice = 2
            Knowledge = false
            Charm = false
            Seduce = false
            LoweredPrice = false
            Bought = false
            Vanilla = scene.isModEnabled("vin_VanillaRealistic")


            while (choice > 1) {
                narrative(`What should I do?`)
                option([
                    {text: `Sign the lease`},
                    {text: `Look elsewhere`},
                    {text: `Use your knowledge to negotiate`, condition: !Knowledge && !Seduce},
                    {text: `Use your charm to haggle`, condition: !Charm && !Seduce},
                    {text: `Use your sex appeal`, condition: !Seduce},
                    {text: `Offer to buy`, condition: !Bought},
                ])
                if (0) {
                    narrative(`I decided to sign the lease at the current rent. It wasn't too bad a deal after all.`)
                    Player.moveHome()
                    Landlord.setLandlord()
                    Rent.setRent()
                    if (scene.tfGame() && Player.isMale()) {
                        scene.followUp("tf_afterlandlord")
                    }
                } else if (1) {
                    narrative(`It was too expensive at this current rent so I had no choice but to look elsewhere. I thanked the landlord for his time and left.`)
                } else if (5) {
                    Bought = true
                    Player.dialogue(`Actually, I think I can afford to buy the home outright.`, `Happy`)
                    Price = Rent * 120
                    PriceConverted = Price.convertToLocalCurrency("true")
                    Landlord.dialogue(`Oh really? You know what: I'm prepared to sell it to you at <PriceConverted>.`, `Surprised`)
                    option([
                        {text: `Go for it`},
                        {text: `That's too expensive`},
                    ])
                    if (0) {
                        Player.moveHome()
                        Player.money = Player.money - Price
                        Zero = 0
                        Zero.setRent()
                        Player.setLandlord()
                        narrative(`I now own my home ... It's a wonderful feeling and now I don't have to worry about paying rent each month.`)
                        Player.mood += random(0, 100)
                        if (scene.tfGame() && Player.isMale()) {
                            scene.followUp("tf_afterlandlord")
                        }
                    } else {
                        choice = 5
                    }
                } else if (2 && random(0, 100) * Difficulty < Player.intelligence) {
                    narrative(`I used my research about the market rate of rent in the surrounding area to show the landlord that I had alternatives.`)
                    Rent /= 1.1
                    RentConverted = Rent.convertToLocalCurrency("true")
                    Landlord.dialogue(`Alright, alright. You're a smart cookie - you should become a landlord yourself someday. How about <RentConverted> a month? That's surely lower than the going rate around.`, `Sarcastic`)
                    Knowledge = true
                } else if (3 && random(0, 100) * Difficulty < Player.interpersonal) {
                    narrative(`I used all my smooth talking to charm the landlord into giving me a discount.`)
                    Rent /= 1.1
                    RentConverted = Rent.convertToLocalCurrency("true")
                    Landlord.dialogue(`Okay then, you seems like a nice enough person. I can give you the apartment for just <RentConverted> a month, but you'd better not tell my other tenants about it.`, `Happy`)
                    Charm = true
                } else if (4 && Landlord.isInterestedIn(Player) && Landlord.perversion + Landlord.attractionToPlayer > random(0, 100) * Difficulty) {
                    narrative(`I flirted with the landlord while trying to look as sexy as possible. <Landlord.He_or_She> seemed receptive to my advances.`)
                    Rent /= 1.1
                    RentConverted = Rent.convertToLocalCurrency("true")
                    Landlord.dialogue(`Okay, just for a good-looking tenant like you, I can drop the rent to <RentConverted> a month. But that's the lowest I'm going to go today ...`, `Flirty`)
                    Seduce = true
                    if (Landlord.isDominantSex(Player) && Landlord.perversion > random(30, 100)) {
                        Landlord.dialogue(`... unless you want to use that sexy mouth of yours for something better than negotiating`, `Flirty`)
                        option([
                            {text: `No`},
                            {text: `Fuck <Landlord.him_or_her>`, condition: Vanilla && Player.perversion > 20},
                        ])
                        if (0) {
                            Player.dialogue(`I'm not doing that! Not in a million years.`, `Angry`)
                            Landlord.dialogue(`Oh well, I'm not forcing anything on you. It was you who flirted with me first. I simply got the wrong signal, don't mind me.`, `Flirty`)
                        } else {
                            Player.dialogue(`You'd better give me one hell of a deal for this ...`, `Flirty`)
                            scene.sex(Landlord, Player)
                            Landlord.show(2)
                            Player.perversion += random(0, 1.5)
                            Rent /= 1.2
                            RentConverted = Rent.convertToLocalCurrency("true")
                            Landlord.dialogue(`Well, now that we've got to know each other on a more ... personal level, you can have the apartment for just <RentConverted>. Trust me, I never gave anyone such a good offer in all my years.`, `Flirty`)
                        }
                    } else {
                        option([
                            {text: `Thank <Landlord.him_or_her>`},
                            {text: `Offer sex`, condition: Vanilla && Player.perversion > 30},
                        ])
                        if (1) {
                            Player.dialogue(`Surely you can change your mind and go even lower if I go down on you?`)
                            if (scene.tfGame() && Landlord.isMale()) {
                                narrative(`When I was a man I used to hold the moral high ground and somewhat looked down on women who use their bodies to get advantages in life. Here I am, offering my body in exchange of rent discount. I'm such a hypocrite after all.`)
                            }
                            if (Landlord.perversion > random(20, 100)) {
                                Landlord.dialogue(`Oh? If that's on offer, then yes, perhaps I can change my mind indeed`, `Flirty`)
                                scene.sex(Landlord, Player)
                                Landlord.show(2)
                                Player.perversion += random(0, 2)
                                Rent /= 1.2
                                RentConverted = Rent.convertToLocalCurrency("true")
                                Landlord.dialogue(`Well, now that we've got to know each other on a more ... personal level, you can have the apartment for just <RentConverted>. Trust me, I never gave anyone such a good offer in all my years.`, `Flirty`)
                            } else {
                                Landlord.dialogue(`What? Who do you take me for? I'm running a serious business, not a brothel. I already told you it's the lowest I could go for the rent. Take it or leave it!`, `Angry`)
                            }
                        }
                    }
                    choice = 4
                } else {
                    Landlord.dialogue(`I already told you this is the best deal I can give you.`, `Annoyed`)
                    narrative(`My negotiations failed miserably. All it did was annoying the landlord. I probably shouldn't try to haggle more, or <Landlord.he_or_she> will refuse to even rent me the apartment.`)
                    Seduce = true
                }
            }
        } else {
            narrative(`I decided not to arrange a viewing with the landlord. This isn't really suitable accommodation for me right now.`)
        }


        scene.passTime(0.5, 1.5)
    })


})
module.exports = scene