const modsDir = process.env.MODS_DIR
const intermediateDir = process.env.INTERMEDIATE_DIR
const {LPMod} = require('LifePlayjs')

// ***** Edit Below this line ***** //

const lpMod = new LPMod({
    MODULE_UNIQUEID: 'rizean_cnc_bdsm',
    MODULE_NAME: 'Rizean CNC/BDSM',
    MODULE_AUTHOR: 'Rizean',
    MODULE_LINK: '',
    MODULE_DESCRIPTION: 'CNC/BDSM - Adds new scenes and overrides/expands some core scenes with more options.',
    MODULE_REQUIREMENTS: '',
    MODULE_VERSION: '0.0.1',
    modsDir,
    intermediateDir,
})

lpMod.addFunction('generateBadCop', require('./functions/generateBadCop'))
lpMod.addFunction('generateCNCActor', require('./functions/generateCNCActor'))


// dropFlirt
require('./scenes/rizean_cnc_dropFlirt')(lpMod)


// lpMod.addStat(require('./stats/tests.lpstat'))
// lpMod.addStat(require('./stats/bugs.lpstat'))


lpMod.addAction(require('./actions/rizean_cnc_bdsm_drunk_bait.lpaction'))

lpMod.addScene(require('./scenes/rizean_cnc_bdsm_drunk_bait.lpscene'))
lpMod.addScene(require('./scenes/spiced_drink.lpscene'))






// ***** Edit Above this line ***** //
lpMod.writeMod()