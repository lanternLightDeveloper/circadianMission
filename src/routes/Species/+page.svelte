<script lang="ts">
	import Elevant from './Elevant.svelte';
	import Human from './Humans.svelte';
	import Mycelians from './Mycelians.svelte';
	import Oozonites from './Oozonites.svelte';
	import Owliens from './Owliens.svelte';

	let selected = $state<'elevant' | 'human' | 'mycelian' | 'oozonite' | 'owlien' | null>(null);

	function select(tab: typeof selected) {
		selected = tab === selected ? null : tab;
	}
</script>

<h3>Species Homepage</h3>

<div class="class-tabs">
	<button class:selected={selected === 'elevant'} onclick={() => select('elevant')}>
		Elevant
	</button>

	<button class:selected={selected === 'human'} onclick={() => select('human')}> Human </button>

	<button class:selected={selected === 'mycelian'} onclick={() => select('mycelian')}>
		Mycelians
	</button>

	<button class:selected={selected === 'oozonite'} onclick={() => select('oozonite')}>
		Oozonites
	</button>

	<button class:selected={selected === 'owlien'} onclick={() => select('owlien')}> Owliens </button>
</div>
{#if selected === 'elevant'}
	<Elevant />
{/if}

{#if selected === 'human'}
	<Human />
{/if}

{#if selected === 'mycelian'}
	<Mycelians />
{/if}

{#if selected === 'oozonite'}
	<Oozonites />
{/if}

{#if selected === 'owlien'}
	<Owliens />
{/if}

<style>
	.class-tabs {
		display: flex;
		gap: 0.5rem;
		margin-bottom: 1rem;
	}

	.class-tabs button {
		padding: 0.5rem 1rem;
		border-radius: 6px;
		border: var(--border);
		background: var(--bg-2);
		color: var(--txt);
		cursor: pointer;
	}

	/* Highlighted / active tab */
	.class-tabs button.selected {
		border-color: var(--accent-2);
		background: var(--hover);
		color: var(--txt);
		font-weight: bold;
	}
</style>
