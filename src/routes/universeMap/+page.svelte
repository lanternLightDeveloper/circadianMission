<script lang="ts">
	import InnerCity from './InnerCity.svelte';
	import OuterCity from './OuterCity.svelte';
	import WildSpace from './WildSpace.svelte';

	let selected = $state<'innerCity' | 'outerCity' | 'wildSpace' | null>(null);

	function select(tab: typeof selected) {
		selected = tab === selected ? null : tab;
	}
</script>

<h3>Universe Map Homepage</h3>

<div class="class-tabs">
	<button class:selected={selected === 'innerCity'} onclick={() => select('innerCity')}>
		Inner City
	</button>

	<button class:selected={selected === 'outerCity'} onclick={() => select('outerCity')}>
		Outer City
	</button>

	<button class:selected={selected === 'wildSpace'} onclick={() => select('wildSpace')}>
		Wild Space
	</button>
</div>
{#if selected === 'innerCity'}
	<InnerCity />
{/if}

{#if selected === 'outerCity'}
	<OuterCity />
{/if}

{#if selected === 'wildSpace'}
	<WildSpace />
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
