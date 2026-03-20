<script>
	const species = {
		name: 'Owliens',
		base_Element: 'Air',
		elemental_Weakness: 'Storm',

		baseStats: {
			Strength: '5/10',
			Agility: '8/10',
			Endurance: '5/10',
			Intellect: '7/10',
			Willpower: '6/10',
			CruxAffinity: '6/10'
		},

		innateModifiers: ['+1 Skill Point per Level', '+5% Travel Efficiency'],

		resistances: {
			Mental: 'High',
			Biological: 'Low',
			Crux_Corruption: 'Standard',
			Nanite_Overload: 'Standard'
		},

		weaknesses: ['Increased storm damage received', 'Gets lost in thought'],

		movement: {
			Base_Speed: 'High',
			Teleportation: 'Technological',
			Environmental_Adaptation: 'Temperature resistance within reasonable measure'
		},

		combatProfile: {
			Melee: 'Standard',
			Ranged: 'High',
			Crux_Casting: 'Standard',
			Nanite_Manipulation: 'Low'
		},

		origin: {
			Homeworld: "Klu'Ku'Coo",
			Mythic_Origin: 'Similar to humans in variety and religious diversity',
			Historical_Notes: 'Created brain‑implants as their computers, forming a techno‑focused race'
		},

		biology: {
			Structure: 'Owl‑like bird humanoids standing a few feet taller than average humans',
			Sensory: 'Keen vision and hearing make them highly perceptive',
			Metabolism: 'Carnivores',
			Longevity: 'Short lifespan; nanites have doubled it to ~70 years so far'
		},

		psychology: {
			Cognitive: 'Photographic memory as a species',
			Behavioral: 'High self‑belief and strong self‑control',
			Cultural_Variability: 'Extremely high — no universal norms'
		},

		crux: {
			Mythic_View: 'Technology‑based',
			Channeling_Style: 'Spoken, sound‑based',
			Risks: 'High corruption risk due to easy distraction'
		},

		nanites: {
			Compatibility: 'High',
			Unique_Traits: 'A technology‑based race that adapts quickly'
		},

		society: {
			Governance: 'Parliamentary — group‑based decision making',
			Economy: 'Money‑based economy',
			Religion: 'Many religions, none taken too seriously; philosophy dominates daily conversation'
		},

		tactics: {
			Strengths: 'Exceptional eyesight makes them highly effective ranged combatants',
			Weaknesses: 'Immobilization can stun them easily',
			Common_Roles: 'Marksman, Scout, Herbalist'
		},

		deepHistory: `
        Their home can be called a land of large things. Compared to earth, the flora and fauna never got the memo to get small. Evolving from a larger species with a 25 foot wingspan the Owliens lost some of their size as their brains evolved. Flying high above most life on their planet as the apex predator gave them time for more than hunting. Similar to humans in steps, first with fire then farming. Their cities cities grew in an expansive variety of elements from mountains that house millions of people to giant beach side cites. The apex predator grows only one enemy, each other. 

		Battles raged across the planet as different cultures claimed their religion or ideas the truth. This pushed them to constantly evolve their technology to overcome themselves in war. The Great Machine of Battle brings as much need for repair as is does blood. The strife produces great doctors and engineers to clean the messes of each bout of self inflicted chaos. A species that focused exclusively on technology they grew faster than their concept of connection. When a group of Owliens discovered the energy between all things they dashed to the stars to seek out a place to grow their culture and ideas. 

		Today they span a few systems in search of more. They found the battle in the cosmos that they grew up on at home.  The first was the Mycelians, a mushroom race of peaceful explorers. While the Mycelians defended themselves the lack of retaliation broke the Owliens aggressive blockade. Slow interactions and the cross culture parlay taught the Owliens about true community for the sense of each other. It was a bigger turning point for their society than The Prevailing Crux Theory, the idea that they did not have to kill for everything.  Now they seek more ways to be better than a force of attack.
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
