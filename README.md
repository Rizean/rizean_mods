# Rizean Mod Pack

## Installation

* Copy the folders inside the build directory to `LifePlay\Content\Modules`

## Modules

### Rizean Realism (Beta)

Overrides many actions to add a degree of realism i.e., perversion 0 can't whore
them self's out. This should be the first mod you load to give other mods the
chance to override it.

This is only a first pass at increasing realism. More changes are coming to add
more complex checks on what can be done when to take into account things like
desperation and other concepts like willingness to do something you don't want
to for someone you love.

#### Actions

* (new) "Use dating app" accessed via home, pc - Combines removed actions "Use
  Old-Young dating app" and "Use dating app"
* (removed) Use Old-Young dating app
* (replaced) Use dating app
* (updated) Suggest Breeding Party - perversion > 50
* (updated) Call a hooker - perversion > 35
* (updated) Cam - perversion > 30
* (updated) Find a model agency - companioncount == 0 && modelfame == 0 &&
  perversion > 10
* (updated) Flash private parts - perversion > 20
* (updated) Call friends with benefits - perversion > 25
* (updated) Gather all poly partners - perversion > 30
* (updated) Host a group sex party - perversion > 40
* (updated) Manage polyamorous relationships - perversion > 30
* (updated) Suggest group sex - perversion > 30
* (updated) sexwork - Offer pimp services - perversion > 50 && companioniswhore
  == 0 && companioncount == 1
* (updated) interaction - Offer pimp services - perversion > 50
* (updated) Suggest sugar-dating - perversion > 30
* (updated) Suggest sleeping with current companion - perversion > 50 &&
  masochist < -50
* (updated) Suggest swinging - perversion > 40
* (updated) Manage OnlyFans - perversion > 30
* (updated) Organize a poly swingers' party - perversion > 50
* (updated) Suggests fucking another poly lover - perversion > 30
* (updated) Suggest threesome - perversion > 40
* (updated) Become a pornstar - pornfame == 0 && perversion > 60
* (updated) Suggest abortion - masochist < 0
* (updated) sexwork - Whore myself out - perversion > 50
* (updated) brothel - Whore myself out - companioncount == 0 && perversion > 40
* (new) sexwork - Whore myself out (desperate) - perversion < 50 && money <
  -2000
* (updated) interaction - Whore myself out - companioncount == 0
  && [perversion > 50 || money < -2000]
* (updated) sexwork - Whore myself out online - companioncount == 0 &&
  perversion > 40

#### Scenes

* use_dating_app - Simple menu only scene that give you a choice of dating apps.

### Rizean CNC/BDSM (Alpha)

Focused on PC in CNC and BDSM scenarios. Scenes were written with a female PC in
mind, but an effort was made to be inclusive.

#### Actions

* Get drunk and bait - triggers scene `rizean_cnc_bdsm_drunk_bait`
* Drop something and give a little show - triggers scene `rizean_cnc_dropFlirt`

#### Scenes

* (overrides) spiced_drink - Adds a third options where you `Drink it` becoming
  the victim. Should work for any gender.
* (new) rizean_cnc_bdsm_drunk_bait - You get drunk and bait. Should work for any
  gender, but the story text might need some work.
* (new, *INCOMPLETE*) rizean_cnc_dropFlirt - This is a MASSIVE scene over 900
  lines already. There is a diagram.net
  file `src/rizean_cnc_bdsm/scenes/rizean_cnc_dropFlirt/dropFlirt.drawio`
  showing the scene flow. It is however *INCOMPLETE* at this time.