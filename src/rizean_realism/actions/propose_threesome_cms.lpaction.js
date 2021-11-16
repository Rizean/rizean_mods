const {LPAction} = require('lifeplayjs')

module.exports = new LPAction({
    ACTION_UNIQUEID: 'propose_threesome_cms',
    ACTION_NAME: 'Suggest threesome',
    WHERE: 'interaction',
    WHEN: '0 - 24',
    MINUTES: '1 - 1',
    TIMEOUT_MINUTES: 0,
    ALSO_TIMEOUT: '',
    EFFECTS: '',
    CONDITIONS: 'perversion > 40 (STAT_COMPARE)',
    MOVE_FIRST: true,
    SCENE_ALWAYS: 'propose_threesome_cms',
    ANIMATION: '',
    WHO: 'Actor = getTarget(); If !Actor.isCreature() && [Actor.hadSex() || Actor.isDating()]',
})