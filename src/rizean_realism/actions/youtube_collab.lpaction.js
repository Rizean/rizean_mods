const {LPAction} = require('lifeplayjs')

module.exports = new LPAction({
    ACTION_UNIQUEID: 'call_a_hooker',
    ACTION_NAME: 'Call a hooker',
    WHERE: 'pc, home',
    WHEN: '0 - 24',
    MINUTES: '60 - 180',
    TIMEOUT_MINUTES: 1140,
    ALSO_TIMEOUT: '',
    EFFECTS: 'mood -5 (END), energy -10 (END)',
    CONDITIONS: '',
    MOVE_FIRST: false,
    SCENE_ALWAYS: 'youtube_collab_cms',
    ANIMATION: 'browse',
})