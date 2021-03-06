const {LPAction} = require('lifeplayjs')

module.exports = new LPAction({
    ACTION_UNIQUEID: 'call_a_hooker',
    ACTION_NAME: 'Call a hooker',
    WHERE: 'home',
    WHEN: '0 - 24',
    MINUTES: '5 - 10',
    TIMEOUT_MINUTES: 0,
    ALSO_TIMEOUT: '',
    EFFECTS: 'mood -1 (END), energy -1 (END)',
    CONDITIONS: 'perversion > 35 (STAT_COMPARE)',
    MOVE_FIRST: true,
    SCENE_ALWAYS: 'call_a_hooker',
    ANIMATION: 'call',
})