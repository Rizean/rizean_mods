const {LPAction} = require('lifeplayjs')

module.exports = new LPAction({
    ACTION_UNIQUEID: 'find_a_modeling_agency',
    ACTION_NAME: 'Find a model agency',
    WHERE: 'modeling',
    WHEN: '0 - 24',
    MINUTES: '60 - 120',
    TIMEOUT_MINUTES: 0,
    ALSO_TIMEOUT: '',
    EFFECTS: 'mood -1 (END), energy -1 (END)',
    CONDITIONS: 'companioncount == 0 (STAT_COMPARE), modelfame == 0 (STAT_COMPARE), perversion > 10 (STAT_COMPARE)',
    MOVE_FIRST: false,
    SCENE_ALWAYS: 'find_a_modeling_agency',
    ANIMATION: 'call',
})