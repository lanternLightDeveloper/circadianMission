<script>
	const species = {
		name: 'Elevant',
		base_Element: 'Storm',
		elemental_Weakness: 'Earth',

		baseStats: {
			Strength: '5/10',
			Agility: '7/10',
			Endurance: '5/10',
			Intellect: '6/10',
			Willpower: '6/10',
			CruxAffinity: '8/10'
		},

		innateModifiers: ['+1 Skill Point per Level', '+5% Nanite Efficiency'],

		resistances: {
			Mental: 'Moderate',
			Biological: 'High',
			Crux_Corruption: 'Low',
			Nanite_Overload: 'Moderate'
		},

		weaknesses: ['Increased earth damage received', 'Requires training to specialize'],

		movement: {
			Base_Speed: 'Fast',
			Teleportation: 'Natural element based',
			Environmental_Adaptation: 'Born from a variety of storms granting different resistances'
		},

		combatProfile: {
			Melee: 'Strong',
			Ranged: 'Moderate',
			Crux_Casting: 'Strong',
			Nanite_Manipulation: 'Low'
		},

		origin: {
			Homeworld: 'New Beliaat',
			Mythic_Origin: 'Chaos worshipers who believe destruction brought life',
			Historical_Notes: 'Climbed out of caves to evolve into heavy storms'
		},

		biology: {
			Structure: 'Humanoid with skin tinted a storm color',
			Sensory: 'Senses matching humans',
			Metabolism: 'Fast metabolism from high energy usage',
			Longevity: 'Human‑mirroring race with a 100‑year lifespan'
		},

		psychology: {
			Cognitive: 'Chaotic aggressive, even when happy',
			Behavioral: 'Not settled, needs to move around, anxious on the outside',
			Cultural: 'Generational differences based on the storm they were born in'
		},

		crux: {
			Mythic_View: 'Constant storms birthed a species who see chaos as the creator of all things',
			Channeling_Style: 'Natural extensions of the elements themselves',
			Risks: 'Can lose themselves to the chaos of battle and attack everything'
		},

		nanites: {
			Compatibility: 'Low compatibility due to chaotic biology',
			Unique_Traits: 'Resists both beneficial and harmful nanites'
		},

		society: {
			Governance: 'Chaotic — the strongest is the ruler',
			Economy: 'No formal economy; survival‑based resource competition',
			Religion: 'Storm Theory — existence is rooted in chaos'
		},

		tactics: {
			Strengths: 'Strong Crux affinity',
			Weaknesses: 'Weak to mental attacks due to chaotic nature',
			Common_Roles: 'Sorcerer, Barbarian, Warlock'
		},

		deepHistory: `
Born in a system of three suns, their homeworld is a planet of storms and unpredictability. They evolved from primates and hardly had a chance to live on the surface. They were almost extinct until they found vast underground caves. They moved underground to survive. The storms had made them vastly adaptive. They focused all of their energy on creating technology to help them return to the surface. Hundreds of years passed while they advanced to a point where moving back was within reach. What was on the surface was more chaotic than their ancestors wrote of. They pushed themselves to adapt further with magic, blending their species with the storms to save themselves from the chaos that constantly bombarded their planet.

Defensive technology blended with a need to adapt gave them different capabilities depending on the storm they were born in. These traits became genetic, passed down from generation to generation. Even children born on calm days would have the Raging Source in their veins. Nobody is sure if one of their scientists discovered the Prevailing Crux Theory or if being melded with the storms wired the knowledge into them.

As a collective, they did not turn violence inward when the planet itself seemed determined to kill them. The moment they could, they built a massive fleet of colony ships to take them to a new home. Leaving their storm‑ravaged world behind, they settled in a calmer single‑star system, allowing their population to grow beyond a few billion. Far from the chaos of their origin, their past shaped them into worshippers of chaos. They believe the explosion that began the universe should be upheld by the beings it created. Their need for each other to survive makes them great companions — even if they constantly try to convince you to destroy everything.
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
