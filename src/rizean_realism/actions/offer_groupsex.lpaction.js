const {LPAction} = require('lifeplayjs')

module.exports = new LPAction({
    ACTION_UNIQUEID: 'offer_groupsex',
    ACTION_NAME: 'Suggest group sex',
    WHERE: 'interaction',
    WHEN: '0 - 24',
    MINUTES: '10 - 30',
    TIMEOUT_MINUTES: 0,
    ALSO_TIMEOUT: '',
    EFFECTS: '',
    CONDITIONS: 'perversion > 30 (STAT_COMPARE)',
    MOVE_FIRST: true,
    SCENE_ALWAYS: 'offer_groupsex',
    ANIMATION: '',
    WHO: 'Dating = getTarget(); If Dating.isDating()',
})