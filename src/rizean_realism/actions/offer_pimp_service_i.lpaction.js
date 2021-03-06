const {LPAction} = require('lifeplayjs')

module.exports = new LPAction({
    ACTION_UNIQUEID: 'offer_pimp_service_i',
    ACTION_NAME: 'Offer pimp services',
    WHERE: 'interaction',
    WHEN: '0 - 24',
    MINUTES: '10 - 30',
    TIMEOUT_MINUTES: 0,
    ALSO_TIMEOUT: '',
    EFFECTS: '',
    CONDITIONS: 'perversion > 50 (STAT_COMPARE)',
    MOVE_FIRST: true,
    SCENE_ALWAYS: 'offer_pimp_service_i',
    ANIMATION: '',
    WHO: 'Actor = getTarget(); If !Actor.isCreature()',
})