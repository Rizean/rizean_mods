// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\companion\cinema_with_date_passive.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'cinema_with_date_passive'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, CurrentCompanion} = scene

    scene.what(["watch_a_movie"])
    scene.where(["cinema"])
    scene.when([0, 24])
    scene.who("none")
    scene.other(($IF) => {
        $IF(Player.isWithCompanion() && CurrentCompanion.isInterestedIn(Player) && ((!CurrentCompanion.isRelative() && CurrentCompanion.attractionToPlayer > 30) || CurrentCompanion.incest > 50) && random(50, 200) < CurrentCompanion.perversion)
    })


    let RelatedPerson = CurrentCompanion.isRelative() || CurrentCompanion.isExRelative()
    RelatedPerson = CurrentCompanion.isRelative() || CurrentCompanion.isExRelative()


    scene.start(() => {
        narrative(`I'm watching a movie with <CurrentCompanion.name>. It's really dark in here.`)
        narrative(`What's that? <CurrentCompanion.name> is carassing my thigh. What a pervert!`)
        option([
            {text: `Grope <CurrentCompanion.him_or_her> back`},
            {text: `Ignore`},
            {text: `Walk out`},
        ])
        if (0) {
            narrative(`I decided to respond in kind and get handsy with my date and started caressing <CurrentCompanion.his_or_her> thighs.`)
            narrative(`<CurrentCompanion.name> was clearly delighted by my receptive mood and increased <CurrentCompanion.his_or_her> intensity caressing me as well.`)
            Player.animatePair(Player, CurrentCompanion, "Kissing")
            Player.dialogue(`...`, `Kiss`)
            CurrentCompanion.dialogue(`...`, `Kiss`)
            narrative(`Eventually, we started making out, right there in the theatre.`)
            CurrentCompanion.attractionToPlayer += random(0, 2)
            option([
                {text: `Stop it there`},
                {text: `Invite <CurrentCompanion.him_or_her> home`, condition: Player.perversion > 5},
                {text: `Have sex right here`, condition: scene.isModEnabled("vin_VanillaPorn") && Player.perversion > 50},
            ])
            if (0) {
                narrative(`That's enough. We should stop before a fellow cinema goer spots our shameless public display of affection.`)
            } else if (1) {
                narrative(`I whispered into <CurrentCompanion.his_or_her> ear, suggesting that we go back to my place.`)
                narrative(`<CurrentCompanion.name> nodded and soon enough, I was leading <CurrentCompanion.him_or_her> back to my apartment.`)
                Player.moveTo("home")
                scene.setBackground("home")
                narrative(`As soon as we were inside, the passion became too much to resist any longer.`)
                scene.sex(CurrentCompanion, Player)
                Player.perversion += random(0, 0.25)
                CurrentCompanion.attractionToPlayer += random(0, 2)


                if (RelatedPerson) {
                    CurrentCompanion.incest += random(0, 2)
                }
            } else {
                narrative(`I whispered into <CurrentCompanion.his_or_her> ear, suggesting that we get much more intimate right here in the cinema.`)
                narrative(`<CurrentCompanion.name> nodded and soon enough, we were undressing each other right there in the cinema.`)
                scene.sex(CurrentCompanion, Player)
                Player.perversion += random(0, 1)
                CurrentCompanion.attractionToPlayer += random(0, 2)


                if (RelatedPerson) {
                    CurrentCompanion.incest += random(0, 2)
                }
            }
        } else if (2) {
            Player.dialogue(`What do you think you're doing, pervert?`, `Angry`)
            CurrentCompanion.attractionToPlayer -= random(0, 2)
            CurrentCompanion.rapportwithplayer -= random(0, 2)


            if (RelatedPerson) {
                CurrentCompanion.incest -= random(0, 2)
            }


            Player.endDate()
        }


    })
    scene.timeout(48, "cinema_with_date_passive")
})
module.exports = scene