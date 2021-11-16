// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Incest\Scenes\incest_rape_cms.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'incest_rape_cms'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["sleep"])
    scene.where(["home"])
    scene.when([0, 24])
    let Actor = Player.getRelative()
    scene.who(($IF) => {
        Actor = Player.getRelative()
        $IF(Actor.livesWithPlayer() && Actor.isInterestedIn(Player) && Actor.perversion > 70 && Actor.masochist < -30 && !Actor.hadSex() && (Actor.isMale() || Actor.isTrans()))
    })
    scene.other(($IF) => {
        $IF(scene.isModEnabled("vin_NonConsensual") && Player.isAtHome())
    })


    scene.start(() => {
        narrative(`I was in bed asleep when suddenly, I felt the covers being pulled back.`)
        narrative(`I regained some consciousness to see my <Actor.relationship> standing beside my bed.`)
        Actor.show()
        narrative(`I froze, feeling my <Actor.relationship>�s hand beneath the covers rubbing at my <Player.cock_or_pussy>. Maybe I could pretend to stay asleep and hope that my <Actor.relationship> gives up and leaves. Or maybe I should wake up and resists.`)
        option([
            {text: `Pretend to stay asleep`},
            {text: `Resist`},
        ])
        if (0) {
            if (Actor.perversion - Actor.masochist < random(100, 300)) {
                narrative(`The rubbing intensifies before my <Actor.relationship> eventually removes <Actor.his_or_her> hand and gives up, leaving the room disappointed.`)
            } else {
                narrative(`The rubbing intensifies before my <Actor.relationship> removes hand, opens <Actor.his_or_her> pants and pushes his cock into my mouth`)
                option([
                    {text: `Suck his cock`},
                    {text: `Pretend to stay asleep`},
                ])
                if (0) {
                    narrative(`I reluctantly open my mouth and take my <Actor.relationship>'s thick warm cock into my mouth.`)
                    scene.filter("Blowjob")
                    scene.sex(Actor, Player)
                    Actor.incest += 30
                } else {
                    narrative(`My <Actor.relationship> tries to force me to engage in oral sex but eventually gives up and leaves.`)
                }
            }
        } else {
            narrative(`The rubbing intensifies before my <Actor.relationship> removes hand, opens pants and pushes cock into my mouth.`)
            option([
                {text: `Suck his cock`},
                {text: `Resist`},
            ])
            if (0) {
                narrative(`I reluctantly open my mouth and take my <Actor.relationship>'s thick warm cock into my mouth.`)
                scene.filter("Blowjob")
                scene.sex(Actor, Player)
                Actor.incest += 30
            } else {
                narrative(`I try to pull free but my <Actor.relationship> grabs me and demands me to open their mouth.`)
                Actor.dialogue(`Suck you little <Player.bastard_or_bitch>!`, `Evil`)
                narrative(`I try to protest and pull away but my <Actor.relationship> pulls the covers back, pulls my pants off and climbs onto the bed, pinning me down.`)
                scene.filter("Aggressive")
                scene.talkNonConsensual()
                scene.sex(Actor, Player)
                narrative(`After he finished, my <Actor.relationship> pulled out of me, got dressed and left the room like nothing had happened. For a long time I lay there too sore and too scared to move. I can�t believe my own <Actor.relationship> could do this to me!`)
                Actor.incest += 50
            }
        }
    })
    scene.timeout(500, "incest_rape_cms")
})
module.exports = scene