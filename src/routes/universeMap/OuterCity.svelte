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
			id: 'farms',
			name: 'Farms',
			type: 'Building',
			tier: 1,
			description: 'Produces crops; boosts gathering and cooking tasks.',
			level: 1,
			bonuses: 'gathering yield +5%, food storage +3%',
			actions: ['Harvest Crops', 'Plant Seeds', 'Tend Fields'],
			profession: ['Farmer'],
			taskReward: 'crops, happiness, pickled vegetables',
			requirements: 'wood 15, fiber 10, water 10',
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
			id: 'granary',
			name: 'Granary',
			type: 'Building',
			tier: 1,
			description: 'Food storage; affects stability, famine prevention, and follower defense.',
			level: 1,
			bonuses: 'food preservation +5%, defense +3%',
			actions: ['Store Grain', 'Inspect Supplies', 'Distribute Rations'],
			profession: ['Granary Keeper'],
			taskReward: 'grain, happiness, villagers',
			requirements: 'wood 15, stone 10',
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
			id: 'dairy',
			name: 'Dairy',
			type: 'Field',
			tier: 1,
			description: 'Produces milk and cheese; boosts food crafting and animal care.',
			level: 1,
			bonuses: 'animal bonds +4%, food production +5%',
			actions: ['Milk Animals', 'Process Cheese', 'Clean Pens'],
			profession: ['Dairy Keeper', 'Farmhand'],
			taskReward: 'milk, cheese, horses, meat, villagers',
			requirements: 'wood 10, stone 5, gold 5',
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
			id: 'hunt-fish-outpost',
			name: 'Hunt / Fish Outpost',
			type: 'Worksite',
			tier: 1,
			description: 'Wilderness outpost for hunting and fishing tasks.',
			level: 1,
			bonuses: 'wild meat gathering +8%, fish gathering +5%',
			actions: ['Hunt Game', 'Set Traps', 'Fish Waters'],
			profession: ['Hunter', 'Fisher'],
			taskReward: 'fish, wild meat, happiness, water',
			requirements: 'wood 10, rope 5, stone 5',
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
			id: 'lumber-yard',
			name: 'Lumber Yard',
			type: 'Worksite',
			tier: 1,
			description: 'Woodcutting, hauling logs, clearing fallen trees.',
			level: 1,
			bonuses: 'wood yield +8%, happiness +3%',
			actions: ['Chop Wood', 'Haul Logs', 'Clear Debris'],
			profession: ['Lumberjack'],
			taskReward: 'wood, paper',
			requirements: 'wood 10, stone 15',
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
			id: 'quarry-edge',
			name: 'Quarry Edge',
			type: 'Worksite',
			tier: 1,
			description: 'Stone extraction, carting materials, safety inspections.',
			level: 1,
			bonuses: 'stone yield +8%, ore yield +3%',
			actions: ['Extract Stone', 'Inspect Quarry', 'Transport Blocks'],
			profession: ['Quarryman'],
			taskReward: 'stone, happiness',
			requirements: 'stone 10, woods 5',
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
			id: 'wagon-depot',
			name: 'Wagon Depot',
			type: 'Building',
			tier: 1,
			description: 'Caravans, deliveries, escorting merchants.',
			level: 1,
			bonuses: 'delivery speed +5%, trade rewards +3%',
			actions: ['Load Wagon', 'Dispatch Caravan', 'Escort Merchant'],
			profession: ['Wagonmaster'],
			taskReward: 'gold, renown, villagers',
			requirements: 'wood 15, rope 10, stone 10',
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
			id: 'traveling-market',
			name: 'Traveling Market',
			type: 'Building',
			tier: 2,
			description: 'Rotating vendor hub with rare items and quests.',
			level: 1,
			bonuses: 'rare goods chance +5%, trade rewards +3%',
			actions: ['Browse Wares', 'Trade Goods', 'Accept Special Quests'],
			profession: ['Wandering Merchant'],
			taskReward: 'gold, villagers',
			requirements: 'gold 50, stone 20, wood 15, iron bars 5, paper 5',
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
			id: 'masons',
			name: 'Masons',
			type: 'Worksite',
			tier: 2,
			description: 'Improves construction, repairs, and structural upgrades.',
			level: 1,
			bonuses: 'construction speed +5%, repair efficiency +10%',
			actions: ['Cut Stone', 'Reinforce Walls', 'Craft Masonry Blocks'],
			profession: ['Mason'],
			taskReward: 'brick, stone',
			requirements: 'stone 20, tools 5, wood 10, iron bars 5',
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
			id: 'tannery',
			name: 'Tannery',
			type: 'Building',
			tier: 2,
			description: 'Leatherworking, hides, and light armor crafting.',
			level: 1,
			bonuses: 'leather yield +5%, leather production +3%',
			actions: ['Cure Hides', 'Craft Leather Armor', 'Process Materials'],
			profession: ['Tanner'],
			taskReward: 'leather, light armor',
			requirements: 'hides 10, wood 10, iron bars 5',
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
			id: 'orchards',
			name: 'Orchards',
			type: 'Field',
			tier: 2,
			description: 'Fruit picking, pruning, and seasonal harvest quests.',
			level: 1,
			bonuses: 'harvest yield +5%, renown +3%',
			actions: ['Pick Fruit', 'Prune Trees', 'Tend Orchard'],
			profession: ['Orchard Keeper', 'Cider Brewer'],
			taskReward: 'fruits, happiness, beer',
			requirements: 'wood 10, water 10, rope 10',
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
			id: 'river-dock',
			name: 'River Dock',
			type: 'Building',
			tier: 2,
			description: 'Fishing boats, ferry tasks, water‑based errands.',
			level: 1,
			bonuses: 'fishing yield +8%, renown +3%',
			actions: ['Launch Boat', 'Ferry Goods', 'Fish River'],
			profession: ['Dockhand'],
			taskReward: 'fish, diplomacy, water',
			requirements: 'wood 15, rope 5, stone 5, iron bars 5',
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
			id: 'scouting-posts',
			name: 'Scouting Posts',
			type: 'Building',
			tier: 2,
			description: 'Short patrols, lookout duties, messenger tasks.',
			level: 1,
			bonuses: 'communication speed +5%, detection radius +15%',
			actions: ['Patrol Area', 'Watch Perimeter', 'Relay Messages'],
			profession: ['Scout'],
			taskReward: 'diplomacy, villagers, defense',
			requirements: 'wood 10, rope 5, horses 5, stone 15',
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
			id: 'roadside-shrine',
			name: 'Roadside Shrine',
			type: 'Building',
			tier: 2,
			description: 'Offerings, blessings, and small spiritual quests.',
			level: 1,
			bonuses: 'blessing duration +5%, defense +3%',
			actions: ['Leave Offering', 'Pray', 'Clean Shrine'],
			profession: ['Shrine Keeper'],
			taskReward: 'happiness, gold',
			requirements: 'stone 10, cosmic ore - major 5, wood 5, gold 5',
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
			id: 'training-grounds',
			name: 'Training Grounds',
			type: 'Field',
			tier: 3,
			description: 'Combat drills, sparring, and mount practice, army recruiting.',
			level: 1,
			bonuses: 'combat XP +5%, training efficiency +5%',
			actions: ['Spar', 'Drill Troops', 'Practice Mounted Combat'],
			profession: ['Trainer'],
			taskReward: 'happiness, improved troops, renown',
			requirements: 'wood 20, rope 10, stone 20, gold 10, weapons 10, armor 10',
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
			id: 'event-grounds',
			name: 'Event Grounds',
			type: 'Field',
			tier: 3,
			description: 'Festival area for seasonal events and holiday quests.',
			level: 1,
			bonuses: 'defense +10%, renown +5%',
			actions: ['Join Festival', 'Play Games', 'Participate in Events'],
			profession: ['Event Host'],
			taskReward: 'happiness, villagers, followers, renown',
			requirements: 'wood 10, stone 20, gold 50, gems 5',
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
			id: 'vineyards',
			name: 'Vineyards',
			type: 'Building',
			tier: 3,
			description: 'Wine production, grape gathering, barrel hauling.',
			level: 1,
			bonuses: 'fruit yield +5%, diplomacy +3%',
			actions: ['Harvest Grapes', 'Press Juice', 'Age Wine'],
			profession: ['Vintner'],
			taskReward: 'wine, happiness, fruit',
			requirements: 'fiber 10, wood 10, stone 10, gold 50, tools 10',
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
			id: 'herbal-fields',
			name: 'Herbal Fields',
			type: 'Field',
			tier: 3,
			description: 'Medicinal plants, potion ingredients, foraging tasks.',
			level: 1,
			bonuses: 'herb yield +8%, alchemy XP +3%',
			actions: ['Gather Herbs', 'Tend Plants', 'Sort Ingredients'],
			profession: ['Herbalist'],
			taskReward: 'herbs, happiness',
			requirements: 'wood 10, water 10, fiber 15, stone 10, tools 10',
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
			id: 'beast-fields',
			name: 'Beast Fields',
			type: 'Field',
			tier: 3,
			description: 'Herding, feeding, hunting and runaway livestock quests.',
			level: 1,
			bonuses: 'animal bonds +5%, happiness XP +5%',
			actions: ['Feed Herd', 'Round Up Livestock', 'Inspect Fences'],
			profession: ['Herdsman'],
			taskReward: 'pet bonds, happiness, wild meat',
			requirements: 'wood 15, fiber 10, stone 10, gold 50, weapons 10',
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
			id: 'road-building',
			name: 'Road Building',
			type: 'Region',
			tier: 3,
			description: 'Expand infrastructure, improve travel, and unlock new areas.',
			level: 1,
			bonuses: 'travel speed +10%, resource transport +5%',
			actions: ['Lay Road', 'Clear Path', 'Assign Workers'],
			profession: ['Engineer', 'Laborers'],
			taskReward: 'diplomacy, cosmic ore',
			requirements: 'stone 20, wood 15, gold 10, gems 5, horses 5, tools 10',
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
			id: 'outskirts-village',
			name: 'Outskirts Village',
			type: 'Building',
			tier: 3,
			description: 'Small homes, gossip quests, local disputes.',
			level: 1,
			bonuses: 'renown +5%, quest rewards +5%',
			actions: ['Visit Homes', 'Settle Dispute', 'Gather Rumors'],
			profession: ['Villagers'],
			taskReward: 'happiness, fruit, wild meat, fish, villagers',
			requirements: 'wood 20, stone 20, gold 70, gems 10, tools 10, weapons 10, armor 10',
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
			id: 'sky-dock',
			name: 'Sky Dock',
			type: 'Building',
			tier: 3,
			description: 'Flying boats, ferry tasks, sky‑based errands.',
			level: 1,
			bonuses: 'quest rewards +8%, renown +3%',
			actions: ['Launch Skyship', 'Ferry Goods', 'Sky Adventures'],
			profession: ['Skyhand'],
			taskReward: 'diplomacy, magical regents',
			requirements: 'wood 15, stone 50, rope 25, gold 100, gems 20, tools 15',
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

<div class="container">
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

	<main>
		<h1>OUTER CITY 🌳</h1>
		<p>Description: Most quests happen here. Includes outskirts and near‑distance jobs.</p>

		{#each tiers as t (t)}
			<h2>Tier {t}</h2>

			{#each buildings.filter((b) => b.tier === t) as b (b.id)}
				<section id={b.id} class="section" tabindex="-1" aria-labelledby={`${b.id}-title`}>
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
	</main>
</div>

<style>
	.container {
		display: grid;
		grid-template-columns: 250px 1fr;
		gap: 1rem;
		padding: 1rem;
	}

	.sidebar {
		position: sticky;
		top: 1rem;
		align-self: start;
		padding-right: 1rem;
	}

	.sidebar button {
		background: none;
		border: none;
		color: #0055aa;
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

	.section {
		padding: 1rem 0;
		border-bottom: 1px solid #ccc;
	}

	.section:focus {
		outline: 3px solid #88c0ff;
	}
</style>
