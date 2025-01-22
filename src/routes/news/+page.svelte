<script lang="ts">
	export let data;
    const posts = data.posts;
</script>

<svelte:head>
    <title>Leadership Innovation World | News</title>
    <meta name="description" content="Leadership Innovation World | News" />
</svelte:head>

<div class="container mx-auto py-8">
    <h1 class="mb-12 text-center text-4xl font-bold text-brand-burgundy md:text-5xl">News</h1>
</div>


{#if posts.length > 0}
	<section class="bg-white">
		<div class="container mx-auto px-4">
			<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
				{#each posts as post}
					<div class="overflow-hidden rounded-lg bg-white shadow-md">
						<div class="relative overflow-hidden">
							{#if post.image}
								<img
									src={post.image}
									alt={post.title}
									class="h-64 w-full transform object-cover transition-transform duration-300 ease-in-out hover:scale-110"
								/>
							{/if}
						</div>
						<div class="p-6">
							{#if post.title}
								<a class="text-brand-burgundy hover:underline" href="news/{post.slug}">
									<h3 class="mb-2 text-xl font-semibold">{post.title}</h3>
								</a>
							{/if}
							<p class="mb-4 text-gray-700">{post.description}</p>
							<a href="news/{post.slug}" class="text-brand-burgundy hover:underline"> Read More </a>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>
{/if}
