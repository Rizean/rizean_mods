// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\work\sexual_harassment.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'sexual_harassment'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, choice} = scene

    scene.what(["all"])
    scene.where(["work"])
    scene.when([7, 22])
    let Harasser = scene.getSpecific("Colleague")
    scene.who(($IF) => {
        Harasser = scene.getSpecific("Colleague")
        $IF(random(0, 100) < 10 && !Harasser.isContactExchanged() && Harasser.isInterestedIn(Player) && (Harasser.isDominantSex(Player) || Harasser.perversion > random(70, 100)) && Harasser.perversion > random(50, 100) && Harasser.attractionToPlayer > random(0, 30))
    })
    scene.other("none")


    scene.start(() => {
        scene.setBackground("work")
        Harasser.dress()
        Harasser.show(2)


        Harasser.dialogue(`Oh look at you! Aren't you an eye candy? You have no idea how much having you in the office brightens up my days, although I would much rather have you in a more private space, if you catch my meaning ...`, `Flirty`)
        narrative(`Oh there <Harasser.he_or_she> is again, getting all flirtatious and handsy.`)
        option([
            {text: `It's sexual harassment`},
            {text: `I enjoy the attention`},
        ])
        if (0) {
            narrative(`This inappropriate behaviour really needs to stop, but how can I make it stop?`)
            option([
                {text: `Do nothing`},
                {text: `Clarify lack of interest`, condition: Player.masochist < 75},
                {text: `Threaten to tell HR`, condition: Player.masochist < 50},
                {text: `Report to HR`, condition: Player.masochist < 25},
            ])
            if (0) {
                narrative(`<Harasser.He_or_She> might be a bit unprofessional, but I don't want to be mean or threaten <Harasser.his_or_her> job.`)
                narrative(`Hopefully, <Harasser.he_or_she> doesn't take my silence as invitation.`)
                Harasser.attractionToPlayer += random(0, 2)
            } else if (1) {
                Player.dialogue(`Cut it out, <Harasser.name>! I told you many times before: I'm not interested!`, `Angry`)
                Harasser.dialogue(`Not yet, but you will be, eventually ...`, `Flirty`)
            } else if (2) {
                Player.dialogue(`Get your hands off me! This is sexual harassment. If I report to HR, you'll lose your job!`, `Angry`)
                Harasser.dialogue(`Hey, hey! Take it easy there. I haven't done anything - just paying compliments to my lovely colleague. No need to bring this up with the HR people.`, `Scared`)
                Harasser.attractionToPlayer -= random(0, 5)
            } else {
                narrative(`Enough is enough! I'm telling HR all about this pervert.`)
                Harasser.hide()
                narrative(`A few days later ...`)
                if (Harasser.interpersonal > random(0, 100)) {
                    narrative(`'Thank you for your e-mail. Rest assured, we take all accusations of sexual harassment in the workplace very seriously. As such, we have brought up the issue with <Harasser.name>. While we have not found enough evidence for a sackable offence, we have requested that <Harasser.name> restrained from any further actions that may make <Harasser.his_or_her> colleagues uncomfortable'`)
                    Harasser.attractionToPlayer -= random(0, 30)
                    Harasser.rapportwithplayer -= random(0, 30)
                    narrative(`<Harasser.He_or_She> didn't get fired, but that should be enough of a warning. I hope the pervert leaves me alone from now on ...`)
                } else {
                    narrative(`Great news! HR investigated the issue. Apparently I wasn't the only one being harassed by <Harasser.name> - other victims had come forward too. As such, they had no choice but to fire the pervert. Good riddance!`)
                    Harasser.removeColleague()
                    Harasser.attractionToPlayer -= random(0, 100)
                    Harasser.rapportwithplayer = -100
                }
            }
        } else if (1) {
            narrative(`I must say though: I do enjoy the attention. Besides, <Harasser.name> is all talk and no action. No harm has ever been done. I'll just leave <Harasser.him_or_her> be ...`)
            Harasser.attractionToPlayer += random(0, 5)
            Player.perversion += random(0, 0.5)
            if (Player.perversion > random(0, 100)) {
                narrative(`Or ... maybe I should just give the pervert what <Harasser.he_or_she> obviously wants and be done with it!`)
                option([
                    {text: `Give <Harasser.name> my number`},
                    {text: `Do nothing`},
                ])
                if (0) {
                    Player.dialogue(`Look at you, all talk and no action. Why don't you actually invite me out some time?`, `Flirty`)
                    narrative(`With that said, I slipped a piece of paper to <Harasser.name> with my personal number on it. The pervert couldn't believe <Harasser.his_or_her> luck!`)
                    Player.exchangeContact(Harasser)
                } else {
                    narrative(`Actually, that is a very bad idea. It's annoying enough having to deal with such a weirdo at work - I'm not going to invite <Harasser.him_or_her> into my private life.`)
                }
            }
        }


        scene.timeout(150, "sexual_harassment")
    })
})
module.exports = scene