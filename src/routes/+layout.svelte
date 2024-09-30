<script lang="ts">
	import '../app.css';
	import type { Snippet } from 'svelte';
	import { ModeWatcher } from 'mode-watcher';

	type Props = {
		children: Snippet;
	};

	const { children }: Props = $props();
</script>

<ModeWatcher />

{@render children()}
