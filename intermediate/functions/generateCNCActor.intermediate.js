function generateCNCActor(scene) {
  const {Player, random} = scene
  let cncActorIsMale = scene.boolean(true, "cncActorIsMale")
  scene.$if(  Player.isInterestedInWomen().and(  Player.isInterestedInMen()), function () {
      scene.$if(      random(0, 1).gt(0), () => {
          cncActorIsMale.assign(false, "cncActorIsMale")
      }).$endIf()
  }).$else$if(      Player.isInterestedInWomen(), () => {
          cncActorIsMale.assign(false, "cncActorIsMale")
      }).$endIf()
  let CNCActor = scene.generatePersonTemporary(['fourties', 'bodybuilder'], "CNCActor")
  CNCActor.dress()
  scene.$if(cncActorIsMale, function () {
CNCActor.likes_vaginal =       random(50, 100)
CNCActor.fertility =       random(5, 20)
  }).$else(function () {
      CNCActor.assign(      scene.generatePersonTemporary(['fourties', 'bodybuilder_F']), "CNCActor")
CNCActor.likes_tribadism =       random(50, 100)
CNCActor.fertility =       random(0, 2)
CNCActor.stock_pill =       random(5, 20)
  }).$endIf()
CNCActor.masochist =   random(-100, -20)
CNCActor.likes_rough =   random(50, 100)
CNCActor.likes_anal =   random(50, 100)
CNCActor.likes_bondage =   random(50, 100)
CNCActor.prone_to_orgasm =   random(50, 100)
CNCActor.stock_rapedrug =   random(5, 20)
CNCActor.stock_condom =   random(5, 20)
return CNCActor
}