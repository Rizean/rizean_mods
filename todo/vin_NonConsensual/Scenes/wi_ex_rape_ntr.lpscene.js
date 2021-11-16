// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_NonConsensual\Scenes\wi_ex_rape_ntr.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'wi_ex_rape_ntr'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all", " -sleep", " -nap"])
    scene.where(["home"])
    scene.when([0, 24])
    let Actor2 = scene.getSpecific("Dating")
    scene.who(($IF) => {
        Actor2 = scene.getSpecific("Dating")
        $IF(random(30, 100) < Actor2.masochist && Actor2.martial < 50)
    })
    scene.other(($IF) => {
        $IF(Player.isAtDatingHome())
    })


    scene.start(() => {
        let Actor = scene.generatePersonTemporary([])
        let Raped = true
        Actor = scene.generatePersonTemporary([])
        while (!Actor2.isInterestedIn(Actor)) {
            Actor = scene.generatePersonTemporary([])
        }
        Actor.dress()
        Actor.show(2)
        Actor.dialogue(`Open the door! Open the fucking door, you <Actor2.asshole_or_bitch>!`, `Angry`)
        narrative(`Oh no, it's my <Actor2.boyfriend_or_girlfriend>'s pyscho ex <Actor.name> hammering on our apartment's door again. <Actor.He_or_She> was a violent and abusive partner - <Actor2.name> was lucky to somehow manage to get away from <Actor.him_or_her> in the end but I know <Actor2.he_or_she> can be quite weak-willed and is most likely not over <Actor.his_or_her> mental control completely.`)
        option([
            {text: `Confront <Actor.name>`},
            {text: `Urge <Actor2.name> to hide`},
            {text: `Hide in the bathroom myself`, condition: scene.isModEnabled("vin_NTR")},
        ])
        if (0) {
            Player.karma += 2.5
            narrative(`This is unacceptable. I'm <Actor2.name>'s new <Player.boyfriend_or_girlfriend> now. It's my proud duty to protect <Actor2.him_or_her>.`)
            Player.dialogue(`<Actor2.name> doesn't have to open the door for you <Actor.asshole_or_bitch>! Get the fuck out of our sight, or else!`, `Angry`)
            Actor.animate("martialart")
            Actor.moveToPersonStand(Player, 100)
            Actor.dialogue(`Ah you must be the new <Player.boyfriend_or_girlfriend>? Take this!`, `Furious`)
            scene.faceEachOther(Actor, Player)
            Player.animate("martialart")
            Player.dialogue(`I'll teach you a lesson!`, `Furious`)
            Player.animate()
            Actor.animate()
            if (Actor.martial > Player.martial && scene.isModEnabled("vin_NTR")) {
                Raped = true
                Player.animate("fightlost")
                Player.dialogue(`Ah!`, `Pain`)
                Actor.dialogue(`Not so tough now, are you?`, `Furious`)
                narrative(`I'm knocked out. I might have been brave but was no match in a fight with this psycho ...`)
                Actor.dialogue(`<Actor2.name>, why are you with this pussy? You know you can't resist some alpha dominance! Your brain was programmed that way. Accept it!`, `Evil`)
            } else {
                Raped = false
                Actor.animate("fightlost")
                Actor.dialogue(`Ah!`, `Pain`)
                Player.dialogue(`That should teach you to leave my <Actor2.boyfriend_or_girlfriend> alone!`, `Furious`)
                narrative(`Bravo me! I beat the living shit out of that psycho. Hopefully this would get rid of this nuisance for good and break the mental control this <Actor.bastard_or_bitch> has over my <Actor2.boyfriend_or_girlfriend>.`)
                Actor2.attractionToPlayer += random(0, 5)
            }
        } else if (1) {
            Player.karma += 2.5
            Player.masochist += random(0, 0.5)
            narrative(`We should stay calm. I'm not going to try to act stupidly brave. There are more measured ways to deal with this than confronting <Actor.name> directly.`)
            narrative(`I whisper to <Actor2.name> that we should just stay silent and hide in our room, pretending that no one's here, until <Actor.name> gets tired of hammering on the door and leaves.`)
            narrative(`I stayed with <Actor2.him_or_her>, giving <Actor2.him_or_her> the mental support that <Actor2.he_or_she> needs.`)
            Raped = false
        } else if (2) {
            Player.karma -= 10
            narrative(`Damn, this <Actor.guy_or_girl> is a dangerous psycho. I dread to think of what <Actor.he_or_she> would do to me if <Actor.he_or_she> found me here living with <Actor.his_or_her> ex.`)
            narrative(`Pride is highly overrated - life is more important. I'd better go hide in the bathroom.`)
            Player.masochist += random(0, 3)
            Actor2.attractionToPlayer -= random(0, 5)
            Raped = true
            narrative(`Wait, is that the sound of the apartment door opening?`)
            narrative(`My <Actor2.boyfriend_or_girlfriend> is an idiot! These dominant <Actor.guys_or_girls> never fail to get <Actor2.his_or_her> heart racing and <Actor2.his_or_her> brain fucked up. This psycho may not be <Actor2.his_or_her> <Actor.boyfriend_or_girlfriend> anymore, but <Actor.he_or_she> never lost control of <Actor2.him_or_her>.`)
            Actor.dialogue(`What took you so fucking long, you whore?`, `Angry`)
        }


        if (Raped) {
            Player.hide()
            Actor2.dress()
            Actor2.show(0)
            narrative(`We all know what's coming now ...`)
            Actor.dialogue(`Now, you deserve a punishment!`, `Angry`)
            narrative(`And just like that, <Actor.name> grabbed <Actor2.name> and threw <Actor.him_or_her> into the bed without a care of whether that might hurt <Actor2.him_or_her>. <Actor.name> proceeded to brutally rape <Actor2.him_or_her> right there and then ...`)
            option([
                {text: `Call the cops`},
                {text: `Peep on them`},
            ])
            if (0) {
                narrative(`I'm clearly no match for <Actor.name> in a fight so let's not risk my life for nothing here. But at least I can call the cops.`)
                narrative(`Eventually, the cops did arrive and arrest <Actor.name> ... Too late though, <Actor.he_or_she> had plenty of time to fuck my <Actor2.boyfriend_or_girlfriend>'s brains out ...`)
                Player.mood -= random(0, 100)
            } else {
                Player.masochist += random(0, 5)
                narrative(`I should be the definition of a cuck in the dictionary. My own <Actor2.boyfriend_or_girlfriend> was getting violated by <Actor2.his_or_her> abusive ex and here I am, all strangely turned on ...`)
                scene.filter("Aggressive")
                scene.talkNonConsensual()
                scene.sex(Actor, Actor2)
            }
        }
    })
    scene.timeout(500, "wi_ex_rape_ntr")
})
module.exports = scene