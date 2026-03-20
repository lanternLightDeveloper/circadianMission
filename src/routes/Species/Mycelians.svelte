<script>
	const species = {
		name: 'Mycelians',
		base_Element: 'Plant',
		elemental_Weakness: 'Fire',

		baseStats: {
			Strength: '5/10',
			Agility: '4/10',
			Endurance: '7/10',
			Intellect: '7/10',
			Willpower: '5/10',
			CruxAffinity: '7/10'
		},

		innateModifiers: ['+5 Task Point per Level', '+5% Nanite Efficiency'],

		resistances: {
			Mental: 'Low',
			Biological: 'High',
			CruxCorruption: 'Standard',
			NaniteOverload: 'Low'
		},

		weaknesses: ['5% increased fire damage received', 'Prone to rage'],

		movement: {
			BaseSpeed: 'Slow',
			Teleportation: 'Natural',
			EnvironmentalAdaptation: 'Cave and forest dweller'
		},

		combatProfile: {
			Melee: 'Low',
			Ranged: 'Moderate',
			CruxCasting: 'High',
			NaniteManipulation: 'High'
		},

		origin: {
			Homeworld: 'Xelcom',
			MythicOrigin: 'Unified spore theory — all life is gifted from fungus on space rocks',
			HistoricalNotes: 'A unified people sharing history through spores, allowing rapid evolution'
		},

		biology: {
			BodyStructure: 'Soft‑tissued mushroom people',
			SensoryProfile: 'Experience the world through spores emitted from their bodies',
			Metabolism: 'Consumes decomposing plants',
			LongevityFactors: 'Contact with legacy mycelia and organic nanites grants long life'
		},

		psychology: {
			CognitiveTraits: 'Calm and focused',
			BehavioralTendencies: 'Welcoming and cooperative',
			CulturalVariability: 'Extremely high — no universal norms'
		},

		crux: {
			MythicView: 'Symbiotic connection to the Empty Space',
			ChannelingStyle: 'Communal, like an extension of the body',
			Risks: 'Susceptible to elemental forces'
		},

		nanites: {
			Compatibility: 'Symbiotic connection through organic nanites',
			UniqueTraits: 'Nanites are grown from spore‑based technology, making them organic and unique'
		},

		society: {
			Governance: 'The Collective',
			Economy: 'None — a recycling‑based race',
			Religion:
				'Unified Spore Theory — all mushrooms across the universe are connected through the substrate of existence'
		},

		tactics: {
			Strengths: 'Element connection',
			Weaknesses: 'Elemental weakness',
			CommonRoles: 'Monk, Druid, Seer'
		},

		deepHistory: `
			A mycelia based species that evolved on a planet of mostly forests. In the earliest days of this species a patch of mycelia asked "why am I"? So it sought others like it with The Question. In time it began to reach to more species of mycelia who al began to ask The Question. When the planet sung The Question they began to reach out to the other creatures and learning how they thought through symbiosis. Living as the creatures taught them how to be more than fruit. They evolved bodies move like the moving, to seek The Answer. 

			They cultivated different spore structures that could serve many purposes. One of the spore types was of knowledge. Their spores allow them to communicate deep ideas and messages, it allowed them to pass information from one generation to the next. When their population hit a saturation point even the children are born knowing the history of the earliest generations. Where most species reach for technology to fill every need, the Mycelians have sung their world into harmony. Everything is part of the cycle. To a humans city, they instead live by the millions in vast stretching forests.  

			Their Unified Spore Theory allowed them to become a hyper-organic culture. They could commune with everything around them, so there never grew a need for machines. The cultures learned to hurl rocks into space before they ever thought of throwing rocks at each other. Some mycelia can live on the surface of asteroids, so they began to research the Xel system. A patch out with plenty of time to think had the opportunity to be on an osmium rock. So it began to test and ask The Question. Harmonizing with the Prevailing Crux Theory allowed it to finish years of study in moments zipping around through folded space and show up on the rock back home. It parked in the middle the most highly populated city on the planet without a dust cloud. So birthed their entrance to deep space. Now they travel through systems hoping to find the answer to the first question, "why am I"?   
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
		margin: 10vw 0;

		@media only screen and (min-width: 1440px) {
			width: 80vw;
			margin-left: 10vw;
		}
	}

	section {
		border-bottom: var(--border);
		border-right: var(--border);
	}

	table {
		width: 100%;
		border-collapse: collapse;
		margin: 1rem 0;
	}

	td {
		padding: 0.4rem 0;
		border-bottom: 1px solid #383738;
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
