<script lang="ts">
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import Autoplay from 'embla-carousel-autoplay';

	export let instagramPosts: any[] = [
		{
			image: '/images/gallery/image-1.png',
			alt: 'Gallery image 1'
		},
		{
			image: '/images/gallery/image-2.png',
			alt: 'Gallery image 1'
		},
		{
			image: '/images/gallery/image-3.png',
			alt: 'Gallery image 1'
		},
		{
			image: '/images/gallery/image-4.png',
			alt: 'Gallery image 1'
		},
		{
			image: '/images/gallery/image-5.png',
			alt: 'Gallery image 1'
		},
		{
			image: '/images/gallery/image-1.png',
			alt: 'Gallery image 1'
		}

	];

	const plugin = Autoplay({ delay: 2000, stopOnInteraction: true });
</script>

<section class="py-12">
	<div class="container mx-auto px-4">
		<h2 class="text-4xl font-playfair text-brand-burgundy mb-8 text-center">Event Highlights</h2>

		<Carousel.Root
			opts={{ align: 'start' }}
			plugins={[plugin]}
			class="w-full"
			on:mousenter={plugin.stop}
			on:mouseleave={plugin.reset}
		>
			<Carousel.Content>
				{#each instagramPosts as post}
					<Carousel.Item class="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
						<div class="relative aspect-square overflow-hidden">
							<a href={post.link} target="_blank">
								<img src={post.image} alt={post.description} class="h-full w-full object-cover" />
							<!-- <div class="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
								<p class="text-white text-center p-4">{post.description}</p>
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram text-white"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
							  </div> -->
							</a>
						</div>
					</Carousel.Item>
				{/each}
			</Carousel.Content>

			<Carousel.Previous class="ml-16 " />
			<Carousel.Next class="mr-16 " />
		</Carousel.Root>
	</div>
</section>
