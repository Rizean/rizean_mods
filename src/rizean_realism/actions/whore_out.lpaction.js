const {LPAction} = require('lifeplayjs')

module.exports = new LPAction({
    ACTION_UNIQUEID: 'whore_out',
    ACTION_NAME: 'Whore myself out',
    WHERE: 'sexwork',
    WHEN: '0 - 24',
    MINUTES: '30 - 60',
    TIMEOUT_MINUTES: 0,
    ALSO_TIMEOUT: '',
    EFFECTS: 'mood -1 (END), energy -1 (END)',
    CONDITIONS: 'companioncount == 0 (STAT_COMPARE), perversion >= 50 (STAT_COMPARE)',
    MOVE_FIRST: true,
    SCENE_ALWAYS: 'john_approaches',
    ANIMATION: 'socialize'
})

// , perversion > 50 (STAT_COMPARE)
/*
,
    WHO: 'Actor = getPerson(); if Player.perversion > 50'
 */