// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Corruption\Scenes\co_vi_erotica.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'co_vi_erotica'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all", " -sleep", " -nap"])
    scene.where(["home"])
    scene.when([8, 20])
    let Actor = scene.getPerson("true")
    scene.who(($IF) => {
        Actor = scene.getPerson("true")
        $IF(!Actor.isRelative() && Actor.isInterestedIn(Player) && Actor.perversion > 70 && Actor.attractionToPlayer > 30)
    })
    scene.other(($IF) => {
        $IF(Player.isAtHome())
    })


    scene.start(() => {
        narrative(`Hmm, what's this? I've got a parcel delivered to me!`)
        narrative(`It's a gift from <Actor.name> ... 'I hope you enjoy this book. I surely did.'`)
        narrative(`That's weird ... <Actor.name> is not exactly a scholar. Let's unpack it ...`)
        narrative(`It's an erotic book!`)
        option([
            {text: `Thank <Actor.name> for the gift`},
            {text: `Tell <Actor.him_or_her> off`},
        ])
        if (0) {
            Player.perversion += random(0, 0.25)
            narrative(`As much as it's a perverted gift ... It's a gift after all. I can't be so rude.`)
            narrative(`I texted <Actor.name> to thank <Actor.him_or_her> for the gift.`)
            narrative(`That night ...`)
            narrative(`I know it's not the classiest thing to do, but for some reasons, I couldn't help but think about <Actor.name>'s sleazy gift ...`)
            option([
                {text: `Read the erotica`},
                {text: `Resist the temptation`},
            ])
            if (0) {
                Player.perversion += random(0, 0.25)
                narrative(`I guess nobody needs to know about this ... I'm only reading this for its ... artistic value.`)
            }
        } else {
            narrative(`I immediately texted <Actor.name>, making it clear such a gift is totally inappropriate and not welcome.`)
            Actor.attractionToPlayer -= random(0, 1)
        }


    })
    scene.timeout(200, "co_vi_erotica")
})
module.exports = scene