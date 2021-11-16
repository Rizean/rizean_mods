const {LPAction} = require('lifeplayjs')

module.exports = new LPAction({
    ACTION_UNIQUEID: 'organize_poly_party',
    ACTION_NAME: "Organize a poly swingers' party",
    WHERE: 'home',
    WHEN: '0 - 24',
    MINUTES: '1 - 1',
    TIMEOUT_MINUTES: 0,
    ALSO_TIMEOUT: '',
    EFFECTS: '',
    CONDITIONS: 'perversion > 50 (STAT_COMPARE)',
    MOVE_FIRST: true,
    SCENE_ALWAYS: 'organize_poly_party',
    ANIMATION: '',
})