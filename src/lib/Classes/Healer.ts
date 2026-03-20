export const Priest = {
	name: 'Priest',
	description:
		'A devoted channeler of sacred Crux energy who heals allies, wards off corruption, and invokes cosmic blessings. Priests serve as spiritual guides and battlefield protectors, using nanite‑enhanced rituals to amplify their divine resonance.',

	coreIdentity: {
		role: 'Healer, support caster, purifier, buffer',
		armor: 'Light',
		combatStyle: 'Crux blessings, radiant bursts, protective wards',
		cruxUse: 'Channels pure, harmonic Crux energy',
		naniteUse: 'Healing amplification, aura projection, purification'
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
			'Staff, Wand, Scepter, Gauntlets, Anklets, Chakrams, Baton, Scythe, Spear, Wrist‑Bolter (rapid micro‑darts), Pistol, Shotgun, Launcher',
		off_Hand:
			'Shard, Orb, Tome, Kite Shield, Shield, Whip, Harpoon, Bolts (thrown darts), Bombs, Lute, Flute, Bell, Trumpet, Drum'
	},

	baseAbilities: [
		{
			name: 'Radiant Spark',
			description:
				'A small burst of holy energy that damages enemies or lightly heals allies depending on the target.'
		},
		{
			name: 'Blessing of Light',
			description: 'Grant an ally a minor buff to defense or healing received.'
		},
		{
			name: 'Purify',
			description: 'Cleanse a single negative effect such as poison, bleed, or minor curses.'
		},
		{
			name: 'Divine Sense',
			description: 'Detect nearby spiritual disturbances, corrupted Crux, or hidden entities.'
		},
		{
			name: 'Healing Prayer',
			description: 'A focused channel that restores health over time to a single ally.'
		},
		{
			name: 'Radiant Ward',
			description:
				'Create a protective barrier that absorbs damage and glows brighter as it weakens.'
		},
		{
			name: 'Holy Nova',
			description: 'A radial burst of radiant energy that heals allies and damages enemies.'
		},
		{
			name: 'Lightbind',
			description:
				'A beam of divine energy that tethers to an enemy, slowing them and reducing their damage.'
		},
		{
			name: 'Sacred Ground',
			description:
				'Consecrate an area, granting healing and resistance to allies standing within it.'
		},
		{
			name: 'Radiant Chains',
			description: 'Bind an enemy with glowing chains of light, immobilizing them.'
		},
		{
			name: 'Prayer of Renewal',
			description: 'A wave of restorative energy that heals all nearby allies.'
		},
		{
			name: 'Blessing of Swiftness',
			description: 'Temporarily increase movement speed and casting speed for yourself or an ally.'
		},
		{
			name: 'Spirit Reservoir',
			description: 'Store excess divine energy to empower a future healing or damage spell.'
		},
		{
			name: 'Light of Judgment',
			description:
				'Call down a focused beam of radiant power that deals heavy damage to a single target.'
		},
		{
			name: 'Priest Ascendance',
			description:
				'Enter a heightened divine state: increased healing, reduced damage taken, and enhanced spell potency.'
		}
	],

	passive: {
		name: 'Sacred Resonance',
		description: 'Your Crux harmonizes with allies’ life energy.',
		effects: [
			'+10% healing',
			'+10% aura radius',
			'Healing allies grants Grace (boosts next heal or shield)'
		]
	},

	progression: {
		level1: {
			name: 'Radiant Touch',
			description:
				'A burst of healing Crux energy. Heals an ally, deals minor damage to nearby enemies, and unlocks Blessing Pulse combos.'
		},

		level10: {
			options: [
				{
					name: 'Crux Ward',
					description:
						'Create a protective barrier around an ally. Absorbs damage and explodes in radiant light when broken.'
				},
				{
					name: 'Nanite Mend',
					description:
						'Nanites swarm to repair tissue. Strong single‑target heal and applies minor regeneration.'
				}
			]
		},

		level20: {
			options: [
				{
					name: 'Purifying Beam',
					description:
						'A focused ray of harmonic Crux. Damages enemies and cleanses allies of debuffs.'
				},
				{
					name: 'Sanctuary Field',
					description:
						'Create a healing zone. Allies regenerate health; enemies inside deal reduced damage.'
				}
			]
		},

		level30: {
			specializationChoices: [
				'Cleric: A battle‑ready holy warrior who blends healing with frontline protection, radiant strikes, and Crux‑infused shields.',
				'Herald: A cosmic messenger who channels divine resonance into powerful auras, blessings, and battlefield‑wide empowerment.'
			]
		}
	},

	specializations: {
		Cleric: {
			passive: {
				name: 'Divine Bulwark',
				description: 'Your Crux shields harden in combat.',
				effects: [
					'+10% defense',
					'+10% shield strength',
					'Healing an ally grants you a small shield'
				]
			},

			level30: {
				name: 'Smite',
				description:
					'Channel radiant Crux into a devastating strike. High single‑target damage, applies Radiant Burn, and heals nearby allies slightly.'
			},

			level40: {
				options: [
					{
						name: 'Crux Aegis',
						description:
							'A powerful defensive blessing. +30% damage reduction to an ally and reflects a portion of damage.'
					},
					{
						name: 'Nanite Retribution',
						description:
							'Nanites retaliate when you or an ally is struck. Deals damage to attackers and applies a brief slow.'
					}
				]
			},

			level50: {
				name: 'Avatar of Light',
				description:
					'Become a radiant conduit of divine Crux. Massive AoE healing; allies gain +20% damage and +20% defense; enemies take continuous radiant damage; you cannot be interrupted while channeling.'
			}
		},

		Herald: {
			passive: {
				name: 'Voice of the Cosmos',
				description: 'Your presence amplifies Crux harmonics.',
				effects: [
					'+15% aura strength',
					'+10% buff duration',
					'Casting a blessing sends out a small healing wave'
				]
			},

			level30: {
				name: 'Proclamation',
				description:
					'Unleash a cosmic decree of power. Allies gain haste and increased crit chance; enemies are weakened and slowed.'
			},

			level40: {
				options: [
					{
						name: 'Harmonic Chorus',
						description:
							'Project a resonant aura. Heals allies over time and increases their Crux damage.'
					},
					{
						name: 'Nanite Benediction',
						description:
							'Nanites enhance your blessings. Next three heals or buffs are doubled and grant a small shield to each target.'
					}
				]
			},

			level50: {
				name: 'Celestial Manifest',
				description:
					'Summon a towering avatar of cosmic Crux. Emits powerful healing and damage waves; allies gain massive buffs; enemies suffer heavy radiant damage and debuffs; the manifest persists for full duration.'
			}
		}
	}
};

export const Paladin = {
	name: 'Paladin',
	description:
		'A holy warrior who channels radiant Crux energy through disciplined martial skill and nanite‑reinforced armor. Paladins stand as unbreakable defenders of their allies, wielding both blade and blessing to purge corruption and uphold cosmic order.',

	coreIdentity: {
		role: 'Tank/support hybrid, frontline protector, radiant striker',
		armor: 'Heavy',
		combatStyle: 'Heavy melee, shields, radiant bursts, auras',
		cruxUse: 'Pure, structured, defensive and purifying',
		naniteUse: 'Armor reinforcement, healing pulses, aura projection'
	},

	baseStats: {
		offense: 3,
		defense: 5,
		mobility: 3,
		cruxInteraction: 4,
		naniteSynergy: 4
	},

	weapons: {
		main_Hand:
			'Staff, Scepter, Baton, Hammer, Mace, Club, Maul, Flail, Axe, Spear, Tri‑dent, Glaive, Halberd, Sword, Saber, Katana, Gladius, Shotgun',
		off_Hand:
			'Shard, Orb, Tome, Kite Shield, Shield, Whip, Harpoon, Bolts (thrown darts), Bombs, Lute, Flute, Bell, Trumpet, Drum'
	},

	baseAbilities: [
		{
			name: 'Radiant Strike',
			description: 'A melee attack empowered with divine energy, dealing bonus radiant damage.'
		},
		{
			name: 'Shield of Faith',
			description: 'Create a shimmering barrier that reduces incoming damage for a short duration.'
		},
		{
			name: 'Holy Charge',
			description: 'Dash forward in a burst of light, knocking enemies aside.'
		},
		{
			name: 'Lay on Hands',
			description: 'Channel divine energy through your palms to heal an ally or yourself.'
		},
		{
			name: 'Righteous Fury',
			description: 'Temporarily increase weapon damage and threat generation.'
		},
		{
			name: 'Sacred Shield Bash',
			description:
				'Strike with your shield, interrupting spellcasting and briefly stunning the target.'
		},
		{
			name: 'Divine Ward',
			description:
				'Place a protective sigil on the ground that reduces damage taken by allies inside.'
		},
		{
			name: 'Holy Reprisal',
			description: 'When struck, unleash a burst of radiant retaliation damage.'
		},
		{
			name: 'Blessing of Defense',
			description:
				'Hurl a spear of condensed light that pierces through multiple enemies and generates high threat.'
		},
		{
			name: 'Blessing of Damage',
			description: 'Increase an ally’s physical damage or weapon potency.'
		},
		{
			name: 'Holy Rally',
			description: 'Inspire nearby allies, granting temporary health or increased defenses.'
		},
		{
			name: 'Purge Evil',
			description: 'Cleanse an area of curses, corruption, or minor undead constructs.'
		},
		{
			name: 'Lightforge Weapon',
			description:
				'Imbue your weapon with radiant energy, causing bonus damage for several strikes.'
		},
		{
			name: 'Paladin Ascendance',
			description:
				'Enter a state of divine empowerment: increased damage, stronger auras, and reduced incoming harm.'
		}
	],

	passive: {
		name: 'Radiant Bulwark',
		description: 'Your armor resonates with holy Crux energy.',
		effects: [
			'+10% damage reduction',
			'+10% healing received',
			'Blocking an attack releases a small radiant pulse'
		]
	},

	progression: {
		level1: {
			name: 'Holy Strike',
			description:
				'A melee attack infused with radiant Crux. +20% damage, applies minor Radiant Burn, and unlocks Blessed Combo chains.'
		},

		level10: {
			options: [
				{
					name: 'Crux Barrier',
					description:
						'Summon a radiant shield around yourself or an ally. Absorbs damage and explodes in light when broken.'
				},
				{
					name: 'Nanite Purge',
					description:
						'Nanites cleanse your body. Removes debuffs and grants minor healing over time.'
				}
			]
		},

		level20: {
			options: [
				{
					name: 'Radiant Wave',
					description:
						'Send out a shockwave of holy Crux. Medium AoE that damages enemies and slightly heals allies.'
				},
				{
					name: 'Guardian’s Step',
					description:
						'Teleport to an ally in danger. Grants both of you a temporary shield and increases your threat generation.'
				}
			]
		},

		level30: {
			specializationChoices: [
				'Vanguard: A frontline juggernaut who leads the charge, protects allies with unbreakable resolve, and controls the battlefield with radiant force.',
				'Templar: A disciplined holy knight who channels structured Crux rituals, smites foes with divine precision, and empowers allies with sacred auras.'
			]
		}
	},

	specializations: {
		Vanguard: {
			passive: {
				name: 'Frontline Momentum',
				description: 'Your presence inspires allies and intimidates foes.',
				effects: [
					'+10% defense',
					'+10% threat generation',
					'Blocking attacks increases your damage briefly'
				]
			},

			level30: {
				name: 'Shield Charge',
				description:
					'Dash forward with your shield raised. Knocks enemies down, deals AoE damage on impact, and grants a temporary defense boost.'
			},

			level40: {
				options: [
					{
						name: 'Radiant Bulrush',
						description:
							'A Crux‑powered charge. Long‑range gap closer that leaves a radiant trail damaging enemies.'
					},
					{
						name: 'Nanite Fortification',
						description:
							'Nanites reinforce your armor plates. +40% damage reduction for 4 seconds; immune to stuns and knockbacks.'
					}
				]
			},

			level50: {
				name: 'Aegis of the Fallen Star',
				description:
					'Become a living fortress of radiant Crux. Massive AoE taunt; +50% defense; allies inside your aura take 30% less damage; enemies suffer continuous radiant damage.'
			}
		},

		Templar: {
			passive: {
				name: 'Sacred Discipline',
				description: 'Your Crux rituals are precise and potent.',
				effects: [
					'+15% radiant damage',
					'+10% healing output',
					'Casting a blessing grants a small damage buff'
				]
			},

			level30: {
				name: 'Judgment',
				description:
					'Call down a beam of concentrated holy Crux. High single‑target damage, applies heavy Radiant Burn, and heals nearby allies slightly.'
			},

			level40: {
				options: [
					{
						name: 'Crux Rite',
						description:
							'Perform a sacred ritual. Grants allies increased damage and crit chance; weakens enemies caught in the aura.'
					},
					{
						name: 'Nanite Benediction',
						description:
							'Nanites amplify your next three spells. Doubles healing, increases radiant damage, and grants a small shield to each target.'
					}
				]
			},

			level50: {
				name: 'Divine Ascension',
				description:
					'Rise into the air, becoming a beacon of holy Crux. Massive AoE healing; allies gain +25% damage and +25% defense; enemies take heavy radiant damage and are blinded; you are immune to control effects during the channel.'
			}
		}
	}
};

export const Herbalist = {
	name: 'Herbalist',
	description:
		'A master of natural Crux flows, botanical nanites, and restorative mixtures. Herbalists gather, cultivate, and refine living materials into potent brews, battlefield remedies, and supportive enhancements.',

	coreIdentity: {
		role: 'Support specialist, healer, buffer, battlefield preparer',
		armor: 'Light',
		combatStyle: 'Brews, salves, botanical nanites, nature‑Crux bursts',
		cruxUse: 'Harmonizes with plant‑aligned Crux currents',
		naniteUse: 'Bio‑nanite cultivation, healing fields, reactive mixtures'
	},

	baseStats: {
		offense: 2,
		defense: 3,
		mobility: 3,
		cruxInteraction: 4,
		naniteSynergy: 5
	},

	weapons: {
		main_Hand:
			'Staff, Scepter, Gauntlets, Anklets, Baton, Spear, Cleaver, Daggers, Sword, Longbow, Wrist‑Bolter (rapid micro‑darts), Shotgun, Sniper, Launcher',
		off_Hand:
			'Shard, Orb, Tome, Kite Shield, Shield, Whip, Harpoon, Bolts (thrown darts), Bombs, Lute, Flute, Bell, Trumpet, Drum'
	},

	baseAbilities: [
		{
			name: 'Foraged Remedy',
			description: 'Create a quick, low‑grade healing salve from gathered herbs.'
		},
		{
			name: 'Tonic Splash',
			description: 'Throw a basic restorative tonic that heals allies in a small radius.'
		},
		{
			name: 'Rootbind Mixture',
			description: 'Toss a sticky herbal concoction that slows enemies on impact.'
		},
		{
			name: 'Bitter Draught',
			description: 'A quick‑drink tonic that boosts stamina or Crux regeneration for a short time.'
		},
		{
			name: 'Soothing Aroma',
			description: 'Release a calming scent that reduces ally fear.'
		},
		{
			name: 'Thornbrew Flask',
			description: 'Throw a flask that bursts into thorny vines, dealing light damage over time.'
		},
		{
			name: 'Regrowth Salve',
			description: 'Apply a salve that heals over time and increases natural recovery.'
		},
		{
			name: 'Herbal Shielding',
			description: 'Coat an ally in a protective herbal oil that slightly reduces incoming damage.'
		},
		{
			name: 'Energizing Tea',
			description: 'Brew a quick tea that boosts movement speed and casting speed.'
		},
		{
			name: 'Verdant Echo',
			description: 'Your next healing or support ability repeats at reduced potency.'
		},
		{
			name: 'Cleansing Brew',
			description: 'Remove multiple minor debuffs from an ally using a potent herbal mixture.'
		},
		{
			name: 'Bloom Bomb',
			description:
				'Throw a seed that erupts into a burst of petals, lightly damaging enemies and refreshing allies.'
		},
		{
			name: 'Herbal Reservoir',
			description: 'Store excess herbal energy to empower a future brew or salve.'
		},
		{
			name: 'Nature’s Tincture',
			description:
				'A versatile tincture that can be quickly modified to heal, cleanse, or buff depending on the situation.'
		},
		{
			name: 'Herbalist Ascendance',
			description:
				'Enter a heightened state of botanical mastery: faster brew times, stronger healing, and enhanced resource detection.'
		}
	],

	passive: {
		name: 'Botanical Harmony',
		description: 'Your Crux and nanites resonate with plant life.',
		effects: [
			'+10% healing from mixtures',
			'+10% buff duration',
			'Using a brew grants Bloom (boosts next heal or buff)'
		]
	},

	progression: {
		level1: {
			name: 'Healing Draught',
			description:
				'A quick‑acting restorative mixture. Heals an ally, applies minor regeneration, and unlocks Herbal Pulse combos.'
		},

		level10: {
			options: [
				{
					name: 'Nanite Sporecloud',
					description:
						'Release a healing field. Heals allies in a small radius and cleanses minor debuffs.'
				},
				{
					name: 'Crux Vinebind',
					description: 'Summon living vines. Roots an enemy and applies minor poison.'
				}
			]
		},

		level20: {
			options: [
				{
					name: 'Growth Burst',
					description:
						'Channel Crux into rapid plant growth. Creates a healing zone; allies inside gain defense.'
				},
				{
					name: 'Toxic Bloom',
					description:
						'Release a cloud of corrosive botanical nanites. Damages enemies over time and applies Wither (reduces enemy damage).'
				}
			]
		},

		level30: {
			specializationChoices: [
				'Alchemist: A master of volatile mixtures, explosive concoctions, and transformative brews that alter the battlefield and empower allies.',
				'Scribe: A Crux‑scholar who uses plant pigments and nanites to inscribe runes, scrolls, and sigils that enhance allies, weaken enemies, and manipulate battlefield energies.'
			]
		}
	},

	specializations: {
		Alchemist: {
			passive: {
				name: 'Volatile Mastery',
				description: 'Your mixtures become more potent — and more dangerous.',
				effects: [
					'+15% brew effectiveness',
					'+10% AoE size for thrown concoctions',
					'Using an explosive brew grants Catalyst (boosts next throw)'
				]
			},

			level30: {
				name: 'Catalytic Flask',
				description:
					'Throw an unstable alchemical mixture. Explodes on impact, deals AoE damage, and applies burn or corrosion depending on your build.'
			},

			level40: {
				options: [
					{
						name: 'Transmutation Brew',
						description:
							'Temporarily alter an ally’s physiology. Grants +20% damage, +20% movement speed, and minor regeneration.'
					},
					{
						name: 'Nanite Nitro',
						description:
							'A volatile nanite‑infused explosive. High AoE burst and applies Shatter (reduces enemy defenses).'
					}
				]
			},

			level50: {
				name: 'Grand Elixir',
				description:
					'Mix a massive alchemical effect on the fly. Choose one of three forms: Elixir of Life (huge AoE heal + regen), Elixir of Fury (massive damage buff + haste), or Elixir of Ruin (huge AoE damage + heavy corrosion).'
			}
		},

		Scribe: {
			passive: {
				name: 'Runic Insight',
				description: 'Your inscriptions channel structured Crux patterns.',
				effects: [
					'+15% buff strength',
					'+10% debuff duration',
					'Casting a rune grants Glyph Charge (boosts next rune)'
				]
			},

			level30: {
				name: 'Sigil of Warding',
				description:
					'Place a protective Crux rune. Allies inside gain defense and damage reduction; enemies inside deal reduced damage.'
			},

			level40: {
				options: [
					{
						name: 'Rune of Binding',
						description:
							'Inscribe a Crux sigil beneath an enemy. Roots the target and applies Seal (reduces their damage and healing).'
					},
					{
						name: 'Scroll of Empowerment',
						description:
							'Unfurl a radiant scroll. Grants allies increased crit chance and haste, and applies a small shield.'
					}
				]
			},

			level50: {
				name: 'Grand Grimoire',
				description:
					'Open an ancient Crux tome of overwhelming power. Emits waves of healing and buffs; enemies suffer heavy debuffs and periodic damage; allies inside the aura gain massive stat boosts; lasts full duration regardless of damage.'
			}
		}
	}
};

export const Medic = {
	name: 'Medic',
	description:
		'A frontline lifesaver who blends medical expertise with nanite‑driven healing and Crux‑stabilization techniques. Medics keep allies alive through rapid response, battlefield triage, and precise intervention under pressure.',

	coreIdentity: {
		role: 'Healer, stabilizer, support specialist',
		armor: 'Medium',
		combatStyle: 'Nanite injections, Crux stabilizers, trauma tools',
		cruxUse: 'Stabilizes vitals, enhances regeneration, purges corruption',
		naniteUse: 'Tissue repair, clotting control, emergency boosts'
	},

	baseStats: {
		offense: 2,
		defense: 3,
		mobility: 4,
		cruxInteraction: 3,
		naniteSynergy: 5
	},

	weapons: {
		main_Hand:
			'Staff, Scepter, Gauntlets, Anklets, Baton, Scythe, Spear, Tri‑dent, Cleaver, Sword, Rapier, Adaptive Compound Bow (draw strength auto‑modulates), Wrist‑Bolter (rapid micro‑darts), Pistol, Rifle, Sniper',
		off_Hand:
			'Shard, Orb, Tome, Kite Shield, Shield, Whip, Harpoon, Bolts (thrown darts), Bombs, Lute, Flute, Bell, Trumpet, Drum'
	},

	baseAbilities: [
		{
			name: 'Combat Injection',
			description:
				'Inject yourself or an ally with a stimulant that boosts movement speed or reaction time.'
		},
		{
			name: 'Medical Scan',
			description: 'Analyze a target to reveal health, injuries, debuffs, and hidden conditions.'
		},
		{
			name: 'Nanite Stitch',
			description: 'A rapid‑deploy healing patch that closes minor wounds instantly.'
		},
		{
			name: 'Cleanse Protocol',
			description: 'Deploy nanites that remove poisons, bleeds, and minor debuffs.'
		},
		{
			name: 'Vital Surge',
			description:
				'A burst of restorative energy that heals an ally more the lower their health is.'
		},
		{
			name: 'Nanite Beacon',
			description: 'Place a small device that periodically heals nearby allies.'
		},
		{
			name: 'Adrenaline Shot',
			description: 'Revive a downed ally with a burst of temporary health and increased stamina.'
		},
		{
			name: 'Pain Suppressant',
			description: 'Reduce an ally’s incoming damage and stagger for a short time.'
		},
		{
			name: 'Crux Defibrillate',
			description:
				'Channel Crux into a target to shock them back to fighting condition or damage undead/constructs.'
		},
		{
			name: 'Rapid Triage',
			description: 'Instantly heal the most injured nearby ally, prioritizing critical targets.'
		},
		{
			name: 'Med‑Drone Deploy',
			description: 'Summon a small drone that follows you and provides periodic micro‑heals.'
		},
		{
			name: 'Nanite Reversal',
			description: 'Reflect the next harmful debuff back at its source using adaptive nanites.'
		},
		{
			name: 'Vital Reservoir',
			description: 'Store excess nanite charge to empower a future heal or cleanse.'
		},
		{
			name: 'Emergency Barrier',
			description:
				'Deploy a temporary shield around an ally that absorbs a burst of incoming damage.'
		},
		{
			name: 'Medic Ascendance',
			description:
				'Enter a hyper‑focused medical state: faster movement, stronger heals, and instant access to triage abilities.'
		}
	],

	passive: {
		name: 'Triage Protocol',
		description: 'Your training kicks in automatically under pressure.',
		effects: [
			'+10% healing to low‑health allies',
			'+10% movement speed when healing',
			'Healing an ally grants Stabilize (boosts next heal or cleanse)'
		]
	},

	progression: {
		level1: {
			name: 'Nanite Injection',
			description:
				'A fast‑acting medical nanite dose. Heals an ally, applies minor regeneration, and unlocks Med Pulse combos.'
		},

		level10: {
			options: [
				{
					name: 'Crux Defibrillate',
					description:
						'A burst of stabilizing Crux energy. Heals and cleanses an ally and briefly increases their movement speed.'
				},
				{
					name: 'Trauma Patch',
					description:
						'Apply a nanite‑infused patch. Absorbs damage and converts a portion of damage taken into healing.'
				}
			]
		},

		level20: {
			options: [
				{
					name: 'Field Cleanse',
					description:
						'Purge harmful effects. Removes debuffs in an area and grants temporary resistance to new ones.'
				},
				{
					name: 'Adrenal Boost',
					description:
						'Nanites spike an ally’s adrenaline. +20% attack speed and +20% movement speed for a short duration.'
				}
			]
		},

		level30: {
			specializationChoices: [
				'Doctor: A master of sustained healing, regeneration, and battlefield medicine who keeps allies alive through efficiency and expertise.',
				'Surgeon: A precision specialist who excels at emergency intervention, burst healing, and nanite‑enhanced surgical strikes.'
			]
		}
	},

	specializations: {
		Doctor: {
			passive: {
				name: 'Clinical Efficiency',
				description: 'Your treatments waste nothing.',
				effects: [
					'+15% healing',
					'+10% regeneration strength',
					'Healing an ally grants Vitality (boosts next heal)'
				]
			},

			level30: {
				name: 'Regenerative Mist',
				description:
					'Release a cloud of healing nanites. AoE healing over time; allies inside gain increased healing received.'
			},

			level40: {
				options: [
					{
						name: 'Crux Stabilizer',
						description:
							'A powerful stabilizing field. Allies inside take reduced damage, heal over time, and cleanse minor debuffs.'
					},
					{
						name: 'Nanite Transfusion',
						description:
							'Transfer your own nanites to an ally. Strong single‑target heal and grants temporary regeneration.'
					}
				]
			},

			level50: {
				name: 'Life Support Field',
				description:
					'Deploy a large medical zone. Massive AoE healing; allies cannot drop below 1 HP while inside; cleanses all debuffs; persists full duration.'
			}
		},

		Surgeon: {
			passive: {
				name: 'Precision Intervention',
				description: 'Your nanites operate with surgical accuracy.',
				effects: [
					'+15% burst healing',
					'+10% crit chance on healing abilities',
					'Emergency heals grant Incision (boosts next ability)'
				]
			},

			level30: {
				name: 'Emergency Cut',
				description:
					'A rapid surgical nanite procedure. Huge single‑target heal, removes major debuffs, and grants temporary damage reduction.'
			},

			level40: {
				options: [
					{
						name: 'Crux Scalpel',
						description:
							'A precise Crux‑infused strike. Deals damage, heals nearby allies based on damage dealt, and applies Expose (reduces enemy defenses).'
					},
					{
						name: 'Nanite Suture',
						description:
							'Seal wounds instantly. Strong heal and grants a shield that regenerates if not broken.'
					}
				]
			},

			level50: {
				name: 'Operating Theatre',
				description:
					'Create a temporary surgical zone. All healing is massively increased; allies inside gain damage reduction and regeneration; you gain instant‑cast healing abilities; enemies inside suffer reduced damage output.'
			}
		}
	}
};
