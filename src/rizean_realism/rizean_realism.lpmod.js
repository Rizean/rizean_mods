const modsDir = process.env.MODS_DIR
const intermediateDir = process.env.INTERMEDIATE_DIR
const {LPMod} = require('lifeplayjs')

// ***** Edit Below this line ***** //

const lpMod = new LPMod({
    MODULE_UNIQUEID: 'rizean_realism',
    MODULE_NAME: 'Rizean Realism',
    MODULE_AUTHOR: 'Rizean',
    MODULE_LINK: '',
    MODULE_DESCRIPTION: "Realism - Overrides many actions to add a degree of realism i.e., perversion 0 can't whore them self's out. This should be the first mod you load to give other mods the chance to override it.",
    MODULE_REQUIREMENTS: '',
    MODULE_VERSION: '0.1.0',
    modsDir,
    intermediateDir,
})

lpMod.addAction(require('./actions/use_dating_app.lpaction'))               // home, pc - Use dating app

lpMod.addAction(require('./actions/oldyoung_dating_app.lpaction'))          // removed
lpMod.addAction(require('./actions/fantasy_dating_app.lpaction'))           // removed

lpMod.addAction(require('./actions/breeding_party.lpaction'))               // PC - Suggest Breeding Party
lpMod.addAction(require('./actions/call_a_hooker.lpaction'))                // home - Call a hooker
lpMod.addAction(require('./actions/cam.lpaction'))                          // sexwork - Cam
lpMod.addAction(require('./actions/find_a_modeling_agency.lpaction'))       // modeling - Find a model agency
lpMod.addAction(require('./actions/flash.lpaction'))                        // interaction - Flash private parts
lpMod.addAction(require('./actions/friend_with_benefits.lpaction'))         // home - Call friends with benefits
lpMod.addAction(require('./actions/gather_partners.lpaction'))              // home - Gather all poly partners
lpMod.addAction(require('./actions/host_a_group_sex_party.lpaction'))       // home - Host a group sex party
lpMod.addAction(require('./actions/manage_poly.lpaction'))                  // home - Manage polyamorous relationships

lpMod.addAction(require('./actions/offer_groupsex.lpaction'))               // interaction - Suggest group sex
lpMod.addAction(require('./actions/offer_pimp_service.lpaction'))           // sexwork - Offer pimp services
lpMod.addAction(require('./actions/offer_pimp_service_i.lpaction'))         // interaction - Offer pimp services
lpMod.addAction(require('./actions/offer_sugar.lpaction'))                  // interaction - Suggest sugar-dating
lpMod.addAction(require('./actions/offer_companion.lpaction'))              // interaction - Suggest sleeping with current companion
lpMod.addAction(require('./actions/offer_swing.lpaction'))                  // interaction - Suggest swinging

lpMod.addAction(require('./actions/onlyfans.lpaction'))                     // sexwork - Manage OnlyFans
lpMod.addAction(require('./actions/organize_poly_party.lpaction'))          // home - Organize a poly swingers' party

lpMod.addAction(require('./actions/poly_fucks_poly.lpaction'))              // interaction - Suggests fucking another poly lover
lpMod.addAction(require('./actions/propose_threesome_cms.lpaction'))        // interaction - Suggest threesome


lpMod.addAction(require('./actions/start_a_porn_career.lpaction'))          // sexwork - Become a pornstar
lpMod.addAction(require('./actions/suggest_abortion.lpaction'))             // interaction - Suggest abortion

lpMod.addAction(require('./actions/whore_out.lpaction'))                    // sexwork - Whore myself out
lpMod.addAction(require('./actions/whore_out_brothel.lpaction'))            // brothel - Whore myself out
lpMod.addAction(require('./actions/whore_out_desperate.lpaction'))          // sexwork - Whore myself out (desperate)
lpMod.addAction(require('./actions/whore_out_i.lpaction'))                  // interaction - Whore myself out
lpMod.addAction(require('./actions/whore_out_online.lpaction'))             // sexwork - Whore myself out online

lpMod.addScene(require('./scenes/use_dating_app.lpscene'))                  // home, pc - Use dating app



// ***** Edit Above this line ***** //
lpMod.writeMod()