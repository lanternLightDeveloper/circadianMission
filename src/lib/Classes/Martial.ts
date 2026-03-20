export const Swordsman = {
	name: 'Swordsman',
	description:
		'A disciplined melee fighter who blends traditional blade mastery with Crux‑enhanced reflexes and nanite‑reinforced strikes.',

	coreIdentity: {
		role: 'Frontline melee, tactical duelist, teleport‑engage specialist',
		armor: 'Medium',
		combatStyle: 'Precision strikes, controlled aggression, mobility',
		cruxUse: 'Enhances reflexes, blade speed and micro‑teleports',
		naniteUse: 'Reinforces muscles, stabilizes stance, sharpens perception'
	},

	baseStats: {
		offense: 4,
		defense: 3,
		mobility: 4,
		cruxInteraction: 2,
		naniteSynergy: 3
	},

	weapons: {
		main_Hand:
			'Gauntlets, Anklets, Baton, Axe, Spear, Tri‑dent, Glaive, Halberd, Hammerblade (sword with hammer‑weighted back), Cleaver, Daggers, Sword, Saber, Katana, Rapier, Shotgun',
		off_Hand:
			'Cards, Kite Shield, Shield, Buckler, Chain, Whip, Harpoon, Javelins, Bolts (thrown darts), Knives, Shuriken, Kunai, Caltrops, Shock‑Net, Bombs, Grenades'
	},

	baseAbilities: [
		{
			name: 'Guard Stance',
			description: 'Adopt a defensive posture that increases block and reduces incoming damage.'
		},
		{
			name: 'Quickstep',
			description: 'A rapid sidestep that avoids an attack and boosts your next strike.'
		},
		{
			name: 'Parry',
			description: 'Deflect an incoming melee attack, opening the enemy for a counter.'
		},
		{
			name: 'Riposte',
			description: 'Immediately follow a successful parry with a fast retaliatory strike.'
		},
		{
			name: 'Crux Burst',
			description: 'Release a short‑range shockwave from your blade, pushing enemies back.'
		},
		{
			name: 'Precision Strike',
			description: 'A targeted attack that deals bonus damage to weak points.'
		},
		{
			name: 'Blade Guard',
			description: 'Sweep your weapon in a defensive arc, reducing ranged damage taken.'
		},
		{
			name: 'Double Arc',
			description: 'A double‑slash combo that hits multiple enemies in front of you.'
		},
		{
			name: 'Iron Resolve',
			description: 'Temporarily resist stagger, knockback, and control effects.'
		},
		{
			name: 'Sweeping Cut',
			description: 'A wide horizontal slash that hits all enemies around you.'
		},
		{
			name: 'Counterstep',
			description: 'Evade backward and instantly dash forward with a punishing thrust.'
		},
		{
			name: 'Battle Instinct',
			description: 'Briefly sense incoming attacks, increasing dodge and parry success.'
		},
		{
			name: 'Whirlwind Guard',
			description: 'Spin your blade defensively, reducing damage and reflecting projectiles.'
		},
		{
			name: 'Adrenal Surge',
			description: 'Boost movement speed and attack speed for a short duration.'
		},
		{
			name: 'Swordsman Ascendance',
			description:
				'Enter a heightened martial state: faster reflexes, empowered strikes, and improved defensive timing.'
		}
	],

	passive: {
		name: 'Blade Instinct',
		description: 'Your nanites predict micro‑movements in combat.',
		effects: ['+5% melee accuracy', '+5% parry chance', '+10% teleport recovery speed']
	},

	progression: {
		level1: {
			name: 'Edge Discipline',
			description:
				'Basic sword techniques enhanced by nanite‑stabilized form. +10% damage to melee combos and unlocks Precision Slash.'
		},

		level10: {
			options: [
				{
					name: 'Phase Step',
					description:
						'A short‑range micro‑teleport that avoids one incoming attack. Grants brief invulnerability.'
				},
				{
					name: 'Nanite Guard',
					description: 'Nanites harden around the body. +20% damage reduction for 3 seconds.'
				}
			]
		},

		level20: {
			options: [
				{
					name: 'Crux Slash',
					description:
						'Channel Crux through the blade to release a cutting wave. Medium‑range arc attack that scales with Crux Affinity.'
				},
				{
					name: 'Counter Matrix',
					description:
						'Nanites predict enemy movement. Auto‑counter the next melee attack; deals bonus damage if timed manually.'
				}
			]
		},

		level30: {
			specializationChoices: [
				'Duelist: A hyper‑precise blade master focused on speed, finesse, and single‑target dominance.',
				'Gladiator: A brutal frontline warrior who uses overwhelming force, crowd control, and sustained aggression.'
			]
		}
	},

	specializations: {
		Duelist: {
			passive: {
				name: 'Blade Tempo',
				description: 'Every successful hit increases attack speed.',
				effects: ['+2% attack speed per stack (max 5 stacks)', 'Losing tempo resets stacks']
			},

			level30: {
				name: 'Rapier Lunge',
				description:
					'Teleport‑dash through a target, dealing high precision damage. Ignores armor and doubles crit chance.'
			},

			level40: {
				options: [
					{
						name: 'Crux Feint',
						description:
							'A deceptive micro‑teleport that confuses the enemy. Next attack is guaranteed to crit; enemy accuracy reduced briefly.'
					},
					{
						name: 'Nanite Overclock',
						description: 'Temporarily boosts reflexes. +25% attack speed and +15% dodge chance.'
					}
				]
			},

			level50: {
				name: 'Eclipse Flurry',
				description:
					'Vanish into rapid micro‑teleports, striking the target multiple times in a single second. Extremely high single‑target burst; cannot be interrupted; ends behind the enemy.'
			}
		},

		Gladiator: {
			passive: {
				name: 'Arena Momentum',
				description: 'Taking or dealing damage builds Momentum stacks.',
				effects: [
					'+2% damage per stack',
					'+2% damage reduction per stack',
					'Stacks decay slowly out of combat'
				]
			},

			level30: {
				name: 'Crux Slam',
				description:
					'A heavy downward strike that sends out a shockwave. AoE damage, brief stun, and scales with Strength and Crux Affinity.'
			},

			level40: {
				options: [
					{
						name: 'Nanite Fortify',
						description:
							'Nanites reinforce your muscles and bones. +30% damage reduction and immune to stagger.'
					},
					{
						name: 'Chainbreaker',
						description:
							'A sweeping attack that pulls enemies toward you. Great for crowd control and applies a brief slow.'
					}
				]
			},

			level50: {
				name: 'Titan’s Arena',
				description:
					'Project a Crux‑powered barrier around yourself. Enemies cannot escape; you gain +20% damage and +20% defense; your attacks create shockwaves. Ideal for boss fights and battlefield control.'
			}
		}
	}
};

export const Knight = {
	name: 'Knight',
	description:
		'A disciplined frontline defender who blends traditional martial training with Crux‑reinforced armor, nanite‑enhanced endurance and tactical teleportation. Knights excel at holding the line, protecting allies and controlling the battlefield.',

	coreIdentity: {
		role: 'Frontline tank, protector, battlefield anchor',
		armor: 'Heavy',
		combatStyle: 'Heavy melee, defensive stances, controlled aggression',
		cruxUse: 'Reinforces armor, enhances durability, powers defensive auras',
		naniteUse: 'Muscle reinforcement, kinetic dampening, shield stabilization'
	},

	baseStats: {
		offense: 3,
		defense: 5,
		mobility: 2,
		cruxInteraction: 3,
		naniteSynergy: 4
	},

	weapons: {
		main_Hand:
			'Gauntlets, Baton, Hammer, Mace, Club, Maul, Flail, Spear, Glaive, Halberd, Sword, Saber, Katana, Gladius, Adaptive Compound Bow (draw strength auto‑modulates), Shotgun, Rifle',
		off_Hand:
			'Cards, Kite Shield, Shield, Buckler, Chain, Whip, Harpoon, Javelins, Bolts (thrown darts), Knives, Shuriken, Kunai, Caltrops, Shock‑Net, Bombs, Grenades'
	},

	baseAbilities: [
		{
			name: 'Shield Advance',
			description:
				'Move forward with your shield raised, pushing enemies back and blocking incoming attacks.'
		},
		{
			name: 'Tactical Taunt',
			description: 'Force nearby enemies to focus on you by projecting controlled Crux aggression.'
		},
		{
			name: 'Defensive Riposte',
			description: 'After blocking an attack, unleash a punishing counterstrike.'
		},
		{
			name: 'Rallying Cry',
			description: 'Boost nearby allies’ morale, granting temporary health or stamina regeneration.'
		},
		{
			name: 'Shield Wall',
			description: 'Raise your shield to create a frontal barrier that allies can shelter behind.'
		},
		{
			name: 'Guardian’s Mark',
			description: 'Mark a target; they deal reduced damage to allies but increased damage to you.'
		},
		{
			name: 'Armor Lock',
			description: 'Brace yourself, becoming immovable and drastically reducing incoming damage.'
		},
		{
			name: 'Knight’s Resolve',
			description: 'Temporarily increase resistance to magic and elemental effects.'
		},
		{
			name: 'Sweeping Guard',
			description: 'A wide shield or weapon sweep that clears space around you.'
		},
		{
			name: 'Formation Command',
			description: 'Issue a tactical order that buffs allies’ defense or positioning.'
		},
		{
			name: 'Knight’s Challenge',
			description:
				'Call out a single enemy, increasing your damage against them and reducing theirs against others.'
		},
		{
			name: 'Ironbound Charge',
			description: 'A powerful armored rush that knocks enemies aside and closes distance quickly.'
		},
		{
			name: 'Crux Reservoir',
			description: 'Store excess defensive energy to empower a future shield or armor ability.'
		},
		{
			name: 'Knight’s Judgment',
			description:
				'A heavy overhead strike that deals massive damage to staggered or marked enemies.'
		},
		{
			name: 'Knight Ascendance',
			description:
				'Enter a state of perfect martial discipline: increased defense, stronger counters, and enhanced shield techniques.'
		}
	],

	passive: {
		name: 'Aegis Protocol',
		description: 'Nanites reinforce your armor and stance.',
		effects: ['+10% damage reduction', '+5% block chance', '+10% stability vs knockback']
	},

	progression: {
		level1: {
			name: 'Bulwark Stance',
			description: 'Adopt a defensive posture. +15% defense for 5 seconds and unlocks Shield Bash.'
		},

		level10: {
			options: [
				{
					name: 'Phase Guard',
					description:
						'A micro‑teleport that places you between an ally and an incoming attack. Redirects the hit to you and grants +20% damage reduction for that hit.'
				},
				{
					name: 'Nanite Brace',
					description: 'Nanites harden your armor. +30% physical resistance for 3 seconds.'
				}
			]
		},

		level20: {
			options: [
				{
					name: 'Crux Barrier',
					description:
						'Project a shimmering defensive field. Reduces ranged damage taken by 25%; allies behind you gain 10% reduction.'
				},
				{
					name: 'Shield Counter',
					description:
						'Block the next melee attack and retaliate. Counter deals bonus damage and applies a brief stun.'
				}
			]
		},

		level30: {
			specializationChoices: [
				'Shield Bearer: A fortress‑like defender who specializes in protection, crowd control, and unbreakable defense.',
				'Cavalier: A high‑mobility frontline charger who uses teleport‑dashes, momentum, and aggressive tactics to dominate the battlefield.'
			]
		}
	},

	specializations: {
		ShieldBearer: {
			passive: {
				name: 'Immovable Wall',
				description: 'Standing still for 1 second grants defensive bonuses.',
				effects: ['+10% defense', '+10% block chance', '+10% threat generation']
			},

			level30: {
				name: 'Aegis Slam',
				description:
					'Smash your shield into the ground, releasing a shockwave. AoE damage, knocks enemies back, and grants allies behind you +15% defense.'
			},

			level40: {
				options: [
					{
						name: 'Nanite Bulwark',
						description:
							'Nanites form a temporary exoshell. +40% damage reduction and immune to stuns for a short duration.'
					},
					{
						name: 'Guardian’s Pull',
						description: 'Emit a Crux pulse that drags enemies toward you and applies a slow.'
					}
				]
			},

			level50: {
				name: 'Fortress of One',
				description:
					'Become an unbreakable bastion. 50% damage reduction, 100% block chance, allies take 30% less damage, and you cannot be moved or interrupted.'
			}
		},

		Cavalier: {
			passive: {
				name: 'Momentum Charge',
				description: 'Moving continuously builds Momentum stacks.',
				effects: [
					'+2% damage per stack',
					'+2% movement speed per stack',
					'Stacks reset when standing still'
				]
			},

			level30: {
				name: 'Lance Dash',
				description:
					'Teleport‑dash in a straight line, piercing all enemies. High damage, applies armor break, and scales with Strength and Agility.'
			},

			level40: {
				options: [
					{
						name: 'Crux Spur',
						description:
							'Channel Crux into your legs and armor. +40% movement speed; next melee hit deals massive bonus damage.'
					},
					{
						name: 'Nanite Joust',
						description:
							'Nanites reinforce your weapon for a charging strike. Gap‑closer, knocks enemies down, and has high crit chance.'
					}
				]
			},

			level50: {
				name: 'Solar Charge',
				description:
					'Become a streak of Crux‑infused light. Long‑range teleport‑charge, massive AoE impact, stuns and armor‑breaks enemies, and leaves a radiant trail that buffs allies’ speed.'
			}
		}
	}
};

export const Barbarian = {
	name: 'Barbarian',
	description:
		'A ferocious close‑quarters fighter who channels raw physicality, instinct and nanite‑boosted adrenaline. Barbarians excel in chaotic melee, overwhelming force and primal Crux surges that amplify their rage into battlefield dominance.',

	coreIdentity: {
		role: 'Frontline bruiser, berserker, shock trooper',
		armor: 'Medium',
		combatStyle: 'Heavy swings, explosive bursts, reckless aggression',
		cruxUse: 'Instinctive surges that amplify strength and resilience',
		naniteUse: 'Adrenal boosters, pain suppression, muscle overclocking'
	},

	baseStats: {
		offense: 5,
		defense: 3,
		mobility: 3,
		cruxInteraction: 2,
		naniteSynergy: 3
	},

	weapons: {
		main_Hand:
			'Staff, Gauntlets, Anklets, Baton, Hammer, Mace, Club, Maul, Flail, Axe, Scythe, Spear, Glaive, Hammerblade (sword with hammer‑weighted back), Cleaver, Sword, Katana, Longbow, Adaptive Compound Bow (draw strength auto‑modulates), Pistol, Shotgun, Launcher',
		off_Hand:
			'Cards, Kite Shield, Shield, Buckler, Chain, Whip, Harpoon, Javelins, Bolts (thrown darts), Knives, Shuriken, Kunai, Caltrops, Shock‑Net, Bombs, Grenades'
	},

	baseAbilities: [
		{
			name: 'Battle Roar',
			description: 'Unleash a primal shout that boosts your damage and intimidates enemies.'
		},
		{
			name: 'Frenzied Dash',
			description:
				'A short, explosive sprint that ignores collision and increases your next attack’s power.'
		},
		{
			name: 'Crux Fury',
			description:
				'Channel unstable Crux into your muscles, increasing strength but reducing defense.'
		},
		{
			name: 'Reckless Swing',
			description: 'A wide, powerful attack that hits multiple enemies.'
		},
		{
			name: 'Giant Leap',
			description: 'Jump to a target location, slamming down and knocking enemies back.'
		},
		{
			name: 'Rage the Way',
			description: 'Move through enemies without slowing, dealing damage as you pass.'
		},
		{
			name: 'Blood Scent',
			description: 'Gain increased damage against wounded enemies.'
		},
		{
			name: 'Ironhide',
			description: 'Temporarily harden your skin with Crux‑infused resilience.'
		},
		{
			name: 'Brutal Grapple',
			description: 'Grab an enemy, interrupting them and slamming them into the ground.'
		},
		{
			name: 'Crux‑Infused Rage',
			description: 'Convert stored Crux into raw fury, empowering your next few abilities.'
		},
		{
			name: 'War Cry',
			description: 'Boost ally morale, granting temporary stamina or damage resistance.'
		},
		{
			name: 'Bonebreaker',
			description: 'A devastating overhead strike that deals massive damage to staggered foes.'
		},
		{
			name: 'Rage Smash',
			description: 'A heavy, over‑handed smash that deals bonus damage to armored targets.'
		},
		{
			name: 'Barbaric Defiance',
			description: 'Resist control effects through sheer ferocity and adrenaline.'
		},
		{
			name: 'Barbarian Ascendance',
			description:
				'Enter a primal, hyper‑charged state: increased damage, unstoppable momentum, and reduced incoming harm.'
		}
	],

	passive: {
		name: 'Rage Engine',
		description: 'Your nanites amplify adrenaline and aggression.',
		effects: [
			'+10% melee damage',
			'+10% stagger resistance',
			'Gain Rage stacks when taking or dealing damage'
		]
	},

	progression: {
		level1: {
			name: 'Fury Strike',
			description:
				'A powerful opening blow fueled by nanite‑boosted muscle. +20% damage and unlocks Heavy Swing combos.'
		},

		level10: {
			options: [
				{
					name: 'Crux Roar',
					description:
						'Unleash a primal Crux‑infused shout. Small AoE fear and +10% damage for 5 seconds.'
				},
				{
					name: 'Nanite Surge',
					description: 'Nanites flood your bloodstream. +25% attack speed for 3 seconds.'
				}
			]
		},

		level20: {
			options: [
				{
					name: 'Bloodrush',
					description:
						'Convert Rage stacks into healing. Consumes all Rage and heals based on stacks consumed.'
				},
				{
					name: 'Frenzy Leap',
					description:
						'A teleport‑assisted leap attack. AoE impact, brief stun, and excellent for engaging or repositioning.'
				}
			]
		},

		level30: {
			specializationChoices: [
				'Skirmisher: A fast, agile, hit‑and‑run fighter who blends ferocity with mobility and tactical aggression.',
				'Beastmaster: A primal warrior who bonds with nanite‑enhanced beasts, fighting alongside powerful companions.'
			]
		}
	},

	specializations: {
		Skirmisher: {
			passive: {
				name: 'Relentless Motion',
				description: 'Constant movement fuels your aggression.',
				effects: [
					'+10% damage while moving',
					'+10% dodge chance',
					'Gain a small speed boost after every kill'
				]
			},

			level30: {
				name: 'Whirlwind Dash',
				description:
					'Teleport‑dash through enemies in a spinning strike. Hits all enemies in path, applies bleed, and scales with Agility.'
			},

			level40: {
				options: [
					{
						name: 'Crux Blitz',
						description:
							'A burst of Crux energy propels you forward. +40% movement speed and next 3 attacks deal bonus damage.'
					},
					{
						name: 'Nanite Reflex',
						description:
							'Nanites heighten your reaction time. +30% dodge chance for 4 seconds; dodging resets your basic combo.'
					}
				]
			},

			level50: {
				name: 'Storm of Blades',
				description:
					'Become a blur of motion, chaining teleport‑slashes across multiple enemies. High AoE burst, heavy bleed, and temporary invulnerability during the flurry.'
			}
		},

		Beastmaster: {
			passive: {
				name: 'Pack Bond',
				description: 'Your bonded beast fights at your side.',
				effects: [
					'Beast gains stats based on your Strength and Endurance',
					'You gain +10% damage when near your beast',
					'Beast revives automatically after combat'
				]
			},

			level30: {
				name: 'Beast Call',
				description:
					'Summon your nanite‑enhanced companion. Type depends on your build; can tank, deal damage, or apply control effects.'
			},

			level40: {
				options: [
					{
						name: 'Crux Howl',
						description:
							'You and your beast unleash a synchronized roar. AoE debuff to enemies and +20% damage to both of you.'
					},
					{
						name: 'Nanite Fusion',
						description:
							'Temporarily merge your nanite systems. Beast becomes larger and stronger; you gain shared damage reduction.'
					}
				]
			},

			level50: {
				name: 'Primal Ascension',
				description:
					'Your beast evolves into its apex form. Massive stat boost, new abilities, and you gain +25% damage and +25% defense while it is ascended.'
			}
		}
	}
};

export const Monk = {
	name: 'Monk',
	description:
		'A disciplined warrior who blends physical mastery with Crux‑guided focus and nanite‑enhanced body control. Monks excel in fluid movement, precision strikes and battlefield adaptability, using inner harmony to channel devastating martial techniques.',

	coreIdentity: {
		role: 'Agile melee fighter, control specialist, mobile skirmisher',
		armor: 'Light',
		combatStyle: 'Fluid combos, reactive counters, rhythmic strikes',
		cruxUse: 'Enhances perception, timing and inner focus',
		naniteUse: 'Muscle tuning, balance correction, kinetic redirection'
	},

	baseStats: {
		offense: 4,
		defense: 3,
		mobility: 5,
		cruxInteraction: 3,
		naniteSynergy: 4
	},

	weapons: {
		main_Hand:
			'Staff, Gauntlets, Anklets, Chakrams, Baton, Tonfa, Hammer, Scythe, Spear, Tri‑dent, Glaive, Cleaver, Daggers, Sword, Katana, Longbow, Adaptive Compound Bow (draw strength auto‑modulates), Wrist‑Bolter (rapid micro‑darts), Pistol, Rifle, Sniper',
		off_Hand:
			'Cards, Kite Shield, Shield, Buckler, Chain, Whip, Harpoon, Javelins, Bolts (thrown darts), Knives, Shuriken, Kunai, Caltrops, Shock‑Net, Bombs, Grenades'
	},

	baseAbilities: [
		{
			name: 'Crux Palm',
			description: 'A focused palm strike that channels internal energy into a single point.'
		},
		{
			name: 'Flowing Order',
			description:
				'A smooth, evasive movement that increases dodge chance and sets up your next attack.'
		},
		{
			name: 'Inner Focus',
			description: 'Center your mind, regenerating Crux and increasing accuracy for a short time.'
		},
		{
			name: 'Iron Body',
			description: 'Temporarily harden your skin and muscles, reducing incoming damage.'
		},
		{
			name: 'Serpent Style',
			description: 'A weaving movement that avoids projectiles and increases movement speed.'
		},
		{
			name: 'Counter Palm',
			description: 'Immediately follow a successful parry with a stunning counterstrike.'
		},
		{
			name: 'Chi Channeling',
			description: 'Focus internal energy to empower your next ability or attack.'
		},
		{
			name: 'Rising Knee',
			description: 'A quick upward strike that interrupts enemies and launches lighter foes.'
		},
		{
			name: 'Sweeping Kick',
			description: 'A low, circular kick that knocks down nearby enemies.'
		},
		{
			name: 'Wind Walker',
			description: 'A short teleport‑like dash that leaves behind a fading afterimage.'
		},
		{
			name: 'Chi Pulse',
			description: 'Send a wave of internal energy through your body, cleansing minor debuffs.'
		},
		{
			name: 'Harmonized Strikes',
			description: 'Your next three attacks chain together with increased speed and precision.'
		},
		{
			name: 'Leaping Strike',
			description: 'Jump forward with a downward kick or punch that deals impact damage.'
		},
		{
			name: 'Inner Flame',
			description: 'Temporarily increase attack speed and Crux regeneration through intense focus.'
		},
		{
			name: 'Monk Ascendance',
			description:
				'Enter a state of perfect harmony: enhanced mobility, empowered strikes and heightened awareness.'
		}
	],

	passive: {
		name: 'Flow State',
		description: 'Your body and nanites synchronize into a rhythmic combat flow.',
		effects: [
			'+5% attack speed',
			'+5% dodge chance',
			'Dodging an attack increases damage by 5% for 3 seconds'
		]
	},

	progression: {
		level1: {
			name: 'Focused Strike',
			description:
				'A precise blow delivered with perfect form. +15% damage and unlocks Palm Combo chains.'
		},

		level10: {
			options: [
				{
					name: 'Phase Step Kick',
					description:
						'Teleport‑step behind an enemy and deliver a spinning kick. High single‑target damage and briefly disorients the target.'
				},
				{
					name: 'Nanite Centering',
					description:
						'Nanites stabilize your breathing and posture. +20% dodge chance for 4 seconds.'
				}
			]
		},

		level20: {
			options: [
				{
					name: 'Crux Pulse',
					description:
						'Release a shock of internal Crux energy. Small AoE, knocks enemies back, and scales with Willpower.'
				},
				{
					name: 'Redirect',
					description:
						'Use nanites to shift incoming force. Reduces next hit by 50% and converts reduced damage into bonus damage on your next attack.'
				}
			]
		},

		level30: {
			specializationChoices: [
				'Pikeman: A disciplined polearm master who uses reach, leverage and teleport‑assisted repositioning to control the battlefield.',
				'Pugilist: A close‑quarters brawler who channels Crux through fists and feet, delivering explosive strikes and relentless pressure.'
			]
		}
	},

	specializations: {
		Pikeman: {
			passive: {
				name: 'Extended Reach',
				description: 'Your mastery of polearms enhances battlefield control.',
				effects: [
					'+20% melee range',
					'+10% crit chance on long‑reach attacks',
					'Polearm attacks apply a brief slow'
				]
			},

			level30: {
				name: 'Lancing Thrust',
				description:
					'A teleport‑assisted forward thrust. Pierces all enemies in a line, applies armor break, and scales with Agility and Intellect.'
			},

			level40: {
				options: [
					{
						name: 'Crux Sweep',
						description:
							'Channel Crux through your polearm for a sweeping arc. Large AoE, knocks enemies outward, and has high stagger potential.'
					},
					{
						name: 'Nanite Anchor',
						description:
							'Nanites root your stance into the ground. Immune to knockback and +30% defense for 4 seconds.'
					}
				]
			},

			level50: {
				name: 'Astral Lance',
				description:
					'Your polearm becomes a conduit of Crux energy. Massive line attack, teleports you to the end of the strike, stuns and armor‑shreds enemies, and leaves a lingering damaging energy trail.'
			}
		},

		Pugilist: {
			passive: {
				name: 'Iron Body',
				description: 'Nanites reinforce your muscles and bones.',
				effects: ['+10% damage', '+10% damage reduction', 'Basic attacks build Focus stacks']
			},

			level30: {
				name: 'Crux Fist',
				description:
					'A devastating punch infused with Crux energy. High single‑target burst, applies internal rupture (DoT), and consumes all Focus stacks for bonus damage.'
			},

			level40: {
				options: [
					{
						name: 'Nanite Overdrive',
						description:
							'Nanites supercharge your limbs. +40% attack speed and +20% movement speed for a short duration.'
					},
					{
						name: 'Counterpunch',
						description:
							'A reactive defensive technique. Automatically counter the next melee hit; counter deals heavy damage and applies a brief stun.'
					}
				]
			},

			level50: {
				name: 'Eightfold Impact',
				description:
					'Unleash a rapid series of Crux‑charged strikes. Extremely high single‑target burst; each hit teleports you around the target; final blow sends out a shockwave.'
			}
		}
	}
};
