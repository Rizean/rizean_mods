// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Corruption\Scenes\sttt\sttt_main.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'sttt_main'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, choice, costOfLiving} = scene

    scene.what(["none"])
    scene.where(["none"])
    scene.when([0, 24])
    scene.who("none")
    scene.other("none")


    scene.start(() => {
        let stage = scene.getGlobal(`sttt_stage`)
        let Actor = scene.getSpecific("Boss")
        let Loc = scene.findNearbyBuilding("hotel")
        let Actor2 = scene.getSpecific("Colleague")
        let Actor3 = scene.generatePersonTemporary([])
        let Salary = 1500 + 2 * Player.jobexperience * 100 * costOfLiving
        if (Player.isWithCompanion()) {
            Player.endDate()
        }
        scene.dressFormal()
        stage = scene.getGlobal(`sttt_stage`)
        Actor = scene.getSpecific("Boss")


        if (stage == 1) {
            narrative(`The first step is to get dirt on my current boss <Actor.name> and get <Actor.him_or_her> fired. A sexual harassment claim is usually the way to go here ...`)
            narrative(`The thing is, even if I sleep with my boss, it wouldn't be enough to get <Actor.him_or_her> fired since well ... sex isn't against company rules if it's between two consenting adults. The important part is to get evidence of <Actor.him_or_her> blackmailing me for sex to keep my job ...`)
            narrative(`The only way to guarantee to get such evidence is to convince my boss to say those blackmailing words <Actor.himself_or_herself> under the pretense of sexual roleplay.`)
            if (Actor.hadSex()) {
                Loc = scene.findNearbyBuilding("hotel")
                Player.moveTo(Loc)
                Actor.dress()
                Actor.show()
                narrative(`I've already had sex with my boss before so it wasn't that hard to get <Actor.him_or_her> to agree to the roleplay during our next secret rendezvous. <Actor.name> went along with my suggestions, thinking <Actor.he_or_she> was just fulfiling my little boss-employee blackmail fantasy, not knowing it was a trap and everything was being filmed to make it look like a real employee blackmail situation.`)
                scene.setBackground("home")
                Actor.dialogue(`Come on, you already agree to come with me here. We're in a hotel room together, what else did you think I wanted?`)
                Player.dialogue(`Please ... this is so unprofessional ... We shouldn't be doing this ... you're my boss ...`)
                Actor.dialogue(`And exactly because I'm your boss ... you can choose to either sleep with me or get fired. Your choice!`)
                Player.dialogue(`Please, don't fire me, I really need this job ... I've been working harder than anyone else ... the contributions I've made to this company speak for themselves.`)
                Actor.dialogue(`I know you're a good employee, the most productive in this Department in fact. But you know what else makes a good employee: the willingness to do whatever it takes to keep their boss happy. And you're making me very unhappy with your continuing rejection.`)
                Actor.dialogue(`If you walk out that door right now, be prepared to have your career ended. Not only will you lose this job, but you can forget about me providing any prospective employers a good reference for you in the future ... In no time, you'll be living on the street. Think about it, think about your family.`)
                Player.dialogue(`Alright ... I'll do it ... for my family's financial future ...`)
                Actor.dialogue(`Good <Player.boy_or_girl>! I knew you were wise enough to make the right choice.`)
                scene.sex(Actor, Player)
                scene.setBackground("work")
                Actor.hide()
                narrative(`I got everything recorded and promptly sent it over to HR, who suspended <Actor.name> pending an investigation.`)
                scene.setGlobal(`sttt_stage`, `2`)
            } else {
                narrative(`Of course, I haven't had a single sexual encounter with my boss yet ... <Actor.He_or_She> would only agree to go along with such roleplay with a lover <Actor.he_or_she> has become comfortable with ...`)
                narrative(`Therefore, I should seduce my boss and sleep with <Actor.him_or_her> at least once first, before continuing with my plan any further.`)
                Actor.makeInterested(Player)
                if (Actor.attractionToPlayer < 30) {
                    Actor.attractionToPlayer = 30
                }
                narrative(`(Depending on the boss's personality, <Actor.he_or_she> may or may not initiate an affair, via random events. You can take a more proactive role though by asking <Actor.him_or_her> out outside of work and try to turn your professional relationship into an sexual one then)`)
            }
        } else if (stage == 2) {
            narrative(`Despite all my efforts to entrap my boss and give the fake evidence of sexual harassment to HR, the boss still hasn't been fired officially yet. <Actor.He_or_She> maintained <Actor.his_or_her> innocence, claiming to HR that the relationship we were having was consensual and I tricked <Actor.him_or_her> to say those words under the pretense of roleplaying a fantasy, which of course is the truth.`)
            narrative(`This is becoming a 'He Said, She Said' situation, which isn't good. If the HR investigation ends up proving <Actor.name> is speaking the truth, I may be the one that gets fired after all ...`)
            narrative(`While my boss is under suspension, HR sent out an email to everyone in my Department, asking for whistleblowers to come forward if they have any evidence of <Actor.name>'s bad behaviour.`)
            Actor2 = scene.getSpecific("Colleague")
            while (Actor2.isValid() && Actor2.rapportwithplayer < 50) {
                Actor2 = scene.getSpecific("Colleague")
            }
            if (Actor2.isValid()) {
                Actor2.dress()
                Actor2.show()
                narrative(`I think my colleague <Actor2.name> and I are close enough to get <Actor2.him_or_her> onto my scheme. I reckon I can convince <Actor2.him_or_her> to support my claim and to also falsely accuse my boss of sexual harassment, by promising to promotoe <Actor2.him_or_her> once I've achieved my goal of becoming the Department Head. Let's invite <Actor2.him_or_her> over my place for dinner and discuss this.`)
                Player.moveTo("home")
                scene.setBackgroundCustom("livingroom")
                Actor2.dialogue(`Alright, you convinced me. <Actor.name> didn't seem to favour me much so this might be a good way for me to finally make some advancement in this company.`)
                Actor2.dialogue(`I'll talk to HR tomorrow, accusing <Actor.name> of harassing me too and telling them that I saw <Actor.him_or_her> making inappropriate comments to you ...`)
                Player.dialogue(`Great to hear. I promise I will not forget you've done once I get to the top.`)
                scene.option([
                    {text: `Celebrate with sex`, condition: Player.isInterestedIn(Actor2) && Actor2.isInterestedIn(Player)},
                    {text: `Celebrate by getting a prositute together`},
                    {text: `Just celebrate with Champagne`},
                ])
                if (0) {
                    scene.sex(Player, Actor2)
                } else if (1) {
                    Actor3 = scene.generatePersonTemporary([])
                    while (!Player.isInterestedIn(Actor3)) {
                        Actor3 = scene.generatePersonTemporary([])
                    }
                    scene.sex(Player, Actor3, Actor2)
                }
                scene.setGlobal(`sttt_stage`, `3`)
            } else {
                narrative(`I don't get along well enough with any of my colleagues to convince them to support my claim and to also falsely accuse my boss of sexual harassment.`)
                narrative(`I should make friend with at least one colleague.`)
                narrative(`(Return to this objective once you have raised one colleague's rapport to at least 50. To improve rapport, give gifts, work together or hang out with that person, doing activities they like)`)
            }
        } else if (stage == 3) {
            narrative(`After being accused by not one, but two employees, my boss was fired. However, just because my old boss is no longer here, it doesn't mean I will be the one to take over <Actor.his_or_her> job.`)
            scene.blockPregnancy()
            Actor2 = scene.generatePersonTemporary([])
            while (!Player.isInterestedIn(Actor2)) {
                Actor2 = scene.generatePersonTemporary([])
            }
            Actor2.age = random(40, 60)
            Actor2.randomizeFace()
            Actor2.randomizeHairs()
            Actor2.dress()
            narrative(`That decision lies with the CEO of the company, <Actor2.name> <Actor2.name_last>, who has asked me to visit <Actor2.him_or_her> in <Actor2.his_or_her> office to apologize about the whole sexual harassment affair.`)
            scene.setBackground("bank")
            Actor2.show()
            narrative(`I did my research on the CEO. Divorced and lonely, <Actor2.he_or_she> was an easy target for me to seduce ... A candid conversation between a CEO and a victim of sexual harassment soon becomes a full blown fucking session. Soon enough, my old boss's job will be mine.`)
            scene.sex(Actor2, Player)
            scene.setGlobal(`sttt_stage`, `4`)
        } else if (stage == 4) {
            narrative(`After a few more passionate love-making sessions, the CEO promised to promote me to my old boss's position. There's one more obstacle on the way though. The two largest shareholders of the company blocked my promotion, expressing concerns over my lack of leadership experience and suspicion over the whole sexual harassment affair.`)
            Actor2 = scene.generatePersonTemporary([])
            while (!Player.isInterestedIn(Actor2)) {
                Actor2 = scene.generatePersonTemporary([])
            }
            Actor3 = scene.generatePersonTemporary([])
            while (!Actor3.isSameGender(Actor2)) {
                Actor3 = scene.generatePersonTemporary([])
            }
            Actor2.age = random(40, 60)
            Actor2.randomizeFace()
            Actor2.randomizeHairs()
            Actor2.dress()
            Actor3.age = random(40, 60)
            Actor3.randomizeFace()
            Actor3.randomizeHairs()
            Actor3.dress()
            scene.setBackground("home")
            Actor2.show()
            Actor3.show()
            narrative(`Sticking to my strategy of sleeping my way to the top of course, I convinced the CEO to introduce me to these shareholders to allow me an opportunity to show them I was qualified for the job.`)
            narrative(`Of course, the only convincing I did that day was giving the shareholders some special dividends they haven't received from the company so far: mind-blowing threesome sex.`)
            scene.sex(Actor2, Actor3, Player)
            narrative(`With my old boss fired and both the CEO and the company's major shareholders supporting my new appointment, I was promoted to Department Head and inheritted my old boss's huge salary. My scheming and fucking effort has paid off!`)
            Player.perversion += 10
            Player.jobexperience = 100
            Player.jobperformance = 50
            Salary = 1500 + 2 * Player.jobexperience * 100 * costOfLiving
            Salary.setSalary()
            Actor.deletePerson()
            Player.setBoss()
            scene.questEnd()
        }
    })
})
module.exports = scene