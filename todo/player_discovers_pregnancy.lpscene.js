// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Pregnancy\Scenes\player_discovers_pregnancy.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'player_discovers_pregnancy'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, choice} = scene

    scene.what(["none"])
    scene.where(["none"])
    scene.when([0, 24])
    scene.who("none")
    scene.other("none")


    scene.start(() => {
        let Actor = scene.getSpecific("CurrentBabyDaddy")
        let Surrogate = Actor.getActorVar("tag_Surrogate")
        let Actor2 = scene.getSpecific("PotentialBabyDaddy")
        let Actor3 = scene.getSpecific("PotentialBabyDaddy")
        let Actor4 = scene.getSpecific("PotentialBabyDaddy")
        let Actor5 = scene.getSpecific("PotentialBabyDaddy")
        let Surrogated = scene.getGlobal(`Surrogate`)
        let Rape = Player.getPregnancyTag()
        let Dating = scene.getSpecific("Dating")
        let SurrogatedC = Surrogated.convertToLocalCurrency("true")
        let Told = Actor
        let ConRel = Player
        narrative(`It's been a while since I have had a period. I'm also quite prone to vomiting recently ...`)
        option([
            {text: `Test for pregnancy`},
        ])
        scene.setBackground("hospital")
        narrative(`It's official: I'm pregnant!`)
        if (Player.wantsBabies()) {
            narrative(`I've been trying for a baby for a while, and I finally succeeded! I can't wait to become a mother.`)
            Player.setWantsBabies("false")
        } else {
            narrative(`It's a strange feeling - I don't know if I should feel excited or terrified.`)
        }
        if (scene.tfGame()) {
            narrative(`I stare at the test in blank incomprehension, the results of my test not quite making sense to my ears. I’m pregnant. I have life inside me now. It will grow into an entirely new person. I will be a mother. If there was any doubt remaining in the back of my mind that I was truly a woman, this just smashed it like a hammer. I am pregnant. This is real.`)
        }
        Actor = scene.getSpecific("CurrentBabyDaddy")


        if (Actor.isCreature()) {
            narrative(`The DNA test results baffled all the doctors. While the child is expected to be born healthy and normal, it apparently shares some non-human DNA. The doctors didn't suspect much though, even apologizing for what must have been an error in their testing process.`)
            Actor.show(2)
            narrative(`Of course, I know better: the baby is no doubt the result of my pleasurable bestial adventures with <Actor.name>. I've been thoroughly bred like a bitch in heat, filled up with thick animal cum and this swollen belly is the outcome.`)
        } else {
            Surrogate = Actor.getActorVar("tag_Surrogate")
            Actor2 = scene.getSpecific("PotentialBabyDaddy")
            Actor3 = scene.getSpecific("PotentialBabyDaddy")
            Actor4 = scene.getSpecific("PotentialBabyDaddy")
            Actor5 = scene.getSpecific("PotentialBabyDaddy")
            Surrogated = scene.getGlobal(`Surrogate`)
            Rape = Player.getPregnancyTag()
            if (Rape.isString("Aggressive") && !Actor.isDating()) {
                Dating = scene.getSpecific("Dating")
                narrative(`Unfortunately, the DNA results clearly suggest that the father of the child is <Actor.name>, who sexually assaulted me.`)
                narrative(`This pregnancy was the result of rape ...`)
                narrative(`What should I do?`)
                option([
                    {text: `Abortion`},
                    {text: `Tell <Dating.name> I was raped, and the child is innocent`, condition: Dating.isValid()},
                    {text: `Beg my rapist for a relationship and to raise the child together`},
                    {text: `Do nothing, the baby's mine no matter what`},
                ])
                if (0) {
                    narrative(`It wasn't an easy decision, but out of all the reasons for abortions, rape is one of most valid ones.`)
                    Player.strip()
                    Player.endPregnancy()
                    narrative(`Thankfully the procedure went according to plans, with no lasting impact on my future health and fertility.`)
                } else if (1) {
                    Dating.dress()
                    Dating.show()
                    narrative(`I told <Dating.name> the truth and tried to convince <Dating.him_or_her> that the child was innocent`)
                    if (Dating.attractionToPlayer > 40 || Dating.masochist > 0 || Player.openRelationship()) {
                        narrative(`<Dating.name> comforted me and assured me that <Dating.he_or_she> will treat child as <Dating.his_or_her> own.`)
                        Dating.attractionToPlayer += 10
                        Dating.setActorVar("tag_DaddyKnows", 2)
                    } else {
                        narrative(`<Dating.name> was shocked about what I told <Dating.him_or_her> and didn't seem to fully believe that it was rape.`)
                        narrative(`<Dating.He_or_She> gave me an ultimatum: abort the child or <Dating.he_or_she> will break up with me ...`)
                        Dating.attractionToPlayer -= 10
                        narrative(`What should I do?`)
                        option([
                            {text: `Abort the child to save our relationship`},
                            {text: `Keep the child and break up with <Dating.name>`},
                        ])
                        if (0) {
                            Player.masochist += 3
                            narrative(`It wasn't an easy decision, but out of all the reasons for abortions, rape is one of most valid ones.`)
                            Player.strip()
                            Player.endPregnancy()
                            narrative(`Thankfully the procedure went according to plans, with no lasting impact on my future health and fertility.`)
                        } else {
                            Player.masochist -= 3
                            narrative(`I decided to sacrifice the relationship to save a life ...`)
                            Player.loseDating()
                        }
                    }
                } else if (2) {
                    Player.masochist += 5
                    narrative(`Most people would say I'm crazy for returning to my abuser, but this pregnancy leaves me no choice ...`)
                    scene.setBackground("home")
                    Actor.dress()
                    Actor.show()
                    narrative(`I asked <Actor.name> to meet me in a hotel room. <Actor.He_or_She> was delighted, of course, and before I could say anything, <Actor.his_or_her> hands were all over me again ...`)
                    Actor.dialogue(`I knew deep inside you enjoyed that night. I always knew you would come back for more ...`)
                    scene.sex(Player, Actor)
                    narrative(`After having sex with my rapist again, this time somewhat consensually, it's time to give <Actor.him_or_her> the news ...`)
                    Player.dialogue(`<Actor.name>, I'm pregnant ... with your child.`)
                    narrative(`Shamefully, I then proceeded to beg my rapist to accept me as <Actor.his_or_her> <Player.boyfriend_or_girlfriend> and help me raise the kid together.`)
                    if (Actor.attractionToPlayer > 40 || Actor.masochist > -25) {
                        narrative(`<Actor.name> wasn't heartless and agreed to take responsibility for me and the child after all.`)
                        narrative(`<Actor.He_or_She> is now my <Actor.boyfriend_or_girlfriend> ... Not the most romantic love story but maybe with time, both of us will forget that we are only together because <Actor.he_or_she> raped me and got me pregnant and we will actually turn out to be a healthy family.`)
                        Actor.attractionToPlayer += 10
                        Actor.setActorVar("tag_DaddyKnows", 2)
                        Player.exchangeContact(Actor)
                        Actor.setDating()
                    } else {
                        narrative(`<Actor.name> seems to think that I'm blackmailing <Actor.him_or_her> and wanted nothing to do with me or the child.`)
                        narrative(`And just like that, my rapist walked away ...`)
                    }
                }


            } else if (Rape.isString("AggressiveFM") && !Actor.isDating()) {
                Dating = scene.getSpecific(Dating)
                narrative(`Unfortunately, the DNA results clearly suggest that the father of the child is <Actor.name>, who I sexually assaulted.`)
                narrative(`This pregnancy was the result of rape with me as the aggressor ...`)
                narrative(`What should I do?`)
                option([
                    {text: `Abortion`},
                    {text: `Lie to <Dating.name> that it was me who was raped, and the child is innocent`, condition: Dating.isValid()},
                    {text: `Beg my rape victim for a relationship and to raise the child together`},
                    {text: `Do nothing, the baby's mine no matter what`},
                ])
                if (0) {
                    narrative(`It wasn't an easy decision, but out of all the reasons for abortions, rape is one of most valid ones. Only in this case, maybe it's not so valid because I'm the rapist.`)
                    Player.strip()
                    Player.endPregnancy()
                    narrative(`Thankfully the procedure went according to plans, with no lasting impact on my future health and fertility.`)
                } else if (1) {
                    Dating.dress()
                    Dating.show()
                    narrative(`I lied to <Dating.name> and tried to convince <Dating.him_or_her> that I was the victim that night and the child was innocent`)
                    if (Dating.attractionToPlayer > 40 || Dating.masochist > 0 || Player.openRelationship()) {
                        narrative(`<Dating.name> comforted me and assured me that <Dating.he_or_she> will treat child as <Dating.his_or_her> own.`)
                        Dating.attractionToPlayer += 10
                        Dating.setActorVar("tag_DaddyKnows", 2)
                    } else {
                        narrative(`<Dating.name> was shocked about what I told <Dating.him_or_her> and didn't seem to fully believe what I said.`)
                        narrative(`<Dating.He_or_She> gave me an ultimatum: abort the child or <Dating.he_or_she> will break up with me ...`)
                        Dating.attractionToPlayer -= 10
                        narrative(`What should I do?`)
                        option([
                            {text: `Abort the child to save our relationship`},
                            {text: `Keep the child and break up with <Dating.name>`},
                        ])
                        if (0) {
                            Player.masochist += 3
                            narrative(`It wasn't an easy decision, but out of all the reasons for abortions, rape is one of most valid ones. Only in this case, maybe it's not so valid because I'm the rapist.`)
                            Player.strip()
                            Player.endPregnancy()
                            narrative(`Thankfully the procedure went according to plans, with no lasting impact on my future health and fertility.`)
                        } else {
                            Player.masochist -= 3
                            narrative(`I decided to sacrifice the relationship to save a life ...`)
                            Player.loseDating()
                        }
                    }
                } else if (2) {
                    Player.masochist += 5
                    narrative(`It's a crazy idea, but this pregnancy leaves me no choice ...`)
                    scene.setBackground("cafe")
                    Actor.dress()
                    Actor.show()
                    narrative(`I asked <Actor.name> to meet me in a public cafe, assuring <Actor.he_or_she> that I wasn't going to try anything naughty this time. <Actor.He_or_She> was stunned that I have the <Player.balls_or_galls> to even contact <Actor.him_or_her> again after raping <Actor.him_or_her>, but did show up to hear me out.`)
                    narrative(`It's time to give <Actor.him_or_her> the news ...`)
                    Player.dialogue(`<Actor.name>, I'm pregnant ... with your child.`)
                    narrative(`Shamefully, I then proceeded to beg my rape vitim to accept me as <Actor.his_or_her> <Player.boyfriend_or_girlfriend> and help me raise the kid together.`)
                    if (Actor.attractionToPlayer > 40 || Actor.masochist > 25) {
                        narrative(`<Actor.name> wasn't heartless and agreed to take responsibility for me and the child after all, even though <Actor.he_or_she> was the one who was forced.`)
                        narrative(`<Actor.He_or_She> is now my <Actor.boyfriend_or_girlfriend> ... Not the most romantic love story but maybe with time, both of us will forget that we are only together because I raped <Actor.him_or_her> and got pregnant and we will actually turn out to be a healthy family.`)
                        if (Actor.attractionToPlayer < 0) {
                            Actor.attractionToPlayer = 0
                        }
                        Actor.attractionToPlayer += 10
                        Actor.setActorVar("tag_DaddyKnows", 2)
                        Player.exchangeContact(Actor)
                        Actor.setDating()
                    } else {
                        narrative(`<Actor.name> was disgusted by the news and by me begging for forgiveness and wanted nothing to do with me or the child.`)
                        narrative(`And just like that, <Actor.he_or_she> walked away ...`)
                    }
                }


            } else if (Surrogated > 0) {
                scene.secondScreen(Actor)
                Actor.show()
                narrative(`Looks like my surrogacy procedure with my client, <Actor.name>, has succeeded`)
                Surrogated = Surrogated * 0.5
                SurrogatedC = Surrogated.convertToLocalCurrency("true")
                narrative(`I have fulfilled the first half of our agreement by getting pregnant with <Actor.name>'s child. <Actor.He_or_She> was happy to pay half of our agreed price, or <SurrogatedC>.`)
                Player.money = Player.money + Surrogated
                Actor.setActorVar("tag_DaddyKnows", 1)
            } else if (Actor2.isValid() && Surrogate == 0) {
                narrative(`This also put me in a dilemma: I've had more than one sexual partner recently who could all potentially be the father of the baby inside me ...`)
                option([
                    {text: `Discreetly ask each lover to take a paternity test`},
                    {text: `Just tell one of them the baby is his`},
                    {text: `Who cares? The baby is mine!`},
                ])
                if (0) {
                    narrative(`I asked each of them to take a paternity test. It's the only way to figure out for sure, although it's kind of humiliating basically admitting I was sleeping around and not even sure who knocked me up.`)
                    narrative(`At least I was discreet enough to ask them to come to take the test on different days so none of them actually found out who the others were and how many.`)
                    narrative(`At the end, the results came back. <Actor.name> is the father of the baby inside me.`)
                    option([
                        {text: `Tell <Actor.name> the truth`},
                        {text: `Bribe a nurse to falsify the result papers`},
                    ])


                    if (0) {
                        Told = Actor
                        Told.dress()
                        Told.show(2)
                        Player.dialogue(`<Told.name>, the baby is yours ...`)
                        Told.setActorVar("tag_DaddyKnows", 1)
                        if (Told.isDating() && !Player.openRelationship() && Actor.attractionToPlayer + Actor.masochist < 0) {
                            Told.dialogue(`So what? It could have been anyone!`, `Angry`)
                            Told.dialogue(`You think I'm an idiot? Why did you need me to take a paternity test to figure that out?`, `Angry`)
                            Told.dialogue(`Because you've been cheating on me, that's why!`, `Angry`)
                            Told.attractionToPlayer = -100
                            Told.dialogue(`Good luck with the baby, because I don't want anything to do with it ... or you!`, `Angry`)
                            Told.dialogue(`Bye, bitch!`, `Angry`)
                            Player.loseDating()
                            Player.blockContact(Told)
                            narrative(`And just like that, <Told.name> left me and baby growing inside my belly behind ...`)
                        } else {
                            Told.dialogue(`I'm happy to hear that ... although I'd have preferred that it didn't take a DNA test for you to figure that out to be honest.`)
                            Player.exchangeContact(Actor)
                        }
                    } else {
                        Player.karma -= 10
                        narrative(`To my surprise, the nurse smiled back at me and told me not to worry - she's done this a lot of times already, it's her main source of income in fact. The paternity fraud victim never finds out.`)
                        Player.money -= 1000
                        narrative(`The question is, who's the poor guy that will find his name falsely on the DNA test results?`)
                        option([
                            {text: `<Actor2.name>`},
                            {text: `<Actor3.name>`, condition: Actor3.isValid()},
                            {text: `<Actor4.name>`, condition: Actor4.isValid()},
                            {text: `<Actor5.name>`, condition: Actor5.isValid()},
                        ])
                        if (0) {
                            Told = Actor2
                        } else if (1) {
                            Told = Actor3
                        } else if (2) {
                            Told = Actor4
                        } else {
                            Told = Actor5
                        }
                        narrative(`I reckon <Told.name> would make the best father out of the bunch, even though he's not actually the real father. But he doesn't need to know that.`)
                        Told.dress()
                        Told.show(2)
                        Player.dialogue(`<Told.name>, the baby is yours ...`)
                        Told.setActorVar("tag_DaddyKnows", 2)
                        if (Told.isDating() && !Player.openRelationship() && Actor.attractionToPlayer + Actor.masochist < 0) {
                            Told.dialogue(`So what? It could have been anyone!`, `Angry`)
                            Told.dialogue(`You think I'm an idiot? Why did you need me to take a paternity test to figure that out?`, `Angry`)
                            Told.dialogue(`Because you've been cheating on me, that's why!`, `Angry`)
                            Told.attractionToPlayer = -100
                            Told.dialogue(`Good luck with the baby, because I don't want anything to do with it ... or you!`, `Angry`)
                            Told.dialogue(`Bye, bitch!`, `Angry`)
                            Player.loseDating()
                            Player.blockContact(Told)
                            narrative(`And just like that, <Told.name> left me and baby growing inside my belly behind ...`)
                        } else {
                            Told.dialogue(`I'm happy to hear that ... although I'd have preferred that it didn't take a DNA test for you to figure that out to be honest.`)
                            Player.exchangeContact(Told)
                        }
                    }
                } else if (1) {
                    Player.karma -= 5
                    narrative(`I might have slept around a bit, but no-one else needs to know about that. To the outside world, I could just be a faithful partner who's having a child with the love of her life.`)
                    narrative(`The question is: who should I 'choose' as the baby daddy?`)
                    option([
                        {text: `<Actor2.name>`},
                        {text: `<Actor3.name>`, condition: Actor3.isValid()},
                        {text: `<Actor4.name>`, condition: Actor4.isValid()},
                        {text: `<Actor5.name>`, condition: Actor5.isValid()},
                        {text: `<Actor.name>`},
                    ])
                    if (0) {
                        Told = Actor2
                    } else if (1) {
                        Told = Actor3
                    } else if (2) {
                        Told = Actor4
                    } else if (3) {
                        Told = Actor5
                    } else {
                        Told = Actor
                    }
                    narrative(`I reckon <Told.name> would make the best father out of the bunch. Of course, I have no idea if he's even the real father, but he doesn't have to have any doubt. As far as he's concerned, he's the only person I've slept with recently.`)
                    Told.dress()
                    Told.show(2)
                    Player.dialogue(`<Told.name>, the baby is yours ...`)
                    Told.setActorVar("tag_DaddyKnows", 2)
                    Player.exchangeContact(Told)
                } else {
                    narrative(`It's not an ideal situation but I think I'm capable of raising the kid on my own and not having to deal with the drama of multiple potential baby daddies.`)
                }
            } else if (Surrogate == 1) {
                narrative(`Looks like the procedure with our baby's sperm donor <Actor.name> was a success.`)
                Actor.setActorVar("tag_Surrogate", 0)
                Told = scene.getSpecific(Dating)
                Told.setActorVar("tag_DaddyKnows", 1)
            } else {
                Actor.dress()
                Actor.show(2)
                narrative(`There's no doubt that <Actor.name> is the father of the baby inside me. I only had one partner recently, no need for any paternity tests here.`)


                if (Actor.isRelative()) {
                    narrative(`Or more precisely ... my own <Actor.relationship> is the father of the growing soul inside me!`)
                    narrative(`We did something forbidden and extremely risky that led to this baby. We can now only hope that the truth will never come out and the baby will somehow turn out to be healthy physically and mentally.`)
                } else if (Actor.isExRelative()) {
                    narrative(`As much as I'm happy to carry <Actor.name>'s child, <Actor.he_or_she> and I are biologically related after all ... Let's hope the baby will turn out to be healthy physically and mentally.`)
                }


                Told = Actor
                Player.dialogue(`<Told.name>, the baby is yours ...`)
                Told.setActorVar("tag_DaddyKnows", 1)
                Player.exchangeContact(Told)
            }
        }


        if (!Player.isDating()) {
            narrative(`The fact that I got pregnant while not being in any sort of committed relationships causes some of my more conservative family members and colleagues to act rather judgmental towards the news.`)
            ConRel = Player
            while (ConRel.isValid()) {
                ConRel = Player.getRelative()
                if (ConRel.isValid() && ConRel.perversion < 15) {
                    scene.secondScreen(ConRel)
                    ConRel.show()
                    narrative(`My <ConRel.relationship> <ConRel.name> reacted badly to the news of my pregnancy.`)
                    ConRel.rapportwithplayer -= 20
                    ConRel.hide()
                }
            }


            ConRel = Player
            while (ConRel.isValid()) {
                ConRel = scene.getSpecific("Colleague")
                if (ConRel.isValid() && ConRel.perversion < 15) {
                    scene.secondScreen(ConRel)
                    ConRel.show()
                    narrative(`My colleague <ConRel.name> has acted rather judgmental towards me since learning about my pregnancy.`)
                    ConRel.rapportwithplayer -= 10
                    ConRel.hide()
                }
            }
        }


    })


})
module.exports = scene