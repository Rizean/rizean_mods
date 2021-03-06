const {LPAction} = require('lifeplayjs')

module.exports = new LPAction({
    ACTION_UNIQUEID: 'breeding_party',
    ACTION_NAME: 'Suggest Breeding Party for me',
    WHERE: 'interaction',
    WHEN: '0 - 24',
    MINUTES: '0 - 1',
    TIMEOUT_MINUTES: 0,
    ALSO_TIMEOUT: '',
    EFFECTS: '',
    CONDITIONS: 'perversion > 50 (STAT_COMPARE)',
    MOVE_FIRST: false,
    SCENE_ALWAYS: 'breeding_party_cms',
    ANIMATION: '',
    WHO: 'Actor = getTarget(); If Actor.isSameAs(CurrentCompanion) && Actor.isDating() && !Actor.isPregnant() && !Player.isPregnant() && Player.wantsBabies()'
})

// Actor = getTarget(); If Actor.isSameAs(CurrentCompanion) && Actor.isDating() && !Actor.isPregnant() && !Player.isPregnant() && Player.wantsBabies()
// WHO: Actor = getTarget(); If Actor.isDating() && !Actor.isPregnant() && !Player.isPregnant() && !Actor.wantsBabies() && !Player.wantsBabies() && !Actor.isCreature()