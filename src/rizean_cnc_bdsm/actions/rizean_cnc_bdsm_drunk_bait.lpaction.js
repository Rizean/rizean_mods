const {LPAction} = require('LifePlayjs')

module.exports = new LPAction({
    ACTION_UNIQUEID: 'rizean_cnc_bdsm_drunk_bait',
    ACTION_NAME: 'Get drunk and bait',
    WHERE: 'nightclub, bar, pub, restaurant, cafe, hotel, stripclub, brothel',
    WHEN: '21 - 4',
    MINUTES: '30 - 60',
    TIMEOUT_MINUTES: 7200,
    ALSO_TIMEOUT: '',
    EFFECTS: 'money -35 (START), intoxication +100 (DURATION), mood -1 (INTERRUPTED), mood +5 (END), energy -5 (END), arousal +20 (DURATION)',
    CONDITIONS: 'companioncount == 0 (STAT_COMPARE), masochist > 50 (STAT_COMPARE), perversion > 50 (STAT_COMPARE)',
    MOVE_FIRST: true,
    SCENE_ALWAYS: 'rizean_cnc_bdsm_drunk_bait',
    ANIMATION: 'drinkglass',
})

// submission > 50 (STAT_COMPARE)