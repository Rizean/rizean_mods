const {LPAction} = require('lifeplayjs')

module.exports = new LPAction({
    ACTION_UNIQUEID: 'start_a_porn_career',
    ACTION_NAME: 'Become a pornstar',
    WHERE: 'sexwork',
    WHEN: '0 - 24',
    MINUTES: '1 - 1',
    TIMEOUT_MINUTES: 0,
    ALSO_TIMEOUT: '',
    EFFECTS: '',
    CONDITIONS: 'pornfame == 0 (STAT_COMPARE), perversion > 60 (STAT_COMPARE)',
    MOVE_FIRST: false,
    SCENE_ALWAYS: 'start_a_porn_career',
    ANIMATION: '',
})