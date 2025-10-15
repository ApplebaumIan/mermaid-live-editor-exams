<script lang="ts">
  import Editor from '$/components/Editor.svelte';
  import History from '$/components/History/History.svelte';
  import Navbar from '$/components/Navbar.svelte';
  import PanZoomToolbar from '$/components/PanZoomToolbar.svelte';
  import SyncRoughToolbar from '$/components/SyncRoughToolbar.svelte';
  import * as Resizable from '$/components/ui/resizable';
  import { Switch } from '$/components/ui/switch';
  import { Toggle } from '$/components/ui/toggle';
  import VersionSecurityToolbar from '$/components/VersionSecurityToolbar.svelte';
  import View from '$/components/View.svelte';
  import { PanZoomState } from '$/util/panZoom';
  import { stateStore } from '$/util/state';
  import { logEvent } from '$/util/stats';
  import { initHandler } from '$/util/util';
  import { onMount } from 'svelte';
  import HistoryIcon from '~icons/material-symbols/history';

  const panZoomState = new PanZoomState();

  let width = $state(0);
  let isMobile = $derived(width < 640);
  let isViewMode = $state(false);

  onMount(async () => {
    await initHandler();
    window.addEventListener('appinstalled', () => {
      logEvent('pwaInstalled', { isMobile });
    });
  });

  let isHistoryOpen = $state(false);

  let editorPane: Resizable.Pane | undefined;
  $effect(() => {
    if (isMobile) {
      editorPane?.resize(50);
    }
  });
</script>

<div class="flex h-full flex-col overflow-hidden">
  {#snippet mobileToggle()}
    <div class="flex items-center gap-2">
      Edit
      <Switch
        id="editorMode"
        class="data-[state=checked]:bg-accent"
        bind:checked={isViewMode}
        onclick={() => {
          logEvent('mobileViewToggle');
        }} />
      View
    </div>
  {/snippet}

  <Navbar mobileToggle={isMobile ? mobileToggle : undefined}>
    <Toggle bind:pressed={isHistoryOpen} size="sm">
      <HistoryIcon />
    </Toggle>
  </Navbar>

  <div class="flex flex-1 flex-col overflow-hidden" bind:clientWidth={width}>
    <div
      class={[
        'size-full',
        isMobile && ['w-[200%] duration-300', isViewMode && '-translate-x-1/2']
      ]}>
      <Resizable.PaneGroup
        direction="horizontal"
        autoSaveId="liveEditor"
        class="gap-4 p-2 pt-0 sm:gap-0 sm:p-6 sm:pt-0">
        <Resizable.Pane bind:this={editorPane} defaultSize={30} minSize={15}>
          <div class="flex h-full flex-col gap-4 sm:gap-6">
            <Editor {isMobile} />
          </div>
        </Resizable.Pane>
        <Resizable.Handle class="mr-1 hidden opacity-0 sm:block" />
        <Resizable.Pane minSize={15} class="relative flex h-full flex-1 flex-col overflow-hidden">
          <View {panZoomState} shouldShowGrid={$stateStore.grid} />
          <div class="absolute top-0 right-0"><PanZoomToolbar {panZoomState} /></div>
          <div class="absolute right-0 bottom-0"><VersionSecurityToolbar /></div>
          <div class="absolute bottom-0 left-0 sm:left-5"><SyncRoughToolbar /></div>
        </Resizable.Pane>
        {#if isHistoryOpen}
          <Resizable.Handle class="ml-1 hidden opacity-0 sm:block" />
          <Resizable.Pane
            minSize={15}
            defaultSize={30}
            class="hidden h-full flex-grow flex-col sm:flex">
            <History />
          </Resizable.Pane>
        {/if}
      </Resizable.PaneGroup>
    </div>
  </div>
</div>
