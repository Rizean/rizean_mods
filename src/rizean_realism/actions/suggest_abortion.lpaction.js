const {LPAction} = require('lifeplayjs')

module.exports = new LPAction({
    ACTION_UNIQUEID: 'suggest_abortion',
    ACTION_NAME: 'Suggest abortion',
    WHERE: 'interaction',
    WHEN: '0 - 24',
    MINUTES: '30 - 60',
    TIMEOUT_MINUTES: 0,
    ALSO_TIMEOUT: '',
    EFFECTS: '',
    CONDITIONS: 'masochist < 0 (STAT_COMPARE)',
    MOVE_FIRST: true,
    SCENE_ALWAYS: 'suggest_abortion',
    ANIMATION: 'socialize',
    WHO: 'Actor = getTarget(); If Actor.isPregnant()'
})