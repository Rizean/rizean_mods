function generateBadCop(scene) {
  const {Player, random} = scene
  let badCopIsMale = scene.boolean(true, "badCopIsMale")
  scene.$if(  Player.isInterestedInWomen().and(  Player.isInterestedInMen()), function () {
      scene.$if(      random(0, 1).gt(0), () => {
          badCopIsMale.assign(false, "badCopIsMale")
      }).$endIf()
  }).$else$if(      Player.isInterestedInWomen(), () => {
          badCopIsMale.assign(false, "badCopIsMale")
      }).$endIf()
  let BadCop = scene.generatePersonTemporary(['fourties', 'bodybuilder'], "BadCop")
  BadCop.dressUniform('police')
  scene.$if(badCopIsMale, function () {
BadCop.likes_vaginal =       random(50, 100)
BadCop.fertility =       random(5, 20)
  }).$else(function () {
      BadCop.assign(      scene.generatePersonTemporary(['fourties', 'bodybuilder_F']), "BadCop")
BadCop.likes_tribadism =       random(50, 100)
BadCop.fertility =       random(0, 2)
BadCop.stock_pill =       random(5, 20)
  }).$endIf()
BadCop.masochist =   random(-100, -20)
BadCop.likes_rough =   random(50, 100)
BadCop.likes_anal =   random(50, 100)
BadCop.likes_bondage =   random(50, 100)
BadCop.prone_to_orgasm =   random(50, 100)
BadCop.stock_rapedrug =   random(5, 20)
BadCop.stock_condom =   random(5, 20)
return BadCop
}