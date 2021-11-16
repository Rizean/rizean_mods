// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_NonConsensual\Scenes\wi_ex_rape_family.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'wi_ex_rape_family'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all", " -sleep", " -nap"])
    scene.where(["home"])
    scene.when([0, 24])
    let Actor2 = Player.getRelative("Sibling", "StepSibling", "Cousin", "Child", "StepChild")
    scene.who(($IF) => {
        Actor2 = Player.getRelative("Sibling", "StepSibling", "Cousin", "Child", "StepChild")
        $IF(!Actor2.isAsexual() && Actor2.livesWithPlayer() && random(30, 100) < Actor2.masochist && Actor2.martial < 50)
    })
    scene.other(($IF) => {
        $IF(!Player.isAtHome())
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
        narrative(`Oh no, it's my <Actor2.relationship>'s pyscho ex <Actor.name> hammering on at our apartment's door again. <Actor.He_or_She> was a violent and abusive partner - <Actor2.name> was lucky to somehow manage to get away from <Actor.him_or_her> in the end but I know <Actor2.he_or_she> can be quite weak-willed and is most likely not over <Actor.his_or_her> mental control completely.`)
        option([
            {text: `Confront <Actor.name>`},
            {text: `Urge <Actor2.name> to hide`},
            {text: `Hide in the bathroom myself`, condition: scene.isModEnabled("vin_NTR")},
        ])
        if (0) {
            Player.karma += 5
            narrative(`This is unacceptable. I'm <Actor2.name>'s <Actor2.callplayer>. It's my proud duty to protect <Actor2.him_or_her>.`)
            Player.dialogue(`<Actor2.name> doesn't have to open the door for you <Actor.asshole_or_bitch>! Get the fuck out of our sight, or else!`, `Angry`)
            Actor.animate("martialart")
            Actor.moveToPersonStand(Player, 100)
            Actor.dialogue(`Ah you must be the nosy <Actor2.callplayer>? Take this!`, `Furious`)
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
                Actor.dialogue(`<Actor2.name>, stop hiding. Get out and see me. You know you can't resist some alpha dominance! Your brain was programmed that way. Accept it!`, `Evil`)
            } else {
                Raped = false
                Actor.animate("fightlost")
                Actor.dialogue(`Ah!`, `Pain`)
                Player.dialogue(`That should teach you to leave my <Actor2.relationship> alone!`, `Furious`)
                narrative(`Bravo me! I beat the living shit out of that psycho. Hopefully this would get rid of this nuisance for good and break the mental control this <Actor.asshole_or_bitch> has over my <Actor2.relationship>.`)
                Actor2.rapportwithplayer += random(0, 5)
            }
        } else if (1) {
            Player.karma += 5
            Player.masochist += random(0, 0.5)
            narrative(`We should stay calm. I'm not going to try to act stupidly brave. There are more measured ways to deal with this than confronting <Actor.name> directly.`)
            narrative(`I whisper to <Actor2.name> that we should just stay silent and hide in our rooms, pretending that no-one's here, until <Actor.name> gets tired of hammering on the door and leaves.`)
            narrative(`I stayed with my <Actor2.relationship>, giving <Actor2.him_or_her> the mental support that <Actor2.he_or_she> needs.`)
            Raped = false
        } else if (2) {
            narrative(`Damn, this <Actor.guy_or_girl> is a dangerous psycho. I'd much rather not get caught in the crossfire of their problems.`)
            Player.karma -= 5
            narrative(`Pride is highly overrated - life is more important. I'd better go hide in the bathroom.`)
            Player.masochist += random(0, 3)
            Actor2.rapportwithplayer -= random(0, 5)
            Raped = true
            narrative(`Wait, is that the sound of the apartment door opening?`)
            narrative(`My <Actor2.relationship> is an idiot! These dominant <Actor.guys_or_girls> never fail to get <Actor2.his_or_her> heart racing and <Actor2.his_or_her> brain fucked up. This psycho may not be <Actor2.his_or_her> <Actor.boyfriend_or_girlfriend> anymore, but <Actor.he_or_she> never lost control of <Actor2.him_or_her>.`)
            Actor.dialogue(`What took you so fucking long, you whore?`, `Angry`)
        }


        if (Raped) {
            Player.hide()
            Actor2.dress()
            Actor2.show(0)
            narrative(`We all know what's coming now ...`)
            Actor.dialogue(`Now, you deserve a punishment!`, `Angry`)
            narrative(`And just like that, <Actor.name> grabbed <Actor2.name> and threw <Actor2.him_or_her> into the bed without a care of whether that might hurt <Actor2.him_or_her>. <Actor.name> proceeded to brutally rape <Actor.him_or_her> right there and then ...`)
            option([
                {text: `Call the cops`},
                {text: `Peep on them`},
            ])
            if (0) {
                narrative(`I'm clearly no match for <Actor.name> in a fight so let's not risk my life for nothing here. But at least I can call the cops.`)
                narrative(`Eventually, the cops did arrive and arrest <Actor.name> ... Too late though, <Actor.he_or_she> had plenty of time to fuck my <Actor2.relationship>'s brains out ...`)
                Player.mood -= random(0, 75)
            } else {
                Player.masochist += random(0, 5)
                narrative(`I should be the definition of a cuck in the dictionary. My own <Actor2.relationship> was getting violated by <Actor2.his_or_her> abusive ex and here I am, all strangely turned on ...`)
                scene.filter("Aggressive")
                scene.talkNonConsensual()
                scene.sex(Actor, Actor2)
                Actor2.incest += random(0, 10)
            }
        }
    })
    scene.timeout(500, "wi_ex_rape_family")
})
module.exports = scene