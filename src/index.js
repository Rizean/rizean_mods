console.log(process.argv)
if (process.argv[2]?.trim() === 'build') {
    require('dotenv').config({ path: 'lpjs.build.env' })
} else {
    require('dotenv').config({ path: 'lpjs.env' })
}

require(`./rizean_cnc_bdsm/rizean_cnc_bdsm.lpmod`)
require(`./rizean_realism/rizean_realism.lpmod`)
