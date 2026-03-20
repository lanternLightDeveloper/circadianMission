<script lang="ts">
	const buildings = [
		{
			id: 'friends-home',
			name: "Friend's Home",
			type: 'System',
			description: 'Visit another player’s or ally’s castle for trade or diplomacy.',
			level: 1,
			bonuses: ['diplomacy XP +5%', 'trade deals +3%'],
			actions: ['Visit Friend', 'Trade Goods', 'Assist with Tasks'],
			npcs: ['Ally', 'Messenger'],
			requirements: { invitation: true },
			taskReward: 'Great shipment of goods'
		},

		{
			id: 'discovered-system-expedition',
			name: 'Discovered System Expedition',
			type: 'System',
			description: 'Long‑term missions for followers to earn rewards and rare items.',
			level: 1,
			bonuses: ['mission success +5%', 'follower XP +8%'],
			actions: ['Send Expedition', 'Review Reports', 'Recall Followers'],
			npcs: ['Expedition Captain'],
			requirements: { followers: 2, food: 15, ships: 3 },
			taskReward: 'Great shipment of goods'
		},

		{
			id: 'dark-space',
			name: 'Dark Space',
			type: 'Deep Space',
			description: 'Untamed space with danger, resources, and rare discoveries.',
			level: 1,
			bonuses: ['rare resource chance +5%', 'exploration XP +10%'],
			actions: ['Scout Area', 'Gather Rare Materials', 'Clear Threats'],
			npcs: ['Deep Space Guide'],
			requirements: { followers: 1, supplies: 10, ships: 3 },
			taskReward: 'Great shipment of goods'
		},

		{
			id: 'friendly-territories',
			name: 'Friendly Territories',
			type: 'System',
			description: 'Distant lands with unique cultures and high‑level quests.',
			level: 1,
			bonuses: ['exotic goods chance +7%', 'travel XP +5%'],
			actions: ['Travel Abroad', 'Establish Trade Route', 'Seek Diplomacy'],
			npcs: ['Ambassador', 'Foreign Trader'],
			requirements: { 'travel-pass': true, gold: 100 },
			taskReward: 'Great shipment of goods'
		},

		{
			id: 'ruined-cityscape',
			name: 'Ruined Cityscape',
			type: 'Planet',
			description: 'Ancient battlesites filled with relics, dangers, and powerful foes.',
			level: 1,
			bonuses: ['relic discovery +6%', 'combat XP +8%'],
			actions: ['Explore Ruins', 'Hunt Relics', 'Challenge Boss'],
			npcs: ['Ruin Explorer'],
			requirements: { followers: 2, supplies: 15 },
			taskReward: 'Great shipment of goods'
		},

		{
			id: 'mid-system-passes',
			name: 'Mid System Passes',
			type: 'Deep Space',
			description: 'Treacherous deep space routes with rogue systems, monsters, and rare minerals.',
			level: 1,
			bonuses: ['rare mineral chance +7%', 'endurance XP +5%'],
			actions: ['Explore Space Pass', 'Clear Route', 'Conquer Space Monsters'],
			npcs: ['Pioneer'],
			requirements: { followers: 5, supplies: 10, ships: 3 },
			taskReward: 'Great shipment of goods'
		},

		{
			id: 'marshy-planet',
			name: 'Marshy Planet',
			type: 'Planet',
			description: 'Toxic wetlands with hidden beasts and harsh survival challenges.',
			level: 1,
			bonuses: ['survival XP +10%', 'rare plant chance +5%'],
			actions: ['Navigate Swamp', 'Hunt Marsh Beasts', 'Gather Toxic Herbs'],
			npcs: ['Navigator'],
			requirements: { antidotes: 3, followers: 1 },
			taskReward: 'Great shipment of goods'
		},

		{
			id: 'desert-planet',
			name: 'Desert Planet',
			type: 'Planet',
			description: 'Vast dunes, fossils, sandstorms, and lost ruins.',
			level: 1,
			bonuses: ['heat resistance +5%', 'treasure find +6%'],
			actions: ['Explore Fossils', 'Search Ruins', 'Weather Sandstorm'],
			npcs: ['Landwalker'],
			requirements: { water: 15, supplies: 10 },
			taskReward: 'Great shipment of goods'
		},

		{
			id: 'frozen-waste-world',
			name: 'Frozen Waste World',
			type: 'Planet',
			description: 'Blizzard‑ridden tundra with ice caves and frost creatures.',
			level: 1,
			bonuses: ['cold resistance +8%', 'exploration XP +6%'],
			actions: ['Explore Ice Caves', 'Hunt Frost Beasts', 'Build Shelter'],
			npcs: ['Frost Tracker'],
			requirements: { 'warm-gear': true, supplies: 10 },
			taskReward: 'Great shipment of goods'
		},

		{
			id: 'sacred-groves',
			name: 'Sacred Groves',
			type: 'Planet',
			description: 'Ancient spiritual forests guarded by mystical beings.',
			level: 1,
			bonuses: ['blessing strength +5%', 'rare herb chance +7%'],
			actions: ['Perform Ritual', 'Seek Guardian', 'Gather Sacred Herbs'],
			npcs: ['Grove Keeper'],
			requirements: { offering: 1, followers: 1 },
			taskReward: 'Great shipment of goods'
		},

		{
			id: 'asteroid-community',
			name: 'Asteroid Community',
			type: 'Region',
			description: 'Mobile tribes offering trade, diplomacy, and cultural quests.',
			level: 1,
			bonuses: ['diplomacy XP +6%', 'trade deals +4%'],
			actions: ['Trade Goods', 'Learn Customs', 'Assist Nomads'],
			npcs: ['Nomad Elder'],
			requirements: { 'travel-pass': true, ships: 3 },
			taskReward: 'Great shipment of goods'
		},

		{
			id: 'scouting-outpost-support',
			name: 'Scouting Outpost Support',
			type: 'Region',
			description: 'Remote defensive posts requiring supplies, scouting, and protection.',
			level: 1,
			bonuses: ['patrol efficiency +8%', 'defense XP +5%'],
			actions: ['Deliver Supplies', 'Reinforce Outpost', 'Scout Deep Space'],
			npcs: ['Outpost Captain'],
			requirements: { followers: 2, supplies: 20, ships: 3 },
			taskReward: 'Great shipment of goods'
		},

		{
			id: 'sunken-ruins',
			name: 'Sunken Ruins',
			type: 'Region',
			description: 'Submerged ancient structures filled with technology and underwater threats.',
			level: 1,
			bonuses: ['artifact chance +7%', 'player XP +5%'],
			actions: ['Dive Ruins', 'Recover Relics', 'Fight Sea Creatures'],
			npcs: ['Diver'],
			requirements: { supplies: 10, followers: 3 },
			taskReward: 'Great shipment of goods'
		},

		{
			id: 'volcanic-system',
			name: 'Volcanic System',
			type: 'Region',
			description: 'Lava planets, fire creatures, and rare volcanic ores, three suns.',
			level: 1,
			bonuses: ['fire resistance +5%', 'rare ore chance +8%'],
			actions: ['Traverse Ridge', 'Mine Volcanic Ore', 'Battle Fire Beasts'],
			npcs: ['Fireproof Miner'],
			requirements: { followers: 3, supplies: 10 },
			taskReward: 'Great shipment of goods'
		},

		{
			id: 'sky-cliffs',
			name: 'Sky Cliffs',
			type: 'Region',
			description:
				'A planet with no solid land, just floating islands with flying beasts and rare herbs.',
			level: 1,
			bonuses: ['rare herb chance +8%', 'player XP +5%'],
			actions: ['Research Islands', 'Hunt Sky Beasts', 'Gather Wind Herbs'],
			npcs: ['Island Scout'],
			requirements: { followers: 5, supplies: 10 },
			taskReward: 'Great shipment of goods'
		},

		{
			id: 'valley-of-illusions',
			name: 'Valley of Illusions',
			type: 'Region',
			description: 'Cursed lands filled with illusions, mind tricks, and high‑risk exploration.',
			level: 1,
			bonuses: ['player resistance +5%', 'rare discovery chance +17%'],
			actions: ['Navigate Illusions', 'Investigate Anomaly', 'Explore Hidden Paths'],
			npcs: ['Illusion Hunter'],
			requirements: { supplies: 10, followers: 1 },
			taskReward: 'Great shipment of goods'
		},

		{
			id: 'space-shipping-routes',
			name: 'Space Shipping Routes',
			type: 'Region',
			description: 'Long shipping escort across dangerous space with anomalies and monsters.',
			level: 1,
			bonuses: ['voyage success +6%', 'player XP +8%'],
			actions: ['Set Sail', 'Chart Route', 'Fight Space Monsters'],
			npcs: ['Space Captain'],
			requirements: { ships: 5, supplies: 20 },
			taskReward: 'Great shipment of goods'
		},

		{
			id: 'storm-struck-planet',
			name: 'Storm Struck Planet',
			type: 'Region',
			description: 'A planet of constant storms containing lost kingdoms, treasures, and spirits.',
			level: 1,
			bonuses: ['ancient treasure chance +8%', 'player XP +6%'],
			actions: ['Explore Chaos', 'Commune with Spirits', 'Recover Relics'],
			npcs: ['Storm Wanderer'],
			requirements: { supplies: 10, followers: 2 },
			taskReward: 'Great shipment of goods'
		}
	];

	function scrollToSection(id: string) {
		const el = document.getElementById(id);
		if (el) {
			el.scrollIntoView({ behavior: 'smooth', block: 'start' });
			el.focus();
		}
	}

	let menuOpen = false;

	function toggleMenu() {
		menuOpen = !menuOpen;
	}
</script>

<button class="menu-toggle" on:click={toggleMenu}> Index </button>

<div class="layout">
	<aside class="sidebar {menuOpen ? 'open' : ''}">
		<h3>Wild Space Index</h3>

		<ul>
			{#each buildings as b (b.id)}
				<li>
					<button
						on:click={() => {
							scrollToSection(b.id);
							menuOpen = false;
						}}
					>
						{b.name}
					</button>
				</li>
			{/each}
		</ul>
	</aside>

	<div class="content">
		<div class="entry">
			<h1>Wild Space</h1>
		</div>
		<p>
			Description: Big milestones. Long expeditions, and major achievements. This is where you
			explore the universe.
		</p>

		<div class="grid-Main">
			{#each buildings as b (b.id)}
				<section id={b.id} tabindex="-1" aria-labelledby={`${b.id}-title`}>
					<h3 id={`${b.id}-title`}>{b.name}</h3>

					<p><strong>Type:</strong> {b.type}</p>
					<p><strong>Description:</strong> {b.description}</p>
					<p><strong>Level:</strong> {b.level}</p>
					<p><strong>Bonuses:</strong> {b.bonuses}</p>
					<p><strong>Actions:</strong> {b.actions.join(', ')}</p>
					<p><strong>NPCS:</strong> {b.npcs}</p>
					<p><strong>Requirements:</strong></p>
					<ul>
						{#each Object.entries(b.requirements) as [key, value] (key)}
							<li>{key}: {value}</li>
						{/each}
					</ul>

					<p><strong>Task‑Reward:</strong> {b.taskReward}</p>
				</section>
			{/each}
		</div>
	</div>
</div>

<style>
	.layout {
		display: flex;
		align-items: flex-start;
	}

	.menu-toggle {
		position: fixed;
		top: 1rem;
		left: 1rem;
		z-index: 1000;
		background: var(--accent-2);
		color: white;
		border: none;
		padding: 0.5rem 1rem;
		font-size: 1.1rem;
		cursor: pointer;
		border-radius: 4px;
	}

	.sidebar {
		position: fixed;
		top: 0;
		left: -260px;
		width: 250px;
		height: 100vh;
		background: var(--bg-2);
		border-right: var(--border);
		padding: 1rem;
		transition: left 0.3s ease;
		z-index: 999;

		h3 {
			margin-top: 3rem;
		}
	}

	.sidebar.open {
		left: 0;
	}

	section {
		border-bottom: var(--border);
		border-right: var(--border);
	}

	.content {
		flex: 1;
		min-width: 0;
		padding-left: 1rem;
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
</style>
