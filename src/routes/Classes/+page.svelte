<script lang="ts">
	import Caster from './Caster.svelte';
	import Healer from './Healer.svelte';
	import Martial from './Martial.svelte';
	import Stealth from './Stealth.svelte';
	import Support from './Support.svelte';

	let selected = $state<'caster' | 'healer' | 'martial' | 'stealth' | 'support' | null>(null);

	function select(tab: typeof selected) {
		selected = tab === selected ? null : tab;
	}
</script>

<h2>Class Homepage</h2>

<h3>Role:</h3>
<div class="class-tabs">
	<button class:selected={selected === 'caster'} onclick={() => select('caster')}> Caster </button>

	<button class:selected={selected === 'healer'} onclick={() => select('healer')}> Healer </button>

	<button class:selected={selected === 'martial'} onclick={() => select('martial')}>
		Martial
	</button>

	<button class:selected={selected === 'stealth'} onclick={() => select('stealth')}>
		Stealth
	</button>

	<button class:selected={selected === 'support'} onclick={() => select('support')}>
		Support
	</button>
</div>

{#if selected === 'caster'}
	<Caster />
{/if}

{#if selected === 'healer'}
	<Healer />
{/if}

{#if selected === 'martial'}
	<Martial />
{/if}

{#if selected === 'stealth'}
	<Stealth />
{/if}

{#if selected === 'support'}
	<Support />
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

	.class-tabs button.selected {
		border-color: var(--accent-2);
		background: var(--hover);
		color: var(--txt);
		font-weight: bold;
	}
</style>
