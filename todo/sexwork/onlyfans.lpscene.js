// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\sexwork\onlyfans.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'onlyfans'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, hoursElapsed} = scene

    scene.what(["none"])
    scene.where(["none"])
    scene.when([0, 24])
    scene.who("none")
    scene.other("none")


    scene.start(() => {
        let Income = Player.getActorVar("OnlyFans")
        let Last = hoursElapsed
        let Factor = 0.5
        let Selfie = Factor * (Player.pornfame + Player.attractiveness) * random(0.7, 1.3)
        let IncomeConverted = Income.convertToLocalCurrency("true")
        let Actor = Player.getSelectedNPC()
        Income = Player.getActorVar("OnlyFans")
        if (Income == 0) {
            narrative(`I don't have an OnlyFans page yet. Set one up now?`)
            option([
                {text: `Yes`},
                {text: `No`},
            ])
            if (0) {
                narrative(`This is a good way to earn a stable monthly income.`)
                Player.setActorVar("OnlyFans", 100)
                scene.timeoutPrecise(720, "onlyfans")
                Last = hoursElapsed
                Player.setActorVar("OnlyFans_Last", Last)
            }
        } else {
            narrative(`I have an OnlyFans page`)
            Last = Player.getActorVar("OnlyFans_Last")
            Income *= 1 - (hoursElapsed - Last) / 4320


            Last = hoursElapsed
            Player.setActorVar("OnlyFans_Last", Last)


            Player.setActorVar("OnlyFans", Income)
            if (Income < 1000) {
                Factor = 0.5
            } else if (Income < 3000) {
                Factor = 1
            } else if (Income < 10000) {
                Factor = 0.3
            } else {
                Factor = 0.1
            }
            Selfie = Factor * (Player.pornfame + Player.attractiveness) * random(0.7, 1.3)
            IncomeConverted = Income.convertToLocalCurrency("true")
            narrative(`At the current number of subscriptions, I estimate that this month I will earn about <IncomeConverted> from OnlyFans.`)
            scene.option([
                {text: `Pay out this month's income`, condition: !scene.isTimingOut("onlyfans")},
                {text: `Make new content`},
                {text: `Quit OnlyFans`},
                {text: `Do nothing`},
            ])
            if (0) {
                narrative(`I received a bank transfer of <IncomeConverted> from OnlyFans within a few hours.`)
                Player.money = Player.money + Income
                scene.timeoutPrecise(720, "onlyfans")
            } else if (1) {
                narrative(`What kind of content should I make and upload to OnlyFans today?`)
                option([
                    {text: `A nude selfie`},
                    {text: `A solo SCENE`},
                    {text: `A sex SCENE`},
                ])
                if (0) {
                    Player.pornfame += 0.25
                    narrative(`A quick erotic selfie should do for now.`)
                    Player.animate("camera")
                    Player.strip()
                    narrative(`I took off my clothes`)
                    narrative(`And then took a selfie and uploaded it onto OnlyFans`)
                    Income += Selfie
                } else if (1) {
                    Player.pornfame += 0.5
                    narrative(`A masturbation video is easy to do but still enough to keep my subscribers happy.`)
                    scene.filter("Solo")
                    scene.sex(Player)
                    narrative(`Having recorded everything, I uploaded my solo session onto OnlyFans`)
                    Income += Selfie * 2
                } else {
                    narrative(`A sex SCENE takes a bit more effort, but it's the most popular thing for subscribers.`)
                    narrative(`Who should be my co-star though?`)
                    option([
                        {text: `Pick someone from my personal life`},
                        {text: `Collaborate with another OnlyFans creator`},
                    ])
                    if (0) {
                        Player.selectNPC()
                        Actor = Player.getSelectedNPC()
                        if (Actor.isValid() && Actor.hadSex() && Actor.isInterestedIn(Player) && Actor.perversion > 50) {
                            narrative(`<Actor.name> accepted my offer to co-star in my OnlyFans video.`)
                        } else {
                            narrative(`<Actor.name> turned down my offer. I should pick someone I've already had sex with and who is also quite open-minded sexually.`)
                            Actor.delete()
                        }
                    }


                    if (!Actor.isValid()) {
                        Actor = scene.generatePersonTemporary([])
                        while (!Player.isInterestedIn(Actor)) {
                            Actor = scene.generatePersonTemporary([])
                        }
                        narrative(`A fellow creator on OnlyFans, <Actor.name>, offered to be my co-star in this video. Once filming finishes, we each will receive all the footage and each of us will edit and upload our own video to our respective OnlyFans pages.`)
                    }


                    Actor.dress()
                    Actor.show()
                    narrative(`<Actor.name> is here, ready for the shoot. Should I go ahead with it?`)
                    option([
                        {text: `Yes`},
                        {text: `No`},
                    ])
                    if (0) {
                        Player.pornfame += 1
                        scene.sex(Player, Actor)
                        Income += Selfie * 3
                    }
                }
                Player.setActorVar("OnlyFans", Income)
            } else if (2) {
                narrative(`Am I sure that I want to delete my OnlyFans page? If someday I decide to come back to it, I would have to start from sratch all over again ...`)
                option([
                    {text: `Quit OnlyFans`},
                    {text: `No`},
                ])
                if (0) {
                    Player.setActorVar("OnlyFans", 0)
                }
            }
        }
    })
})
module.exports = scene