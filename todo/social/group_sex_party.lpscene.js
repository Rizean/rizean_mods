// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\social\group_sex_party.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'group_sex_party'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, choice} = scene

    scene.what(["none"])
    scene.where(["none"])
    scene.when([0, 24])
    scene.who("none")
    scene.other(($IF) => {
        $IF()
    })


    scene.start(() => {
        let GoingAhead = true
        let Actor = Player.getSelectedNPC()
        let Actor2 = Player.getSelectedNPC()
        let Actor3 = Player.getSelectedNPC()
        let Actor4 = Player.getSelectedNPC()
        GoingAhead = true
        narrative(`First, I must decide who to invite`)
        while (!Actor.isValid() && GoingAhead) {
            narrative(`Who is the first person to invite?`)
            option([
                {text: `Someone I know`},
                {text: `Random stranger on Craiglist`},
                {text: `Forget this whole group sex party idea!`},
            ])
            if (0) {
                narrative(`Pick someone with high perversion or I've done sexual things with previously.`)
                Player.selectNPC()
                Actor = Player.getSelectedNPC()


                if (Actor.hadSex() || Actor.perversion > 50) {
                    narrative(`<Actor.name> accepted my invitation.`)
                } else {
                    narrative(`Unfortunately, <Actor.name> turned down my invitation.`)
                    Actor.delete()
                }


            } else if (1) {
                narrative(`What gender should I specifically look for in the Craiglist ad?`)
                option([
                    {text: `Male`},
                    {text: `Female`},
                    {text: `Trans`},
                ])
                Actor = scene.generatePersonTemporary([])
                while ((!Actor.isMale() && choice == 0) || (!Actor.isFemale() && choice == 1) || (!Actor.isTrans() && choice == 2)) {
                    Actor = scene.generatePersonTemporary([])
                }
                scene.secondScreen(Actor)
                Actor.show()
                narrative(`<Actor.name> responded to my ad and sent over a photo of <Actor.him_or_her> as requested.`)
                option([
                    {text: `Invite <Actor.name>`},
                    {text: `Look for someone else`},
                ])
                if (1) {
                    Actor.delete()
                }
                scene.secondScreen()
                Actor.hide()
            } else {
                GoingAhead = false
            }
        }


        while (!Actor2.isValid() && GoingAhead) {
            narrative(`Who is the second person to invite?`)
            option([
                {text: `Someone I know`},
                {text: `Random stranger on Craiglist`},
                {text: `Forget this whole group sex party idea!`},
            ])
            if (0) {
                narrative(`Pick someone with high perversion or I've done sexual things with previously.`)
                Player.selectNPC()
                Actor2 = Player.getSelectedNPC()


                if (Actor2.hadSex() || Actor2.perversion > 50) {
                    narrative(`<Actor2.name> accepted my invitation.`)
                } else {
                    narrative(`Unfortunately, <Actor2.name> turned down my invitation.`)
                    Actor2.delete()
                }


            } else if (1) {
                narrative(`What gender should I specifically look for in the Craiglist ad?`)
                option([
                    {text: `Male`},
                    {text: `Female`},
                    {text: `Trans`},
                ])
                Actor2 = scene.generatePersonTemporary([])
                while ((!Actor2.isMale() && choice == 0) || (!Actor2.isFemale() && choice == 1) || (!Actor2.isTrans() && choice == 2)) {
                    Actor2 = scene.generatePersonTemporary([])
                }
                scene.secondScreen(Actor2)
                Actor2.show()
                narrative(`<Actor2.name> responded to my ad and sent over a photo of <Actor2.him_or_her> as requested.`)
                option([
                    {text: `Invite <Actor2.name>`},
                    {text: `Look for someone else`},
                ])
                if (1) {
                    Actor2.delete()
                }
                scene.secondScreen()
                Actor2.hide()
            } else {
                GoingAhead = false
            }
        }


        while (!Actor3.isValid() && GoingAhead) {
            narrative(`Who is the third person to invite?`)
            option([
                {text: `Someone I know`},
                {text: `Random stranger on Craiglist`},
                {text: `Two guests are enough. Let's go ahead with the party.`},
            ])
            if (0) {
                narrative(`Pick someone with high perversion or I've done sexual things with previously.`)
                Player.selectNPC()
                Actor3 = Player.getSelectedNPC()


                if (Actor3.hadSex() || Actor3.perversion > 50) {
                    narrative(`<Actor3.name> accepted my invitation.`)
                } else {
                    narrative(`Unfortunately, <Actor3.name> turned down my invitation.`)
                    Actor3.delete()
                }


            } else if (1) {
                narrative(`What gender should I specifically look for in the Craiglist ad?`)
                option([
                    {text: `Male`},
                    {text: `Female`},
                    {text: `Trans`},
                ])
                Actor3 = scene.generatePersonTemporary([])
                while ((!Actor3.isMale() && choice == 0) || (!Actor3.isFemale() && choice == 1) || (!Actor3.isTrans() && choice == 2)) {
                    Actor3 = scene.generatePersonTemporary([])
                }
                scene.secondScreen(Actor3)
                Actor3.show()
                narrative(`<Actor3.name> responded to my ad and sent over a photo of <Actor3.him_or_her> as requested.`)
                option([
                    {text: `Invite <Actor3.name>`},
                    {text: `Look for someone else`},
                ])
                if (1) {
                    Actor3.delete()
                }
                scene.secondScreen()
                Actor3.hide()
            } else {
                GoingAhead = false
                scene.setBackgroundCustom("livingroom")


                Actor.dress()
                Actor.show()


                Actor2.dress()
                Actor2.show()


                narrative(`My guests showed up to the party and after a little bit of mingle, we got down to business.`)
                scene.sex(Player, Actor, Actor2)
            }
        }


        while (!Actor4.isValid() && GoingAhead) {
            narrative(`Who is the fourth person to invite?`)
            option([
                {text: `Someone I know`},
                {text: `Random stranger on Craiglist`},
                {text: `Three guests are enough. Let's go ahead with the party.`},
            ])
            if (0) {
                narrative(`Pick someone with high perversion or I've done sexual things with previously.`)
                Player.selectNPC()
                Actor4 = Player.getSelectedNPC()


                if (Actor4.hadSex() || Actor4.perversion > 50) {
                    narrative(`<Actor4.name> accepted my invitation.`)
                } else {
                    narrative(`Unfortunately, <Actor4.name> turned down my invitation.`)
                    Actor4.delete()
                }


            } else if (1) {
                narrative(`What gender should I specifically look for in the Craiglist ad?`)
                option([
                    {text: `Male`},
                    {text: `Female`},
                    {text: `Trans`},
                ])
                Actor4 = scene.generatePersonTemporary([])
                while ((!Actor4.isMale() && choice == 0) || (!Actor4.isFemale() && choice == 1) || (!Actor4.isTrans() && choice == 2)) {
                    Actor4 = scene.generatePersonTemporary([])
                }
                scene.secondScreen(Actor4)
                Actor4.show()
                narrative(`<Actor4.name> responded to my ad and sent over a photo of <Actor4.him_or_her> as requested.`)
                option([
                    {text: `Invite <Actor4.name>`},
                    {text: `Look for someone else`},
                ])
                if (1) {
                    Actor4.delete()
                }
                scene.secondScreen()
                Actor4.hide()
            } else {
                GoingAhead = false
                scene.setBackgroundCustom("livingroom")


                Actor.dress()
                Actor.show()


                Actor2.dress()
                Actor2.show()


                Actor3.dress()
                Actor3.show()


                narrative(`My guests showed up to the party and after a little bit of mingle, we got down to business.`)
                scene.sex(Player, Actor, Actor2, Actor3)
            }
        }


        if (GoingAhead) {
            scene.setBackgroundCustom("livingroom")


            Actor.dress()
            Actor.show()


            Actor2.dress()
            Actor2.show()


            Actor3.dress()
            Actor3.show()


            Actor4.dress()
            Actor4.show()


            narrative(`My guests showed up to the party and after a little bit of mingle, we got down to business.`)
            scene.sex(Player, Actor, Actor2, Actor3, Actor4)
        }


    })
})
module.exports = scene