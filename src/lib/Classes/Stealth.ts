export const Marksman = {
	name: 'Marksman',
	description:
		'A precision ranged combatant who blends keen perception with Crux‑guided aim and nanite‑stabilized weaponry. Marksmen excel at long‑range engagements, tactical positioning, and eliminating priority targets before they can close the distance.',

	coreIdentity: {
		role: 'Long‑range damage dealer, scout, precision eliminator',
		armor: 'Medium',
		combatStyle: 'Controlled shots, tactical repositioning, high accuracy',
		cruxUse: 'Enhances perception, trajectory prediction and focus',
		naniteUse: 'Recoil dampening, aim stabilization, sensory sharpening'
	},

	baseStats: {
		offense: 4,
		defense: 2,
		mobility: 3,
		cruxInteraction: 3,
		naniteSynergy: 4
	},

	weapons: {
		main_Hand:
			'Gauntlets, Anklets, Baton, Hammer, Spear, Cleaver, Daggers, Longbow, Adaptive Compound Bow (draw strength auto‑modulates), Wrist‑Bolter (rapid micro‑darts), Pistol, Shotgun, Rifle, Sniper, Launcher',
		off_Hand:
			'Cards, Buckler, Chain, Javelins, Bolts (thrown darts), Knives, Shuriken, Kunai, Caltrops, Bombs, Grenades'
	},

	baseAbilities: [
		{
			name: 'Steady Aim',
			description:
				'Briefly reduce sway and increase accuracy by focusing your breathing and Crux flow.'
		},
		{
			name: 'Quickdraw',
			description: 'Instantly ready your weapon and fire a fast opening shot.'
		},
		{
			name: 'Pinning Shot',
			description: 'A precise hit that slows or briefly immobilizes the target.'
		},
		{
			name: 'Eagle Eye',
			description: 'Enhance vision to detect distant enemies, weak points, or hidden movement.'
		},
		{
			name: 'Multi‑Shot Burst',
			description: 'Fire several rapid shots at nearby enemies or a single target.'
		},
		{
			name: 'Crux Stabilization',
			description: 'Channel energy to steady your hands, increasing critical chance.'
		},
		{
			name: 'Mark Target',
			description: 'Tag an enemy, increasing your damage against them and revealing their position.'
		},
		{
			name: 'Ricochet Round',
			description: 'A specialized shot that bounces to a second target.'
		},
		{
			name: 'Smoke Arrow / Smoke Round',
			description: 'Create a small smoke cloud that obscures vision and breaks line of sight.'
		},
		{
			name: 'Weakpoint Analysis',
			description: 'Temporarily highlight enemy vulnerabilities, increasing damage.'
		},
		{
			name: 'Crux Infusion',
			description: 'Empower your ammunition with elemental or force energy for several shots.'
		},
		{
			name: 'Volley Stance',
			description: 'Adopt a stable firing posture that increases damage but reduces mobility.'
		},
		{
			name: 'Flashshot',
			description: 'A blinding projectile that disorients enemies on impact.'
		},
		{
			name: 'Precision Barrage',
			description: 'Fire a rapid sequence of pinpoint shots at a single target.'
		},
		{
			name: 'Marksman Ascendance',
			description:
				'Enter a hyper‑focused state: increased accuracy, faster reloads, and enhanced critical hits.'
		}
	],

	passive: {
		name: 'Deadeye Protocol',
		description: 'Nanites enhance your visual acuity and weapon handling.',
		effects: ['+10% accuracy', '+10% crit chance at long range', 'Aiming briefly grants +5% damage']
	},

	progression: {
		level1: {
			name: 'Focused Shot',
			description:
				'A precise, nanite‑stabilized ranged attack. +20% damage and unlocks Steady Fire combos.'
		},

		level10: {
			options: [
				{
					name: 'Phase Reposition',
					description:
						'A short‑range teleport to a vantage point. Grants +10% accuracy for 3 seconds.'
				},
				{
					name: 'Nanite Burst Round',
					description:
						'Fire a shot enhanced with nanite payloads. Deals bonus damage and applies a brief slow.'
				}
			]
		},

		level20: {
			options: [
				{
					name: 'Crux Sight',
					description:
						'Channel Crux into your vision. Highlights enemies through cover and grants +20% crit chance for 5 seconds.'
				},
				{
					name: 'Suppression Volley',
					description: 'A rapid burst of fire in a medium cone. Reduces enemy accuracy.'
				}
			]
		},

		level30: {
			specializationChoices: [
				'Ranger: A mobile survivalist and battlefield tracker who excels at mid‑range combat, mobility, and environmental adaptability.',
				'Hunter: A relentless predator who focuses on single‑target elimination, traps, and Crux‑enhanced pursuit techniques.'
			]
		}
	},

	specializations: {
		Ranger: {
			passive: {
				name: 'Pathfinder’s Instinct',
				description: 'Your senses adapt to the environment.',
				effects: [
					'+10% movement speed',
					'+10% accuracy while moving',
					'Gain minor damage reduction in natural terrain'
				]
			},

			level30: {
				name: 'Ricochet Shot',
				description:
					'Fire a Crux‑charged round that bounces between enemies. Hits up to 3 targets, each bounce increasing crit chance.'
			},

			level40: {
				options: [
					{
						name: 'Crux Snare',
						description:
							'A Crux‑woven trap placed at range. Roots the first enemy that steps on it and deals moderate damage.'
					},
					{
						name: 'Nanite Camouflage',
						description:
							'Nanites alter your visual profile. Invisible while stationary; +20% crit chance on first attack from stealth.'
					}
				]
			},

			level50: {
				name: 'Stormcaller Volley',
				description:
					'Leap into the air and unleash a barrage of Crux‑infused arrows or shots. Large AoE, high damage over several seconds, and enemies hit are slowed and marked.'
			}
		},

		Hunter: {
			passive: {
				name: 'Predator’s Focus',
				description: 'You lock onto a single target with lethal intent.',
				effects: [
					'+15% damage to marked targets',
					'Marked targets are revealed through cover',
					'Killing a marked target resets the mark'
				]
			},

			level30: {
				name: 'Crux Mark',
				description:
					'Designate a target for elimination. Target takes increased damage from you; your shots ignore partial cover; mark lasts until target dies or escapes.'
			},

			level40: {
				options: [
					{
						name: 'Nanite Trapline',
						description:
							'Deploy a cluster of nanite‑based traps. Explodes when triggered, applying bleed and slow.'
					},
					{
						name: 'Phase Pursuit',
						description:
							'Teleport‑dash toward your marked target. Grants +20% damage on next attack.'
					}
				]
			},

			level50: {
				name: 'Executioner’s Shot',
				description:
					'A devastating Crux‑charged projectile. Massive single‑target burst, ignores armor, instantly kills targets below 30% health, and leaves a Crux burn DoT on survivors.'
			}
		}
	}
};

export const Thief = {
	name: 'Thief',
	description:
		'A stealthy infiltrator who blends agility, cunning, and nanite‑enhanced sleight of hand. Thieves excel at evasion, precision strikes, disabling enemies, and manipulating the battlefield through deception and sabotage.',

	coreIdentity: {
		role: 'Stealth attacker, infiltrator, utility specialist',
		armor: 'Light',
		combatStyle: 'Hit‑and‑run, backstabs, traps, misdirection',
		cruxUse: 'Enhances reflexes, shadow‑bending, sensory dampening',
		naniteUse: 'Cloaking, lockpicking, trap deployment, precision timing'
	},

	baseStats: {
		offense: 4,
		defense: 2,
		mobility: 5,
		cruxInteraction: 3,
		naniteSynergy: 4
	},

	weapons: {
		main_Hand:
			'Gauntlets, Anklets, Chakrams, Spear, Daggers, Sword, Katana, Rapier, Longbow, Adaptive Compound Bow (draw strength auto‑modulates), Wrist‑Bolter (rapid micro‑darts), Pistol, Shotgun, Rifle, Sniper',
		off_Hand:
			'Cards, Buckler, Chain, Javelins, Bolts (thrown darts), Knives, Shuriken, Kunai, Caltrops, Bombs, Grenades'
	},

	baseAbilities: [
		{
			name: 'Shadow Slash',
			description:
				'A quick melee strike that deals bonus damage when used from behind or while unseen.'
		},
		{
			name: 'Silent Step',
			description: 'Move quietly, reducing detection radius and increasing movement speed.'
		},
		{
			name: 'Crux Veil',
			description: 'Bend light and energy around yourself, briefly becoming semi‑invisible.'
		},
		{
			name: 'Crux‑Tipped Dagger',
			description:
				'Empower your blade with a burst of Crux, increasing penetration and crit chance.'
		},
		{
			name: 'Smoke Bomb',
			description: 'Create a cloud of smoke that breaks line of sight and reduces enemy accuracy.'
		},
		{
			name: 'Shadowstep',
			description: 'Teleport a short distance behind a target, setting up a backstab.'
		},
		{
			name: 'Crux Disruptor',
			description:
				'A small energy pulse that interrupts spellcasting and destabilizes enemy Crux flow.'
		},
		{
			name: 'Grapple Hook',
			description: 'Latch onto a surface or enemy to reposition quickly.'
		},
		{
			name: 'Tripwire Toss',
			description: 'Deploy a quick trap that slows or knocks down the first enemy to cross it.'
		},
		{
			name: 'Blindside',
			description: 'Deal bonus damage to enemies who are attacking someone else.'
		},
		{
			name: 'Escape Artist',
			description: 'Break free from slows, roots, or minor control effects.'
		},
		{
			name: 'Dagger Flurry',
			description: 'A rapid series of strikes that overwhelms lightly armored foes.'
		},
		{
			name: 'Shadow Lure',
			description: 'Create a faint illusion of yourself that draws enemy attention.'
		},
		{
			name: 'Silent Takedown',
			description: 'Eliminate or heavily damage a single unaware target.'
		},
		{
			name: 'Thief Ascendance',
			description:
				'Enter a hyper‑focused stealth state: increased crits, faster movement, and near‑silent actions.'
		}
	],

	passive: {
		name: 'Shadow Circuit',
		description: 'Nanites regulate your presence and movement.',
		effects: [
			'+10% stealth effectiveness',
			'+10% backstab damage',
			'Entering stealth briefly increases movement speed'
		]
	},

	progression: {
		level1: {
			name: 'Backstab',
			description: 'A precise strike from behind. +30% damage and unlocks Shadow Jab combos.'
		},

		level10: {
			options: [
				{
					name: 'Phase Flicker',
					description:
						'A micro‑teleport that drops you behind an enemy. Guarantees next hit is a crit.'
				},
				{
					name: 'Nanite Cloak',
					description:
						'Nanites bend light around your body. Temporary invisibility; breaking stealth grants +20% damage on next attack.'
				}
			]
		},

		level20: {
			options: [
				{
					name: 'Crux Dagger',
					description:
						'Imbue your blade with Crux energy. Throws a spectral dagger; teleport to it on reactivation; deals bonus damage if teleporting behind target.'
				},
				{
					name: 'Disable',
					description:
						'Nanites disrupt enemy systems. Silences abilities briefly and applies a slow.'
				}
			]
		},

		level30: {
			specializationChoices: [
				'Trickster: A deceptive illusionist who manipulates perception, creates decoys, and confuses enemies with Crux‑powered misdirection.',
				'Saboteur: A demolition and disruption expert who uses traps, explosives, and nanite‑based interference to control the battlefield.'
			]
		}
	},

	specializations: {
		Trickster: {
			passive: {
				name: 'Misdirection',
				description: 'Your illusions distort enemy targeting.',
				effects: [
					'+15% dodge chance',
					'Attacking from stealth blinds enemies briefly',
					'Illusions deal minor damage when destroyed'
				]
			},

			level30: {
				name: 'Crux Mirage',
				description:
					'Create a holographic duplicate of yourself. Decoy draws enemy fire; can be detonated for AoE damage; recasting swaps places with the mirage.'
			},

			level40: {
				options: [
					{
						name: 'Nanite Doppel',
						description:
							'Nanites form a second decoy that mimics your movements. Enemies struggle to identify the real you; +20% crit chance while active.'
					},
					{
						name: 'Phase Trick',
						description:
							'A teleport‑feint that leaves behind a false afterimage. Next attack from stealth deals massive damage; enemies attack the afterimage for 2 seconds.'
					}
				]
			},

			level50: {
				name: 'Chaos Bloom',
				description:
					'Unleash a storm of illusions and Crux distortions. Multiple mirages spawn and explode; enemies are blinded, confused, and slowed; you gain temporary invisibility and +30% crit chance.'
			}
		},

		Saboteur: {
			passive: {
				name: 'Chain Reaction',
				description: 'Your traps and explosives synergize.',
				effects: [
					'+20% trap damage',
					'Triggering one trap reduces cooldown of others',
					'Enemies affected by traps take +10% more damage from you'
				]
			},

			level30: {
				name: 'Nanite Charge',
				description:
					'Deploy a sticky explosive infused with nanites. Can be thrown or placed; detonates for high AoE damage and applies armor break.'
			},

			level40: {
				options: [
					{
						name: 'Crux Minefield',
						description:
							'Place multiple Crux‑powered proximity mines. Mines slow, damage, and disorient enemies.'
					},
					{
						name: 'Sabotage Spike',
						description:
							'A nanite injector that disrupts enemy systems. Deals damage over time, reduces enemy damage output, and explodes on expiration.'
					}
				]
			},

			level50: {
				name: 'Cataclysm Protocol',
				description:
					'Trigger a massive chain explosion of all active traps and charges. Huge AoE; enemies caught in multiple blasts take exponential damage; leaves behind a nanite cloud that slows and weakens survivors.'
			}
		}
	}
};

export const Scout = {
	name: 'Scout',
	description:
		'A hyper‑mobile Crux warrior who manipulates space, momentum, and battlefield positioning. Scouts chain teleports, blink‑strikes, and nanite‑accelerated movement to overwhelm enemies with speed and spatial dominance.',

	coreIdentity: {
		role: 'Mobility fighter, flanker, spatial controller',
		armor: 'Medium',
		combatStyle: 'Teleport combos, momentum attacks, rapid repositioning',
		cruxUse: 'Spatial folding, blink‑strikes, trajectory bending',
		naniteUse: 'Reflex overclocking, kinetic reinforcement, motion prediction'
	},

	baseStats: {
		offense: 4,
		defense: 3,
		mobility: 5,
		cruxInteraction: 5,
		naniteSynergy: 4
	},

	weapons: {
		main_Hand:
			'Gauntlets , Anklets , Baton, Tonfa, Hammer, Scythe, Spear, Cleaver, Daggers, Sword, Saber, Katana, Rapier, Longbow, Adaptive Compound Bow (draw strength auto‑modulates), Wrist‑Bolter (rapid micro‑darts), Pistol, Sniper , Launcher',
		off_Hand:
			'Cards, Buckler, Chain, Javelins, Bolts (thrown darts), Knives, Shuriken, Kunai, Caltrops, Bombs, Grenades'
	},

	baseAbilities: [
		{
			name: 'Blink Step',
			description: 'A short‑range teleport that preserves momentum and sets up your next attack.'
		},
		{
			name: 'Momentum Edge',
			description:
				'Your next melee strike deals bonus damage based on distance moved in the last few seconds.'
		},
		{
			name: 'Spatial Awareness',
			description: 'Briefly highlight enemy positions and detect traps.'
		},
		{
			name: 'Aether Sense',
			description: 'Detect distortions in space, revealing hidden or cloaked enemies.'
		},
		{
			name: 'Crux Lunge',
			description: 'A fast, piercing teleport‑dash that closes distance instantly.'
		},
		{
			name: 'Afterimage Feint',
			description: 'Leave behind a fading clone that distracts enemies for a moment.'
		},
		{
			name: 'Crux Burst',
			description: 'Release a shockwave when you exit a teleport, knocking enemies back.'
		},
		{
			name: 'Phase Roll',
			description: 'A dodge that briefly makes you intangible.'
		},
		{
			name: 'Aether Infusion',
			description: 'Empower your next few attacks with spatial distortion, increasing crit chance.'
		},
		{
			name: 'Dimensional Attack',
			description: 'An attack that leaves a lingering rift of blinding damage over time.'
		},
		{
			name: 'Aether Pull',
			description: 'Teleport an enemy a short distance toward you or reposition them slightly.'
		},
		{
			name: 'Blink Reversal',
			description: 'Teleport behind an enemy who attacks you, avoiding the hit entirely.'
		},
		{
			name: 'Spatial Disruptor',
			description: 'Destabilize the space around a target, slowing their movement.'
		},
		{
			name: 'Momentum Loop',
			description: 'Your next teleport refunds part of its Crux cost if used shortly after moving.'
		},
		{
			name: 'Scout Ascendance',
			description:
				'Enter a hyper‑mobile state: reduced teleport cooldowns, increased dodge, and enhanced spatial perception.'
		}
	],

	passive: {
		name: 'Momentum Engine',
		description: 'Your Crux and nanites sync with your movement.',
		effects: [
			'Every teleport grants +5% damage for 3 seconds',
			'Every 10 meters traveled grants +5% dodge chance',
			'Teleport abilities cost 10% less Crux'
		]
	},

	progression: {
		level1: {
			name: 'Blink Strike',
			description:
				'Teleport a short distance and strike instantly. +20% damage, grants Momentum, and unlocks Blink Combo chains.'
		},

		level10: {
			options: [
				{
					name: 'Vector Step',
					description:
						'Teleport in a chosen direction. Grants brief invulnerability and increases next attack damage.'
				},
				{
					name: 'Nanite Overclock',
					description:
						'Nanites accelerate your nervous system. +30% movement speed and +20% attack speed for a short duration.'
				}
			]
		},

		level20: {
			options: [
				{
					name: 'Crux Warp Pulse',
					description:
						'Release a spatial shockwave. Medium AoE, knocks enemies back, and can teleport you to the pulse’s center on reactivation.'
				},
				{
					name: 'Anchor Blade',
					description:
						'Throw a Crux‑charged blade that marks a target. Reactivate to teleport to them and strike.'
				}
			]
		},

		level30: {
			specializationChoices: [
				'Assassin: A teleport‑executioner who chains blink‑kills, isolates targets, and uses Crux‑precision to eliminate foes instantly.',
				'Aether‑Blade: A dimensional warrior who phases through reality, delivering spectral blade attacks and manipulating space itself.'
			]
		}
	},

	specializations: {
		Assassin: {
			passive: {
				name: 'Singular Focus',
				description: 'You excel at isolating and deleting targets.',
				effects: [
					'+20% damage to marked or isolated enemies',
					'Teleporting behind a target grants crit chance',
					'Killing an enemy resets Vector Step'
				]
			},

			level30: {
				name: 'Blink Execution',
				description:
					'Teleport through a target’s body. Massive single‑target damage, applies Severed Fate (heavy DoT), and grants full Momentum.'
			},

			level40: {
				options: [
					{
						name: 'Crux Shadowline',
						description:
							'Mark a path of teleport points. Reactivate to dash through all points, each hit dealing increasing damage.'
					},
					{
						name: 'Nanite Rupture',
						description:
							'Your strikes destabilize internal systems. Applies stacking rupture; each stack increases your attack speed.'
					}
				]
			},

			level50: {
				name: 'Event Horizon',
				description:
					'Lock onto a target and collapse space around them. Teleport‑strike repeatedly, ignore armor, and finish with a massive spatial rupture. If the target dies, cooldown is halved.'
			}
		},

		AetherBlade: {
			passive: {
				name: 'Dimensional Drift',
				description: 'Your body partially phases between realities.',
				effects: [
					'+15% dodge chance',
					'+15% Crux damage',
					'Teleports travel farther and hit harder'
				]
			},

			level30: {
				name: 'Aether Rend',
				description:
					'A dimensional slash that cuts space itself. Long‑range line attack, ignores armor, and applies Phase Wound (Crux DoT).'
			},

			level40: {
				options: [
					{
						name: 'Rift Dive',
						description:
							'Teleport into the Aether and reappear explosively. AoE damage, slows enemies, and grants +20% damage on next attack.'
					},
					{
						name: 'Nanite Phaseguard',
						description:
							'Nanites shift your body out of sync. +50% dodge chance for 3 seconds; dodging triggers a spectral counter‑slash.'
					}
				]
			},

			level50: {
				name: 'Spatial Collapse',
				description:
					'Tear open a dimensional rift and unleash a catastrophic slash. Huge AoE line attack, massive Phase Wound, teleports you afterward, and increases Crux damage taken by enemies.'
			}
		}
	}
};
