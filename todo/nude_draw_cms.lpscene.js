// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\misc\nude_draw_cms.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'nude_draw_cms'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all"])
    scene.where(["all"])
    scene.when([8, 20])
    scene.who("none")
    scene.other(($IF) => {
        $IF(scene.isModEnabled("vin_NonConsensual") && !Player.isMale())
    })


    scene.start(() => {
        let Actor = scene.generatePersonTemporary([])
        narrative(`You were invited to a nude drawing class by a famous art school.`)
        Player.dialogue(`I don’t know what to expect, but that could be a great experience! It’s only be naked, it’s not a big deal…`)
        option([
            {text: `Go`},
            {text: `No`},
        ])
        if (0) {
            scene.setBackground("university")
            Actor = scene.generatePersonTemporary([])
            while (!Actor.isMale()) {
                Actor = scene.generatePersonTemporary([])
            }
            Actor.dress()
            Actor.show()
            Actor.dialogue(`Thank you for coming, <Player.name>. My name is <Actor.na,e> and I am the teacher for this class.`)
            Actor.dialogue(`Your job is very simple: You only have to remove all your clothes and make some poses, standing still while the students stares at you and draw. What you think?`)
            option([
                {text: `Yes`},
                {text: `No`},
            ])
            if (0) {
                Actor.dialogue(`Great, let’s begin then…`)
                narrative(`The class begins and all the students stares at me, seeing my entire body naked while they draw. The teacher is starring at me in a creep way and is touching me, saying that he need to ajust my pose, but he is going in my private parts too…`)
                Actor.dialogue(`Great, class. Knowing how to draw a gorgeous body, the next subject is human reproduction. All great artists need to learn that.`)
                Player.dialogue(`Wait, what he means by…`)
                Actor.strip()
                narrative(`Suddenly the teacher strips down, then he grabs me and insert his d*ck inside me, in front of everyone without my consent.`)
                Player.dialogue(`No! wait…`)
                scene.sex(Actor, Player)
                Actor.dialogue(`Uff…That is all, class. I hope you don’t missed any pose. Don’t forget the homework for tomorrow… Thanks again, lady.`)
                narrative(`Everyone leaves while I’m confused and scared by what just happened. I hope I didn’t get pregnant…`)
            }
        }
    })
    scene.timeout(1000, "nude_draw_cms")
})
module.exports = scene