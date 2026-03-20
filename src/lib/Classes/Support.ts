export const Seer = {
	name: 'Seer',
	description:
		'A visionary who perceives the hidden flows of Crux, glimpses possible futures, and manipulates fate through ritual and intuition. Seers blend prophetic insight with nanite‑enhanced perception, granting them unparalleled battlefield awareness and reality‑bending abilities.',

	coreIdentity: {
		role: 'Foresight specialist, debuffer, fate manipulator',
		armor: 'Light',
		combatStyle: 'Predictions, vision bursts, fate‑altering Crux spells',
		cruxUse: 'Reads timelines, reveals truths, alters probability',
		naniteUse: 'Sensory amplification, data‑pattern analysis, precognition'
	},

	baseStats: {
		offense: 3,
		defense: 2,
		mobility: 3,
		cruxInteraction: 5,
		naniteSynergy: 5
	},

	weapons: {
		main_Hand:
			'Staff, Wand, Scepter, Gauntlets, Anklets, Baton, Axe, Spear, Tri‑dent, Daggers, Sword, Longbow, Wrist‑Bolter (rapid micro‑darts), Pistol, Rifle, Sniper',
		off_Hand:
			'Shard, Orb, Tome, Cards, Whip, Bolts (thrown darts), Caltrops, Bombs, Grenades, Lute, Flute, Bell, Trumpet, Drum'
	},

	baseAbilities: [
		{
			name: 'Foresight Glimpse',
			description:
				'Briefly see a moment into the future, increasing dodge chance or revealing an incoming attack.'
		},
		{
			name: 'Echo Prediction',
			description: 'Your next ability repeats at reduced potency because you saw it happen twice.'
		},
		{
			name: 'Probability Nudge',
			description: 'Slightly alter the outcome of your next attack or skill check in your favor.'
		},
		{
			name: 'Fate Mark',
			description: 'Mark a target, making them more vulnerable to abilities.'
		},
		{
			name: 'Vision Pulse',
			description: 'Send out a wave of perceptive energy that reveals enemies and traps.'
		},
		{
			name: 'Insight Burst',
			description: 'Gain a sudden flash of clarity, boosting crit chance or spell accuracy.'
		},
		{
			name: 'Clairvoyant Dodge',
			description: 'Automatically evade the next attack you foresee.'
		},
		{
			name: 'Fate Echo',
			description: 'Cause a target’s next action to echo, repeating at reduced effectiveness.'
		},
		{
			name: 'Probability Warp',
			description: 'Distort chance around you, reducing enemy crits and increasing your own.'
		},
		{
			name: 'Premonition Strike',
			description: 'A melee or ranged attack that deals bonus damage.'
		},
		{
			name: 'Crux Distortion',
			description: 'Momentarily distort the flow of fate around an enemy, slowing them.'
		},
		{
			name: 'Insightful Reversal',
			description: 'Reflect the next debuff or mental effect back at its caster.'
		},
		{
			name: 'Fate Ripple',
			description: 'Create a temporal ripple that disrupts enemy timing and reduces accuracy.'
		},
		{
			name: 'Clairvoyant Guidance',
			description: 'Grant an ally increased accuracy or evasion by sharing a glimpse of the future.'
		},
		{
			name: 'Seer Ascendance',
			description:
				'Enter a heightened prophetic state: enhanced perception, faster reactions, and improved fate manipulation.'
		}
	],

	passive: {
		name: 'Foresight',
		description: 'Your perception extends seconds into the future.',
		effects: [
			'+10% dodge chance',
			'+10% crit chance for allies you target with abilities',
			'Predicting an attack grants Insight (boosts next spell)'
		]
	},

	progression: {
		level1: {
			name: 'Revelation',
			description:
				'Unleash a burst of prophetic Crux energy. Damages enemies, reveals hidden units, unlocks Vision Pulse combos.'
		},

		level10: {
			options: [
				{
					name: 'Phase Glimpse',
					description:
						'Step outside the timeline. Become untargetable for 1s; next ability deals bonus damage or healing.'
				},
				{
					name: 'Nanite Insight',
					description:
						'Nanites enhance predictive modeling. Highlights enemy weak points; allies gain +10% crit chance.'
				}
			]
		},

		level20: {
			options: [
				{
					name: 'Fate Lash',
					description:
						'A whip of Crux energy that disrupts probability. Deals damage and reduces enemy accuracy and crit chance.'
				},
				{
					name: 'Clairvoyant Field',
					description:
						'Create a zone of heightened perception. Allies gain dodge and crit; enemies inside are slowed.'
				}
			]
		},

		level30: {
			specializationChoices: [
				'Diviner: A master of fate, probability, and cosmic patterns who manipulates outcomes, shields allies from doom, and rewrites destiny.',
				'Oracle: A transcendent prophet who channels pure Crux visions, unleashes devastating revelations, and commands battlefield‑wide insight.'
			]
		}
	},

	specializations: {
		Diviner: {
			passive: {
				name: 'Threads of Fate',
				description: 'Manipulate the probabilities of events.',
				effects: [
					'+15% buff duration',
					'+10% debuff potency',
					'Using a buff or debuff grants Fate Thread (stacking bonus)'
				]
			},

			level30: {
				name: 'Rewrite',
				description:
					'Alter the fate of an ally or enemy. Ally: heals + damage reduction. Enemy: damage + increased damage taken.'
			},

			level40: {
				options: [
					{
						name: 'Destiny Knot',
						description:
							'Bind two targets’ fates. Damage or healing on one is partially shared with the other.'
					},
					{
						name: 'Probability Collapse',
						description:
							'Force a chaotic outcome. AoE damage; randomly buffs allies or debuffs enemies (weighted beneficial).'
					}
				]
			},

			level50: {
				name: 'Fate Reversal',
				description:
					'Undo catastrophe. Heals all allies, removes debuffs, rewinds enemy buffs, and revives a fallen ally.'
			}
		},

		Oracle: {
			passive: {
				name: 'Cosmic Vision',
				description: 'Mind attuned to deepest Crux currents.',
				effects: ['+15% Crux damage', '+10% cast speed', 'Casting reveals enemies in a wide radius']
			},

			level30: {
				name: 'Prophetic Burst',
				description:
					'Devastating revelation. High AoE damage, applies Revealed, blinds enemies briefly.'
			},

			level40: {
				options: [
					{
						name: 'Vision of Ruin',
						description:
							'Show an enemy their demise. Heavy single‑target damage, applies fear, bonus damage to low‑health foes.'
					},
					{
						name: 'Nanite Revelation',
						description:
							'Nanites project visions outward. Allies gain crit, dodge, movement; enemies lose accuracy.'
					}
				]
			},

			level50: {
				name: 'Apocalypse Sight',
				description:
					'Channel a world‑ending vision. Massive AoE, stuns enemies, continuous Crux damage, huge ally buffs, battlefield fully Revealed.'
			}
		}
	}
};

export const Enchanter = {
	name: 'Enchanter',
	description:
		'A master of Crux‑woven magic, emotional resonance, and nanite‑augmented influence. Enchanters manipulate minds, moods, and momentum, empowering allies while subtly undermining foes. Their spells shape the flow of battle without relying on raw damage.',

	coreIdentity: {
		role: 'Buffer, controller, battlefield manipulator',
		armor: 'Light',
		combatStyle: 'Auras, charms, Crux‑infused enchantments, nanite‑based influence',
		cruxUse: 'Emotional resonance, mental projection, aura shaping',
		naniteUse: 'Mood modulation, sensory illusions, control effects'
	},

	baseStats: {
		offense: 2,
		defense: 3,
		mobility: 3,
		cruxInteraction: 5,
		naniteSynergy: 5
	},

	weapons: {
		main_Hand:
			'Staff, Wand, Scepter, Gauntlets, Anklets, Baton, Axe, Spear, Tri‑dent, Daggers, Sword, Longbow, Wrist‑Bolter (rapid micro‑darts), Pistol, Rifle, Sniper',
		off_Hand:
			'Shard, Orb, Tome, Cards, Whip, Bolts (thrown darts), Caltrops, Bombs, Grenades, Lute, Flute, Bell, Trumpet, Drum'
	},

	baseAbilities: [
		{
			name: 'Soothing Whisper',
			description: 'Calm an ally’s mind, reducing panic, fear, or stagger.'
		},
		{
			name: 'Disorienting Pulse',
			description: 'Release a wave of emotional static that reduces enemy accuracy.'
		},
		{
			name: 'Enchanted Step',
			description:
				'A graceful movement that increases dodge chance and leaves a faint illusion behind.'
		},
		{
			name: 'Enthrall',
			description:
				'Distract or captivate a target, reducing their ability to act. Captivated targets may join the party if left alive.'
		},
		{
			name: 'Aura of Clarity',
			description: 'Grant nearby allies improved focus, increasing accuracy or spell success.'
		},
		{
			name: 'Dissonant Tone',
			description: 'Emit a jarring emotional vibration that interrupts spellcasting.'
		},
		{
			name: 'Harmonize',
			description: 'Align the emotional states of nearby allies, granting a small group buff.'
		},
		{
			name: 'Mesmeric Glance',
			description: 'A focused gaze that briefly slows or distracts a single target.'
		},
		{
			name: 'Crux Suggestion',
			description:
				'Plant a subtle mental nudge that influences an enemy’s next action to harm one of its allies.'
		},
		{
			name: 'Emotional Reservoir',
			description: 'Store excess emotional energy to empower a future enchantment.'
		},
		{
			name: 'Inspire',
			description: 'Boost an ally’s confidence, increasing their damage or healing output.'
		},
		{
			name: 'Bewilder',
			description: 'Cloud an enemy’s mind, reducing their resistances or decision‑making.'
		},
		{
			name: 'Crux Chorus',
			description: 'Your next three enchantments gain a small stacking bonus.'
		},
		{
			name: 'Enchanted Reversal',
			description: 'Reflect the next mental or emotional effect back at its caster.'
		},
		{
			name: 'Enchanter Ascendance',
			description:
				'Enter a heightened state of emotional and Crux mastery: stronger buffs, deeper influence, enhanced illusions.'
		}
	],

	passive: {
		name: 'Aura Weave',
		description: 'Your Crux and nanites form subtle enchantment fields.',
		effects: [
			'+10% buff strength',
			'+10% aura radius',
			'Casting a buff grants Resonance (boosts next enchantment)'
		]
	},

	progression: {
		level1: {
			name: 'Charm Spark',
			description:
				'A pulse of emotional Crux energy. Disorients an enemy, grants an ally minor haste, unlocks Resonant Pulse combos.'
		},

		level10: {
			options: [
				{
					name: 'Nanite Glamour',
					description:
						'Nanites distort your appearance. Enemies have reduced accuracy; allies gain +10% dodge chance.'
				},
				{
					name: 'Crux Inspire',
					description:
						'Channel uplifting Crux energy. Grants allies increased damage and minor regeneration.'
				}
			]
		},

		level20: {
			options: [
				{
					name: 'Enthrall',
					description: 'Overwhelm an enemy’s senses. Brief stun; reduces their damage afterward.'
				},
				{
					name: 'Resonant Shield',
					description:
						'A protective enchantment that absorbs damage and increases resistance to control effects.'
				}
			]
		},

		level30: {
			specializationChoices: [
				'Controller: A battlefield manipulator who uses illusions, telekinetic Crux, and nanite‑based crowd control to dominate enemy movement and actions.',
				'Bard: A charismatic performer who channels Crux through music, rhythm, and storytelling, empowering allies and weakening foes with emotional resonance.'
			]
		}
	},

	specializations: {
		Controller: {
			passive: {
				name: 'Mind Net',
				description: 'Your control effects linger longer.',
				effects: [
					'+15% duration on stuns, slows, and charms',
					'+10% illusion potency',
					'Applying a control effect grants Focus (boosts next CC)'
				]
			},

			level30: {
				name: 'Telekinetic Grasp',
				description:
					'Crux‑powered force seizes enemies, pulling them together, immobilizing briefly, and applying vulnerability.'
			},

			level40: {
				options: [
					{
						name: 'Nanite Paralysis',
						description:
							'Release neural‑interference nanites. Heavily slows enemies; can briefly stun weakened targets.'
					},
					{
						name: 'Crux Mirage Field',
						description:
							'Create a zone of shifting illusions. Enemies lose accuracy; allies gain dodge and movement speed.'
					}
				]
			},

			level50: {
				name: 'Mass Hypnosis',
				description:
					'Large AoE charm. Enemies wander harmlessly; allies gain massive haste and crit chance. Control persists full duration.'
			}
		},

		Bard: {
			passive: {
				name: 'Harmonic Flow',
				description: 'Your performances amplify Crux resonance.',
				effects: [
					'+15% buff duration',
					'+10% healing from songs',
					'Using a performance grants Crescendo (boosts next song)'
				]
			},

			level30: {
				name: 'Song of Valor',
				description:
					'A powerful Crux‑infused anthem. Allies gain damage, defense, and haste; you gain temporary damage reduction.'
			},

			level40: {
				options: [
					{
						name: 'Ballad of Mending',
						description: 'A soothing melody. Strong AoE healing over time; removes minor debuffs.'
					},
					{
						name: 'Discordant Note',
						description:
							'A jarring Crux‑charged chord. AoE damage; reduces enemy accuracy and crit chance.'
					}
				]
			},

			level50: {
				name: 'Symphony of the Stars',
				description:
					'Channel cosmic Crux through a grand performance. Massive AoE healing and buffs; enemies suffer heavy debuffs and periodic damage; allies gain immense speed, crit, and regeneration.'
			}
		}
	}
};

export const Engineer = {
	name: 'Engineer',
	description:
		'A brilliant technomancer who blends mechanical ingenuity with Crux‑powered devices and programmable nanites. Engineers deploy gadgets, turrets, drones, and battlefield tools that reshape combat through precision, automation, and controlled chaos.',

	coreIdentity: {
		role: 'Gadgeteer, battlefield controller',
		armor: 'Heavy',
		combatStyle: 'Deployables, turrets, drones, explosives, utility tools',
		cruxUse: 'Powers devices, stabilizes energy cores, fuels constructs',
		naniteUse: 'Repairs machinery, forms drones, enhances tech precision'
	},

	baseStats: {
		offense: 4,
		defense: 3,
		mobility: 3,
		cruxInteraction: 3,
		naniteSynergy: 5
	},

	weapons: {
		main_Hand:
			'Gauntlets, Baton, Hammer, Mace, Sword, Katana, Longbow, Adaptive Compound Bow (draw strength auto‑modulates), Wrist‑Bolter (rapid micro‑darts), Pistol, Shotgun, Rifle, Sniper, Launcher ',
		off_Hand:
			'Shard, Orb, Tome, Cards, Whip, Bolts (thrown darts), Caltrops, Bombs, Grenades, Lute, Flute, Bell, Trumpet, Drum'
	},

	baseAbilities: [
		{
			name: 'Crux Wrench',
			description:
				'Strike an enemy or device with a Crux‑charged tool, dealing damage or repairing constructs.'
		},
		{
			name: 'Deploy Repair Bot',
			description: 'Place a small automaton that heals allies first, then fires at nearby enemies.'
		},
		{
			name: 'Diagnostic Scan',
			description:
				'Analyze enemies or machines to reveal weaknesses, resistances, or structural flaws.'
		},
		{
			name: 'Crux Capacitor',
			description: 'Charge your gear with stored energy, empowering your next ability.'
		},
		{
			name: 'Shock Mine',
			description: 'Deploy a small mine that detonates when stepped on, stunning enemies.'
		},
		{
			name: 'Grapple Launcher',
			description: 'Fire a grappling hook to reposition quickly or pull objects.'
		},
		{
			name: 'Micro‑Drone',
			description:
				'Deploy a small drone that scouts, marks enemies, or provides light support fire.'
		},
		{
			name: 'Barrier Projector',
			description: 'Place a temporary energy barrier that blocks projectiles.'
		},
		{
			name: 'Auto‑Loader',
			description: 'Increase ammo regeneration or reduce reload time for a short duration.'
		},
		{
			name: 'Positive Vibes Generator',
			description: 'Place a device that grants buffs such as healing, speed, and resistance.'
		},
		{
			name: 'Crux Infusion',
			description: 'Empower your next few gadgets with elemental or force energy.'
		},
		{
			name: 'Deploy Brute Bot',
			description: 'Summon a large defensive automaton wielding an elemental thrower.'
		},
		{
			name: 'Extra Parts',
			description: 'Throw out a pack of nanites to heal all of your deployable constructs.'
		},
		{
			name: 'Tactical Rewire',
			description: 'Instantly reset the cooldown of a gadget by rerouting power.'
		},
		{
			name: 'Engineer Ascendance',
			description:
				'Enter a hyper‑optimized state: faster deployables, stronger constructs, and enhanced tech efficiency.'
		}
	],

	passive: {
		name: 'Techno‑Savant',
		description: 'Your machines operate with exceptional efficiency.',
		effects: [
			'+10% turret/drone damage',
			'+10% gadget duration',
			'Deploying a device grants Overclock (boosts next gadget)'
		]
	},

	progression: {
		level1: {
			name: 'Deploy Turret',
			description:
				'Place a small automated turret. Fires at enemies, scales with your stats, unlocks Tech Pulse combos.'
		},

		level10: {
			options: [
				{
					name: 'Nanite Repair Drone',
					description:
						'Deploy a drone that heals you or an ally over time and repairs nearby constructs.'
				},
				{
					name: 'Crux Capacitor',
					description:
						'Overcharge your next device. Increases damage or healing and causes a small AoE burst.'
				}
			]
		},

		level20: {
			options: [
				{
					name: 'Shock Mine',
					description:
						'Place an electrified mine that explodes when triggered and briefly stuns enemies.'
				},
				{
					name: 'Hardlight Barrier',
					description:
						'Project a temporary Crux‑powered shield wall that blocks movement and absorbs ranged attacks.'
				}
			]
		},

		level30: {
			specializationChoices: [
				'Artificer: A master builder who constructs advanced turrets, drones, and hardlight machinery to dominate the battlefield with precision automation. ',
				'Mortarist: A long‑range demolition expert who uses explosive shells, arc‑launchers, and nanite‑fused munitions to reshape the battlefield from afar.'
			]
		}
	},

	specializations: {
		Artificer: {
			passive: {
				name: 'Construct Mastery',
				description: 'Your deployables become more advanced.',
				effects: [
					'+20% turret/drone health',
					'+15% construct damage',
					'Deploying a construct grants Blueprint (boosts next deployable)'
				]
			},

			level30: {
				name: 'Advanced Turret',
				description:
					'Upgrade your basic turret into a modular construct with selectable modes: Gatling, Railshot, or Support Zone.'
			},

			level40: {
				options: [
					{
						name: 'Nanite Fabricator',
						description:
							'Deploy a device that produces micro‑drones which attack enemies or repair allies.'
					},
					{
						name: 'Hardlight Golem',
						description:
							'Summon a temporary hardlight construct that taunts enemies, deals melee damage, and absorbs hits.'
					}
				]
			},

			level50: {
				name: 'Omega Construct',
				description:
					'Deploy a massive multi‑function machine that fires beams, missiles, and support pulses. Buffs allies and deals heavy sustained damage.'
			}
		},

		Mortarist: {
			passive: {
				name: 'Ballistic Savant',
				description: 'Your explosive munitions are devastatingly precise.',
				effects: [
					'+15% explosive damage',
					'+10% blast radius',
					'Landing a direct hit grants Shellshock (boosts next shot)'
				]
			},

			level30: {
				name: 'Arc Mortar',
				description:
					'Deploy a mortar that fires arcing explosive shells. Can be manually targeted. Applies burn or shrapnel bleed.'
			},

			level40: {
				options: [
					{
						name: 'Nanite Cluster Shell',
						description:
							'A shell that bursts into nanite swarms. Deals AoE damage, applies corrosion, and lingers as a damaging field.'
					},
					{
						name: 'Crux Siege Round',
						description:
							'A high‑impact Crux‑charged shell dealing massive single‑target damage and creating a shockwave.'
					}
				]
			},

			level50: {
				name: 'Barrage Protocol',
				description:
					'Unleash a devastating multi‑shell bombardment. Huge AoE, multiple explosions, stuns, burns, armor breaks, and leaves a nanite hazard zone.'
			}
		}
	}
};
