<script lang="ts">
    import * as Carousel from "$lib/components/ui/carousel";
    import {onMount} from 'svelte';

    let isMobile = false;

    onMount(() => {
        const checkMobile = () => {
            isMobile = window.innerWidth < 768;
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    });

    export let posts;

</script>

{#if posts.length > 0}
<section class=" bg-white">
    <div class="container mx-auto px-4">
        <div class="flex justify-between items-center mb-8">
            <h2 class="text-3xl lg:text-5xl text-brand-burgundy">Recent Posts</h2>
            <a href="/blogs" class="text-brand-burgundy hover:underline">View All</a>
        </div>

        {#if isMobile}
            <Carousel.Root opts={{ align: "start" }}>
                <Carousel.Content>
                    {#each posts.slice(0, 2) as post}
                        <Carousel.Item class="md:basis-1/2 lg:basis-1/3">
                            <div class="bg-white rounded-lg overflow-hidden">
                                {#if post.image}
                                <img
                                        src={post.image}
                                        alt={post.title}
                                        class="w-full h-64 object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
                                />
                                {/if}
                                <div class="p-4">
                                    {#if post.title}
                                        <a class="text-brand-burgundy hover:underline" href='blogs/{post.slug}'>
                                            <h3 class="text-xl font-semibold mb-2">{post.title}</h3>
                                        </a>
                                    {/if}
                                    <!-- <p class="text-sm text-gray-600 mb-2">by {post.author} on {post.date}</p> -->
                                    {#if post.description}
                                        <p class="text-gray-700 mb-4">{post.description}</p>
                                    {/if}
                                    <a href='blogs/{post.slug}'
                                       class="text-brand-burgundy hover:underline">
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </Carousel.Item>
                    {/each}
                </Carousel.Content>
                <Carousel.Previous class="ml-12"/>
                <Carousel.Next class="mr-12"/>
            </Carousel.Root>
            <div class="flex justify-center mt-4">
                <span class="h-2 w-2 rounded-full bg-gray-300 mx-1"></span>
                <span class="h-2 w-2 rounded-full bg-gray-800 mx-1"></span>
                <span class="h-2 w-2 rounded-full bg-gray-300 mx-1"></span>
            </div>
        {:else}
        <div class="grid grid-cols-1 mt-12 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {#each posts as post}
                    <div class="bg-white rounded-lg overflow-hidden shadow-md">
                        <div class="relative overflow-hidden">
                            {#if post.image}
                                <img
              src={post.image}
              alt={post.title}
              class="w-full h-64 object-cover transition-transform duration-300 ease-in-out transform hover:scale-110" />
            {/if}
          </div>
          <div class="p-6">
            {#if post.title}
            <a class="text-brand-burgundy hover:underline" href='blogs/{post.slug}'>
                <h3 class="text-xl font-semibold mb-2">{post.title}</h3>
            </a>
            {/if}
            <p class="text-gray-700 mb-4">{post.description}</p>
            <a href='blogs/{post.slug}' class="text-brand-burgundy hover:underline">
              Read More
            </a>
          </div>
        </div>
                {/each}
            </div>
        {/if}
    </div>
</section>
{/if}