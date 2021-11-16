// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\dating\partner_abuse_cms.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'partner_abuse_cms'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all"])
    scene.where(["home"])
    scene.when([0, 24])
    let Dating = scene.getSpecific("Dating")
    scene.who(($IF) => {
        Dating = scene.getSpecific("Dating")
        $IF(Dating.attractionToPlayer < -20 && Dating.masochist < -75 && Dating.martial > 50)
    })
    scene.other(($IF) => {
        $IF(!Player.isWithCompanion())
    })


    scene.start(() => {
        Dating.dress()
        Dating.show(2)


        Dating.dialogue(`You stupid <Player.soyboy_or_bitch>! Take this!`, `Angry`)
        Player.dialogue(`Ahhhhhhhh`, `Pain`)
        narrative(`Here it goes again, <Dating.name> is beating me up for no rational reason. This relationship is becoming more and more abusive by the day ...`)
        option([
            {text: `Break up`},
            {text: `Endure`},
            {text: `I love being dominated like that ...`},
        ])
        if (0) {
            Player.dialogue(`That's enough. No-one is allowed to lay hands on me like that!`, `Angry`)
            Player.dialogue(`I'm not just going to take it. It's over. I'm walking out of this hell of a relationship!`, `Angry`)
            Player.dialogue(`And I'm getting a restraining order so don't even think about getting back into my life or trying to hurt me again.`, `Angry`)
            Player.loseDating()
            Player.blockContact(Dating)
            Player.masochist -= 10
            Dating.attractionToPlayer = -100
            Dating.rapportwithplayer = -100
        } else if (1) {
            narrative(`Let's just endure this ... <Dating.He_or_She> is just in a bad mood ... All people in relationships go through this, right ...`)
            Player.masochist += 2
            Dating.masochist -= 2


            if (scene.isModEnabled("vin_NonConsensual")) {
                Dating.dialogue(`It's time to fuck, little bitch!`, `Angry`)
                Player.dialogue(`No, please, you're hurting me!`, `Crying`)
                scene.talkNonConsensual()
                if (Dating.isMale() && !Player.isMale()) {
                    scene.filter("Aggressive")
                } else if (!Dating.isMale() && Player.isMale()) {
                    scene.filter("AggressiveFM")
                }
                scene.sex(Dating, Player)
            }
        } else {
            narrative(`It's strange but I love the way <Dating.name> completely dominated me and abused me. Other people may say I have Stockholm syndrome but pain can become a strange pleasure I suppose.`)
            Player.dialogue(`Yes! Punish me, <Dating.Daddy_or_Mama>. I deserve it. When you're done hitting me, fuck me hard afterwards.`, `Flirty`)
            Dating.dialogue(`As you wish, little bitch!`, `Angry`)
            if (Dating.isMale() && !Player.isMale()) {
                scene.filter("Aggressive")
            } else if (!Dating.isMale() && Player.isMale()) {
                scene.filter("AggressiveFM")
            }
            scene.sex(Dating, Player)
            Player.masochist += 5
            Dating.masochist -= 5
        }


        scene.timeout(250, "partner_abuse_cms")
    })
})
module.exports = scene