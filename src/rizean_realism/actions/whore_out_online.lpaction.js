const {LPAction} = require('lifeplayjs')

module.exports = new LPAction({
    ACTION_UNIQUEID: 'whore_out_online',
    ACTION_NAME: 'Whore myself out online',
    WHERE: 'sexwork',
    WHEN: '0 - 24',
    MINUTES: '30 - 60',
    TIMEOUT_MINUTES: 0,
    ALSO_TIMEOUT: '',
    EFFECTS: 'mood -1 (END), energy -1 (END)',
    CONDITIONS: 'companioncount == 0 (STAT_COMPARE), perversion > 40 (STAT_COMPARE)',
    MOVE_FIRST: false,
    SCENE_ALWAYS: 'john_online',
    ANIMATION: 'browse',
})