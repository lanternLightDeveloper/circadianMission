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
			id: 'farms',
			name: 'Farms',
			type: 'District',
			tier: 1,
			description: 'Produces crops; boosts gathering and cooking tasks.',
			level: 1,
			bonuses: 'gathering yield +5%, food storage +3%',
			actions: ['Harvest Crops', 'Plant Seeds', 'Tend Fields'],
			profession: ['Farmer'],
			apprentice: true,
			timeSpentMultiplier: true,
			taskReward: 'crops, happiness, pickled vegetables, package of random materials',
			requirements: 'wood 15, fiber 10, water 10',
			upgrades: [
				{ tier: 'Rebuilt', requirements: 'followers 5' },
				{ tier: 'Established', requirements: 'followers 15' },
				{ tier: 'Improved', requirements: 'followers 25' },
				{ tier: 'Advanced', requirements: 'followers 35' },
				{ tier: 'Exquisite', requirements: 'followers 45' }
			]
		},

		{
			id: 'dairy',
			name: 'Dairy',
			type: 'District',
			tier: 1,
			description: 'Produces milk and cheese; boosts food crafting and animal care.',
			level: 1,
			bonuses: 'animal bonds +4%, food production +5%',
			actions: ['Milk Animals', 'Process Cheese', 'Clean Pens'],
			profession: ['Dairy Keeper', 'Farmhand'],
			apprentice: true,
			timeSpentMultiplier: true,
			taskReward: 'milk, cheese, horses, meat, villagers, package of random materials',
			requirements: 'wood 10, stone 5, gold 5',
			upgrades: [
				{ tier: 'Rebuilt', requirements: 'followers 5' },
				{ tier: 'Established', requirements: 'followers 15' },
				{ tier: 'Improved', requirements: 'followers 25' },
				{ tier: 'Advanced', requirements: 'followers 35' },
				{ tier: 'Exquisite', requirements: 'followers 45' }
			]
		},

		{
			id: 'hunt-fish-outpost',
			name: 'Hunt / Fish Outpost',
			type: 'Community',
			tier: 1,
			description: 'Wilderness outpost for hunting and fishing tasks.',
			level: 1,
			bonuses: 'wild meat gathering +8%, fish gathering +5%',
			actions: ['Hunt Game', 'Set Traps', 'Fish Waters'],
			profession: ['Hunter', 'Fisher'],
			apprentice: true,
			timeSpentMultiplier: true,
			taskReward: 'fish, wild meat, happiness, water, package of random materials',
			requirements: 'wood 10, rope 5, stone 5',
			upgrades: [
				{ tier: 'Rebuilt', requirements: 'followers 5' },
				{ tier: 'Established', requirements: 'followers 15' },
				{ tier: 'Improved', requirements: 'followers 25' },
				{ tier: 'Advanced', requirements: 'followers 35' },
				{ tier: 'Exquisite', requirements: 'followers 45' }
			]
		},

		{
			id: 'lumber-yard',
			name: 'Lumber Yard',
			type: 'District',
			tier: 1,
			description: 'Woodcutting, hauling logs, clearing fallen trees.',
			level: 1,
			bonuses: 'wood yield +8%, happiness +3%',
			actions: ['Chop Wood', 'Haul Logs', 'Clear Debris'],
			profession: ['Lumberjack'],
			apprentice: true,
			timeSpentMultiplier: true,
			taskReward: 'wood, lumber, package of random materials',
			requirements: 'wood 10, stone 15',
			upgrades: [
				{ tier: 'Rebuilt', requirements: 'nano packs 10' },
				{ tier: 'Established', requirements: 'nano packs 20' },
				{ tier: 'Improved', requirements: 'nano packs 30' },
				{ tier: 'Advanced', requirements: 'nano packs 40' },
				{ tier: 'Exquisite', requirements: 'nano packs 50' }
			]
		},

		{
			id: 'asteroid-mining-outpost',
			name: 'Asteroid Mining Outpost',
			type: 'District',
			tier: 1,
			description: 'Ore extraction, carting materials, safety inspections.',
			level: 1,
			bonuses: 'stone yield +8%, ore yield +3%',
			actions: ['Extract Stone', 'Transport Bars'],
			profession: ['Quarryman'],
			apprentice: true,
			timeSpentMultiplier: true,
			taskReward: 'metal bars, happiness, package of random materials',
			requirements: 'stone 10, woods 5',
			upgrades: [
				{ tier: 'Rebuilt', requirements: 'nano packs 10' },
				{ tier: 'Established', requirements: 'nano packs 20' },
				{ tier: 'Improved', requirements: 'nano packs 30' },
				{ tier: 'Advanced', requirements: 'nano packs 40' },
				{ tier: 'Exquisite', requirements: 'nano packs 50' }
			]
		},

		{
			id: 'warehouses',
			name: 'Warehouses',
			type: 'District',
			tier: 1,
			description: 'Food storage; affects stability, famine prevention, and follower defense.',
			level: 1,
			bonuses: 'food preservation +5%, defense +3%',
			actions: ['Store Grain', 'Inspect Supplies', 'Distribute Rations'],
			profession: ['Warehouse Keeper'],
			apprentice: false,
			timeSpentMultiplier: false,
			taskReward: 'grain, happiness, villagers, package of random materials',
			requirements: 'wood 15, stone 10',
			upgrades: [
				{ tier: 'Rebuilt', requirements: 'nano packs 10' },
				{ tier: 'Established', requirements: 'nano packs 20' },
				{ tier: 'Improved', requirements: 'nano packs 30' },
				{ tier: 'Advanced', requirements: 'nano packs 40' },
				{ tier: 'Exquisite', requirements: 'nano packs 50' }
			]
		},

		{
			id: 'starship-depot',
			name: 'Starship Depot',
			type: 'Community',
			tier: 1,
			description: 'Caravans, deliveries, escorting merchants.',
			level: 1,
			bonuses: 'delivery speed +5%, trade rewards +3%',
			actions: ['Load Starship', 'Dispatch Caravan', 'Escort Merchant'],
			profession: ['Ship Leader'],
			apprentice: false,
			timeSpentMultiplier: false,
			taskReward: 'gold, renown, villagers, package of random materials',
			requirements: 'wood 15, rope 10, stone 10',
			upgrades: [
				{ tier: 'Rebuilt', requirements: 'nano packs 10' },
				{ tier: 'Established', requirements: 'nano packs 20' },
				{ tier: 'Improved', requirements: 'nano packs 30' },
				{ tier: 'Advanced', requirements: 'nano packs 40' },
				{ tier: 'Exquisite', requirements: 'nano packs 50' }
			]
		},

		{
			id: 'orchards',
			name: 'Orchards',
			type: 'District',
			tier: 2,
			description: 'Fruit picking, pruning, and seasonal harvest quests.',
			level: 1,
			bonuses: 'harvest yield +5%, renown +3%',
			actions: ['Pick Fruit', 'Prune Trees', 'Tend Orchard'],
			profession: ['Orchard Keeper', 'Cider Brewer'],
			apprentice: true,
			timeSpentMultiplier: true,
			taskReward: 'fruits, happiness, beer, package of random materials',
			requirements: 'wood 10, water 10, rope 10',
			upgrades: [
				{ tier: 'Rebuilt', requirements: 'followers 5' },
				{ tier: 'Established', requirements: 'followers 15' },
				{ tier: 'Improved', requirements: 'followers 25' },
				{ tier: 'Advanced', requirements: 'followers 35' },
				{ tier: 'Exquisite', requirements: 'followers 45' }
			]
		},

		{
			id: 'waterside',
			name: 'Waterside',
			type: 'District',
			tier: 2,
			description: 'Fishing boats, ferry tasks, water‑based errands.',
			level: 1,
			bonuses: 'fishing yield +8%, renown +3%',
			actions: ['Launch Boat', 'Ferry Goods', 'Fish River'],
			profession: ['Dockhand'],
			apprentice: true,
			timeSpentMultiplier: true,
			taskReward: 'fish, diplomacy, water, package of random materials',
			requirements: 'wood 15, rope 5, stone 5, iron bars 5',
			upgrades: [
				{ tier: 'Rebuilt', requirements: 'followers 5' },
				{ tier: 'Established', requirements: 'followers 15' },
				{ tier: 'Improved', requirements: 'followers 25' },
				{ tier: 'Advanced', requirements: 'followers 35' },
				{ tier: 'Exquisite', requirements: 'followers 45' }
			]
		},

		{
			id: 'traveling-market',
			name: 'Traveling Market',
			type: 'Community',
			tier: 2,
			description: 'Rotating vendor hub with rare items and quests.',
			level: 1,
			bonuses: 'rare goods chance +5%, trade rewards +3%',
			actions: ['Browse Wares', 'Trade Goods', 'Accept Special Quests'],
			profession: ['Wandering Merchant'],
			apprentice: false,
			timeSpentMultiplier: false,
			taskReward: 'gold, villagers, package of random materials',
			requirements: 'gold 50, stone 20, wood 15, iron bars 5, paper 5',
			upgrades: [
				{ tier: 'Rebuilt', requirements: 'followers 5' },
				{ tier: 'Established', requirements: 'followers 15' },
				{ tier: 'Improved', requirements: 'followers 25' },
				{ tier: 'Advanced', requirements: 'followers 35' },
				{ tier: 'Exquisite', requirements: 'followers 45' }
			]
		},

		{
			id: 'drone-factory',
			name: 'Drone Factory',
			type: 'District',
			tier: 2,
			description: 'Improves construction, repairs, and structural upgrades.',
			level: 1,
			bonuses: 'construction speed +5%, repair efficiency +10%',
			actions: ['Reinforce Walls'],
			profession: ['Drone Workeeper'],
			apprentice: true,
			timeSpentMultiplier: true,
			taskReward: 'brick, stone',
			requirements: 'stone 20, tools 5, wood 10, iron bars 5',
			upgrades: [
				{ tier: 'Rebuilt', requirements: 'nano packs 10' },
				{ tier: 'Established', requirements: 'nano packs 20' },
				{ tier: 'Improved', requirements: 'nano packs 30' },
				{ tier: 'Advanced', requirements: 'nano packs 40' },
				{ tier: 'Exquisite', requirements: 'nano packs 50' }
			]
		},

		{
			id: 'scouting-posts',
			name: 'Scouting Posts',
			type: 'Community',
			tier: 2,
			description: 'Short patrols, lookout duties, messenger tasks.',
			level: 1,
			bonuses: 'communication speed +5%, detection radius +15%',
			actions: ['Patrol Area', 'Watch Perimeter', 'Relay Messages'],
			profession: ['Scout'],
			apprentice: false,
			timeSpentMultiplier: true,
			taskReward: 'diplomacy, villagers, defense, package of random materials',
			requirements: 'wood 10, rope 5, horses 5, stone 15',
			upgrades: [
				{ tier: 'Rebuilt', requirements: 'troops 5' },
				{ tier: 'Established', requirements: 'troops 15' },
				{ tier: 'Improved', requirements: 'troops 25' },
				{ tier: 'Advanced', requirements: 'troops 35' },
				{ tier: 'Exquisite', requirements: 'troops 45' }
			]
		},

		{
			id: 'displaced-shrine',
			name: 'Displaced Shrine',
			type: 'Community',
			tier: 2,
			description: 'Offerings, blessings, and small spiritual quests.',
			level: 1,
			bonuses: 'blessing duration +5%, defense +3%',
			actions: ['Leave Offering', 'Pray', 'Clean Shrine'],
			profession: ['Shrine Keeper'],
			apprentice: true,
			timeSpentMultiplier: true,
			taskReward: 'happiness, gold',
			requirements: 'stone 10, cosmic ore - major 5, wood 5, gold 5',
			upgrades: [
				{ tier: 'Rebuilt', requirements: 'followers 5' },
				{ tier: 'Established', requirements: 'followers 15' },
				{ tier: 'Improved', requirements: 'followers 25' },
				{ tier: 'Advanced', requirements: 'followers 35' },
				{ tier: 'Exquisite', requirements: 'followers 45' }
			]
		},
		{
			id: 'training-grounds',
			name: 'Training Grounds',
			type: 'District',
			tier: 3,
			description: 'Combat drills, sparring, mount practice, army recruiting.',
			level: 1,
			bonuses: 'combat XP +5%, training efficiency +5%',
			actions: ['Spar', 'Drill Troops', 'Practice Mounted Combat'],
			profession: ['Trainer'],
			apprentice: false,
			timeSpentMultiplier: true,
			taskReward: 'happiness, improved troops, renown, package of random materials',
			requirements: 'wood 20, rope 10, stone 20, gold 10, weapons 10, armor 10',
			upgrades: [
				{ tier: 'Rebuilt', requirements: 'troops 5' },
				{ tier: 'Established', requirements: 'troops 15' },
				{ tier: 'Improved', requirements: 'troops 25' },
				{ tier: 'Advanced', requirements: 'troops 35' },
				{ tier: 'Exquisite', requirements: 'troops 45' }
			]
		},

		{
			id: 'event-grounds',
			name: 'Event Grounds',
			type: 'Community',
			tier: 3,
			description: 'Festival area for seasonal events and holiday quests.',
			level: 1,
			bonuses: 'defense +10%, renown +5%',
			actions: ['Join Festival', 'Play Games', 'Participate in Events'],
			profession: ['Event Host'],
			apprentice: false,
			timeSpentMultiplier: true,
			taskReward: 'happiness, villagers, followers, renown, package of random materials',
			requirements: 'wood 10, stone 20, gold 50, gems 5',
			upgrades: [
				{ tier: 'Rebuilt', requirements: 'followers 5' },
				{ tier: 'Established', requirements: 'followers 15' },
				{ tier: 'Improved', requirements: 'followers 25' },
				{ tier: 'Advanced', requirements: 'followers 35' },
				{ tier: 'Exquisite', requirements: 'followers 45' }
			]
		},

		{
			id: 'vineyards',
			name: 'Vineyards',
			type: 'District',
			tier: 3,
			description: 'Wine production, grape gathering, barrel hauling.',
			level: 1,
			bonuses: 'fruit yield +5%, diplomacy +3%',
			actions: ['Harvest Grapes', 'Press Juice', 'Age Wine'],
			profession: ['Vintner'],
			apprentice: true,
			timeSpentMultiplier: true,
			taskReward: 'wine, happiness, fruit, package of random materials',
			requirements: 'fiber 10, wood 10, stone 10, gold 50, tools 10',
			upgrades: [
				{ tier: 'Rebuilt', requirements: 'followers 5' },
				{ tier: 'Established', requirements: 'followers 15' },
				{ tier: 'Improved', requirements: 'followers 25' },
				{ tier: 'Advanced', requirements: 'followers 35' },
				{ tier: 'Exquisite', requirements: 'followers 45' }
			]
		},
		{
			id: 'herbal-fields',
			name: 'Herbal Fields',
			type: 'District',
			tier: 3,
			description: 'Medicinal plants, potion ingredients, foraging tasks.',
			level: 1,
			bonuses: 'herb yield +8%, alchemy XP +3%',
			actions: ['Gather Herbs', 'Tend Plants', 'Sort Ingredients'],
			profession: ['Herbalist'],
			apprentice: true,
			timeSpentMultiplier: true,
			taskReward: 'herbs, happiness, package of random materials',
			requirements: 'wood 10, water 10, fiber 15, stone 10, tools 10',
			upgrades: [
				{ tier: 'Rebuilt', requirements: 'followers 5' },
				{ tier: 'Established', requirements: 'followers 15' },
				{ tier: 'Improved', requirements: 'followers 25' },
				{ tier: 'Advanced', requirements: 'followers 35' },
				{ tier: 'Exquisite', requirements: 'followers 45' }
			]
		},
		{
			id: 'beast-fields',
			name: 'Beast Fields',
			type: 'District',
			tier: 3,
			description: 'Herding, feeding, hunting and runaway livestock quests.',
			level: 1,
			bonuses: 'animal bonds +5, happiness XP +5%',
			actions: ['Feed Herd', 'Round Up Livestock', 'Inspect Fences'],
			profession: ['Herdsman'],
			apprentice: true,
			timeSpentMultiplier: true,
			taskReward: 'pet bonds, happiness, wild meat, package of random materials',
			requirements: 'wood 15, fiber 10, stone 10, gold 50, weapons 10',
			upgrades: [
				{ tier: 'Rebuilt', requirements: 'followers 5' },
				{ tier: 'Established', requirements: 'followers 15' },
				{ tier: 'Improved', requirements: 'followers 25' },
				{ tier: 'Advanced', requirements: 'followers 35' },
				{ tier: 'Exquisite', requirements: 'followers 45' }
			]
		},
		{
			id: 'remote-town',
			name: 'Remote Town',
			type: 'Community',
			tier: 3,
			description: 'Small homes, gossip quests, local disputes.',
			level: 1,
			bonuses: 'renown +5%, quest rewards +5%',
			actions: ['Visit Homes', 'Settle Dispute', 'Gather Rumors'],
			profession: ['Villagers'],
			apprentice: false,
			timeSpentMultiplier: true,
			taskReward: 'happiness, fruit, wild meat, fish, villagers, package of random materials',
			requirements: 'wood 20, stone 20, gold 70, gems 10, tools 10, weapons 10, armor 10',
			upgrades: [
				{ tier: 'Rebuilt', requirements: 'followers 5' },
				{ tier: 'Established', requirements: 'followers 15' },
				{ tier: 'Improved', requirements: 'followers 25' },
				{ tier: 'Advanced', requirements: 'followers 35' },
				{ tier: 'Exquisite', requirements: 'followers 45' }
			]
		},
		{
			id: 'exploration-satellite',
			name: 'Exploration Satellite',
			type: 'Satellite',
			tier: 3,
			description: 'Expand infrastructure, improve travel, and unlock new areas.',
			level: 1,
			bonuses: 'travel speed +10%, resource transport +5%',
			actions: ['Set Travel beacons'],
			profession: ['Engineer', 'Observers'],
			apprentice: true,
			timeSpentMultiplier: true,
			taskReward: 'diplomacy, cosmic ore',
			requirements: 'stone 20, wood 15, gold 10, gems 5, horses 5, tools 10',
			upgrades: [
				{ tier: 'Rebuilt', requirements: 'troops 5' },
				{ tier: 'Established', requirements: 'troops 15' },
				{ tier: 'Improved', requirements: 'troops 25' },
				{ tier: 'Advanced', requirements: 'troops 35' },
				{ tier: 'Exquisite', requirements: 'troops 45' }
			]
		},
		{
			id: 'space-portal',
			name: 'Space Portal',
			type: 'Satellite',
			tier: 3,
			description: 'Generation Ship Portal, ferry tasks, large portal based errands.',
			level: 1,
			bonuses: 'quest rewards +8%, renown +3%',
			actions: ['Ferry Goods'],
			profession: ['Space Portal Keeper'],
			apprentice: true,
			timeSpentMultiplier: true,
			taskReward: 'diplomacy, cosmic regentsnts, package of random materials',
			requirements: 'wood 15, stone 50, rope 25, gold 100, gems 20, tools 15',
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
		<h2>Outer City Glossary</h2>

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
			<h1>OUTER CITY</h1>
			<p>Description: Most quests happen here. Includes outskirts and near‑distance jobs.</p>
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
