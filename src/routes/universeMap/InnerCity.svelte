<script lang="ts">
	type UpgradeReq = {
		tier: string;
		requirements: string;
	};

	type Building = {
		id: string;
		name: string;
		type: string;
		tier: number;
		description: string;
		level: number;
		bonuses: string;
		actions: string[];
		profession: string[];
		taskReward: string;
		requirements: string;
		upgrades: UpgradeReq[];
	};

	const buildings: Building[] = [
		{
			id: 'castle-proper',
			name: 'Castle Proper',
			type: 'Building',
			tier: 1,
			description: "The player's main hall, throne room, and administrative center.",
			level: 1,
			bonuses: 'renown gain +5%',
			actions: ['Hold Court', 'Assign Followers', 'Review Reports'],
			profession: ['Advisor'],
			taskReward: 'Renown',
			requirements: 'stone 5, gold 10',
			upgrades: [
				{ tier: 'Rebuilt', requirements: 'stone 20, gold 30' },
				{ tier: 'Established', requirements: 'stone 30, wood 20, gold 50' },
				{ tier: 'Improved', requirements: 'stone 40, wood 40, metal bars 10, gold 100' },
				{ tier: 'Advanced', requirements: 'stone 50, wood 60, metal bars 25, tools 15, gold 120' },
				{
					tier: 'Exquisite',
					requirements: 'stone 60, wood 80, metal bars 25, enchanted tools 15, gold 160, gems 20'
				}
			]
		},
		{
			id: 'council-hall',
			name: 'Council Hall',
			type: 'Building',
			tier: 1,
			description: 'Governance decisions, diplomacy, and lawmaking.',
			level: 1,
			bonuses: 'diplomacy XP +5%, renown gain +3%',
			actions: ['Hold Council', 'Draft Decrees', 'Meet Envoys'],
			profession: ['Councilor'],
			taskReward: 'Renown, Villagers',
			requirements: 'stone 25, gold 40',
			upgrades: [
				{ tier: 'Rebuilt', requirements: 'stone 20, gold 30' },
				{ tier: 'Established', requirements: 'stone 30, wood 20, gold 50' },
				{ tier: 'Improved', requirements: 'stone 40, wood 40, metal bars 10, gold 100' },
				{ tier: 'Advanced', requirements: 'stone 50, wood 60, metal bars 25, tools 15, gold 120' },
				{
					tier: 'Exquisite',
					requirements: 'stone 60, wood 80, metal bars 25, enchanted tools 15, gold 160, gems 20'
				}
			]
		},
		{
			id: 'market',
			name: 'Market',
			type: 'Building',
			tier: 1,
			description: 'Hub for buying, selling, and trading goods.',
			level: 1,
			bonuses: 'trade prices +2% better',
			actions: ['Buy', 'Sell', 'Trade', 'Commission Order'],
			profession: ['Merchant', 'Trader'],
			taskReward: 'gold',
			requirements: 'gold 50, stone 10, wood 10',
			upgrades: [
				{ tier: 'Rebuilt', requirements: 'stone 20, gold 30' },
				{ tier: 'Established', requirements: 'stone 30, wood 20, gold 50' },
				{ tier: 'Improved', requirements: 'stone 40, wood 40, metal bars 10, gold 100' },
				{ tier: 'Advanced', requirements: 'stone 50, wood 60, metal bars 25, tools 15, gold 120' },
				{
					tier: 'Exquisite',
					requirements: 'stone 60, wood 80, metal bars 25, enchanted tools 15, gold 160, gems 20'
				}
			]
		},
		{
			id: 'well-waterworks',
			name: 'Well / Waterworks',
			type: 'Building',
			tier: 1,
			description: 'Clean water source; boosts health and reduces sickness events.',
			level: 1,
			bonuses: 'health recovery +5%',
			actions: ['Draw Water', 'Purify Water'],
			profession: ['Waterkeeper'],
			taskReward: 'water',
			requirements: 'stone 10, wood 10',
			upgrades: [
				{ tier: 'Rebuilt', requirements: 'stone 20, gold 30' },
				{ tier: 'Established', requirements: 'stone 30, wood 20, gold 50' },
				{ tier: 'Improved', requirements: 'stone 40, wood 40, metal bars 10, gold 100' },
				{ tier: 'Advanced', requirements: 'stone 50, wood 60, metal bars 25, tools 15, gold 120' },
				{
					tier: 'Exquisite',
					requirements: 'stone 60, wood 80, metal bars 25, enchanted tools 15, gold 160, gems 20'
				}
			]
		},
		{
			id: 'messenger-post',
			name: 'Messenger Post',
			type: 'Building',
			tier: 2,
			description: 'Dispatch riders and long‑distance communication.',
			level: 1,
			bonuses: 'communication speed +10%, villager XP +5%',
			actions: ['Send/Receive Message', 'Assign Courier'],
			profession: ['Postmaster'],
			taskReward: 'communication speed',
			requirements: 'wood 10, rope 5, horses 5, gold 10',
			upgrades: [
				{ tier: 'Rebuilt', requirements: 'stone 20, gold 30' },
				{ tier: 'Established', requirements: 'stone 30, wood 20, gold 50' },
				{ tier: 'Improved', requirements: 'stone 40, wood 40, metal bars 10, gold 100' },
				{ tier: 'Advanced', requirements: 'stone 50, wood 60, metal bars 25, tools 15, gold 120' },
				{
					tier: 'Exquisite',
					requirements: 'stone 60, wood 80, metal bars 25, enchanted tools 15, gold 160, gems 20'
				}
			]
		},
		{
			id: 'strategy-hall',
			name: 'Strategy Hall',
			type: 'Building',
			tier: 2,
			description: 'War planning, maps, scouting intel, follower assignments.',
			level: 1,
			bonuses: 'scouting efficiency +5%, mission planning +5%',
			actions: ['Review Maps', 'Assign Patrols', 'Plan Strategy'],
			profession: ['Strategist'],
			taskReward: 'Defense',
			requirements: 'wood 15, stone, paper 10, followers 10',
			upgrades: [
				{ tier: 'Rebuilt', requirements: 'stone 20, gold 30' },
				{ tier: 'Established', requirements: 'stone 30, wood 20, gold 50' },
				{ tier: 'Improved', requirements: 'stone 40, wood 40, metal bars 10, gold 100' },
				{ tier: 'Advanced', requirements: 'stone 50, wood 60, metal bars 25, tools 15, gold 120' },
				{
					tier: 'Exquisite',
					requirements: 'stone 60, wood 80, metal bars 25, enchanted tools 15, gold 160, gems 20'
				}
			]
		},
		{
			id: 'tailor-clothier',
			name: 'Tailor / Clothier',
			type: 'Building',
			tier: 2,
			description: 'Produces clothing, robes, uniforms, and banners.',
			level: 1,
			bonuses: 'crafting quality +3%, villager XP +5%',
			actions: ['Sew Clothing', 'Craft Uniforms', 'Design Banner'],
			profession: ['Tailor'],
			taskReward: 'Cloths, wool, rune-cloth',
			requirements: 'cloth 15, wood 10, stone 10',
			upgrades: [
				{ tier: 'Rebuilt', requirements: 'stone 20, gold 30' },
				{ tier: 'Established', requirements: 'stone 30, wood 20, gold 50' },
				{ tier: 'Improved', requirements: 'stone 40, wood 40, metal bars 10, gold 100' },
				{ tier: 'Advanced', requirements: 'stone 50, wood 60, metal bars 25, tools 15, gold 120' },
				{
					tier: 'Exquisite',
					requirements: 'stone 60, wood 80, metal bars 25, enchanted tools 15, gold 160, gems 20'
				}
			]
		},
		{
			id: 'chapel-shrine',
			name: 'Chapel / Shrine',
			type: 'Building',
			tier: 2,
			description: 'Blessings, healing, and divine quests.',
			level: 1,
			bonuses: 'healing +5%, blessing duration +5%',
			actions: ['Pray', 'Receive Blessing', 'Perform Ritual'],
			profession: ['Priest'],
			taskReward: 'happiness, healers',
			requirements: 'stone 20, cosmic ore - minor 5, rune-cloth 5',
			upgrades: [
				{ tier: 'Rebuilt', requirements: 'stone 20, gold 30' },
				{ tier: 'Established', requirements: 'stone 30, wood 20, gold 50' },
				{ tier: 'Improved', requirements: 'stone 40, wood 40, metal bars 10, gold 100' },
				{ tier: 'Advanced', requirements: 'stone 50, wood 60, metal bars 25, tools 15, gold 120' },
				{
					tier: 'Exquisite',
					requirements: 'stone 60, wood 80, metal bars 25, enchanted tools 15, gold 160, gems 20'
				}
			]
		},
		{
			id: 'stables',
			name: 'Stables',
			type: 'Building',
			tier: 2,
			description: 'Houses mounts and improves travel or delivery tasks.',
			level: 1,
			bonuses: 'travel speed +5%, delivery efficiency +3%',
			actions: ['Feed Mount', 'Train Mount', 'Assign Courier'],
			profession: ['Stablemaster'],
			taskReward: 'horses',
			requirements: 'wood 20, stone 10, horses 10',
			upgrades: [
				{ tier: 'Rebuilt', requirements: 'stone 20, gold 30' },
				{ tier: 'Established', requirements: 'stone 30, wood 20, gold 50' },
				{ tier: 'Improved', requirements: 'stone 40, wood 40, metal bars 10, gold 100' },
				{ tier: 'Advanced', requirements: 'stone 50, wood 60, metal bars 25, tools 15, gold 120' },
				{
					tier: 'Exquisite',
					requirements: 'stone 60, wood 80, metal bars 25, enchanted tools 15, gold 160, gems 20'
				}
			]
		},
		{
			id: 'barracks',
			name: 'Barracks',
			type: 'Building',
			tier: 2,
			description: 'Housing for guards, boosts defense and patrol efficiency.',
			level: 1,
			bonuses: 'guard capacity +2, troops efficiency +5%',
			actions: ['Assign Guards', 'Train Recruits', 'Inspect Barracks'],
			profession: ['Captain of the Guard'],
			taskReward: 'Troops',
			requirements: 'wood 20, stone 20, villagers 10',
			upgrades: [
				{ tier: 'Rebuilt', requirements: 'stone 20, gold 30' },
				{ tier: 'Established', requirements: 'stone 30, wood 20, gold 50' },
				{ tier: 'Improved', requirements: 'stone 40, wood 40, metal bars 10, gold 100' },
				{ tier: 'Advanced', requirements: 'stone 50, wood 60, metal bars 25, tools 15, gold 120' },
				{
					tier: 'Exquisite',
					requirements: 'stone 60, wood 80, metal bars 25, enchanted tools 15, gold 160, gems 20'
				}
			]
		},
		{
			id: 'armory',
			name: 'Armory',
			type: 'Building',
			tier: 2,
			description: 'Stores weapons and armor; improves readiness and equipment quality.',
			level: 1,
			bonuses: 'equipment durability +5%, defense +5%',
			actions: ['Store Gear', 'Issue Equipment', 'Inspect Inventory'],
			profession: ['Quartermaster'],
			taskReward: 'defense',
			requirements: 'iron 10, wood 15, weapons 5, armor 5',
			upgrades: [
				{ tier: 'Rebuilt', requirements: 'stone 20, gold 30' },
				{ tier: 'Established', requirements: 'stone 30, wood 20, gold 50' },
				{ tier: 'Improved', requirements: 'stone 40, wood 40, metal bars 10, gold 100' },
				{ tier: 'Advanced', requirements: 'stone 50, wood 60, metal bars 25, tools 15, gold 120' },
				{
					tier: 'Exquisite',
					requirements: 'stone 60, wood 80, metal bars 25, enchanted tools 15, gold 160, gems 20'
				}
			]
		},
		{
			id: 'smith',
			name: 'Smith',
			type: 'Building',
			tier: 2,
			description: 'Forge and repair gear; unlocks crafting bonuses. Crafts metal bars.',
			level: 1,
			bonuses: 'crafting quality +5%, repair cost –10%',
			actions: ['Forge Item', 'Repair Gear', 'Upgrade Gear'],
			profession: ['Blacksmith'],
			taskReward: 'weapons, armor, metal bars, glass',
			requirements: 'iron 5, coal 5, wood 10, water 5',
			upgrades: [
				{ tier: 'Rebuilt', requirements: 'stone 20, gold 30' },
				{ tier: 'Established', requirements: 'stone 30, wood 20, gold 50' },
				{ tier: 'Improved', requirements: 'stone 40, wood 40, metal bars 10, gold 100' },
				{ tier: 'Advanced', requirements: 'stone 50, wood 60, metal bars 25, tools 15, gold 120' },
				{
					tier: 'Exquisite',
					requirements: 'stone 60, wood 80, metal bars 25, enchanted tools 15, gold 160, gems 20'
				}
			]
		},
		{
			id: 'mage-tower',
			name: 'Mage Tower',
			type: 'Building',
			tier: 2,
			description: 'Arcane research, spell upgrades, magical experiments.',
			level: 1,
			bonuses: 'spell power +3%, research speed +5%',
			actions: ['Study Magic', 'Upgrade Spell', 'Conduct Experiment'],
			profession: ['Mage Knowledgekeeper', 'Apprentice'],
			taskReward: 'runes, defense, battle mages',
			requirements: 'stone 25, cosmic ore - minor 10, gems 15',
			upgrades: [
				{ tier: 'Rebuilt', requirements: 'stone 20, gold 30' },
				{ tier: 'Established', requirements: 'stone 30, wood 20, gold 50' },
				{ tier: 'Improved', requirements: 'stone 40, wood 40, metal bars 10, gold 100' },
				{ tier: 'Advanced', requirements: 'stone 50, wood 60, metal bars 25, tools 15, gold 120' },
				{
					tier: 'Exquisite',
					requirements: 'stone 60, wood 80, metal bars 25, enchanted tools 15, gold 160, gems 20'
				}
			]
		},
		{
			id: 'watchtower',
			name: 'Watchtower',
			type: 'Building',
			tier: 2,
			description: 'Scout vantage point; increases detection radius and early warnings.',
			level: 1,
			bonuses: 'detection radius +10%, alert speed +5%',
			actions: ['Keep Watch', 'Signal Alarm', 'Scout Perimeter'],
			profession: ['Lookout'],
			taskReward: 'defense',
			requirements: 'wood 20, stone 10, troops 5',
			upgrades: [
				{ tier: 'Rebuilt', requirements: 'stone 20, gold 30' },
				{ tier: 'Established', requirements: 'stone 30, wood 20, gold 50' },
				{ tier: 'Improved', requirements: 'stone 40, wood 40, metal bars 10, gold 100' },
				{ tier: 'Advanced', requirements: 'stone 50, wood 60, metal bars 25, tools 15, gold 120' },
				{
					tier: 'Exquisite',
					requirements: 'stone 60, wood 80, metal bars 25, enchanted tools 15, gold 160, gems 20'
				}
			]
		},
		{
			id: 'tavern-mead-hall',
			name: 'Tavern / Mead Hall',
			type: 'Building',
			tier: 3,
			description: 'renown, social events, rumors, and recruitable Profession.',
			level: 1,
			bonuses: 'renown +10%, villager XP +5%',
			actions: ['Host Feast', 'Gather Rumors', 'Recruit Adventurer'],
			profession: ['Innkeeper', 'Bard', 'bard apprentice'],
			taskReward: 'renown, happiness, followers',
			requirements: 'wood 20, beer 10, followers 6, tools 5',
			upgrades: [
				{ tier: 'Rebuilt', requirements: 'stone 20, gold 30' },
				{ tier: 'Established', requirements: 'stone 30, wood 20, gold 50' },
				{
					tier: 'Improved',
					requirements: 'stone 40, wood 40, metal bars 10, gold 100, Unlock bard apprentice'
				},
				{ tier: 'Advanced', requirements: 'stone 50, wood 60, metal bars 25, tools 15, gold 120' },
				{
					tier: 'Exquisite',
					requirements: 'stone 60, wood 80, metal bars 25, enchanted tools 15, gold 160, gems 20'
				}
			]
		},
		{
			id: 'gardens-courtyard',
			name: 'Gardens / Courtyard',
			type: 'Building',
			tier: 3,
			description: 'Beauty, meditation, and herbal gathering.',
			level: 1,
			bonuses: 'renown +5%, herb yield +3%',
			actions: ['Meditate', 'Gather Herbs', 'Tend Garden'],
			profession: ['Groundskeeper'],
			taskReward: 'crafting regents, herbs',
			requirements: 'wood 10, water 10, gold 40, tools 10',
			upgrades: [
				{ tier: 'Rebuilt', requirements: 'stone 20, gold 30' },
				{ tier: 'Established', requirements: 'stone 30, wood 20, gold 50' },
				{ tier: 'Improved', requirements: 'stone 40, wood 40, metal bars 10, gold 100' },
				{ tier: 'Advanced', requirements: 'stone 50, wood 60, metal bars 25, tools 15, gold 120' },
				{
					tier: 'Exquisite',
					requirements: 'stone 60, wood 80, metal bars 25, enchanted tools 15, gold 160, gems 20'
				}
			]
		},
		{
			id: 'school-library',
			name: 'School / Library',
			type: 'Building',
			tier: 3,
			description: 'Boosts learning, skills, and research.',
			level: 1,
			bonuses: 'research speed +5%, renown +3%',
			actions: ['Study', 'Research', 'Teach Follower'],
			profession: ['Scholar', 'Librarian'],
			taskReward: 'education',
			requirements: 'paper 10, wood 15, stone 10, tools 5, gold 40',
			upgrades: [
				{ tier: 'Rebuilt', requirements: 'stone 20, gold 30' },
				{ tier: 'Established', requirements: 'stone 30, wood 20, gold 50' },
				{ tier: 'Improved', requirements: 'stone 40, wood 40, metal bars 10, gold 100' },
				{ tier: 'Advanced', requirements: 'stone 50, wood 60, metal bars 25, tools 15, gold 120' },
				{
					tier: 'Exquisite',
					requirements: 'stone 60, wood 80, metal bars 25, enchanted tools 15, gold 160, gems 20'
				}
			]
		},
		{
			id: 'alchemy-lab',
			name: 'Alchemy Lab',
			type: 'Building',
			tier: 3,
			description: 'Potions, reagents, bombs, and magical brews.',
			level: 1,
			bonuses: 'potion potency +5%, reagent yield +3%',
			actions: ['Brew Potion', 'Distill Reagents', 'Craft Bomb'],
			profession: ['Alchemist'],
			taskReward: 'potions, bombs',
			requirements: 'herbs 10, glass 5, stone 10, wood 20, tools 5, gold 40',
			upgrades: [
				{ tier: 'Rebuilt', requirements: 'stone 20, gold 30' },
				{ tier: 'Established', requirements: 'stone 30, wood 20, gold 50' },
				{ tier: 'Improved', requirements: 'stone 40, wood 40, metal bars 10, gold 100' },
				{ tier: 'Advanced', requirements: 'stone 50, wood 60, metal bars 25, tools 15, gold 120' },
				{
					tier: 'Exquisite',
					requirements: 'stone 60, wood 80, metal bars 25, enchanted tools 15, gold 160, gems 20'
				}
			]
		},
		{
			id: 'runeforge',
			name: 'Runeforge',
			type: 'Building',
			tier: 3,
			description: 'Enchantments, sigils, and magical crafting.',
			level: 1,
			bonuses: 'enchant potency +5%, rune potency +3%',
			actions: ['Carve Rune', 'Enchant Gear', 'Bind Sigil'],
			profession: ['Runecrafter'],
			taskReward: 'Runes, enchanted gear',
			requirements: 'stone 20, runes 5, cosmic ore - major 10, metal bars 5, gems 5',
			upgrades: [
				{ tier: 'Rebuilt', requirements: 'stone 20, gold 30' },
				{ tier: 'Established', requirements: 'stone 30, wood 20, gold 50' },
				{ tier: 'Improved', requirements: 'stone 40, wood 40, metal bars 10, gold 100' },
				{ tier: 'Advanced', requirements: 'stone 50, wood 60, metal bars 25, tools 15, gold 120' },
				{
					tier: 'Exquisite',
					requirements: 'stone 60, wood 80, metal bars 25, enchanted tools 15, gold 160, gems 20'
				}
			]
		},
		{
			id: 'portal-chamber',
			name: 'Portal Chamber',
			type: 'Building',
			tier: 3,
			description: 'Fast travel, expeditions, and special missions.',
			level: 1,
			bonuses: 'travel time –80%, portal stability +5%',
			actions: ['Open Portal', 'Calibrate Gate', 'Send Expedition'],
			profession: ['Gatekeeper'],
			taskReward: '',
			requirements: 'stone 30, wood 20, cosmic ore - major 10, gold 40',
			upgrades: [
				{ tier: 'Rebuilt', requirements: 'stone 20, gold 30' },
				{ tier: 'Established', requirements: 'stone 30, wood 20, gold 50' },
				{ tier: 'Improved', requirements: 'stone 40, wood 40, metal bars 10, gold 100' },
				{ tier: 'Advanced', requirements: 'stone 50, wood 60, metal bars 25, tools 15, gold 120' },
				{
					tier: 'Exquisite',
					requirements: 'stone 60, wood 80, metal bars 25, enchanted tools 15, gold 160, gems 20'
				}
			]
		},
		{
			id: 'crystal-conservatory',
			name: 'Crystal Conservatory',
			type: 'Building',
			tier: 3,
			description: 'Magical plants and mana‑infused flora.',
			level: 1,
			bonuses: 'herb yield +5%, mana plant growth +8%',
			actions: ['Cultivate Crystals', 'Harvest Mana Plants', 'Study Growth'],
			profession: ['Botanist', 'Herbalist', 'Scholar'],
			taskReward: 'magical regents, runes, gems',
			requirements: 'glass 10, stone 10, runes 5, cosmic ore - major 10, gems 10',
			upgrades: [
				{ tier: 'Rebuilt', requirements: 'stone 20, gold 30' },
				{ tier: 'Established', requirements: 'stone 30, wood 20, gold 50' },
				{ tier: 'Improved', requirements: 'stone 40, wood 40, metal bars 10, gold 100' },
				{ tier: 'Advanced', requirements: 'stone 50, wood 60, metal bars 25, tools 15, gold 120' },
				{
					tier: 'Exquisite',
					requirements: 'stone 60, wood 80, metal bars 25, enchanted tools 15, gold 160, gems 20'
				}
			]
		}
	];

	const tiers = Array.from(new Set(buildings.map((b) => b.tier))).sort();

	function scrollToSection(id: string) {
		const el = document.getElementById(id);
		if (el) {
			el.scrollIntoView({ behavior: 'smooth', block: 'start' });
			el.focus();
		}
	}
</script>

<aside class="sidebar">
	<h2>Inner City Glossary</h2>

	{#each tiers as t (t)}
		<h3>Tier {t}</h3>
		<ul>
			{#each buildings.filter((b) => b.tier === t) as b (b.id)}
				<li>
					<button on:click={() => scrollToSection(b.id)}>
						{b.name}
					</button>
				</li>
			{/each}
		</ul>
	{/each}
</aside>

<main>
	<div class="entry">
		<h1>INNER CITY 🌟</h1>
		<p>The inner city grows with the user, boosting daily tasks and renown.</p>
	</div>
	<div class="grid-Main">
		{#each tiers as t (t)}
			<h2>Tier {t}</h2>

			{#each buildings.filter((b) => b.tier === t) as b (b.id)}
				<section id={b.id} class="card-SideSkew" tabindex="-1" aria-labelledby={`${b.id}-title`}>
					<h3 id={`${b.id}-title`}>{b.name}</h3>

					<p><strong>Type:</strong> {b.type}</p>
					<p><strong>Description:</strong> {b.description}</p>
					<p><strong>Level:</strong> {b.level}</p>
					<p><strong>Bonuses:</strong> {b.bonuses}</p>
					<p><strong>Actions:</strong> {b.actions.join(', ')}</p>
					<p><strong>Profession:</strong> {b.profession.join(', ')}</p>
					<p><strong>Task‑Reward:</strong> {b.taskReward}</p>
					<p><strong>Requirements:</strong> {b.requirements}</p>

					<h4>Upgrade Requirements</h4>
					<ul>
						{#each b.upgrades as u (u.tier)}
							<li>{u.tier} – {u.requirements}</li>
						{/each}
					</ul>
				</section>
			{/each}
		{/each}
	</div>
</main>

<style>
	.entry {
		margin-left: 15vw;
	}

	.sidebar {
		position: sticky;
		top: 1rem;
		align-self: start;
		padding-right: 1rem;
		z-index: 666;
		width: fit-content;
		border: var(--border);
	}

	.sidebar button {
		background: none;
		border: none;
		color: var(--accent-2);
		text-align: left;
		font-size: 1rem;
		cursor: pointer;
		padding: 0.25rem;
	}

	.sidebar button:hover,
	.sidebar button:focus {
		text-decoration: underline;
		outline: 2px solid #0055aa;
	}

	h2,
	h3,
	p {
		margin: 0.5rem 0;
		padding: 0;
		width: fit-content;
	}

	h3 {
		border-bottom: var(--bord);
	}
</style>
