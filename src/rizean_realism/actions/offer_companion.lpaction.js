const {LPAction} = require('lifeplayjs')

module.exports = new LPAction({
    ACTION_UNIQUEID: 'offer_companion',
    ACTION_NAME: 'Suggest sleeping with current companion',
    WHERE: 'interaction',
    WHEN: '0 - 24',
    MINUTES: '10 - 30',
    TIMEOUT_MINUTES: 0,
    ALSO_TIMEOUT: '',
    EFFECTS: '',
    CONDITIONS: 'perversion > 50 (STAT_COMPARE), masochist < -50 (STAT_COMPARE)',
    MOVE_FIRST: true,
    SCENE_ALWAYS: 'offer_companion',
    ANIMATION: '',
    WHO: 'Dating = getTarget(); If Dating.isDating() && isWithCompanion() && !CurrentCompanion.isCreature() && [CurrentCompanion.masochist > 50 || CurrentCompanion.perversion > 50]',
})