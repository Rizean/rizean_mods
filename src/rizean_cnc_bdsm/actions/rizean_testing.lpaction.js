const {LPAction} = require('LifePlayjs')

module.exports = new LPAction({
    ACTION_UNIQUEID: 'rizean_testing',
    ACTION_NAME: 'Rizean Test Menu',
    WHERE: 'PC',
    WHEN: '0 - 24',
    MINUTES: '1 - 5',
    TIMEOUT_MINUTES: 0,
    ALSO_TIMEOUT: '',
    EFFECTS: '',
    CONDITIONS: '',
    MOVE_FIRST: false,
    SCENE_ALWAYS: 'rizean_testMenu',
    ANIMATION: 'browse',
})