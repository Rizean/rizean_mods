// noinspection JSUnresolvedVariable
const {LPScene} = require('LifePlayjs')

const scene = new LPScene({name: 'rizean_testing_clothingTest'}, (scene) => {
    const {Player, CurrentCompanion, random, option, choice, isModEnabled, start, paren, WHAT, narrative} = scene
    scene.what([])
    scene.where([])
    scene.when([0, 24])
    scene.who('none')
    scene.other(($IF) => {
    })


    scene.start(() => {
        let isWearingUnderwear = Player.isSlotOccupied('Bottom_Under')
        let isNotWearingUnderwear = !Player.isEquipped('Bottom_Under')

        let isWearingTop = Player.isSlotOccupied('Top')
        let isWearingTopUnder = Player.isSlotOccupied('Top_Under')
        let isWearingTopAny = Player.isSlotOccupied('Top') || Player.isSlotOccupied('Top_Under')


        let isWearingBottoms = Player.isEquipped('Bottom') || Player.isEquipped('Bottom_Under')
        let isNotWearingBottoms = !isWearingBottoms


        let isWearingSkirt = Player.clothesContain('Skirt') || Player.clothesContain('Cheerleader')
        let isWearingDress = Player.clothesContain('Dress') //|| Player.clothesContain('Racing-Suit')

        narrative("isNotWearingUnderwear = <isNotWearingUnderwear>  isWearingSkirt = <isWearingSkirt>  isWearingDress = <isWearingDress>  isNotWearingBottoms = <isNotWearingBottoms>")
        let isGenitalsAccessible = isNotWearingUnderwear && (isWearingSkirt || isWearingDress || isNotWearingBottoms)
        narrative("isGenitalsAccessible = <isGenitalsAccessible>  isNotWearingUnderwear = <isNotWearingUnderwear>  isWearingSkirt = <isWearingSkirt>  isWearingDress = <isWearingDress>  isNotWearingBottoms = <isNotWearingBottoms>")


        let isWearingPants = Player.clothesContain('Jeans') || Player.clothesContain('Pants') || Player.clothesContain('Shorts') || Player.clothesContain('Leggings') || Player.clothesContain('Capris') || Player.clothesContain('Jumpsuit') || Player.clothesContain('Jumper')  || Player.clothesContain('Bodysuit')
        let isWearingShirt = Player.clothesContain('Shirt') || Player.clothesContain('Vest') || Player.clothesContain('Sweater') || Player.clothesContain('Blouse') || Player.clothesContain('Camisole') || Player.clothesContain('Croptop')
        let isWearingBikiniTop = Player.clothesContain('Bikini-Top') || Player.clothesContain('Bikini-Bra')
        let isWearingBikiniBottom = Player.clothesContain('Bikini-Bottom') || Player.clothesContain('Bikini-Panty')
        // let isWearingPanties = Player.clothesContain('Panties') || Player.clothesContain('Panty')

        let isBreastAccessible = !isWearingTopUnder && (isWearingShirt || !isWearingTopAny)

        // isVisible
        // Check if an actor is wearing any clothes in a certain 'slot'. Will return false if it's an underwear hidden under other clothes. The slots are:
        // Outerwear, Headwear, Eyewear, Top, Top_Under, Bottom, Bottom_Under, Foot, Foot_Under
        // maybe: Gag, Collar, Torso, Mask, Hood, Blindfold, Wrist, Neck, Ear, Finger, Handcuffs Shincuffs Thighcuffs Torso

        // isEquipped
        // Check if an actor is wearing any clothes in a certain 'slot'. Will return true even if it's an underwear hidden under other clothes. The slots are:
        // Outerwear
        // Headwear
        // Eyewear
        // Top
        // Top_Under
        // Bottom
        // Bottom_Under
        // Foot
        // Foot_Under
        let isUnderwearEquipped = Player.isEquipped('Bottom_Under')
        // Actor.isNude() - Check if the actor's Top, Top_Under, Bottom, Bottom_Under slots are all unoccupied
        // Actor.isNaked() - Check if the actor is completely without any clothes



        narrative("isWearingTop = <isWearingTop> isWearingTopUnder = <isWearingTopUnder>  isBreastAccessible = <isBreastAccessible>")
        narrative("isWearingTopAny = <isWearingTopAny>")

        let isWearingBottomUnder = Player.isSlotOccupied('Bottom_Under')
        let isWearingBottom = Player.isSlotOccupied('Bottom')
        // let isWearingBottoms = Player.isSlotOccupied('Bottom') || Player.isSlotOccupied('Bottom_Under')

        narrative("isWearingBottom = <isWearingBottom>  isWearingBottomUnder = <isWearingBottomUnder>  isWearingBottomAny = <isWearingBottomAny>")
        narrative("isWearingPants = <isWearingPants>")
        narrative("isWearingDress = <isWearingDress>  isWearingSkirt = <isWearingSkirt>")

    })

})
module.exports = scene
