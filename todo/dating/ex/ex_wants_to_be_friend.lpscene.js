// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\dating\ex\ex_wants_to_be_friend.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'ex_wants_to_be_friend'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all", " -sleep", " -nap"])
    scene.where(["home"])
    scene.when([0, 24])
    let Actor = scene.getSpecific("ExDating")
    scene.who(($IF) => {
        Actor = scene.getSpecific("ExDating")
        $IF(!Actor.isContactExchanged() && random(20, 100) < Actor.rapportwithplayer)
    })
    scene.other(($IF) => {
        $IF(Player.isAtHome())
    })


    scene.start(() => {
        narrative(`I heard a knock on my door. I wonder who it might be.`)
        Actor.dress()
        Actor.show(2)
        narrative(`It's my ex <Actor.name>!`)


        Actor.dialogue(`<Player.name>, I understand that we're over. But you didn't have to block all contact with me. Can we at least be friends?`, `Happy`)
        option([
            {text: `No`},
            {text: `Yes`},
        ])
        if (0) {
            Player.dialogue(`No, there can never be any friendship between us.`, `Angry`)
            Actor.rapportwithplayer -= random(0, 1)
        } else {
            Player.dialogue(`Fine. I guess we can give this friendship thing a try. I'll unblock you. But don't take this as a false signal that I'm still attracted to you, because I'm not.`, `Sad`)
            Player.exchangeContact(Actor)
            Actor.rapportwithplayer += random(0, 10)
        }


    })
    scene.timeout(400, "ex_wants_to_be_friends")
})
module.exports = scene