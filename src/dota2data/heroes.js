/* eslint-disable max-len */
const heroes = [{
  id: 1, name: 'npc_dota_hero_antimage', db_short: 'anti', localized_name: 'Anti-Mage', primary_attr: 'agi', attack_type: 'Melee', roles: ['Carry', 'Escape', 'Nuker'],
}, {
  id: 2, name: 'npc_dota_hero_axe', db_short: 'axe', localized_name: 'Axe', primary_attr: 'str', attack_type: 'Melee', roles: ['Initiator', 'Durable', 'Disabler', 'Jungler'],
}, {
  id: 3, name: 'npc_dota_hero_bane', db_short: 'bane', localized_name: 'Bane', primary_attr: 'int', attack_type: 'Ranged', roles: ['Support', 'Disabler', 'Nuker', 'Durable'],
}, {
  id: 4, name: 'npc_dota_hero_bloodseeker', db_short: 'blod', localized_name: 'Bloodseeker', primary_attr: 'agi', attack_type: 'Melee', roles: ['Carry', 'Disabler', 'Jungler', 'Nuker', 'Initiator'],
}, {
  id: 5, name: 'npc_dota_hero_crystal_maiden', db_short: 'cm', localized_name: 'Crystal Maiden', primary_attr: 'int', attack_type: 'Ranged', roles: ['Support', 'Disabler', 'Nuker', 'Jungler'],
}, {
  id: 6, name: 'npc_dota_hero_drow_ranger', db_short: 'dro', localized_name: 'Drow Ranger', primary_attr: 'agi', attack_type: 'Ranged', roles: ['Carry', 'Disabler', 'Pusher'],
}, {
  id: 7, name: 'npc_dota_hero_earthshaker', db_short: 'erth', localized_name: 'Earthshaker', primary_attr: 'str', attack_type: 'Melee', roles: ['Support', 'Initiator', 'Disabler', 'Nuker'],
}, {
  id: 8, name: 'npc_dota_hero_juggernaut', db_short: 'jug', localized_name: 'Juggernaut', primary_attr: 'agi', attack_type: 'Melee', roles: ['Carry', 'Pusher', 'Escape'],
}, {
  id: 9, name: 'npc_dota_hero_mirana', db_short: 'mir', localized_name: 'Mirana', primary_attr: 'agi', attack_type: 'Ranged', roles: ['Carry', 'Support', 'Escape', 'Nuker', 'Disabler'],
}, {
  id: 10, name: 'npc_dota_hero_morphling', db_short: 'mrph', localized_name: 'Morphling', primary_attr: 'agi', attack_type: 'Ranged', roles: ['Carry', 'Escape', 'Durable', 'Nuker', 'Disabler'],
}, {
  id: 11, name: 'npc_dota_hero_nevermore', db_short: 'nev', localized_name: 'Shadow Fiend', primary_attr: 'agi', attack_type: 'Ranged', roles: ['Carry', 'Nuker'],
}, {
  id: 12, name: 'npc_dota_hero_phantom_lancer', db_short: 'plance', localized_name: 'Phantom Lancer', primary_attr: 'agi', attack_type: 'Melee', roles: ['Carry', 'Escape', 'Pusher', 'Nuker'],
}, {
  id: 13, name: 'npc_dota_hero_puck', db_short: 'puck', localized_name: 'Puck', primary_attr: 'int', attack_type: 'Ranged', roles: ['Initiator', 'Disabler', 'Escape', 'Nuker'],
}, {
  id: 14, name: 'npc_dota_hero_pudge', db_short: 'pud', localized_name: 'Pudge', primary_attr: 'str', attack_type: 'Melee', roles: ['Disabler', 'Initiator', 'Durable', 'Nuker'],
}, {
  id: 15, name: 'npc_dota_hero_razor', db_short: 'raz', localized_name: 'Razor', primary_attr: 'agi', attack_type: 'Ranged', roles: ['Carry', 'Durable', 'Nuker', 'Pusher'],
}, {
  id: 16, name: 'npc_dota_hero_sand_king', db_short: 'skg', localized_name: 'Sand King', primary_attr: 'str', attack_type: 'Melee', roles: ['Initiator', 'Disabler', 'Support', 'Nuker', 'Escape', 'Jungler'],
}, {
  id: 17, name: 'npc_dota_hero_storm_spirit', db_short: 'ss', localized_name: 'Storm Spirit', primary_attr: 'int', attack_type: 'Ranged', roles: ['Carry', 'Escape', 'Nuker', 'Initiator', 'Disabler'],
}, {
  id: 18, name: 'npc_dota_hero_sven', db_short: 'sven', localized_name: 'Sven', primary_attr: 'str', attack_type: 'Melee', roles: ['Carry', 'Disabler', 'Initiator', 'Durable', 'Nuker'],
}, {
  id: 19, name: 'npc_dota_hero_tiny', db_short: 'tiny', localized_name: 'Tiny', primary_attr: 'str', attack_type: 'Melee', roles: ['Carry', 'Nuker', 'Pusher', 'Initiator', 'Durable', 'Disabler'],
}, {
  id: 20, name: 'npc_dota_hero_vengefulspirit', db_short: 'vng', localized_name: 'Vengeful Spirit', primary_attr: 'agi', attack_type: 'Ranged', roles: ['Support', 'Initiator', 'Disabler', 'Nuker', 'Escape'],
}, {
  id: 21, name: 'npc_dota_hero_windrunner', db_short: 'wind', localized_name: 'Windranger', primary_attr: 'int', attack_type: 'Ranged', roles: ['Carry', 'Support', 'Disabler', 'Escape', 'Nuker'],
}, {
  id: 22, name: 'npc_dota_hero_zuus', db_short: 'zuus', localized_name: 'Zeus', primary_attr: 'int', attack_type: 'Ranged', roles: ['Nuker'],
}, {
  id: 23, name: 'npc_dota_hero_kunkka', db_short: 'kunk', localized_name: 'Kunkka', primary_attr: 'str', attack_type: 'Melee', roles: ['Carry', 'Support', 'Disabler', 'Initiator', 'Durable', 'Nuker'],
}, {
  id: 25, name: 'npc_dota_hero_lina', db_short: 'lina', localized_name: 'Lina', primary_attr: 'int', attack_type: 'Ranged', roles: ['Support', 'Carry', 'Nuker', 'Disabler'],
}, {
  id: 26, name: 'npc_dota_hero_lion', db_short: 'lion', localized_name: 'Lion', primary_attr: 'int', attack_type: 'Ranged', roles: ['Support', 'Disabler', 'Nuker', 'Initiator'],
}, {
  id: 27, name: 'npc_dota_hero_shadow_shaman', db_short: 'shad', localized_name: 'Shadow Shaman', primary_attr: 'int', attack_type: 'Ranged', roles: ['Support', 'Pusher', 'Disabler', 'Nuker', 'Initiator'],
}, {
  id: 28, name: 'npc_dota_hero_slardar', db_short: 'slar', localized_name: 'Slardar', primary_attr: 'str', attack_type: 'Melee', roles: ['Carry', 'Durable', 'Initiator', 'Disabler', 'Escape'],
}, {
  id: 29, name: 'npc_dota_hero_tidehunter', db_short: 'tide', localized_name: 'Tidehunter', primary_attr: 'str', attack_type: 'Melee', roles: ['Initiator', 'Durable', 'Disabler', 'Nuker'],
}, {
  id: 30, name: 'npc_dota_hero_witch_doctor', db_short: 'wdoc', localized_name: 'Witch Doctor', primary_attr: 'int', attack_type: 'Ranged', roles: ['Support', 'Nuker', 'Disabler'],
}, {
  id: 31, name: 'npc_dota_hero_lich', db_short: 'lich', localized_name: 'Lich', primary_attr: 'int', attack_type: 'Ranged', roles: ['Support', 'Nuker'],
}, {
  id: 32, name: 'npc_dota_hero_riki', db_short: 'riki', localized_name: 'Riki', primary_attr: 'agi', attack_type: 'Melee', roles: ['Carry', 'Escape', 'Disabler'],
}, {
  id: 33, name: 'npc_dota_hero_enigma', db_short: 'enig', localized_name: 'Enigma', primary_attr: 'int', attack_type: 'Ranged', roles: ['Disabler', 'Jungler', 'Initiator', 'Pusher'],
}, {
  id: 34, name: 'npc_dota_hero_tinker', db_short: 'tink', localized_name: 'Tinker', primary_attr: 'int', attack_type: 'Ranged', roles: ['Carry', 'Nuker', 'Pusher'],
}, {
  id: 35, name: 'npc_dota_hero_sniper', db_short: 'snip', localized_name: 'Sniper', primary_attr: 'agi', attack_type: 'Ranged', roles: ['Carry', 'Nuker'],
}, {
  id: 36, name: 'npc_dota_hero_necrolyte', db_short: 'necr', localized_name: 'Necrophos', primary_attr: 'int', attack_type: 'Ranged', roles: ['Carry', 'Nuker', 'Durable', 'Disabler'],
}, {
  id: 37, name: 'npc_dota_hero_warlock', db_short: 'warl', localized_name: 'Warlock', primary_attr: 'int', attack_type: 'Ranged', roles: ['Support', 'Initiator', 'Disabler'],
}, {
  id: 38, name: 'npc_dota_hero_beastmaster', db_short: 'beas', localized_name: 'Beastmaster', primary_attr: 'str', attack_type: 'Melee', roles: ['Initiator', 'Disabler', 'Durable', 'Nuker'],
}, {
  id: 39, name: 'npc_dota_hero_queenofpain', db_short: 'pain', localized_name: 'Queen of Pain', primary_attr: 'int', attack_type: 'Ranged', roles: ['Carry', 'Nuker', 'Escape'],
}, {
  id: 40, name: 'npc_dota_hero_venomancer', db_short: 'venm', localized_name: 'Venomancer', primary_attr: 'agi', attack_type: 'Ranged', roles: ['Support', 'Nuker', 'Initiator', 'Pusher', 'Disabler'],
}, {
  id: 41, name: 'npc_dota_hero_faceless_void', db_short: 'face', localized_name: 'Faceless Void', primary_attr: 'agi', attack_type: 'Melee', roles: ['Carry', 'Initiator', 'Disabler', 'Escape', 'Durable'],
}, {
  id: 42, name: 'npc_dota_hero_skeleton_king', db_short: 'wraith', localized_name: 'Wraith King', primary_attr: 'str', attack_type: 'Melee', roles: ['Carry', 'Support', 'Durable', 'Disabler', 'Initiator'],
}, {
  id: 43, name: 'npc_dota_hero_death_prophet', db_short: 'dpro', localized_name: 'Death Prophet', primary_attr: 'int', attack_type: 'Ranged', roles: ['Carry', 'Pusher', 'Nuker', 'Disabler'],
}, {
  id: 44, name: 'npc_dota_hero_phantom_assassin', db_short: 'phass', localized_name: 'Phantom Assassin', primary_attr: 'agi', attack_type: 'Melee', roles: ['Carry', 'Escape'],
}, {
  id: 45, name: 'npc_dota_hero_pugna', db_short: 'pugna', localized_name: 'Pugna', primary_attr: 'int', attack_type: 'Ranged', roles: ['Nuker', 'Pusher'],
}, {
  id: 46, name: 'npc_dota_hero_templar_assassin', db_short: 'temp', localized_name: 'Templar Assassin', primary_attr: 'agi', attack_type: 'Ranged', roles: ['Carry', 'Escape'],
}, {
  id: 47, name: 'npc_dota_hero_viper', db_short: 'vipe', localized_name: 'Viper', primary_attr: 'agi', attack_type: 'Ranged', roles: ['Carry', 'Durable', 'Initiator', 'Disabler'],
}, {
  id: 48, name: 'npc_dota_hero_luna', db_short: 'luna', localized_name: 'Luna', primary_attr: 'agi', attack_type: 'Ranged', roles: ['Carry', 'Nuker', 'Pusher'],
}, {
  id: 49, name: 'npc_dota_hero_dragon_knight', db_short: 'drag', localized_name: 'Dragon Knight', primary_attr: 'str', attack_type: 'Melee', roles: ['Carry', 'Pusher', 'Durable', 'Disabler', 'Initiator', 'Nuker'],
}, {
  id: 50, name: 'npc_dota_hero_dazzle', db_short: 'dazz', localized_name: 'Dazzle', primary_attr: 'int', attack_type: 'Ranged', roles: ['Support', 'Nuker', 'Disabler'],
}, {
  id: 51, name: 'npc_dota_hero_rattletrap', db_short: 'ratt', localized_name: 'Clockwerk', primary_attr: 'str', attack_type: 'Melee', roles: ['Initiator', 'Disabler', 'Durable', 'Nuker'],
}, {
  id: 52, name: 'npc_dota_hero_leshrac', db_short: 'lesh', localized_name: 'Leshrac', primary_attr: 'int', attack_type: 'Ranged', roles: ['Carry', 'Support', 'Nuker', 'Pusher', 'Disabler'],
}, {
  id: 53, name: 'npc_dota_hero_furion', db_short: 'furi', localized_name: "Nature's Prophet", primary_attr: 'int', attack_type: 'Ranged', roles: ['Carry', 'Jungler', 'Pusher', 'Escape', 'Nuker'],
}, {
  id: 54, name: 'npc_dota_hero_life_stealer', db_short: 'lifest', localized_name: 'Lifestealer', primary_attr: 'str', attack_type: 'Melee', roles: ['Carry', 'Durable', 'Jungler', 'Escape', 'Disabler'],
}, {
  id: 55, name: 'npc_dota_hero_dark_seer', db_short: 'dkseer', localized_name: 'Dark Seer', primary_attr: 'int', attack_type: 'Melee', roles: ['Initiator', 'Jungler', 'Escape', 'Disabler'],
}, {
  id: 56, name: 'npc_dota_hero_clinkz', db_short: 'clinkz', localized_name: 'Clinkz', primary_attr: 'agi', attack_type: 'Ranged', roles: ['Carry', 'Escape', 'Pusher'],
}, {
  id: 57, name: 'npc_dota_hero_omniknight', db_short: 'omni', localized_name: 'Omniknight', primary_attr: 'str', attack_type: 'Melee', roles: ['Support', 'Durable', 'Nuker'],
}, {
  id: 58, name: 'npc_dota_hero_enchantress', db_short: 'ench', localized_name: 'Enchantress', primary_attr: 'int', attack_type: 'Ranged', roles: ['Support', 'Jungler', 'Pusher', 'Durable', 'Disabler'],
}, {
  id: 59, name: 'npc_dota_hero_huskar', db_short: 'husk', localized_name: 'Huskar', primary_attr: 'str', attack_type: 'Ranged', roles: ['Carry', 'Durable', 'Initiator'],
}, {
  id: 60, name: 'npc_dota_hero_night_stalker', db_short: 'nstalk', localized_name: 'Night Stalker', primary_attr: 'str', attack_type: 'Melee', roles: ['Carry', 'Initiator', 'Durable', 'Disabler', 'Nuker'],
}, {
  id: 61, name: 'npc_dota_hero_broodmother', db_short: 'broo', localized_name: 'Broodmother', primary_attr: 'agi', attack_type: 'Melee', roles: ['Carry', 'Pusher', 'Escape', 'Nuker'],
}, {
  id: 62, name: 'npc_dota_hero_bounty_hunter', db_short: 'bount', localized_name: 'Bounty Hunter', primary_attr: 'agi', attack_type: 'Melee', roles: ['Escape', 'Nuker'],
}, {
  id: 63, name: 'npc_dota_hero_weaver', db_short: 'weav', localized_name: 'Weaver', primary_attr: 'agi', attack_type: 'Ranged', roles: ['Carry', 'Escape'],
}, {
  id: 64, name: 'npc_dota_hero_jakiro', db_short: 'jak', localized_name: 'Jakiro', primary_attr: 'int', attack_type: 'Ranged', roles: ['Support', 'Nuker', 'Pusher', 'Disabler'],
}, {
  id: 65, name: 'npc_dota_hero_batrider', db_short: 'bat', localized_name: 'Batrider', primary_attr: 'int', attack_type: 'Ranged', roles: ['Initiator', 'Jungler', 'Disabler', 'Escape'],
}, {
  id: 66, name: 'npc_dota_hero_chen', db_short: 'chen', localized_name: 'Chen', primary_attr: 'int', attack_type: 'Ranged', roles: ['Support', 'Jungler', 'Pusher'],
}, {
  id: 67, name: 'npc_dota_hero_spectre', db_short: 'spec', localized_name: 'Spectre', primary_attr: 'agi', attack_type: 'Melee', roles: ['Carry', 'Durable', 'Escape'],
}, {
  id: 68, name: 'npc_dota_hero_ancient_apparition', db_short: 'appa', localized_name: 'Ancient Apparition', primary_attr: 'int', attack_type: 'Ranged', roles: ['Support', 'Disabler', 'Nuker'],
}, {
  id: 69, name: 'npc_dota_hero_doom_bringer', db_short: 'doom', localized_name: 'Doom', primary_attr: 'str', attack_type: 'Melee', roles: ['Carry', 'Disabler', 'Initiator', 'Durable', 'Nuker'],
}, {
  id: 70, name: 'npc_dota_hero_ursa', db_short: 'ursa', localized_name: 'Ursa', primary_attr: 'agi', attack_type: 'Melee', roles: ['Carry', 'Jungler', 'Durable', 'Disabler'],
}, {
  id: 71, name: 'npc_dota_hero_spirit_breaker', db_short: 'spir', localized_name: 'Spirit Breaker', primary_attr: 'str', attack_type: 'Melee', roles: ['Carry', 'Initiator', 'Disabler', 'Durable', 'Escape'],
}, {
  id: 72, name: 'npc_dota_hero_gyrocopter', db_short: 'gyro', localized_name: 'Gyrocopter', primary_attr: 'agi', attack_type: 'Ranged', roles: ['Carry', 'Nuker', 'Disabler'],
}, {
  id: 73, name: 'npc_dota_hero_alchemist', db_short: 'alch', localized_name: 'Alchemist', primary_attr: 'str', attack_type: 'Melee', roles: ['Carry', 'Support', 'Durable', 'Disabler', 'Initiator', 'Nuker'],
}, {
  id: 74, name: 'npc_dota_hero_invoker', db_short: 'invo', localized_name: 'Invoker', primary_attr: 'int', attack_type: 'Ranged', roles: ['Carry', 'Nuker', 'Disabler', 'Escape', 'Pusher'],
}, {
  id: 75, name: 'npc_dota_hero_silencer', db_short: 'silen', localized_name: 'Silencer', primary_attr: 'int', attack_type: 'Ranged', roles: ['Carry', 'Support', 'Disabler', 'Initiator', 'Nuker'],
}, {
  id: 76, name: 'npc_dota_hero_obsidian_destroyer', db_short: 'odest', localized_name: 'Outworld Devourer', primary_attr: 'int', attack_type: 'Ranged', roles: ['Carry', 'Nuker', 'Disabler'],
}, {
  id: 77, name: 'npc_dota_hero_lycan', db_short: 'lycan', localized_name: 'Lycan', primary_attr: 'str', attack_type: 'Melee', roles: ['Carry', 'Pusher', 'Jungler', 'Durable', 'Escape'],
}, {
  id: 78, name: 'npc_dota_hero_brewmaster', db_short: 'brew', localized_name: 'Brewmaster', primary_attr: 'str', attack_type: 'Melee', roles: ['Carry', 'Initiator', 'Durable', 'Disabler', 'Nuker'],
}, {
  id: 79, name: 'npc_dota_hero_shadow_demon', db_short: 'shadow_demon', localized_name: 'Shadow Demon', primary_attr: 'int', attack_type: 'Ranged', roles: ['Support', 'Disabler', 'Initiator', 'Nuker'],
}, {
  id: 80, name: 'npc_dota_hero_lone_druid', db_short: 'lone_druid', localized_name: 'Lone Druid', primary_attr: 'agi', attack_type: 'Ranged', roles: ['Carry', 'Pusher', 'Jungler', 'Durable'],
}, {
  id: 81, name: 'npc_dota_hero_chaos_knight', db_short: 'chaknight', localized_name: 'Chaos Knight', primary_attr: 'str', attack_type: 'Melee', roles: ['Carry', 'Disabler', 'Durable', 'Pusher', 'Initiator'],
}, {
  id: 82, name: 'npc_dota_hero_meepo', db_short: 'meepo', localized_name: 'Meepo', primary_attr: 'agi', attack_type: 'Melee', roles: ['Carry', 'Escape', 'Nuker', 'Disabler', 'Initiator', 'Pusher'],
}, {
  id: 83, name: 'npc_dota_hero_treant', db_short: 'treant', localized_name: 'Treant Protector', primary_attr: 'str', attack_type: 'Melee', roles: ['Support', 'Initiator', 'Durable', 'Disabler', 'Escape'],
}, {
  id: 84, name: 'npc_dota_hero_ogre_magi', db_short: 'ogmag', localized_name: 'Ogre Magi', primary_attr: 'int', attack_type: 'Melee', roles: ['Support', 'Nuker', 'Disabler', 'Durable', 'Initiator'],
}, {
  id: 85, name: 'npc_dota_hero_undying', db_short: 'undying', localized_name: 'Undying', primary_attr: 'str', attack_type: 'Melee', roles: ['Support', 'Durable', 'Disabler', 'Nuker'],
}, {
  id: 86, name: 'npc_dota_hero_rubick', db_short: 'rubick', localized_name: 'Rubick', primary_attr: 'int', attack_type: 'Ranged', roles: ['Support', 'Disabler', 'Nuker'],
}, {
  id: 87, name: 'npc_dota_hero_disruptor', db_short: 'dis', localized_name: 'Disruptor', primary_attr: 'int', attack_type: 'Ranged', roles: ['Support', 'Disabler', 'Nuker', 'Initiator'],
}, {
  id: 88, name: 'npc_dota_hero_nyx_assassin', db_short: 'nyx', localized_name: 'Nyx Assassin', primary_attr: 'agi', attack_type: 'Melee', roles: ['Disabler', 'Nuker', 'Initiator', 'Escape'],
}, {
  id: 89, name: 'npc_dota_hero_naga_siren', db_short: 'naga', localized_name: 'Naga Siren', primary_attr: 'agi', attack_type: 'Melee', roles: ['Carry', 'Support', 'Pusher', 'Disabler', 'Initiator', 'Escape'],
}, {
  id: 90, name: 'npc_dota_hero_keeper_of_the_light', db_short: 'keep', localized_name: 'Keeper of the Light', primary_attr: 'int', attack_type: 'Ranged', roles: ['Support', 'Nuker', 'Disabler', 'Jungler'],
}, {
  id: 91, name: 'npc_dota_hero_wisp', db_short: 'wisp', localized_name: 'Io', primary_attr: 'str', attack_type: 'Ranged', roles: ['Support', 'Escape', 'Nuker'],
}, {
  id: 92, name: 'npc_dota_hero_visage', db_short: 'visa', localized_name: 'Visage', primary_attr: 'int', attack_type: 'Ranged', roles: ['Support', 'Nuker', 'Durable', 'Disabler', 'Pusher'],
}, {
  id: 93, name: 'npc_dota_hero_slark', db_short: 'slark', localized_name: 'Slark', primary_attr: 'agi', attack_type: 'Melee', roles: ['Carry', 'Escape', 'Disabler', 'Nuker'],
}, {
  id: 94, name: 'npc_dota_hero_medusa', db_short: 'medus', localized_name: 'Medusa', primary_attr: 'agi', attack_type: 'Ranged', roles: ['Carry', 'Disabler', 'Durable'],
}, {
  id: 95, name: 'npc_dota_hero_troll_warlord', db_short: 'troll', localized_name: 'Troll Warlord', primary_attr: 'agi', attack_type: 'Ranged', roles: ['Carry', 'Pusher', 'Disabler', 'Durable'],
}, {
  id: 96, name: 'npc_dota_hero_centaur', db_short: 'cent', localized_name: 'Centaur Warrunner', primary_attr: 'str', attack_type: 'Melee', roles: ['Durable', 'Initiator', 'Disabler', 'Nuker', 'Escape'],
}, {
  id: 97, name: 'npc_dota_hero_magnataur', db_short: 'magn', localized_name: 'Magnus', primary_attr: 'str', attack_type: 'Melee', roles: ['Initiator', 'Disabler', 'Nuker', 'Escape'],
}, {
  id: 98, name: 'npc_dota_hero_shredder', db_short: 'timb', localized_name: 'Timbersaw', primary_attr: 'str', attack_type: 'Melee', roles: ['Nuker', 'Durable', 'Escape'],
}, {
  id: 99, name: 'npc_dota_hero_bristleback', db_short: 'bristle', localized_name: 'Bristleback', primary_attr: 'str', attack_type: 'Melee', roles: ['Carry', 'Durable', 'Initiator', 'Nuker'],
}, {
  id: 100, name: 'npc_dota_hero_tusk', db_short: 'tusk', localized_name: 'Tusk', primary_attr: 'str', attack_type: 'Melee', roles: ['Initiator', 'Disabler', 'Nuker'],
}, {
  id: 101, name: 'npc_dota_hero_skywrath_mage', db_short: 'skywrath', localized_name: 'Skywrath Mage', primary_attr: 'int', attack_type: 'Ranged', roles: ['Support', 'Nuker', 'Disabler'],
}, {
  id: 102, name: 'npc_dota_hero_abaddon', db_short: 'abad', localized_name: 'Abaddon', primary_attr: 'str', attack_type: 'Melee', roles: ['Support', 'Carry', 'Durable'],
}, {
  id: 103, name: 'npc_dota_hero_elder_titan', db_short: 'elder', localized_name: 'Elder Titan', primary_attr: 'str', attack_type: 'Melee', roles: ['Initiator', 'Disabler', 'Nuker', 'Durable'],
}, {
  id: 104, name: 'npc_dota_hero_legion_commander', db_short: 'legcom', localized_name: 'Legion Commander', primary_attr: 'str', attack_type: 'Melee', roles: ['Carry', 'Disabler', 'Initiator', 'Durable', 'Nuker'],
}, {
  id: 105, name: 'npc_dota_hero_techies', db_short: 'tech', localized_name: 'Techies', primary_attr: 'int', attack_type: 'Ranged', roles: ['Nuker', 'Disabler'],
}, {
  id: 106, name: 'npc_dota_hero_ember_spirit', db_short: 'embr', localized_name: 'Ember Spirit', primary_attr: 'agi', attack_type: 'Melee', roles: ['Carry', 'Escape', 'Nuker', 'Disabler', 'Initiator'],
}, {
  id: 107, name: 'npc_dota_hero_earth_spirit', db_short: 'earthspi', localized_name: 'Earth Spirit', primary_attr: 'str', attack_type: 'Melee', roles: ['Nuker', 'Escape', 'Disabler', 'Initiator', 'Durable'],
}, {
  id: 108, name: 'npc_dota_hero_abyssal_underlord', db_short: 'abys', localized_name: 'Underlord', primary_attr: 'str', attack_type: 'Melee', roles: ['Support', 'Nuker', 'Disabler', 'Durable', 'Escape'],
}, {
  id: 109, name: 'npc_dota_hero_terrorblade', db_short: 'terr', localized_name: 'Terrorblade', primary_attr: 'agi', attack_type: 'Melee', roles: ['Carry', 'Pusher', 'Nuker'],
}, {
  id: 110, name: 'npc_dota_hero_phoenix', db_short: 'phoenix_bird', localized_name: 'Phoenix', primary_attr: 'str', attack_type: 'Ranged', roles: ['Support', 'Nuker', 'Initiator', 'Escape', 'Disabler'],
}, {
  id: 111, name: 'npc_dota_hero_oracle', db_short: 'orac', localized_name: 'Oracle', primary_attr: 'int', attack_type: 'Ranged', roles: ['Support', 'Nuker', 'Disabler', 'Escape'],
}, {
  id: 112, name: 'npc_dota_hero_winter_wyvern', db_short: 'winwyv', localized_name: 'Winter Wyvern', primary_attr: 'int', attack_type: 'Ranged', roles: ['Support', 'Disabler', 'Nuker'],
}, {
  id: 113, name: 'npc_dota_hero_arc_warden', db_short: 'arcwar', localized_name: 'Arc Warden', primary_attr: 'agi', attack_type: 'Ranged', roles: ['Carry', 'Escape', 'Nuker'],
}, {
  id: 114, name: 'npc_dota_hero_monkey_king', db_short: 'monkey', localized_name: 'Monkey King', primary_attr: 'agi', attack_type: 'Melee', roles: ['Carry', 'Escape', 'Disabler', 'Initiator'],
}, {
  id: 119, name: 'npc_dota_hero_dark_willow', db_short: 'sylph', localized_name: 'Dark Willow', primary_attr: 'int', attack_type: 'Ranged', roles: ['Support', 'Nuker', 'Disabler', 'Escape'],
}, {
  id: 120, name: 'npc_dota_hero_pangolier', db_short: 'pangolin', localized_name: 'Pangolier', primary_attr: 'agi', attack_type: 'Melee', roles: ['Carry', 'Nuker', 'Disabler', 'Durable', 'Escape', 'Initiator'],
}, {
  id: 121, name: 'npc_dota_hero_grimstroke', db_short: 'grimstroke', localized_name: 'Grimstroke', primary_attr: 'int', attack_type: 'Ranged', roles: ['Support', 'Nuker', 'Disabler', 'Escape'],
}, {
  id: 126, name: 'npc_dota_hero_void_spirit', db_short: 'voidspir', localized_name: 'Void Spirit', primary_attr: 'int', attack_type: 'Melee', roles: ['Carry', 'Escape', 'Nuker', 'Disabler'],
}, {
  id: 128, name: 'npc_dota_hero_snapfire', db_short: 'snapfire', localized_name: 'Snapfire', primary_attr: 'str', attack_type: 'Ranged', roles: ['Support', 'Nuker', 'Disabler', 'Escape'],
}, {
  id: 129, name: 'npc_dota_hero_mars', db_short: 'mars', localized_name: 'Mars', primary_attr: 'str', attack_type: 'Melee', roles: ['Carry', 'Initiator', 'Disabler', 'Durable'],
}];

const heroTemplate = {
  id: 999, name: 'npc_dota_hero_default', db_short: 'default', localized_name: ' ', primary_attr: ' ', attack_type: ' ', roles: [],
};

export default heroes;
export { heroTemplate };
