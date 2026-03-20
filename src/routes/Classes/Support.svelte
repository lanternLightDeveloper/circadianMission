<script lang="ts">
	import { Seer, Enchanter, Engineer } from '$lib/Classes/Support';

	const classes = { Seer, Enchanter, Engineer };
	let selected: keyof typeof classes = 'Seer';

	const classData = () => classes[selected];

	let open = {
		core: true,
		stats: true,
		weapons: true,
		abilities: true,
		passive: true,
		progression: true,
		specializations: true
	};
</script>

<h3 class="entry">Class:</h3>
<div class="class-tabs">
	{#each Object.keys(classes) as key (key)}
		<button on:click={() => (selected = key)} selected={selected === key}>
			{key}
		</button>
	{/each}
</div>
<div class="description">
	<h1>{classData().name}</h1>
	<p>Description: {classData().description}</p>
</div>

<section class="dropdown">
	<button class="dropdown-header" on:click={() => (open.core = !open.core)}>
		Core Identity
		<span>{open.core ? '▼' : '►'}</span>
	</button>

	{#if open.core}
		<div class="dropdown-content">
			<p>Role: {classData().coreIdentity.role}</p>
			<p>Armor: {classData().coreIdentity.armor}</p>
			<p>Combat Style: {classData().coreIdentity.combatStyle}</p>
			<p>Crux Use: {classData().coreIdentity.cruxUse}</p>
			<p>Nanite Use: {classData().coreIdentity.naniteUse}</p>
		</div>
	{/if}
</section>

<section class="dropdown">
	<button class="dropdown-header" on:click={() => (open.stats = !open.stats)}>
		Base Class Stats
		<span>{open.stats ? '▼' : '►'}</span>
	</button>

	{#if open.stats}
		<div class="dropdown-content">
			<p>Offense: {classData().baseStats.offense}/5</p>
			<p>Defense: {classData().baseStats.defense}/5</p>
			<p>Mobility: {classData().baseStats.mobility}/5</p>
			<p>Crux Interaction: {classData().baseStats.cruxInteraction}/5</p>
			<p>Nanite Synergy: {classData().baseStats.naniteSynergy}/5</p>
		</div>
	{/if}
</section>

<section class="dropdown">
	<button class="dropdown-header" on:click={() => (open.weapons = !open.weapons)}>
		Base weapons
		<span>{open.weapons ? '▼' : '►'}</span>
	</button>

	{#if open.weapons}
		<div class="dropdown-content">
			<h4>Main hand:</h4>
			<p>{classData().weapons.main_Hand}</p>
			<h4>Off hand:</h4>
			<p>{classData().weapons.off_Hand}</p>
		</div>
	{/if}
</section>

<section class="dropdown">
	<button class="dropdown-header" on:click={() => (open.passive = !open.passive)}>
		Class Passive
		<span>{open.passive ? '▼' : '►'}</span>
	</button>

	{#if open.passive}
		<div class="dropdown-content">
			<h3>{classData().passive.name}</h3>
			<p>{classData().passive.description}</p>
			{#each classData().passive.effects as effect (effect)}
				<p>- {effect}</p>
			{/each}
		</div>
	{/if}
</section>

<section class="dropdown">
	<button class="dropdown-header" on:click={() => (open.abilities = !open.abilities)}>
		Base Abilities
		<span>{open.abilities ? '▼' : '►'}</span>
	</button>

	{#if open.abilities}
		<div class="dropdown-content">
			<p>These are earned every three levels, so it would be 3, 6, 9, 12, 15 and so on.</p>
			{#each classData().baseAbilities as ability (ability.name)}
				<h3>{ability.name}</h3>
				<p>{ability.description}</p>
			{/each}
		</div>
	{/if}
</section>

<section class="dropdown">
	<button class="dropdown-header" on:click={() => (open.progression = !open.progression)}>
		Level Progression
		<span>{open.progression ? '▼' : '►'}</span>
	</button>

	{#if open.progression}
		<div class="dropdown-content">
			<p>
				Every ten levels you will get a choice of skills. At 10, 20 and 40 you will get ability
				choices while at level 30 you wil get a choice of class specialization
			</p>

			<h3>Level 1</h3>
			<p>{classData().progression.level1.name}</p>
			<p>{classData().progression.level1.description}</p>

			<h3>Level 10</h3>
			{#each classData().progression.level10.options as opt (opt.name)}
				<h4>{opt.name}</h4>
				<p>{opt.description}</p>
			{/each}

			<h3>Level 20</h3>
			{#each classData().progression.level20.options as opt (opt.name)}
				<h4>{opt.name}</h4>
				<p>{opt.description}</p>
			{/each}

			<h3>Level 30 – Specialization Choices</h3>
			{#each classData().progression.level30.specializationChoices as spec (spec)}
				<p>{spec}</p>
			{/each}
		</div>
	{/if}
</section>

<section class="dropdown" style="margin-bottom: 5rem;">
	<button class="dropdown-header" on:click={() => (open.specializations = !open.specializations)}>
		Specializations
		<span>{open.specializations ? '▼' : '►'}</span>
	</button>

	{#if open.specializations}
		<div class="dropdown-content">
			{#each Object.entries(classData().specializations) as [specName, spec] (specName)}
				<h3>{specName}</h3>

				<h4>Passive: {spec.passive.name}</h4>
				<p>{spec.passive.description}</p>
				{#each spec.passive.effects as effect (effect)}
					<p>- {effect}</p>
				{/each}

				<h4>Level 30 Ability</h4>
				<p>{spec.level30.name}</p>
				<p>{spec.level30.description}</p>

				<h4>Level 40 Options</h4>
				{#each spec.level40.options as opt (opt.name)}
					<h5>{opt.name}</h5>
					<p>{opt.description}</p>
				{/each}

				<h4>Level 50 Ultimate</h4>
				<p>{spec.level50.name}</p>
				<p>{spec.level50.description}</p>

				<hr />
			{/each}
		</div>
	{/if}
</section>

<style>
	.entry {
		margin: var(--size-7);
	}

	.class-tabs {
		display: flex;
		gap: 0.5rem;
		margin: 1rem;
	}

	.class-tabs button {
		padding: 0.5rem 1rem;
		border-radius: 6px;
		border: var(--border);
		background: var(--bg-2);
		color: var(--txt);
		cursor: pointer;
	}

	.class-tabs button[selected] {
		border-color: var(--accent-2);
		background: var(--hover);
		color: var(--txt);
		font-weight: bold;
	}

	.description {
		width: 70%;
		margin: 5% 15%;
	}

	.dropdown {
		border: var(--border);
		border-radius: 6px;
		margin: 1rem auto;
		overflow: hidden;
		width: 60%;
		max-width: 800px;
		min-width: 400px;
		gap: 0.5rem;
	}

	.dropdown-header {
		width: 100%;
		background: var(--bg-2);
		border: var(--border);
		padding: 0.75rem 1rem;
		cursor: pointer;
		font-weight: bold;
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #eee;
	}

	.dropdown-content {
		padding: 1rem;
	}

	h1,
	h3,
	h4,
	h5 {
		margin-top: 1rem;
	}

	p {
		margin: 0.25rem 0;
	}
</style>
