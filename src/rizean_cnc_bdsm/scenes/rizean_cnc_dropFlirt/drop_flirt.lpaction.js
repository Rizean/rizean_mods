const {LPAction} = require('LifePlayjs')

module.exports = new LPAction({
    ACTION_UNIQUEID: 'drop_flirt',
    ACTION_NAME: 'Drop something and give a little show',
    WHERE: 'interaction',
    WHEN: '0 - 24',
    MINUTES: '1 - 1',
    TIMEOUT_MINUTES: 0,
    ALSO_TIMEOUT: '',
    EFFECTS: 'mood 1 (END), arousal +5 (END)',
    CONDITIONS: 'perversion > 50 (STAT_COMPARE)',
    MOVE_FIRST: false,
    SCENE_ALWAYS: 'rizean_cnc_dropFlirt',
    ANIMATION: '',
})