const {LPAction} = require('lifeplayjs')

module.exports = new LPAction({
    ACTION_UNIQUEID: 'manage_poly',
    ACTION_NAME: 'Manage polyamorous relationships',
    WHERE: 'home',
    WHEN: '0 - 24',
    MINUTES: '1 - 1',
    TIMEOUT_MINUTES: 0,
    ALSO_TIMEOUT: '',
    EFFECTS: '',
    CONDITIONS: 'perversion > 30 (STAT_COMPARE)',
    MOVE_FIRST: true,
    SCENE_ALWAYS: 'manage_poly',
    ANIMATION: '',
})