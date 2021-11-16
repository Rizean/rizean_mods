const {LPAction} = require('lifeplayjs')

module.exports = new LPAction({
    ACTION_UNIQUEID: 'onlyfans',
    ACTION_NAME: 'Manage OnlyFans',
    WHERE: 'sexwork',
    WHEN: '0 - 24',
    MINUTES: '120 - 120',
    TIMEOUT_MINUTES: 0,
    ALSO_TIMEOUT: '',
    EFFECTS: 'mood -1 (END), energy -1 (END)',
    CONDITIONS: 'perversion > 30 (STAT_COMPARE)',
    MOVE_FIRST: false,
    SCENE_ALWAYS: 'onlyfans',
    ANIMATION: 'browse',
})