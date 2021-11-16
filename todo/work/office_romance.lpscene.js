// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\work\office_romance.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'office_romance'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all"])
    scene.where(["work"])
    scene.when([8, 18])
    let Colleague1 = scene.getSpecific("Colleague")
    let Colleague2 = scene.getSpecific("Colleague")
    scene.who(($IF) => {
        Colleague1 = scene.getSpecific("Colleague")
        Colleague2 = scene.getSpecific("Colleague")
        $IF(!Colleague1.isDating() && !Colleague2.isDating() && Colleague1.isInterestedIn(Colleague2) && Colleague2.isInterestedIn(Colleague1) && Colleague1.rapportwithplayer > 0)
    })
    scene.other(($IF) => {
        $IF(random(0, 100) < Player.interpersonal * random(0, 0.1))
    })


    scene.start(() => {
        scene.setBackground("work")
        Colleague1.dress()
        Colleague2.dress()
        Colleague1.show(2)
        Colleague2.show(3)


        narrative(`From the way <Colleague1.name> looks at <Colleague2.name> in the office, it's easy to tell that <Colleague1.he_or_she> has quite a crush on <Colleague2.name>. However, their romance hasn't seemed to blossom at all.`)
        option([
            {text: `Do nothing`},
            {text: `Encourage the romance`},
            {text: `Discourage the romance`},
        ])
        if (0) {
            narrative(`Well, their romance is none of my business.`)
        } else if (1) {
            narrative(`Encouraging romance between co-workers won't win me any favor from higher-ups, but I think it's the right thing to do.`)
            Player.dialogue(`You know maybe <Colleague2.name> is just waiting for you to be more 'assertive' ...`, `Happy`)
            Colleague1.dialogue(`I guess you're right. I shouldn't be so shy and actually confess my feelings for <Colleague2.him_or_her>.`, `Embarrassed`)
            narrative(`It would take another month or so, but they eventually got together as a couple, all thanks to my matchmaking efforts.`)
            Colleague1.rapportwithplayer += random(0, 30)
            Colleague2.rapportwithplayer += random(0, 20)
            Player.jobperformance -= random(0, 2)
            if (Colleague1.attractionToPlayer > 0) {
                Colleague1.attractionToPlayer = 0
            }
            if (Colleague2.attractionToPlayer > 0) {
                Colleague2.attractionToPlayer = 0
            }
        } else {
            narrative(`Office romance is a can of worms that most companies try but often fail to avoid. That doesn't mean I shouldn't even try. My success in discouraging this romance could impress the bosses.`)
            Player.dialogue(`<Colleague1.name>, I really don't think it's a good idea. Your relationship will be the center of attention for the office gossipers - and what if you guys end up arguing or breaking up, wouldn't that be a very awkward day at work? An attractive <Colleague1.guy_or_girl> like you could surely look for someone elsewhere and avoid all the troubles.`, `Sad`)
            Colleague1.dialogue(`I guess you're right. Pursuing this romance is more troubles than it's worth ...`, `Sad`)
            Player.jobperformance += random(0, 2)
        }


    })
    scene.timeout(500, "office_romance")


})
module.exports = scene