<script lang="ts">
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
		apprentice: boolean;
		timeSpentMultiplier: boolean;
		taskReward: string;
		requirements: string;
		upgrades: { tier: string; requirements: string }[];
	};

	const buildings: Building[] = [
		{
			id: 'city-proper',
			name: 'City Proper',
			type: 'Community',
			tier: 1,
			description: "The player's main building, control room, and administrative center.",
			level: 1,
			bonuses: 'renown gain +5%',
			actions: ['Hold Court', 'Assign Followers', 'Review Reports'],
			profession: ['Advisor'],
			apprentice: false,
			timeSpentMultiplier: false,
			taskReward: 'Renown, population',
			requirements: 'stone 5, wood 5, gold 10',
			upgrades: [
				{ tier: 'Rebuilt', requirements: 'followers 5' },
				{ tier: 'Established', requirements: 'followers 15' },
				{ tier: 'Improved', requirements: 'followers 25' },
				{ tier: 'Advanced', requirements: 'followers 35' },
				{ tier: 'Exquisite', requirements: 'followers 45' }
			]
		},

		{
			id: 'council-hall',
			name: 'Council Hall',
			type: 'Community',
			tier: 1,
			description: 'Governance decisions, diplomacy, and lawmaking.',
			level: 1,
			bonuses: 'diplomacy XP +5%, renown gain +3%',
			actions: ['Hold Council', 'Draft Decrees', 'Meet Envoys'],
			profession: ['Councilor'],
			apprentice: true,
			timeSpentMultiplier: false,
			taskReward: 'Renown, Population',
			requirements: 'stone 15, wood 10, nano pack 5',
			upgrades: [
				{ tier: 'Rebuilt', requirements: 'followers 5' },
				{ tier: 'Established', requirements: 'followers 15' },
				{ tier: 'Improved', requirements: 'followers 25' },
				{ tier: 'Advanced', requirements: 'followers 35' },
				{ tier: 'Exquisite', requirements: 'followers 45' }
			]
		},

		{
			id: 'school-library',
			name: 'School / Library',
			type: 'District',
			tier: 1,
			description: 'Boosts learning, skills, and research.',
			level: 1,
			bonuses: 'research speed +5%, renown +3%',
			actions: ['Study', 'Research', 'Teach Follower'],
			profession: ['Scholar', 'Librarian'],
			apprentice: true,
			timeSpentMultiplier: false,
			taskReward: 'education',
			requirements: 'nano pack 10, wood 15, stone 10',
			upgrades: [
				{ tier: 'Rebuilt', requirements: 'followers 5' },
				{ tier: 'Established', requirements: 'followers 15' },
				{ tier: 'Improved', requirements: 'followers 25' },
				{ tier: 'Advanced', requirements: 'followers 35' },
				{ tier: 'Exquisite', requirements: 'followers 45' }
			]
		},

		{
			id: 'market',
			name: 'Market',
			type: 'District',
			tier: 1,
			description: 'Hub for buying, selling, and trading goods.',
			level: 1,
			bonuses: 'trade prices +2% better',
			actions: ['Buy', 'Sell', 'Trade', 'Commission Order'],
			profession: ['Merchant', 'Trader'],
			apprentice: true,
			timeSpentMultiplier: false,
			taskReward: 'gold, package of random materials',
			requirements: 'gold 50, stone 10, wood 10',
			upgrades: [
				{ tier: 'Rebuilt', requirements: 'gold 15' },
				{ tier: 'Established', requirements: 'gold 35' },
				{ tier: 'Improved', requirements: 'gold 55' },
				{ tier: 'Advanced', requirements: 'gold 75' },
				{ tier: 'Exquisite', requirements: 'gold 100' }
			]
		},

		{
			id: 'nano-fountain',
			name: 'Nano Fountain',
			type: 'District',
			tier: 1,
			description: 'Nano robots source; boosts health and reduces sickness events.',
			level: 1,
			bonuses: 'health recovery +5%',
			actions: ['Draw nanos', 'Purify Sickness'],
			profession: ['Nanokeeper'],
			apprentice: true,
			timeSpentMultiplier: false,
			taskReward: 'nanites, package of random materials',
			requirements: 'stone 10, wood 10, metal ore 5',
			upgrades: [
				{ tier: 'Rebuilt', requirements: 'nano packs 10' },
				{ tier: 'Established', requirements: 'nano packs 20' },
				{ tier: 'Improved', requirements: 'nano packs 30' },
				{ tier: 'Advanced', requirements: 'nano packs 40' },
				{ tier: 'Exquisite', requirements: 'nano packs 50' }
			]
		},
		{
			id: 'planet-postal',
			name: 'Planet Postal',
			type: 'District',
			tier: 2,
			description: 'Dispatch travelers and long‑distance communication.',
			level: 1,
			bonuses: 'communication speed +10%, villager XP +5%',
			actions: ['Send/Receive Message', 'Assign Courier'],
			profession: ['Postmaster'],
			apprentice: true,
			timeSpentMultiplier: false,
			taskReward: 'communication speed, shipment of goods',
			requirements: 'wood 10, stone 5, gold 10',
			upgrades: [
				{ tier: 'Rebuilt', requirements: 'nano packs 10' },
				{ tier: 'Established', requirements: 'nano packs 20' },
				{ tier: 'Improved', requirements: 'nano packs 30' },
				{ tier: 'Advanced', requirements: 'nano packs 40' },
				{ tier: 'Exquisite', requirements: 'nano packs 50' }
			]
		},

		{
			id: 'strategy-hall',
			name: 'Strategy Hall',
			type: 'Community',
			tier: 2,
			description: 'War planning, maps, scouting intel, follower assignments.',
			level: 1,
			bonuses: 'scouting efficiency +5%, mission planning +5%',
			actions: ['Review Maps', 'Assign Patrols', 'Plan Strategy'],
			profession: ['Strategist'],
			apprentice: true,
			timeSpentMultiplier: true,
			taskReward: 'Defense, package of random materials',
			requirements: 'wood 15, stone 10, paper 10, followers 10',
			upgrades: [
				{ tier: 'Rebuilt', requirements: 'followers 5' },
				{ tier: 'Established', requirements: 'followers 15' },
				{ tier: 'Improved', requirements: 'followers 25' },
				{ tier: 'Advanced', requirements: 'followers 35' },
				{ tier: 'Exquisite', requirements: 'followers 45' }
			]
		},

		{
			id: 'chapel-shrine',
			name: 'Chapel / Shrine',
			type: 'Community',
			tier: 2,
			description: 'Blessings, community, and divine quests.',
			level: 1,
			bonuses: 'healing +5%, blessing duration +5%',
			actions: ['Pray', 'Receive Blessing', 'Perform Ritual'],
			profession: ['Devotee'],
			apprentice: true,
			timeSpentMultiplier: true,
			taskReward: 'happiness, healers',
			requirements: 'stone 20, cosmic ore - minor 5, rune-cloth 5',
			upgrades: [
				{ tier: 'Rebuilt', requirements: 'followers 5' },
				{ tier: 'Established', requirements: 'followers 15' },
				{ tier: 'Improved', requirements: 'followers 25' },
				{ tier: 'Advanced', requirements: 'followers 35' },
				{ tier: 'Exquisite', requirements: 'followers 45' }
			]
		},

		{
			id: 'clothier',
			name: 'Clothier',
			type: 'District',
			tier: 2,
			description: 'Produces clothing, robes, uniforms, and banners.',
			level: 1,
			bonuses: 'crafting quality +3%, villager XP +5%',
			actions: ['Manufacture Clothing', 'Craft Uniforms', 'Design Banner'],
			profession: ['Tailor'],
			apprentice: true,
			timeSpentMultiplier: false,
			taskReward: 'cloth, nano-cloth, light armor',
			requirements: 'nanites 15, wood 10, stone 10',
			upgrades: [
				{ tier: 'Rebuilt', requirements: 'nano-cloth 10' },
				{ tier: 'Established', requirements: 'nano-cloth 20' },
				{ tier: 'Improved', requirements: 'nano-cloth 30' },
				{ tier: 'Advanced', requirements: 'nano-cloth 40' },
				{ tier: 'Exquisite', requirements: 'nano-cloth 50' }
			]
		},

		{
			id: 'tannery',
			name: 'Tannery',
			type: 'District',
			tier: 2,
			description: 'Leatherworking, hides, and medium armor crafting.',
			level: 1,
			bonuses: 'leather yield +5%, leather production +3%',
			actions: ['Cure Hides', 'Craft Leather Armor', 'Process Materials'],
			profession: ['Tanner'],
			apprentice: true,
			timeSpentMultiplier: false,
			taskReward: 'leather, medium armor',
			requirements: 'hides 10, wood 10, metal bars 5',
			upgrades: [
				{ tier: 'Rebuilt', requirements: 'nano-leather 10' },
				{ tier: 'Established', requirements: 'nano-leather 20' },
				{ tier: 'Improved', requirements: 'nano-leather 30' },
				{ tier: 'Advanced', requirements: 'nano-leather 40' },
				{ tier: 'Exquisite', requirements: 'nano-leather 50' }
			]
		},

		{
			id: 'smith',
			name: 'Smith',
			type: 'District',
			tier: 2,
			description:
				'Forge and repair weapons and metal armor; unlocks crafting bonuses. Crafts metal bars.',
			level: 1,
			bonuses: 'crafting quality +5%, repair cost –10%',
			actions: ['Forge Item', 'Repair Gear', 'Upgrade Gear'],
			profession: ['Blacksmith'],
			apprentice: true,
			timeSpentMultiplier: false,
			taskReward: 'weapons, metal armor, metal bars, glass',
			requirements: 'metal ore 5, stone 5, wood 10, water 5',
			upgrades: [
				{ tier: 'Rebuilt', requirements: 'metal bars 10' },
				{ tier: 'Established', requirements: 'metal bars 20' },
				{ tier: 'Improved', requirements: 'metal bars 30' },
				{ tier: 'Advanced', requirements: 'metal bars 40' },
				{ tier: 'Exquisite', requirements: 'metal bars 50' }
			]
		},

		{
			id: 'mechanic',
			name: 'Mechanic',
			type: 'District',
			tier: 2,
			description: 'Houses ships/mechs and improves travel.',
			level: 1,
			bonuses: 'travel speed +5%, ship/mech efficiency +3%',
			actions: ['Ship/Mech upgrades', 'Repair found tech'],
			profession: ['Technician'],
			apprentice: true,
			timeSpentMultiplier: false,
			taskReward: 'mechs, ships',
			requirements: 'wood 20, stone 10, parts 10',
			upgrades: [
				{ tier: 'Rebuilt', requirements: 'parts 10' },
				{ tier: 'Established', requirements: 'parts 20' },
				{ tier: 'Improved', requirements: 'parts 30' },
				{ tier: 'Advanced', requirements: 'parts 40' },
				{ tier: 'Exquisite', requirements: 'parts 50' }
			]
		},

		{
			id: 'armory',
			name: 'Armory',
			type: 'District',
			tier: 2,
			description: 'Stores weapons and armor; improves readiness and equipment quality.',
			level: 1,
			bonuses: 'equipment durability +5%, defense +5%',
			actions: ['Store Gear', 'Issue Equipment', 'Inspect Inventory'],
			profession: ['Quartermaster'],
			apprentice: false,
			timeSpentMultiplier: false,
			taskReward: 'defense',
			requirements: 'metal ore 10, wood 15, weapons 5, armor 5',
			upgrades: [
				{ tier: 'Rebuilt', requirements: 'weapons 10, armor 10' },
				{ tier: 'Established', requirements: 'weapons 20, armor 20' },
				{ tier: 'Improved', requirements: 'weapons 30, armor 30' },
				{ tier: 'Advanced', requirements: 'weapons 40, armor 40' },
				{ tier: 'Exquisite', requirements: 'weapons 50, armor 50' }
			]
		},

		{
			id: 'barracks',
			name: 'Barracks',
			type: 'District',
			tier: 2,
			description: 'Housing for guards, boosts defense and patrol efficiency.',
			level: 1,
			bonuses: 'guard capacity +2, troops efficiency +5%',
			actions: ['Assign Guards', 'Train Recruits', 'Inspect Barracks'],
			profession: ['Captain of the Guard'],
			apprentice: true,
			timeSpentMultiplier: true,
			taskReward: 'Troops, package of random materials',
			requirements: 'wood 20, stone 20, villagers 10',
			upgrades: [
				{ tier: 'Rebuilt', requirements: 'troops 5' },
				{ tier: 'Established', requirements: 'troops 15' },
				{ tier: 'Improved', requirements: 'troops 25' },
				{ tier: 'Advanced', requirements: 'troops 35' },
				{ tier: 'Exquisite', requirements: 'troops 45' }
			]
		},

		{
			id: 'nanomancer-tower',
			name: 'Nanomancer Tower',
			type: 'Community',
			tier: 2,
			description: 'Spell upgrades, Empty Energy research, Empty Energy experiments.',
			level: 1,
			bonuses: 'spell power +3%, research speed +5%',
			actions: ['Study Magic', 'Upgrade Spell', 'Conduct Experiment'],
			profession: ['Nano Knowledgekeeper'],
			apprentice: true,
			timeSpentMultiplier: true,
			taskReward: 'runes, defense, battle mages, package of random materials',
			requirements: 'stone 25, cosmic ore - minor 10, gems 15',
			upgrades: [
				{ tier: 'Rebuilt', requirements: 'nano packs 10' },
				{ tier: 'Established', requirements: 'nano packs 20' },
				{ tier: 'Improved', requirements: 'nano packs 30' },
				{ tier: 'Advanced', requirements: 'nano packs 40' },
				{ tier: 'Exquisite', requirements: 'nano packs 50' }
			]
		},

		{
			id: 'watchtower-orbital',
			name: 'Watchtower Orbital',
			type: 'Community',
			tier: 2,
			description: 'Orbital planet/system defense; increases detection radius and early warnings.',
			level: 1,
			bonuses: 'detection radius +10%, alert speed +5%',
			actions: ['Satellite Defense', 'Signal Alarm', 'Scout Perimeter'],
			profession: ['Defense analyst'],
			apprentice: false,
			timeSpentMultiplier: false,
			taskReward: 'defense',
			requirements: 'wood 20, stone 10, troops 5',
			upgrades: [
				{ tier: 'Rebuilt', requirements: 'troops 10' },
				{ tier: 'Established', requirements: 'troops 20' },
				{ tier: 'Improved', requirements: 'troops 30' },
				{ tier: 'Advanced', requirements: 'troops 40' },
				{ tier: 'Exquisite', requirements: 'troops 50' }
			]
		},
		{
			id: 'bar',
			name: 'Bar',
			type: 'District',
			tier: 3,
			description: 'Renown, social events, rumors, and recruitable Profession.',
			level: 1,
			bonuses: 'renown +10%, follower XP +5%',
			actions: ['Host Feast', 'Gather Rumors', 'Recruit Adventurer'],
			profession: ['Innkeeper', 'Bard'],
			apprentice: true,
			timeSpentMultiplier: true,
			taskReward: 'renown, happiness, followers, package of random materials',
			requirements: 'wood 20, beer 10, followers 5, tools 5',
			upgrades: [
				{ tier: 'Rebuilt', requirements: 'followers 5' },
				{ tier: 'Established', requirements: 'followers 15' },
				{ tier: 'Improved', requirements: 'followers 25' },
				{ tier: 'Advanced', requirements: 'followers 35' },
				{ tier: 'Exquisite', requirements: 'followers 45' }
			]
		},

		{
			id: 'gardens',
			name: 'Gardens',
			type: 'District',
			tier: 3,
			description: 'Beauty, meditation, and herbal gathering.',
			level: 1,
			bonuses: 'renown +5%, herb yield +3%',
			actions: ['Meditate', 'Gather Herbs', 'Tend Garden'],
			profession: ['Groundskeeper'],
			apprentice: false,
			timeSpentMultiplier: true,
			taskReward: 'crafting regents, herbs, package of random materials',
			requirements: 'wood 10, water 10, gold 40, tools 10',
			upgrades: [
				{ tier: 'Rebuilt', requirements: 'followers 5' },
				{ tier: 'Established', requirements: 'followers 15' },
				{ tier: 'Improved', requirements: 'followers 25' },
				{ tier: 'Advanced', requirements: 'followers 35' },
				{ tier: 'Exquisite', requirements: 'followers 45' }
			]
		},

		{
			id: 'nanoforge',
			name: 'Nanoforge',
			type: 'District',
			tier: 3,
			description: 'Nano enchants for self and gear.',
			level: 1,
			bonuses: 'enchant potency +5%, Nano potency +3%',
			actions: ['Enchant Self & Gear', 'Bind energy'],
			profession: ['Nanocrafter'],
			apprentice: true,
			timeSpentMultiplier: false,
			taskReward: 'Nanos enchantments',
			requirements: 'stone 20, Nanos 5, cosmic ore - major 10, metal bars 5, gems 5',
			upgrades: [
				{ tier: 'Rebuilt', requirements: 'nano packs 10' },
				{ tier: 'Established', requirements: 'nano packs 20' },
				{ tier: 'Improved', requirements: 'nano packs 30' },
				{ tier: 'Advanced', requirements: 'nano packs 40' },
				{ tier: 'Exquisite', requirements: 'nano packs 50' }
			]
		},

		{
			id: 'cranium-conservatory',
			name: 'Cranium Conservatory',
			type: 'District',
			tier: 3,
			description: 'Brain implants to upgrade tech self.',
			level: 1,
			bonuses: 'implant potency +5%, Nano potency +3%',
			actions: ['Brain implant management'],
			profession: ['Braincrafter'],
			apprentice: true,
			timeSpentMultiplier: false,
			taskReward: 'Implants, brain upgrades',
			requirements: 'stone 20, Nanos 5, cosmic ore - major 10, metal bars 5, gems 5',
			upgrades: [
				{ tier: 'Rebuilt', requirements: 'nano packs 10' },
				{ tier: 'Established', requirements: 'nano packs 20' },
				{ tier: 'Improved', requirements: 'nano packs 30' },
				{ tier: 'Advanced', requirements: 'nano packs 40' },
				{ tier: 'Exquisite', requirements: 'nano packs 50' }
			]
		},

		{
			id: 'boundaries-lab',
			name: 'Boundaries Lab',
			type: 'District',
			tier: 3,
			description: 'System and energy research.',
			level: 1,
			bonuses: 'system research +5%, energy production +3%',
			actions: ['Study Energy', 'Conduct system research'],
			profession: ['Wild space scientist'],
			apprentice: true,
			timeSpentMultiplier: true,
			taskReward: 'knowledge, technology, package of random materials',
			requirements: 'glass 5, stone 10, wood 20, tools 5, gold 40',
			upgrades: [
				{ tier: 'Rebuilt', requirements: 'followers 5' },
				{ tier: 'Established', requirements: 'followers 15' },
				{ tier: 'Improved', requirements: 'followers 25' },
				{ tier: 'Advanced', requirements: 'followers 35' },
				{ tier: 'Exquisite', requirements: 'followers 45' }
			]
		},

		{
			id: 'portal-chamber',
			name: 'Portal Chamber',
			type: 'Community',
			tier: 3,
			description: 'Fast travel, expeditions, and special missions.',
			level: 1,
			bonuses: 'travel time –80%, portal stability +5%',
			actions: ['Open Portal', 'Calibrate Gate', 'Send Expedition'],
			profession: ['Gatekeeper'],
			apprentice: true,
			timeSpentMultiplier: true,
			taskReward: 'diplomacy, technology, package of randommaterials',
			requirements: 'stone 30, wood 20, cosmic ore - major 10, gold 40',
			upgrades: [
				{ tier: 'Rebuilt', requirements: 'nano packs 10' },
				{ tier: 'Established', requirements: 'nano packs 20' },
				{ tier: 'Improved', requirements: 'nano packs 30' },
				{ tier: 'Advanced', requirements: 'nano packs 40' },
				{ tier: 'Exquisite', requirements: 'nano packs 50' }
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

<div class="layout">
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

	<div class="content">
		<div class="entry">
			<h1>INNER CITY</h1>
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

						<p><strong>Apprentice:</strong> {b.apprentice ? 'Yes' : 'No'}</p>
						<p><strong>Time Spent Multiplier:</strong> {b.timeSpentMultiplier ? 'Yes' : 'No'}</p>

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
	</div>
</div>

<style>
	.layout {
		display: flex;
		align-items: flex-start;
	}

	/* Sidebar stays fixed in place but no longer pushes content down */
	.sidebar {
		position: sticky;
		top: 1rem;
		flex-shrink: 0;
		width: 15vw; /* or a fixed px width */
		border: var(--border);
		padding: 1rem;
	}

	/* Content column */
	.content {
		flex: 1;
		min-width: 0;
	}

	/* Remove the old margin-left hack */
	.entry {
		margin-left: 0;
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
