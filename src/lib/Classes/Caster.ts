export const Sorcerer = {
	name: 'Sorcerer',
	description:
		'A conduit of raw Crux energy who channels the universe’s binding force into destructive, protective, or reality‑altering spells. Sorcerers wield unstable power amplified by nanite regulators, balancing overwhelming potential with inherent risk.',

	coreIdentity: {
		role: 'Mid‑range caster, battlefield controller, high burst damage',
		armor: 'Light',
		combatStyle: 'Crux channeling, energy projection, spatial manipulation',
		cruxUse: 'Direct manipulation of cosmic forces',
		naniteUse: 'Stabilization, amplification, spell‑shaping'
	},

	baseStats: {
		offense: 5,
		defense: 2,
		mobility: 3,
		cruxInteraction: 5,
		naniteSynergy: 3
	},

	weapons: {
		main_Hand:
			'Staff, Wand , Scepter , Gauntlets , Anklets , Baton, Axe, Scythe, Cleaver, Daggers, Wrist‑Bolter (rapid micro‑darts), Pistol, Rifle, Launcher ',
		off_Hand:
			'Shard , Orb , Tome , Cards, Buckler, Chain, Whip, Bolts (thrown darts), Knives, Shuriken, Grenades , Lute, Flute, Bell , Trumpet, Drum'
	},

	baseAbilities: [
		{
			name: 'Crux Bolt',
			description: 'A focused projectile of raw Crux energy. Simple, fast, reliable.'
		},
		{
			name: 'Arcane Pulse',
			description:
				'A short‑range radial burst that knocks enemies back and disrupts weak magical effects.'
		},
		{
			name: 'Ether Sense',
			description: 'Detect nearby Crux signatures, magical traps, or active spellwork.'
		},
		{
			name: 'Arcane Ward',
			description: 'A temporary shield that absorbs a small amount of damage before shattering.'
		},
		{
			name: 'Spellweave',
			description:
				'Reduce the cast time of your next ability by channeling Crux through your hands.'
		},
		{
			name: 'Arcane Step',
			description: 'A short blink that leaves behind a fading afterimage.'
		},
		{
			name: 'Arcane Grasp',
			description: 'Telekinetically pull or push a target using raw Crux manipulation.'
		},
		{
			name: 'Spell Echo',
			description: 'Your next spell repeats at reduced power after a short delay.'
		},
		{
			name: 'Crux Infusion',
			description: 'Empower a weapon or ally with raw magical energy, adding elemental damage.'
		},
		{
			name: 'Arcane Barrier',
			description:
				'A stationary dome of protective energy that blocks projectiles for a short duration.'
		},
		{
			name: 'Crux Surge',
			description: 'A burst of speed and spellcasting haste fueled by unstable Crux flow.'
		},
		{
			name: 'Spell Anchor',
			description: 'Fix a spell effect in place, allowing zones or runes to persist after you move.'
		},
		{
			name: 'Arcane Reversal',
			description: 'Reflect the next magical attack back at its caster.'
		},
		{
			name: 'Arcane Reservoir',
			description: 'Store excess Crux energy for later use, allowing you to bank a spell charge.'
		},
		{
			name: 'Arcane Ascendance',
			description:
				'Temporarily levitate, gaining increased vision, spell range, and reduced incoming melee damage.'
		}
	],

	passive: {
		name: 'Crux Conduit',
		description: 'Your body naturally channels ambient Crux energy.',
		effects: [
			'+10% Crux damage',
			'+10% spell range',
			'Casting spells builds Charge stacks (improves next spell)'
		]
	},

	progression: {
		level1: {
			name: 'Crux Bolt',
			description: 'A focused blast of raw Crux energy. +20% damage and unlocks Arc Pulse combos.'
		},

		level10: {
			options: [
				{
					name: 'Phase Blink',
					description:
						'A short‑range teleport that leaves behind a Crux echo. The echo explodes after 1 second.'
				},
				{
					name: 'Nanite Stabilizer',
					description:
						'Nanites reinforce your casting channels. +20% Crux damage for 5 seconds and reduces self‑damage from unstable spells.'
				}
			]
		},

		level20: {
			options: [
				{
					name: 'Rift Lance',
					description:
						'Fire a piercing beam of spatially‑distorted Crux. Long‑range line attack that ignores armor.'
				},
				{
					name: 'Crux Shield',
					description:
						'Form a temporary energy barrier. Absorbs damage and explodes outward when broken.'
				}
			]
		},

		level30: {
			specializationChoices: [
				'Chronomancer: A manipulator of time who bends causality, accelerates or slows reality, and weaponizes temporal distortion.',
				'Nano‑Caster: A technomancer who commands swarms of programmable nanites, shaping them into weapons, constructs, and devastating clouds.'
			]
		}
	},

	specializations: {
		Chronomancer: {
			passive: {
				name: 'Temporal Echo',
				description: 'Your spells leave afterimages in time.',
				effects: [
					'+10% cooldown reduction',
					'Casting the same spell twice creates a temporal duplicate',
					'Duplicates deal 50% damage'
				]
			},

			level30: {
				name: 'Time Fracture',
				description:
					'Shatter a moment in time, creating a localized distortion. AoE slow; enemies take increased damage; allies gain haste.'
			},

			level40: {
				options: [
					{
						name: 'Chrono Step',
						description:
							'Teleport a short distance and rewind your position after 2 seconds. Grants invulnerability during the rewind.'
					},
					{
						name: 'Accelerate',
						description:
							'Supercharge your personal timeline. +40% cast speed and +20% movement speed for a short duration.'
					}
				]
			},

			level50: {
				name: 'Temporal Collapse',
				description:
					'Freeze a large area in suspended time. Enemies are immobilized; after 3 seconds time snaps back violently, dealing massive AoE damage and slowing survivors.'
			}
		},

		NanoCaster: {
			passive: {
				name: 'Swarm Architect',
				description: 'Your nanites respond instantly to your commands.',
				effects: [
					'+15% nanite ability power',
					'Nanite constructs last longer',
					'Damaging nanites apply Corrode (defense debuff)'
				]
			},

			level30: {
				name: 'Nanite Swarm',
				description:
					'Release a cloud of aggressive nanites. Deals damage over time, follows your target, and applies Corrode.'
			},

			level40: {
				options: [
					{
						name: 'Hardlight Construct',
						description:
							'Form a temporary nanite‑based weapon or shield. Weapon grants +20% damage; shield grants +30% damage reduction.'
					},
					{
						name: 'Viral Injection',
						description:
							'Inject a target with mutating nanites. Deals damage over time, spreads to nearby enemies, and explodes on expiration.'
					}
				]
			},

			level50: {
				name: 'Grey Tide',
				description:
					'Unleash a massive wave of nanites that devour everything in their path. Huge AoE, heavy Corrode, escalating damage, and leaves behind a lingering nanite field.'
			}
		}
	}
};

export const Warlock = {
	name: 'Warlock',
	description:
		'A wielder of forbidden Crux channels and unstable nanite rituals. Warlocks tap into the darker, more volatile aspects of the universe’s binding force, bending entropy, decay, and living constructs to their will. Their power is immense - but always comes with risk.',

	coreIdentity: {
		role: 'Dark caster, debuffer, summoner, corruption specialist',
		armor: 'Light',
		combatStyle: 'Damage‑over‑time, curses, unstable Crux bursts',
		cruxUse: 'Manipulates entropy, decay, and forbidden energies',
		naniteUse: 'Reanimation, corruption, parasitic constructs'
	},

	baseStats: {
		offense: 4,
		defense: 2,
		mobility: 2,
		cruxInteraction: 5,
		naniteSynergy: 4
	},

	weapons: {
		main_Hand:
			'Staff, Wand, Scepter, Gauntlets, Anklets, Baton, Hammer, Axe, Scythe, Sword, Wrist‑Bolter (rapid micro‑darts), Pistol, Shotgun, Launcher',
		off_Hand:
			'Shard , Orb , Tome , Cards, Buckler, Chain, Whip, Bolts (thrown darts), Knives, Shuriken, Grenades , Lute, Flute, Bell , Trumpet, Drum'
	},

	baseAbilities: [
		{
			name: 'Pact Bolt',
			description:
				'A jagged blast of corrupted Crux that deals damage and marks the target with a curse.'
		},
		{
			name: 'Eldritch Lash',
			description:
				'A whip‑like tendril of shadow energy that pulls an enemy and interrupts casting.'
		},
		{
			name: 'Void Skin',
			description: 'Wrap yourself in abyssal energy, reducing incoming damage briefly.'
		},
		{
			name: 'Dark Channeling',
			description: 'Enter a trance that rapidly regenerates Crux but increases incoming damage.'
		},
		{
			name: 'Abyssal Step',
			description: 'Teleport through a tear in the veil, leaving behind a burst of shadow damage.'
		},
		{
			name: 'Pact Mark',
			description:
				'Mark a target; your next three attacks deal bonus damage or trigger extra effects.'
		},
		{
			name: 'Corrupted Ward',
			description:
				'A protective barrier that absorbs damage and explodes in shadow energy when broken.'
		},
		{
			name: 'Abyssal Echo',
			description:
				'Your next spell repeats at reduced power, dealing shadow damage instead of its original type.'
		},
		{
			name: 'Eldritch Sight',
			description: 'See through illusions, detect hidden entities, or sense nearby souls.'
		},
		{
			name: 'Abyssal Reservoir',
			description:
				'Store excess Crux energy in a dark vessel, allowing you to unleash a stronger spell later.'
		},
		{
			name: 'Curse Reversal',
			description: 'Reflect the next curse or debuff back at its caster.'
		},
		{
			name: 'Eldritch Rupture',
			description: 'Cause a cursed enemy to erupt in shadow energy, damaging nearby foes.'
		},
		{
			name: 'Pact Fortification',
			description: 'Temporarily harden your body with abyssal reinforcement, boosting defenses.'
		},
		{
			name: 'Soulflare',
			description: 'Release a burst of stolen life energy that damages enemies and heals allies.'
		},
		{
			name: 'Abyssal Ascendance',
			description:
				'Float above the ground, gaining increased spell range, curse duration, and reduced incoming melee damage.'
		}
	],

	passive: {
		name: 'Forbidden Channel',
		description: 'Your Crux pathways are unstable but powerful.',
		effects: [
			'+10% damage‑over‑time effects',
			'+10% corruption duration',
			'Casting forbidden spells builds Instability (increases damage but risks backlash)'
		]
	},

	progression: {
		level1: {
			name: 'Entropy Bolt',
			description:
				'A blast of decaying Crux energy. Deals damage over time and unlocks Corrupt Pulse combos.'
		},

		level10: {
			options: [
				{
					name: 'Phase Rift',
					description: 'Tear a small rift in space. Deals AoE damage and applies a brief disorient.'
				},
				{
					name: 'Nanite Leech',
					description:
						'Send parasitic nanites into a target. Drains health over time and heals you for a portion.'
				}
			]
		},

		level20: {
			options: [
				{
					name: 'Crux Curse',
					description:
						'Afflict an enemy with unstable Crux energy. Reduces their damage and causes periodic explosions.'
				},
				{
					name: 'Huskbind',
					description:
						'Bind a weakened enemy with nanites. Roots the target; if it dies while bound, it leaves behind a nanite husk that fights briefly.'
				}
			]
		},

		level30: {
			specializationChoices: [
				'Necromancer: A master of death, decay, and Crux‑animated corpses. Manipulates entropy to raise the dead and drain the living.',
				'Monster Summoner: A bio‑engineer of horrors who uses nanites to construct, mutate, and command monstrous allies.'
			]
		}
	},

	specializations: {
		Necromancer: {
			passive: {
				name: 'Grave Resonance',
				description: 'Your Crux channels harmonize with death energy.',
				effects: [
					'+20% damage to DoT effects',
					'Summoned undead gain +10% health',
					'Killing enemies reduces cooldowns'
				]
			},

			level30: {
				name: 'Raise Dead',
				description:
					'Reanimate a fallen enemy as a Crux‑bound undead. Undead fights for you, scales with your Crux Affinity, and multiple undead can be active.'
			},

			level40: {
				options: [
					{
						name: 'Death Coil',
						description:
							'A spiraling bolt of necrotic Crux. Deals damage, heals you for a portion, and chains to additional enemies.'
					},
					{
						name: 'Bone Prison',
						description:
							'Summon skeletal constructs from the ground. Traps enemies in place and applies defense reduction.'
					}
				]
			},

			level50: {
				name: 'Army of the Fallen',
				description:
					'Unleash a wave of Crux energy that raises all corpses in the area. Summons multiple undead with massive temporary buffs; enemies take increased damage from all undead.'
			}
		},

		MonsterSummoner: {
			passive: {
				name: 'Bio‑Forge',
				description: 'Your nanites can construct living weapons.',
				effects: [
					'+15% summon damage',
					'Summons regenerate health slowly',
					'You gain +10% damage while a summon is active'
				]
			},

			level30: {
				name: 'Summon Aberrant',
				description:
					'Create a nanite‑grown monster. Can tank or deal damage depending on your build; has unique abilities based on your stats; persists until killed.'
			},

			level40: {
				options: [
					{
						name: 'Mutagen Burst',
						description:
							'Mutate your active summon. Increases size, grants new abilities, and boosts damage and defense.'
					},
					{
						name: 'Crux Infusion',
						description:
							'Channel Crux directly into your monster. Causes AoE explosions around the summon and applies burn/corrosion to enemies.'
					}
				]
			},

			level50: {
				name: 'Eldritch Titan',
				description:
					'Grow a colossal nanite‑Crux hybrid beast. Massive AoE presence, heavy damage and crowd control, enemies suffer fear and reduced defenses, and the Titan persists for full duration.'
			}
		}
	}
};

export const Druid = {
	name: 'Druid',
	description:
		'A bio‑Crux channeler who manipulates living energy, nanite‑grown flora, and primal cosmic forces. Druids blend ancient instinct with futuristic bio‑engineering, shaping the battlefield with regenerative fields, living constructs, and elemental Crux surges.',

	coreIdentity: {
		role: 'Support caster, healer, battlefield controller, bio‑manipulator',
		armor: 'Light',
		combatStyle: 'Regeneration, nature‑Crux spells, living constructs',
		cruxUse: 'Channels life‑aligned cosmic energy',
		naniteUse: 'Bio‑growth, healing, creature shaping, environmental control'
	},

	baseStats: {
		offense: 3,
		defense: 3,
		mobility: 3,
		cruxInteraction: 5,
		naniteSynergy: 5
	},

	weapons: {
		main_Hand:
			'Staff, Gauntlets, Anklets, Chakrams, Baton, Hammer, Spear, Tri‑dent, Glaive, Halberd, Hammer-blade (sword with hammer‑weighted back), Rapier, Longbow, Adaptive Compound Bow (draw strength auto‑modulates), Wrist‑Bolter (rapid micro‑darts), Pistol, Sniper, Launcher',
		off_Hand:
			'Shard , Orb , Tome , Cards, Buckler, Chain, Whip, Bolts (thrown darts), Knives, Shuriken, Grenades , Lute, Flute, Bell , Trumpet, Drum'
	},

	baseAbilities: [
		{
			name: 'Nature’s Sense',
			description: 'Detect nearby life signatures, natural anomalies, or elemental disturbances.'
		},
		{
			name: 'Barkskin',
			description: 'Harden your skin with natural Crux‑infused bark, reducing incoming damage.'
		},
		{
			name: 'Wildstep',
			description: 'A short, fluid dash that leaves behind a trail of grass or spores.'
		},
		{
			name: 'Lifespring',
			description: 'Channel ambient life energy to regenerate health over time.'
		},
		{
			name: 'Verdant Ward',
			description:
				'Summon a protective circle of natural energy that reduces damage taken by allies inside.'
		},
		{
			name: 'Bloomstrike',
			description: 'Cause a burst of flowers or spores to explode beneath a target, dealing damage.'
		},
		{
			name: 'Spirit Infusion',
			description:
				'Empower your next ability with primal energy, increasing its potency or adding an elemental effect.'
		},
		{
			name: 'Regrowth',
			description: 'Instantly heal a small amount of health and cleanse minor poisons or bleeds.'
		},
		{
			name: 'Wildcall',
			description: 'Emit a primal cry that boosts your movement speed and Crux regeneration.'
		},
		{
			name: 'Verdant Anchor',
			description:
				'Create a natural rune that persists on the ground, granting healing or buffs to allies who stand within it.'
		},
		{
			name: 'Thornshield',
			description: 'Summon a rotating barrier of thorns that damages enemies who strike you.'
		},
		{
			name: 'Earthen Bind',
			description:
				'Cause the ground beneath an enemy to harden and trap their feet, slowing them heavily.'
		},
		{
			name: 'Blooming Surge',
			description:
				'Release a wave of life energy that heals allies and damages undead or corrupted foes.'
		},
		{
			name: 'Nature’s Reversal',
			description: 'Reflect the next nature‑based or elemental attack back at its source.'
		},
		{
			name: 'Druidic Ascendance',
			description:
				'Enter a heightened state of primal awareness: increased healing, improved elemental control, and partial damage resistance.'
		}
	],

	passive: {
		name: 'Living Circuit',
		description: 'Your Crux and nanites harmonize with biological systems.',
		effects: [
			'+10% healing and regeneration',
			'+10% summon health',
			'Healing allies builds Harmony (boosts next heal or summon)'
		]
	},

	progression: {
		level1: {
			name: 'Verdant Bolt',
			description:
				'A burst of life‑Crux energy. Deals damage, heals you slightly, and unlocks Growth Pulse combos.'
		},

		level10: {
			options: [
				{
					name: 'Nanite Bloom',
					description:
						'Release restorative nanites. Heals allies in a small radius and applies minor regeneration.'
				},
				{
					name: 'Crux Root',
					description:
						'Bind an enemy with living Crux tendrils. Roots the target and deals damage over time.'
				}
			]
		},

		level20: {
			options: [
				{
					name: 'Bio‑Shield',
					description:
						'Grow a temporary living barrier. Absorbs damage and regenerates slowly while active.'
				},
				{
					name: 'Wild Lash',
					description:
						'Summon a nanite‑grown vine whip. Medium‑range strike that pulls enemies slightly toward you.'
				}
			]
		},

		level30: {
			specializationChoices: [
				'Shaman: A spiritual conduit who channels ancestral Crux, elemental forces, and spirit‑echoes to heal, empower, and devastate.',
				'Beast Summoner: A primal bio‑engineer who grows, mutates, and commands living nanite‑beasts infused with Crux energy.'
			]
		}
	},

	specializations: {
		Shaman: {
			passive: {
				name: 'Spirit Resonance',
				description: 'Your Crux channels align with ancestral echoes.',
				effects: [
					'+15% elemental Crux damage',
					'+15% healing to allies',
					'Casting elemental spells summons minor spirit echoes'
				]
			},

			level30: {
				name: 'Ancestral Surge',
				description:
					'Call upon ancient Crux spirits. Grants allies haste and regeneration, deals AoE spirit damage, and summons a temporary spirit companion.'
			},

			level40: {
				options: [
					{
						name: 'Elemental Invocation',
						description:
							'Choose an element (fire, storm, stone, water). Grants a powerful elemental spell with unique bonus effects.'
					},
					{
						name: 'Spirit Walk',
						description:
							'Shift partially into the spirit plane. Become untargetable for 2 seconds; next spell deals bonus damage or healing.'
					}
				]
			},

			level50: {
				name: 'Totem of the Eternal',
				description:
					'Summon a massive Crux‑spirit totem. Emits healing waves, damages and weakens enemies, grants elemental buffs, and persists for full duration.'
			}
		},

		BeastSummoner: {
			passive: {
				name: 'Primal Architect',
				description: 'Your nanites excel at creating living constructs.',
				effects: [
					'+20% beast health',
					'+10% beast damage',
					'Summons regenerate health out of combat'
				]
			},

			level30: {
				name: 'Summon Primal Beast',
				description:
					'Grow a living nanite‑Crux creature. Can tank, deal damage, or support; evolves visually based on your stats; persists until killed.'
			},

			level40: {
				options: [
					{
						name: 'Pack Call',
						description:
							'Summon two lesser beasts that swarm enemies and gain bonuses when near your main beast.'
					},
					{
						name: 'Bio‑Mutate',
						description:
							'Mutate your active beast. Gains new abilities, increased size, health, and damage; mutation persists for the duration.'
					}
				]
			},

			level50: {
				name: 'Primeval Stampede',
				description:
					'Summon a massive herd of nanite‑grown beasts. Huge AoE damage, knocks down enemies, empowers your main beast, and leaves behind a regenerative field for allies.'
			}
		}
	}
};
