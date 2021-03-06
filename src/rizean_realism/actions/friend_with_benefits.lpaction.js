const {LPAction} = require('lifeplayjs')

module.exports = new LPAction({
    ACTION_UNIQUEID: 'friend_with_benefits',
    ACTION_NAME: 'Call friends with benefits',
    WHERE: 'home',
    WHEN: '0 - 24',
    MINUTES: '5 - 10',
    TIMEOUT_MINUTES: 0,
    ALSO_TIMEOUT: '',
    EFFECTS: '',
    CONDITIONS: 'perversion > 25 (STAT_COMPARE)',
    MOVE_FIRST: true,
    SCENE_ALWAYS: 'friend_with_benefits',
    ANIMATION: '',
})