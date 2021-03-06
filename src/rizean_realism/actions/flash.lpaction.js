const {LPAction} = require('lifeplayjs')

module.exports = new LPAction({
    ACTION_UNIQUEID: 'flash',
    ACTION_NAME: 'Flash private parts',
    WHERE: 'interaction',
    WHEN: '0 - 24',
    MINUTES: '1 - 1',
    TIMEOUT_MINUTES: 0,
    ALSO_TIMEOUT: '',
    EFFECTS: '',
    CONDITIONS: 'perversion > 20 (STAT_COMPARE)',
    MOVE_FIRST: true,
    SCENE_ALWAYS: 'flash',
    ANIMATION: '',
    WHO: 'Actor = getTarget(); If !Actor.isCreature() && [Actor.isDating() || perversion > 30]',
})