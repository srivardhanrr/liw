<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';

	export let data;
    const caseStudies = data.caseStudies;
</script>

<svelte:head>
    <title>Leadership Innovation World | Case Studies</title>
    <meta name="description" content="Leadership Innovation World | Case Studies" />
</svelte:head>

<div class="container mx-auto py-8">
    <h1 class="mb-12 text-center text-4xl font-bold text-brand-burgundy md:text-5xl">Case Studies</h1>
</div>


<div class="flex justify-center bg-white">
	<div class="max-w-2xl w-full">
		{#if caseStudies.length > 0}
	  {#each caseStudies as study}
		<div class="mb-12 bg-white border-l-4 border-brand-gold pl-6 py-4">
		  <h3 class="text-2xl font-playfair font-bold mb-3 text-brand-burgundy">{study.title}</h3>
		  <p class="text-brand-charcoal mb-4 font-inter">{study.description}</p>
		  <a href="case-studies/{study.slug}">
		  <Button variant="outline" href={study.link} class="bg-transparent border-brand-burgundy text-brand-burgundy hover:bg-brand-burgundy hover:text-white transition-colors duration-300">
			Read More
		  </Button>
		</a>
		</div>
	  {/each}

	  {#if caseStudies.length === 1}
		<div class="mt-12 text-center">
		  <p class="text-brand-charcoal font-bricolage mb-4">More case studies coming soon.</p>
		  <Button variant="default" class="bg-brand-burgundy text-white hover:bg-opacity-90 transition-colors duration-300">
			Stay Updated
		  </Button>
		</div>
	  {/if}
	  {/if}
	</div>
  </div>