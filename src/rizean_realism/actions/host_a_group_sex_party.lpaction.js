const {LPAction} = require('lifeplayjs')

module.exports = new LPAction({
    ACTION_UNIQUEID: 'host_a_group_sex_party',
    ACTION_NAME: 'Host a group sex party',
    WHERE: 'home',
    WHEN: '0 - 24',
    MINUTES: '5 - 5',
    TIMEOUT_MINUTES: 0,
    ALSO_TIMEOUT: '',
    EFFECTS: '',
    CONDITIONS: 'perversion > 40 (STAT_COMPARE)',
    MOVE_FIRST: true,
    SCENE_ALWAYS: 'group_sex_party',
    ANIMATION: 'call',
})