// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\work\pr_scandal.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'pr_scandal'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["work"])
    scene.where(["work"])
    scene.when([8, 20])
    scene.who("none")
    scene.other(($IF) => {
        $IF(random(0, 100) < 0.001 * Player.jobexperience)
    })


    scene.start(() => {
        let jobperformace = 100
        narrative(`Hmm, a new e-mail ... What? The CEO is sending me an e-mail? This must be a mistake.`)
        narrative(`'Hahaha, that client is an idiot. How he made his millions - I'll never know. That was a shitty deal we managed to get the fool to sign'`)
        narrative(`Nasty business! They deliberately deceived clients while laughing behind their backs. If this gets out, it would be a major PR disaster.`)
        narrative(`Ah, I get why this e-mail ended up in my inbox: I have the same last name as someone on the board. The CEO sent it to the wrong person.`)
        narrative(`In any case, I now have the evidence that could potentially bring down this company's reputation. There are a lot of media organizations that would love to break this for a generous payment. What should I do?`)
        option([
            {text: `Sell it to the press`},
            {text: `Stay quiet`},
        ])
        if (0) {
            narrative(`How can I turn down making a small fortune? I sold the bombshell email to the news organization that bid the most, while remaining anonymous. It was a major scandal and the company immediately became the center of public anger.`)
            Player.money += random(50000, 500000)
            Player.karma -= 50
            narrative(`Of course, it was easy enough still for the company to track down the leaker and I was promptly fired. Also, most companies in  the industry wouldn't dare to hire me now after what I've done. But who cares? I now have more money than I know what to do with.`)
            Player.loseJob()
            Player.jobexperience = 0
        } else {
            narrative(`I'd better not be greedy and ruin this company's reputation. The company has treated me well enough. And what will my colleagues think of me then?`)
            narrative(`I even responded back to the CEO notifying him of his mistake and advising him to be more careful in the future. Realizing how much of a disaster he just escaped, he personally met me to thank me for my loyalty. I also have the feeling that a promotion is coming my way soon ...`)
            jobperformace = 100
        }


    })
    scene.timeout(20000, "pr_scandal")


})
module.exports = scene