<script lang="ts">
    import '../app.css';
    import {page} from "$app/stores";
    import LogoTransition from "$lib/components/LogoTransition.svelte";
    import {fly} from 'svelte/transition';
	import Header from '$lib/components/sections/Header.svelte';
	import Footer from '$lib/components/sections/Footer.svelte';
    import { browser } from '$app/environment'
    import { onMount, onDestroy } from 'svelte'
    import { initLenis, destroyLenis } from '$lib/lenis'

    onMount(() => {
        if (browser) {
            initLenis()
        }
    })

    onDestroy(() => {
        if (browser) {
            destroyLenis()
        }
    })
</script>

<div class="app">
    <Header/>
    <main>
        {#key $page.url.pathname}
            <div in:fly={{ y: 50, duration: 100, delay: 100 }}>
                <slot/>
            </div>
        {/key}
    </main>
    <Footer/>
</div>

<LogoTransition/>
