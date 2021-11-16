// noinspection JSUnresolvedVariable
const {LPScene} = require('LifePlayjs')

const scene = new LPScene({name: 'rizean_testing_soloAnimations'}, (scene) => {
    const {Player, CurrentCompanion, random, option, choice, isModEnabled, start, paren, WHAT, narrative} = scene
    scene.what([])
    scene.where([])
    scene.when([0, 24])
    scene.who('none')
    scene.other(($IF) => {
    })

    scene.start(() => {
        option([
            {text: 'Basic Anywhere'},
            {text: 'Solo but triggers other actors'},
            {text: 'Testing Group 2'},
            {text: 'Testing Group 3'},
            {text: 'Testing Group 4'},
            {text: 'Location with bed'},
            {text: 'Location with exercise equipment'},
            {text: 'Location with bathe'},
            {text: 'Location with sofa'},
            {text: 'Location strip club'},
            {text: 'No work'},
            {text: 'Exit'}
        ])

        if (0) {
            narrative("dance")
            Player.animate('dance')
            narrative("camera")
            Player.animate('camera')
            narrative("drinktea")
            Player.animate('drinktea')
            narrative("fightlost")
            Player.animate('fightlost')
            narrative("sneak")
            Player.animate('sneak')
            narrative("gun")
            Player.animate('gun')
            narrative("martialart")
            Player.animate('martialart')
            narrative("knockedout")
            Player.animate('knockedout')
            narrative("eat")
            Player.animate('eat')
            narrative("drinkglass")
            Player.animate('drinkglass')
            narrative("drinkbottle")
            Player.animate('drinkbottle')
            narrative("call")
            Player.animate('call')
            narrative("makeup")
            Player.animate('makeup')
            narrative("smoke")
            Player.animate('smoke')
            narrative("sweep")
            Player.animate('sweep')
            narrative("write")
            Player.animate('write')
            narrative("idle")
            Player.animate('idle') // robotic
            narrative("browse")
            Player.animate('browse')

            narrative("work, make actor move around and socialize?")
            Player.animate('work')

            narrative("socialize, causes actor to sit? near others?")
            Player.animate('socialize')
        }
        else if (1) {
            narrative("groupdance, will trigger other actors")
            Player.animate('groupdance')
        }
        else if (2) {


            narrative("dance reset")
            Player.animate('dance') // robotic

            narrative("health")
            Player.animate('health, location with medical? chair') // does nothing
            narrative("dental, location with dental chair")
            Player.animate('dental') // does nothing
            narrative("beauty")
            Player.animate('beauty') // does nothing
            narrative("theatrewatch, sit and watch in theatre")
            Player.animate('theatrewatch')
        } else if (3) {
            narrative("lecture")
            Player.animate('lecture')
        } else if (4) {
            Player.animate('Fingering')


        } else if (5) {
            narrative("Location with bed")
            narrative("na_sleep")
            Player.animate('na_sleep')
            narrative("Masturbate, teleports to bed but does not teleport camera")
            Player.animate('Masturbate')
        } else if (6) {
            narrative("yoga, gym makes actor exercise")
            Player.animate('yoga')
            narrative("na_running, gym, makes actor exercise sorta")
            Player.animate('na_running')
            narrative("weights, gym, makes actor exercise sorta")
            Player.animate('weights')
        } else if (7) {
            narrative("bathe, teleports to bathe")
            Player.animate('bathe')
        } else if (8) {
            narrative("sofawatch, teleports to sofa")
            Player.animate('sofawatch') // works
        } else if (9) {
            narrative("strip location must be open")
            Player.animate('strip')
            narrative("receivelapdance, works at strip club")
            Player.animate('receivelapdance')
        } else if (10) {
            narrative("All failed")
            narrative("RubBoobs")
            Player.animate('RubBoobs')
            narrative("Vibrator")
            Player.animate('Vibrator')
            narrative("F_vibrator01")
            Player.animate('F_vibrator01')
            narrative("F_vibrator02")
            Player.animate('F_vibrator02')
            narrative("walk")
            Player.animate('walk')
            narrative("SM_Stand_0")
            Player.animate('SM_Stand_0')
            narrative("quick_walK")
            Player.animate('quick_walK')
            narrative("AgFingering_F")
            Player.animate('AgFingering_F')

            narrative("standing")
            Player.animate('standing') // no work / causes player to sit?
            narrative("sitting")
            Player.animate('sitting') // no work
        }

        narrative("--- Done")
    })

})
module.exports = scene
