const {LPAction} = require('lifeplayjs')

module.exports = new LPAction({
    ACTION_UNIQUEID: 'poly_fucks_poly',
    ACTION_NAME: 'Suggests fucking another poly lover',
    WHERE: 'interaction',
    WHEN: '0 - 24',
    MINUTES: '1 - 1',
    TIMEOUT_MINUTES: 0,
    ALSO_TIMEOUT: '',
    EFFECTS: '',
    CONDITIONS: 'perversion > 30 (STAT_COMPARE)',
    MOVE_FIRST: true,
    SCENE_ALWAYS: 'poly_fucks_poly',
    ANIMATION: '',
    WHO: 'Actor = getTarget(); If Actor.isDating() && OpenRelationship()',
})