module.exports = (lpMod) => {
    lpMod._debug = true
    lpMod.addFunction('drop_flirt_base', require('./drop_flirt_base'))
    lpMod.addFunction('drop_flirt_target_will_force', require('./drop_flirt_target_will_force'))
    lpMod.addFunction('drop_flirt_submissive', require('./drop_flirt_submissive'))
    lpMod.addFunction('drop_flirt_submissive_resistances', require('./drop_flirt_submissive_resistances'))
    lpMod.addFunction('drop_flirt_submissive_resistances_give_in', require('./drop_flirt_submissive_resistances_give_in'))
    lpMod.addFunction('dropFlirt_submissiveResistances_toFar', require('./dropFlirt_submissiveResistances_toFar'))
    lpMod.addFunction('drop_flirt_non_submissive', require('./drop_flirt_non_submissive'))
    lpMod.addFunction('dropFlirt_heroSpoils', require('./dropFlirt_heroSpoils'))
    lpMod.addFunction('dropFlirt_groupCNC', require('./dropFlirt_groupCNC'))
    lpMod.addFunction('dropFlirt_soloCNC', require('./dropFlirt_soloCNC'))
    lpMod.addFunction('dropFlirt_exchange', require('./dropFlirt_exchange'))
    lpMod.addFunction('dropFlirt_bathRoomGetReady', require('./dropFlirt_bathRoomGetReady'))
    lpMod.addFunction('dropFlirt_submissiveResistances_scream', require('./dropFlirt_submissiveResistances_scream'))

    lpMod.addScene(require('./rizean_cnc_drop_flirt.lpscene'))
    lpMod.addAction(require('./drop_flirt.lpaction'))
    lpMod._debug = true
}