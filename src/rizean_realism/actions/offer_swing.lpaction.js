const {LPAction} = require('lifeplayjs')

module.exports = new LPAction({
    ACTION_UNIQUEID: 'offer_swing',
    ACTION_NAME: 'Suggest swinging',
    WHERE: 'interaction',
    WHEN: '0 - 24',
    MINUTES: '10 - 30',
    TIMEOUT_MINUTES: 0,
    ALSO_TIMEOUT: '',
    EFFECTS: '',
    CONDITIONS: 'perversion > 40 (STAT_COMPARE)',
    MOVE_FIRST: true,
    SCENE_ALWAYS: 'offer_swing',
    ANIMATION: '',
    WHO: 'Actor = getTarget(); If Player.isDating() && !Actor.isDating() && !Actor.isCreature()',
})