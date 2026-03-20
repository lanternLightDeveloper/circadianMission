<script>
	// Replace this object with the species data for THIS file
	const species = {
		name: 'Human',
		base_Element: 'Earth',
		elemental_Weakness: 'Water',

		baseStats: {
			Strength: '6/10',
			Agility: '5/10',
			Endurance: '6/10',
			Intellect: '7/10',
			Willpower: '7/10',
			CruxAffinity: '6/10'
		},

		innateModifiers: ['+1 Skill Point per Level', '+5% Nanite Efficiency'],

		resistances: {
			Mental: 'Moderate',
			Biological: 'Standard',
			Crux_Corruption: 'Low',
			Nanite_Overload: 'Low'
		},

		weaknesses: [
			'No innate elemental resistances',
			'No natural regeneration',
			'Requires training to specialize'
		],

		movement: {
			Speed: 'Standard',
			Teleportation: 'Learned, not instinctual',
			Environmental_Adaptation: 'High with gear, low without'
		},

		combatProfile: {
			Melee: 'Balanced',
			Ranged: 'Strong',
			Crux: 'Moderate',
			Nanite: 'High'
		},

		origin: {
			Homeworld: 'Terra (Old Earth)',
			Mythic_Origin: 'Children of the Light',
			Historical_Notes:
				'Spread across dozens of systems; culturally diverse; early adopters of nanite augmentation.'
		},

		biology: {
			Body: 'Soft‑tissue mammalian; high neuroplasticity',
			Sensory: 'Balanced senses',
			Metabolism: 'Omnivorous; adaptable',
			Longevity: 'Nanite therapy and medical access'
		},

		psychology: {
			Cognitive_Traits: 'Innovative, emotional, pattern‑seeking',
			Behavioral_Tendencies: 'Cooperative under pressure',
			Cultural_Variability: 'Extremely high'
		},

		crux: {
			MythicView: 'Destiny, divinity, or pure science depending on culture',
			Channeling: 'Structured, ritualized, or tech‑assisted',
			Risks: 'Low corruption risk; slow attunement'
		},

		nanites: {
			Compatibility: 'Excellent',
			Unique_Traits: 'Can host hybrid nanite colonies without rejection'
		},

		society: {
			Governance: 'Democracies, guild systems, megacorporate states',
			Economy: 'Innovation‑driven; resource‑adaptive',
			Religion: 'Fragmented; many sects and orders'
		},

		tactics: {
			Strengths: 'Adaptability, teamwork, tactical teleportation',
			Weaknesses: 'No innate biological advantages',
			CommonRoles: 'Knights, Rangers, Engineers, Crux Priests'
		},

		deepHistory: `
        The human race is a species of slow progress. We have dealt with collapse over and again. Fueled by self and the environment, we struggled for every day. A primate based species we expanded across a broad range of variety of terrains and climates. Perseverance is the premier word for our species. We fought ourselves more than anything to grow and achieve our goals. Taking hundreds of thousands of years to reach for the stars. In our historical 22nd century a breakthrough in physics changed everything.

		Their absolute need to figure out "what is this" led them to the "Empty Space Theory". This allowed humans to interact with the universe in way we dreamed of in fantasy. The technology is so advanced that it seems like magic the way they control fire, plant, water air or any of the other permutations the Prevailing Crux Theory allows. War and disease ended. The step was an explosive expansion to the next generation of technology. We got lost for a hundred years cleaning the messes of our previous generations before we were reconvinced to look up. 
		
		We have begun to use the new physics to create ships that fold space. We have been gifted with the ability to explore places our satellites could map. A place our old forms of travel would have taken hundreds of years, now it only takes a few seconds. So we are are out here looking for questions that we never thought to ask.  Our ideas may vary, but our questions will never end.
    `
	};
</script>

<div class="page grid-Main">
	<section>
		<h1>{species.name}</h1>

		<p><span class="label">Base Element:</span> {species.base_Element}</p>
		<p><span class="label">Elemental Weakness:</span> {species.elemental_Weakness}</p>
	</section>

	<section>
		<h2>Base Stats</h2>
		<table>
			<tbody>
				{#each Object.entries(species.baseStats) as [key, value] (key)}
					<tr>
						<td class="label">{key}</td>
						<td>{value}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</section>

	<section>
		<h2>Innate Modifiers</h2>
		<ul>
			{#each species.innateModifiers as mod (mod)}
				<li>{mod}</li>
			{/each}
		</ul>
	</section>

	<section>
		<h2>Resistances</h2>
		<ul>
			{#each Object.entries(species.resistances) as [key, value] (key)}
				<li><span class="label">{key}:</span> {value}</li>
			{/each}
		</ul>
	</section>

	<section>
		<h2>Weaknesses</h2>
		<ul>
			{#each species.weaknesses as w (w)}
				<li>{w}</li>
			{/each}
		</ul>
	</section>

	<section>
		<h2>Movement & Mobility</h2>
		<ul>
			{#each Object.entries(species.movement) as [key, value] (key)}
				<li><span class="label">{key}:</span> {value}</li>
			{/each}
		</ul>
	</section>

	<section>
		<h2>Combat Profile</h2>
		<ul>
			{#each Object.entries(species.combatProfile) as [key, value] (key)}
				<li><span class="label">{key}:</span> {value}</li>
			{/each}
		</ul>
	</section>

	<section>
		<h2>Origin & History</h2>
		<ul>
			{#each Object.entries(species.origin) as [key, value] (key)}
				<li><span class="label">{key}:</span> {value}</li>
			{/each}
		</ul>
	</section>

	<section>
		<h2>Biology & Physiology</h2>
		<ul>
			{#each Object.entries(species.biology) as [key, value] (key)}
				<li><span class="label">{key}:</span> {value}</li>
			{/each}
		</ul>
	</section>

	<section>
		<h2>Psychology & Temperament</h2>
		<ul>
			{#each Object.entries(species.psychology) as [key, value] (key)}
				<li><span class="label">{key}:</span> {value}</li>
			{/each}
		</ul>
	</section>

	<section>
		<h2>Crux Relationship</h2>
		<ul>
			{#each Object.entries(species.crux) as [key, value] (key)}
				<li><span class="label">{key}:</span> {value}</li>
			{/each}
		</ul>
	</section>

	<section>
		<h2>Nanite Interaction</h2>
		<ul>
			{#each Object.entries(species.nanites) as [key, value] (key)}
				<li><span class="label">{key}:</span> {value}</li>
			{/each}
		</ul>
	</section>

	<section>
		<h2>Societal Structure</h2>
		<ul>
			{#each Object.entries(species.society) as [key, value] (key)}
				<li><span class="label">{key}:</span> {value}</li>
			{/each}
		</ul>
	</section>

	<section>
		<h2>Combat & Tactics</h2>
		<ul>
			{#each Object.entries(species.tactics) as [key, value] (key)}
				<li><span class="label">{key}:</span> {value}</li>
			{/each}
		</ul>
	</section>

	<section class="grid-Block-Double">
		<h2>Deep History</h2>
		<p class="deep-history">{species.deepHistory}</p>
	</section>
</div>

<style>
	.page {
		max-width: 70%;
		margin: 0 auto;
		padding: 2rem;
		line-height: 1.6;
	}

	section {
		border-bottom: var(--border);
		border-right: var(--border);
	}

	h1,
	h2 {
		margin-top: 2rem;
	}

	table {
		width: 100%;
		border-collapse: collapse;
		margin: 1rem 0;
	}

	td {
		padding: 0.4rem 0;
		border-bottom: 1px solid #444;
	}

	.label {
		font-weight: bold;
	}

	ul {
		margin: 0.5rem 0 1rem 1.2rem;
	}

	.deep-history {
		width: 100%;
		white-space: pre-line;
	}
</style>
