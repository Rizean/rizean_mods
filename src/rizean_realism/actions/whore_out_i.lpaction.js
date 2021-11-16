const {LPAction} = require('lifeplayjs')

module.exports = new LPAction({
    ACTION_UNIQUEID: 'whore_out_i',
    ACTION_NAME: 'Whore myself out',
    WHERE: 'interaction',
    WHEN: '0 - 24',
    MINUTES: '5 - 10',
    TIMEOUT_MINUTES: 0,
    ALSO_TIMEOUT: '',
    EFFECTS: 'mood -1 (END), energy -1 (END)',
    CONDITIONS: 'companioncount == 0 (STAT_COMPARE)',
    MOVE_FIRST: true,
    SCENE_ALWAYS: 'whore_out_i',
    ANIMATION: '',
    WHO: 'Actor = getTarget(); If Actor.isTemporary() && [perversion > 50 || money < -2000] && [WHERE == brothel || WHERE == hotel || WHERE == bar || WHERE == nightclub || WHERE == pub || WHERE == stripclub] && !Actor.isCreature() && !Actor.isAt(work)',
})