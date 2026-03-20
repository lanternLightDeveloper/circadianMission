<script>
	const species = {
		name: 'Oozonites',
		base_Element: 'Water',
		elemental_Weakness: 'Air',

		baseStats: {
			Strength: '8/10',
			Agility: '5/10',
			Endurance: '5/10',
			Intellect: '7/10',
			Willpower: '4/10',
			CruxAffinity: '7/10'
		},

		innateModifiers: ['+5 Profession Point per Level', '+5% Battle Efficiency'],

		resistances: {
			Mental: 'High',
			Biological: 'High',
			Crux_Corruption: 'Low',
			Nanite_Overload: 'Low'
		},

		weaknesses: ['Solar damage received', 'Storm damage received'],

		movement: {
			Speed: 'Standard',
			Teleportation: 'Technological',
			Environmental_Adaptation: 'Fluid body allows them to bypass most physical obstacles'
		},

		combatProfile: {
			Melee: 'Strong',
			Ranged: 'Balanced',
			Crux_Casting: 'Weak',
			Nanite_Manipulation: 'Balanced'
		},

		origin: {
			Homeworld: 'Sluuurb',
			Mythic_Origin:
				'The Ever‑Spilling Ooze — belief that the universe began as a puddle of energy',
			Historical_Notes:
				'Spread across planets inhospitable to humans, forming a vast culture without leaving their system'
		},

		biology: {
			Structure: 'Living human‑shaped ooze beings',
			Sensory: 'Similar to humans',
			Metabolism: 'Dissolves matter for energy',
			Longevity: 'Extremely long lifespan — some live for centuries'
		},

		psychology: {
			Cognitive: 'Hive mind',
			Behavioral: 'Unified actions and planning',
			Cultural: 'None — all ooze are uniform'
		},

		crux: {
			Mythic: 'War is purpose',
			Channeling: 'Technological',
			Risks: 'High heat and loss of self'
		},

		nanites: {
			Compatibility: 'Basic — prefer physical combat over nanite use',
			Unique_Traits: "Can control teammates' nanites"
		},

		society: {
			Governance: 'Hive mind',
			Economy: 'Resource‑hungry',
			Religion: 'The Great Ooze — destined to become the primordial ooze that created the universe'
		},

		tactics: {
			Strengths: 'Militant discipline and physical combat',
			Weaknesses: 'Nanite sensitivity and fragile sense of self',
			Common_Roles: 'Barbarian, Swordsman, Scout, Engineer'
		},

		deepHistory: `
        Hunger. Absolute unquenchable, bottomless never ending hunger. It consumed anything close. For thousand of years from an ocean planet with little land,  it fed until it was gigantic. Then there was no food that would come near it. So it tried to move and it was slow. The Hunger made it send out a little bit of itself and that part of it found food to bring home.  So it did it again and again. It learned that if it sent a large amounts of itself out in many different little pieces they always found the way back with more energy. 

		Life in the vast oceans began to evolve to escape the consuming abyss. It looked to land and feasted. It consumed the walking beasts and snatched the flying from the air that knew not what came for them. It did not feel wonder, happiness, sadness or questions. It only knew hunger. Then a bit of it brought back more than energy, it brought back a thought. Millions of years had passed before it questioned what it was hungry for. It sent bits of itself to find more of the delicious thing that tasted like question. It had a new very specific hunger for question. The villages of the early race of humanoids proved a feast of questions and learning. The taste of a body was divine so it began to mimic the food that made it more than just ooze. Every bit of it sent out now shapes a humanoid to fill the hunger for questions. Walking and learning to bring more information back to The Great Ooze. 

		The feast continued until it was the dominating force of the entire world absorbing everything from life to ideas. Now it asks it's own questions. Every Oozonite is an extension of the hive mind. They are a threat to all life, but not intentionally. They are hungry without the sense of aggression. It believes all life needs to be absorbed into The Great Ooze.  Every Oozonite you see is all part of one life form. Thousands of years of fighting to the top made this a war loving race who is stuck in constant consumption. While they seem like they are ready to fight always, its because they are. It is not from the sense that the other species do not deserve to live, but fighting to this species is how care is show. Not to hurt or kill, they love through attack.  To stand up to The Great Ooze is to show the hunger for life, and of all things, The Great Ooze knows hunger. 

		The Hunger taught The Great Ooze the idea of energy inside of matter. That energy spawned its concept of The Prevailing Crux Theory. The Great Ooze questioned space, so it sent out its Oozonites to find more questions. Evolved to survive in a block of ice it's bits are impervious to the harsh environment of space. Brand new to space the early contact with humans was met with combat. That combat grew to respect for such squishy meatbags that refused to die. Walking hairless apes that knew The Hunger just like The Great Ooze. It found family where it just seen food. 
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
