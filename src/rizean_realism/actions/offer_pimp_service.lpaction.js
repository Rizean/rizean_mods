const {LPAction} = require('lifeplayjs')

module.exports = new LPAction({
    ACTION_UNIQUEID: 'offer_pimp_service',
    ACTION_NAME: 'Offer pimp services',
    WHERE: 'sexwork',
    WHEN: '0 - 24',
    MINUTES: '1 - 1',
    TIMEOUT_MINUTES: 0,
    ALSO_TIMEOUT: '',
    EFFECTS: '',
    CONDITIONS: 'perversion > 50 (STAT_COMPARE), companioniswhore == 0 (STAT_COMPARE), companioncount == 1 (STAT_COMPARE)',
    MOVE_FIRST: false,
    SCENE_ALWAYS: 'offer_pimp_service',
    ANIMATION: '',
})