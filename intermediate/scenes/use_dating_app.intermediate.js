const $IF = (rhs) => {
   //rhs.writeLine(`If ${rhs.expression || rhs}`)
   rhs.write(`If `)
}

module.exports = (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene
    scene.what(["none"])
    scene.where(["none"])
    scene.when([0, 24])
    scene.who("none")
    scene.other(($IF) => {

    })
    scene.start(() => {
        narrative(`Which dating app should I use?`)
        option([{text: `OK! Love`}, {text: `Seeker (Young and Old)`, condition: Player.likes_older.gt(15)}, {text: 'Never mind'}])
        scene.$if(0, function () {
            scene.followUp('fantasy_dating_app')
        }).$else$if(1, () => {
                scene.followUp('oldyoung_dating_app')
            }).$endIf()
    })
}