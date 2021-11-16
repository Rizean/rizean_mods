function dropFlirt_exchange({scene, Target, targetWillForce}) {
  const {Player, none, $WHERE, narrative, option, random, WHEN} = scene
  Target.dialogue("Hi, my name is <Target.name>. We should do this again some time. Tell me your number?")
  narrative("Should I exchange numbers with this stranger? This not what I would call a normal hook up.")
  option([{text: "Yes"}, {text: "Yes <Target.Sir_or_Ma'am>"}, {text: "No"}])
  scene.$if(0, function () {
      narrative("We exchanged numbers and parted ways.")
      Player.exchangeContact(Target)
  }).$else$if(1, function () {
          narrative("I gave my contact information to <Target.Sir_or_Ma'am>")
Player.masochist.addEq(0.1)
          Player.exchangeContact(Target)
      }).$else$if(targetWillForce, function () {
              narrative("I pull out my phone and unlock it then think twice about it.")
              Player.dialogue("Um... I don't think I should.", 'Shy')
              narrative("<Target.name> snatches my phone out of my hands and quick load his number into my phone.")
              Player.exchangeContact(Target)
              Target.dialogue("I wasn't asking.", 'Evil')
          }).$else(function () {
              narrative("Why would I? They just forced me, even if I did bait them.")
          }).$endIf()
}