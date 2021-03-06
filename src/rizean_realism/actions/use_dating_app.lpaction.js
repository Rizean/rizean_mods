const {LPAction} = require('lifeplayjs')

module.exports = new LPAction({
    ACTION_UNIQUEID: 'use_dating_app',
    ACTION_NAME: 'Use dating app',
    WHERE: 'home, pc',
    WHEN: '0 - 24',
    MINUTES: '60 - 120',
    TIMEOUT_MINUTES: 0,
    ALSO_TIMEOUT: '',
    EFFECTS: '',
    CONDITIONS: 'companioncount == 0 (STAT_COMPARE), perversion > 5 (STAT_COMPARE)',
    MOVE_FIRST: false,
    SCENE_ALWAYS: 'use_dating_app',
    ANIMATION: 'browse'
})