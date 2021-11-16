// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\work\marathon.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'marathon'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, actionDuration, choice} = scene

    scene.what(["all"])
    scene.where(["work"])
    scene.when([7, 11])
    let Colleague1 = scene.getSpecific("Colleague")
    let Colleague2 = scene.getSpecific("Colleague")
    scene.who(($IF) => {
        Colleague1 = scene.getSpecific("Colleague")
        Colleague2 = scene.getSpecific("Colleague")
        $IF(Colleague1.fitness > 70 && Colleague2.fitness > 70)
    })
    scene.other(($IF) => {
        $IF(Player.fitness > 70 && random(0, 100) < 0.01 * Player.fitness * actionDuration)
    })


    scene.start(() => {
        Colleague1.dress()
        Colleague2.dress()
        Colleague1.show(2)
        Colleague2.show(3)


        narrative(`There's a charity marathon organized by an industry association coming up soon. Two of my colleagues, <Colleague1.name> and <Colleague2.name> already signed up. I reckon I'm fit enough to run. Should I sign up?`)
        option([
            {text: `Sign up`},
            {text: `Maybe not`},
        ])
        if (1) {
            narrative(`I decided against signing up, work is more important.`)
        } else {
            narrative(`I can't just show up at the marathon and run if I want to put in a respectable showing. I would need to train pretty hard. <Colleague1.name> and <Colleague2.name> are already taking this very seriously and hitting the treadmill every day, sometimes even leaving work early to do so.`)
            scene.setBackground("sports_centre")
            Colleague1.dress()
            Colleague2.dress()
            narrative(`Should I also train as hard for the marathon?`)
            option([
                {text: `Train properly`},
                {text: `Take it easy`},
            ])
            if (0) {
                Player.dress()
                narrative(`I also took it seriously and went to the gym every day to prepare for the marathon - to the delight of my two competitive colleagues. As a result, my actual work performance suffered a bit.`)
                Player.jobperformance -= random(0, 2)
                Colleague1.rapportwithplayer += random(0, 2)
                Colleague2.rapportwithplayer += random(0, 2)
                Player.fitness += random(0, 2)
            } else {
                Player.dress()
                narrative(`I trained here and there, but didn't take the whole thing very seriously, to the disappointment of my two competitive colleagues. I was sure I made the right choice though, because unlike theirs, my job performance wasn't affected by my participation in the marathon at all.`)
                Colleague1.rapportwithplayer -= random(0, 2)
                Colleague2.rapportwithplayer -= random(0, 2)
            }


            scene.setBackground("street")
            narrative(`The day of the marathon ...`)
            narrative(`I started the marathon well. However, within the first 15 minutes, I quickly realized there were essentially two groups of participants in the marathon: the competitive group who trained hard were putting in their absolute best efforts, mostly consisting of analysts and associates. The other group were taking it easy and just there for a fun experience, where most of the industry's senior executives were.`)
            narrative(`Do I really need or even want to try my best at this marathon or should I take it easy also and even network a bit?`)
            option([
                {text: `Try my best`},
                {text: `Take it easy`},
            ])
            if (0) {
                narrative(`My competitive nature doesn't give me any other choice! I ran with all I had. Eventually, my colleagues and I all managed to finish the marathon in under four hours. We congratulated each other on our performance, ready to go back to work high in morale the next day.`)
                Colleague1.rapportwithplayer += random(0, 3)
                Colleague2.rapportwithplayer += random(0, 3)
                Player.mood += 100
            } else {
                Colleague1.hide()
                Colleague2.hide()
                narrative(`I decided to take it easy and stay behind with the slower but better-connected executives. It ended up taking forever to finish the marathon - but that was hardly a bad thing, because I got plenty of chances to make new professional contacts. My more competitive colleagues were disappointed in me though - they both finished the marathon in under four hours.`)
                Colleague1.rapportwithplayer -= random(0, 3)
                Colleague2.rapportwithplayer -= random(0, 3)
                Player.jobexperience += random(0, 2)
            }
        }


    })
    scene.timeout(1500, "marathon")
})
module.exports = scene