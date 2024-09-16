<script lang="ts">
    import { onMount } from 'svelte';
    import { Mic, MicOff } from 'lucide-svelte';
  
    export let src: string;
    
    let video: HTMLVideoElement;
    let isMuted: boolean = true;
  
    onMount(() => {
      if (video) {
        video.muted = true;
      }
    });
  
    function toggleMute(): void {
      if (video) {
        video.muted = !video.muted;
        isMuted = video.muted;
      }
    }
  </script>
  
  <div class="relative">
    <video
      bind:this={video}
      class="w-full h-[500px]"
      autoplay
      loop
      playsinline
    >
      <source src={src} type="video/mp4">
      Your browser does not support the video tag.
    </video>
    
    <button
      on:click={toggleMute}
      class="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-300"
      aria-label={isMuted ? "Unmute video" : "Mute video"}
    >
      {#if isMuted}
        <MicOff class="w-6 h-6" />
      {:else}
        <Mic class="w-6 h-6" />
      {/if}
    </button>
  </div>
  