<script lang="ts">
  import type { Snippet } from 'svelte';
  import MermaidIcon from '~icons/custom/mermaid';

  interface Props {
    mobileToggle?: Snippet;
    children: Snippet;
  }

  let { children, mobileToggle }: Props = $props();
</script>

<header class="bg-bkg-1 relative z-20 flex h-14 items-center justify-between px-4">
  <div class="flex items-center gap-4">
    <a href="/" class="flex items-center gap-2" data-testid="header-home-link">
      <MermaidIcon class="h-9 w-9" />
      <div class="hidden text-lg font-bold sm:block">Live Editor</div>
    </a>
  </div>

  {#if mobileToggle}
    <div class="absolute left-1/2 -translate-x-1/2">
      {@render mobileToggle()}
    </div>
  {/if}

  <div class="flex items-center gap-4">
    {@render children()}
  </div>
</header>
